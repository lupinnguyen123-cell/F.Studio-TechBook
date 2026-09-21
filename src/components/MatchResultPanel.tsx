import { useState, type ReactNode } from 'react';
import { motion } from 'motion/react';
import { Library, AlertTriangle, Copy, Check, MessageSquareQuote } from 'lucide-react';
import { KnowledgeItem, MatchConfidence, MatchPanelState } from '../types';

const CONFIDENCE_CHIP: Record<MatchConfidence, { label: string; cls: string }> = {
  high: { label: 'Khớp cao', cls: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-500 border-emerald-500/30' },
  medium: { label: 'Khớp khá', cls: 'bg-amber-500/10 text-amber-600 dark:text-amber-500 border-amber-500/30' },
  low: { label: 'Cần đối chiếu', cls: 'bg-slate-500/10 text-[#6e6e73] dark:text-slate-400 border-[#d2d2d7] dark:border-slate-700' },
};

/** Nút phụ chạy luồng AI tự do cũ (/api/analyze) — kết quả KHÔNG qua kiểm duyệt nên
 *  cố tình làm nhỏ hơn, viền nét đứt, có cảnh báo rõ. */
function UnverifiedAiButton({ onAnalyze, isAnalyzing }: { onAnalyze: () => void; isAnalyzing: boolean }) {
  return (
    <div className="pt-1">
      <button
        onClick={onAnalyze}
        disabled={isAnalyzing}
        className="w-full min-h-[40px] flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-dashed border-[#d2d2d7] dark:border-slate-600 text-[11px] font-bold uppercase tracking-widest text-[#6e6e73] dark:text-slate-400 hover:bg-[#f5f5f7] dark:hover:bg-slate-800 disabled:opacity-50 transition-colors"
      >
        <AlertTriangle size={14} className="shrink-0" />
        Tra cứu AI (chưa qua duyệt)
      </button>
      <p className="text-[10px] text-[#6e6e73] dark:text-slate-500 mt-1 text-center">
        Câu trả lời do AI tự sinh, chưa qua kiểm duyệt
      </p>
    </div>
  );
}

function ScriptBox({ script }: { script: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(script);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Bỏ qua nếu trình duyệt chặn quyền clipboard — không cần báo lỗi cho nhân viên.
    }
  };

  return (
    <div className="mt-2 p-3 rounded-lg border border-violet-500/20 bg-violet-500/5">
      <div className="flex items-center justify-between gap-2 mb-1.5">
        <div className="flex items-center gap-1.5 min-w-0">
          <MessageSquareQuote size={13} className="text-violet-600 dark:text-violet-500 shrink-0" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-violet-600 dark:text-violet-500 truncate">
            Cách nói gợi ý cho ca này
          </span>
        </div>
        <button
          onClick={handleCopy}
          title="Copy câu tư vấn"
          className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-violet-600 dark:text-violet-500 hover:text-violet-700 dark:hover:text-violet-400 transition-colors shrink-0"
        >
          {copied ? <Check size={13} /> : <Copy size={13} />}
          {copied ? 'Đã copy' : 'Copy'}
        </button>
      </div>
      <p className="text-sm italic text-[#1d1d1f] dark:text-slate-300 leading-relaxed border-l-2 border-violet-500/40 pl-2.5">
        "{script}"
      </p>
      <p className="text-[10px] text-[#6e6e73] dark:text-slate-500 mt-1.5">
        AI chỉnh từ kịch bản thư viện — đối chiếu bản gốc trong mục
      </p>
    </div>
  );
}

function ResultCard({
  rank,
  item,
  chip,
  reason,
  onOpen,
}: {
  rank: number;
  item: KnowledgeItem;
  chip?: MatchConfidence;
  reason?: string;
  onOpen: () => void;
}) {
  return (
    <button
      onClick={onOpen}
      className="w-full min-h-[44px] text-left p-3 rounded-lg border border-[#d2d2d7] dark:border-slate-800 bg-white dark:bg-slate-900/40 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:bg-[#f5f5f7] dark:hover:bg-slate-800/60 transition-all group"
    >
      <div className="flex items-start gap-2.5">
        <span className="size-5 rounded-full bg-emerald-500 text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
          {rank}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span className="text-[9px] font-bold uppercase tracking-widest text-[#6e6e73] dark:text-slate-500">
              {item.device}
            </span>
            {chip && (
              <span className={`text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded border ${CONFIDENCE_CHIP[chip].cls}`}>
                {CONFIDENCE_CHIP[chip].label}
              </span>
            )}
          </div>
          <p className="text-sm font-bold text-[#1d1d1f] dark:text-slate-200 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
            {item.symptom}
          </p>
          {reason && <p className="text-xs text-[#6e6e73] dark:text-slate-500 mt-1 line-clamp-2">{reason}</p>}
        </div>
      </div>
    </button>
  );
}

