import React, { useMemo, useState } from 'react';
import {
  Search,
  Wrench,
  Ban,
  MessageSquareQuote,
  Package,
  Copy,
  Check,
  ShieldAlert,
  ChevronRight,
  Watch,
  Headphones,
  Tablet,
  Laptop,
  Bike,
  Smartphone,
} from 'lucide-react';

interface ParsedSolution {
  chanDoan: string;
  huongDan: string[];
  khongDuocLam: string;
  kichBanMain: string;
  kichBanNote?: string;
  ttbhMain: string;
  ttbhNote?: string;
}

const SOLUTION_REGEX =
  /🔍 CHẨN ĐOÁN:\s*([\s\S]*?)\n\n🛠️ HƯỚNG DẪN XỬ LÝ:\s*([\s\S]*?)\n\n🚫 TUYỆT ĐỐI KHÔNG ĐƯỢC LÀM:\s*([\s\S]*?)\n\n💬 KỊCH BẢN TƯ VẤN:\s*([\s\S]*?)\n\n📦 LƯU Ý TTBH:\s*([\s\S]*)$/;

// Đã đối chiếu với toàn bộ thư viện: 4 từ khóa này bắt đủ các mục liên quan an toàn
// (pin phồng, vào nước, mùi khét) — các mục pin phồng đều có sẵn "NGỪNG SỬ DỤNG"/
// "CHÁY NỔ" trong nội dung nên không cần thêm từ khóa "PIN PHỒNG".
const SAFETY_KEYWORDS = ['AN TOÀN CẦN ƯU TIÊN', 'NGỪNG SỬ DỤNG', 'CHÁY NỔ', 'MÙI KHÉT'];

// Câu đánh dấu cố định của đợt cập nhật T&C bàn giao TTBH (19/09/2026) — nếu chính
// sách đổi và cần sửa lại câu nhắc trong dữ liệu, PHẢI đổi đúng 2 hằng số này cùng lúc,
// nếu không phần tách khối phụ sẽ không nhận diện được câu nhắc mới.
const SCRIPT_NOTE_MARKER = 'Anh/chị nhớ giúp em backup dữ liệu';
const TTBH_NOTE_MARKER = 'Trước khi gửi máy: nhắc khách tự backup dữ liệu';

function splitNote(text: string, marker: string): { main: string; note?: string } {
  const idx = text.indexOf(marker);
  if (idx === -1) return { main: text };
  return { main: text.slice(0, idx).trim(), note: text.slice(idx).trim() };
}

function parseSolution(text: string): ParsedSolution | null {
  const m = text.match(SOLUTION_REGEX);
  if (!m) return null;
  const [, chanDoan, huongDanRaw, khongDuocLam, kichBanRaw, ttbhRaw] = m;
  const huongDan = huongDanRaw
    .split(/\n(?=\d+\.\s)/)
    .map((s) => s.replace(/^\d+\.\s*/, '').trim())
    .filter(Boolean);
  const kichBanFull = kichBanRaw.trim().replace(/^"([\s\S]*)"$/, '$1');
  const { main: kichBanMain, note: kichBanNote } = splitNote(kichBanFull, SCRIPT_NOTE_MARKER);
  const { main: ttbhMain, note: ttbhNote } = splitNote(ttbhRaw.trim(), TTBH_NOTE_MARKER);
  return {
    chanDoan: chanDoan.trim(),
    huongDan,
    khongDuocLam: khongDuocLam.trim(),
    kichBanMain,
    kichBanNote,
    ttbhMain,
    ttbhNote,
  };
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

// Icon nhỏ theo loại thiết bị — chỉ để nhận diện nhanh bằng mắt, không thay chữ.
// So khớp theo chuỗi con, không phân biệt hoa/thường, dựa trên các giá trị `device`
// thực tế đang dùng trong constants.ts. Nếu thêm hãng/thiết bị mới về sau mà không
// khớp điều kiện nào, sẽ tự rơi về Smartphone (mặc định) — không lỗi.
function getDeviceIcon(device?: string) {
  if (!device) return null;
  const d = device.toLowerCase();
  if (d.includes('watch') || d.includes('đồng hồ')) return Watch;
  if (d.includes('airpods') || d.includes('tai nghe')) return Headphones;
  if (d.includes('ipad') || d.includes('tablet')) return Tablet;
  if (d.includes('mac') || d.includes('laptop')) return Laptop;
  if (d.includes('edge') || d.includes('xe đạp')) return Bike;
  // iPhone, Samsung, Xiaomi, Oppo, Vivo, Pixel, "Chung (mọi hãng)"... đều rơi về
  // icon điện thoại làm mặc định.
  return Smartphone;
}

// --- Bôi đậm từ khóa quan trọng để nhân viên quét mắt nhanh hơn: số + đơn vị thời
// gian/tỷ lệ, và một số cụm cố định về trách nhiệm/bảo hành hay lặp trong thư viện.
// Chỉ áp dụng bold, không đổi nghĩa/nội dung câu chữ.
function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const HIGHLIGHT_PHRASES = [
  'miễn trừ trách nhiệm',
  'không chịu trách nhiệm',
  'không cam kết giữ nguyên hiện trạng',
  'không được bảo hành miễn phí',
  'không có bảo hành',
];

// Chỉ đúng 1 nhóm bắt (capturing group) — split() nhờ vậy trả về các phần khớp ở vị
// trí lẻ, renderHighlighted dựa vào điều này để biết phần nào cần bôi đậm.
// Phần số có nhận cả KHOẢNG ("1-2 phút", "24-48 giờ", "30–45 phút"): thư viện dùng
// khoảng rất nhiều, nếu chỉ bắt số đơn thì chỉ bôi được vế sau ("1-**2 phút**") —
// nhân viên quét mắt sẽ đọc nhầm thành "2 phút".
const HIGHLIGHT_REGEX = new RegExp(
  '(' +
    [
      '\\d+(?:[.,]\\d+)?(?:\\s?[-–]\\s?\\d+(?:[.,]\\d+)?)?\\s?(?:ngày|giờ|phút|%|lần|năm|tháng)',
      ...HIGHLIGHT_PHRASES.map(escapeRegExp),
    ].join('|') +
    ')',
  'gi'
);

function renderHighlighted(text: string, keyPrefix: string): React.ReactNode {
  const parts = text.split(HIGHLIGHT_REGEX);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={`${keyPrefix}-${i}`} className="font-bold">
        {part}
      </strong>
    ) : (
      <React.Fragment key={`${keyPrefix}-${i}`}>{part}</React.Fragment>
    )
  );
}

