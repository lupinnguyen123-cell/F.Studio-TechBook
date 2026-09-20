export type Brand = 'Apple' | 'Garmin' | 'Android';

export interface ScriptItem {
  id: string;
  label: string;
  text: string;
  type: 'premium' | 'standard';
}

export interface ProcessItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface KnowledgeItem {
  id: string;
  device: string;
  symptom: string;
  diagnosis: string;
  solution: string;
  keywords: string[];
}

// Nguồn của kết quả hiển thị cho nhân viên: 'library' = lấy nguyên từ thư viện tĩnh
// đã kiểm duyệt, 'ai' = do Gemini sinh ra (chỉ nên dùng tham khảo).
export type ResultSource = 'library' | 'ai';

export interface LibraryEntry extends KnowledgeItem {
  brandId: Brand;
  brandName: string;
  brandColor: string;
}

// Hướng dẫn cài demo — quy trình thao tác nhiều bước (khác thư viện lỗi:
// không có "chẩn đoán"/"kịch bản tư vấn", chỉ có bước thao tác theo thứ tự).
export interface DemoGuideStepGroup {
  label?: string;
  items: string[];
}

export interface DemoGuideCase {
  situation: string;
  items: string[];
}

export interface DemoGuideSection {
  id: string;
  kind: 'install' | 'remove' | 'troubleshoot';
  title: string;
  requirements?: string[];
  stepGroups?: DemoGuideStepGroup[];
  cases?: DemoGuideCase[];
  doNots?: string[];
  note?: string;
}

export interface DemoGuideDevice {
  id: string;
  name: string;
  sections: DemoGuideSection[];
}

export interface BrandDetail {
  id: Brand;
  name: string;
  subtitle: string;
  gradient: string;
  accentColor: string;
  textColor: string;
  scripts: ScriptItem[];
  processes: ProcessItem[];
  dynamicWarnings?: { keywords: string[], message: string }[];
  library?: KnowledgeItem[];
  demoGuide?: DemoGuideDevice[];
}

// --- Luồng "AI chọn mục thư viện" (/api/match) ---
// AI chỉ CHỌN id trong thư viện đã duyệt, không tự viết nội dung xử lý. Server kiểm
// tra lại toàn bộ đầu ra của model trước khi trả về (id có thật, ≤3 mục, script đạt
// kiểm duyệt) — client không cần tin model.
export type MatchConfidence = 'high' | 'medium' | 'low';

export interface MatchItem {
  id: string;             // chắc chắn tồn tại trong thư viện của hãng (server đã kiểm tra)
  confidence: MatchConfidence;
  reason: string;         // ≤ 120 ký tự, vì sao mục này khớp
}

export interface MatchResponse {
  verdict: 'found' | 'none';
  matches: MatchItem[];   // 0..3, đã xếp hạng
  script: string | null;  // 1–2 câu AI chỉnh, chỉ dành cho matches[0]; null nếu không đạt kiểm tra
  scriptForId: string | null;
}

// Trạng thái panel kết quả của luồng mới, dùng chung giữa App và DetailView.
// 'fallback' = AI lỗi/hết lượt, items lấy từ findLibraryMatches chạy trên máy.
export type MatchPanelState =
  | { kind: 'ai'; response: MatchResponse; items: KnowledgeItem[] }      // items theo đúng thứ tự response.matches
  | { kind: 'fallback'; reason: 'rate_limit' | 'unavailable'; items: KnowledgeItem[] };
