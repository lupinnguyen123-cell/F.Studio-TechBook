import { motion } from 'motion/react';
import { Search, Wrench, X } from 'lucide-react';
import { BRANDS } from '../constants';
import { Brand, LibraryEntry } from '../types';
import { BrandCard } from './BrandCard';

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
  const filteredBrands = BRANDS.filter(
    (b) =>
      b.name.toLowerCase().includes(docSearchTerm.toLowerCase()) ||
      b.subtitle.toLowerCase().includes(docSearchTerm.toLowerCase())
  );

  const quickAccessItems: LibraryEntry[] = BRANDS.flatMap((b) =>
    (b.library || []).slice(0, 3).map((item) => ({ ...item, brandId: b.id, brandName: b.name, brandColor: b.accentColor }))
  );

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
          <h2 className="text-2xl font-bold">Sửa chữa Thiết bị</h2>
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
            placeholder="Tìm kiếm thương hiệu hoặc tài liệu..."
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

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredBrands.map((brand) => (
            <BrandCard key={brand.id} brand={brand} onOpen={() => onOpenBrand(brand.id)} activeUsers={presence[brand.id] || 0} />
          ))}
        </div>

        {/* Common Errors Section */}
        <section className="space-y-4 pt-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold tracking-tight flex items-center gap-2">
              <Wrench size={20} className="text-blue-500" />
              Lỗi thường gặp
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
                </div>
                <h4 className="text-sm font-bold text-[#1d1d1f] dark:text-slate-200 line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{item.symptom}</h4>
                <p className="text-xs text-[#6e6e73] dark:text-slate-500 mt-1 line-clamp-2">{item.diagnosis}</p>
              </button>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
}