/** Kết quả luồng "AI chọn mục thư viện". Chỉ animate opacity lúc mở — KHÔNG dùng
 *  AnimatePresence, KHÔNG animate height: dự án từng bị kẹt animation ở tab nền/máy
 *  yếu khiến nội dung không hiện ra dù state đã đúng. */
export function MatchResultPanel({
  panel,
  isAnalyzing,
  onOpenItem,
  onAnalyze,
}: {
  panel: MatchPanelState;
  isAnalyzing: boolean;
  onOpenItem: (item: KnowledgeItem) => void;
  onAnalyze: () => void;
}) {
  const wrap = (children: ReactNode) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-4 border-t border-[#d2d2d7] dark:border-slate-800 space-y-2"
    >
      {children}
    </motion.div>
  );

  if (panel.kind === 'fallback') {
    const message =
      panel.reason === 'rate_limit'
        ? 'AI đã hết lượt hoặc đang bận — đây là kết quả tìm trong thư viện.'
        : 'AI đang không khả dụng — đây là kết quả tìm trong thư viện.';

    return wrap(
      <>
        <div className="flex items-start gap-2 p-3 rounded-lg border border-amber-500/30 bg-amber-500/10">
          <AlertTriangle size={15} className="text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" />
          <p className="text-xs text-amber-700 dark:text-amber-400 leading-relaxed">{message}</p>
        </div>
        {panel.items.length ? (
          panel.items.map((item, i) => (
            <ResultCard key={item.id} rank={i + 1} item={item} onOpen={() => onOpenItem(item)} />
          ))
        ) : (
          <p className="text-xs text-[#6e6e73] dark:text-slate-500 py-2">
            Chưa tìm thấy mục phù hợp. Thử mô tả khác hoặc mở Thư viện.
          </p>
        )}
        {/* Không hiện nút "Tra cứu AI" ở đây: AI đang lỗi/hết lượt thì luồng tự do
            cũng sẽ lỗi y hệt. */}
      </>
    );
  }

  const { response, items } = panel;
  const header = (
    <div className="space-y-0.5">
      <div className="flex items-center gap-1.5">
        <Library size={14} className="text-emerald-600 dark:text-emerald-500 shrink-0" />
        <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-500">
          AI chọn từ thư viện
        </span>
      </div>
      <p className="text-[10px] text-[#6e6e73] dark:text-slate-500">
        Nội dung xử lý lấy nguyên văn từ thư viện đã duyệt
      </p>
    </div>
  );

  if (response.verdict === 'none' || !items.length) {
    return wrap(
      <>
        {header}
        <div className="flex items-start gap-2 p-3 rounded-lg border border-amber-500/30 bg-amber-500/10">
          <AlertTriangle size={15} className="text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" />
          <p className="text-xs text-amber-700 dark:text-amber-400 leading-relaxed">
            Chưa có trong thư viện — chuyển ASP hoặc hỏi Trainer.
          </p>
        </div>
        <UnverifiedAiButton onAnalyze={onAnalyze} isAnalyzing={isAnalyzing} />
      </>
    );
  }

  const metaById = new Map(response.matches.map((m) => [m.id, m]));
  const topIsLow = metaById.get(items[0].id)?.confidence === 'low';
  const showScript = Boolean(response.script && response.scriptForId === items[0].id);

  return wrap(
    <>
      {header}
      {items.map((item, i) => (
        <div key={item.id}>
          <ResultCard
            rank={i + 1}
            item={item}
            chip={metaById.get(item.id)?.confidence}
            reason={metaById.get(item.id)?.reason}
            onOpen={() => onOpenItem(item)}
          />
          {i === 0 && showScript && <ScriptBox script={response.script as string} />}
        </div>
      ))}
      {topIsLow && (
        <>
          <div className="flex items-start gap-2 p-3 rounded-lg border border-amber-500/30 bg-amber-500/10">
            <AlertTriangle size={15} className="text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-700 dark:text-amber-400 leading-relaxed">
              AI chưa chắc — hãy đối chiếu kỹ với triệu chứng của khách
            </p>
          </div>
          <UnverifiedAiButton onAnalyze={onAnalyze} isAnalyzing={isAnalyzing} />
        </>
      )}
    </>
  );
}
