import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  FileText,
  Watch,
  Layers,
  ShieldCheck,
  Sparkles,
  Loader2,
  RotateCcw,
  X,
  AlertTriangle,
  Camera,
  Cloud,
  Package,
  Activity,
  Monitor,
  User,
  Library,
  Zap,
  ListChecks,
  Trash2,
} from 'lucide-react';
import { BRANDS } from '../constants';
import { Brand, BrandDetail, KnowledgeItem, ResultSource } from '../types';
import { findLibraryMatches } from '../lib/searchLibrary';
import { DemoGuideSection } from './DemoGuideSection';
import { ScrollToTopButton } from './ScrollToTopButton';

const IconMap: Record<string, any> = {
  Camera,
  Cloud,
  ShieldCheck,
  Package,
  Activity,
  Monitor,
  User,
};

// Tiêu đề Hero Banner theo hãng. Trước đây là ternary chỉ loại trừ Garmin — cùng dạng
// với lỗi ASP bên dưới, nên gom về map cho dễ rà soát khi thêm hãng mới.
const BRAND_HEADLINE: Partial<Record<Brand, string>> = {
  Garmin: 'Bộ Fenix & Epix',
};

// Dòng phụ dưới tên hãng ở Hero Banner. Tách theo từng hãng thay vì ternary chỉ loại
// trừ Garmin: "ASP" (Apple Service Provider) là khái niệm riêng của Apple, để Android
// hiện dòng đó là sai. Hãng mới thêm sau này rơi vào giá trị mặc định trung tính.
const BRAND_SUBLINE: Record<Brand, string> = {
  Apple: 'TIÊU CHUẨN DỊCH VỤ ASP',
  Garmin: 'v4.2.0 • PHẦN CỨNG REV. B',
  Android: 'TIÊU CHUẨN BẢO HÀNH CHÍNH HÃNG',
};