// Khối phụ thu gọn — dùng cho câu nhắc chuẩn dùng chung (bàn giao TTBH) đã tách ra
// khỏi câu chính, để không làm dài thẻ chính nhưng vẫn xem đầy đủ được khi cần.
// Dùng <details>/<summary> gốc của HTML: không cần state React. `list-none` chỉ ẩn
// mũi tên mặc định trên Chrome/Firefox — Safari/iOS dùng ::-webkit-details-marker nên
// phải ẩn riêng, nếu không trên iPhone sẽ hiện 2 mũi tên chồng nhau.
function CollapsibleNote({ label, text }: { label: string; text: string }) {
  return (
    <details className="group mt-2.5">
      <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden text-[11px] font-semibold text-[#6e6e73] dark:text-slate-400 hover:text-[#1d1d1f] dark:hover:text-slate-200 transition-colors flex items-center gap-1 select-none">
        <ChevronRight size={12} className="shrink-0 transition-transform group-open:rotate-90" />
        {label}
      </summary>
      <p className="mt-1.5 pl-4 text-xs text-[#6e6e73] dark:text-slate-400 leading-relaxed border-l-2 border-[#d2d2d7] dark:border-slate-700">
        {renderHighlighted(text, 'note')}
      </p>
    </details>
  );
}

export function SolutionDisplay({
  content,
  accentColor = '#137fec',
  device,
}: {
  content: string;
  accentColor?: string;
  device?: string;
}) {
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
  const tone = ttbhTone(parsed.ttbhMain);
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

  const DeviceIcon = getDeviceIcon(device);

  const handleCopy = async () => {
    try {
      // Copy đủ cả câu chính + câu nhắc phụ (nếu có) — nhân viên dán ra dùng vẫn đủ ý,
      // chỉ riêng phần HIỂN THỊ là được tách gọn, nội dung copy không mất thông tin.
      const fullScript = parsed.kichBanNote ? `${parsed.kichBanMain} ${parsed.kichBanNote}` : parsed.kichBanMain;
      await navigator.clipboard.writeText(fullScript);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Bỏ qua nếu trình duyệt chặn quyền clipboard — không cần báo lỗi cho nhân viên.
    }
  };

  return (
    <div className="space-y-3">
      {device && (
        <div className="flex items-center gap-1.5 min-w-0">
          <span className="flex items-center justify-center size-6 rounded-full bg-[#f5f5f7] dark:bg-slate-800 text-[#6e6e73] dark:text-slate-400 shrink-0">
            {DeviceIcon && <DeviceIcon size={13} />}
          </span>
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#6e6e73] dark:text-slate-400 truncate">
            {device}
          </span>
        </div>
      )}

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
        <p className="text-sm text-[#1d1d1f] dark:text-slate-300 leading-relaxed">
          {renderHighlighted(parsed.chanDoan, 'chandoan')}
        </p>
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
              <span className="text-sm text-[#1d1d1f] dark:text-slate-300 leading-relaxed">
                {renderHighlighted(step, `step-${i}`)}
              </span>
            </li>
          ))}
        </ol>
      </div>

      <div className="p-4 rounded-xl border border-red-500/30 bg-red-500/10">
        <div className="flex items-center gap-2 mb-2">
          <Ban size={16} className="text-red-500 shrink-0" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-red-500">Không được làm</span>
        </div>
        <p className="text-sm font-semibold text-red-700 dark:text-red-400 leading-relaxed">
          {renderHighlighted(parsed.khongDuocLam, 'khongduoclam')}
        </p>
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
          "{renderHighlighted(parsed.kichBanMain, 'kichban')}"
        </p>
        {parsed.kichBanNote && (
          <CollapsibleNote label="Câu nhắc khách trước khi gửi máy (bấm để xem)" text={parsed.kichBanNote} />
        )}
      </div>

      <div className={`p-4 rounded-xl border ${toneClasses.border} ${toneClasses.bg}`}>
        <div className="flex items-center gap-2 mb-2">
          <Package size={16} className={`${toneClasses.text} shrink-0`} />
          <span className={`text-[11px] font-bold uppercase tracking-widest ${toneClasses.text}`}>Lưu ý TTBH</span>
        </div>
        <p className="text-sm text-[#1d1d1f] dark:text-slate-300 leading-relaxed">
          {renderHighlighted(parsed.ttbhMain, 'ttbh')}
        </p>
        {parsed.ttbhNote && (
          <CollapsibleNote label="Quy trình bàn giao TTBH chuẩn (bấm để xem)" text={parsed.ttbhNote} />
        )}
      </div>
    </div>
  );
}
