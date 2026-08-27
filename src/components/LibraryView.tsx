import { motion } from 'motion/react';
import { ChevronLeft, Database, Search, X, Info, ExternalLink } from 'lucide-react';
import { LibraryEntry } from '../types';

export function LibraryView({
  filteredLibrary,
  librarySearchTerm,
  onLibrarySearchChange,
  onBack,
  onOpenEntry,
}: {
  filteredLibrary: LibraryEntry[];
  librarySearchTerm: string;
  onLibrarySearchChange: (value: string) => void;
  onBack: () => void;
  onOpenEntry: (item: LibraryEntry) => void;
}) {
  return (
    <motion.div
      key="library"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="p-4 pb-24 space-y-6"
    >
      <div className="flex items-center gap-4">
        <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-slate-100 transition-colors">
          <ChevronLeft size={24} />
        </button>
        <div>
          <h2 className="text-2xl font-black tracking-tight flex items-center gap-3">
            <Database size={24} className="text-blue-500" />
            Thư viện kỹ thuật
          </h2>
          <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1 italic">
            Dữ liệu lỗi phổ biến & Giải pháp nhanh
          </p>
        </div>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
        <input
          type="text"
          value={librarySearchTerm}
          onChange={(e) => onLibrarySearchChange(e.target.value)}
          placeholder="Tìm triệu chứng, tên máy hoặc giải pháp..."
          className="w-full bg-slate-900/50 border border-slate-800 rounded-xl py-3 pl-10 pr-4 text-sm text-slate-200 placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
        />
        {librarySearchTerm && (
          <button
            onClick={() => onLibrarySearchChange('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {filteredLibrary.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-slate-600 space-y-4 text-center">
          <Info size={48} strokeWidth={1} />
          <div>
            <p className="text-sm font-medium">Không tìm thấy giải pháp phù hợp</p>
            <p className="text-xs mt-1">Hãy thử tìm kiếm với từ khóa khác hoặc dùng AI phân tích.</p>
          </div>
        </div>
      ) : (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredLibrary.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5 hover:border-blue-500/50 transition-all group flex flex-col"
            >
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded"
                  style={{ backgroundColor: `${item.brandColor}22`, color: item.brandColor }}
                >
                  {item.brandName}
                </span>
              </div>
              <h4 className="text-sm font-bold text-slate-100 mb-2 leading-snug group-hover:text-blue-400 transition-colors">
                {item.symptom}
              </h4>
              <div className="space-y-3 flex-1">
                <div className="text-xs text-slate-400">
                  <span className="font-bold text-slate-500 uppercase text-[9px] tracking-widest block mb-1">Chẩn đoán:</span>
                  {item.diagnosis}
                </div>
                <div className="p-3 bg-blue-500/5 rounded-xl border border-blue-500/10">
                  <span className="font-bold text-blue-500/80 uppercase text-[9px] tracking-widest block mb-1">Giải pháp nhanh:</span>
                  <p className="text-xs text-blue-200/90 leading-relaxed font-medium line-clamp-3">{item.solution}</p>
                </div>
              </div>
              <button
                onClick={() => onOpenEntry(item)}
                className="mt-4 w-full py-2 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 text-[10px] font-bold uppercase tracking-widest rounded-lg transition-all flex items-center justify-center gap-2"
              >
                <ExternalLink size={14} />
                Mở quy trình hãng
              </button>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
