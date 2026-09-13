export type NexusCategory = 
  | 'EXECUTIF_ETAT'
  | 'COLLUSION_BTP_GENIE'
  | 'CONSULTANTS_TECH'
  | 'DPJ_JEUNESSE_EXPLOITATION'
  | 'MKULTRA_SECRET_ETAT'
  | 'RESEAU_MONDAIN_SDNY'
  | 'ACADEMIQUE_ELITES';

export interface NexusNode {
  id: string;
  label: string;
  category: NexusCategory;
  categoryLabel: string;
  roleSummary: string;
  documentedPowerLevel: 'Stratégique' | 'Opérationnel' | 'Sous-traitance' | 'Victimes / Dommages';
  officialProofSource: string;
  officialRef: string;
  associatedDossierId?: string;
  tags: string[];
}

export interface NexusEdge {
  id: string;
  source: string;
  target: string;
  relationType: 
    | 'FINANCEMENT_OCCULTE'
    | 'CONTRAT_GRE_A_GRE'
    | 'DEFAILLANCE_DE_GARDE'
    | 'EXPLOITATION_TRAITE'
    | 'EXPERIMENTATION_CLANDESTINE'
    | 'PASSERELLE_DIPLOMATION'
    | 'COLLUSION_SYSTEMIQUE'
    | 'SUBVENTION_SANS_DEBAT';
  label: string;
  documentedProof: string;
  officialRecord: string;
  severity: 'Critique' | 'Majeure' | 'Documentée';
  financialVolumeOrDamage?: string;
}

export const NEXUS_CATEGORIES_META: Record<NexusCategory, { label: string; color: string; bgBadge: string; icon: string }> = {
  EXECUTIF_ETAT: {
    label: 'Exécutif, Ministères & Agences d\'État',
    color: '#2563eb', // Blue
    bgBadge: 'bg-blue-100 text-blue-900 dark:bg-blue-950/80 dark:text-blue-300 border-blue-400',
    icon: 'Landmark'
  },
  COLLUSION_BTP_GENIE: {
    label: 'Collusion Génie-Conseil & BTP (Charbonneau)',
    color: '#d97706', // Amber
    bgBadge: 'bg-amber-100 text-amber-900 dark:bg-amber-950/80 dark:text-amber-300 border-amber-400',
    icon: 'HardHat'
  },
  CONSULTANTS_TECH: {
    label: 'Consultants Privés & Multinationales IT',
    color: '#0891b2', // Cyan
    bgBadge: 'bg-cyan-100 text-cyan-900 dark:bg-cyan-950/80 dark:text-cyan-300 border-cyan-400',
    icon: 'Server'
  },
  DPJ_JEUNESSE_EXPLOITATION: {
    label: 'Protection Jeunesse, Fugues & Motels Privés',
    color: '#dc2626', // Red
    bgBadge: 'bg-red-100 text-red-900 dark:bg-red-950/80 dark:text-red-300 border-red-400',
    icon: 'AlertTriangle'
  },
  MKULTRA_SECRET_ETAT: {
    label: 'Psychiatrie Clandestine & Renseignement (MK-Ultra)',
    color: '#7c3aed', // Purple
    bgBadge: 'bg-purple-100 text-purple-900 dark:bg-purple-950/80 dark:text-purple-300 border-purple-400',
    icon: 'Brain'
  },
  RESEAU_MONDAIN_SDNY: {
    label: 'Réseaux Mondains & Décachetage SDNY (Epstein/Brunel)',
    color: '#be185d', // Pink/Rose
    bgBadge: 'bg-rose-100 text-rose-900 dark:bg-rose-950/80 dark:text-rose-300 border-rose-400',
    icon: 'Plane'
  },
  ACADEMIQUE_ELITES: {
    label: 'Pépinière Universitaire & Passerelles de Pouvoir',
    color: '#059669', // Emerald
    bgBadge: 'bg-emerald-100 text-emerald-900 dark:bg-emerald-950/80 dark:text-emerald-300 border-emerald-400',
    icon: 'GraduationCap'
  }
};

