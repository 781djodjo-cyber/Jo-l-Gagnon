import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  HeartHandshake,
  ShieldAlert,
  AlertTriangle,
  Scale,
  Clock,
  Users,
  ArrowRight,
  CheckCircle2,
  XCircle,
  AlertCircle,
  FileText,
  ChevronRight,
  Filter,
  Search,
  Copy,
  Check,
  ExternalLink,
  PhoneCall,
  Building2,
  BookOpen,
  Layers,
  Flame,
  FileCheck,
  Bot,
  UserCheck,
  Info,
  Database,
  HeartCrack,
  Tv,
  Compass
} from 'lucide-react';
import { ViewTab } from '../types';
import { SuperbaseLesionsView } from './SuperbaseLesionsView';
import { DpjDeceasedChildrenGraph } from './DpjDeceasedChildrenGraph';
import { DpjFuguesGraph } from './DpjFuguesGraph';
import { DpjMediaArchiveSuperbaseView } from './DpjMediaArchiveSuperbaseView';
import { DpjCaseFileAuditTool } from './DpjCaseFileAuditTool';
import { safeCopyToClipboard } from '../utils/clipboard';

interface DpjBigCarryViewProps {
  onNavigateToTab: (tab: ViewTab) => void;
  onSelectDossier: (dossierId: string) => void;
  onOpenChatWithQuery: (query: string) => void;
  initialSubTab?: string;
}

type SubTab = 'pipeline' | 'graph_deces' | 'graph_fugues' | 'superbase_lesions' | 'archives_reportages' | 'outil_defense_dossier' | 'commission_laurent' | 'imputabilite' | 'calculateur_droits' | 'lanceur_alerte';

interface PipelineStep {
  id: string;
  stepNumber: number;
  title: string;
  subtitle: string;
  legalDelay: string;
  actualReality: string;
  failureMechanism: string;
  impactChild: string;
  legalArticleLPJ: string;
  officialSource: string;
  status: 'critical' | 'severe' | 'moderate';
}

const PIPELINE_STEPS: PipelineStep[] = [
  {
    id: 'step-1-reception',
    stepNumber: 1,
    title: 'Réception & Tri du Signalement',
    subtitle: 'Ligne d\'urgence 24/7 et central téléphonique',
    legalDelay: 'Traitement immédiat (dans les heures suivant l\'appel selon la gravité)',
    actualReality: 'Standards saturés, appels manqués, temps d\'attente de plus de 45 minutes pour signaler un enfant en détresse, personnel débordé contraint à un tri express.',
    failureMechanism: 'Goulot technique et manque d\'opérateurs qualifiés; des signalements d\'écoles ou d\'hôpitaux finissent sur boîte vocale.',
    impactChild: 'Enfant maintenu dans une situation de violence physique, d\'abus ou de négligence grave sans première vérification.',
    legalArticleLPJ: 'Art. 38, 39 LPJ (Obligation de signaler et de consigner sans délai)',
    officialSource: 'Rapport d\'enquête du Protecteur du citoyen (2023-2024)',
    status: 'critical'
  },
  {
    id: 'step-2-retenue',
    stepNumber: 2,
    title: 'Décision de Rétention du Dossier',
    subtitle: 'Analyse d\'admissibilité par un intervenant habilité',
    legalDelay: 'Décision sous 24 à 48 heures maximum',
    actualReality: '« Rétention administrative » prolongée : des signalements jugés urgents restent en suspens pendant des jours voire des semaines faute d\'évaluateur disponible.',
    failureMechanism: 'Directive informelle de durcissement des seuils d\'acceptation dans certains CISSS pour freiner l\'engorgement des listes.',
    impactChild: 'Dossiers fermés prématurément avec la mention « non retenu » alors que la sécurité du mineur est objectivement compromise.',
    legalArticleLPJ: 'Art. 46, 47 LPJ (Obligation de motiver et d\'évaluer la sécurité ou le développement)',
    officialSource: 'Commission spéciale sur les droits des enfants (Commission Laurent - Rapport 2021)',
    status: 'critical'
  },
  {
    id: 'step-3-evaluation',
    stepNumber: 3,
    title: 'Évaluation & Enquête Sociale sur le Terrain',
    subtitle: 'Rencontre avec l\'enfant, parents, milieu scolaire et soignants',
    legalDelay: 'Enquête menée dans les 14 jours (priorité 1) ou 30 jours (priorité 2)',
    actualReality: 'Listes d\'attente de 3 à 9 mois avant la première rencontre sur le terrain. Plus de 3 800 enfants québécois sont en attente d\'attribution d\'un travailleur social.',
    failureMechanism: 'Pénurie dramatique d\'effectifs, démissions massives de travailleuses sociales épuisées par des ratios de 30 dossiers au lieu de 15.',
    impactChild: 'Traumatismes qui s\'enracinent, décrochage scolaire, détérioration irréversible du climat familial.',
    legalArticleLPJ: 'Art. 53 LPJ (Examen diligent des faits et évaluation des compétences parentales)',
    officialSource: 'Rapport annuel de la Direction nationale de la protection de la jeunesse',
    status: 'critical'
  },
  {
    id: 'step-4-orientation',
    stepNumber: 4,
    title: 'Orientation & Mesures de Protection',
    subtitle: 'Maintien dans le milieu ou placement substitut',
    legalDelay: 'Mise en œuvre du plan d\'intervention sous 30 jours après évaluation',
    actualReality: 'Pénurie criante de familles d\'accueil et de places en centres de réadaptation (foyers de groupe). Enfants logés dans des chambres de motel avec agents de sécurité.',
    failureMechanism: 'Fermeture de lits en foyer de groupe, sous-financement des familles d\'accueil, désengagement des services psychosociaux de première ligne (CLSC).',
    impactChild: 'Ruptures répétées de milieu de vie, séparation déchirante de fratries, hébergement inadapté.',
    legalArticleLPJ: 'Art. 54, 57.1 LPJ (Plan de transition et stabilité du milieu de vie)',
    officialSource: 'Enquêtes journalistiques vérifiées & Rapports du Protecteur du citoyen',
    status: 'severe'
  },
  {
    id: 'step-5-tribunal',
    stepNumber: 5,
    title: 'Judiciarisation & Tribunal de la Jeunesse',
    subtitle: 'Ordonnances de garde, tutelle et droits d\'accès',
    legalDelay: 'Audiences d\'urgence sous 48h; audiences au fond sous délais prescrits',
    actualReality: 'Engorgement des tribunaux, retards dans la remise des rapports de la DPJ aux juges, ajournements répétés qui plongent les enfants dans l\'incertitude juridique.',
    failureMechanism: 'Rapports d\'évaluation incomplets ou déposés en retard en raison de la surcharge des équipes de contentieux de la DPJ.',
    impactChild: 'Enfants laissés dans un vide juridique pendant des mois, sans savoir où ils grandiront.',
    legalArticleLPJ: 'Art. 74 et suivants LPJ (Procédure devant la Chambre de la jeunesse)',
    officialSource: 'Chambre de la jeunesse de la Cour du Québec',
    status: 'severe'
  },
  {
    id: 'step-6-majorite',
    stepNumber: 6,
    title: 'Sortie de la DPJ à 18 Ans (« Faim de Suivi »)',
    subtitle: 'Transition vers l\'âge adulte et autonomie',
    legalDelay: 'Plan d\'accompagnement post-majorité garanti jusqu\'à 21 ou 25 ans',
    actualReality: 'Coupure brutale des services le jour du 18e anniversaire. Près d\'un jeune de la DPJ sur deux se retrouve en situation d\'itinérance, de précarité ou sans diplôme.',
    failureMechanism: 'Financement discontinu du programme Qualification des jeunes (PQJ), bureaucratie cloisonnée entre jeunesse et services adultes.',
    impactChild: 'Surreprésentation des anciens jeunes pris en charge par la DPJ dans l\'itinérance urbaine au Québec.',
    legalArticleLPJ: 'Recommandation 44 Commission Laurent (Accompagnement continu jusqu\'à 25 ans)',
    officialSource: 'Étude EDJeP (Étude sur le devenir des jeunes placés au Québec)',
    status: 'moderate'
  }
];

