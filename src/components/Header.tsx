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
  Bot,
  HeartHandshake,
  Radio,
  Network,
  ShieldCheck,
  Lock,
  GraduationCap,
  Zap,
  Plane
} from 'lucide-react';
import { ViewTab } from '../types';

interface HeaderProps {
  currentTab: ViewTab;
  onSelectTab: (tab: ViewTab) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  historyCount: number;
  onOpenHistory: () => void;
  onOpenSecurityVault?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  isDarkMode,
  onToggleDarkMode,
  historyCount,
  onOpenHistory,
  onOpenSecurityVault,
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
              id="nav-tab-dpj-focus"
              type="button"
              onClick={() => onSelectTab('dpj_focus')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                currentTab === 'dpj_focus'
                  ? 'bg-amber-500 text-stone-950 font-black shadow-xs ring-1 ring-amber-400'
                  : 'text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 bg-amber-500/10 dark:bg-amber-500/10'
              }`}
            >
              <HeartHandshake className="w-3.5 h-3.5 text-amber-600 dark:text-amber-300" />
              <span>Observatoire DPJ</span>
            </button>

            <button
              id="nav-tab-evidence-bot"
              type="button"
              onClick={() => onSelectTab('evidence_bot')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                currentTab === 'evidence_bot'
                  ? 'bg-cyan-600 text-stone-950 font-black shadow-xs ring-1 ring-cyan-400'
                  : 'text-cyan-700 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300 bg-cyan-500/10 dark:bg-cyan-500/10'
              }`}
            >
              <Bot className="w-3.5 h-3.5 text-cyan-500 animate-pulse" />
              <span>Bot Preuves & Médias</span>
            </button>

            <button
              id="nav-tab-social-pusher"
              type="button"
              onClick={() => onSelectTab('social_pusher')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                currentTab === 'social_pusher'
                  ? 'bg-blue-600 text-white font-black shadow-xs ring-1 ring-blue-500'
                  : 'text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 bg-blue-500/10 dark:bg-blue-500/10'
              }`}
            >
              <Radio className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 animate-pulse" />
              <span>Attracteur D-1 / H24</span>
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
              <span>Dialogue & Triggers</span>
            </button>

            <button
              id="nav-tab-ministers"
              type="button"
              onClick={() => onSelectTab('ministers_schools')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                currentTab === 'ministers_schools'
                  ? 'bg-white dark:bg-stone-900 text-blue-900 dark:text-blue-300 shadow-xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Ministres & Universités (1995-2026)</span>
            </button>

            <button
              id="nav-tab-mkultra"
              type="button"
              onClick={() => onSelectTab('mk_ultra')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                currentTab === 'mk_ultra'
                  ? 'bg-white dark:bg-stone-900 text-red-900 dark:text-red-400 shadow-xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-red-500" />
              <span>Base MK-Ultra (McGill)</span>
            </button>

            <button
              id="nav-tab-epstein"
              type="button"
              onClick={() => onSelectTab('epstein_database')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                currentTab === 'epstein_database'
                  ? 'bg-white dark:bg-stone-900 text-purple-900 dark:text-purple-400 shadow-xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
              }`}
            >
              <Plane className="w-3.5 h-3.5 text-purple-500" />
              <span>Base Réseau Epstein (SDNY / Vols QC)</span>
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
              <FolderArchive className="w-3.5 h-3.5 text-amber-500" />
              <span>Dossiers des Élites & Commissions</span>
            </button>

            <button
              id="nav-tab-network"
              type="button"
              onClick={() => onSelectTab('network')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                currentTab === 'network'
                  ? 'bg-blue-600 text-white font-black shadow-xs ring-1 ring-blue-400'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
              }`}
            >
              <Network className="w-3.5 h-3.5 text-blue-500 dark:text-blue-300" />
              <span>Graphique Corruption & Réseau</span>
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
              id="btn-open-security-vault"
              type="button"
              onClick={onOpenSecurityVault}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-bold transition-all cursor-pointer shadow-xs"
              title="Coffre Cryptographique & Bouclier Anti-Corruption de l'IA"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span className="hidden sm:inline">IA Chiffrée & Scellée</span>
            </button>

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
            onClick={() => onSelectTab('dpj_focus')}
            className={`whitespace-nowrap px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 cursor-pointer ${
              currentTab === 'dpj_focus'
                ? 'bg-amber-500 text-stone-950 font-black'
                : 'bg-amber-500/10 text-amber-700 dark:text-amber-400'
            }`}
          >
            Observatoire DPJ
          </button>
          <button
            onClick={() => onSelectTab('evidence_bot')}
            className={`whitespace-nowrap px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 cursor-pointer ${
              currentTab === 'evidence_bot'
                ? 'bg-cyan-600 text-stone-950 font-black'
                : 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-400'
            }`}
          >
            Bot Preuves & Médias
          </button>
          <button
            onClick={() => onSelectTab('social_pusher')}
            className={`whitespace-nowrap px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 cursor-pointer ${
              currentTab === 'social_pusher'
                ? 'bg-blue-600 text-white font-black'
                : 'bg-blue-500/10 text-blue-700 dark:text-blue-400'
            }`}
          >
            Attracteur D-1 / H24
          </button>
          <button
            onClick={() => onSelectTab('chat_ai')}
            className={`whitespace-nowrap px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 cursor-pointer ${
              currentTab === 'chat_ai'
                ? 'bg-blue-900 text-white'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300'
            }`}
          >
            Dialogue & Triggers
          </button>
          <button
            onClick={() => onSelectTab('ministers_schools')}
            className={`whitespace-nowrap px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 cursor-pointer ${
              currentTab === 'ministers_schools'
                ? 'bg-blue-600 text-white'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300'
            }`}
          >
            Ministres & Universités
          </button>
          <button
            onClick={() => onSelectTab('mk_ultra')}
            className={`whitespace-nowrap px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 cursor-pointer ${
              currentTab === 'mk_ultra'
                ? 'bg-red-600 text-white'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300'
            }`}
          >
            Base MK-Ultra (McGill)
          </button>
          <button
            onClick={() => onSelectTab('epstein_database')}
            className={`whitespace-nowrap px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 cursor-pointer ${
              currentTab === 'epstein_database'
                ? 'bg-purple-600 text-white'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300'
            }`}
          >
            Base Réseau Epstein (Vols QC)
          </button>
          <button
            onClick={() => onSelectTab('cases')}
            className={`whitespace-nowrap px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 cursor-pointer ${
              currentTab === 'cases'
                ? 'bg-blue-900 text-white'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300'
            }`}
          >
            Élites & Commissions
          </button>
          <button
            onClick={() => onSelectTab('network')}
            className={`whitespace-nowrap px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 cursor-pointer ${
              currentTab === 'network'
                ? 'bg-blue-600 text-white font-black'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300'
            }`}
          >
            Graphique Corruption & Réseau
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