export const NEXUS_NODES: NexusNode[] = [
  // 1. EXÉCUTIF
  {
    id: 'node-executif',
    label: 'Conseil Exécutif & Cabinet du Premier Ministre',
    category: 'EXECUTIF_ETAT',
    categoryLabel: 'Exécutif d\'État',
    roleSummary: 'Centre nerveux des décrets gouvernementaux, des nominations à haut niveau et des décisions économiques stratégiques d\'attribution.',
    documentedPowerLevel: 'Stratégique',
    officialProofSource: 'Loi sur l\'exécutif (RLRQ c. E-18) & Décrets du Conseil des ministres',
    officialRef: 'Gazette officielle du Québec • Dépôts parlementaires',
    associatedDossierId: 'charbonneau-collusion-upac',
    tags: ['Premier ministre', 'Décrets', 'Pouvoir discrétionnaire', 'Nominations']
  },
  {
    id: 'node-tresor',
    label: 'Conseil du Trésor & Réglementation des Dépenses',
    category: 'EXECUTIF_ETAT',
    categoryLabel: 'Exécutif d\'État',
    roleSummary: 'Autorise les dérogations aux appels d\'offres publics et supervise les contrats informatiques majeurs de l\'administration.',
    documentedPowerLevel: 'Stratégique',
    officialProofSource: 'Loi sur les contrats des organismes publics (LCOP - RLRQ c. C-65.1)',
    officialRef: 'Rapports d\'audit du Vérificateur général du Québec (VGQ)',
    associatedDossierId: 'saaqclic-it-contracts',
    tags: ['Conseil du Trésor', 'Gré à gré', 'LCOP', 'Appels d\'offres']
  },
  {
    id: 'node-invest-qc',
    label: 'Investissement Québec & Ministère de l\'Économie',
    category: 'EXECUTIF_ETAT',
    categoryLabel: 'Exécutif d\'État',
    roleSummary: 'Bras financier accordant subventions et prises de participation massives dans des filières industrielles sans BAPE préalable.',
    documentedPowerLevel: 'Stratégique',
    officialProofSource: 'États financiers d\'Investissement Québec & Décrets de la filière batterie (Northvolt)',
    officialRef: 'Registres du Registraire des entreprises & Décret 1774-2023',
    associatedDossierId: 'northvolt-battery-transparency',
    tags: ['Northvolt', 'Subventions', 'BAPE évité', 'Fonds publics']
  },
  {
    id: 'node-msss-direction',
    label: 'Ministère de la Santé (MSSS) & Directions Générales DPJ',
    category: 'EXECUTIF_ETAT',
    categoryLabel: 'Exécutif d\'État',
    roleSummary: 'Tutelle ministérielle et administrative des 16 directeurs provinciaux de la protection de la jeunesse.',
    documentedPowerLevel: 'Stratégique',
    officialProofSource: 'Rapport de la Commission spéciale sur les droits des enfants (Commission Laurent, 2021)',
    officialRef: 'Loi sur la protection de la jeunesse (RLRQ c. P-34.1)',
    associatedDossierId: 'protection-jeunesse-dpj-laurent',
    tags: ['MSSS', 'DPJ', 'Commission Laurent', 'Directeurs']
  },

  // 2. COLLUSION BTP & GÉNIE
  {
    id: 'node-genie-conseil',
    label: 'Firmes de Génie-Conseil (SNC-Lavalin, Dessau, Genivar)',
    category: 'COLLUSION_BTP_GENIE',
    categoryLabel: 'Génie-Conseil',
    roleSummary: 'Au coeur du système de financement occulte des partis par prête-noms et de rédaction de devis d\'ingénierie biaisés.',
    documentedPowerLevel: 'Opérationnel',
    officialProofSource: 'Rapport final de la Commission d\'enquête sur l\'octroi et la gestion des contrats publics dans l\'industrie de la construction (CEIC, 2015)',
    officialRef: 'Commission Charbonneau • Témoignages sous serment & Preuves UPAC',
    associatedDossierId: 'charbonneau-collusion-upac',
    tags: ['Charbonneau', 'SNC-Lavalin', 'Prête-noms', 'UPAC']
  },
  {
    id: 'node-cartel-btp',
    label: 'Cartel des Entrepreneurs en Construction (Asphalte & Égouts)',
    category: 'COLLUSION_BTP_GENIE',
    categoryLabel: 'Génie-Conseil',
    roleSummary: 'Ententes secrètes de trucage de soumissions pour alterner les vainqueurs et surtaxer les deniers publics de 20 à 30 %.',
    documentedPowerLevel: 'Opérationnel',
    officialProofSource: 'Jugements de la Cour supérieure du Québec & Plaidoiries de culpabilité Bureau de la concurrence',
    officialRef: 'R. c. Ciment Québec et al. • Constats CEIC',
    associatedDossierId: 'charbonneau-collusion-upac',
    tags: ['Trucage', 'Asphalte', 'Cartel', 'Pots-de-vin']
  },

  // 3. CONSULTANTS PRIVÉS & TECH
  {
    id: 'node-mckinsey-consultants',
    label: 'Cabinets de Conseil Privés (McKinsey, PwC, Deloitte)',
    category: 'CONSULTANTS_TECH',
    categoryLabel: 'Consultants & Tech',
    roleSummary: 'Gouvernance parallèle facturée des centaines de millions à l\'État québécois et canadien pour piloter la santé, l\'IT et la gestion de crise.',
    documentedPowerLevel: 'Stratégique',
    officialProofSource: 'Rapport spécial du Vérificateur général du Canada et Enquêtes VGQ sur les contrats de gestion',
    officialRef: 'Rapports parlementaires sur l\'ingérence des firmes-conseils',
    associatedDossierId: 'saaqclic-it-contracts',
    tags: ['McKinsey', 'PwC', 'ArriveCAN', 'Gouvernance de l\'ombre']
  },
  {
    id: 'node-fournisseurs-it',
    label: 'Consortiums Informatiques SAAQclic & ArriveCAN',
    category: 'CONSULTANTS_TECH',
    categoryLabel: 'Consultants & Tech',
    roleSummary: 'Monopoles de développement logiciel ayant généré des explosions de coûts de 500 M$ et des bris de service aux citoyens.',
    documentedPowerLevel: 'Opérationnel',
    officialProofSource: 'Rapport d\'audit de conformité VGQ sur le virage numérique de la SAAQ (2024)',
    officialRef: 'Contrats SEAO SAAQclic & Dépassements ArriveCAN',
    associatedDossierId: 'saaqclic-it-contracts',
    tags: ['SAAQclic', 'CGI', 'LGS', '500 Millions']
  },

  // 4. PROTECTION JEUNESSE & EXPLOITATION
  {
    id: 'node-foyers-dpj',
    label: 'Centres de Réadaptation & Foyers de Groupe DPJ',
    category: 'DPJ_JEUNESSE_EXPLOITATION',
    categoryLabel: 'Protection Jeunesse',
    roleSummary: 'Établissements d\'hébergement saturés enregistrant plus de 10 000 fugues annuelles d\'adolescents sous ordonnance de garde.',
    documentedPowerLevel: 'Opérationnel',
    officialProofSource: 'Bilan provincial annuel des directeurs de la protection de la jeunesse (2020-2025)',
    officialRef: 'Statistiques officielles MSSS & Rapports CDPDJ',
    associatedDossierId: 'dpj-fugues-traite-exploitation',
    tags: ['10 000 fugues', 'Foyers', 'Sous-effectif', 'Surpeuplement']
  },
  {
    id: 'node-motels-transit',
    label: 'Réseau des Chambres de Motels Privés (Transit DPJ)',
    category: 'DPJ_JEUNESSE_EXPLOITATION',
    categoryLabel: 'Protection Jeunesse',
    roleSummary: 'Plus de 1 100 enfants hébergés d\'urgence dans des motels commerciaux sans encadrement médicalisé, financés par fonds publics.',
    documentedPowerLevel: 'Sous-traitance',
    officialProofSource: 'Enquête spéciale du Protecteur du citoyen sur les mesures d\'hébergement d\'exception (2023)',
    officialRef: 'Rapport Protecteur du citoyen du Québec • Facturation des moteliers',
    associatedDossierId: 'dpj-fugues-traite-exploitation',
    tags: ['Motels de transit', '1 100 enfants', 'Fonds publics moteliers', 'Non-conformité']
  },
  {
    id: 'node-reseaux-traite',
    label: 'Réseaux de Traite des Personnes & Proxénétisme Juvénile',
    category: 'DPJ_JEUNESSE_EXPLOITATION',
    categoryLabel: 'Protection Jeunesse',
    roleSummary: 'Prédation organisée ciblant les adolescentes en fugue de la DPJ aux abords des centres et motels de Laval et Montréal.',
    documentedPowerLevel: 'Victimes / Dommages',
    officialProofSource: 'Chapitre 8 du Rapport de la Commission Laurent & Dossiers de la Division des crimes sexuels du SPVM/SPL',
    officialRef: 'Code criminel (art. 279.01 - Traite de personnes)',
    associatedDossierId: 'dpj-fugues-traite-exploitation',
    tags: ['Proxénétisme', 'Laval', 'Fugueuses', 'Traite sexuelle']
  },

  // 5. PSYCHIATRIE CLANDESTINE & MK-ULTRA
  {
    id: 'node-cia-mkultra',
    label: 'Central Intelligence Agency (CIA - TSS / MK-Ultra)',
    category: 'MKULTRA_SECRET_ETAT',
    categoryLabel: 'MK-Ultra / Secret',
    roleSummary: 'Financement secret du Sous-projet 68 pour développer des techniques de lavage de cerveau et d\'effacement mémoriel sur cobayes humains.',
    documentedPowerLevel: 'Stratégique',
    officialProofSource: 'Directives déclassifiées CIA FOIA (1953) & Auditions du Sénat américain (Comité Church 1977)',
    officialRef: 'U.S. Senate Select Committee on Intelligence • Hearings on Project MKULTRA',
    associatedDossierId: 'mk-ultra-allan-memorial-mcgill',
    tags: ['CIA', 'Sous-projet 68', 'Sidney Gottlieb', 'Lavage de cerveau']
  },
  {
    id: 'node-sante-canada-federal',
    label: 'Ministère de la Santé nationale et Bien-être social (Canada)',
    category: 'MKULTRA_SECRET_ETAT',
    categoryLabel: 'MK-Ultra / Secret',
    roleSummary: 'Versement de plus de 500 000 $ de subventions fédérales de recherche au Dr Cameron sans aucun contrôle éthique des cobayes.',
    documentedPowerLevel: 'Stratégique',
    officialProofSource: 'Rapport George Cooper, c.r. au ministre de la Justice du Canada (1986)',
    officialRef: 'Décret fédéral en conseil C.P. 1992-2342 (Indemnités de 100 000 $)',
    associatedDossierId: 'mk-ultra-allan-memorial-mcgill',
    tags: ['Santé Canada', 'Rapport Cooper', 'Subventions 500 000 $', 'Décret Mulroney']
  },
  {
    id: 'node-allan-mcgill',
    label: 'Institut Allan Memorial & Université McGill',
    category: 'MKULTRA_SECRET_ETAT',
    categoryLabel: 'MK-Ultra / Secret',
    roleSummary: 'Théâtre des expérimentations de déstructuration (électrochocs Page-Russell), narcoses de 60 jours et conduites psychiques forcées.',
    documentedPowerLevel: 'Opérationnel',
    officialProofSource: 'Dossier d\'action collective en Cour supérieure du Québec (500-06-000854-191)',
    officialRef: 'Archives départementales de psychiatrie McGill • Dr Donald Ewen Cameron',
    associatedDossierId: 'mk-ultra-allan-memorial-mcgill',
    tags: ['Ravenscrag', 'McGill', 'Dr Cameron', 'Cour supérieure']
  },

  // 6. RÉSEAUX MONDAINS SDNY
  {
    id: 'node-epstein-aviation',
    label: 'Réseau Jeffrey Epstein & Registres de Vol (YUL/YMX)',
    category: 'RESEAU_MONDAIN_SDNY',
    categoryLabel: 'Réseau SDNY',
    roleSummary: 'Atterrissages certifiés d\'avions privés à Dorval et Mirabel reliant l\'axe New York, Palm Beach et les îles Vierges.',
    documentedPowerLevel: 'Stratégique',
    officialProofSource: 'Registres certifiés de vol de la Federal Aviation Administration (FAA)',
    officialRef: 'Pièces judiciaires décachetées Giuffre c. Maxwell (SDNY 15-cv-07433)',
    associatedDossierId: 'reseau-epstein-elites-quebec',
    tags: ['FAA', 'Dorval YUL', 'Mirabel YMX', 'Décachetage SDNY']
  },
  {
    id: 'node-brunel-agences',
    label: 'Jean-Luc Brunel & Agences MC2 / Karin Models',
    category: 'RESEAU_MONDAIN_SDNY',
    categoryLabel: 'Réseau SDNY',
    roleSummary: 'Rabattage international d\'aspirantes mannequins québécoises à Montréal pour le compte du réseau Epstein.',
    documentedPowerLevel: 'Opérationnel',
    officialProofSource: 'Mise en examen par le Parquet de Paris pour viols sur mineurs et traite d\'êtres humains',
    officialRef: 'Dossier pénal Brunel (Tribunal judiciaire de Paris) • Enquête Radio-Canada',
    associatedDossierId: 'reseau-epstein-elites-quebec',
    tags: ['MC2', 'Karin Models', 'Mannequins Montréal', 'Paris Parquet']
  },

  // 7. ACADÉMIQUE & FORMATION DU POUVOIR
  {
    id: 'node-facultes-droit-qc',
    label: 'Facultés de Droit (UdeM, ULaval, Sherbrooke, McGill)',
    category: 'ACADEMIQUE_ELITES',
    categoryLabel: 'Filières de Pouvoir',
    roleSummary: 'Pépinière de plus de 40 % des ministres, premiers ministres et conseillers juridiques de l\'État depuis 1995.',
    documentedPowerLevel: 'Stratégique',
    officialProofSource: 'Registre biographique des députés de l\'Assemblée nationale du Québec',
    officialRef: 'Grille d\'intégrité Transparence Québec (1995-2026)',
    associatedDossierId: 'charbonneau-collusion-upac',
    tags: ['Facultés de Droit', 'UdeM', 'ULaval', 'Pipeline de l\'Exécutif']
  },
  {
    id: 'node-hec-affaires-qc',
    label: 'HEC Montréal & Écoles de Gestion d\'Élite',
    category: 'ACADEMIQUE_ELITES',
    categoryLabel: 'Filières de Pouvoir',
    roleSummary: 'Filière dominante des ministres des Finances, de l\'Économie et des hauts dirigeants de sociétés d\'État.',
    documentedPowerLevel: 'Stratégique',
    officialProofSource: 'Rapports annuels d\'Hydro-Québec, Caisse de dépôt (CDPQ) et Investissement Québec',
    officialRef: 'Annuaires des diplômés HEC Montréal & Ordre des CPA',
    associatedDossierId: 'northvolt-battery-transparency',
    tags: ['HEC', 'Finances', 'CDPQ', 'Investissement Québec']
  }
];

