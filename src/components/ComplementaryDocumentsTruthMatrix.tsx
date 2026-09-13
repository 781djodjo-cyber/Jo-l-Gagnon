import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Scale, 
  Building2, 
  FileText, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink, 
  BookOpen, 
  Eye, 
  Layers, 
  Search, 
  X,
  FileCheck2,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { ComplementaryDocumentLink, TruthVerificationIndex, ViewTab } from '../types';

interface ComplementaryDocumentsTruthMatrixProps {
  documents?: ComplementaryDocumentLink[];
  truthIndex?: TruthVerificationIndex;
  subjectTitle?: string;
  onNavigateTab?: (tab: ViewTab, filter?: string) => void;
}

export const ComplementaryDocumentsTruthMatrix: React.FC<ComplementaryDocumentsTruthMatrixProps> = ({
  documents = [],
  truthIndex,
  subjectTitle = 'Dossier vérifié',
  onNavigateTab
}) => {
  const [selectedDoc, setSelectedDoc] = useState<ComplementaryDocumentLink | null>(null);
  const [filterType, setFilterType] = useState<string>('all');

  if (documents.length === 0 && !truthIndex) {
    return null;
  }

  const getTypeBadge = (type: ComplementaryDocumentLink['type']) => {
    switch (type) {
      case 'commission':
        return {
          label: 'Commission d\'Enquête Publique',
          icon: <Building2 className="w-3.5 h-3.5 text-blue-700 dark:text-blue-300" />,
          classes: 'bg-blue-50 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800'
        };
      case 'jurisprudence':
        return {
          label: 'Jurisprudence & Décision de Cour',
          icon: <Scale className="w-3.5 h-3.5 text-purple-700 dark:text-purple-300" />,
          classes: 'bg-purple-50 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800'
        };
      case 'loi_article':
        return {
          label: 'Article de Loi & Codex',
          icon: <BookOpen className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-300" />,
          classes: 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
        };
      case 'coroner':
      case 'audit_vgq':
        return {
          label: type === 'coroner' ? 'Rapport du Coroner' : 'Rapport d\'Audit VGQ / Protecteur',
          icon: <FileCheck2 className="w-3.5 h-3.5 text-amber-700 dark:text-amber-300" />,
          classes: 'bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800'
        };
      case 'fugues_stats':
        return {
          label: 'Données Officielles de Fugues',
          icon: <Layers className="w-3.5 h-3.5 text-rose-700 dark:text-rose-300" />,
          classes: 'bg-rose-50 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 border-rose-200 dark:border-rose-800'
        };
      case 'enquete_media':
      default:
        return {
          label: 'Enquête Journalistique Sourcée',
          icon: <FileText className="w-3.5 h-3.5 text-stone-700 dark:text-stone-300" />,
          classes: 'bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 border-stone-300 dark:border-stone-700'
        };
    }
  };

  const filteredDocs = documents.filter((doc) => {
    if (filterType === 'all') return true;
    return doc.type === filterType;
  });

  return (
    <div id="truth-cross-verification-matrix" className="space-y-6">
      {/* Top Banner: Verification & Interconnection Shield */}
      <div className="rounded-3xl border border-stone-200 dark:border-stone-800 bg-gradient-to-br from-stone-900 via-stone-900 to-blue-950 text-white p-6 sm:p-8 shadow-xl relative overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>Matrice de Complémentarité des Preuves dans la Vérité</span>
            </div>

            {truthIndex && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{truthIndex.triangulatedSourcesCount} Sources Concordantes Triangulées</span>
              </div>
            )}
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-black font-serif tracking-tight text-white flex items-center gap-2.5">
              <span>Faisceau de Vérité : Documents Complémentaires Interconnectés</span>
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-3xl leading-relaxed">
              Pour assurer une vérité absolue et incontestable, chaque dossier fait l'objet d'une corroboration croisée
              entre commissions d'enquête, arrêts judiciaires de cours, rapports d'audit étatiques et lois codifiées.
            </p>
          </div>

          {truthIndex?.crossValidationSummary && (
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-medium">
                « {truthIndex.crossValidationSummary} »
              </p>
            </div>
          )}

          {truthIndex?.officialRecordsChecked && truthIndex.officialRecordsChecked.length > 0 && (
            <div className="pt-2">
              <p className="text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-2">
                Registres et archives publiques vérifiés sans complaisance :
              </p>
              <div className="flex flex-wrap gap-2">
                {truthIndex.officialRecordsChecked.map((rec, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-stone-800/80 border border-stone-700/80 text-xs text-stone-200"
                  >
                    <CheckCircle2 className="w-3 h-3 text-blue-400" />
                    <span>{rec}</span>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Filter Tabs for Documents */}
      {documents.length > 2 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          <button
            onClick={() => setFilterType('all')}
            className={`px-3 py-1.5 rounded-full font-bold transition-all cursor-pointer whitespace-nowrap ${
              filterType === 'all'
                ? 'bg-blue-900 text-white dark:bg-blue-700'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200'
            }`}
          >
            Tous les documents ({documents.length})
          </button>
          <button
            onClick={() => setFilterType('commission')}
            className={`px-3 py-1.5 rounded-full font-bold transition-all cursor-pointer whitespace-nowrap ${
              filterType === 'commission'
                ? 'bg-blue-900 text-white dark:bg-blue-700'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200'
            }`}
          >
            🏛️ Commissions d'Enquête
          </button>
          <button
            onClick={() => setFilterType('jurisprudence')}
            className={`px-3 py-1.5 rounded-full font-bold transition-all cursor-pointer whitespace-nowrap ${
              filterType === 'jurisprudence'
                ? 'bg-blue-900 text-white dark:bg-blue-700'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200'
            }`}
          >
            ⚖️ Jurisprudence de Cour
          </button>
          <button
            onClick={() => setFilterType('loi_article')}
            className={`px-3 py-1.5 rounded-full font-bold transition-all cursor-pointer whitespace-nowrap ${
              filterType === 'loi_article'
                ? 'bg-blue-900 text-white dark:bg-blue-700'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200'
            }`}
          >
            📜 Lois & Codex
          </button>
          <button
            onClick={() => setFilterType('audit_vgq')}
            className={`px-3 py-1.5 rounded-full font-bold transition-all cursor-pointer whitespace-nowrap ${
              filterType === 'audit_vgq'
                ? 'bg-blue-900 text-white dark:bg-blue-700'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200'
            }`}
          >
            🔍 Audits & Coroners
          </button>
        </div>
      )}

      {/* Grid of Documents */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredDocs.map((doc) => {
          const badge = getTypeBadge(doc.type);

          return (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-3.5 group"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${badge.classes}`}>
                    {badge.icon}
                    <span>{badge.label}</span>
                  </span>

                  <span className="text-[11px] font-mono text-stone-500 dark:text-stone-400 truncate max-w-[200px]">
                    {doc.officialRef}
                  </span>
                </div>

                <h4 className="text-sm sm:text-base font-bold text-stone-900 dark:text-stone-100 font-serif leading-snug group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors">
                  {doc.title}
                </h4>

                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed line-clamp-3">
                  {doc.summary}
                </p>

                {/* Highlighted Box: How it proves the truth */}
                <div className="p-3 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-800/60 space-y-1">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-blue-900 dark:text-blue-300 uppercase tracking-wider">
                    <Sparkles className="w-3 h-3 text-blue-700 dark:text-blue-400 shrink-0" />
                    <span>Preuve dans la Vérité :</span>
                  </div>
                  <p className="text-xs text-stone-800 dark:text-stone-200 leading-relaxed font-medium">
                    {doc.howItProvesTheTruth}
                  </p>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-2 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedDoc(doc)}
                  className="text-xs font-semibold text-stone-600 dark:text-stone-400 hover:text-blue-900 dark:hover:text-blue-300 flex items-center gap-1 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Détails de la preuve</span>
                </button>

                {doc.actionViewTab && onNavigateTab && (
                  <button
                    onClick={() => onNavigateTab(doc.actionViewTab!, doc.filterParam)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-900 text-white dark:bg-blue-700 text-xs font-bold hover:bg-blue-800 dark:hover:bg-blue-600 transition-colors cursor-pointer"
                  >
                    <span>Consulter</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Modal: Full Document & Proof Details */}
      <AnimatePresence>
        {selectedDoc && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl space-y-5 max-h-[85vh] overflow-y-auto"
            >
              <div className="flex items-start justify-between gap-3 border-b border-stone-100 dark:border-stone-800 pb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300">
                      Réf. Officielle : {selectedDoc.officialRef}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-serif text-stone-900 dark:text-stone-100">
                    {selectedDoc.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedDoc(null)}
                  className="p-1.5 rounded-xl hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-sm text-stone-700 dark:text-stone-300">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">
                    Résumé Documentaire & Contexte
                  </h4>
                  <p className="leading-relaxed bg-stone-50 dark:bg-stone-950 p-4 rounded-2xl border border-stone-200/70 dark:border-stone-800">
                    {selectedDoc.summary}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900 dark:text-blue-400 mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Démonstration de Vérité Incontestable</span>
                  </h4>
                  <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 text-stone-800 dark:text-stone-200 leading-relaxed font-medium">
                    « {selectedDoc.howItProvesTheTruth} »
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-stone-100 dark:bg-stone-800/60 text-xs text-stone-600 dark:text-stone-400 space-y-1">
                  <p className="font-semibold text-stone-800 dark:text-stone-200">
                    🛡️ Garantie de concordance factuelle
                  </p>
                  <p>
                    Ce document est accessible au public par la Gazette officielle du Québec, SOQUIJ, CanLII ou les archives parlementaires de l'Assemblée nationale.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedDoc(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 cursor-pointer"
                >
                  Fermer
                </button>

                {selectedDoc.actionViewTab && onNavigateTab && (
                  <button
                    onClick={() => {
                      const tab = selectedDoc.actionViewTab!;
                      const filter = selectedDoc.filterParam;
                      setSelectedDoc(null);
                      onNavigateTab(tab, filter);
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-900 text-white dark:bg-blue-700 text-xs font-bold hover:bg-blue-800 dark:hover:bg-blue-600 cursor-pointer"
                  >
                    <span>Ouvrir dans le module dédié</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
