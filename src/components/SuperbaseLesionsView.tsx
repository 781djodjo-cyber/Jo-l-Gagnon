import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Database,
  ShieldAlert,
  AlertTriangle,
  Scale,
  Users,
  Search,
  Copy,
  Check,
  ExternalLink,
  Bot,
  FileText,
  ChevronRight,
  Filter,
  Flame,
  FileCheck2,
  Lock,
  Building2,
  Info,
  Tv,
  Gavel,
  BookOpen,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import {
  DPJ_JURISPRUDENCE_DATABASE,
  DpjJurisprudence,
  getJurisprudencesForLesion
} from '../data/dpjJurisprudenceData';

export interface SuperbaseLesionRecord {
  id: string;
  code: string;
  category: 'Faits Falsifiés & Rumeurs' | 'Famille Élargie Écartée' | 'Visites Supervisées Piégées' | 'Déni d\'Aide aux Parents' | 'Adoptions Forcées' | 'Déni de Parole de l\'Enfant';
  title: string;
  percentageDocumented: string;
  casesCount: string;
  severity: 'Critique' | 'Majeure' | 'Systémique';
  lpjArticle: string;
  charteArticle: string;
  modusOperandi: string;
  cdpdjFinding: string;
  actionRecourse: string;
  petitionTemplate: string;
}

