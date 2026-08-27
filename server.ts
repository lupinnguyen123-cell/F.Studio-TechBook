import "dotenv/config";
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { createServer as createViteServer } from "vite";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import compression from "compression";
import { analyzeWithGemini } from "./src/server/geminiAnalysis";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const geminiApiKey = process.env.GEMINI_API_KEY || "";

async function startServer() {
  const app = express();

  // High-performance optimizations
  app.use(compression()); // Compress all responses for mobile performance
  app.use(express.json({ limit: "50kb" }));

  const httpServer = createServer(app);
  const io = new Server(httpServer, {
    cors: {
      origin: "*",
    },
  });

  const PORT = 3000;

  // Presence state: brandId -> count
  const brandPresence: Record<string, number> = {
    Apple: 0,
    Garmin: 0,
    Android: 0,
    Home: 0,
  };

  let globalOnline = 0;

  io.on("connection", (socket) => {
    globalOnline++;
    let currentRoom = "Home";
    brandPresence[currentRoom]++;
    socket.join(currentRoom);
    io.emit("presence_update", { brandPresence, globalOnline });

    socket.on("join_brand", (brandId: string) => {
      socket.leave(currentRoom);
      brandPresence[currentRoom] = Math.max(0, brandPresence[currentRoom] - 1);
      
      currentRoom = brandId;
      if (!brandPresence[currentRoom]) brandPresence[currentRoom] = 0;
      brandPresence[currentRoom]++;
      socket.join(currentRoom);
      
      io.emit("presence_update", { brandPresence, globalOnline });
    });

    socket.on("disconnect", () => {
      globalOnline = Math.max(0, globalOnline - 1);
      brandPresence[currentRoom] = Math.max(0, brandPresence[currentRoom] - 1);
      io.emit("presence_update", { brandPresence, globalOnline });
    });
  });

  // API routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", time: new Date().toISOString(), aiConfigured: !!geminiApiKey });
  });

  app.post("/api/analyze", async (req, res) => {
    const { brandId, errorDescription } = req.body ?? {};
    const result = await analyzeWithGemini(geminiApiKey, brandId, errorDescription);

    if (!result.ok) {
      return res.status(result.status).json({ error: result.error });
    }
    res.json({ result: result.result });
  });

  app.get(["/api/download-zip", "/so-tay-ky-thuat.zip"], (req, res) => {
    const publicZip = path.join(process.cwd(), "public", "so-tay-ky-thuat.zip");
    const distZip = path.join(process.cwd(), "dist", "so-tay-ky-thuat.zip");
    
    let zipPath: string | null = null;
    if (fs.existsSync(publicZip)) {
      zipPath = publicZip;
    } else if (fs.existsSync(distZip)) {
      zipPath = distZip;
    }

    if (zipPath) {
      res.setHeader("Content-Type", "application/zip");
      res.setHeader("Content-Disposition", 'attachment; filename="so-tay-ky-thuat.zip"');
      res.sendFile(zipPath);
    } else {
      res.status(404).send("File ZIP không tồn tại");
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, "dist");
    
    // Serve static files with optimized caching
    app.use(express.static(distPath, {
      maxAge: '1y', // Cache assets for 1 year (Vite versioned files)
      index: false
    }));
    
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"), {
        maxAge: '0' // Don't cache index.html to ensure users get latest code
      });
    });
  }

  httpServer.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
