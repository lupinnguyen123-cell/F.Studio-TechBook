import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, Database, Search, X, Info, ExternalLink, ChevronDown, Sparkles } from 'lucide-react';
import { Brand, LibraryEntry } from '../types';
import { BRANDS } from '../constants';
import { ScrollToTopButton } from './ScrollToTopButton';

// Thứ tự hiển thị thiết bị mong muốn trong mỗi hãng — thiết bị không nằm trong danh
// sách này (ví dụ do dữ liệu mới thêm) sẽ tự động xếp cuối theo bảng chữ cái.
const DEVICE_ORDER: Record<Brand, string[]> = {
  Apple: ['iPhone', 'iPad', 'Mac', 'Apple Watch', 'AirPods'],
  Garmin: ['Đồng hồ (Fenix/Forerunner)', 'Edge (xe đạp)'],
  Android: ['Samsung', 'Xiaomi', 'Oppo', 'Vivo', 'Pixel', 'Chung (mọi hãng)'],
};

function groupByDevice(items: LibraryEntry[], brandId: Brand): { device: string; items: LibraryEntry[] }[] {
  const order = DEVICE_ORDER[brandId] || [];
  const buckets = new Map<string, LibraryEntry[]>();
  for (const item of items) {
    const list = buckets.get(item.device) || [];
    list.push(item);
    buckets.set(item.device, list);
  }
  const known = order.filter((d) => buckets.has(d));
  const unknown = [...buckets.keys()].filter((d) => !order.includes(d)).sort();
  return [...known, ...unknown].map((device) => ({ device, items: buckets.get(device)! }));
}