export const SUPERBASE_LESIONS_DATA: SuperbaseLesionRecord[] = [
  {
    id: 'lesion-1',
    code: 'CDPDJ-LES-01',
    category: 'Faits Falsifiés & Rumeurs',
    title: 'Faits non vérifiés, manipulés ou inventés dans les rapports d\'évaluation',
    percentageDocumented: '49% des dossiers',
    casesCount: '69 enfants sur 140',
    severity: 'Critique',
    lpjArticle: 'Art. 53 & 54 LPJ (Obligation de rigueur factuelle et preuve probante)',
    charteArticle: 'Art. 23 & 48 Charte québécoise (Droit à une preuve loyale et sauvegarde de la dignité)',
    modusOperandi: 'Des allégations de voisins, ouï-dire non corroborés ou propos déformés de parents sont intégrés comme « faits avérés » dans les rapports soumis au Tribunal de la jeunesse sans validation médicale ou clinique.',
    cdpdjFinding: 'La Commission des droits de la personne et des droits de la jeunesse a formellement documenté l\'omission sélective des progrès des parents et l\'inclusion de faussetés caractérisées pour justifier la compromission.',
    actionRecourse: 'Demande d\'assignation en faux, requête en rétractation de jugement (art. 95 LPJ) et plainte déontologique à l\'Ordre des travailleurs sociaux (OTSTCFQ).',
    petitionTemplate: `OBJET : REQUÊTE EN RÉVISION D'ORDONNANCE (ART. 95 LPJ) - INTRODUCTION DE FAITS NON VÉRIFIÉS
À la Chambre de la jeunesse du district de [District judiciaire],
Dossier numéro : [Numéro de greffe]
Demandeur(s) : [Nom du parent biologique ou tuteur]

1. La décision rendue en date du [Date de l'ordonnance] s'appuie sur le rapport d'évaluation déposé par la DPJ alléguant [Décrire le fait erroné ou non vérifié] ;
2. En application des constats de l'enquête systémique de la CDPDJ sur les lésions de droits (Mauricie-Centre-du-Québec), il appert que ces éléments constituent des faits non corroborés, contestés et contraires à la vérité factuelle ;
3. En vertu de l'article 95 de la Loi sur la protection de la jeunesse, un fait nouveau déterminant et la preuve d'omissions substantielles justifient la révocation immédiate de l'ordonnance de placement et la réévaluation complète par un expert indépendant.`
  },
  {
    id: 'lesion-2',
    code: 'CDPDJ-LES-02',
    category: 'Famille Élargie Écartée',
    title: 'Éviction délibérée des grands-parents, oncles et tantes disponibles',
    percentageDocumented: '63% des dossiers',
    casesCount: '88 enfants sur 140',
    severity: 'Systémique',
    lpjArticle: 'Art. 4 & 11.1 LPJ (Maintien prioritaire dans le milieu familial naturel)',
    charteArticle: 'Art. 39 Charte des droits et libertés (Protection des liens d\'attachement familiaux)',
    modusOperandi: 'La DPJ refuse d\'évaluer ou même de rencontrer les grands-parents ou proches qui se manifestent, sous prétexte d\'« urgence de projet de vie », afin de diriger l\'enfant directement vers une famille d\'accueil en vue d\'adoption.',
    cdpdjFinding: 'Dans 63% des situations analysées par la Commission, des personnes hautement significatives et prêtes à s\'engager pour l\'enfant ont été totalement écartées sans justification objective ni visite des lieux.',
    actionRecourse: 'Requête formelle du grand-parent ou proche en intervention volontaire devant la Chambre de la jeunesse pour réclamer l\'évaluation prioritaire en milieu naturel.',
    petitionTemplate: `OBJET : DEMANDE FORMELLE D'ÉVALUATION FAMILIALE EN MILIEU ÉLARGI (ART. 4 ET 11.1 LPJ)
À l'attention de la Direction de la protection de la jeunesse de [Région],
Concernant l'enfant : [Nom et prénom de l'enfant]
Intervenant auprès du dossier : [Nom de l'intervenant DPJ]

Je soussigné(e), [Votre nom complet], [Lien de parenté : Grand-parent / Oncle / Tante], déclare formellement être apte, disponible et désireux(se) d'accueillir l'enfant en milieu familial immédiat.
En vertu des articles 4 et 11.1 de la Loi sur la protection de la jeunesse, la loi impose au directeur de privilégier le maintien et l'hébergement auprès des personnes significatives de l'entourage avant toute rupture institutionnelle.
Je réclame une évaluation d'urgence de mon domicile et mon audition devant la Chambre de la jeunesse.`
  },
  {
    id: 'lesion-3',
    code: 'CDPDJ-LES-03',
    category: 'Déni d\'Aide aux Parents',
    title: 'Absence totale d\'offre de services et de soutien concret aux parents',
    percentageDocumented: '57% des dossiers',
    casesCount: '80 enfants sur 140',
    severity: 'Critique',
    lpjArticle: 'Art. 2.2 & 54 LPJ (Obligation étatique d\'aide et de réadaptation du milieu familial)',
    charteArticle: 'Art. 40 Charte québécoise (Droit au soutien social et égalité)',
    modusOperandi: 'L\'intervenant constate des difficultés (précarité financière, détresse psychologique, logement exigu) mais n\'organise aucun service CLSC, psychoéducatif ou répit parental, puis conclut que les parents sont « inaptes à progresser ».',
    cdpdjFinding: 'Dans 57 % des dossiers d\'enfants examinés, la DPJ a sollicité une rupture de garde sans avoir au préalable mobilisé les ressources d\'aide et de réinsertion prévues par l\'esprit fondamental de la loi.',
    actionRecourse: 'Dénonciation pour omission de services essentiels auprès du Commissaire aux plaintes et à la qualité des services du CIUSSS.',
    petitionTemplate: `OBJET : DÉNONCIATION DE DÉFAILLANCE D'AIDE ET DE SERVICES AUX FAMILLES (ART. 2.2 LPJ)
Au Commissariat aux plaintes et à la qualité des services du CIUSSS [Région],
Plaignant(s) : [Noms des parents]

En date du [Date], la DPJ a conclu à la compromission de la sécurité de [Nom de l'enfant].
Or, en violation expresse de l'article 2.2 de la LPJ, aucune mesure de soutien psychoéducatif, de répit familial ou d'aide matérielle concrète n'a été déployée pour soutenir notre foyer, comme documenté par la CDPDJ dans son enquête sur les 140 dossiers sous tutelle.
Nous réclamons l'injonction de services immédiats et la suspension de toute démarche d'admissibilité à l'adoption permanente.`
  },
  {
    id: 'lesion-4',
    code: 'CDPDJ-LES-04',
    category: 'Visites Supervisées Piégées',
    title: 'Instrumentalisation des visites de contact pour piéger les parents',
    percentageDocumented: '52% des dossiers',
    casesCount: '73 enfants sur 140',
    severity: 'Majeure',
    lpjArticle: 'Art. 8 & 57 LPJ (Maintien des contacts affectifs et droits de visite)',
    charteArticle: 'Art. 1 & 48 Charte (Respect de l\'intégrité morale et psychologique)',
    modusOperandi: 'Les contacts parents-enfants sont contingentés à 1 heure par quinzaine dans des bureaux administratifs froids. Tout signe d\'émotion ou sanglot de l\'enfant au moment du départ est inscrit au dossier comme « preuve de déstabilisation causée par le parent ».',
    cdpdjFinding: 'La CDPDJ a relevé que les visites supervisées ont été détournées de leur vocation d\'encouragement du lien d\'attachement pour devenir de stricts exercices d\'évaluation probatoire à charge.',
    actionRecourse: 'Demande de modification des modalités d\'accès et de surveillance devant le juge pour faire superviser les visites par un organisme communautaire neutre.',
    petitionTemplate: `OBJET : REQUÊTE POUR MODALITÉS D'ACCÈS NEUTRES ET BIENVEILLANTES (ART. 57 LPJ)
À la Chambre de la jeunesse du district de [Ville],
Dans l'affaire de : [Nom de l'enfant]

1. Les visites actuellement accordées au parent [Nom] s'exercent sous une surveillance hostile dans les locaux de la DPJ ;
2. La CDPDJ a constaté que cette méthode génère un stress artificiel documenté dans les lésions de droits systémiques (taux de 52 %) ;
3. Le parent requiert que les visites soient confiées à une ressource communautaire neutre et que leur fréquence soit rétablie à un niveau garantissant le droit de l'enfant à son histoire familiale.`
  },
  {
    id: 'lesion-5',
    code: 'CDPDJ-LES-05',
    category: 'Adoptions Forcées',
    title: 'Canalisation précipitée vers l\'adoption plénière (« Projet de vie permanent »)',
    percentageDocumented: '3x à 6x la moyenne nationale',
    casesCount: '157 dossiers sous audit ministériel',
    severity: 'Critique',
    lpjArticle: 'Art. 91 & 95 LPJ (Conditions strictes d\'admissibilité à l\'adoption)',
    charteArticle: 'Convention de l\'ONU relative aux droits de l\'enfant (Art. 20 et 21)',
    modusOperandi: 'Dès les premiers mois de prise en charge, les équipes orientent le dossier comme un placement d\'adoption irréversible, décourageant le retour dans la famille naturelle et imposant des délais intenables.',
    cdpdjFinding: 'La CDPDJ a conclu à une culture organisationnelle fautive favorisant l\'adoption forcée, conduisant à la mise sous tutelle officielle de la DPJ régionale par le ministre Lionel Carmant.',
    actionRecourse: 'Appel immédiat devant la Cour du Québec et contestation d\'admissibilité à l\'adoption avec contre-expertise pédiatrique et psychiatrique indépendante.',
    petitionTemplate: `OBJET : CONTESTATION FORMELLE DE REQUÊTE EN ADMISSIBILITÉ À L'ADOPTION (ART. 91 LPJ)
À la Chambre de la jeunesse,
Dossier : [Numéro du greffe]

Les parents [Noms des parents] contestent avec la plus grande énergie la requête en admissibilité à l'adoption déposée par la DPJ.
Ils soulignent que la direction régionale a été placée sous tutelle gouvernementale suite à un audit révélant des ordonnances d'adoption fondées sur des informations tronquées et des lésions de droits sur 140 enfants.
Les parents demandent le sursis d'instance jusqu'à conclusion des travaux de la commission d'audit externe et la désignation d'un expert pédopsychiatre indépendant.`
  },
  {
    id: 'lesion-6',
    code: 'CDPDJ-LES-06',
    category: 'Déni de Parole de l\'Enfant',
    title: 'Étouffement de l\'avis et de la volonté exprimée par l\'enfant',
    percentageDocumented: '42% des dossiers',
    casesCount: '58 enfants sur 140',
    severity: 'Majeure',
    lpjArticle: 'Art. 8 LPJ (Droit imprescriptible d\'être entendu et consulté)',
    charteArticle: 'Art. 39 Charte des droits et libertés & Art. 12 CIDE',
    modusOperandi: 'Des enfants d\'âge scolaire ayant exprimé le désir de réintégrer leur foyer ou de conserver le contact avec leur fratrie voient leur parole occultée ou qualifiée de « loyauté toxique » par les services sociaux.',
    cdpdjFinding: 'Absence récurrente de consultation directe de l\'enfant et omission systématique de lui désigner un avocat indépendant pour porter ses volontés devant le tribunal.',
    actionRecourse: 'Demande urgente de nomination d\'un avocat d\'office pour l\'enfant (Art. 80 LPJ) aux frais de l\'aide juridique de l\'État.',
    petitionTemplate: `OBJET : DEMANDE DE NOMINATION D'UN PROCUREUR INDÉPENDANT POUR L'ENFANT (ART. 80 LPJ)
À la Chambre de la jeunesse,
Pour l'enfant mineur : [Nom de l'enfant, Date de naissance]

Il est demandé au Tribunal d'ordonner la désignation immédiate d'un avocat indépendant pour représenter personnellement l'enfant, distinctement de la DPJ et des parents.
En vertu de l'art. 8 et 80 LPJ, l'enfant a le droit fondamental d'exprimer son point de vue libre de toute influence administrative, conformément aux recommandations de la CDPDJ sur les lésions de droits.`
  }
];

