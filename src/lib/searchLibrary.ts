import { KnowledgeItem } from '../types';

const MIN_SCORE = 2;

// Common Vietnamese function words carry no diagnostic signal and would otherwise
// dilute scoring toward whichever entry happens to reuse them most.
const STOPWORDS = new Set([
  'la', 'va', 'co', 'khong', 'duoc', 'bi', 'da', 'se', 'cho', 'voi', 'cac', 'nhung',
  'nay', 'do', 'rat', 'con', 'nhu', 'de', 'ma', 'thi', 'ra', 'vao', 'len', 'xuong',
  'mot', 'khi', 'gi', 'sao', 'lam', 'cua', 'tren', 'duoi', 'hay', 'neu', 'thoi',
  'cung', 'ca', 'nen', 'phai', 'roi', 'sau', 'truoc', 'tu', 'the', 'nao', 'ai',
]);

/** Chuẩn hóa để so khớp: bỏ hoa/thường và dấu tiếng Việt. Export để nơi khác
 *  (vd: lọc theo tên hãng ở App.tsx) dùng chung đúng một quy tắc chuẩn hóa. */
export function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/đ/g, 'd') // đ is its own Unicode letter, not d + a combining mark, so NFD won't touch it
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, ''); // strip Vietnamese diacritics for looser matching
}

function tokenize(text: string): string[] {
  return normalize(text)
    .split(/[^a-z0-9]+/)
    .filter((t) => t.length >= 2 && !STOPWORDS.has(t));
}

/**
 * Scores a query against a library entry using weighted token overlap:
 * keyword hits count most since they're curated, symptom next, diagnosis/solution least.
 * Query tokens are deduplicated first so a word repeated in the input (e.g. "nghe...nghe")
 * can't inflate the score just by appearing twice. Falls back gracefully to 0 for entries
 * that share no tokens with the query.
 */
function scoreItem(queryTokens: string[], item: KnowledgeItem): number {
  if (queryTokens.length === 0) return 0;

  const keywordTokens = new Set(item.keywords.flatMap(tokenize));
  const symptomTokens = new Set(tokenize(item.symptom));
  const diagnosisTokens = new Set(tokenize(item.diagnosis + ' ' + item.solution));

  let score = 0;
  for (const token of new Set(queryTokens)) {
    if (keywordTokens.has(token)) score += 3;
    else if (symptomTokens.has(token)) score += 2;
    else if (diagnosisTokens.has(token)) score += 1;
  }

  // Small bonus when the whole query appears as a substring (exact phrase match).
  const normalizedQuery = normalize(queryTokens.join(' '));
  if (normalizedQuery.length >= 4 && normalize(item.symptom).includes(normalizedQuery)) {
    score += 2;
  }

  return score;
}

export function findLibraryMatches<T extends KnowledgeItem>(query: string, items: T[], limit = 3): T[] {
  const queryTokens = tokenize(query);
  if (queryTokens.length === 0) return [];

  return items
    .map((item) => ({ item, score: scoreItem(queryTokens, item) }))
    .filter(({ score }) => score >= MIN_SCORE)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ item }) => item);
}
