import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  MessageSquare,
  FileText,
  Watch,
  Layers,
  ShieldCheck,
  Sparkles,
  Loader2,
  Send,
  RotateCcw,
  X,
  AlertTriangle,
  Camera,
  Cloud,
  Package,
  Activity,
  Monitor,
  User,
} from 'lucide-react';
import { BRANDS } from '../constants';
import { Brand, BrandDetail } from '../types';

const IconMap: Record<string, any> = {
  Camera,
  Cloud,
  ShieldCheck,
  Package,
  Activity,
  Monitor,
  User,
};

export function DetailView({
  currentBrand,
  activeTab,
  presence,
  errorDescription,
  analysisResult,
  isAnalyzing,
  dynamicWarnings,
  onBack,
  onSelectTab,
  onErrorDescriptionChange,
  onAnalyze,
  onResetAnalysis,
  onClearResult,
}: {
  currentBrand: BrandDetail | undefined;
  activeTab: Brand;
  presence: Record<string, number>;
  errorDescription: string;
  analysisResult: string | null;
  isAnalyzing: boolean;
  dynamicWarnings: { keywords: string[]; message: string }[];
  onBack: () => void;
  onSelectTab: (brandId: Brand) => void;
  onErrorDescriptionChange: (value: string) => void;
  onAnalyze: () => void;
  onResetAnalysis: () => void;
  onClearResult: () => void;
}) {
  return (
    <motion.div
      key="detail"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col"
    >
      {/* Tabs with Back Button */}
      <div className="flex items-center border-b border-slate-800 bg-[#101922] sticky top-0 z-50">
        <button
          onClick={onBack}
          className="px-4 py-3.5 text-slate-500 hover:text-slate-100 transition-colors border-r border-slate-800 hover:bg-slate-800/50"
          title="Quay lại Trang chủ"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="flex px-4 gap-8 overflow-x-auto no-scrollbar flex-1">
          {BRANDS.map((brand) => (
            <button
              key={brand.id}
              onClick={() => onSelectTab(brand.id)}
              className={`pb-3 pt-4 shrink-0 text-sm font-semibold tracking-wide border-b-2 transition-all flex items-center gap-2 ${
                activeTab === brand.id ? 'text-slate-100' : 'border-transparent text-slate-500 hover:text-slate-300'
              }`}
              style={{
                borderBottomColor: activeTab === brand.id ? brand.accentColor : 'transparent',
              }}
            >
              {brand.name}
              {presence[brand.id] > 0 && (
                <span className="size-4 rounded-full bg-emerald-500/20 text-emerald-500 text-[10px] flex items-center justify-center border border-emerald-500/30">
                  {presence[brand.id]}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Brand Detail Content */}
      <div className="p-4 relative">
        <div className="space-y-8">
          {/* Hero Banner */}
          <div className={`relative h-40 w-full rounded-2xl overflow-hidden bg-gradient-to-br ${currentBrand?.gradient} flex items-center px-10 shadow-lg mb-4`}>
            <div className="z-10">
              <div className="flex items-center gap-2 mb-2">
                <div className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className={`text-[10px] font-bold uppercase tracking-widest opacity-80 ${currentBrand?.textColor}`}>
                  {presence[currentBrand?.id || ''] || 1} Kỹ thuật viên đang xem
                </span>
              </div>
              <h2 className={`text-3xl font-black ${currentBrand?.textColor} tracking-tight`}>
                {currentBrand?.id === 'Garmin' ? 'Bộ Fenix & Epix' : `Hỗ trợ ${currentBrand?.name}`}
              </h2>
              <p className={`text-xs mt-2 uppercase tracking-widest font-bold opacity-70 ${currentBrand?.textColor}`}>
                {currentBrand?.id === 'Garmin' ? 'v4.2.0 • PHẦN CỨNG REV. B' : 'TIÊU CHUẨN DỊCH VỤ ASP'}
              </p>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/2 opacity-20 flex items-center justify-end pr-10">
              {currentBrand?.id === 'Apple' && <ShieldCheck size={140} strokeWidth={1} />}
              {currentBrand?.id === 'Garmin' && <Watch size={140} strokeWidth={1} />}
              {currentBrand?.id === 'Android' && <Layers size={140} strokeWidth={1} />}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Column 1: AI Analysis */}
            <div className="space-y-8">
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <Sparkles size={20} style={{ color: currentBrand?.accentColor }} />
                  <h3 className="text-xl font-bold tracking-tight">AI Chẩn đoán lỗi</h3>
                </div>
                <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 space-y-4 shadow-inner">
                  <div className="space-y-3">
                    <textarea
                      value={errorDescription}
                      onChange={(e) => onErrorDescriptionChange(e.target.value)}
                      placeholder="Mô tả tình trạng lỗi của thiết bị (ví dụ: iPhone 13 bị sọc màn hình sau khi rơi...)"
                      className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-4 text-sm text-slate-200 placeholder:text-slate-500 focus:ring-2 focus:border-transparent transition-all resize-none min-h-[120px]"
                      style={{ '--tw-ring-color': `${currentBrand?.accentColor}80` } as React.CSSProperties}
                    />
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={onAnalyze}
                      disabled={isAnalyzing || !errorDescription.trim()}
                      className="flex-1 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl text-sm flex items-center justify-center gap-2 transition-all shadow-lg active:scale-[0.98]"
                      style={{
                        backgroundColor: currentBrand?.accentColor,
                        boxShadow: `0 10px 20px -5px ${currentBrand?.accentColor}66`,
                      }}
                    >
                      {isAnalyzing ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Đang phân tích...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Phân tích ngay
                        </>
                      )}
                    </button>

                    <button
                      onClick={onResetAnalysis}
                      disabled={isAnalyzing || (!errorDescription.trim() && !analysisResult)}
                      className="px-5 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 text-slate-400 hover:text-slate-200 rounded-xl transition-all border border-slate-700 flex items-center justify-center active:scale-[0.98]"
                      title="Làm mới nội dung"
                    >
                      <RotateCcw size={18} />
                    </button>
                  </div>

                  <AnimatePresence>
                    {analysisResult && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pt-4 border-t border-slate-800"
                      >
                        <div
                          className="border rounded-xl p-5"
                          style={{
                            backgroundColor: `${currentBrand?.accentColor}0d`,
                            borderColor: `${currentBrand?.accentColor}33`,
                          }}
                        >
                          <div className="flex items-center gap-2 mb-4">
                            <div
                              className="size-7 rounded-full flex items-center justify-center"
                              style={{ backgroundColor: currentBrand?.accentColor }}
                            >
                              <Sparkles size={14} className="text-white" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: currentBrand?.accentColor }}>
                              Giải pháp từ AI
                            </span>
                            <div className="ml-auto flex items-center gap-1">
                              <button
                                onClick={onResetAnalysis}
                                className="p-1.5 hover:bg-slate-800 rounded-md transition-colors text-slate-500 hover:text-slate-300"
                                title="Làm mới tất cả"
                              >
                                <RotateCcw size={14} />
                              </button>
                              <button
                                onClick={onClearResult}
                                className="p-1.5 hover:bg-slate-800 rounded-md transition-colors text-slate-500 hover:text-slate-300"
                                title="Xóa kết quả"
                              >
                                <X size={14} />
                              </button>
                            </div>
                          </div>
                          <div className="text-sm text-slate-300 leading-relaxed whitespace-pre-wrap prose prose-invert prose-sm max-w-none">
                            {analysisResult}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </section>
            </div>

            {/* Column 2: Scripts & Processes */}
            <div className="space-y-8">
              {/* Scripts */}
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold tracking-tight">Kịch bản tư vấn</h3>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Tự nhiên • Gần gũi</span>
                </div>
                <div className="grid gap-3">
                  {currentBrand?.scripts.map((script) => (
                    <div
                      key={script.id}
                      className="p-4 rounded-xl border group hover:border-slate-600 transition-all"
                      style={{
                        backgroundColor: script.type === 'premium' ? `${currentBrand?.accentColor}1a` : 'rgba(15, 23, 42, 0.5)',
                        borderColor: script.type === 'premium' ? `${currentBrand?.accentColor}33` : 'rgb(30, 41, 59)',
                      }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <MessageSquare size={14} style={{ color: script.type === 'premium' ? currentBrand?.accentColor : 'rgb(100, 116, 139)' }} />
                        <span
                          className="text-[11px] font-bold uppercase tracking-widest"
                          style={{ color: script.type === 'premium' ? currentBrand?.accentColor : 'rgb(100, 116, 139)' }}
                        >
                          {script.label}
                        </span>
                      </div>
                      <p className={`text-sm leading-relaxed ${script.type === 'premium' ? 'italic text-slate-300' : 'text-slate-400'}`}>
                        {script.text}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Process */}
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold tracking-tight">Quy trình & Cảnh báo</h3>
                  <span className="text-[10px] text-red-500 font-bold uppercase tracking-widest">Lưu ý quan trọng</span>
                </div>
                <div className="space-y-3">
                  {/* Dynamic Warnings */}
                  <AnimatePresence>
                    {dynamicWarnings.length > 0 && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-2">
                        <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20">
                          Lưu ý dựa trên mô tả lỗi
                        </span>
                      </motion.div>
                    )}
                    {dynamicWarnings.map((warning, idx) => (
                      <motion.div
                        key={`dyn-warn-${idx}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="p-4 rounded-xl border border-red-500/30 bg-red-500/10 shadow-lg shadow-red-500/5"
                      >
                        <div className="flex items-start gap-3">
                          <AlertTriangle size={18} className="text-red-500 shrink-0 mt-0.5" />
                          <p className="text-sm font-bold text-red-400 leading-relaxed">{warning.message}</p>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {currentBrand?.processes.map((process) => {
                    const Icon = IconMap[process.icon] || FileText;
                    return (
                      <div
                        key={process.id}
                        className="flex items-start gap-4 p-4 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800 transition-all group"
                      >
                        <div className="size-12 rounded-lg bg-slate-800 group-hover:bg-slate-700 flex items-center justify-center shrink-0 transition-colors">
                          <Icon size={24} style={{ color: currentBrand?.accentColor }} />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-bold text-slate-200">{process.title}</h4>
                          <p className="text-xs text-slate-500 mt-1 leading-relaxed">{process.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
