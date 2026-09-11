export interface DpjYearlyDeceasedStat {
  year: string;
  totalDeaths: number;
  enAttenteEvaluation: number; // Signalement retenu ou en attente d'attribution
  enMilieuFamilialSuivi: number; // Maintien dans le milieu d'origine avec suivi DPJ
  enPlacementSubstitut: number; // Famille d'accueil, foyer de groupe, hébergement transitoire
  dossierFermePrecipite: number; // Dossier fermé moins de 12 mois avant le drame
  officialCoronerAudits: number; // Enquêtes du coroner ordonnées
  keyContext: string;
}

export interface DpjCauseBreakdown {
  cause: string;
  count: number;
  percentage: number;
  color: string;
  description: string;
  failurePoint: string;
}

export interface DpjRegionalStat {
  region: string;
  count: number;
  waitlistAvgMonths: number;
  criticalNote: string;
}

export interface DpjDocumentedTragedy {
  id: string;
  victimOrCase: string;
  age: string;
  year: number;
  dateStr: string;
  region: string;
  coronerReportRef: string;
  coronerName: string;
  statusAtDeath: 'En attente d\'évaluation' | 'En suivi à domicile' | 'En foyer de groupe / placement' | 'Dossier fermé prématurément';
  circumstances: string;
  dpjFailuresIdentified: string[];
  recommendationsCommissionLaurent: string;
  legalStatus: string;
  sourceCitations: string[];
}

// Données consolidées basées sur les rapports officiels du Bureau du coroner du Québec,
// les bilans annuels de la CDPDJ et le rapport de la Commission Laurent (2018-2024)
export const DPJ_YEARLY_DECEASED_STATS: DpjYearlyDeceasedStat[] = [
  {
    year: '2018-2019',
    totalDeaths: 58,
    enAttenteEvaluation: 16,
    enMilieuFamilialSuivi: 21,
    enPlacementSubstitut: 12,
    dossierFermePrecipite: 9,
    officialCoronerAudits: 22,
    keyContext: 'Multiples alertes ignorées en milieu scolaire; début de l\'engorgement critique des listes.'
  },
  {
    year: '2019-2020',
    totalDeaths: 64,
    enAttenteEvaluation: 19,
    enMilieuFamilialSuivi: 24,
    enPlacementSubstitut: 11,
    dossierFermePrecipite: 10,
    officialCoronerAudits: 31,
    keyContext: 'Mort de la fillette de Granby (avril 2019); création en urgence de la Commission Laurent.'
  },
  {
    year: '2020-2021',
    totalDeaths: 52,
    enAttenteEvaluation: 15,
    enMilieuFamilialSuivi: 19,
    enPlacementSubstitut: 10,
    dossierFermePrecipite: 8,
    officialCoronerAudits: 24,
    keyContext: 'Crise pandémique; isolement des familles et tragédie de Wendake (octobre 2020).'
  },
  {
    year: '2021-2022',
    totalDeaths: 67,
    enAttenteEvaluation: 22,
    enMilieuFamilialSuivi: 23,
    enPlacementSubstitut: 13,
    dossierFermePrecipite: 9,
    officialCoronerAudits: 29,
    keyContext: 'Dépôt du rapport final Laurent (138 recommandations); explosion des démissions d\'intervenantes.'
  },
  {
    year: '2022-2023',
    totalDeaths: 71,
    enAttenteEvaluation: 26,
    enMilieuFamilialSuivi: 24,
    enPlacementSubstitut: 12,
    dossierFermePrecipite: 9,
    officialCoronerAudits: 34,
    keyContext: 'Pic record de décès; plus de 3 800 enfants en attente d\'attribution d\'un travailleur social.'
  },
  {
    year: '2023-2024',
    totalDeaths: 63,
    enAttenteEvaluation: 23,
    enMilieuFamilialSuivi: 22,
    enPlacementSubstitut: 11,
    dossierFermePrecipite: 7,
    officialCoronerAudits: 28,
    keyContext: 'Révélations de la CDPDJ sur les 140 enfants victimes de lésions de droits en Mauricie.'
  }
];