export function LibraryView({
  filteredLibrary,
  librarySearchTerm,
  onLibrarySearchChange,
  onBack,
  onOpenEntry,
  onAskAI,
}: {
  filteredLibrary: LibraryEntry[];
  librarySearchTerm: string;
  onLibrarySearchChange: (value: string) => void;
  onBack: () => void;
  onOpenEntry: (item: LibraryEntry) => void;
  onAskAI: () => void;
}) {
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  const grouped = useMemo(() => {
    return BRANDS.map((brand) => {
      const items = filteredLibrary.filter((item) => item.brandId === brand.id);
      return { brand, deviceGroups: groupByDevice(items, brand.id), total: items.length };
    }).filter((g) => g.total > 0);
  }, [filteredLibrary]);

  const toggleBrand = (brandId: string) => setCollapsed((prev) => ({ ...prev, [brandId]: !prev[brandId] }));

  return (
    <motion.div
      key="library"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="pb-24"
    >
      {/* Header dính trên cùng khi cuộn danh sách dài — dùng đúng bộ class như header
          của DetailView để đồng bộ phong cách giữa các trang. */}
      <div className="sticky top-0 z-50 bg-white dark:bg-[#101922] border-b border-[#d2d2d7] dark:border-slate-800 px-4 pt-4 pb-3 space-y-3">
      <div className="flex items-center gap-4">
        <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-[#f5f5f7] dark:hover:bg-slate-800 text-[#6e6e73] dark:text-slate-400 hover:text-[#1d1d1f] dark:hover:text-slate-100 transition-colors">
          <ChevronLeft size={24} />
        </button>
        <div>
          <h2 className="text-2xl font-black tracking-tight flex items-center gap-3">
            <Database size={24} className="text-blue-500" />
            Thư viện kỹ thuật
          </h2>
          <p className="text-xs text-[#6e6e73] dark:text-slate-500 font-bold uppercase tracking-widest mt-1 italic">
            {filteredLibrary.length} lỗi đã ghi nhận · Chia theo hãng &amp; thiết bị
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6e6e73] dark:text-slate-500" size={18} />
          <input
            type="text"
            value={librarySearchTerm}
            onChange={(e) => onLibrarySearchChange(e.target.value)}
            placeholder="Tìm triệu chứng, tên máy hoặc giải pháp..."
            className="w-full bg-[#f5f5f7] dark:bg-slate-900/50 border border-[#d2d2d7] dark:border-slate-800 rounded-xl py-3 pl-10 pr-4 text-sm text-[#1d1d1f] dark:text-slate-200 placeholder:text-[#6e6e73] dark:placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
          />
          {librarySearchTerm && (
            <button
              onClick={() => onLibrarySearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6e6e73] dark:text-slate-500 hover:text-[#1d1d1f] dark:hover:text-slate-300"
            >
              <X size={16} />
            </button>
          )}
        </div>
        <button
          onClick={onAskAI}
          className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white shadow-lg active:scale-[0.98] transition-all shrink-0"
          style={{ background: 'linear-gradient(135deg, #8b5cf6, #6366f1)', boxShadow: '0 10px 20px -8px #8b5cf699' }}
        >
          <Sparkles size={16} />
          Không thấy? Hỏi AI
        </button>
      </div>
      </div>

      <div className="p-4 space-y-6">
      {grouped.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-[#6e6e73] dark:text-slate-600 space-y-4 text-center">
          <Info size={48} strokeWidth={1} />
          <div>
            <p className="text-sm font-medium">Không tìm thấy giải pháp phù hợp trong thư viện</p>
            <p className="text-xs mt-1">Thử từ khóa khác, hoặc bấm "Hỏi AI" ở trên để được hỗ trợ trực tiếp.</p>
          </div>
          <button
            onClick={onAskAI}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white shadow-lg active:scale-[0.98] transition-all"
            style={{ background: 'linear-gradient(135deg, #8b5cf6, #6366f1)' }}
          >
            <Sparkles size={16} />
            Hỏi AI ngay
          </button>
        </div>
      ) : (
        <div className="space-y-8">
          {grouped.map(({ brand, deviceGroups, total }) => {
            const isCollapsed = collapsed[brand.id];
            return (
              <section key={brand.id}>
                <button
                  onClick={() => toggleBrand(brand.id)}
                  className="w-full flex items-center justify-between gap-3 mb-4 group"
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className="text-sm font-black uppercase tracking-widest px-2.5 py-1 rounded-lg"
                      style={{ backgroundColor: `${brand.accentColor}22`, color: brand.accentColor }}
                    >
                      {brand.name}
                    </span>
                    <span className="text-xs text-[#6e6e73] dark:text-slate-500 font-bold">{total} lỗi</span>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`text-[#6e6e73] dark:text-slate-500 group-hover:text-[#1d1d1f] dark:group-hover:text-slate-300 transition-transform ${isCollapsed ? '-rotate-90' : ''}`}
                  />
                </button>

                {/* Không dùng AnimatePresence ở đây: exit animation phụ thuộc
                    requestAnimationFrame, nếu bị trì hoãn (tab nền, máy yếu) nhóm sẽ
                    kẹt ở trạng thái mở dù đã bấm thu gọn. Ẩn/hiện thẳng, không animation. */}
                {!isCollapsed && (
                    <div className="space-y-6">

                      {deviceGroups.map(({ device, items }) => (
                        <div key={device}>
                          <div className="flex items-center gap-2 mb-3 pl-1">
                            <h3 className="text-xs font-bold text-[#1d1d1f] dark:text-slate-300 uppercase tracking-wider">{device}</h3>
                            <span className="text-[10px] text-[#6e6e73] dark:text-slate-600 font-bold bg-[#f5f5f7] dark:bg-slate-800/60 px-1.5 py-0.5 rounded">
                              {items.length}
                            </span>
                          </div>
                          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {items.map((item) => (
                              <div
                                key={item.id}
                                className="bg-white dark:bg-slate-900/50 border border-[#d2d2d7] dark:border-slate-800 rounded-2xl p-5 shadow-sm dark:shadow-none hover:border-blue-500/50 transition-all group flex flex-col"
                              >
                                <h4 className="text-sm font-bold text-[#1d1d1f] dark:text-slate-100 mb-2 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                  {item.symptom}
                                </h4>
                                <div className="space-y-3 flex-1">
                                  <div className="text-xs text-[#6e6e73] dark:text-slate-400">
                                    <span className="font-bold text-[#6e6e73] dark:text-slate-500 uppercase text-[9px] tracking-widest block mb-1">Chẩn đoán:</span>
                                    {item.diagnosis}
                                  </div>
                                  <div className="p-3 bg-blue-500/5 rounded-xl border border-blue-500/10">
                                    <span className="font-bold text-blue-500/80 uppercase text-[9px] tracking-widest block mb-1">Giải pháp nhanh:</span>
                                    <p className="text-xs text-blue-900 dark:text-blue-200/90 leading-relaxed font-medium line-clamp-3">{item.solution}</p>
                                  </div>
                                </div>
                                <button
                                  onClick={() => onOpenEntry(item)}
                                  className="mt-4 w-full py-2 bg-[#f5f5f7] dark:bg-slate-800 hover:bg-[#e8e8ed] dark:hover:bg-slate-700 text-[#6e6e73] dark:text-slate-400 hover:text-[#1d1d1f] dark:hover:text-slate-200 text-[10px] font-bold uppercase tracking-widest rounded-lg transition-all flex items-center justify-center gap-2"
                                >
                                  <ExternalLink size={14} />
                                  Mở quy trình hãng
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                )}
              </section>
            );
          })}
        </div>
      )}
      </div>

      <ScrollToTopButton />
    </motion.div>
  );
}