interface LaurentRec {
  number: number;
  title: string;
  category: string;
  status: 'bloque' | 'partiel' | 'en_vigueur' | 'dilue';
  description: string;
  officialObstacle: string;
  impactScore: 'Critique' | 'Majeur' | 'Élevé';
}

const LAURENT_RECOMMENDATIONS: LaurentRec[] = [
  {
    number: 1,
    title: 'Création du Commissaire au bien-être et aux droits des enfants',
    category: 'Gouvernance & Indépendance',
    status: 'dilue',
    description: 'Instaurer un organisme indépendant relevant directement de l\'Assemblée nationale (et non du ministère de la Santé) pour défendre les enfants du Québec.',
    officialObstacle: 'Le gouvernement a longtemps retardé le projet de loi, puis a logé le poste sous une structure avec des pouvoirs d\'ordonnance atténués plutôt qu\'un protecteur plénier.',
    impactScore: 'Critique'
  },
  {
    number: 12,
    title: 'Rehaussement et pérennisation du financement communautaire',
    category: 'Prévention & Familles',
    status: 'partiel',
    description: 'Financer à la mission les organismes communautaires Famille (OCF) et maisons de jeunes pour intervenir bien avant que la DPJ ne soit requise.',
    officialObstacle: 'Augmentations ponctuelles à la pièce, insuffisantes face à l\'inflation et à la précarité des intervenants communautaires.',
    impactScore: 'Majeur'
  },
  {
    number: 25,
    title: 'Plafond obligatoire du ratio dossiers / travailleur social (15 à 18 max)',
    category: 'Conditions de Travail & Rétention',
    status: 'bloque',
    description: 'Imposer un ratio maximal de 15 à 18 dossiers actifs par intervenant de première ligne pour garantir la qualité de l\'évaluation et la sécurité des enfants.',
    officialObstacle: 'Recommandation ignorée dans les faits : des intervenants continuent d\'avoir 30 à 38 dossiers actifs, provoquant départs en burn-out et démissions en bloc.',
    impactScore: 'Critique'
  },
  {
    number: 44,
    title: 'Garantie d\'hébergement et de soutien financier jusqu\'à 25 ans',
    category: 'Post-Majorité & Avenir',
    status: 'partiel',
    description: 'Mettre fin au « mur des 18 ans » en garantissant un toit, une bourse d\'études ou un salaire décent aux jeunes quittant les centres de jeunesse.',
    officialObstacle: 'Programmes pilotes régionaux partiels, non uniformisés à l\'échelle du territoire québécois.',
    impactScore: 'Majeur'
  },
  {
    number: 78,
    title: 'Refonte de la gouvernance et démantèlement de l\'omerta des CISSS/CIUSSS',
    category: 'Transparence & Gestion',
    status: 'bloque',
    description: 'Mettre fin au contrôle bureaucratique des PDG d\'hôpitaux sur la protection de la jeunesse, redonner une pleine autorité clinique aux directeurs régionaux de la DPJ.',
    officialObstacle: 'La réforme créant Santé Québec maintient une hyper-centralisation administrative qui noie encore davantage les réalités de terrain de la protection de l\'enfance.',
    impactScore: 'Critique'
  },
  {
    number: 102,
    title: 'Valorisation salariale et statut professionnel distinct des intervenants LPJ',
    category: 'Attraction & Rétention',
    status: 'partiel',
    description: 'Primes substantielles de risque et de complexité pour attirer et retenir les intervenants sociaux en protection de la jeunesse face au secteur privé.',
    officialObstacle: 'Négociations syndicales houleuses, primes jugées insuffisantes pour stopper l\'hémorragie d\'employés qualifiés vers le réseau scolaire ou privé.',
    impactScore: 'Critique'
  },
  {
    number: 121,
    title: 'Accès ultra-rapide aux soins pédopsychiatriques pour les enfants placés',
    category: 'Santé Mentale & Soins',
    status: 'bloque',
    description: 'Couloir prioritaire obligatoire en santé mentale jeunesse pour tout enfant ayant subi un traumatisme ou placé par la DPJ.',
    officialObstacle: 'Délais de plus d\'un an en pédopsychiatrie publique; enfants en crise placés sous contention chimique sans thérapie adaptée.',
    impactScore: 'Critique'
  }
];