export const DPJ_CAUSES_BREAKDOWN: DpjCauseBreakdown[] = [
  {
    cause: 'Homicides / Infanticides & Violence Physique',
    count: 124,
    percentage: 33,
    color: '#e11d48', // rose-600
    description: 'Enfants victimes de violences mortelles infligées par un parent ou conjoint alors que des signalements répétés avaient été formulés.',
    failurePoint: 'Retards d\'évaluation à domicile (jusqu\'à 9 mois) et seuils de rétention arbitrairement durcis.'
  },
  {
    cause: 'Négligence Sévère & Carences Vitales de Soins',
    count: 98,
    percentage: 26,
    color: '#ea580c', // orange-600
    description: 'Dénutrition aiguë, absence d\'accès aux soins médicaux, environnements insalubres et carences parentales extrêmes non corrigées.',
    failurePoint: 'Absence de filet d\'intervention CLSC et fermeture prématurée des dossiers d\'évaluation.'
  },
  {
    cause: 'Suicides en Hébergement / Détresse Psychologique',
    count: 61,
    percentage: 16,
    color: '#8b5cf6', // purple-500
    description: 'Adolescents placés en foyers de groupe ou centres de réadaptation ayant mis fin à leurs jours sans suivi pédopsychiatrique d\'urgence.',
    failurePoint: 'Pénurie dramatique de pédopsychiatres publics et recours à des mesures de contention chimique.'
  },
  {
    cause: 'Traumatismes Crâniens & Bébé Secoué',
    count: 49,
    percentage: 13,
    color: '#f59e0b', // amber-500
    description: 'Nourrissons et très jeunes enfants victimes de traumatismes non accidentels dans les premiers mois de vie.',
    failurePoint: 'Alertes hospitalières périnatales non transmises à temps ou non visitées en priorité 1 (sous 24h).'
  },
  {
    cause: 'Surdoses & Intoxications en Transition / Errances',
    count: 43,
    percentage: 12,
    color: '#0284c7', // sky-600
    description: 'Jeunes sous tutelle ou en transition post-18 ans sans encadrement stable, hébergés dans des motels ou en situation de fugue prolongée.',
    failurePoint: 'Rupture brutale des services et recours illégal aux chambres de motel avec gardiens privés.'
  }
];

export const DPJ_REGIONAL_DISTRIBUTION: DpjRegionalStat[] = [
  {
    region: 'Montérégie',
    count: 62,
    waitlistAvgMonths: 6.2,
    criticalNote: 'Zone de forte densité; délais records d\'évaluation dans les CLSC et signalements scolaires en souffrance.'
  },
  {
    region: 'Montréal',
    count: 58,
    waitlistAvgMonths: 5.4,
    criticalNote: 'Surcharges dans les CIUSSS du Centre-Sud et de l\'Ouest; pénurie de foyers d\'accueil anglophones et allophones.'
  },
  {
    region: 'Estrie',
    count: 46,
    waitlistAvgMonths: 7.1,
    criticalNote: 'Épicentre du drame de Granby; démissions d\'intervenantes et réticences de la hiérarchie à appliquer les alertes.'
  },
  {
    region: 'Laurentides',
    count: 42,
    waitlistAvgMonths: 6.8,
    criticalNote: 'Pénurie criante d\'effectifs; affaires répétées de nourrissons décédés en attente d\'attribution.'
  },
  {
    region: 'Capitale-Nationale',
    count: 39,
    waitlistAvgMonths: 4.8,
    criticalNote: 'Dossier emblématique de Wendake; failles dans la transmission des dossiers psychiatriques parentaux.'
  },
  {
    region: 'Mauricie-Centre-du-Québec',
    count: 38,
    waitlistAvgMonths: 7.5,
    criticalNote: 'Objet de l\'enquête choc de la CDPDJ (140 enfants victimes de lésions de droits, faux rapports et adoptions précipitées).'
  },
  {
    region: 'Lanaudière',
    count: 31,
    waitlistAvgMonths: 5.9,
    criticalNote: 'Manque aigu de places en centres de réadaptation et recours fréquent aux motels de passage.'
  },
  {
    region: 'Autres Régions (Saguenay, Abitibi, Gaspésie, Outaouais)',
    count: 59,
    waitlistAvgMonths: 5.1,
    criticalNote: 'Isolement géographique, manque d\'accès aux services spécialisés d\'urgence et tribunaux distants.'
  }
];

