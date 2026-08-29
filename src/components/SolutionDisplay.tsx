import { useMemo, useState } from 'react';
import { Search, Wrench, Ban, MessageSquareQuote, Package, Copy, Check, ShieldAlert } from 'lucide-react';

interface ParsedSolution {
  chanDoan: string;
  huongDan: string[];
  khongDuocLam: string;
  kichBan: string;
  ttbh: string;
}

const SOLUTION_REGEX =
  /🔍 CHẨN ĐOÁN:\s*([\s\S]*?)\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\s*([\s\S]*?)\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM:\s*([\s\S]*?)\n\n💬 KỊCH BẢN TƯ VẤN:\s*([\s\S]*?)\n\n📦 LƯU Ý TTBH:\s*([\s\S]*)$/;

// Đã đối chiếu với toàn bộ 134 mục trong constants.ts: 4 từ khóa này bắt đủ 6 mục
// liên quan an toàn (pin phồng, vào nước, mùi khét) — các mục pin phồng đều có sẵn
// "NGỪNG SỬ DỤNG"/"CHÁY NỔ" trong nội dung nên không cần thêm từ khóa "PIN PHỒNG".
const SAFETY_KEYWORDS = ['AN TOÀN CẦN ƯU TIÊN', 'NGỪNG SỬ DỤNG', 'CHÁY NỔ', 'MÙI KHÉT'];

function parseSolution(text: string): ParsedSolution | null {
  const m = text.match(SOLUTION_REGEX);
  if (!m) return null;
  const [, chanDoan, huongDanRaw, khongDuocLam, kichBanRaw, ttbh] = m;
  const huongDan = huongDanRaw
    .split(/\n(?=\d+\.\s)/)
    .map((s) => s.replace(/^\d+\.\s*/, '').trim())
    .filter(Boolean);
  const kichBan = kichBanRaw.trim().replace(/^"([\s\S]*)"$/, '$1');
  return { chanDoan: chanDoan.trim(), huongDan, khongDuocLam: khongDuocLam.trim(), kichBan, ttbh: ttbh.trim() };
}

function isSafetyCritical(text: string) {
  const upper = text.toUpperCase();
  return SAFETY_KEYWORDS.some((k) => upper.includes(k));
}

// Heuristic dựa trên cách viết thực tế trong constants.ts — không cần chính xác 100%,
// chỉ là gợi ý màu sắc nhanh cho nhân viên, không ảnh hưởng logic nghiệp vụ.
// Lưu ý thứ tự: kiểm tra "không gửi TTBH" TRƯỚC "gửi TTBH", vì chuỗi phủ định chứa
// luôn chuỗi khẳng định — đảo lại sẽ tô cam nhầm cho ca xử lý được tại chỗ.
function ttbhTone(ttbhText: string): 'resolved' | 'send' | 'neutral' {
  const t = ttbhText.toLowerCase();
  const resolvedHints = [
    'không gửi ttbh',
    'không cần gửi ttbh',
    'không thuộc phạm vi ttbh',
    'không thuộc diện bảo hành',
    'xử lý tại chỗ',
  ];
  const sendHints = ['gửi ttbh', 'trung tâm bảo hành', 'nhận bảo hành', 'gửi bảo hành'];
  if (resolvedHints.some((k) => t.includes(k))) return 'resolved';
  if (sendHints.some((k) => t.includes(k))) return 'send';
  return 'neutral';
}