interface SuperbaseLesionsViewProps {
  onOpenInvestigationReport: (dossierId: string) => void;
  onAskAiQuestion: (query: string) => void;
  onNavigateToMediaArchives?: () => void;
  onNavigateToDefenseTool?: () => void;
}

export const SuperbaseLesionsView: React.FC<SuperbaseLesionsViewProps> = ({
  onOpenInvestigationReport,
  onAskAiQuestion,
  onNavigateToMediaArchives,
  onNavigateToDefenseTool
}) => {
  const [activeTab, setActiveTab] = useState<'cdpdj_lesions' | 'jurisprudences_phares'>('cdpdj_lesions');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedRecord, setSelectedRecord] = useState<SuperbaseLesionRecord>(SUPERBASE_LESIONS_DATA[0]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Jurisprudence state
  const [selectedJurisprudence, setSelectedJurisprudence] = useState<DpjJurisprudence>(DPJ_JURISPRUDENCE_DATABASE[0]);
  const [jurisprudenceSearch, setJurisprudenceSearch] = useState('');
  const [selectedCourtFilter, setSelectedCourtFilter] = useState<string>('all');
  const [selectedJurisCategory, setSelectedJurisCategory] = useState<string>('all');

  const categories = [
    'all',
    'Faits Falsifiés & Rumeurs',
    'Famille Élargie Écartée',
    'Visites Supervisées Piégées',
    'Déni d\'Aide aux Parents',
    'Adoptions Forcées',
    'Déni de Parole de l\'Enfant'
  ];

  const courtsList = [
    'all',
    'Cour suprême du Canada',
    'Cour d\'appel du Québec',
    'Chambre de la jeunesse',
    'Tribunal des droits de la personne'
  ];

  const jurisprudenceCategories = [
    'all',
    ...Array.from(new Set(DPJ_JURISPRUDENCE_DATABASE.map((j) => j.category)))
  ];

  const filteredRecords = SUPERBASE_LESIONS_DATA.filter((record) => {
    const matchesCategory = selectedCategory === 'all' || record.category === selectedCategory;
    const matchesSearch =
      record.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.lpjArticle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.modusOperandi.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.cdpdjFinding.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const filteredJurisprudences = DPJ_JURISPRUDENCE_DATABASE.filter((j) => {
    const matchesCourt =
      selectedCourtFilter === 'all' ||
      j.court.toLowerCase().includes(selectedCourtFilter.toLowerCase());
    const matchesCat =
      selectedJurisCategory === 'all' || j.category === selectedJurisCategory;
    const q = jurisprudenceSearch.toLowerCase().trim();
    const matchesQ =
      q === '' ||
      j.title.toLowerCase().includes(q) ||
      j.citation.toLowerCase().includes(q) ||
      j.summary.toLowerCase().includes(q) ||
      j.legalImpactAgainstDpj.toLowerCase().includes(q) ||
      j.applicableLpjArticles.some((a) => a.toLowerCase().includes(q)) ||
      j.howToPlead.toLowerCase().includes(q) ||
      j.soquijOrCanliiRef.toLowerCase().includes(q);
    return matchesCourt && matchesCat && matchesQ;
  });

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div id="superbase-lesions-view" className="space-y-6">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl border-2 border-rose-500/40 bg-linear-to-br from-rose-950/20 via-stone-900 to-amber-950/30 dark:from-rose-950/40 dark:via-stone-950 dark:to-amber-950/40 text-stone-100 shadow-md relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-48 h-48 rounded-full bg-rose-500/10 blur-2xl pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-bold font-mono uppercase tracking-wider">
              <Database className="w-3.5 h-3.5 text-rose-400" />
              <span>Superbase Citoyenne • Registre Officiel des Lésions de Droits</span>
            </div>

            <div className="flex items-center gap-2">
              {onNavigateToDefenseTool && (
                <button
                  type="button"
                  onClick={onNavigateToDefenseTool}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-emerald-500/60 bg-emerald-950/50 hover:bg-emerald-900/70 text-xs font-bold text-emerald-300 transition-colors cursor-pointer shadow-xs"
                >
                  <Scale className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Outil Défense Parents (LPJ)</span>
                </button>
              )}

              {onNavigateToMediaArchives && (
                <button
                  type="button"
                  onClick={onNavigateToMediaArchives}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-amber-500/50 bg-amber-950/40 hover:bg-amber-900/60 text-xs font-bold text-amber-300 transition-colors cursor-pointer shadow-xs"
                >
                  <Tv className="w-3.5 h-3.5 text-amber-400" />
                  <span>Enquêtes Médias (1995–2026)</span>
                </button>
              )}

              <button
                type="button"
                onClick={() => onOpenInvestigationReport('dpj-mauricie-lesions-droits')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-700 bg-stone-800 hover:bg-stone-700 text-xs font-bold text-stone-200 transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-amber-400" />
                <span>Rapport Enquête 140 Enfants</span>
                <ExternalLink className="w-3 h-3 text-stone-400" />
              </button>

              <button
                type="button"
                onClick={() =>
                  onAskAiQuestion(
                    'Analyse les 6 catégories de lésions de droits constatées par la CDPDJ sur les 140 enfants de la DPJ en Mauricie-Centre-du-Québec et donne la démarche pour contester une ordonnance selon l\'art. 95 LPJ.'
                  )
                }
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-bold text-white shadow-xs transition-colors cursor-pointer"
              >
                <Bot className="w-3.5 h-3.5" />
                <span>Questionner l'IA</span>
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif tracking-tight text-white flex items-center gap-2">
              <span>Superbase : Lésions de Droits de la Jeunesse (140 Enfants • CDPDJ)</span>
            </h3>
            <p className="text-sm text-stone-300 max-w-3xl mt-1 leading-relaxed">
              Registre d'audit indépendant répertoriant les violations structurelles documentées par la{' '}
              <strong className="text-white">Commission des droits de la personne et des droits de la jeunesse (CDPDJ)</strong>{' '}
              ayant conduit à la mise sous tutelle de la direction régionale de la Mauricie–Centre-du-Québec en octobre 2024.
            </p>
          </div>

          {/* Key Metric Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="p-3.5 rounded-2xl bg-stone-900/80 border border-stone-800 space-y-1">
              <span className="text-[11px] text-stone-400 font-medium">Enfants victimes reconnues</span>
              <div className="text-2xl font-black text-rose-400 font-mono">140</div>
              <span className="text-[10px] text-stone-400">Lésions de droits formelles (CDPDJ)</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-stone-900/80 border border-stone-800 space-y-1">
              <span className="text-[11px] text-stone-400 font-medium">Faits non vérifiés / manipulés</span>
              <div className="text-2xl font-black text-amber-400 font-mono">49%</div>
              <span className="text-[10px] text-stone-400">Dans les dossiers de compromission</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-stone-900/80 border border-stone-800 space-y-1">
              <span className="text-[11px] text-stone-400 font-medium">Familles privées d'aide préalable</span>
              <div className="text-2xl font-black text-blue-400 font-mono">57%</div>
              <span className="text-[10px] text-stone-400">Aucun soutien CLSC/psychoéducatif</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-stone-900/80 border border-stone-800 space-y-1">
              <span className="text-[11px] text-stone-400 font-medium">Grands-parents & proches ignorés</span>
              <div className="text-2xl font-black text-purple-400 font-mono">63%</div>
              <span className="text-[10px] text-stone-400">Écartés pour forcer l'adoption</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-navigation : CDPDJ Lesions vs Jurisprudences Phares contre la DPJ */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-2 rounded-2xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('cdpdj_lesions')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'cdpdj_lesions'
                ? 'bg-rose-600 text-white shadow-sm font-black'
                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
            }`}
          >
            <Database className="w-4 h-4" />
            <span>1. Registre CDPDJ • 140 Enfants (6 Lésions)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('jurisprudences_phares')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'jurisprudences_phares'
                ? 'bg-emerald-600 text-white shadow-sm font-black'
                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
            }`}
          >
            <Scale className="w-4 h-4" />
            <span>2. Grand Répertoire des Jurisprudences contre la DPJ</span>
            <span className="px-2 py-0.5 rounded-full bg-stone-950/40 text-emerald-300 text-[10px] font-mono border border-emerald-500/30">
              {DPJ_JURISPRUDENCE_DATABASE.length} arrêts phares
            </span>
          </button>
        </div>

        {onNavigateToDefenseTool && (
          <button
            type="button"
            onClick={onNavigateToDefenseTool}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-emerald-500/40 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 text-xs font-bold hover:bg-emerald-100 transition-colors cursor-pointer"
          >
            <Gavel className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Ouvrir l'Outil Défense Parents</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        )}
      </div>

      {/* MODE 1: REGISTRE DES LÉSIONS CDPDJ */}
      {activeTab === 'cdpdj_lesions' && (
      <div className="space-y-6">
      {/* Filters and Search Bar */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Rechercher par article LPJ, terme clinique (ex: fausses notes, visites, adoption)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 placeholder-stone-400 text-xs focus:outline-hidden focus:ring-2 focus:ring-rose-500/30"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            <Filter className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <div className="flex gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-rose-600 text-white shadow-xs'
                      : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
                  }`}
                >
                  {cat === 'all' ? 'Toutes les lésions' : cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Master-Detail Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left List of Lesions (5 Cols) */}
        <div className="lg:col-span-5 space-y-3">
          <div className="text-xs font-bold text-stone-500 uppercase tracking-wider font-mono flex items-center justify-between">
            <span>Enregistrements de la Superbase ({filteredRecords.length})</span>
            <span className="text-[10px] text-stone-400">Cliquez pour inspecter</span>
          </div>

          <div className="space-y-2.5">
            {filteredRecords.map((record) => {
              const isSelected = selectedRecord.id === record.id;
              return (
                <div
                  key={record.id}
                  onClick={() => setSelectedRecord(record)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'border-rose-500 bg-rose-50/50 dark:bg-rose-950/20 shadow-xs ring-2 ring-rose-500/20'
                      : 'border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 hover:border-stone-300 dark:hover:border-stone-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      <span className="px-2 py-0.5 rounded-md bg-stone-200 dark:bg-stone-800 text-[10px] font-mono font-bold text-stone-800 dark:text-stone-200">
                        {record.code}
                      </span>
                      <span className="text-[10px] font-bold text-rose-600 dark:text-rose-400">
                        {record.category}
                      </span>
                    </div>

                    <span className="px-2 py-0.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-700 dark:text-rose-300 text-[10px] font-bold">
                      {record.percentageDocumented}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100 mt-2 line-clamp-2">
                    {record.title}
                  </h4>

                  <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 mt-2.5 pt-2 border-t border-stone-100 dark:border-stone-800/80">
                    <span className="font-mono text-[11px]">{record.casesCount}</span>
                    <span className="inline-flex items-center gap-1 font-semibold text-rose-600 dark:text-rose-400 text-xs">
                      <span>Détails & Recours</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}

            {filteredRecords.length === 0 && (
              <div className="p-8 text-center rounded-2xl border border-dashed border-stone-300 dark:border-stone-700 text-stone-500 text-xs">
                Aucun enregistrement ne correspond aux critères de recherche.
              </div>
            )}
          </div>
        </div>

        {/* Right Detail Dossier (7 Cols) */}
        <div className="lg:col-span-7 space-y-5">
          <div className="rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 sm:p-7 shadow-sm space-y-6">
            <div className="flex flex-wrap items-start justify-between gap-3 pb-4 border-b border-stone-200 dark:border-stone-800">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-stone-100 dark:bg-stone-800 text-xs font-mono font-black text-stone-800 dark:text-stone-200">
                    {selectedRecord.code}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-700 dark:text-rose-300 text-xs font-bold">
                    Sévérité : {selectedRecord.severity}
                  </span>
                </div>
                <h3 className="text-lg font-bold font-serif text-stone-900 dark:text-stone-100">
                  {selectedRecord.title}
                </h3>
              </div>

              <div className="text-right">
                <div className="text-xl font-black text-rose-600 dark:text-rose-400 font-mono">
                  {selectedRecord.percentageDocumented}
                </div>
                <div className="text-[11px] text-stone-500 font-mono">
                  {selectedRecord.casesCount}
                </div>
              </div>
            </div>

            {/* Articles de Lois bafoués */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-500/30 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wider font-mono">
                  <Scale className="w-3.5 h-3.5" />
                  <span>Violation Loi sur la Protection de la Jeunesse</span>
                </div>
                <p className="text-xs text-stone-800 dark:text-stone-200 font-medium">
                  {selectedRecord.lpjArticle}
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-500/30 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-blue-900 dark:text-blue-300 uppercase tracking-wider font-mono">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>Violation Charte des Droits & Libertés</span>
                </div>
                <p className="text-xs text-stone-800 dark:text-stone-200 font-medium">
                  {selectedRecord.charteArticle}
                </p>
              </div>
            </div>

            {/* Constat CDPDJ et Modus Operandi */}
            <div className="space-y-4">
              <div className="space-y-1.5">
                <h5 className="text-xs font-bold text-stone-500 uppercase tracking-wider font-mono flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-500" />
                  <span>Constat Officiel de la CDPDJ (Rapport 140 Enfants)</span>
                </h5>
                <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-xs text-stone-800 dark:text-stone-200 leading-relaxed font-sans">
                  {selectedRecord.cdpdjFinding}
                </div>
              </div>

              <div className="space-y-1.5">
                <h5 className="text-xs font-bold text-stone-500 uppercase tracking-wider font-mono flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-amber-500" />
                  <span>Modus Operandi Pratique & Dysfonctionnement Terrain</span>
                </h5>
                <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                  {selectedRecord.modusOperandi}
                </div>
              </div>

              <div className="space-y-1.5">
                <h5 className="text-xs font-bold text-stone-500 uppercase tracking-wider font-mono flex items-center gap-1.5">
                  <Scale className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Voie de Recours Juridique Préconisée</span>
                </h5>
                <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-500/30 text-xs text-emerald-900 dark:text-emerald-200 leading-relaxed font-medium">
                  {selectedRecord.actionRecourse}
                </div>
              </div>

              {/* JURISPRUDENCES PHARES RATTACHÉES À CETTE LÉSION */}
              {(() => {
                const linkedJurisprudences = getJurisprudencesForLesion(selectedRecord.code);
                if (linkedJurisprudences.length === 0) return null;
                return (
                  <div className="space-y-2.5 pt-2 border-t border-stone-200 dark:border-stone-800">
                    <div className="flex items-center justify-between">
                      <h5 className="text-xs font-bold text-stone-700 dark:text-stone-200 uppercase tracking-wider font-mono flex items-center gap-1.5">
                        <Scale className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        <span>Jurisprudences Phares contre cette Lésion ({linkedJurisprudences.length})</span>
                      </h5>
                      <button
                        type="button"
                        onClick={() => setActiveTab('jurisprudences_phares')}
                        className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>Voir tout le registre</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="space-y-2">
                      {linkedJurisprudences.map((juris) => (
                        <div
                          key={juris.id}
                          className="p-3.5 rounded-2xl bg-emerald-50/40 dark:bg-emerald-950/25 border border-emerald-500/30 space-y-2"
                        >
                          <div className="flex flex-wrap items-center justify-between gap-1.5">
                            <span className="text-xs font-bold font-serif text-stone-900 dark:text-stone-100">
                              {juris.title}
                            </span>
                            <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-[10px] font-mono font-bold">
                              {juris.citation}
                            </span>
                          </div>

                          <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed italic border-l-2 border-emerald-500/70 pl-2.5">
                            {juris.keyJudgeQuote}
                          </p>

                          <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-emerald-500/20">
                            <span className="text-[11px] text-stone-500 dark:text-stone-400 font-mono">
                              {juris.court} ({juris.decisionYear})
                            </span>
                            <div className="flex items-center gap-2">
                              <button
                                type="button"
                                onClick={() =>
                                  handleCopy(
                                    `quote-${juris.id}`,
                                    `${juris.title} (${juris.citation}) : ${juris.keyJudgeQuote}`
                                  )
                                }
                                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-[11px] font-bold text-stone-700 dark:text-stone-200 hover:bg-stone-50 cursor-pointer"
                              >
                                {copiedId === `quote-${juris.id}` ? (
                                  <>
                                    <Check className="w-3 h-3 text-emerald-600" />
                                    <span className="text-emerald-600">Copiée</span>
                                  </>
                                ) : (
                                  <>
                                    <Copy className="w-3 h-3 text-stone-500" />
                                    <span>Copier citation</span>
                                  </>
                                )}
                              </button>

                              <button
                                type="button"
                                onClick={() => {
                                  setSelectedJurisprudence(juris);
                                  setActiveTab('jurisprudences_phares');
                                }}
                                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold cursor-pointer"
                              >
                                <span>Fiche complète</span>
                                <ArrowRight className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Modèle de Requête / Contestation à Copier */}
            <div className="space-y-2 pt-2 border-t border-stone-200 dark:border-stone-800">
              <div className="flex items-center justify-between">
                <h5 className="text-xs font-bold text-stone-700 dark:text-stone-300 flex items-center gap-1.5">
                  <FileCheck2 className="w-4 h-4 text-blue-500" />
                  <span>Modèle Juridique de Requête Formelle (Prêt à Copier)</span>
                </h5>

                <button
                  type="button"
                  onClick={() => handleCopy(selectedRecord.id, selectedRecord.petitionTemplate)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 text-xs font-bold transition-colors cursor-pointer"
                >
                  {copiedId === selectedRecord.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copié !</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-stone-500" />
                      <span>Copier le modèle</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="p-4 rounded-2xl bg-stone-900 text-stone-100 text-[11px] font-mono whitespace-pre-wrap leading-relaxed border border-stone-800 max-h-52 overflow-y-auto">
                {selectedRecord.petitionTemplate}
              </pre>
            </div>

            {/* Quick Consultation Button */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <div className="text-[11px] text-stone-500 dark:text-stone-400">
                Source : Enquête d'initiative CDPDJ (2024) • Mise sous tutelle MSSS
              </div>

              <button
                type="button"
                onClick={() =>
                  onAskAiQuestion(
                    `Explique en détail les recours pour contester la lésion "${selectedRecord.title}" (${selectedRecord.code}) selon la LPJ et la jurisprudence québécoise.`
                  )
                }
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900 hover:bg-blue-100 text-xs font-bold transition-colors cursor-pointer"
              >
                <Bot className="w-3.5 h-3.5" />
                <span>Consulter l'IA sur cette lésion</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
      )}

      {/* MODE 2: GRAND RÉPERTOIRE DES JURISPRUDENCES CONTRE LA DPJ */}
      {activeTab === 'jurisprudences_phares' && (
        <div className="space-y-6">
          {/* Header Description */}
          <div className="p-5 sm:p-6 rounded-3xl bg-linear-to-r from-emerald-950/40 via-stone-900 to-stone-900 border border-emerald-500/40 space-y-3">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-mono font-bold">
                Arsenal de Contestation Judiciaire • Arrêts Phares CanLII & SOQUIJ
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
              Les Décisions qui Condamnent les Abus & Imposent les Droits des Familles
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 max-w-4xl leading-relaxed">
              La Cour suprême du Canada, la Cour d'appel du Québec et la Chambre de la jeunesse ont établi des règles impératives que la DPJ tente fréquemment de contourner : obligation de financer un avocat pour le parent (Arrêt <em>G.(J.)</em>), exclusion absolue du ouï-dire non vérifié, communication exhaustive du dossier (Arrêt <em>Stinchcombe</em>), priorité légale absolue à la famille élargie avant tout placement tiers, et nullité absolue des ordonnances après 48h sans audition.
            </p>
          </div>

          {/* Search & Court Filters */}
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={jurisprudenceSearch}
                  onChange={(e) => setJurisprudenceSearch(e.target.value)}
                  placeholder="Rechercher par nom d'arrêt, article LPJ (ex: Art. 2.4, Art. 53), mot-clé (ex: ouï-dire, 48h, Stinchcombe, G.(J.))..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 placeholder-stone-400 text-xs focus:outline-hidden focus:ring-2 focus:ring-emerald-500/30"
                />
              </div>

              {/* Court filter buttons */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
                <Filter className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                <div className="flex gap-1.5">
                  {courtsList.map((court) => (
                    <button
                      key={court}
                      type="button"
                      onClick={() => setSelectedCourtFilter(court)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                        selectedCourtFilter === court
                          ? 'bg-emerald-600 text-white shadow-xs'
                          : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
                      }`}
                    >
                      {court === 'all' ? 'Toutes les cours' : court}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Category pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
              <span className="text-[11px] font-mono font-bold text-stone-400 shrink-0 mr-1">
                Thème :
              </span>
              {jurisprudenceCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedJurisCategory(cat)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                    selectedJurisCategory === cat
                      ? 'bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-500/40 font-bold'
                      : 'bg-stone-100 dark:bg-stone-800/80 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
                  }`}
                >
                  {cat === 'all' ? 'Tous les thèmes' : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Master-Detail Layout for Jurisprudence */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left list of decisions */}
            <div className="lg:col-span-5 space-y-3">
              <div className="text-xs font-mono font-bold text-stone-500 uppercase tracking-wider flex items-center justify-between">
                <span>Décisions Recensées ({filteredJurisprudences.length})</span>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">
                  Précédents Juridiques Contraignants
                </span>
              </div>

              <div className="space-y-2.5 max-h-[720px] overflow-y-auto pr-1">
                {filteredJurisprudences.map((j) => {
                  const isSelected = selectedJurisprudence.id === j.id;
                  return (
                    <button
                      key={j.id}
                      type="button"
                      onClick={() => setSelectedJurisprudence(j)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-2.5 ${
                        isSelected
                          ? 'bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-500/60 ring-2 ring-emerald-500/30 shadow-xs'
                          : 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300">
                          {j.decisionYear}
                        </span>

                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                            j.court.includes('suprême')
                              ? 'bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-500/30'
                              : j.court.includes('appel')
                              ? 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/30'
                              : 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30'
                          }`}
                        >
                          {j.court.includes('suprême')
                            ? 'Cour suprême'
                            : j.court.includes('appel')
                            ? 'Cour d\'appel'
                            : 'Chambre jeunesse'}
                        </span>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold font-serif text-stone-900 dark:text-stone-100 leading-snug">
                          {j.title}
                        </h4>
                        <div className="mt-1 font-mono text-xs text-emerald-700 dark:text-emerald-400 font-semibold">
                          {j.citation}
                        </div>
                        <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 line-clamp-2">
                          {j.category}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-stone-200/70 dark:border-stone-800/80 flex items-center justify-between text-[11px] text-stone-600 dark:text-stone-400">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          {j.applicableLpjArticles.slice(0, 2).map((art, aIdx) => (
                            <span
                              key={aIdx}
                              className="px-1.5 py-0.2 rounded-md bg-stone-100 dark:bg-stone-800 font-mono text-[10px]"
                            >
                              {art}
                            </span>
                          ))}
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right column: Selected Jurisprudence Dossier Sheet */}
            <div className="lg:col-span-7">
              <div className="sticky top-6 rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 sm:p-7 shadow-sm space-y-5">
                {/* Header */}
                <div className="space-y-2 pb-4 border-b border-stone-200 dark:border-stone-800">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-lg bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 text-xs font-mono font-bold">
                        {selectedJurisprudence.citation}
                      </span>
                      <span className="text-xs font-mono text-stone-500">
                        {selectedJurisprudence.court} • {selectedJurisprudence.decisionYear}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        handleCopy('juris-cit', `${selectedJurisprudence.title} (${selectedJurisprudence.citation})`)
                      }
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 text-xs font-bold text-stone-700 dark:text-stone-200 cursor-pointer"
                    >
                      {copiedId === 'juris-cit' ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span className="text-emerald-600">Citation copiée</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 text-stone-500" />
                          <span>Copier référence</span>
                        </>
                      )}
                    </button>
                  </div>

                  <h3 className="text-xl font-bold font-serif text-stone-900 dark:text-stone-100">
                    {selectedJurisprudence.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <span className="px-2.5 py-1 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-xs font-medium">
                      Thème : {selectedJurisprudence.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-500 text-xs font-mono">
                      Ref SOQUIJ / CanLII : {selectedJurisprudence.soquijOrCanliiRef}
                    </span>
                  </div>
                </div>

                {/* Section 1: Portée légale contre la DPJ */}
                <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/25 border border-emerald-500/30 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900 dark:text-emerald-300 uppercase tracking-wider font-mono">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    <span>Pourquoi cet Arrêt Gagne Contre la DPJ (Portée Juridique)</span>
                  </div>
                  <p className="text-xs text-emerald-950 dark:text-emerald-100 leading-relaxed font-medium">
                    {selectedJurisprudence.legalImpactAgainstDpj}
                  </p>
                </div>

                {/* Section 2: Synthèse des faits */}
                <div className="space-y-1.5">
                  <h5 className="text-xs font-bold text-stone-500 uppercase tracking-wider font-mono flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-blue-500" />
                    <span>Contexte & Jugement Rendu</span>
                  </h5>
                  <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-xs text-stone-800 dark:text-stone-200 leading-relaxed">
                    {selectedJurisprudence.summary}
                  </div>
                </div>

                {/* Section 3: Ratio Decidendi - Citation textuelle du Juge */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h5 className="text-xs font-bold text-stone-500 uppercase tracking-wider font-mono flex items-center gap-1.5">
                      <Gavel className="w-3.5 h-3.5 text-amber-500" />
                      <span>Citation Textuelle du Juge (Ratio Decidendi)</span>
                    </h5>
                    <button
                      type="button"
                      onClick={() =>
                        handleCopy(
                          'judge-quote',
                          `${selectedJurisprudence.title} (${selectedJurisprudence.citation}) :\n${selectedJurisprudence.keyJudgeQuote}`
                        )
                      }
                      className="text-[11px] font-bold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <Copy className="w-3 h-3" />
                      <span>Copier citation</span>
                    </button>
                  </div>
                  <div className="p-4 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-500/30 text-xs text-stone-900 dark:text-stone-100 leading-relaxed italic border-l-4 border-amber-500">
                    {selectedJurisprudence.keyJudgeQuote}
                  </div>
                </div>

                {/* Section 4: Comment plaider cet arrêt en salle d'audience */}
                <div className="space-y-1.5">
                  <h5 className="text-xs font-bold text-stone-500 uppercase tracking-wider font-mono flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-purple-500" />
                    <span>Comment Plaider cet Arrêt Devant le Juge (Tactique)</span>
                  </h5>
                  <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                    {selectedJurisprudence.howToPlead}
                  </div>
                </div>

                {/* Section 5: Extrait de plaidoirie prêt à copier */}
                <div className="space-y-2 pt-2 border-t border-stone-200 dark:border-stone-800">
                  <div className="flex items-center justify-between">
                    <h5 className="text-xs font-bold text-stone-700 dark:text-stone-300 flex items-center gap-1.5">
                      <FileCheck2 className="w-4 h-4 text-emerald-500" />
                      <span>Extrait de Conclusions à Copier dans vos Actes de Procédure</span>
                    </h5>

                    <button
                      type="button"
                      onClick={() =>
                        handleCopy(selectedJurisprudence.id, selectedJurisprudence.pleadingExtract)
                      }
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 text-xs font-bold transition-colors cursor-pointer"
                    >
                      {copiedId === selectedJurisprudence.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                          <span className="text-emerald-600 dark:text-emerald-400">Copié !</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-stone-500" />
                          <span>Copier l'extrait</span>
                        </>
                      )}
                    </button>
                  </div>

                  <pre className="p-4 rounded-2xl bg-stone-900 text-stone-100 text-[11px] font-mono whitespace-pre-wrap leading-relaxed border border-stone-800 max-h-40 overflow-y-auto">
                    {selectedJurisprudence.pleadingExtract}
                  </pre>
                </div>

                {/* Section 6: Articles LPJ & Charte */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-xs font-bold text-stone-600 dark:text-stone-400 mr-1">
                      Articles :
                    </span>
                    {selectedJurisprudence.applicableLpjArticles.map((art, aIdx) => (
                      <span
                        key={aIdx}
                        className="px-2 py-0.5 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-xs font-mono font-semibold"
                      >
                        {art}
                      </span>
                    ))}
                    {selectedJurisprudence.applicableCharteArticles.map((ch, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/40 text-blue-800 dark:text-blue-300 text-xs font-mono"
                      >
                        {ch}
                      </span>
                    ))}
                  </div>

                  {/* Bouton vers dossier d'enquête lié */}
                  {selectedJurisprudence.linkedParentDossierIds.length > 0 && (
                    <button
                      type="button"
                      onClick={() =>
                        onOpenInvestigationReport(selectedJurisprudence.linkedParentDossierIds[0])
                      }
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 text-xs font-bold text-stone-800 dark:text-stone-200 transition-colors cursor-pointer"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-stone-500" />
                      <span>Ouvrir le dossier d'enquête associé</span>
                    </button>
                  )}
                </div>

                {/* Quick Consultation Button */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-stone-200 dark:border-stone-800">
                  <div className="text-[11px] text-stone-500 dark:text-stone-400">
                    Cour : {selectedJurisprudence.court} • Arrêt de principe SOQUIJ
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      onAskAiQuestion(
                        `Comment utiliser concrètement la jurisprudence "${selectedJurisprudence.title}" (${selectedJurisprudence.citation}) dans mon dossier DPJ face à un juge de la Chambre de la jeunesse ?`
                      )
                    }
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900 hover:bg-emerald-100 text-xs font-bold transition-colors cursor-pointer"
                  >
                    <Bot className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>Demander à l'IA la stratégie pour cet arrêt</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
