/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useEffect } from 'react';
import { AlertCircle, Home, Library, History as HistoryIcon, Sun, Moon } from 'lucide-react';
import { AnimatePresence } from 'motion/react';
import { BRANDS } from './constants';
import { Brand, LibraryEntry, ResultSource } from './types';
import { analyzeError, getHealth } from './api/client';
import { useHistory, HistoryItem } from './hooks/useHistory';
import { NavItem } from './components/NavItem';
import { HomeView } from './components/HomeView';
import { DetailView } from './components/DetailView';
import { LibraryView } from './components/LibraryView';
import { HistoryView } from './components/HistoryView';
import { MAIN_SCROLL_CONTAINER_ID } from './lib/scrollContainer';

export default function App() {
  const [currentBrandId, setCurrentBrandId] = useState<Brand | null>(null);
  const [activeTab, setActiveTab] = useState<Brand>('Apple');
  const [view, setView] = useState<'docs' | 'history' | 'library'>('docs');
  const [aiConfigured, setAiConfigured] = useState<boolean | null>(null);
  const [isOnline, setIsOnline] = useState(true);

  // AI Analysis State (Brand-specific)
  const [errorDescriptions, setErrorDescriptions] = useState<Record<string, string>>({});
  const [analysisResults, setAnalysisResults] = useState<Record<string, string | null>>({});
  const [isAnalyzingMap, setIsAnalyzingMap] = useState<Record<string, boolean>>({});
  const [historySearchTerm, setHistorySearchTerm] = useState('');
  const [docSearchTerm, setDocSearchTerm] = useState('');
  const [librarySearchTerm, setLibrarySearchTerm] = useState('');
  const [aiFocusSignal, setAiFocusSignal] = useState(0);
  // Nguồn của kết quả đang hiển thị theo từng hãng — dùng để ghi đúng nhãn
  // "Kết quả từ Thư viện" (đã kiểm duyệt) vs "Kết quả từ AI" (tham khảo thêm).
  const [resultSources, setResultSources] = useState<Record<string, ResultSource>>({});
  // Modal kết quả để ở App (không phải signal + state trong DetailView) vì kết quả có
  // thể được mở từ 4 nơi, 3 trong số đó nằm ngoài DetailView. Xem ghi chú ở
  // handleQuickAccess về lý do chọn state điều khiển thay vì tín hiệu tăng dần.
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      const saved = localStorage.getItem('theme');
      return saved === 'dark' ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });

  const { history, addHistoryItem, removeHistoryItem, clearHistory } = useHistory();

  // Một lần gọi /api/health phục vụ cả 2 mục đích: biết máy chủ đã cấu hình
  // GEMINI_API_KEY chưa, và làm nguồn cho badge kết nối ở trang chủ.
  // (Trước đây badge dựa vào kết nối Socket.IO — đã gỡ vì production chạy trên
  // Netlify Functions, không có server Socket.IO nào để kết nối tới.)
  useEffect(() => {
    let cancelled = false;

    const check = () => {
      getHealth()
        .then((data) => {
          if (cancelled) return;
          setAiConfigured(data.aiConfigured);
          setIsOnline(true);
        })
        .catch(() => {
          if (cancelled) return;
          // Cố tình KHÔNG đặt aiConfigured = false ở đây: gọi hỏng thường là do mất
          // mạng, không phải do máy chủ thiếu key — đặt false sẽ hiện nhầm cảnh báo
          // "Thiếu GEMINI_API_KEY". Trạng thái mạng đã được badge phản ánh riêng.
          setIsOnline(false);
        });
    };

    check();
    const interval = setInterval(check, 30_000);
    const goOffline = () => setIsOnline(false);
    window.addEventListener('online', check);
    window.addEventListener('offline', goOffline);

    return () => {
      cancelled = true;
      clearInterval(interval);
      window.removeEventListener('online', check);
      window.removeEventListener('offline', goOffline);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // localStorage không khả dụng (chế độ ẩn danh, đã tắt) — theme vẫn hoạt động,
      // chỉ không nhớ được lựa chọn cho lần sau.
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  const filteredHistory = useMemo(() => {
    if (!historySearchTerm.trim()) return history;
    const term = historySearchTerm.toLowerCase();
    return history.filter((item) => {
      const brand = BRANDS.find((b) => b.id === item.brandId);
      return (
        item.description.toLowerCase().includes(term) ||
        item.result.toLowerCase().includes(term) ||
        brand?.name.toLowerCase().includes(term)
      );
    });
  }, [history, historySearchTerm]);

  const filteredLibrary = useMemo<LibraryEntry[]>(() => {
    const allItems: LibraryEntry[] = BRANDS.flatMap((brand) =>
      (brand.library || []).map((item) => ({ ...item, brandName: brand.name, brandColor: brand.accentColor, brandId: brand.id }))
    );
    if (!librarySearchTerm.trim()) return allItems;
    const term = librarySearchTerm.toLowerCase();
    return allItems.filter(
      (item) =>
        item.symptom.toLowerCase().includes(term) ||
        item.diagnosis.toLowerCase().includes(term) ||
        item.solution.toLowerCase().includes(term) ||
        item.keywords.some((k) => k.toLowerCase().includes(term)) ||
        item.brandName.toLowerCase().includes(term)
    );
  }, [librarySearchTerm]);

  const currentBrand = useMemo(() => BRANDS.find((b) => b.id === (currentBrandId || activeTab)), [currentBrandId, activeTab]);

  const errorDescription = errorDescriptions[currentBrand?.id || ''] || '';
  const analysisResult = analysisResults[currentBrand?.id || ''] || null;
  const isAnalyzing = isAnalyzingMap[currentBrand?.id || ''] || false;
  const resultSource = resultSources[currentBrand?.id || ''] || 'ai';

  const dynamicWarnings = useMemo(() => {
    if (!currentBrand || !currentBrand.dynamicWarnings || !errorDescription) return [];
    const desc = errorDescription.toLowerCase();
    return currentBrand.dynamicWarnings.filter((w) => w.keywords.some((k) => desc.includes(k.toLowerCase())));
  }, [currentBrand, errorDescription]);

  const handleOpenBrand = (brandId: Brand) => {
    setCurrentBrandId(brandId);
    setActiveTab(brandId);
  };

  const handleBack = () => setCurrentBrandId(null);

  // Nút "Trang chủ" ở thanh dưới: phải reset cả currentBrandId, không chỉ view —
  // nếu đang xem chi tiết 1 hãng thì view đã là 'docs' rồi, chỉ setView sẽ không
  // làm gì cả và người dùng kẹt lại ở trang chi tiết.
  const handleGoHome = () => {
    setView('docs');
    setCurrentBrandId(null);
  };

  const resetAnalysis = () => {
    if (!currentBrand) return;
    const bid = currentBrand.id;
    setErrorDescriptions((prev) => ({ ...prev, [bid]: '' }));
    setAnalysisResults((prev) => ({ ...prev, [bid]: null }));
    setIsAnalyzingMap((prev) => ({ ...prev, [bid]: false }));
    setResultSources((prev) => ({ ...prev, [bid]: 'ai' }));
    setIsResultModalOpen(false);
  };

  const handleClearResult = () => {
    const bid = currentBrand?.id || '';
    setAnalysisResults((prev) => ({ ...prev, [bid]: null }));
    setResultSources((prev) => ({ ...prev, [bid]: 'ai' }));
    setIsResultModalOpen(false);
  };

  const handleAnalyze = async () => {
    if (!errorDescription.trim() || !currentBrand) return;

    const bid = currentBrand.id;
    setIsAnalyzingMap((prev) => ({ ...prev, [bid]: true }));
    setAnalysisResults((prev) => ({ ...prev, [bid]: null }));

    try {
      const resultText = await analyzeError(bid, errorDescription);
      setAnalysisResults((prev) => ({ ...prev, [bid]: resultText }));
      setResultSources((prev) => ({ ...prev, [bid]: 'ai' }));
      setIsResultModalOpen(true);
      addHistoryItem({ brandId: bid, description: errorDescription, result: resultText });
    } catch (error: any) {
      console.error('AI Analysis Error:', error);
      setAnalysisResults((prev) => ({ ...prev, [bid]: error?.message || 'Đã có lỗi xảy ra trong quá trình phân tích. Vui lòng thử lại sau.' }));
      setResultSources((prev) => ({ ...prev, [bid]: 'ai' }));
      setIsResultModalOpen(true);
    } finally {
      setIsAnalyzingMap((prev) => ({ ...prev, [bid]: false }));
    }
  };

  const handleQuickAccess = (item: LibraryEntry) => {
    setCurrentBrandId(item.brandId);
    setActiveTab(item.brandId);
    setAnalysisResults((prev) => ({ ...prev, [item.brandId]: item.solution }));
    setResultSources((prev) => ({ ...prev, [item.brandId]: 'library' }));
    setErrorDescriptions((prev) => ({ ...prev, [item.brandId]: item.symptom }));
    setView('docs');
    setIsResultModalOpen(true);
  };

  const handleOpenLibraryEntry = (item: LibraryEntry) => {
    setCurrentBrandId(item.brandId);
    setActiveTab(item.brandId);
    setView('docs');
    setErrorDescriptions((prev) => ({ ...prev, [item.brandId]: item.symptom }));
  };

  const handleUseLibrarySolution = (item: { solution: string }) => {
    if (!currentBrand) return;
    setAnalysisResults((prev) => ({ ...prev, [currentBrand.id]: item.solution }));
    setResultSources((prev) => ({ ...prev, [currentBrand.id]: 'library' }));
    setIsResultModalOpen(true);
  };

  const handleAskAI = () => {
    setCurrentBrandId(activeTab);
    setView('docs');
    setAiFocusSignal((n) => n + 1);
  };

  const handleOpenHistoryItem = (item: HistoryItem) => {
    setCurrentBrandId(item.brandId);
    setActiveTab(item.brandId);
    setAnalysisResults((prev) => ({ ...prev, [item.brandId]: item.result }));
    // Lịch sử chỉ lưu kết quả AI (chỉ handleAnalyze mới gọi addHistoryItem).
    setResultSources((prev) => ({ ...prev, [item.brandId]: 'ai' }));
    setErrorDescriptions((prev) => ({ ...prev, [item.brandId]: item.description }));
    setView('docs');
    setIsResultModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7] dark:bg-[#0a0f14] text-[#1d1d1f] dark:text-slate-100 font-sans selection:bg-blue-500/30">
      <div className="max-w-6xl mx-auto min-h-screen flex flex-col relative border-x border-[#d2d2d7] dark:border-slate-800 shadow-2xl bg-white dark:bg-[#101922]">
        {/* Đã bỏ `overflow-y-auto` ở đây (trước có nhưng vô tác dụng): khung bọc dùng
            `min-h-screen` nên <main> tự giãn theo nội dung, clientHeight luôn = scrollHeight
            và main không bao giờ cuộn — window mới là thứ cuộn. Tệ hơn: `overflow-y-auto`
            vẫn biến main thành containing block của `position: sticky`, khiến MỌI header
            sticky bên trong (DetailView/LibraryView/HistoryView) bị cuộn trôi mất thay vì
            dính lại. Bỏ nó đi thì sticky bám đúng vào viewport. */}
        <main id={MAIN_SCROLL_CONTAINER_ID} className="flex-1 pb-24">
          {aiConfigured === false && (
            <div className="bg-amber-500/10 border-b border-amber-500/20 px-4 py-2 flex items-center gap-2">
              <AlertCircle size={14} className="text-amber-500" />
              <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest">
                Thiếu GEMINI_API_KEY trên máy chủ. Chức năng AI có thể không hoạt động.
              </span>
            </div>
          )}
          {/* mode="wait" cố tình bỏ: nó chờ animation thoát của trang cũ chạy xong mới
              mount trang mới — nếu animation đó bị trì hoãn (tab nền, máy yếu), người
              dùng sẽ kẹt nhìn thấy trang cũ dù đã điều hướng sang trang khác (đã gặp
              đúng lỗi này ở DemoGuideSection). Không mode nghĩa là 2 trang animate song
              song, trang mới luôn xuất hiện ngay không phụ thuộc animation trang cũ. */}
          <AnimatePresence>
            {view === 'docs' ? (
              !currentBrandId ? (
                <HomeView
                  isConnected={isOnline}
                  docSearchTerm={docSearchTerm}
                  onDocSearchChange={setDocSearchTerm}
                  onOpenBrand={handleOpenBrand}
                  onShowLibrary={() => setView('library')}
                  onQuickAccess={handleQuickAccess}
                />
              ) : (
                <DetailView
                  currentBrand={currentBrand}
                  activeTab={activeTab}
                  errorDescription={errorDescription}
                  analysisResult={analysisResult}
                  isAnalyzing={isAnalyzing}
                  dynamicWarnings={dynamicWarnings}
                  onBack={handleBack}
                  onSelectTab={(brandId) => {
                    setActiveTab(brandId);
                    setCurrentBrandId(brandId);
                  }}
                  onErrorDescriptionChange={(value) => {
                    const bid = currentBrand?.id || '';
                    setErrorDescriptions((prev) => ({ ...prev, [bid]: value }));
                    // Người dùng đang sửa lại mô tả lỗi — kết quả cũ (ứng với mô tả
                    // trước đó) không còn khớp nữa, xóa để tránh nhân viên đọc nhầm
                    // hướng xử lý của lỗi cũ áp cho lỗi mới đang gõ.
                    setAnalysisResults((prev) => (prev[bid] ? { ...prev, [bid]: null } : prev));
                  }}
                  onAnalyze={handleAnalyze}
                  onResetAnalysis={resetAnalysis}
                  onClearResult={handleClearResult}
                  onUseLibrarySolution={handleUseLibrarySolution}
                  focusSignal={aiFocusSignal}
                  resultSource={resultSource}
                  isResultModalOpen={isResultModalOpen}
                  onOpenResultModal={() => setIsResultModalOpen(true)}
                  onCloseResultModal={() => setIsResultModalOpen(false)}
                />
              )
            ) : view === 'library' ? (
              <LibraryView
                filteredLibrary={filteredLibrary}
                librarySearchTerm={librarySearchTerm}
                onLibrarySearchChange={setLibrarySearchTerm}
                onBack={() => setView('docs')}
                onOpenEntry={handleOpenLibraryEntry}
                onAskAI={handleAskAI}
              />
            ) : (
              <HistoryView
                history={history}
                filteredHistory={filteredHistory}
                historySearchTerm={historySearchTerm}
                onHistorySearchChange={setHistorySearchTerm}
                onBack={() => setView('docs')}
                onClearHistory={clearHistory}
                onRemoveItem={removeHistoryItem}
                onOpenItem={handleOpenHistoryItem}
              />
            )}
          </AnimatePresence>
        </main>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 max-w-6xl mx-auto z-50 bg-white/90 dark:bg-[#101922]/90 backdrop-blur-xl border-t border-[#d2d2d7] dark:border-slate-800 pb-6 pt-2 px-4 flex justify-around items-center">
          <NavItem icon={<Home size={24} />} label="Trang chủ" active={view === 'docs' && !currentBrandId} onClick={handleGoHome} />
          <NavItem icon={<Library size={24} />} label="Thư viện" active={view === 'library'} onClick={() => setView('library')} />
          <NavItem icon={<HistoryIcon size={24} />} label="Lịch sử" active={view === 'history'} onClick={() => setView('history')} />
          <NavItem
            icon={theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
            label={theme === 'dark' ? 'Sáng' : 'Tối'}
            active={false}
            onClick={toggleTheme}
          />
        </nav>
      </div>
    </div>
  );
}
