import { motion } from 'motion/react';
import { ChevronLeft, Trash2, History as HistoryIcon, Search, AlertCircle, Sparkles, ExternalLink, X } from 'lucide-react';
import { BRANDS } from '../constants';
import { HistoryItem } from '../hooks/useHistory';

export function HistoryView({
  history,
  filteredHistory,
  historySearchTerm,
  onHistorySearchChange,
  onBack,
  onClearHistory,
  onRemoveItem,
  onOpenItem,
}: {
  history: HistoryItem[];
  filteredHistory: HistoryItem[];
  historySearchTerm: string;
  onHistorySearchChange: (value: string) => void;
  onBack: () => void;
  onClearHistory: () => void;
  onRemoveItem: (id: string) => void;
  onOpenItem: (item: HistoryItem) => void;
}) {
  return (
    <motion.div
      key="history"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="p-4 pb-24 space-y-6"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-[#f5f5f7] dark:hover:bg-slate-800 text-[#6e6e73] dark:text-slate-400 hover:text-[#1d1d1f] dark:hover:text-slate-100 transition-colors">
            <ChevronLeft size={24} />
          </button>
          <div className="space-y-1">
            <h2 className="text-2xl font-bold">Lịch sử Chẩn đoán</h2>
            <p className="text-[#6e6e73] dark:text-slate-400 text-sm font-medium">Xem lại các ca phân tích lỗi gần đây</p>
          </div>
        </div>
        {history.length > 0 && (
          <button
            onClick={() => {
              if (confirm('Bạn có chắc chắn muốn xóa toàn bộ lịch sử?')) {
                onClearHistory();
              }
            }}
            className="p-2 text-[#6e6e73] dark:text-slate-500 hover:text-red-400 transition-colors"
            title="Xóa lịch sử"
          >
            <Trash2 size={20} />
          </button>
        )}
      </div>

      {history.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-[#6e6e73] dark:text-slate-600 space-y-4">
          <HistoryIcon size={48} strokeWidth={1} />
          <p className="text-sm font-medium">Chưa có lịch sử phân tích nào</p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6e6e73] dark:text-slate-500" size={18} />
            <input
              type="text"
              value={historySearchTerm}
              onChange={(e) => onHistorySearchChange(e.target.value)}
              placeholder="Tìm kiếm trong lịch sử..."
              className="w-full bg-[#f5f5f7] dark:bg-slate-900/50 border border-[#d2d2d7] dark:border-slate-800 rounded-xl py-3 pl-10 pr-4 text-sm text-[#1d1d1f] dark:text-slate-200 placeholder:text-[#6e6e73] dark:placeholder:text-slate-500 focus:ring-2 focus:ring-[#137fec]/50 focus:border-transparent transition-all"
            />
            {historySearchTerm && (
              <button
                onClick={() => onHistorySearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6e6e73] dark:text-slate-500 hover:text-[#1d1d1f] dark:hover:text-slate-300"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {filteredHistory.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-10 text-[#6e6e73] dark:text-slate-600 space-y-2">
              <Search size={32} strokeWidth={1} />
              <p className="text-sm font-medium">Không tìm thấy kết quả phù hợp</p>
            </div>
          ) : (
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {filteredHistory.map((item) => {
                const brand = BRANDS.find((b) => b.id === item.brandId);
                return (
                  <div
                    key={item.id}
                    className="bg-white dark:bg-slate-900/50 border border-[#d2d2d7] dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm dark:shadow-none hover:border-[#c7c7cc] dark:hover:border-slate-600 transition-all flex flex-col"
                  >
                    <div className="p-4 border-b border-[#d2d2d7] dark:border-slate-800 flex items-center justify-between bg-[#fafafa] dark:bg-slate-900/30">
                      <div className="flex items-center gap-3">
                        <div
                          className="size-8 rounded-lg flex items-center justify-center text-white font-bold text-xs"
                          style={{ backgroundColor: brand?.accentColor }}
                        >
                          {brand?.name[0]}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-[#1d1d1f] dark:text-slate-200">{brand?.name}</h4>
                          <p className="text-[10px] text-[#6e6e73] dark:text-slate-500 uppercase tracking-widest font-bold">
                            {new Date(item.timestamp).toLocaleString('vi-VN')}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-1.5 text-[#6e6e73] dark:text-slate-600 hover:text-red-400 hover:bg-red-400/10 rounded-md transition-all"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <div className="p-4 space-y-4 flex-1 flex flex-col">
                      <div className="bg-[#f5f5f7] dark:bg-slate-800/20 rounded-lg p-3 border border-[#d2d2d7] dark:border-slate-800/50">
                        <div className="flex items-center gap-2 mb-1.5">
                          <AlertCircle size={12} className="text-[#6e6e73] dark:text-slate-500" />
                          <span className="text-[10px] font-bold uppercase tracking-widest text-[#6e6e73] dark:text-slate-500">Mô tả lỗi</span>
                        </div>
                        <p className="text-xs text-[#1d1d1f] dark:text-slate-300 line-clamp-2 italic">"{item.description}"</p>
                      </div>
                      <div className="bg-[#f5f5f7] dark:bg-slate-800/30 rounded-xl p-3 border border-[#d2d2d7] dark:border-slate-800/50 flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Sparkles size={12} style={{ color: brand?.accentColor }} />
                          <span className="text-[10px] font-bold uppercase tracking-widest text-[#6e6e73] dark:text-slate-500">Kết quả AI</span>
                        </div>
                        <p className="text-xs text-[#6e6e73] dark:text-slate-400 line-clamp-4 leading-relaxed">{item.result}</p>
                      </div>
                      <button
                        onClick={() => onOpenItem(item)}
                        className="w-full py-2.5 bg-[#f5f5f7] dark:bg-slate-800 hover:bg-[#e8e8ed] dark:hover:bg-slate-700 text-[#1d1d1f] dark:text-slate-300 text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2 mt-auto"
                      >
                        <ExternalLink size={14} />
                        Xem chi tiết
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}
