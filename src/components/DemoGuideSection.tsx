import { useState } from 'react';
import { motion } from 'motion/react';
import { Smartphone, Laptop, Watch as WatchIcon, ListChecks, Trash2, LifeBuoy, AlertTriangle, Info, HelpCircle } from 'lucide-react';
import { DemoGuideDevice, DemoGuideSection as DemoGuideSectionType } from '../types';

const DEVICE_ICONS: Record<string, any> = {
  'demo-iphone-ipad': Smartphone,
  'demo-mac': Laptop,
  'demo-apple-watch': WatchIcon,
};

const SECTION_META: Record<DemoGuideSectionType['kind'], { label: string; icon: any; color: string }> = {
  install: { label: 'Cài đặt demo', icon: ListChecks, color: '#22c55e' },
  remove: { label: 'Xóa demo', icon: Trash2, color: '#ef4444' },
  troubleshoot: { label: 'Xử lý sự cố', icon: LifeBuoy, color: '#eab308' },
};

export function DemoGuideSection({ devices, accentColor }: { devices: DemoGuideDevice[]; accentColor: string }) {
  const [deviceId, setDeviceId] = useState(devices[0]?.id ?? '');
  const [activeKind, setActiveKind] = useState<DemoGuideSectionType['kind']>(devices[0]?.sections[0]?.kind ?? 'install');

  if (!devices.length) return null;

  const device = devices.find((d) => d.id === deviceId) ?? devices[0];
  const section = device.sections.find((s) => s.kind === activeKind) ?? device.sections[0];

  const handleSelectDevice = (id: string) => {
    setDeviceId(id);
    const dev = devices.find((d) => d.id === id);
    if (dev && !dev.sections.some((s) => s.kind === activeKind)) {
      setActiveKind(dev.sections[0]?.kind ?? 'install');
    }
  };

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ListChecks size={20} style={{ color: accentColor }} />
          <h3 className="text-xl font-bold tracking-tight">Hướng dẫn cài demo</h3>
        </div>
        <span className="text-[10px] text-[#6e6e73] dark:text-slate-500 font-bold uppercase tracking-widest">Quy trình DCOTA · Nội bộ</span>
      </div>

      <div className="bg-white dark:bg-slate-900/50 border border-[#d2d2d7] dark:border-slate-800 rounded-xl p-5 space-y-5 shadow-sm dark:shadow-inner">
        {/* Device selector */}
        <div className="flex gap-2 flex-wrap">
          {devices.map((d) => {
            const Icon = DEVICE_ICONS[d.id] || Smartphone;
            const active = d.id === device.id;
            return (
              <button
                key={d.id}
                onClick={() => handleSelectDevice(d.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold border transition-all ${
                  active ? 'text-white shadow-lg' : 'border-[#d2d2d7] dark:border-slate-700 text-[#6e6e73] dark:text-slate-400 hover:text-[#1d1d1f] dark:hover:text-slate-200 hover:border-[#c7c7cc] dark:hover:border-slate-600'
                }`}
                style={active ? { backgroundColor: accentColor, borderColor: accentColor } : undefined}
              >
                <Icon size={16} />
                {d.name}
              </button>
            );
          })}
        </div>

        {/* Section (kind) selector */}
        <div className="flex gap-1.5 border-b border-[#d2d2d7] dark:border-slate-800 pb-0">
          {device.sections.map((s) => {
            const meta = SECTION_META[s.kind];
            const Icon = meta.icon;
            const active = s.kind === activeKind;
            return (
              <button
                key={s.id}
                onClick={() => setActiveKind(s.kind)}
                className={`flex items-center gap-1.5 px-3 py-2.5 text-xs font-bold uppercase tracking-wide border-b-2 transition-all ${
                  active ? 'text-[#1d1d1f] dark:text-slate-100' : 'border-transparent text-[#6e6e73] dark:text-slate-500 hover:text-[#1d1d1f] dark:hover:text-slate-300'
                }`}
                style={{ borderBottomColor: active ? meta.color : 'transparent' }}
              >
                <Icon size={14} style={{ color: active ? meta.color : undefined }} />
                {meta.label}
              </button>
            );
          })}
        </div>

        {/* Content
            Intentionally not wrapped in AnimatePresence: with mode="wait" the new
            content only mounts once the old content's exit animation finishes, so if
            that animation stalls (backgrounded tab, low-power device), the panel gets
            stuck showing the previous device/tab's content even though the selector
            above already shows the new one as active. A plain keyed motion.div swaps
            content immediately on state change and still fades the new content in. */}
        <motion.div
          key={`${device.id}-${section?.id}`}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.15 }}
          className="space-y-4"
        >
            {section?.note && (
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#f5f5f7] dark:bg-slate-800/60 border border-[#d2d2d7] dark:border-slate-700">
                <Info size={15} className="text-[#6e6e73] dark:text-slate-400 shrink-0 mt-0.5" />
                <p className="text-xs text-[#1d1d1f] dark:text-slate-300 leading-relaxed">{section.note}</p>
              </div>
            )}

            {section?.requirements && section.requirements.length > 0 && (
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#6e6e73] dark:text-slate-400 mb-2">Yêu cầu trước khi làm</h4>
                <ul className="space-y-1.5">
                  {section.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#1d1d1f] dark:text-slate-300 leading-relaxed">
                      <span className="text-[#6e6e73] dark:text-slate-600 mt-1">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {section?.stepGroups && section.stepGroups.length > 0 && (
              <div className="space-y-4">
                {section.stepGroups.map((group, gi) => (
                  <div key={gi}>
                    {group.label && (
                      <h4 className="text-sm font-bold text-[#1d1d1f] dark:text-slate-200 mb-2">{group.label}</h4>
                    )}
                    <ol className="space-y-2">
                      {group.items.map((item, ii) => (
                        <li key={ii} className="flex items-start gap-3 text-sm text-[#1d1d1f] dark:text-slate-300 leading-relaxed">
                          <span
                            className="shrink-0 size-5 rounded-full flex items-center justify-center text-[10px] font-bold mt-0.5"
                            style={{ backgroundColor: `${accentColor}26`, color: accentColor }}
                          >
                            {ii + 1}
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
            )}

            {section?.cases && section.cases.length > 0 && (
              <div className="space-y-3">
                {section.cases.map((c, ci) => (
                  <div key={ci} className="rounded-lg border border-[#d2d2d7] dark:border-slate-800 bg-[#f5f5f7] dark:bg-slate-950/40 p-4">
                    <div className="flex items-start gap-2 mb-2.5">
                      <HelpCircle size={15} className="text-amber-500 dark:text-amber-400 shrink-0 mt-0.5" />
                      <p className="text-sm font-bold text-amber-800 dark:text-amber-300 leading-relaxed">{c.situation}</p>
                    </div>
                    <ul className="space-y-1.5 pl-6">
                      {c.items.map((item, ii) => (
                        <li key={ii} className="flex items-start gap-2 text-sm text-[#1d1d1f] dark:text-slate-300 leading-relaxed">
                          <span className="text-[#6e6e73] dark:text-slate-600 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {section?.doNots && section.doNots.length > 0 && (
              <div className="p-4 rounded-xl border border-red-500/30 bg-red-500/10">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle size={15} className="text-red-500" />
                  <span className="text-[11px] font-bold text-red-400 uppercase tracking-widest">Tuyệt đối không được làm</span>
                </div>
                <ul className="space-y-1.5">
                  {section.doNots.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-red-800 dark:text-red-300/90 leading-relaxed">
                      <span className="text-red-500 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
        </motion.div>
      </div>
    </section>
  );
}
