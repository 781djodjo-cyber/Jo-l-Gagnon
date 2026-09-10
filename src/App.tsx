import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Scale, 
  Building2, 
  ShieldAlert, 
  AlertOctagon, 
  HeartHandshake, 
  FileText, 
  BookOpen,
  FolderArchive,
  Search,
  CheckCircle2,
  Lock
} from 'lucide-react';
import { ViewTab, InvestigationReport, SavedDossier } from './types';
import { Header } from './components/Header';
import { InvestigationSearchBar } from './components/InvestigationSearchBar';
import { InvestigationReportView } from './components/InvestigationReportView';
import { CasesGallery } from './components/CasesGallery';
import { SpeechCheckView } from './components/SpeechCheckView';
import { WhistleblowerGuideView } from './components/WhistleblowerGuideView';
import { InteractiveChatView } from './components/InteractiveChatView';
import { HistoryDrawer } from './components/HistoryDrawer';

const LOCAL_STORAGE_HISTORY_KEY = 'transparence_qc_history';
const LOCAL_STORAGE_THEME_KEY = 'transparence_qc_theme';

export const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<ViewTab>('investigate');
  const [activeReport, setActiveReport] = useState<InvestigationReport | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  // Dark Mode State
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
      if (savedTheme) return savedTheme === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // History State
  const [history, setHistory] = useState<SavedDossier[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(LOCAL_STORAGE_HISTORY_KEY);
        return saved ? JSON.parse(saved) : [];
      } catch {
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_HISTORY_KEY, JSON.stringify(history));
    } catch (e) {
      console.warn("Impossible d'enregistrer l'historique:", e);
    }
  }, [history]);

  const handleToggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleInvestigate = async (query: string) => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/transparence/investigate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Une erreur est survenue lors de l'investigation.");
      }

      if (data.data) {
        const report: InvestigationReport = data.data;
        setActiveReport(report);

        // Save to history
        const newDossier: SavedDossier = {
          id: report.id || `inv-${Date.now()}`,
          timestamp: Date.now(),
          subject: report.subject,
          report,
        };

        setHistory((prev) => [newDossier, ...prev.filter((d) => d.subject !== report.subject)].slice(0, 30));
      }
    } catch (err: any) {
      console.error("Erreur d'investigation:", err);
      setErrorMessage(err?.message || "Impossible de contacter le moteur d'investigation.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectDossier = (report: InvestigationReport) => {
    setActiveReport(report);
  };

  const handleReset = () => {
    setActiveReport(null);
  };

  const handleSelectTab = (tab: ViewTab) => {
    setCurrentTab(tab);
    setActiveReport(null);
  };

  const handleClearHistory = () => {
    setHistory([]);
    localStorage.removeItem(LOCAL_STORAGE_HISTORY_KEY);
  };

  return (
    <div className="min-h-screen bg-stone-100 dark:bg-stone-950 text-stone-900 dark:text-stone-100 flex flex-col font-sans transition-colors duration-200">
      {/* Platform Header */}
      <Header
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        isDarkMode={isDarkMode}
        onToggleDarkMode={handleToggleDarkMode}
        historyCount={history.length}
        onOpenHistory={() => setIsHistoryOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Hero Section if no active report is open */}
        {!activeReport && (
          <div className="text-center space-y-4 max-w-3xl mx-auto pt-2 pb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/10 dark:bg-blue-800/30 text-blue-900 dark:text-blue-300 text-xs font-bold border border-blue-900/20 dark:border-blue-700/40">
              <Scale className="w-4 h-4 text-blue-800 dark:text-blue-400" />
              <span>Pour la vérité, la transparence et l'avenir de nos enfants au Québec</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight font-serif text-stone-950 dark:text-stone-50 leading-tight">
              Vigie Citoyenne de l'Intégrité Publique
            </h1>

            <p className="text-stone-600 dark:text-stone-400 text-sm sm:text-base md:text-lg leading-relaxed">
              Scrutin documentaire impartial des contrats de l'État, du lobbyisme, des conflits d'intérêts et des débats de l'Assemblée nationale du Québec. Les faits vérifiés sans complaisance, adossés aux registres officiels.
            </p>
          </div>
        )}

        {/* Error Alert */}
        {errorMessage && (
          <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-900 dark:text-rose-300 flex items-start gap-3">
            <AlertOctagon className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div className="flex-1">
              <h4 className="font-bold text-sm">Erreur d'investigation</h4>
              <p className="text-xs sm:text-sm mt-0.5">{errorMessage}</p>
            </div>
            <button
              onClick={() => setErrorMessage(null)}
              className="text-xs font-semibold hover:underline cursor-pointer"
            >
              Fermer
            </button>
          </div>
        )}

        {/* Primary View Router */}
        {activeReport ? (
          <InvestigationReportView
            report={activeReport}
            onReset={handleReset}
          />
        ) : (
          <>
            {currentTab === 'investigate' && (
              <InvestigationSearchBar
                onInvestigate={handleInvestigate}
                isLoading={isLoading}
              />
            )}

            {currentTab === 'chat_ai' && (
              <InteractiveChatView
                onTriggerFullInvestigation={(q) => {
                  setCurrentTab('investigate');
                  handleInvestigate(q);
                }}
                onNavigateToTab={(t) => setCurrentTab(t)}
              />
            )}

            {currentTab === 'cases' && (
              <CasesGallery
                onSelectDossier={handleSelectDossier}
              />
            )}

            {currentTab === 'speech_check' && (
              <SpeechCheckView
                onAnalyzeSpeech={handleInvestigate}
                isLoading={isLoading}
              />
            )}

            {currentTab === 'whistleblower_guide' && (
              <WhistleblowerGuideView />
            )}
          </>
        )}

        {/* Civic Manifesto Pillars (when idle on investigation view) */}
        {!activeReport && currentTab === 'investigate' && (
          <div className="pt-8 border-t border-stone-200/80 dark:border-stone-800/80">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
              <div className="p-5 rounded-2xl bg-white dark:bg-stone-900/60 border border-stone-200/70 dark:border-stone-800/70 shadow-2xs">
                <div className="w-9 h-9 rounded-xl bg-blue-900/10 text-blue-800 dark:text-blue-300 flex items-center justify-center mb-3">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-stone-900 dark:text-stone-100 text-sm mb-1.5 font-serif">
                  Assemblée Nationale
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
                  Confrontation des déclarations au Salon bleu avec les comptes réels et le Journal des débats.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-stone-900/60 border border-stone-200/70 dark:border-stone-800/70 shadow-2xs">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-700 dark:text-amber-400 flex items-center justify-center mb-3">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-stone-900 dark:text-stone-100 text-sm mb-1.5 font-serif">
                  Pour Nos Enfants
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
                  Chaque dollar détourné ou gaspillé est soustrait aux écoles, aux CPE et à la protection de la jeunesse.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-stone-900/60 border border-stone-200/70 dark:border-stone-800/70 shadow-2xs">
                <div className="w-9 h-9 rounded-xl bg-rose-500/10 text-rose-700 dark:text-rose-400 flex items-center justify-center mb-3">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-stone-900 dark:text-stone-100 text-sm mb-1.5 font-serif">
                  Conflits d'Intérêts
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
                  Dépistage des portes tournantes, du lobbyisme non inscrit et des contrats de gré à gré du SEAO.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-stone-900/60 border border-stone-200/70 dark:border-stone-800/70 shadow-2xs">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mb-3">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-stone-900 dark:text-stone-100 text-sm mb-1.5 font-serif">
                  Canaux Légaux Protégés
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
                  Accompagnement rigoureux vers le Protecteur du citoyen et l'UPAC avec garantie d'immunité.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200 dark:border-stone-800/80 py-6 px-4 text-center text-xs text-stone-500 dark:text-stone-400 bg-white/50 dark:bg-stone-900/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-stone-800 dark:text-stone-200">Transparence Québec</span>
            <span>•</span>
            <span>Plateforme Citoyenne d'Intégrité Démocratique</span>
          </div>
          <p>
            Fondé sur les archives de l'Assemblée nationale, le SEAO, les rapports du VGQ, l'UPAC et le Commissaire à l'éthique.
          </p>
        </div>
      </footer>

      {/* History Drawer */}
      <HistoryDrawer
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        history={history}
        onSelect={handleSelectDossier}
        onClear={handleClearHistory}
      />
    </div>
  );
};

export default App;