interface ImputabiliteLeader {
  name: string;
  title: string;
  roleDescription: string;
  keyResponsibilities: string[];
  publicCommitments: string;
  contradictionsAndFailures: string;
  urgencyLevel: 'Critique' | 'Sous Pression' | 'Vigie Indépendante';
}

const IMPUTABILITE_LEADERS: ImputabiliteLeader[] = [
  {
    name: 'Lionel Carmant',
    title: 'Ministre responsable des Services sociaux',
    roleDescription: 'Titulaire politique de la protection de la jeunesse depuis 2018. Responsable en chef de l\'application des 138 recommandations de la Commission Laurent et de l\'éradication des listes d\'attente.',
    keyResponsibilities: [
      'Allocation des budgets de la DPJ et des services sociaux',
      'Mise en place de la Loi 15 modifiant la Loi sur la protection de la jeunesse',
      'Rendition de comptes devant l\'Assemblée nationale sur les enfants en attente'
    ],
    publicCommitments: 'Avait promis à plusieurs reprises d\'éliminer les listes d\'attente de signalements et de transformer en profondeur la culture de la DPJ.',
    contradictionsAndFailures: 'En 2024-2025, les listes d\'attente restent records (+3 800 enfants). Des tuteurs et intervenants dénoncent un pilotage déconnecté et des statistiques enjolivées.',
    urgencyLevel: 'Critique'
  },
  {
    name: 'Directeur National de la Protection de la Jeunesse (DNPJ)',
    title: 'Direction clinique et opérationnelle nationale',
    roleDescription: 'Coordonne l\'application uniforme de la LPJ sur l\'ensemble des 16 directions régionales de la DPJ au Québec.',
    keyResponsibilities: [
      'Standardisation des critères de retenue des signalements',
      'Enquêtes administratives lors de décès ou de tragédies d\'enfants sous ordonnance',
      'Inspection clinique des pratiques dans les CISSS et CIUSSS'
    ],
    publicCommitments: 'Assurer une égalité de traitement pour tous les enfants québécois peu importe leur région.',
    contradictionsAndFailures: 'Disparités régionales béantes : un enfant à Montréal ou à Laval n\'a pas le même délai de prise en charge qu\'au Saguenay ou en Mauricie.',
    urgencyLevel: 'Sous Pression'
  },
  {
    name: 'Présidents-Directeurs Généraux (PDG) des CISSS & CIUSSS',
    title: 'Gouvernance régionale de la santé et des services sociaux',
    roleDescription: 'Dirigeants exécutifs contrôlant les budgets locaux et la gestion des ressources humaines de la DPJ dans chaque région administrative.',
    keyResponsibilities: [
      'Respect des ratios d\'effectifs et embauche de travailleurs sociaux',
      'Fourniture de locaux sécuritaires et conformes pour les enfants hébergés',
      'Traitement diligent des plaintes du commissaire local'
    ],
    publicCommitments: 'Optimiser la gestion et éliminer la paperasse administrative.',
    contradictionsAndFailures: 'Affaires récurrentes de gestion opaque : chambres de motel payées à fort prix avec agents privés de sécurité, climat de travail toxique, musellement des lanceurs d\'alerte.',
    urgencyLevel: 'Critique'
  },
  {
    name: 'Marc-André Dowd',
    title: 'Protecteur du citoyen du Québec',
    roleDescription: 'Ombudsman indépendant nommé par l\'Assemblée nationale pour veiller au respect des droits des usagers et à la protection des lanceurs d\'alerte (Loi D-11.1).',
    keyResponsibilities: [
      'Enquêtes indépendantes sur les manquements graves de la DPJ',
      'Réception des divulgations protégées d\'actes répréhensibles',
      'Dépôt de rapports cinglants dénonçant les violations de la LPJ'
    ],
    publicCommitments: 'Défendre sans concession les enfants les plus vulnérables du Québec contre la négligence étatique.',
    contradictionsAndFailures: 'Ses recommandations répétées tardent souvent à être appliquées par le ministère de la Santé et des Services sociaux.',
    urgencyLevel: 'Vigie Indépendante'
  }
];

interface LpjInfractionTest {
  id: string;
  scenarioTitle: string;
  situationDescription: string;
  violatedArticles: string[];
  severity: 'Infraction Grave' | 'Non-Conformité Critique' | 'Violation Procédurale';
  immediateCitizenRecourse: string;
  complaintTemplate: string;
}

