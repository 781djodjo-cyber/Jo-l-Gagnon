import React, { useState } from 'react';
import { 
  Search, 
  Sparkles, 
  Scale, 
  Send, 
  Building2, 
  FileText, 
  Users2, 
  ShieldAlert,
  ArrowRight,
  HeartHandshake,
  Flame,
  Radio
} from 'lucide-react';

interface InvestigationSearchBarProps {
  onInvestigate: (query: string) => void;
  isLoading: boolean;
  onNavigateToDpj?: () => void;
  onNavigateToSocialPusher?: () => void;
}

const POPULAR_PROMPTS = [
  {
    title: 'Commissions d\'Enquête sur le Gouvernement & les Élites',
    desc: 'Charbonneau (collusion), Bastarache (juges), Gomery (commandites), Chamberland (espionnage) et Poitras (police).',
    query: 'Grand bilan des commissions d\'enquête publiques sur le gouvernement et les élites au Québec : Commission Charbonneau, Commission Bastarache, Commission Gomery, Commission Chamberland et Commission Poitras. Révélations chocs, condamnations judiciaires et réformes des lois québécoises.'
  },
  {
    title: '« Big Brother » Numérique & Élite des Consultants',
    desc: 'Scandales ArriveCAN (60M$), SAAQclic (500M$), contrats secrets McKinsey et surveillance d\'État.',
    query: 'Big Brother numérique, surveillance d\'État, scandales des contrats IT ArriveCAN et SAAQclic, rôle des cabinets de conseil McKinsey et collusion des élites politiques québécoises et canadiennes.'
  },
  {
    title: 'Fiasco SAAQclic & consultants privés',
    desc: 'Dépassements de coûts de 500M$, contrats de gré à gré et rapport du Vérificateur général (VGQ).',
    query: 'Fiasco informatique SAAQclic, dépassements de coûts, contrats octroyés aux firmes de consultants sans appel d\'offres et conclusions du Vérificateur général du Québec.'
  },
  {
    title: 'Subvention aux Kings de Los Angeles',
    desc: 'Octroi de 5 à 7 millions $ de fonds publics pour deux matchs hors-concours et plaintes déontologiques.',
    query: 'Subvention publique de 5 à 7 millions de dollars aux Kings de Los Angeles pour deux matchs au Centre Vidéotron, pouvoir discrétionnaire ministériel et avis du Commissaire à l\'éthique de l\'Assemblée nationale.'
  },
  {
    title: 'Filière Batterie Northvolt & Fonds Publics',
    desc: 'Engagements de 2,9 milliards $ d\'Investissement Québec, BAPE évité et opacité des clauses de remboursement.',
    query: 'Investissements publics de plus de 2,9 milliards $ dans Northvolt au Québec, décrets gouvernementaux, contournement des audiences du BAPE et garanties de récupération des deniers publics.'
  },
  {
    title: 'Défense des Parents, Failles du Dossier & Codex LPJ',
    desc: 'Outil d\'audit des rapports DPJ, détection des faits non corroborés, primauté de la famille élargie (Art. 2.4) et révision d\'ordonnance (Art. 95).',
    query: 'Comment un parent peut-il se défendre efficacement contre la DPJ au Québec ? Analyse des failles fréquentes dans les rapports d\'évaluation selon l\'art. 53 LPJ, respect de la famille élargie selon l\'art. 2.4 LPJ, et modèle de requête en révision d\'ordonnance selon l\'art. 95 LPJ.'
  },
  {
    title: 'Enfants Décédés sous la DPJ & Bureau du Coroner',
    desc: 'Registre et graphique des 375+ enfants décédés, rapports d\'enquêtes des coroners Kamel et Malouin, et failles LPJ.',
    query: 'Bilan et graphique des enfants décédés sous la DPJ au Québec, conclusions des rapports du Bureau du coroner (Granby, Wendake, Laurentides), signalements ignorés et failles systémiques de la LPJ.'
  },
  {
    title: 'Financement politique & Collusion dans la construction',
    desc: 'Héritage de la Commission Charbonneau, enquêtes de l\'UPAC et encadrement des dons partisans à 100 $.',
    query: 'Bilan de la Commission Charbonneau, condamnations obtenues par l\'UPAC, système de prête-noms et règles actuelles de conformité du DGEQ sur le financement politique.'
  }
];

