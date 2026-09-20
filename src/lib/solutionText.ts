// Thuần TypeScript, KHÔNG import React — file này được cả UI (SolutionDisplay) lẫn
// server (geminiMatch) dùng chung.

// Câu đánh dấu cố định của đợt cập nhật T&C bàn giao TTBH (19/09/2026) — nếu chính
// sách đổi và cần sửa lại câu nhắc trong dữ liệu, PHẢI đổi đúng 2 hằng số này cùng lúc,
// nếu không phần tách khối phụ sẽ không nhận diện được câu nhắc mới.
export const SCRIPT_NOTE_MARKER = 'Anh/chị nhớ giúp em backup dữ liệu';
export const TTBH_NOTE_MARKER = 'Trước khi gửi máy: nhắc khách tự backup dữ liệu';

const SCRIPT_SECTION_REGEX = /💬 KỊCH BẢN TƯ VẤN:\s*([\s\S]*?)\n\n📦 LƯU Ý TTBH:/;

/** Lấy phần "kịch bản chính" của mục thư viện: nội dung giữa `💬 KỊCH BẢN TƯ VẤN:` và
 *  `📦 LƯU Ý TTBH:`, bỏ cặp ngoặc kép bao ngoài, và CẮT từ SCRIPT_NOTE_MARKER trở đi
 *  (câu nhắc backup/miễn trừ là ngôn ngữ chính sách, AI không được diễn đạt lại). */
export function extractScriptMain(solution: string): string | null {
  const m = solution.match(SCRIPT_SECTION_REGEX);
  if (!m) return null;

  const full = m[1].trim().replace(/^"([\s\S]*)"$/, '$1');
  const idx = full.indexOf(SCRIPT_NOTE_MARKER);
  const main = (idx === -1 ? full : full.slice(0, idx)).trim();

  return main || null;
}
