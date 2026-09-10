import React from 'react';
import { 
  ShieldAlert, 
  Search, 
  FolderArchive, 
  BookOpen, 
  MessageSquareQuote, 
  History, 
  Sun, 
  Moon,
  Scale,
  Bot
} from 'lucide-react';
import { ViewTab } from '../types';

interface HeaderProps {
  currentTab: ViewTab;
  onSelectTab: (tab: ViewTab) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  historyCount: number;
  onOpenHistory: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  isDarkMode,
  onToggleDarkMode,
  historyCount,
  onOpenHistory,
}) => {
  return (
    <header className="border-b border-stone-200 dark:border-stone-800 bg-white/95 dark:bg-stone-900/95 backdrop-blur-md sticky top-0 z-30 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Platform Name */}
          <div 
            onClick={() => onSelectTab('investigate')}
            className="flex items-center gap-3.5 cursor-pointer select-none group"
            id="brand-logo"
          >
            <div className="w-11 h-11 rounded-2xl bg-blue-900 dark:bg-blue-800 text-amber-400 flex items-center justify-center shadow-md ring-2 ring-blue-950/10 dark:ring-blue-400/20 group-hover:scale-105 transition-transform">
              <Scale className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif font-black text-xl sm:text-2xl text-stone-900 dark:text-stone-100 tracking-tight">
                  Transparence <span className="text-blue-700 dark:text-blue-400">Québec</span>
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  Vigie Publique
                </span>
              </div>
              <p className="text-xs text-stone-500 dark:text-stone-400 font-medium line-clamp-1">
                Intégrité, Conflits d'Intérêts & Scrutin de l'Assemblée Nationale
              </p>
            </div>
          </div>

          {/* Navigation Links for Desktop */}
          <nav className="hidden lg:flex items-center gap-1.5 p-1 rounded-2xl bg-stone-100 dark:bg-stone-800/70 border border-stone-200/80 dark:border-stone-700/60">
            <button
              id="nav-tab-investigate"
              type="button"
              onClick={() => onSelectTab('investigate')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                currentTab === 'investigate'
                  ? 'bg-white dark:bg-stone-900 text-blue-900 dark:text-blue-300 shadow-xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
              }`}
            >
              <Search className="w-3.5 h-3.5" />
              <span>Enquête Libre</span>
            </button>

            <button
              id="nav-tab-chat-ai"
              type="button"
              onClick={() => onSelectTab('chat_ai')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                currentTab === 'chat_ai'
                  ? 'bg-white dark:bg-stone-900 text-blue-900 dark:text-blue-300 shadow-xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
              }`}
            >
              <Bot className="w-3.5 h-3.5 text-amber-500" />
              <span>Dialogue & DPJ Triggers</span>
            </button>

            <button
              id="nav-tab-cases"
              type="button"
              onClick={() => onSelectTab('cases')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                currentTab === 'cases'
                  ? 'bg-white dark:bg-stone-900 text-blue-900 dark:text-blue-300 shadow-xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
              }`}
            >
              <FolderArchive className="w-3.5 h-3.5" />
              <span>Dossiers Emblématiques</span>
            </button>

            <button
              id="nav-tab-speech"
              type="button"
              onClick={() => onSelectTab('speech_check')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                currentTab === 'speech_check'
                  ? 'bg-white dark:bg-stone-900 text-blue-900 dark:text-blue-300 shadow-xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
              }`}
            >
              <MessageSquareQuote className="w-3.5 h-3.5" />
              <span>Salon Bleu & Déclarations</span>
            </button>

            <button
              id="nav-tab-whistleblower"
              type="button"
              onClick={() => onSelectTab('whistleblower_guide')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                currentTab === 'whistleblower_guide'
                  ? 'bg-white dark:bg-stone-900 text-blue-900 dark:text-blue-300 shadow-xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
              }`}
            >
              <ShieldAlert className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>Recours & Lanceurs d'Alerte</span>
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              id="btn-open-history"
              type="button"
              onClick={onOpenHistory}
              className="relative p-2.5 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
              title="Historique des dossiers consultés"
            >
              <History className="w-4 h-4" />
              {historyCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-blue-700 text-white text-[10px] font-bold flex items-center justify-center">
                  {historyCount}
                </span>
              )}
            </button>

            <button
              id="btn-toggle-theme"
              type="button"
              onClick={onToggleDarkMode}
              className="p-2.5 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
              title="Changer de thème"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-stone-600" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Tabs */}
        <div className="flex lg:hidden overflow-x-auto pb-3 gap-2 no-scrollbar">
          <button
            onClick={() => onSelectTab('investigate')}
            className={`whitespace-nowrap px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 cursor-pointer ${
              currentTab === 'investigate'
                ? 'bg-blue-900 text-white'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300'
            }`}
          >
            Enquête Libre
          </button>
          <button
            onClick={() => onSelectTab('chat_ai')}
            className={`whitespace-nowrap px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 cursor-pointer ${
              currentTab === 'chat_ai'
                ? 'bg-blue-900 text-white'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300'
            }`}
          >
            Dialogue & DPJ Triggers
          </button>
          <button
            onClick={() => onSelectTab('cases')}
            className={`whitespace-nowrap px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 cursor-pointer ${
              currentTab === 'cases'
                ? 'bg-blue-900 text-white'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300'
            }`}
          >
            Dossiers Emblématiques
          </button>
          <button
            onClick={() => onSelectTab('speech_check')}
            className={`whitespace-nowrap px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 cursor-pointer ${
              currentTab === 'speech_check'
                ? 'bg-blue-900 text-white'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300'
            }`}
          >
            Salon Bleu
          </button>
          <button
            onClick={() => onSelectTab('whistleblower_guide')}
            className={`whitespace-nowrap px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 cursor-pointer ${
              currentTab === 'whistleblower_guide'
                ? 'bg-blue-900 text-white'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300'
            }`}
          >
            Recours & Lanceurs d'Alerte
          </button>
        </div>
      </div>
    </header>
  );
};