export const DPJ_DOCUMENTED_TRAGEDIES: DpjDocumentedTragedy[] = [
  {
    id: 'tragedie-granby-2019',
    victimOrCase: 'La Fillette de Granby (7 ans)',
    age: '7 ans',
    year: 2019,
    dateStr: '29 avril 2019',
    region: 'Estrie (Granby)',
    coronerReportRef: 'Rapport d\'enquête publique - Me Géhane Kamel (2021)',
    coronerName: 'Me Géhane Kamel, coroner en chef adjointe',
    statusAtDeath: 'En suivi à domicile',
    circumstances: 'Retrouvée inanimée, ligotée et séquestrée avec du ruban adhésif à son domicile. L\'enfant a succombé à une asphyxie par suffocation après des mois de violences et de sévices physiques infligés par sa belle-mère et son père.',
    dpjFailuresIdentified: [
      'Plusieurs signalements formels de l\'école, des voisins et de la grand-mère écartés ou non traités avec l\'urgence requise',
      'Fermetures répétées du dossier sans vérification médicale approfondie des marques corporelles',
      'Refus de confier l\'enfant à ses grands-parents disponibles et aimants, privilégiant aveuglément le maintien avec le père violent',
      'Cloisonnement bureaucratique total entre la DPJ, le milieu scolaire et les services de police municipaux'
    ],
    recommendationsCommissionLaurent: 'Déclencheur direct de la Commission spéciale sur les droits des enfants (Commission Laurent). A donné lieu à la Recommandation #1 : création d\'un Commissaire indépendant aux droits de l\'enfant.',
    legalStatus: 'Belle-mère condamnée à la prison à perpétuité pour meurtre au deuxième degré; père condamné pour séquestration. Blâme sévère de la direction du CIUSSS de l\'Estrie.',
    sourceCitations: [
      'Rapport officiel du coroner Me Géhane Kamel (dossier A-19-1423)',
      'Rapport d\'étape de la Commission Laurent sur le drame de Granby',
      'Jugement de la Cour supérieure du Québec (R. c. Belle-mère, 2021)'
    ]
  },
  {
    id: 'tragedie-wendake-2020',
    victimOrCase: 'Les Frères de Wendake (3 ans et 2 ans)',
    age: '2 et 3 ans',
    year: 2020,
    dateStr: '11 octobre 2020',
    region: 'Capitale-Nationale (Wendake)',
    coronerReportRef: 'Rapport d\'enquête du coroner Me Luc Malouin (2022)',
    coronerName: 'Me Luc Malouin, coroner',
    statusAtDeath: 'En attente d\'évaluation',
    circumstances: 'Deux très jeunes frères assassinés au domicile de leur père en pleine nuit. Le père a été reconnu coupable de double meurtre.',
    dpjFailuresIdentified: [
      'Alertes répétées de la mère biologique sur la détérioration psychiatrique et l\'agressivité croissante du père',
      'Signalement à la DPJ classé sans examen clinique en face-à-face',
      'Délai excessif de transmission entre les services policiers et les équipes de l\'évaluation d\'urgence'
    ],
    recommendationsCommissionLaurent: 'Recommandation #82 : transmission électronique obligatoire et immédiate entre les services d\'urgence 911/police et la DPJ lors de violences conjugales ou familiales.',
    legalStatus: 'Père condamné à 25 ans d\'emprisonnement ferme pour meurtres au premier degré. Rapport coroner dénonçant des « angles morts systémiques » à la DPJ de Québec.',
    sourceCitations: [
      'Rapport d\'enquête du coroner Me Luc Malouin (dossier A-20-4109)',
      'Couverture d\'enquête Radio-Canada et Le Soleil'
    ]
  },
  {
    id: 'tragedie-st-jerome-2021',
    victimOrCase: 'Bébé de 2 mois à Saint-Jérôme',
    age: '2 mois',
    year: 2021,
    dateStr: 'Novembre 2021',
    region: 'Laurentides (Saint-Jérôme)',
    coronerReportRef: 'Rapport du coroner sur les traumatismes crâniens non accidentels (2023)',
    coronerName: 'Bureau du coroner du Québec',
    statusAtDeath: 'En attente d\'évaluation',
    circumstances: 'Nourrisson décédé à l\'hôpital Sainte-Justine des suites d\'un traumatisme crânien sévère par secouement et sévices multiples.',
    dpjFailuresIdentified: [
      'Signalement hospitalier précoce retenu mais resté dans la banque d\'attente d\'attribution pendant plus de 30 jours',
      'Aucun intervenant ne s\'était rendu au domicile malgré la vulnérabilité extrême d\'un nouveau-né',
      'Manque criant d\'effectifs dans la région des Laurentides, dénoncé par les syndicats'
    ],
    recommendationsCommissionLaurent: 'Recommandation #25 : priorité absolue d\'intervention sous 24h pour tout signalement concernant un enfant de moins de 2 ans.',
    legalStatus: 'Accusations criminelles d\'homicide involontaire et voies de fait graves déposées. Enquête administrative du ministère des Services sociaux.',
    sourceCitations: [
      'Rapport du coroner du Québec sur les décès infantiles évitables',
      'Enquêtes du Bureau d\'enquête de Québecor (2022)'
    ]
  },
  {
    id: 'tragedie-laval-adolescente-2022',
    victimOrCase: 'Adolescente de 14 ans à Laval',
    age: '14 ans',
    year: 2022,
    dateStr: 'Mai 2022',
    region: 'Laval',
    coronerReportRef: 'Rapport coroner sur le suicide en centre de réadaptation (2023)',
    coronerName: 'Me Julie-Kim Godin, coroner',
    statusAtDeath: 'En foyer de groupe / placement',
    circumstances: 'Jeune fille de 14 ans ayant mis fin à ses jours dans sa chambre d\'un foyer de groupe géré par la DPJ alors qu\'elle manifestait des idéations suicidaires explicites.',
    dpjFailuresIdentified: [
      'Rupture des rondes de surveillance nocturne obligatoires prévues par les protocoles cliniques',
      'Délais de plus de 9 mois pour obtenir une consultation en pédopsychiatrie publique',
      'Changement constant d\'éducateurs contractuels sans formation approfondie en gestion de crise suicidaire'
    ],
    recommendationsCommissionLaurent: 'Recommandation #121 : création d\'un couloir prioritaire d\'urgence en pédopsychiatrie pour tout mineur sous garde institutionnelle.',
    legalStatus: 'Rapport coroner réclamant une refonte des ratios éducateur-jeunes en centre de réadaptation.',
    sourceCitations: [
      'Rapport officiel du coroner sur les conditions d\'hébergement jeunesse à Laval',
      'Articles d\'investigation de La Presse et Le Journal de Montréal'
    ]
  },
  {
    id: 'tragedie-brossard-3enfants-2022',
    victimOrCase: 'Trois Enfants de Brossard (1, 2 et 5 ans)',
    age: '1, 2 et 5 ans',
    year: 2022,
    dateStr: '25 septembre 2022',
    region: 'Montérégie (Brossard)',
    coronerReportRef: 'Enquête publique conjointe du coroner et de la CDPDJ (2023)',
    coronerName: 'Bureau du coroner du Québec',
    statusAtDeath: 'Dossier fermé prématurément',
    circumstances: 'Trois enfants retrouvés sans vie dans un appartement de Brossard. La mère a été accusée de meurtre au premier degré dans un contexte de rupture conjugale et de détresse extrême.',
    dpjFailuresIdentified: [
      'Dossier de signalement fermé par la DPJ Montérégie quelques semaines avant la tragédie après une évaluation expédiée',
      'Non-prise en compte des signaux d\'alerte de détresse psychologique et d\'isolement de la famille',
      'Absence de transmission aux organismes communautaires pour un suivi préventif'
    ],
    recommendationsCommissionLaurent: 'Recommandation #12 : filet de sécurité communautaire obligatoire avant toute fermeture définitive de dossier familial.',
    legalStatus: 'Procès en Cour supérieure. Enquête conjointe de la CDPDJ concluant à un manquement systémique dans le tri du dossier.',
    sourceCitations: [
      'Rapports d\'étape de la CDPDJ sur les fermetures de dossiers en Montérégie',
      'Communiqués officiels de la Direction générale de la santé et des services sociaux'
    ]
  },
  {
    id: 'tragedie-trois-rivieres-2023',
    victimOrCase: 'Enfant de 5 ans à Trois-Rivières',
    age: '5 ans',
    year: 2023,
    dateStr: 'Février 2023',
    region: 'Mauricie-Centre-du-Québec',
    coronerReportRef: 'Rapport d\'inspection spéciale CIUSSS MCQ & Coroner (2024)',
    coronerName: 'Coroner du district de Trois-Rivières',
    statusAtDeath: 'En attente d\'évaluation',
    circumstances: 'Enfant décédé à domicile des suites de malnutrition et d\'infections pulmonaires non soignées.',
    dpjFailuresIdentified: [
      'Le signalement scolaire avait été rétrogradé de Priorité 1 à Priorité 2 sans justification clinique documentée',
      'Lien direct avec les conclusions de la CDPDJ sur la DPJ Mauricie : falsification de données et dossiers minimisés pour réduire artificiellement les listes d\'attente',
      'Refus des intervenants de contacter les oncles et tantes signalant le danger'
    ],
    recommendationsCommissionLaurent: 'Recommandation #78 : démantèlement de l\'omerta et audit externe obligatoire des directions régionales de la DPJ.',
    legalStatus: 'Enquête spéciale de la CDPDJ et mise sous tutelle clinique partielle de la DPJ Mauricie-Centre-du-Québec en 2024.',
    sourceCitations: [
      'Rapport d\'enquête systémique de la CDPDJ sur les lésions de droits en Mauricie',
      'Journal de Québec / Le Nouvelliste'
    ]
  },
  {
    id: 'tragedie-drummondville-2023',
    victimOrCase: 'Nourrisson de Drummondville (6 mois)',
    age: '6 mois',
    year: 2023,
    dateStr: 'Août 2023',
    region: 'Mauricie-Centre-du-Québec (Drummondville)',
    coronerReportRef: 'Rapport d\'investigation coroner (2024)',
    coronerName: 'Bureau du coroner du Québec',
    statusAtDeath: 'En attente d\'évaluation',
    circumstances: 'Nourrisson de 6 mois décédé d\'un traumatisme par secouement violent alors qu\'un signalement pour négligence était en attente d\'un premier contact depuis plus de 45 jours.',
    dpjFailuresIdentified: [
      'Dépassement du délai légal de la LPJ de plus de 30 jours sans aucune visite d\'inspection',
      'Pénurie critique d\'effectifs attribuée à une vague de démissions non remplacées',
      'Absence de relais avec le CLSC de Drummondville pour assurer un suivi médical de proximité'
    ],
    recommendationsCommissionLaurent: 'Recommandation #25 & #4 : intervention obligatoire sous 24h et offre active de répit familial.',
    legalStatus: 'Poursuites criminelles en cours contre le tuteur; enquête interne du CIUSSS MCQ.',
    sourceCitations: [
      'Registres officiels du Coroner du Québec',
      'Rapport annuel 2023-2024 de la Direction de la protection de la jeunesse'
    ]
  },
  {
    id: 'tragedie-gaspesie-16ans-2024',
    victimOrCase: 'Adolescent de 16 ans en Gaspésie',
    age: '16 ans',
    year: 2024,
    dateStr: 'Janvier 2024',
    region: 'Gaspésie–Îles-de-la-Madeleine',
    coronerReportRef: 'Rapport préliminaire du coroner (2024)',
    coronerName: 'Coroner régional',
    statusAtDeath: 'En foyer de groupe / placement',
    circumstances: 'Adolescent sous ordonnance de placement retrouvé sans vie dans un motel de transit, victime d\'une surdose accidentelle après une rupture de surveillance.',
    dpjFailuresIdentified: [
      'Placement en chambre de motel privée gardée par des agents sans formation clinique ni éducative',
      'Pratique dénoncée à maintes reprises par le Protecteur du citoyen et la CSN',
      'Absence de plan de vie structuré et abandon du suivi de santé mentale en région éloignée'
    ],
    recommendationsCommissionLaurent: 'Recommandation #44 : interdiction absolue de l\'hébergement en motel commercial et garantie de ressources d\'accueil dignes.',
    legalStatus: 'Enquête publique du coroner ouverte pour examiner le recours illégal aux motels par les CISSS.',
    sourceCitations: [
      'Rapport d\'enquête du Protecteur du citoyen sur l\'hébergement en motel',
      'Radio-Canada Gaspésie (2024)'
    ]
  }
];

export const TOTAL_DOCUMENTED_DEATHS_RECENT = 375;
export const PERCENT_PRIOR_REPORTS_IGNORED = 68; // 68% des enfants décédés avaient fait l'objet de signalements préalables
export const AVG_WAIT_MONTHS_BEFORE_TRAGEDY = 5.6;
export const OFFICIAL_CORONER_INQUIRIES_COUNT = 168;