export const NEXUS_EDGES: NexusEdge[] = [
  // Pont 1 : Exécutif ↔ Génie-Conseil & Partis (Commission Charbonneau)
  {
    id: 'edge-exec-genie',
    source: 'node-executif',
    target: 'node-genie-conseil',
    relationType: 'FINANCEMENT_OCCULTE',
    label: 'Financement politique illégal par prête-noms (3%)',
    documentedProof: 'La Commission Charbonneau a prouvé que les firmes de génie remboursaient les dons de leurs employés en argent liquide pour contourner la Loi électorale et sécuriser l\'accès aux ministres et donneurs d\'ordres.',
    officialRecord: 'Rapport CEIC (2015), Tome 3 • Enquêtes UPAC « Fronde » et « Joug »',
    severity: 'Critique',
    financialVolumeOrDamage: 'Des dizaines de millions versés aux caisses électorales provinciales et municipales'
  },
  {
    id: 'edge-genie-cartel',
    source: 'node-genie-conseil',
    target: 'node-cartel-btp',
    relationType: 'COLLUSION_SYSTEMIQUE',
    label: 'Rédaction de devis sur mesure & trucage des appels d\'offres',
    documentedProof: 'Concertation entre ingénieurs-conseils et entrepreneurs BTP pour verrouiller les clauses techniques des devis municipaux et provinciaux, excluant les compétiteurs honnêtes.',
    officialRecord: 'Témoignages sous serment des témoins clés (Zambito, Surprenant, CEIC)',
    severity: 'Critique',
    financialVolumeOrDamage: 'Surcoûts de 20% à 30% facturés aux contribuables québécois'
  },

  // Pont 2 : Exécutif & Trésor ↔ Consultants Privés & Fiascos IT
  {
    id: 'edge-tresor-consultants',
    source: 'node-tresor',
    target: 'node-mckinsey-consultants',
    relationType: 'CONTRAT_GRE_A_GRE',
    label: 'Sous-traitance de la souveraineté décisionnelle d\'État',
    documentedProof: 'Octroi de mandats stratégiques sans appel d\'offres public à McKinsey et consorts pour piloter les réformes de santé et les directives sanitaires, diluant la responsabilité ministérielle.',
    officialRecord: 'Rapports d\'accès à l\'information & Audits du Vérificateur général du Canada (2023)',
    severity: 'Critique',
    financialVolumeOrDamage: 'Plus de 100 millions $ de contrats de conseil sans reddition de compte'
  },
  {
    id: 'edge-consultants-it',
    source: 'node-mckinsey-consultants',
    target: 'node-fournisseurs-it',
    relationType: 'COLLUSION_SYSTEMIQUE',
    label: 'Avenants successifs & Dérive budgétaire SAAQclic',
    documentedProof: 'Co-gestion des projets informatiques publics menant au dérapage de 500 M$ de SAAQclic et 60 M$ d\'ArriveCAN, sans pénalités imposées aux firmes prestataires.',
    officialRecord: 'Rapport du Vérificateur général du Québec sur le virage numérique (2024)',
    severity: 'Critique',
    financialVolumeOrDamage: '500 000 000 $ de fonds publics engagés pour un bris de service'
  },
  {
    id: 'edge-exec-investqc',
    source: 'node-executif',
    target: 'node-invest-qc',
    relationType: 'SUBVENTION_SANS_DEBAT',
    label: 'Engagements de 2,9 milliards $ sans examen préalable du BAPE',
    documentedProof: 'Adoption d\'arrêtés ministériels sur mesure modifiant les seuils de superficie pour éviter les audiences environnementales publiques du BAPE en faveur de Northvolt.',
    officialRecord: 'Gazette officielle du Québec • Décret gouvernemental 1774-2023',
    severity: 'Critique',
    financialVolumeOrDamage: '2,9 milliards $ d\'aide et garanties publiques québécoises'
  },

  // Pont 3 : MSSS / DPJ ↔ Foyers ↔ Motels ↔ Réseaux de Proxénétisme
  {
    id: 'edge-msss-foyers',
    source: 'node-msss-direction',
    target: 'node-foyers-dpj',
    relationType: 'DEFAILLANCE_DE_GARDE',
    label: 'Sous-financement clinique & Épidémie de 10 000 fugues/an',
    documentedProof: 'Déficit structurel d\'éducateurs formés, recours massif aux agences de placement privées et banalisation administrative des fugues d\'enfants sous mandat judiciaire.',
    officialRecord: 'Commission Laurent (2021), Constat 14 • Rapports annuels provinciaux DPJ',
    severity: 'Critique',
    financialVolumeOrDamage: '10 000+ avis de recherche et disparitions annuelles d\'enfants protégés'
  },
  {
    id: 'edge-foyers-motels',
    source: 'node-foyers-dpj',
    target: 'node-motels-transit',
    relationType: 'CONTRAT_GRE_A_GRE',
    label: 'Parcage illégal de 1 100+ mineurs dans des motels de transit',
    documentedProof: 'Placement de mineurs vulnérables dans des chambres d\'hôtel en bord d\'autoroute gérées par des gardiens de sécurité non qualifiés, sans suivi pédopsychiatrique.',
    officialRecord: 'Rapport d\'enquête du Protecteur du citoyen du Québec (2023)',
    severity: 'Critique',
    financialVolumeOrDamage: 'Des millions versés aux exploitants de motels privés'
  },
  {
    id: 'edge-motels-traite',
    source: 'node-motels-transit',
    target: 'node-reseaux-traite',
    relationType: 'EXPLOITATION_TRAITE',
    label: 'Proies faciles : Recrutement des fugueuses par les gangs de rue',
    documentedProof: 'Les réseaux de proxénétisme de Laval et Montréal surveillent ouvertement les motels de transit de la DPJ pour rabattre et séquestrer les adolescentes en fugue.',
    officialRecord: 'Commission Laurent, Chapitre 8 • Enquêtes policières SPVM/SPL « Opération Scorpion »',
    severity: 'Critique',
    financialVolumeOrDamage: 'Destruction humaine irréparable de centaines de jeunes filles québécoises'
  },

  // Pont 4 : Secret d'État & Psychiatrie Clandestine (MK-Ultra)
  {
    id: 'edge-cia-allan',
    source: 'node-cia-mkultra',
    target: 'node-allan-mcgill',
    relationType: 'EXPERIMENTATION_CLANDESTINE',
    label: 'Sous-projet 68 : Financement CIA pour la déstructuration humaine',
    documentedProof: 'Financement secret de plus de 60 000 $ US canalisé via la Society for the Investigation of Human Ecology pour tester le lavage de cerveau sur des patients montréalais sans consentement.',
    officialRecord: 'Auditions du Comité Church au Sénat américain (1977) • Directives déclassifiées CIA FOIA',
    severity: 'Critique',
    financialVolumeOrDamage: 'Centaines de patients déstructurés, effacement de mémoire et régressions infantiles'
  },
  {
    id: 'edge-sante-allan',
    source: 'node-sante-canada-federal',
    target: 'node-allan-mcgill',
    relationType: 'SUBVENTION_SANS_DEBAT',
    label: 'Subventions fédérales publiques de 500 000 $ sans contrôle éthique',
    documentedProof: 'Le gouvernement fédéral canadien a subventionné le Dr Cameron de 1950 à 1964 tout en refusant d\'examiner les méthodes de torture médicale infligées aux citoyens canadiens.',
    officialRecord: 'Rapport George Cooper, c.r. au ministre de la Justice du Canada (1986)',
    severity: 'Critique',
    financialVolumeOrDamage: '500 000 $ de subventions fédérales de l\'époque (~5M$ actuels)'
  },
  {
    id: 'edge-allan-executif',
    source: 'node-allan-mcgill',
    target: 'node-executif',
    relationType: 'COLLUSION_SYSTEMIQUE',
    label: 'Secret médical, rétention d\'archives et refus d\'excuses institutionnelles',
    documentedProof: 'L\'Université McGill et les autorités de santé publique maintiennent le scellé sur les dossiers complets et refusent des excuses officielles aux familles en Cour supérieure.',
    officialRecord: 'Action collective Cour supérieure du Québec (500-06-000854-191)',
    severity: 'Majeure',
    financialVolumeOrDamage: 'Décret fédéral de 1992 (100 000 $ ex gratia) avec clause d\'extinction de recours'
  },

  // Pont 5 : Réseaux Mondains Internationaux (SDNY) ↔ Aviation Montréal
  {
    id: 'edge-epstein-brunel',
    source: 'node-epstein-aviation',
    target: 'node-brunel-agences',
    relationType: 'EXPLOITATION_TRAITE',
    label: 'Filière de mannequins montréalaises & escales régulières YUL/YMX',
    documentedProof: 'Jean-Luc Brunel a utilisé les agences de mannequins Karin Models et MC2 pour rabattre des jeunes femmes à Montréal, coordonnées avec les vols d\'avions privés de Jeffrey Epstein.',
    officialRecord: 'Registres FAA • Tribunal fédéral SDNY (15-cv-07433) • Dossier criminel Parquet de Paris',
    severity: 'Critique',
    financialVolumeOrDamage: 'Trafic international de mineures et jeunes mannequins'
  },
  {
    id: 'edge-epstein-executif',
    source: 'node-epstein-aviation',
    target: 'node-executif',
    relationType: 'COLLUSION_SYSTEMIQUE',
    label: 'Pénétration mondaine des cercles d\'affaires québécois',
    documentedProof: 'Présence de personnalités montréalaises dans le carnet d\'adresses mondial saisi par le FBI, nécessitant une veille rigoureuse distinguant liens criminels et relations mondaines.',
    officialRecord: 'Pièces judiciaires décachetées SDNY (Juge Loretta Preska, 2024)',
    severity: 'Documentée',
    financialVolumeOrDamage: 'Vérifications d\'intégrité citoyenne'
  },

  // Pont 6 : Pépinière Universitaire ↔ Appareil d'État
  {
    id: 'edge-droit-executif',
    source: 'node-facultes-droit-qc',
    target: 'node-executif',
    relationType: 'PASSERELLE_DIPLOMATION',
    label: '35%+ de l\'Exécutif et des législateurs formés en droit (UdeM/ULaval)',
    documentedProof: 'Monopole de formation académique alimentant le Conseil des ministres, les cabinets juridiques de premier plan et les nominations judiciaires gouvernementales.',
    officialRecord: 'Registre de l\'Assemblée nationale & Barreau du Québec',
    severity: 'Documentée',
    financialVolumeOrDamage: 'Influence déterminante sur la formulation des lois et clauses d\'immunité'
  },
  {
    id: 'edge-hec-investqc',
    source: 'node-hec-affaires-qc',
    target: 'node-invest-qc',
    relationType: 'PASSERELLE_DIPLOMATION',
    label: 'Passerelle financière HEC ↔ Investissement Québec & Sociétés d\'État',
    documentedProof: 'Les cercles de gestionnaires formés aux HEC et dans les écoles d\'affaires occupent les présidences des sociétés d\'État gérant des dizaines de milliards de fonds publics.',
    officialRecord: 'Organigrammes officiels Investissement Québec, CDPQ et Hydro-Québec',
    severity: 'Documentée',
    financialVolumeOrDamage: 'Supervision de portefeuilles publics de plus de 450 milliards $'
  }
];

export function getNexusNodeById(id: string): NexusNode | undefined {
  return NEXUS_NODES.find(n => n.id === id);
}

export function getNexusEdgesForNode(nodeId: string): NexusEdge[] {
  return NEXUS_EDGES.filter(e => e.source === nodeId || e.target === nodeId);
}
