/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useEffect } from 'react';
import { AlertCircle, Home, Library, History as HistoryIcon } from 'lucide-react';
import { AnimatePresence } from 'motion/react';
import { BRANDS } from './constants';
import { Brand, LibraryEntry } from './types';
import { analyzeError, getHealth } from './api/client';
import { usePresence } from './hooks/usePresence';
import { useHistory, HistoryItem } from './hooks/useHistory';
import { NavItem } from './components/NavItem';
import { HomeView } from './components/HomeView';
import { DetailView } from './components/DetailView';
import { LibraryView } from './components/LibraryView';
import { HistoryView } from './components/HistoryView';

export default function App() {
  const [currentBrandId, setCurrentBrandId] = useState<Brand | null>(null);
  const [activeTab, setActiveTab] = useState<Brand>('Apple');
  const [view, setView] = useState<'docs' | 'history' | 'library'>('docs');
  const [aiConfigured, setAiConfigured] = useState<boolean | null>(null);

  // AI Analysis State (Brand-specific)
  const [errorDescriptions, setErrorDescriptions] = useState<Record<string, string>>({});
  const [analysisResults, setAnalysisResults] = useState<Record<string, string | null>>({});
  const [isAnalyzingMap, setIsAnalyzingMap] = useState<Record<string, boolean>>({});
  const [historySearchTerm, setHistorySearchTerm] = useState('');
  const [docSearchTerm, setDocSearchTerm] = useState('');
  const [librarySearchTerm, setLibrarySearchTerm] = useState('');

  const { presence, globalOnline, isConnected } = usePresence(currentBrandId);
  const { history, addHistoryItem, removeHistoryItem, clearHistory } = useHistory();

  useEffect(() => {
    getHealth()
      .then((data) => setAiConfigured(data.aiConfigured))
      .catch(() => setAiConfigured(false));
  }, []);

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

  const resetAnalysis = () => {
    if (!currentBrand) return;
    const bid = currentBrand.id;
    setErrorDescriptions((prev) => ({ ...prev, [bid]: '' }));
    setAnalysisResults((prev) => ({ ...prev, [bid]: null }));
    setIsAnalyzingMap((prev) => ({ ...prev, [bid]: false }));
  };

  const handleAnalyze = async () => {
    if (!errorDescription.trim() || !currentBrand) return;

    const bid = currentBrand.id;
    setIsAnalyzingMap((prev) => ({ ...prev, [bid]: true }));
    setAnalysisResults((prev) => ({ ...prev, [bid]: null }));

    try {
      const resultText = await analyzeError(bid, errorDescription);
      setAnalysisResults((prev) => ({ ...prev, [bid]: resultText }));
      addHistoryItem({ brandId: bid, description: errorDescription, result: resultText });
    } catch (error: any) {
      console.error('AI Analysis Error:', error);
      setAnalysisResults((prev) => ({ ...prev, [bid]: error?.message || 'Đã có lỗi xảy ra trong quá trình phân tích. Vui lòng thử lại sau.' }));
    } finally {
      setIsAnalyzingMap((prev) => ({ ...prev, [bid]: false }));
    }
  };

  const handleQuickAccess = (item: LibraryEntry) => {
    setCurrentBrandId(item.brandId);
    setActiveTab(item.brandId);
    setAnalysisResults((prev) => ({ ...prev, [item.brandId]: item.solution }));
    setErrorDescriptions((prev) => ({ ...prev, [item.brandId]: item.symptom }));
    setView('docs');
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
  };

  const handleOpenHistoryItem = (item: HistoryItem) => {
    setCurrentBrandId(item.brandId);
    setActiveTab(item.brandId);
    setAnalysisResults((prev) => ({ ...prev, [item.brandId]: item.result }));
    setErrorDescriptions((prev) => ({ ...prev, [item.brandId]: item.description }));
    setView('docs');
  };

  return (
    <div className="min-h-screen bg-[#0a0f14] text-slate-100 font-sans selection:bg-blue-500/30">
      <div className="max-w-6xl mx-auto min-h-screen flex flex-col relative border-x border-slate-800 shadow-2xl bg-[#101922]">
        <main className="flex-1 overflow-y-auto pb-24">
          {aiConfigured === false && (
            <div className="bg-amber-500/10 border-b border-amber-500/20 px-4 py-2 flex items-center gap-2">
              <AlertCircle size={14} className="text-amber-500" />
              <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest">
                Thiếu GEMINI_API_KEY trên máy chủ. Chức năng AI có thể không hoạt động.
              </span>
            </div>
          )}
          <AnimatePresence mode="wait">
            {view === 'docs' ? (
              !currentBrandId ? (
                <HomeView
                  presence={presence}
                  globalOnline={globalOnline}
                  isConnected={isConnected}
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
                  presence={presence}
                  errorDescription={errorDescription}
                  analysisResult={analysisResult}
                  isAnalyzing={isAnalyzing}
                  dynamicWarnings={dynamicWarnings}
                  onBack={handleBack}
                  onSelectTab={(brandId) => {
                    setActiveTab(brandId);
                    setCurrentBrandId(brandId);
                  }}
                  onErrorDescriptionChange={(value) =>
                    setErrorDescriptions((prev) => ({ ...prev, [currentBrand?.id || '']: value }))
                  }
                  onAnalyze={handleAnalyze}
                  onResetAnalysis={resetAnalysis}
                  onClearResult={() => setAnalysisResults((prev) => ({ ...prev, [currentBrand?.id || '']: null }))}
                  onUseLibrarySolution={handleUseLibrarySolution}
                />
              )
            ) : view === 'library' ? (
              <LibraryView
                filteredLibrary={filteredLibrary}
                librarySearchTerm={librarySearchTerm}
                onLibrarySearchChange={setLibrarySearchTerm}
                onBack={() => setView('docs')}
                onOpenEntry={handleOpenLibraryEntry}
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
        <nav className="fixed bottom-0 left-0 right-0 max-w-6xl mx-auto z-50 bg-[#101922]/90 backdrop-blur-xl border-t border-slate-800 pb-6 pt-2 px-4 flex justify-around items-center">
          <NavItem icon={<Home size={24} />} label="Trang chủ" active={view === 'docs'} onClick={() => setView('docs')} />
          <NavItem icon={<Library size={24} />} label="Thư viện" active={view === 'library'} onClick={() => setView('library')} />
          <NavItem icon={<HistoryIcon size={24} />} label="Lịch sử" active={view === 'history'} onClick={() => setView('history')} />
        </nav>
      </div>
    </div>
  );
}
