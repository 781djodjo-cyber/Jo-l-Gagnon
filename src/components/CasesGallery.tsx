import React, { useState } from 'react';
import { 
  FolderArchive, 
  ArrowRight, 
  Building2, 
  ShieldAlert, 
  FileCheck2, 
  HeartHandshake, 
  Gavel,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { PRELOADED_DOSSIERS, PreloadedDossier } from '../data/preloadedDossiers';
import { InvestigationReport } from '../types';

interface CasesGalleryProps {
  onSelectDossier: (report: InvestigationReport) => void;
}

export const CasesGallery: React.FC<CasesGalleryProps> = ({ onSelectDossier }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');

  const categories = [
    'Tous',
    'Contrats Publics & IT',
    'Collusion & Financement',
    'Subventions & Fonds Publics',
    'Services aux Enfants & Familles',
    'Éthique & Députés'
  ];

  const filtered = selectedCategory === 'Tous'
    ? PRELOADED_DOSSIERS
    : PRELOADED_DOSSIERS.filter((d) => d.category === selectedCategory);

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2.5 rounded-xl bg-blue-900 text-white dark:bg-blue-800">
            <FolderArchive className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold font-serif text-stone-900 dark:text-stone-100">
              Dossiers d'Enquête Emblématiques du Québec
            </h2>
            <p className="text-xs text-stone-500 dark:text-stone-400">
              Analyses complètes, chronologies factuelles et décrets documentés issus des commissions publiques et registres d'État
            </p>
          </div>
        </div>

        {/* Categories Chips */}
        <div className="flex flex-wrap gap-2 pt-3">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-900 text-white dark:bg-blue-700'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Dossiers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filtered.map((dossier) => (
          <div
            key={dossier.id}
            className="rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 flex flex-col justify-between hover:border-blue-500/50 dark:hover:border-blue-500/50 shadow-xs hover:shadow-md transition-all group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  {dossier.category}
                </span>

                <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${
                  dossier.report.alertLevel === 'INFRACTION_AVÉRÉE'
                    ? 'bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300'
                    : 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300'
                }`}>
                  Score {dossier.report.integrityScore}/100
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold font-serif text-stone-900 dark:text-stone-100 group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors">
                  {dossier.title}
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                  {dossier.subtitle}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 line-clamp-3 leading-relaxed">
                {dossier.report.executiveSummary}
              </p>

              <div className="p-3 rounded-xl bg-stone-50 dark:bg-stone-950/70 border border-stone-100 dark:border-stone-800/80 space-y-1 text-xs">
                <span className="font-semibold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-blue-600" />
                  Point central d'enquête :
                </span>
                <p className="text-stone-600 dark:text-stone-400 line-clamp-2">
                  {dossier.report.coreFinding}
                </p>
              </div>
            </div>

            <div className="pt-5 mt-4 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between">
              <span className="text-[11px] font-medium text-stone-400 dark:text-stone-500">
                🏷️ {dossier.tag}
              </span>

              <button
                type="button"
                onClick={() => onSelectDossier(dossier.report)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-blue-900 hover:bg-blue-800 dark:bg-blue-700 dark:hover:bg-blue-600 text-white transition-all cursor-pointer group-hover:translate-x-0.5"
              >
                <span>Consulter le Dossier</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