// Ví dụ trong ô nhập mô tả lỗi cũng phải theo hãng đang xem — trước đây hardcode ví dụ
// iPhone cho cả tab Garmin lẫn Android.
const BRAND_ERROR_PLACEHOLDER: Record<Brand, string> = {
  Apple: 'Mô tả tình trạng lỗi của thiết bị (ví dụ: iPhone 13 bị sọc màn hình sau khi rơi...)',
  Garmin: 'Mô tả tình trạng lỗi của thiết bị (ví dụ: Đồng hồ Fenix 7 báo lỗi không sạc được pin...)',
  Android: 'Mô tả tình trạng lỗi của thiết bị (ví dụ: Samsung Galaxy S23 bị treo logo sau khi cập nhật...)',
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
  onUseLibrarySolution,
  focusSignal,
  resultSource,
  isResultModalOpen,
  onOpenResultModal,
  onCloseResultModal,
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
  onUseLibrarySolution: (item: KnowledgeItem) => void;
  focusSignal?: number;
  resultSource: ResultSource;
  isResultModalOpen: boolean;
  onOpenResultModal: () => void;
  onCloseResultModal: () => void;
}) {
  const librarySuggestions = useMemo(
    () => findLibraryMatches(errorDescription, currentBrand?.library || [], 5),
    [errorDescription, currentBrand]
  );

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  const prevSuggestionCount = useRef(0);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  // Bấm "Hỏi AI" từ trang Thư viện điều hướng vào đây — cuộn tới và focus sẵn ô nhập
  // để nhân viên gõ mô tả ngay, không cần tự tìm lại khối AI trên trang.
  useEffect(() => {
    if (!focusSignal) return;
    textareaRef.current?.scrollIntoView({ block: 'center' });
    textareaRef.current?.focus();
  }, [focusSignal]);

  // Khi gõ mô tả và thư viện bắt đầu có gợi ý (0 → >0), kéo khối gợi ý vào tầm nhìn
  // để nhân viên thấy ngay là "đã có sẵn đáp án, không cần hỏi AI". Chỉ chạy đúng lúc
  // chuyển trạng thái, không chạy mỗi lần số gợi ý thay đổi để tránh giật khi đang gõ.
  useEffect(() => {
    const prev = prevSuggestionCount.current;
    prevSuggestionCount.current = librarySuggestions.length;
    if (prev === 0 && librarySuggestions.length > 0) {
      suggestionsRef.current?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }, [librarySuggestions.length]);

  const isLibraryResult = resultSource === 'library';
  const resultAccent = isLibraryResult ? '#10b981' : '#8b5cf6';
  const ResultIcon = isLibraryResult ? Library : Sparkles;
  const resultTitle = isLibraryResult ? 'Kết quả từ Thư viện' : 'Kết quả từ AI';
  const resultNote = isLibraryResult ? 'Đã kiểm duyệt' : 'Tham khảo thêm';

  return (
    <motion.div
      key="detail"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col"
    >
      {/* Tabs with Back Button */}
      <div className="flex items-center border-b border-[#d2d2d7] dark:border-slate-800 bg-white dark:bg-[#101922] sticky top-0 z-50">
        <button
          onClick={onBack}
          className="px-4 py-3.5 text-[#6e6e73] dark:text-slate-500 hover:text-[#1d1d1f] dark:hover:text-slate-100 transition-colors border-r border-[#d2d2d7] dark:border-slate-800 hover:bg-[#f5f5f7] dark:hover:bg-slate-800/50"
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
                activeTab === brand.id ? 'text-[#1d1d1f] dark:text-slate-100' : 'border-transparent text-[#6e6e73] dark:text-slate-500 hover:text-[#1d1d1f] dark:hover:text-slate-300'
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
                {(currentBrand && BRAND_HEADLINE[currentBrand.id]) || `Hỗ trợ ${currentBrand?.name}`}
              </h2>
              <p className={`text-xs mt-2 uppercase tracking-widest font-bold opacity-70 ${currentBrand?.textColor}`}>
                {(currentBrand && BRAND_SUBLINE[currentBrand.id]) || 'TIÊU CHUẨN BẢO HÀNH CHÍNH HÃNG'}
              </p>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/2 opacity-20 flex items-center justify-end pr-10">
              {currentBrand?.id === 'Apple' && <ShieldCheck size={140} strokeWidth={1} />}
              {currentBrand?.id === 'Garmin' && <Watch size={140} strokeWidth={1} />}
              {currentBrand?.id === 'Android' && <Layers size={140} strokeWidth={1} />}
            </div>
          </div>

          {/* Hướng dẫn cài đặt Demo — card tóm tắt, bấm vào mở modal (chỉ hiện khi
              thương hiệu có dữ liệu demoGuide; hiện tại chỉ Apple có). */}
          {currentBrand?.demoGuide && currentBrand.demoGuide.length > 0 && (
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="w-full flex items-center gap-4 p-5 rounded-2xl border border-[#d2d2d7] dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm dark:shadow-none hover:border-[#c7c7cc] dark:hover:border-slate-600 hover:bg-[#f5f5f7] dark:hover:bg-slate-800 transition-all text-left group"
            >
              <div
                className="size-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${currentBrand.accentColor}1a`, color: currentBrand.accentColor }}
              >
                <ListChecks size={24} />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-bold text-[#1d1d1f] dark:text-slate-200">Hướng dẫn cài đặt Demo</h4>
                {/* Danh sách thiết bị lấy từ chính dữ liệu demoGuide, không hardcode tên
                    thiết bị Apple — nếu sau này hãng khác có demoGuide sẽ tự hiện đúng. */}
                <p className="text-xs text-[#6e6e73] dark:text-slate-500 mt-1">
                  Xem quy trình cài đặt / xóa / xử lý sự cố demo cho {currentBrand.demoGuide.map((d) => d.name).join(', ')}
                </p>
              </div>
              <ChevronRight size={18} className="text-[#6e6e73] dark:text-slate-500 group-hover:translate-x-0.5 transition-transform shrink-0" />
            </button>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Column 1: AI Analysis */}
            <div className="space-y-8">
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <Sparkles size={20} style={{ color: currentBrand?.accentColor }} />
                  <h3 className="text-xl font-bold tracking-tight">Tra lỗi &amp; Hỏi AI</h3>
                </div>
                <div className="bg-white dark:bg-slate-900/50 border border-[#d2d2d7] dark:border-slate-800 rounded-xl p-5 space-y-4 shadow-sm dark:shadow-inner">
                  <div className="space-y-3">
                    <textarea
                      ref={textareaRef}
                      value={errorDescription}
                      onChange={(e) => onErrorDescriptionChange(e.target.value)}
                      placeholder={
                        (currentBrand && BRAND_ERROR_PLACEHOLDER[currentBrand.id]) ||
                        'Mô tả tình trạng lỗi của thiết bị...'
                      }
                      className="w-full bg-[#f5f5f7] dark:bg-slate-800/50 border border-[#d2d2d7] dark:border-slate-700 rounded-lg p-4 text-sm text-[#1d1d1f] dark:text-slate-200 placeholder:text-[#6e6e73] dark:placeholder:text-slate-500 focus:ring-2 focus:border-transparent transition-all resize-none min-h-[120px]"
                      style={{ '--tw-ring-color': `${currentBrand?.accentColor}80` } as React.CSSProperties}
                    />
                  </div>

                  {/* opacity-only, không animate height: 'auto' — animation đó cần JS đo
                      kích thước qua requestAnimationFrame, nếu bị trì hoãn (tab nền, máy
                      yếu) phần tử kẹt ở height:0 = ẩn hoàn toàn dù điều kiện render đã
                      đúng. Từng gặp đúng lỗi này khi test — sửa luôn tại đây. */}
                  {librarySuggestions.length > 0 && (
                      <motion.div
                        ref={suggestionsRef}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-2 max-h-64 overflow-y-auto pr-1"
                      >
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                          <Zap size={12} />
                          Gợi ý tức thì từ thư viện (không cần AI)
                        </div>
                        {librarySuggestions.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => onUseLibrarySolution(item)}
                            className="w-full text-left p-3 rounded-lg border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/10 transition-all group"
                          >
                            <div className="flex items-center gap-2">
                              <Library size={14} className="text-emerald-400 shrink-0" />
                              <span className="text-sm font-bold text-[#1d1d1f] dark:text-slate-200 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
                                {item.symptom}
                              </span>
                            </div>
                            <p className="text-xs text-[#6e6e73] dark:text-slate-500 mt-1 line-clamp-1 pl-6">{item.solution}</p>
                          </button>
                        ))}
                      </motion.div>
                  )}

                  <div className="flex gap-3">
                    <button
                      onClick={onAnalyze}
                      disabled={isAnalyzing || !errorDescription.trim()}
                      className="flex-1 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl text-sm flex items-center justify-center gap-2 transition-all shadow-lg active:scale-[0.98]"
                      style={{
                        background: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
                        boxShadow: '0 10px 20px -8px #8b5cf699',
                      }}
                    >
                      {isAnalyzing ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Đang hỏi AI...
                        </>
                      ) : (
                        <>
                          <Sparkles size={18} />
                          Hỏi AI
                        </>
                      )}
                    </button>

                    <button
                      onClick={onResetAnalysis}
                      disabled={isAnalyzing || (!errorDescription.trim() && !analysisResult)}
                      className="px-5 bg-[#f5f5f7] dark:bg-slate-800 hover:bg-[#e8e8ed] dark:hover:bg-slate-700 disabled:opacity-50 text-[#6e6e73] dark:text-slate-400 hover:text-[#1d1d1f] dark:hover:text-slate-200 rounded-xl transition-all border border-[#d2d2d7] dark:border-slate-700 flex items-center justify-center active:scale-[0.98]"
                      title="Làm mới nội dung"
                    >
                      <RotateCcw size={18} />
                    </button>
                  </div>

                  {/* Nội dung kết quả đầy đủ nay hiển thị trong modal (không phải inline
                      như trước) — chỗ này chỉ còn 1 thẻ tóm tắt để mở lại modal sau khi
                      đã đóng, vì đóng modal KHÔNG xóa kết quả. Không có thẻ này thì kết
                      quả vẫn nằm trong state nhưng người dùng không còn đường mở lại. */}
                  {analysisResult && !isResultModalOpen && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="pt-4 border-t border-[#d2d2d7] dark:border-slate-800"
                      >
                        <button
                          onClick={onOpenResultModal}
                          className="w-full flex items-center gap-3 p-4 rounded-xl border transition-all text-left group"
                          style={{ backgroundColor: `${resultAccent}0d`, borderColor: `${resultAccent}33` }}
                        >
                          <div
                            className="size-8 rounded-full flex items-center justify-center shrink-0"
                            style={{ backgroundColor: resultAccent }}
                          >
                            <ResultIcon size={16} className="text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-xs font-bold uppercase tracking-widest block" style={{ color: resultAccent }}>
                              {resultTitle}
                            </span>
                            <p className="text-xs text-[#6e6e73] dark:text-slate-500 mt-0.5 line-clamp-1">
                              {analysisResult}
                            </p>
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-widest shrink-0" style={{ color: resultAccent }}>
                            Xem lại
                          </span>
                          <ChevronRight size={16} className="shrink-0 group-hover:translate-x-0.5 transition-transform" style={{ color: resultAccent }} />
                        </button>
                      </motion.div>
                  )}
                </div>
              </section>
            </div>

            {/* Column 2: Scripts & Processes */}
            <div className="space-y-8">
              {/* Scripts */}
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold tracking-tight">Kịch bản tư vấn</h3>
                  <span className="text-[10px] text-[#6e6e73] dark:text-slate-500 font-bold uppercase tracking-widest">Tự nhiên • Gần gũi</span>
                </div>
                <div className="grid gap-3">
                  {currentBrand?.scripts.map((script) => (
                    <div
                      key={script.id}
                      className="p-4 rounded-xl border group hover:border-[#c7c7cc] dark:hover:border-slate-600 transition-all"
                      style={{
                        backgroundColor: script.type === 'premium' ? `${currentBrand?.accentColor}1a` : 'var(--neutral-card-bg)',
                        borderColor: script.type === 'premium' ? `${currentBrand?.accentColor}33` : 'var(--neutral-border)',
                      }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <MessageSquare size={14} style={{ color: script.type === 'premium' ? currentBrand?.accentColor : 'var(--neutral-text-secondary)' }} />
                        <span
                          className="text-[11px] font-bold uppercase tracking-widest"
                          style={{ color: script.type === 'premium' ? currentBrand?.accentColor : 'var(--neutral-text-secondary)' }}
                        >
                          {script.label}
                        </span>
                      </div>
                      <p className={`text-sm leading-relaxed ${script.type === 'premium' ? 'italic text-[#1d1d1f] dark:text-slate-300' : 'text-[#6e6e73] dark:text-slate-400'}`}>
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
                  {/* Dynamic Warnings — không dùng AnimatePresence: cảnh báo phải biến mất
                      NGAY khi mô tả lỗi không còn khớp từ khóa nữa, không được phép còn sót
                      lại một cảnh báo (nhất là an toàn) của mô tả lỗi trước đó. */}
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
                        className="p-4 rounded-xl border border-red-500/30 bg-red-500/10 shadow-lg shadow-red-500/5"
                      >
                        <div className="flex items-start gap-3">
                          <AlertTriangle size={18} className="text-red-500 shrink-0 mt-0.5" />
                          <p className="text-sm font-bold text-red-400 leading-relaxed">{warning.message}</p>
                        </div>
                      </motion.div>
                  ))}

                  {currentBrand?.processes.map((process) => {
                    const Icon = IconMap[process.icon] || FileText;
                    return (
                      <div
                        key={process.id}
                        className="flex items-start gap-4 p-4 rounded-xl border border-[#d2d2d7] dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm dark:shadow-none hover:bg-[#f5f5f7] dark:hover:bg-slate-800 transition-all group"
                      >
                        <div className="size-12 rounded-lg bg-[#f5f5f7] dark:bg-slate-800 group-hover:bg-[#e8e8ed] dark:group-hover:bg-slate-700 flex items-center justify-center shrink-0 transition-colors">
                          <Icon size={24} style={{ color: currentBrand?.accentColor }} />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-bold text-[#1d1d1f] dark:text-slate-200">{process.title}</h4>
                          <p className="text-xs text-[#6e6e73] dark:text-slate-500 mt-1 leading-relaxed">{process.description}</p>
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

      {/* Modal "Hướng dẫn cài đặt Demo" — không dùng AnimatePresence để đóng: nhất
          quán với các chỗ khác trong app, đóng modal phải diễn ra NGAY khi bấm, không
          phụ thuộc animation thoát hoàn tất (đã từng gặp animation bị trì hoãn ở tab
          nền/máy yếu khiến nội dung/màn hình kẹt lại — với modal, hậu quả còn tệ hơn
          vì sẽ khóa người dùng không thoát ra được). Chỉ animate lúc MỞ. */}
      {isDemoModalOpen && currentBrand?.demoGuide && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          onClick={() => setIsDemoModalOpen(false)}
        >
          <div className="absolute inset-0 bg-black/50 dark:bg-black/70" />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.15 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full sm:max-w-3xl max-h-[85vh] rounded-2xl bg-white dark:bg-[#101922] border border-[#d2d2d7] dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col"
          >
            <div className="flex justify-end p-2 border-b border-[#d2d2d7] dark:border-slate-800 shrink-0">
              <button
                onClick={() => setIsDemoModalOpen(false)}
                className="p-2 rounded-full hover:bg-[#f5f5f7] dark:hover:bg-slate-800 text-[#6e6e73] dark:text-slate-400 hover:text-[#1d1d1f] dark:hover:text-slate-200 transition-colors"
                title="Đóng"
              >
                <X size={20} />
              </button>
            </div>
            <div className="overflow-y-auto p-5">
              <DemoGuideSection devices={currentBrand.demoGuide} accentColor={currentBrand.accentColor} />
            </div>
          </motion.div>
        </div>
      )}

      {/* Modal kết quả (gợi ý thư viện đã chọn / câu trả lời AI) — cùng pattern với modal
          Hướng dẫn cài demo ở trên: chỉ animate lúc mở, đóng tức thời. State tách riêng
          (isDemoModalOpen vs isResultModalOpen) để 2 modal không xung đột nhau. */}
      {isResultModalOpen && analysisResult && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          onClick={onCloseResultModal}
        >
          <div className="absolute inset-0 bg-black/50 dark:bg-black/70" />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.15 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full sm:max-w-3xl max-h-[85vh] rounded-2xl bg-white dark:bg-[#101922] border border-[#d2d2d7] dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col"
          >
            <div
              className="flex items-center gap-2 p-4 border-b shrink-0"
              style={{ backgroundColor: `${resultAccent}0d`, borderColor: `${resultAccent}33` }}
            >
              <div
                className="size-8 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: resultAccent }}
              >
                <ResultIcon size={16} className="text-white" />
              </div>
              <div className="min-w-0">
                <span className="text-xs font-bold uppercase tracking-widest block" style={{ color: resultAccent }}>
                  {resultTitle}
                </span>
                <span className="text-[10px] text-[#6e6e73] dark:text-slate-500 uppercase tracking-widest font-bold">
                  {resultNote}
                </span>
              </div>
              <div className="ml-auto flex items-center gap-1 shrink-0">
                <button
                  onClick={onResetAnalysis}
                  className="p-2 hover:bg-[#f5f5f7] dark:hover:bg-slate-800 rounded-md transition-colors text-[#6e6e73] dark:text-slate-500 hover:text-[#1d1d1f] dark:hover:text-slate-300"
                  title="Làm mới tất cả"
                >
                  <RotateCcw size={16} />
                </button>
                <button
                  onClick={onClearResult}
                  className="p-2 hover:bg-[#f5f5f7] dark:hover:bg-slate-800 rounded-md transition-colors text-[#6e6e73] dark:text-slate-500 hover:text-[#1d1d1f] dark:hover:text-slate-300"
                  title="Xóa kết quả"
                >
                  <Trash2 size={16} />
                </button>
                <button
                  onClick={onCloseResultModal}
                  className="p-2 rounded-full hover:bg-[#f5f5f7] dark:hover:bg-slate-800 text-[#6e6e73] dark:text-slate-400 hover:text-[#1d1d1f] dark:hover:text-slate-200 transition-colors"
                  title="Đóng"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            <div className="overflow-y-auto p-5">
              <div className="text-sm text-[#1d1d1f] dark:text-slate-300 leading-relaxed whitespace-pre-wrap prose prose-invert prose-sm max-w-none">
                {analysisResult}
              </div>
            </div>
          </motion.div>
        </div>
      )}

      <ScrollToTopButton />
    </motion.div>
  );
}
