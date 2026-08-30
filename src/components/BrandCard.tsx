import { Smartphone, Watch, Layers } from 'lucide-react';
import { BrandDetail } from '../types';

export function BrandCard({
  brand,
  onOpen,
}: {
  brand: BrandDetail;
  onOpen: () => void;
}) {
  const isApple = brand.id === 'Apple';
  const isGarmin = brand.id === 'Garmin';
  const isAndroid = brand.id === 'Android';

  return (
    <section className={`rounded-2xl p-5 shadow-xl relative overflow-hidden border border-white/5 bg-gradient-to-br ${brand.gradient} group`}>
      {/* Decorative background icon */}
      <div className="absolute -right-4 -bottom-4 opacity-5 pointer-events-none">
        {isApple && <Smartphone size={160} />}
        {isGarmin && <Watch size={160} />}
        {isAndroid && <Layers size={160} />}
      </div>

      <div className="flex justify-between items-start mb-4 relative z-10">
        <div className="space-y-1">
          <span className={`text-[10px] uppercase font-bold tracking-widest opacity-60 ${brand.textColor}`}>
            {isApple ? 'Dịch vụ Cao cấp' : isGarmin ? 'Bền bỉ & Thể thao' : 'Hệ thống Mở'}
          </span>
          <h3 className={`text-2xl font-bold tracking-tight ${brand.textColor}`}>{brand.name}</h3>
          <p className={`text-sm opacity-70 ${brand.textColor}`}>{brand.subtitle}</p>
        </div>
        <div className={`p-2 rounded-xl backdrop-blur-md border border-white/10 ${isApple ? 'bg-white/40' : 'bg-white/10'}`}>
          {isApple && <Smartphone size={28} className="text-slate-900" />}
          {isGarmin && <Watch size={28} className="text-white" />}
          {isAndroid && <Layers size={28} className="text-white" />}
        </div>
      </div>

      <button
        onClick={onOpen}
        className={`w-full font-bold py-3 rounded-xl text-sm transition-all active:scale-[0.98] shadow-lg relative z-10 ${
          isApple
            ? 'bg-slate-900 text-white'
            : isGarmin
              ? 'bg-[#137fec] text-white'
              : 'bg-[#3DDC84] text-[#073042]'
        }`}
      >
        Mở sổ tay kỹ thuật
      </button>
    </section>
  );
}
