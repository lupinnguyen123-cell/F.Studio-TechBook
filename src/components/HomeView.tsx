import { useMemo } from 'react';
import { motion } from 'motion/react';
import { Search, Wrench, X, Info } from 'lucide-react';
import { BRANDS } from '../constants';
import { Brand, LibraryEntry } from '../types';
import { BrandCard } from './BrandCard';

const MAX_SEARCH_RESULTS = 9;

function toLibraryEntries(pickPerBrand: (items: LibraryEntry[]) => LibraryEntry[]): LibraryEntry[] {
  return BRANDS.flatMap((b) =>
    pickPerBrand(
      (b.library || []).map((item) => ({ ...item, brandId: b.id, brandName: b.name, brandColor: b.accentColor }))
    )
  );
}

export function HomeView({
  presence,
  globalOnline,
  isConnected,
  docSearchTerm,
  onDocSearchChange,
  onOpenBrand,
  onShowLibrary,
  onQuickAccess,
}: {
  presence: Record<string, number>;
  globalOnline: number;
  isConnected: boolean;
  docSearchTerm: string;
  onDocSearchChange: (value: string) => void;
  onOpenBrand: (brandId: Brand) => void;
  onShowLibrary: () => void;
  onQuickAccess: (item: LibraryEntry) => void;
}) {
  const searchTerm = docSearchTerm.trim().toLowerCase();
  const isSearching = searchTerm.length > 0;

  const filteredBrands = BRANDS.filter(
    (b) => b.name.toLowerCase().includes(searchTerm) || b.subtitle.toLowerCase().includes(searchTerm)
  );

  // Không tìm kiếm: giữ hành vi cũ (3 mục đầu mỗi hãng làm gợi ý nhanh).
  // Đang tìm kiếm: lọc trên TOÀN BỘ thư viện của mọi hãng (khớp symptom/diagnosis/
  // keywords/tên hãng, cùng cách filteredLibrary trong App.tsx đang làm), giới hạn
  // số kết quả để không phá layout trang chủ.
  const quickAccessItems = useMemo<LibraryEntry[]>(() => {
    if (!isSearching) return toLibraryEntries((items) => items.slice(0, 3));

    return toLibraryEntries((items) => items)
      .filter(
        (item) =>
          item.symptom.toLowerCase().includes(searchTerm) ||
          item.diagnosis.toLowerCase().includes(searchTerm) ||
          item.keywords.some((k) => k.toLowerCase().includes(searchTerm)) ||
          item.brandName.toLowerCase().includes(searchTerm)
      )
      .slice(0, MAX_SEARCH_RESULTS);
  }, [isSearching, searchTerm]);

  const hasNoResults = isSearching && filteredBrands.length === 0 && quickAccessItems.length === 0;

  return (
    <motion.div
      key="home"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="p-4 space-y-6"
    >
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold">Sổ tay kỹ thuật</h2>
          <p className="text-[#6e6e73] dark:text-slate-400 text-sm font-medium">Chọn thương hiệu để xem tài liệu hướng dẫn</p>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
          <div className={`size-1.5 rounded-full ${isConnected ? 'bg-emerald-500 animate-pulse' : 'bg-red-500'}`} />
          <span className={`text-[10px] font-bold uppercase tracking-widest ${isConnected ? 'text-emerald-500' : 'text-red-500'}`}>
            {isConnected ? `${globalOnline} Online` : 'Offline'}
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6e6e73] dark:text-slate-500" size={18} />
          <input
            type="text"
            value={docSearchTerm}
            onChange={(e) => onDocSearchChange(e.target.value)}
            placeholder="Tìm kiếm thương hiệu hoặc lỗi thường gặp..."
            className="w-full bg-[#f5f5f7] dark:bg-slate-900/50 border border-[#d2d2d7] dark:border-slate-800 rounded-xl py-3 pl-10 pr-4 text-sm text-[#1d1d1f] dark:text-slate-200 placeholder:text-[#6e6e73] dark:placeholder:text-slate-500 focus:ring-2 focus:ring-[#137fec]/50 focus:border-transparent transition-all"
          />
          {docSearchTerm && (
            <button
              onClick={() => onDocSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6e6e73] dark:text-slate-500 hover:text-[#1d1d1f] dark:hover:text-slate-300"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {hasNoResults ? (
          <div className="flex flex-col items-center justify-center py-16 text-[#6e6e73] dark:text-slate-600 space-y-3 text-center">
            <Info size={40} strokeWidth={1} />
            <div>
              <p className="text-sm font-medium">Không tìm thấy kết quả phù hợp với "{docSearchTerm.trim()}"</p>
              <p className="text-xs mt-1">Thử từ khóa khác, hoặc mở Thư viện để xem toàn bộ danh mục lỗi.</p>
            </div>
            <button
              onClick={onShowLibrary}
              className="text-[10px] font-bold text-blue-500 uppercase tracking-widest hover:underline"
            >
              Mở Thư viện kỹ thuật
            </button>
          </div>
        ) : (
          <>
            {filteredBrands.length > 0 && (
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {filteredBrands.map((brand) => (
                  <BrandCard key={brand.id} brand={brand} onOpen={() => onOpenBrand(brand.id)} activeUsers={presence[brand.id] || 0} />
                ))}
              </div>
            )}

            {/* Common Errors Section */}
            {quickAccessItems.length > 0 && (
              <section className="space-y-4 pt-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold tracking-tight flex items-center gap-2">
                    <Wrench size={20} className="text-blue-500" />
                    {isSearching ? `Lỗi khớp với "${docSearchTerm.trim()}"` : 'Lỗi thường gặp'}
                  </h3>
                  <button onClick={onShowLibrary} className="text-[10px] font-bold text-blue-500 uppercase tracking-widest hover:underline">
                    Xem tất cả
                  </button>
                </div>
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {quickAccessItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => onQuickAccess(item)}
                      className="text-left bg-white dark:bg-slate-900/40 border border-[#d2d2d7] dark:border-slate-800 rounded-xl p-4 shadow-sm dark:shadow-none hover:border-blue-500/50 transition-all group"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className="text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded"
                          style={{ backgroundColor: `${item.brandColor}22`, color: item.brandColor }}
                        >
                          {item.brandName}
                        </span>
                        <span className="text-[9px] font-bold uppercase tracking-widest text-[#6e6e73] dark:text-slate-500">
                          {item.device}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-[#1d1d1f] dark:text-slate-200 line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{item.symptom}</h4>
                      <p className="text-xs text-[#6e6e73] dark:text-slate-500 mt-1 line-clamp-2">{item.diagnosis}</p>
                    </button>
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </div>
    </motion.div>
  );
}