export function SolutionDisplay({ content, accentColor = '#137fec' }: { content: string; accentColor?: string }) {
  const parsed = useMemo(() => parseSolution(content), [content]);
  const [copied, setCopied] = useState(false);

  if (!parsed) {
    // Fallback: nội dung không khớp khuôn 5 phần (thường là câu trả lời tự do của AI) —
    // giữ nguyên cách hiển thị cũ, không được để trắng màn hình hay lỗi.
    return (
      <div className="text-sm text-[#1d1d1f] dark:text-slate-300 leading-relaxed whitespace-pre-wrap">
        {content}
      </div>
    );
  }

  const safety = isSafetyCritical(content);
  const tone = ttbhTone(parsed.ttbh);
  const toneClasses =
    tone === 'resolved'
      ? { border: 'border-emerald-500/30', bg: 'bg-emerald-500/10', text: 'text-emerald-600 dark:text-emerald-500' }
      : tone === 'send'
        ? { border: 'border-amber-500/30', bg: 'bg-amber-500/10', text: 'text-amber-600 dark:text-amber-500' }
        : {
            border: 'border-[#d2d2d7] dark:border-slate-800',
            bg: 'bg-[#f5f5f7] dark:bg-slate-800/50',
            text: 'text-[#6e6e73] dark:text-slate-400',
          };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(parsed.kichBan);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Bỏ qua nếu trình duyệt chặn quyền clipboard — không cần báo lỗi cho nhân viên.
    }
  };

  return (
    <div className="space-y-3">
      {safety && (
        <div className="flex items-start gap-3 p-4 rounded-xl border-2 border-red-500 bg-red-500/10 shadow-lg shadow-red-500/10">
          <ShieldAlert size={22} className="text-red-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-black text-red-500 uppercase tracking-wide">Cảnh báo an toàn</p>
            <p className="text-xs text-red-600 dark:text-red-400 mt-0.5">
              Đọc kỹ mục "Không được làm" bên dưới trước khi thao tác.
            </p>
          </div>
        </div>
      )}

      <div className="p-4 rounded-xl border border-sky-500/20 bg-sky-500/5">
        <div className="flex items-center gap-2 mb-2">
          <Search size={16} className="text-sky-600 dark:text-sky-500 shrink-0" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-sky-600 dark:text-sky-500">Chẩn đoán</span>
        </div>
        <p className="text-sm text-[#1d1d1f] dark:text-slate-300 leading-relaxed">{parsed.chanDoan}</p>
      </div>

      <div className="p-4 rounded-xl border" style={{ borderColor: `${accentColor}33`, backgroundColor: `${accentColor}0d` }}>
        <div className="flex items-center gap-2 mb-3">
          <Wrench size={16} style={{ color: accentColor }} className="shrink-0" />
          <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: accentColor }}>
            Hướng dẫn xử lý
          </span>
        </div>
        <ol className="space-y-2.5">
          {parsed.huongDan.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className="size-5 rounded-full flex items-center justify-center text-[11px] font-bold text-white shrink-0 mt-0.5"
                style={{ backgroundColor: accentColor }}
              >
                {i + 1}
              </span>
              <span className="text-sm text-[#1d1d1f] dark:text-slate-300 leading-relaxed">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="p-4 rounded-xl border border-red-500/30 bg-red-500/10">
        <div className="flex items-center gap-2 mb-2">
          <Ban size={16} className="text-red-500 shrink-0" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-red-500">Không được làm</span>
        </div>
        <p className="text-sm font-semibold text-red-700 dark:text-red-400 leading-relaxed">{parsed.khongDuocLam}</p>
      </div>

      <div className="p-4 rounded-xl border border-violet-500/20 bg-violet-500/5">
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2 min-w-0">
            <MessageSquareQuote size={16} className="text-violet-600 dark:text-violet-500 shrink-0" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-violet-600 dark:text-violet-500">
              Kịch bản tư vấn
            </span>
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-violet-600 dark:text-violet-500 hover:text-violet-700 dark:hover:text-violet-400 transition-colors shrink-0"
            title="Copy câu tư vấn"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? 'Đã copy' : 'Copy'}
          </button>
        </div>
        <p className="text-sm italic text-[#1d1d1f] dark:text-slate-300 leading-relaxed border-l-2 border-violet-500/40 pl-3">
          "{parsed.kichBan}"
        </p>
      </div>

      <div className={`p-4 rounded-xl border ${toneClasses.border} ${toneClasses.bg}`}>
        <div className="flex items-center gap-2 mb-2">
          <Package size={16} className={`${toneClasses.text} shrink-0`} />
          <span className={`text-[11px] font-bold uppercase tracking-widest ${toneClasses.text}`}>Lưu ý TTBH</span>
        </div>
        <p className="text-sm text-[#1d1d1f] dark:text-slate-300 leading-relaxed">{parsed.ttbh}</p>
      </div>
    </div>
  );
}
