import { GoogleGenAI } from '@google/genai';
import { BRANDS } from '../constants';

export const GEMINI_MODEL = 'gemini-3-flash-preview';
export const MAX_ERROR_DESCRIPTION_LENGTH = 4000;

export type AnalyzeResult = { ok: true; result: string } | { ok: false; status: number; error: string };

function buildSystemInstruction(brandName: string): string {
  return `Bạn là chuyên gia kỹ thuật ${brandName}. Hãy hướng dẫn nhân viên cửa hàng TỰ XỬ LÝ TẠI CHỖ cho khách, hạn chế tối đa việc gửi máy về TTBH.

Nội dung phản hồi (ngắn gọn, tự nhiên, chuyên nghiệp):
1. 🔍 CHẨN ĐOÁN & LOẠI TRỪ: Cách xác định lỗi nhanh. HẠN CHẾ kết luận ngay là lỗi phần cứng, ưu tiên phần mềm/xung đột.
2. ⚡ XỬ LÝ TẠI CHỖ: Các bước phần mềm (reset, cài đặt) hoặc thao tác nhanh.
3. 💬 KỊCH BẢN TƯ VẤN & GIẢI THÍCH:
   - Giải thích tình trạng máy dễ hiểu.
   - Kịch bản tiếp nhận chuyên nghiệp.
   - Trấn an khách hàng.
4. 📦 LƯU Ý KHI GỬI TTBH: Dấu hiệu bắt buộc gửi máy và lưu ý khi lập phiếu.

⚠️ QUY TẮC: TUYỆT ĐỐI KHÔNG dùng dấu sao (*). Dùng Emoji ✅, 📍, ⚙️. VIẾT HOA từ khóa. Ngôn ngữ tự nhiên.`;
}

export async function analyzeWithGemini(apiKey: string, brandId: unknown, errorDescription: unknown): Promise<AnalyzeResult> {
  if (typeof errorDescription !== 'string' || !errorDescription.trim()) {
    return { ok: false, status: 400, error: 'Vui lòng nhập mô tả lỗi.' };
  }
  if (errorDescription.length > MAX_ERROR_DESCRIPTION_LENGTH) {
    return { ok: false, status: 400, error: 'Mô tả lỗi quá dài.' };
  }

  const brand = BRANDS.find((b) => b.id === brandId);
  if (!brand) {
    return { ok: false, status: 400, error: 'Thương hiệu không hợp lệ.' };
  }

  if (!apiKey) {
    return { ok: false, status: 503, error: 'Lỗi xác thực: API Key chưa được cấu hình trên máy chủ.' };
  }

  try {
    const genAI = new GoogleGenAI({ apiKey });
    const response = await genAI.models.generateContent({
      model: GEMINI_MODEL,
      contents: { parts: [{ text: errorDescription }] },
      config: { systemInstruction: buildSystemInstruction(brand.name) },
    });

    const resultText = response.text || 'Không thể phân tích lỗi vào lúc này.';
    return { ok: true, result: resultText };
  } catch (error: any) {
    console.error('AI Analysis Error:', error);
    const message = String(error?.message || '');

    if (message.includes('SAFETY')) {
      return { ok: false, status: 500, error: 'Nội dung bị chặn do quy tắc an toàn. Vui lòng điều chỉnh mô tả lỗi.' };
    }
    if (message.includes('RESOURCE_EXHAUSTED') || message.includes('429')) {
      return { ok: false, status: 429, error: 'Đã đạt giới hạn số lượt gọi AI (rate limit). Vui lòng đợi một chút rồi thử lại.' };
    }
    if (message.includes('API_KEY_INVALID') || message.includes('PERMISSION_DENIED') || message.includes('401') || message.includes('403')) {
      return { ok: false, status: 401, error: 'API Key không hợp lệ hoặc đã bị thu hồi. Vui lòng kiểm tra lại cấu hình.' };
    }
    if (message.includes('UNAVAILABLE') || message.includes('503') || message.includes('DEADLINE_EXCEEDED')) {
      return { ok: false, status: 503, error: 'Dịch vụ Gemini đang quá tải hoặc phản hồi chậm. Vui lòng thử lại sau ít phút.' };
    }

    return { ok: false, status: 500, error: 'Đã có lỗi xảy ra trong quá trình phân tích. Vui lòng thử lại sau.' };
  }
}
