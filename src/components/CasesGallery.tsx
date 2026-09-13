import React, { useState, useMemo } from 'react';
import { 
  FolderArchive, 
  ArrowRight, 
  Building2, 
  ShieldAlert, 
  HeartHandshake, 
  Gavel,
  CheckCircle2,
  Sparkles,
  Search,
  Scale,
  FileText,
  AlertOctagon,
  ChevronDown,
  ChevronUp,
  History,
  BookOpen,
  Filter
} from 'lucide-react';
import { PRELOADED_DOSSIERS, PreloadedDossier } from '../data/preloadedDossiers';
import { COMMISSIONS_ENQUETE_DATABASE, CommissionEnquete } from '../data/commissionsEnqueteData';
import { InvestigationReport, ViewTab } from '../types';

interface CasesGalleryProps {
  onSelectDossier: (report: InvestigationReport) => void;
  onNavigateToTab?: (tab: ViewTab) => void;
}

type GalleryViewMode = 'all_dossiers' | 'commissions_memorial';

export const CasesGallery: React.FC<CasesGalleryProps> = ({ onSelectDossier, onNavigateToTab }) => {
  const [viewMode, setViewMode] = useState<GalleryViewMode>('all_dossiers');
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // For commissions memorial
  const [selectedDomain, setSelectedDomain] = useState<string>('Tous');
  const [expandedCommissionId, setExpandedCommissionId] = useState<string | null>(null);

  const categories = [
    'Tous',
    'Commissions d\'Enquête & Élites',
    'Contrats Publics & IT',
    'Collusion & Financement',
    'Subventions & Fonds Publics',
    'Services aux Enfants & Familles',
    'Éthique & Députés'
  ];

  const domains = [
    'Tous',
    'Corruption & Collusion',
    'Magistrature & Pouvoir Judiciaire',
    'Espionnage & Police d\'État',
    'Financement Politique & Commandites',
    'Syndicats & Crime Organisé',
    'Protection de la Jeunesse & Santé',
    'Infrastructures & Négligence Publique'
  ];

  // Filtered dossiers
  const filteredDossiers = useMemo(() => {
    return PRELOADED_DOSSIERS.filter((dossier) => {
      const matchesCategory = selectedCategory === 'Tous' || dossier.category === selectedCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        dossier.title.toLowerCase().includes(q) ||
        dossier.subtitle.toLowerCase().includes(q) ||
        dossier.tag.toLowerCase().includes(q) ||
        dossier.report.executiveSummary.toLowerCase().includes(q) ||
        dossier.report.coreFinding.toLowerCase().includes(q) ||
        dossier.report.verifiedFacts.some(f => f.toLowerCase().includes(q))
      );
    });
  }, [selectedCategory, searchQuery]);

  // Filtered commissions
  const filteredCommissions = useMemo(() => {
    return COMMISSIONS_ENQUETE_DATABASE.filter((comm) => {
      const matchesDomain = selectedDomain === 'Tous' || comm.domain === selectedDomain;
      if (!matchesDomain) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        comm.name.toLowerCase().includes(q) ||
        comm.officialTitle.toLowerCase().includes(q) ||
        comm.presidentOrJudges.toLowerCase().includes(q) ||
        comm.governingPartyTargeted.toLowerCase().includes(q) ||
        comm.keyScandalSummary.toLowerCase().includes(q) ||
        comm.eliteActorsTargeted.some(a => a.toLowerCase().includes(q)) ||
        comm.shockingRevelations.some(r => r.toLowerCase().includes(q)) ||
        comm.majorLawsAndReformsAdopted.some(l => l.toLowerCase().includes(q))
      );
    });
  }, [selectedDomain, searchQuery]);

  const handleOpenCommissionDossier = (comm: CommissionEnquete) => {
    if (comm.linkedDossierId) {
      const found = PRELOADED_DOSSIERS.find(d => d.id === comm.linkedDossierId);
      if (found) {
        onSelectDossier(found.report);
        return;
      }
    }
    // Fallback: build an InvestigationReport on the fly
    const fallbackReport: InvestigationReport = {
      id: comm.id,
      subject: `${comm.name} — ${comm.officialTitle}`,
      alertLevel: 'INFRACTION_AVÉRÉE',
      alertLevelLabel: 'Commission Publique Historique sur le Gouvernement & les Élites',
      integrityScore: 15,
      executiveSummary: comm.keyScandalSummary,
      coreFinding: `Enquête sous la présidence de ${comm.presidentOrJudges}. Cible principale : ${comm.governingPartyTargeted}.`,
      verifiedFacts: comm.shockingRevelations,
      interestLinks: comm.eliteActorsTargeted.map((actor, idx) => ({
        actorFrom: actor,
        actorTo: comm.governingPartyTargeted,
        relationship: 'Acteur ou institution centrale entendue sous serment lors des audiences publiques',
        riskLevel: 'Critique',
        legalStatus: 'Rapport officiel déposé à l\'Assemblée nationale / Gouvernement'
      })),
      assemblyNationalEvents: [
        {
          topic: `Débats et décrets relatifs à la ${comm.name}`,
          context: 'Assemblée nationale & Journal des débats',
          quoteOrSummary: `Création de la commission par décret gouvernemental suite aux pressions publiques et dépôts des rapports officiels : ${comm.canliiOrOfficialRef}.`,
          dateOrSession: comm.years
        }
      ],
      officialReportsAndJudgments: [comm.canliiOrOfficialRef, ...comm.judicialAndPoliticalOutcomes],
      journalisticInvestigations: [
        'Couvertures médiatiques majeures (Radio-Canada, La Presse, Le Devoir, Journal de Montréal, Le Soleil)'
      ],
      criticalVulnerabilities: [
        'Failles systémiques d\'octroi de contrats et contournement des lois électorales',
        'Ingérence partisane auprès des institutions publiques',
        'Opacité de la prise de décision au sommet de l\'État'
      ],
      legalRecourses: [
        {
          body: 'Loi sur les commissions d\'enquête (RLRQ c. C-37)',
          procedure: 'Assignation à comparaître sous serment, levée du secret administratif et rapport public obligatoire.',
          applicableLaw: 'Loi sur les commissions d\'enquête (RLRQ c. C-37)',
          whistleblowerProtection: 'Immunité judiciaire des témoignages requis devant la commission'
        }
      ],
      impactOnCitizensAndChildren: `Les révélations de la ${comm.name} ont permis d'adopter des réformes institutionnelles majeures pour protéger les deniers publics : ${comm.majorLawsAndReformsAdopted.join(' • ')}.`,
      sourcesGrounding: [
        comm.canliiOrOfficialRef,
        'Publications du Québec & Assemblée nationale',
        'Jurisprudence et décrets du Conseil exécutif'
      ]
    };
    onSelectDossier(fallbackReport);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner & Switcher */}
      <div className="rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="p-3 rounded-2xl bg-blue-900 text-white dark:bg-blue-800 shadow-md">
              <Gavel className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-black font-serif text-stone-900 dark:text-stone-100">
                  Dossier des Élites & Commissions d'Enquête
                </h2>
                <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                  Archives d'État
                </span>
              </div>
              <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-0.5">
                Radiographie complète de toutes les grandes commissions d'enquête sur le gouvernement, la collusion, la magistrature, la police et les dérives des élites au Québec.
              </p>
            </div>
          </div>

          {/* Primary View Toggle */}
          <div className="flex p-1 bg-stone-100 dark:bg-stone-800/80 rounded-2xl border border-stone-200 dark:border-stone-700/60 shrink-0 self-start md:self-center">
            <button
              type="button"
              onClick={() => setViewMode('all_dossiers')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                viewMode === 'all_dossiers'
                  ? 'bg-white dark:bg-stone-900 text-blue-900 dark:text-blue-300 shadow-xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
              }`}
            >
              <FolderArchive className="w-3.5 h-3.5" />
              <span>Dossiers d'Enquête ({PRELOADED_DOSSIERS.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode('commissions_memorial')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                viewMode === 'commissions_memorial'
                  ? 'bg-amber-500 text-stone-950 font-black shadow-xs ring-1 ring-amber-400'
                  : 'text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300'
              }`}
            >
              <Scale className="w-3.5 h-3.5" />
              <span>Mémorial des Commissions ({COMMISSIONS_ENQUETE_DATABASE.length})</span>
            </button>
          </div>
        </div>

        {/* Global Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              viewMode === 'all_dossiers'
                ? "Filtrer les dossiers par mot-clé (ex: Bastarache, Gomery, Charbonneau, McKinsey, DPJ, SAAQclic, UPAC)..."
                : "Rechercher parmi toutes les commissions d'enquête (ex: juge, parti politique, écoutes, prête-noms, corruption)..."
            }
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-xs sm:text-sm text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 cursor-pointer"
            >
              Effacer
            </button>
          )}
        </div>

        {/* Category / Domain Filter Chips */}
        {viewMode === 'all_dossiers' ? (
          <div className="space-y-1.5 pt-1">
            <div className="text-[11px] font-bold uppercase tracking-wider text-stone-400 flex items-center gap-1.5">
              <Filter className="w-3 h-3" />
              Catégories de dossiers :
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? cat === 'Commissions d\'Enquête & Élites'
                        ? 'bg-amber-500 text-stone-950 font-black shadow-xs'
                        : 'bg-blue-900 text-white dark:bg-blue-700'
                      : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-1.5 pt-1">
            <div className="text-[11px] font-bold uppercase tracking-wider text-stone-400 flex items-center gap-1.5">
              <Scale className="w-3 h-3" />
              Domaines d'enquête des commissions d'État :
            </div>
            <div className="flex flex-wrap gap-2">
              {domains.map((dom) => (
                <button
                  key={dom}
                  type="button"
                  onClick={() => setSelectedDomain(dom)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedDomain === dom
                      ? 'bg-amber-500 text-stone-950 font-black shadow-xs'
                      : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
                  }`}
                >
                  {dom}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* VIEW MODE 1: ALL DOSSIERS CARDS */}
      {viewMode === 'all_dossiers' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 px-1">
            <span>
              Affichage de <strong className="text-stone-800 dark:text-stone-200">{filteredDossiers.length}</strong> dossiers d'investigation
            </span>
            {selectedCategory !== 'Tous' && (
              <button
                type="button"
                onClick={() => setSelectedCategory('Tous')}
                className="text-blue-700 dark:text-blue-400 hover:underline cursor-pointer"
              >
                Réinitialiser la catégorie
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredDossiers.map((dossier) => {
              const isCommission = dossier.category === 'Commissions d\'Enquête & Élites';

              return (
                <div
                  key={dossier.id}
                  className={`rounded-3xl border bg-white dark:bg-stone-900 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all group ${
                    isCommission
                      ? 'border-amber-400/40 hover:border-amber-500 bg-linear-to-b from-amber-500/5 to-transparent'
                      : 'border-stone-200 dark:border-stone-800 hover:border-blue-500/50'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                        isCommission
                          ? 'bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-300 border-amber-300 dark:border-amber-800'
                          : 'bg-blue-50 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800'
                      }`}>
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
                      <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 line-clamp-2">
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
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[11px] font-medium text-stone-400 dark:text-stone-500">
                        🏷️ {dossier.tag}
                      </span>
                      {dossier.report.complementaryDocuments && dossier.report.complementaryDocuments.length > 0 && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                          <span>{dossier.report.complementaryDocuments.length} docs vérifiés</span>
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      {dossier.id === 'reseau-epstein-elites-quebec' && onNavigateToTab && (
                        <button
                          type="button"
                          onClick={() => onNavigateToTab('epstein_database')}
                          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-purple-100 hover:bg-purple-200 dark:bg-purple-950/80 dark:hover:bg-purple-900 text-purple-900 dark:text-purple-300 transition-all cursor-pointer border border-purple-300 dark:border-purple-800"
                        >
                          <span>Base Epstein (Vols & SDNY)</span>
                        </button>
                      )}

                      {dossier.id === 'mk-ultra-allan-memorial-mcgill' && onNavigateToTab && (
                        <button
                          type="button"
                          onClick={() => onNavigateToTab('mk_ultra')}
                          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-red-100 hover:bg-red-200 dark:bg-red-950/80 dark:hover:bg-red-900 text-red-900 dark:text-red-300 transition-all cursor-pointer border border-red-300 dark:border-red-800"
                        >
                          <span>Base MK-Ultra</span>
                        </button>
                      )}

                      <button
                        type="button"
                        onClick={() => onSelectDossier({ ...dossier.report, id: dossier.id })}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-blue-900 hover:bg-blue-800 dark:bg-blue-700 dark:hover:bg-blue-600 text-white transition-all cursor-pointer group-hover:translate-x-0.5"
                      >
                        <span>Consulter le Dossier</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* VIEW MODE 2: COMMISSIONS D'ENQUÊTE MÉMORIAL */}
      {viewMode === 'commissions_memorial' && (
        <div className="space-y-6">
          {/* Informational Intro Banner */}
          <div className="p-5 rounded-3xl bg-amber-500/10 border border-amber-500/30 text-stone-900 dark:text-stone-100 flex flex-col sm:flex-row items-start gap-4">
            <div className="p-2.5 rounded-2xl bg-amber-500 text-stone-950 shrink-0 mt-0.5">
              <Scale className="w-5 h-5" />
            </div>
            <div className="space-y-1.5 text-xs sm:text-sm">
              <h4 className="font-bold text-stone-950 dark:text-stone-50 font-serif text-base">
                Pourquoi les Commissions d'Enquête Publiques sont Cruciales face aux Élites ?
              </h4>
              <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                Au Québec et au Canada, une commission d'enquête publique sous la <em>Loi sur les commissions d'enquête</em> (RLRQ c. C-37) dispose du pouvoir d'assigner n'importe quel premier ministre, ministre ou patron d'entreprise à témoigner sous serment, d'émettre des mandats de perquisition et de lever le secret des délibérations. De la Commission Cliche (1974) à la Commission Laurent (2021), elles ont été les seuls instruments capables de déchirer l'omerta politique.
              </p>
              <div className="pt-2 flex flex-wrap gap-3 text-xs font-bold text-amber-900 dark:text-amber-300">
                <span>✓ Témoignages publics retransmis</span>
                <span>✓ Accès aux documents secrets de cabinet</span>
                <span>✓ Recommandations ayant transformé les lois québécoises</span>
              </div>
            </div>
          </div>

          {/* List of Commissions */}
          <div className="space-y-4">
            {filteredCommissions.map((comm) => {
              const isExpanded = expandedCommissionId === comm.id;

              return (
                <div
                  key={comm.id}
                  className="rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 shadow-xs hover:border-amber-400/60 transition-all space-y-4"
                >
                  {/* Top Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 dark:border-stone-800/80 pb-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-900 dark:text-amber-300 border border-amber-500/40">
                          {comm.domain}
                        </span>
                        <span className="text-xs font-bold text-stone-500 dark:text-stone-400">
                          📅 {comm.years}
                        </span>
                      </div>
                      <h3 className="text-xl font-black font-serif text-stone-900 dark:text-stone-100">
                        {comm.name}
                      </h3>
                      <p className="text-xs text-stone-500 dark:text-stone-400 italic">
                        {comm.officialTitle}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-center">
                      <button
                        type="button"
                        onClick={() => handleOpenCommissionDossier(comm)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-blue-900 hover:bg-blue-800 dark:bg-blue-700 dark:hover:bg-blue-600 text-white transition-all cursor-pointer"
                      >
                        <FolderArchive className="w-3.5 h-3.5" />
                        <span>Ouvrir l'Enquête Complète</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setExpandedCommissionId(isExpanded ? null : comm.id)}
                        className="p-2 rounded-xl border border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
                        title={isExpanded ? "Réduire les détails" : "Déplier tous les faits et réformes"}
                      >
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Core Information Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-stone-950/60 border border-stone-200/60 dark:border-stone-800/60 space-y-1.5">
                      <span className="font-bold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                        <Gavel className="w-3.5 h-3.5 text-amber-600" />
                        Présidence & Magistrats :
                      </span>
                      <p className="text-stone-700 dark:text-stone-300 font-medium">
                        {comm.presidentOrJudges}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-stone-950/60 border border-stone-200/60 dark:border-stone-800/60 space-y-1.5">
                      <span className="font-bold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-rose-600" />
                        Gouvernement & Pouvoir Visé :
                      </span>
                      <p className="text-stone-700 dark:text-stone-300 font-medium">
                        {comm.governingPartyTargeted}
                      </p>
                    </div>
                  </div>

                  {/* Key Scandal Summary */}
                  <div className="space-y-1.5 text-xs sm:text-sm">
                    <span className="font-bold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                      <AlertOctagon className="w-4 h-4 text-rose-600" />
                      Scandale Central & Révélations Majeures :
                    </span>
                    <p className="text-stone-700 dark:text-stone-300 leading-relaxed bg-rose-50/50 dark:bg-rose-950/20 p-3.5 rounded-2xl border border-rose-200/60 dark:border-rose-900/40">
                      {comm.keyScandalSummary}
                    </p>
                  </div>

                  {/* Elite Actors Target Badges */}
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">
                      Élites & Acteurs Clés Ciblés :
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {comm.eliteActorsTargeted.map((actor, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-xs font-semibold border border-stone-200 dark:border-stone-700"
                        >
                          👤 {actor}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expanded Section */}
                  {isExpanded && (
                    <div className="pt-4 border-t border-stone-200 dark:border-stone-800 space-y-4 text-xs animate-fadeIn">
                      {/* Shocking Revelations */}
                      <div className="space-y-2">
                        <span className="font-bold text-stone-900 dark:text-stone-100 flex items-center gap-1.5 text-sm">
                          <ShieldAlert className="w-4 h-4 text-amber-500" />
                          Faits Dévoilés Sous Serment :
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {comm.shockingRevelations.map((rev, idx) => (
                            <div
                              key={idx}
                              className="p-3 rounded-xl bg-stone-50 dark:bg-stone-950/70 border border-stone-100 dark:border-stone-800 flex items-start gap-2"
                            >
                              <span className="text-amber-600 font-bold text-xs shrink-0 mt-0.5">•</span>
                              <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                                {rev}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Outcomes & Laws Adopted */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                        <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-950/70 border border-stone-200/60 dark:border-stone-800/60 space-y-2">
                          <span className="font-bold text-stone-900 dark:text-stone-100 flex items-center gap-1.5 text-xs uppercase tracking-wider">
                            <Gavel className="w-3.5 h-3.5 text-blue-600" />
                            Conséquences Judiciaires & Politiques :
                          </span>
                          <ul className="space-y-1.5 text-stone-600 dark:text-stone-400">
                            {comm.judicialAndPoliticalOutcomes.map((out, idx) => (
                              <li key={idx} className="flex items-start gap-1.5">
                                <span className="text-blue-600 font-bold">→</span>
                                <span>{out}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40 space-y-2">
                          <span className="font-bold text-emerald-900 dark:text-emerald-300 flex items-center gap-1.5 text-xs uppercase tracking-wider">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            Réformes Législatives Majeures Adoptées :
                          </span>
                          <ul className="space-y-1.5 text-stone-700 dark:text-stone-300">
                            {comm.majorLawsAndReformsAdopted.map((law, idx) => (
                              <li key={idx} className="flex items-start gap-1.5">
                                <span className="text-emerald-600 font-bold">✓</span>
                                <span>{law}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Famous Quote / Conclusion */}
                      <div className="p-3.5 rounded-2xl bg-stone-100/70 dark:bg-stone-800/40 border-l-4 border-amber-500 italic text-stone-800 dark:text-stone-200">
                        {comm.famousQuoteOrJudgeRatio}
                      </div>

                      {/* Official Reference & Action Button */}
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-[11px] text-stone-400">
                        <span>
                          <strong>Source officielle :</strong> {comm.canliiOrOfficialRef}
                        </span>

                        <button
                          type="button"
                          onClick={() => handleOpenCommissionDossier(comm)}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-stone-950 transition-all cursor-pointer self-stretch sm:self-auto justify-center"
                        >
                          <FolderArchive className="w-3.5 h-3.5" />
                          <span>Charger le rapport d'investigation complet</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
