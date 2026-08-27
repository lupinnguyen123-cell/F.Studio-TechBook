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
}