const LPJ_INFRACTIONS: LpjInfractionTest[] = [
  {
    id: 'infr-1',
    scenarioTitle: 'Enfant retenu mais en attente depuis plus de 30 jours sans intervenant assigné',
    situationDescription: 'Le signalement d\'un enfant a été jugé fondé et retenu par la DPJ, mais le dossier stagne dans une file d\'attente (« banque de signalements non assignés ») depuis des semaines ou des mois sans visite à domicile.',
    violatedArticles: ['Art. 46 LPJ (Délai d\'évaluation)', 'Art. 53 LPJ (Prise en charge diligente)', 'Charte des droits et libertés (Droit à la sûreté et à l\'intégrité de l\'enfant)'],
    severity: 'Infraction Grave',
    immediateCitizenRecourse: 'Dépôt immédiat d\'une plainte urgente auprès du Commissaire local aux plaintes et à la qualité des services du CIUSSS et saisine directe du Protecteur du citoyen.',
    complaintTemplate: `Objet : PLAINTE D'URGENCE - Violation de l'article 53 de la LPJ - Enfant en attente d'attribution
À l'attention du Commissaire local aux plaintes et à la qualité des services,
Par la présente, je dénonce officiellement le manquement grave dans le dossier de l'enfant [Nom de l'enfant], dont le signalement a été retenu le [Date de retenue], mais pour lequel aucun intervenant n'a été assigné depuis plus de [Nombre de jours] jours.
Cette carence place l'enfant dans un risque documenté de compromission continue de sa sécurité et contrevient aux principes directeurs de la Loi sur la protection de la jeunesse.
Je demande l'intervention immédiate d'un évaluateur et la transmission sans délai du statut d'enquête.`
  },
  {
    id: 'infr-2',
    scenarioTitle: 'Hébergement d\'urgence en chambre d\'hôtel sans milieu familial ni encadrement éducatif',
    situationDescription: 'L\'enfant retiré de son milieu a été placé dans un motel commercial avec des gardiens de sécurité privés, sans accès à son école ni à un intervenant clinique permanent.',
    violatedArticles: ['Art. 54 LPJ (Milieu de vie stable et adapté)', 'Art. 4 LPJ (Intérêt supérieur de l\'enfant)', 'Recommandations formelles du Protecteur du citoyen'],
    severity: 'Infraction Grave',
    immediateCitizenRecourse: 'Recours d\'urgence devant la Chambre de la jeunesse pour révision de l\'ordonnance de placement et signalement pour acte répréhensible sous la Loi D-11.1.',
    complaintTemplate: `Objet : DÉNONCIATION D'URGENCE - Placement indigne en établissement hôtelier
Monsieur le Commissaire,
L'enfant [Nom de l'enfant] fait actuellement l'objet d'un placement dans une chambre d'hôtel avec personnel de gardiennage privé sans encadrement clinique régulier.
Cette pratique bafoue le droit de l'enfant à un milieu de vie bienveillant et stable (art. 4 et 54 LPJ).
Je sollicite une réévaluation d'urgence de ce placement par le tribunal et l'octroi d'une ressource de type familial ou institutionnel accréditée.`
  },
  {
    id: 'infr-3',
    scenarioTitle: 'Refus de transmettre le plan d\'intervention ou d\'entendre le point de vue de l\'enfant',
    situationDescription: 'La DPJ prend des décisions majeures sur la vie d\'un adolescent sans lui permettre d\'être entendu et refuse de communiquer le plan d\'intervention écrit aux parents ou tuteurs.',
    violatedArticles: ['Art. 8 LPJ (Droit d\'être entendu)', 'Art. 72.5 LPJ (Accès au dossier et au plan d\'intervention)'],
    severity: 'Violation Procédurale',
    immediateCitizenRecourse: 'Demande d\'avocat d\'office pour l\'enfant (financé par l\'aide juridique) et requête en révision d\'ordonnance devant le juge de la Chambre de la jeunesse.',
    complaintTemplate: `Objet : DEMANDE FORMELLE D'ACCÈS AU PLAN D'INTERVENTION ET RESPECT DU DROIT DE PAROLE
Madame, Monsieur le Directeur de la protection de la jeunesse,
En vertu des articles 8 et 72.5 de la Loi sur la protection de la jeunesse, je réclame la transmission intégrale du plan d'intervention concernant l'enfant [Nom de l'enfant] ainsi que la désignation d'un avocat indépendant pour assurer la représentation de ses volontés devant le tribunal.`
  }
];