export const InvestigationSearchBar: React.FC<InvestigationSearchBarProps> = ({
  onInvestigate,
  isLoading,
  onNavigateToDpj,
  onNavigateToSocialPusher,
}) => {
  const [inputQuery, setInputQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputQuery.trim() || isLoading) return;
    onInvestigate(inputQuery.trim());
  };

  return (
    <div className="space-y-6">
      {/* Priority DPJ Observatory Carry Banner */}
      {onNavigateToDpj && (
        <div 
          id="dpj-priority-banner"
          className="rounded-2xl border-2 border-amber-500/40 bg-amber-500/10 dark:bg-amber-950/20 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-500 text-stone-950 shrink-0">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase font-mono tracking-wider text-amber-800 dark:text-amber-300">
                  Priorité d'Urgence Nationale
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-900 dark:text-amber-200">
                  Big Carry DPJ
                </span>
              </div>
              <h3 className="text-sm font-bold font-serif text-stone-900 dark:text-stone-100">
                Observatoire Citoyen de la DPJ & Protection de la Jeunesse
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-400">
                Superbase des lésions de droits (140 enfants • CDPDJ), pipeline des signalements en 6 étapes, audit des 138 recs Laurent et recours LPJ.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            {onNavigateToSocialPusher && (
              <button
                type="button"
                onClick={onNavigateToSocialPusher}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all cursor-pointer shrink-0 shadow-xs active:scale-95"
              >
                <Radio className="w-3.5 h-3.5 animate-pulse" />
                <span>Attracteur D-1</span>
              </button>
            )}

            <button
              type="button"
              onClick={onNavigateToDpj}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-black transition-all cursor-pointer shrink-0 shadow-xs active:scale-95"
            >
              <span>Ouvrir l'Observatoire DPJ</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Search Input Card */}
      <div 
        id="investigation-input-card"
        className="rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 sm:p-8 shadow-sm transition-all"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-blue-900/10 dark:bg-blue-800/30 text-blue-900 dark:text-blue-300">
            <Scale className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100 font-serif">
              Moteur d'Investigation & Scrutin de l'Éthique Publique
            </h2>
            <p className="text-xs text-stone-500 dark:text-stone-400">
              Scruptez les décisions ministérielles, contrats de l'État (SEAO), lobbyisme et débats parlementaires au Québec.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <textarea
              id="investigation-query-input"
              rows={4}
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              placeholder="Indiquez un acteur politique, un ministre, une entreprise bénéficiaire, une subvention, un contrat public ou une rumeur de corruption à vérifier (ex: 'Quels sont les liens et contrats octroyés dans le dossier X ?', 'Y a-t-il eu lobbyisme non déclaré ?', 'Que dit le journal des débats de l'Assemblée nationale ?')..."
              className="w-full rounded-2xl border border-stone-200 dark:border-stone-700 bg-stone-50/50 dark:bg-stone-950/60 p-4 text-sm text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
              disabled={isLoading}
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
            <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400">
              <ShieldAlert className="w-4 h-4 text-blue-700 dark:text-blue-400 shrink-0" />
              <span>Garantie de rigueur : vérification sur pièces, registres publics et archives officielles.</span>
            </div>

            <button
              id="btn-submit-investigation"
              type="submit"
              disabled={!inputQuery.trim() || isLoading}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold shadow-sm transition-all cursor-pointer ${
                !inputQuery.trim() || isLoading
                  ? 'bg-stone-200 dark:bg-stone-800 text-stone-400 cursor-not-allowed'
                  : 'bg-blue-900 hover:bg-blue-800 dark:bg-blue-700 dark:hover:bg-blue-600 text-white active:scale-98'
              }`}
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Investigation en cours...</span>
                </>
              ) : (
                <>
                  <Search className="w-4 h-4" />
                  <span>Lancer l'Enquête Documentaire</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Suggested Landmark Probes */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-stone-600 dark:text-stone-300">
            Sujets d'intégrité et affaires publiques à explorer :
          </span>
          <span className="text-[11px] text-stone-600 dark:text-stone-300">
            Cliquez pour charger et investiguer
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {POPULAR_PROMPTS.map((item, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setInputQuery(item.query);
                onInvestigate(item.query);
              }}
              disabled={isLoading}
              className="text-left p-4 rounded-2xl border border-stone-200/80 dark:border-stone-800 bg-white dark:bg-stone-900/70 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:bg-blue-50/20 dark:hover:bg-blue-950/20 transition-all group cursor-pointer"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="space-y-1">
                  <h4 className="text-xs sm:text-sm font-bold text-stone-900 dark:text-stone-100 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-stone-500 dark:text-stone-400 line-clamp-2">
                    {item.desc}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
