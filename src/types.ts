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
  symptom: string;
  diagnosis: string;
  solution: string;
  keywords: string[];
}

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