export const DpjBigCarryView: React.FC<DpjBigCarryViewProps> = ({
  onNavigateToTab,
  onSelectDossier,
  onOpenChatWithQuery,
  initialSubTab,
}) => {
  const getInitialSubTab = (): SubTab => {
    if (!initialSubTab) return 'pipeline';
    const s = initialSubTab.toLowerCase();
    if (s.includes('deces') || s.includes('deceased') || s.includes('coroner')) return 'graph_deces';
    if (s.includes('fugue')) return 'graph_fugues';
    if (s.includes('superbase') || s.includes('lesion')) return 'superbase_lesions';
    if (s.includes('archive') || s.includes('reportage') || s.includes('media')) return 'archives_reportages';
    if (s.includes('defense') || s.includes('audit') || s.includes('loi') || s.includes('jurisprudence')) return 'outil_defense_dossier';
    if (s.includes('laurent') || s.includes('commission')) return 'commission_laurent';
    if (s.includes('imputabilite') || s.includes('ministre')) return 'imputabilite';
    if (s.includes('calculat')) return 'calculateur_droits';
    if (s.includes('alerte') || s.includes('whistleblower')) return 'lanceur_alerte';
    return 'pipeline';
  };

  const [activeSubTab, setActiveSubTab] = useState<SubTab>(getInitialSubTab);
  const [selectedPipelineStep, setSelectedPipelineStep] = useState<PipelineStep>(PIPELINE_STEPS[0]);
  const [selectedInfraction, setSelectedInfraction] = useState<LpjInfractionTest>(LPJ_INFRACTIONS[0]);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [copiedTemplateId, setCopiedTemplateId] = useState<string | null>(null);

  const handleCopy = async (id: string, text: string) => {
    const success = await safeCopyToClipboard(text);
    if (success) {
      setCopiedTemplateId(id);
      setTimeout(() => setCopiedTemplateId(null), 2500);
    }
  };

  const filteredLaurentRecs = filterCategory === 'all'
    ? LAURENT_RECOMMENDATIONS
    : LAURENT_RECOMMENDATIONS.filter(r => r.category === filterCategory);

  return (
    <div className="space-y-8">
      {/* Hero Banner: Grand Dossier Imputabilité DPJ */}
      <div 
        id="dpj-grand-dossier-hero"
        className="rounded-3xl border-2 border-amber-500/40 bg-linear-to-br from-amber-950/20 via-stone-900 to-blue-950/30 dark:from-amber-950/30 dark:via-stone-950 dark:to-blue-950/40 p-6 sm:p-9 shadow-md relative overflow-hidden text-stone-100"
      >
        {/* Background Accent Marks */}
        <div className="absolute -right-12 -top-12 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -left-12 -bottom-12 w-64 h-64 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold font-mono tracking-wider uppercase">
              <Flame className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>Dossier Prioritaire d'Urgence Nationale</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveSubTab('outil_defense_dossier')}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-emerald-500/70 bg-emerald-950/70 hover:bg-emerald-900/80 text-xs font-bold text-emerald-200 transition-colors cursor-pointer shadow-xs ring-1 ring-emerald-500/50"
              >
                <Scale className="w-3.5 h-3.5 text-emerald-400" />
                <span>Outil Étude Dossier & Codex LPJ</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveSubTab('graph_deces')}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-rose-600/70 bg-rose-950/70 hover:bg-rose-900/80 text-xs font-bold text-rose-200 transition-colors cursor-pointer shadow-xs"
              >
                <HeartCrack className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
                <span>Graphique Décès DPJ (375+ Enfants)</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveSubTab('graph_fugues')}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-amber-600/70 bg-amber-950/70 hover:bg-amber-900/80 text-xs font-bold text-amber-200 transition-colors cursor-pointer shadow-xs"
              >
                <Compass className="w-3.5 h-3.5 text-amber-400" />
                <span>Graphique Fugues DPJ (10 000+ Cas)</span>
              </button>

              <button
                type="button"
                onClick={() => onNavigateToTab('evidence_bot')}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-cyan-500/60 bg-cyan-950/60 hover:bg-cyan-900/70 text-xs font-bold text-cyan-200 transition-colors cursor-pointer shadow-xs"
              >
                <Bot className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span>Bot Preuves & Médias</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveSubTab('archives_reportages')}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-amber-500/60 bg-amber-950/50 hover:bg-amber-900/60 text-xs font-bold text-amber-200 transition-colors cursor-pointer shadow-xs"
              >
                <Tv className="w-3.5 h-3.5 text-amber-400" />
                <span>Superbase Enquêtes (1995-2026)</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveSubTab('superbase_lesions')}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-rose-500/60 bg-rose-950/50 hover:bg-rose-900/60 text-xs font-bold text-rose-200 transition-colors cursor-pointer shadow-xs"
              >
                <Database className="w-3.5 h-3.5 text-rose-400" />
                <span>Superbase Lésions (140 Enfants)</span>
              </button>

              <button
                type="button"
                onClick={() => onSelectDossier('dpj-commission-laurent-crise')}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-stone-700 bg-stone-800/90 hover:bg-stone-700 text-xs font-bold text-stone-200 transition-colors cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                <span>Dossier Laurent</span>
              </button>

              <button
                type="button"
                onClick={() => onOpenChatWithQuery("Fais-moi un rapport sans complaisance sur la crise du pipeline des signalements à la DPJ, les retards de la Commission Laurent et la responsabilité du ministre Lionel Carmant.")}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-blue-700 hover:bg-blue-600 text-white text-xs font-bold transition-colors cursor-pointer shadow-xs"
              >
                <Bot className="w-3.5 h-3.5 text-amber-300" />
                <span>Interroger l'Oracle AI</span>
              </button>
            </div>
          </div>

          <div className="space-y-3 max-w-3xl">
            <h1 className="text-2xl sm:text-4xl font-black font-serif tracking-tight text-white leading-tight">
              Observatoire d'Urgence & Imputabilité : <span className="text-amber-400 underline decoration-amber-500/50 underline-offset-4">La Protection de la Jeunesse</span>
            </h1>
            <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-sans">
              L'avenir et la sécurité des enfants du Québec ne tolèrent aucun compromis bureaucratique. Cet observatoire citoyen indépendant dissèque en temps réel le pipeline de traitement des signalements, traque l'application des 138 recommandations de la Commission Laurent, et identifie les infractions à la Loi sur la protection de la jeunesse (LPJ).
            </p>
          </div>

          {/* Key Crisis Metrics Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
            <div className="p-4 rounded-2xl bg-stone-900/80 border border-stone-800/80 shadow-xs space-y-1">
              <div className="flex items-center justify-between text-xs text-stone-400">
                <span>Signalements reçus/an</span>
                <PhoneCall className="w-4 h-4 text-amber-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white font-mono">
                135 839+
              </div>
              <div className="text-[11px] text-amber-300/80 font-medium">
                Hausse constante • +1 appel aux 4 min
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-stone-900/80 border border-rose-900/40 shadow-xs space-y-1">
              <div className="flex items-center justify-between text-xs text-rose-300">
                <span>Enfants en attente</span>
                <AlertTriangle className="w-4 h-4 text-rose-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-rose-400 font-mono">
                3 800+
              </div>
              <div className="text-[11px] text-rose-300/80 font-medium">
                Attente moyenne : 3 à 9 mois
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-stone-900/80 border border-stone-800/80 shadow-xs space-y-1">
              <div className="flex items-center justify-between text-xs text-stone-400">
                <span>Commission Laurent</span>
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white font-mono">
                138 recs
              </div>
              <div className="text-[11px] text-stone-300/80 font-medium">
                Seules ~35% mises en œuvre réelle
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-stone-900/80 border border-stone-800/80 shadow-xs space-y-1">
              <div className="flex items-center justify-between text-xs text-stone-400">
                <span>Ratio dossiers / TS</span>
                <Users className="w-4 h-4 text-amber-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-amber-400 font-mono">
                30 à 35
              </div>
              <div className="text-[11px] text-amber-300/80 font-medium">
                Norme recommandée max : 15 à 18
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Internal Navigation Subtabs */}
      <div className="flex items-center gap-1.5 p-1.5 rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-900/70 overflow-x-auto">
        <button
          type="button"
          onClick={() => setActiveSubTab('pipeline')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
            activeSubTab === 'pipeline'
              ? 'bg-white dark:bg-stone-800 text-blue-900 dark:text-blue-300 shadow-xs'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
          }`}
        >
          <Layers className="w-4 h-4 text-amber-500" />
          <span>Pipeline des Signalements (6 Étapes)</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveSubTab('graph_deces')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
            activeSubTab === 'graph_deces'
              ? 'bg-white dark:bg-stone-800 text-rose-700 dark:text-rose-400 shadow-xs ring-2 ring-rose-500/40'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
          }`}
        >
          <HeartCrack className="w-4 h-4 text-rose-500" />
          <span>Graphique Décès DPJ (Coroner)</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveSubTab('graph_fugues')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
            activeSubTab === 'graph_fugues'
              ? 'bg-white dark:bg-stone-800 text-amber-600 dark:text-amber-400 shadow-xs ring-2 ring-amber-500/50'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
          }`}
        >
          <Compass className="w-4 h-4 text-amber-500" />
          <span>Graphique Fugues & Exploitation DPJ</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveSubTab('superbase_lesions')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
            activeSubTab === 'superbase_lesions'
              ? 'bg-white dark:bg-stone-800 text-rose-700 dark:text-rose-400 shadow-xs ring-2 ring-rose-500/30'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
          }`}
        >
          <Database className="w-4 h-4 text-rose-500" />
          <span>Superbase Lésions de Droits (140 Enfants - CDPDJ)</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveSubTab('archives_reportages')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
            activeSubTab === 'archives_reportages'
              ? 'bg-white dark:bg-stone-800 text-amber-600 dark:text-amber-400 shadow-xs ring-2 ring-amber-500/40'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
          }`}
        >
          <Tv className="w-4 h-4 text-amber-500" />
          <span>Superbase Enquêtes & Dérives (1995–2026)</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveSubTab('outil_defense_dossier')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
            activeSubTab === 'outil_defense_dossier'
              ? 'bg-white dark:bg-stone-800 text-emerald-700 dark:text-emerald-400 shadow-xs ring-2 ring-emerald-500/50 font-black'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
          }`}
        >
          <Scale className="w-4 h-4 text-emerald-500" />
          <span>Outil Étude Dossier & Codex LPJ (Parents)</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveSubTab('commission_laurent')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
            activeSubTab === 'commission_laurent'
              ? 'bg-white dark:bg-stone-800 text-blue-900 dark:text-blue-300 shadow-xs'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
          }`}
        >
          <BookOpen className="w-4 h-4 text-blue-500" />
          <span>Suivi Recommandations Laurent</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveSubTab('imputabilite')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
            activeSubTab === 'imputabilite'
              ? 'bg-white dark:bg-stone-800 text-blue-900 dark:text-blue-300 shadow-xs'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
          }`}
        >
          <UserCheck className="w-4 h-4 text-purple-500" />
          <span>Chaîne d'Imputabilité & Dirigeants</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveSubTab('calculateur_droits')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
            activeSubTab === 'calculateur_droits'
              ? 'bg-white dark:bg-stone-800 text-blue-900 dark:text-blue-300 shadow-xs'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
          }`}
        >
          <Scale className="w-4 h-4 text-emerald-500" />
          <span>Vérificateur d'Infractions LPJ & Recours</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveSubTab('lanceur_alerte')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
            activeSubTab === 'lanceur_alerte'
              ? 'bg-white dark:bg-stone-800 text-blue-900 dark:text-blue-300 shadow-xs'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
          }`}
        >
          <ShieldAlert className="w-4 h-4 text-rose-500" />
          <span>Cellule Dénonciation Protégée (D-11.1)</span>
        </button>
      </div>

      {/* SUBTAB 1: PIPELINE INTERACTIF DES SIGNALEMENTS */}
      {activeSubTab === 'pipeline' && (
        <div className="space-y-6">
          <div className="rounded-2xl bg-amber-500/10 border border-amber-500/30 p-4 sm:p-5 flex items-start gap-3">
            <Info className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-stone-800 dark:text-stone-200 leading-relaxed">
              <strong>Le Circuit Critique de la DPJ :</strong> Cliquez sur une des étapes ci-dessous pour examiner où le pipeline se bloque, quels délais légaux sont bafoués et quelles sont les conséquences réelles pour les enfants en danger au Québec.
            </div>
          </div>

          {/* Stepper Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {PIPELINE_STEPS.map((step) => {
              const isSelected = selectedPipelineStep.id === step.id;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setSelectedPipelineStep(step)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                    isSelected
                      ? 'border-blue-600 bg-white dark:bg-stone-900 ring-2 ring-blue-500/30 shadow-md'
                      : 'border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/60 hover:bg-white dark:hover:bg-stone-900'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="w-7 h-7 rounded-lg bg-blue-900 text-white dark:bg-blue-800 flex items-center justify-center text-xs font-bold font-mono">
                      0{step.stepNumber}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                      step.status === 'critical'
                        ? 'bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-500/30'
                        : 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/30'
                    }`}>
                      {step.status === 'critical' ? 'Goulot Critique' : 'Tension Sévère'}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold font-serif text-stone-900 dark:text-stone-100">
                      {step.title}
                    </h4>
                    <p className="text-xs text-stone-500 dark:text-stone-400 line-clamp-1 mt-0.5">
                      {step.subtitle}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-stone-200/70 dark:border-stone-800 flex items-center justify-between text-[11px] text-stone-600 dark:text-stone-400">
                    <span className="font-mono text-blue-600 dark:text-blue-400 font-semibold">Détails cliniques</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Step Detailed Diagnostic Card */}
          <motion.div
            key={selectedPipelineStep.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 sm:p-8 shadow-sm space-y-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-200 dark:border-stone-800">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-blue-900 text-white text-xs font-bold font-mono">
                    Étape {selectedPipelineStep.stepNumber} sur 6
                  </span>
                  <span className="text-xs font-mono text-stone-500 dark:text-stone-400">
                    {selectedPipelineStep.legalArticleLPJ}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 dark:text-stone-100">
                  {selectedPipelineStep.title}
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400">
                  Source officielle : {selectedPipelineStep.officialSource}
                </p>
              </div>

              <button
                type="button"
                onClick={() => onOpenChatWithQuery(`Analyse le goulot d'étranglement de l'étape "${selectedPipelineStep.title}" de la DPJ : ${selectedPipelineStep.failureMechanism}. Quels sont les recours légaux immédiats ?`)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold transition-colors cursor-pointer self-start sm:self-center"
              >
                <Bot className="w-4 h-4" />
                <span>Interroger l'AI sur cette étape</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Délai Légal vs Réalité de Terrain */}
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-500/30 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider font-mono">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Délai Légal Théorique (LPJ)</span>
                  </div>
                  <p className="text-sm font-semibold text-stone-900 dark:text-stone-100">
                    {selectedPipelineStep.legalDelay}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-500/30 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-rose-800 dark:text-rose-300 uppercase tracking-wider font-mono">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Réalité Constatée sur le Terrain</span>
                  </div>
                  <p className="text-sm text-stone-800 dark:text-stone-200 leading-relaxed">
                    {selectedPipelineStep.actualReality}
                  </p>
                </div>
              </div>

              {/* Mécanisme de défaillance & Impact sur l'enfant */}
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-900 dark:text-blue-300 uppercase tracking-wider font-mono">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Mécanisme du Goulot d'Étranglement</span>
                  </div>
                  <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                    {selectedPipelineStep.failureMechanism}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-500/30 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-900 dark:text-amber-200 uppercase tracking-wider font-mono">
                    <HeartHandshake className="w-3.5 h-3.5" />
                    <span>Conséquence Directe pour l'Enfant</span>
                  </div>
                  <p className="text-sm font-medium text-stone-800 dark:text-stone-200 leading-relaxed">
                    {selectedPipelineStep.impactChild}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* SUBTAB: GRAPHIQUE & RÉPERTOIRE DES DÉCÈS D'ENFANTS (CORONER) */}
      {activeSubTab === 'graph_deces' && (
        <DpjDeceasedChildrenGraph
          onOpenChatWithQuery={onOpenChatWithQuery}
          onSelectDossier={onSelectDossier}
        />
      )}

      {/* SUBTAB: GRAPHIQUE DES FUGUES ET TRAITE DES ENFANTS DPJ */}
      {activeSubTab === 'graph_fugues' && (
        <DpjFuguesGraph
          onOpenChatWithQuery={onOpenChatWithQuery}
          onSelectDossier={onSelectDossier}
        />
      )}

      {/* SUBTAB: SUPERBASE LÉSIONS DE DROITS (140 ENFANTS - CDPDJ) */}
      {activeSubTab === 'superbase_lesions' && (
        <SuperbaseLesionsView
          onOpenInvestigationReport={onSelectDossier}
          onAskAiQuestion={onOpenChatWithQuery}
          onNavigateToMediaArchives={() => setActiveSubTab('archives_reportages')}
          onNavigateToDefenseTool={() => setActiveSubTab('outil_defense_dossier')}
        />
      )}

      {/* SUBTAB: SUPERBASE ARCHIVES ENQUÊTES, DÉRIVES, VIOLS ET CORRUPTION (1995-2026) */}
      {activeSubTab === 'archives_reportages' && (
        <DpjMediaArchiveSuperbaseView
          onOpenChatWithQuery={onOpenChatWithQuery}
          onNavigateToSubTab={(sub) => setActiveSubTab(sub as SubTab)}
          onOpenInvestigationReport={onSelectDossier}
        />
      )}

      {/* SUBTAB: OUTIL D'ÉTUDE DU DOSSIER & CODEX LPJ POUR LES PARENTS */}
      {activeSubTab === 'outil_defense_dossier' && (
        <DpjCaseFileAuditTool
          onOpenChatWithQuery={onOpenChatWithQuery}
          onSelectDossier={onSelectDossier}
        />
      )}

      {/* SUBTAB 2: SUIVI RECOMMANDATIONS LAURENT */}
      {activeSubTab === 'commission_laurent' && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 sm:p-8 shadow-sm space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold font-serif text-stone-900 dark:text-stone-100 flex items-center gap-2">
                  <span>Audit des 138 Recommandations de la Commission Laurent</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 font-bold border border-blue-200 dark:border-blue-900">
                    Vérifié 2021-2026
                  </span>
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                  Surveillance citoyenne indépendante de l'application réelle des réformes préconisées après le drame de Granby.
                </p>
              </div>

              {/* Status Legend */}
              <div className="flex flex-wrap items-center gap-2 text-[11px]">
                <span className="px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-700 dark:text-rose-300 border border-rose-500/30 font-bold">
                  🔴 Bloquée / Non appliquée
                </span>
                <span className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/30 font-bold">
                  🟡 Partiellement amorcée
                </span>
                <span className="px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/30 font-bold">
                  ⚠️ Déviée / Diluée
                </span>
              </div>
            </div>

            {/* Recommendations List */}
            <div className="space-y-4 pt-2">
              {filteredLaurentRecs.map((rec) => (
                <div
                  key={rec.number}
                  className="p-5 rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 space-y-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-blue-900 text-white flex items-center justify-center text-xs font-bold font-mono">
                        #{rec.number}
                      </span>
                      <h4 className="text-sm font-bold font-serif text-stone-900 dark:text-stone-100">
                        {rec.title}
                      </h4>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300">
                        {rec.category}
                      </span>
                      <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                        rec.status === 'bloque'
                          ? 'bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-500/30'
                          : rec.status === 'dilue'
                          ? 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/30'
                          : 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/30'
                      }`}>
                        {rec.status === 'bloque' ? 'Bloquée' : rec.status === 'dilue' ? 'Diluée' : 'Partielle'}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                    {rec.description}
                  </p>

                  <div className="p-3 rounded-xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800/80 space-y-1">
                    <span className="text-[11px] font-bold text-rose-700 dark:text-rose-400 uppercase tracking-wider font-mono flex items-center gap-1.5">
                      <AlertCircle className="w-3 h-3" />
                      Obstacle ou Défaillance Politique Constatée :
                    </span>
                    <p className="text-xs text-stone-600 dark:text-stone-400">
                      {rec.officialObstacle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SUBTAB 3: CHAÎNE D'IMPUTABILITÉ */}
      {activeSubTab === 'imputabilite' && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 sm:p-8 shadow-sm space-y-6">
            <div>
              <h3 className="text-xl font-bold font-serif text-stone-900 dark:text-stone-100">
                Cartographie de la Chaîne de Commandement & Responsabilités
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                Au Québec, qui détient le pouvoir légal et financier d'agir ? Qui doit répondre des retards devant les citoyens et les tribunaux ?
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {IMPUTABILITE_LEADERS.map((leader, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className="text-base font-bold font-serif text-stone-900 dark:text-stone-100">
                          {leader.name}
                        </h4>
                        <p className="text-xs font-mono text-blue-700 dark:text-blue-400 font-semibold">
                          {leader.title}
                        </p>
                      </div>

                      <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border shrink-0 ${
                        leader.urgencyLevel === 'Critique'
                          ? 'bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-500/30'
                          : leader.urgencyLevel === 'Sous Pression'
                          ? 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/30'
                          : 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30'
                      }`}>
                        {leader.urgencyLevel}
                      </span>
                    </div>

                    <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                      {leader.roleDescription}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-stone-200/70 dark:border-stone-800">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 font-mono">
                        Responsabilités légales directes :
                      </span>
                      <ul className="space-y-1 text-xs text-stone-700 dark:text-stone-300">
                        {leader.keyResponsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-1.5">
                            <span className="text-blue-600 font-bold shrink-0">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-1.5 text-xs">
                    <div className="font-semibold text-rose-700 dark:text-rose-400 flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>Contradiction ou Bilan Documenté :</span>
                    </div>
                    <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                      {leader.contradictionsAndFailures}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SUBTAB 4: VÉRIFICATEUR D'INFRACTIONS LPJ */}
      {activeSubTab === 'calculateur_droits' && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 sm:p-8 shadow-sm space-y-6">
            <div>
              <h3 className="text-xl font-bold font-serif text-stone-900 dark:text-stone-100 flex items-center gap-2">
                <Scale className="w-5 h-5 text-emerald-600" />
                <span>Simulateur d'Infractions LPJ & Générateur de Plaintes Formelles</span>
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                Sélectionnez la situation concrète vécue par un enfant, un parent ou un proche pour vérifier les articles bafoués de la Loi sur la protection de la jeunesse et obtenir un modèle de plainte juridique.
              </p>
            </div>

            {/* Scenario Selection */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {LPJ_INFRACTIONS.map((infr) => {
                const isSelected = selectedInfraction.id === infr.id;
                return (
                  <button
                    key={infr.id}
                    type="button"
                    onClick={() => setSelectedInfraction(infr)}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-2 ${
                      isSelected
                        ? 'border-emerald-600 bg-emerald-50/20 dark:bg-emerald-950/20 ring-2 ring-emerald-500/30'
                        : 'border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 hover:bg-white dark:hover:bg-stone-900'
                    }`}
                  >
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 w-fit">
                      {infr.severity}
                    </span>
                    <h4 className="text-xs font-bold font-serif text-stone-900 dark:text-stone-100 leading-snug">
                      {infr.scenarioTitle}
                    </h4>
                    <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold pt-1">
                      Voir recours légal →
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Infraction Details & Model */}
            <div className="p-6 rounded-3xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 space-y-5">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                  Diagnostic Juridique :
                </span>
                <h4 className="text-lg font-bold font-serif text-stone-900 dark:text-stone-100">
                  {selectedInfraction.scenarioTitle}
                </h4>
                <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                  {selectedInfraction.situationDescription}
                </p>
              </div>

              {/* Violated Articles */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-stone-700 dark:text-stone-300">Articles en infraction :</span>
                {selectedInfraction.violatedArticles.map((art, aIdx) => (
                  <span key={aIdx} className="px-2.5 py-0.5 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-700 dark:text-rose-300 text-xs font-mono font-semibold">
                    {art}
                  </span>
                ))}
              </div>

              {/* Action Recourse */}
              <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-500/30 space-y-1">
                <span className="text-xs font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wider font-mono">
                  Recours d'urgence recommandé :
                </span>
                <p className="text-xs text-stone-800 dark:text-stone-200">
                  {selectedInfraction.immediateCitizenRecourse}
                </p>
              </div>

              {/* Complaint Template */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-600 dark:text-stone-300 font-mono">
                    Modèle officiel de plainte administrative :
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(selectedInfraction.id, selectedInfraction.complaintTemplate)}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-xs font-bold text-stone-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-700 transition-colors cursor-pointer"
                  >
                    {copiedTemplateId === selectedInfraction.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600">Texte copié !</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copier le modèle</span>
                      </>
                    )}
                  </button>
                </div>

                <pre className="p-4 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-xs text-stone-800 dark:text-stone-200 font-mono whitespace-pre-wrap leading-relaxed">
                  {selectedInfraction.complaintTemplate}
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SUBTAB 5: LANCEURS D'ALERTE DPJ */}
      {activeSubTab === 'lanceur_alerte' && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold font-serif text-stone-900 dark:text-stone-100">
                  Protection Légale des Travailleurs Sociaux & Intervenants DPJ
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400">
                  Loi facilitant la divulgation d'actes répréhensibles à l'égard des organismes publics (Loi D-11.1)
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-500/30 space-y-3">
              <h4 className="text-sm font-bold text-amber-900 dark:text-amber-200 font-serif">
                Directives d'Autoprotection contre les Représailles :
              </h4>
              <ul className="space-y-2 text-xs text-stone-700 dark:text-stone-300">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold shrink-0">1.</span>
                  <span><strong>Ne jamais divulguer de données nominatives sur l'enfant :</strong> Conservez la trace des dates de rétention et des consignes administratives sans exporter l'identité de l'enfant hors du dossier clinique.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold shrink-0">2.</span>
                  <span><strong>Privilégier le canal externe du Protecteur du citoyen :</strong> La dénonciation transmise directement à la Direction des enquêtes sur les actes répréhensibles confère une immunité légale absolue contre les mesures disciplinaires d'un CISSS.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold shrink-0">3.</span>
                  <span><strong>Consigner les directives contradictoires par écrit :</strong> Si un gestionnaire vous demande de clore un dossier non évalué ou de modifier une priorité, demandez toujours une confirmation par courriel ou note de service.</span>
                </li>
              </ul>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-stone-200 dark:border-stone-800">
              <span className="text-xs text-stone-500 dark:text-stone-400">
                Consultez le guide complet de sécurité pour les lanceurs d'alerte
              </span>
              <button
                type="button"
                onClick={() => onNavigateToTab('whistleblower_guide')}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold transition-colors cursor-pointer"
              >
                <span>Accéder au Guide Complet Loi D-11.1</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
