import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, ArrowRight, FolderArchive, Clock } from 'lucide-react';
import { SavedDossier, InvestigationReport } from '../types';

interface HistoryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  history: SavedDossier[];
  onSelect: (report: InvestigationReport) => void;
  onClear: () => void;
}

export const HistoryDrawer: React.FC<HistoryDrawerProps> = ({
  isOpen,
  onClose,
  history,
  onSelect,
  onClear,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-stone-950/60 backdrop-blur-xs"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-screen max-w-md bg-white dark:bg-stone-900 border-l border-stone-200 dark:border-stone-800 shadow-2xl flex flex-col"
            >
              {/* Drawer Header */}
              <div className="p-5 border-b border-stone-100 dark:border-stone-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-blue-900/10 text-blue-900 dark:text-blue-300">
                    <FolderArchive className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 dark:text-stone-100 text-base font-serif">
                      Dossiers Récents
                    </h3>
                    <p className="text-xs text-stone-500 dark:text-stone-400">
                      {history.length} investigation{history.length > 1 ? 's' : ''} enregistrée{history.length > 1 ? 's' : ''}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 rounded-xl text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="flex-1 overflow-y-auto p-5 space-y-3">
                {history.length === 0 ? (
                  <div className="text-center py-16 text-stone-400 dark:text-stone-500 space-y-2">
                    <Clock className="w-8 h-8 mx-auto stroke-1 text-stone-300 dark:text-stone-600" />
                    <p className="text-sm font-medium">Aucun dossier dans votre historique local</p>
                    <p className="text-xs">Les enquêtes et vérifications que vous effectuez apparaîtront ici.</p>
                  </div>
                ) : (
                  history.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => {
                        onSelect(item.report);
                        onClose();
                      }}
                      className="p-4 rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950/60 hover:border-blue-500/50 transition-all cursor-pointer group space-y-2"
                    >
                      <div className="flex items-center justify-between text-[11px] text-stone-500">
                        <span>{new Date(item.timestamp).toLocaleDateString('fr-CA', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}</span>
                        <span className="font-bold text-blue-700 dark:text-blue-400">
                          Score {item.report.integrityScore}/100
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                        {item.subject}
                      </h4>
                      <p className="text-xs text-stone-500 dark:text-stone-400 line-clamp-2">
                        {item.report.executiveSummary}
                      </p>
                      <div className="pt-2 flex items-center justify-between text-xs font-semibold text-blue-800 dark:text-blue-300">
                        <span>Ouvrir l'enquête</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Drawer Footer */}
              {history.length > 0 && (
                <div className="p-4 border-t border-stone-100 dark:border-stone-800 bg-stone-50 dark:bg-stone-950/50">
                  <button
                    type="button"
                    onClick={onClear}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-rose-200 dark:border-rose-900/60 text-xs font-bold text-rose-700 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span>Effacer l'Historique Local</span>
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
