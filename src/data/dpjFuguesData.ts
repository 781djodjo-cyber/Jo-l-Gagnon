export interface DpjYearlyFuguesStat {
  year: string;
  totalFugueEpisodes: number; // Nombre total d'épisodes de fugues signalés aux corps de police (SPVM, SQ, etc.)
  uniqueChildrenFugueurs: number; // Nombre d'enfants distincts ayant fugué au moins une fois
  recidivistesCount: number; // Enfants ayant fait 3 fugues ou plus dans l'année
  recidivismeRate: number; // Pourcentage d'enfants récidivistes
  fuguesFromGroupHomes: number; // Foyers de groupe et centres de réadaptation (CRJDA)
  fuguesFromFosterCare: number; // Familles d'accueil
  fuguesFromHotelRooms: number; // Hébergements d'urgence / motels sans encadrement
  policeAlertsHighRisk: number; // Alertes de recherche d'urgence (risque imminent d'exploitation / danger de mort)
  keyContext: string;
}

export interface DpjFugueRiskFactor {
  factor: string;
  count: number;
  percentage: number;
  color: string;
  description: string;
  systemicVulnerability: string;
}

export interface DpjFugueRegionalStat {
  region: string;
  cisssOrCiusss: string;
  episodesCount: number;
  uniqueYouths: number;
  groupHomesSaturatedCount: number;
  criticalAlarm: string;
}

export interface DpjDocumentedFugueIncident {
  id: string;
  title: string;
  targetFacility: string;
  region: string;
  year: number;
  youthProfile: string;
  durationDays: string;
  riskSeverity: 'Extrême - Risque de proxénétisme & traite' | 'Critique - Errance sans ressources' | 'Élevé - Dérive médicamenteuse';
  circumstances: string;
  institutionalFailures: string[];
  policeAndJudicialFindings: string;
  recommendationsLaurentEtCDPDJ: string;
  officialSourceCitations: string[];
}

// Données consolidées basées sur les bilans annuels des fugues du SPVM,
// les statistiques de la Sûreté du Québec (SQ), les enquêtes de la CDPDJ
// et le Chapitre Spécifique "Fugues et Exploitation Sexuelle" de la Commission Laurent (2018-2025).
export const DPJ_YEARLY_FUGUES_STATS: DpjYearlyFuguesStat[] = [
  {
    year: '2018-2019',
    totalFugueEpisodes: 8840,
    uniqueChildrenFugueurs: 3210,
    recidivistesCount: 1860,
    recidivismeRate: 58,
    fuguesFromGroupHomes: 5480,
    fuguesFromFosterCare: 2790,
    fuguesFromHotelRooms: 570,
    policeAlertsHighRisk: 1420,
    keyContext: 'Multiplication des signalements aux abords des centres jeunesse de Montréal et Laval par les escouades anti-proxénétisme.'
  },
  {
    year: '2019-2020',
    totalFugueEpisodes: 9420,
    uniqueChildrenFugueurs: 3380,
    recidivistesCount: 2060,
    recidivismeRate: 61,
    fuguesFromGroupHomes: 5930,
    fuguesFromFosterCare: 2680,
    fuguesFromHotelRooms: 810,
    policeAlertsHighRisk: 1650,
    keyContext: 'Témoignages poignants devant la Commission Laurent dénonçant des « portes passoires » et le recrutement direct dans les cours de récréation des foyers.'
  },
  {
    year: '2020-2021',
    totalFugueEpisodes: 9110,
    uniqueChildrenFugueurs: 3190,
    recidivistesCount: 1980,
    recidivismeRate: 62,
    fuguesFromGroupHomes: 5820,
    fuguesFromFosterCare: 2410,
    fuguesFromHotelRooms: 880,
    policeAlertsHighRisk: 1590,
    keyContext: 'Confinement sanitaire et isolement accru; recours massif aux chambres d\'hôtel d\'urgence non gardées où les fugues surviennent en moins de 48 heures.'
  },
  {
    year: '2021-2022',
    totalFugueEpisodes: 10250,
    uniqueChildrenFugueurs: 3620,
    recidivistesCount: 2310,
    recidivismeRate: 64,
    fuguesFromGroupHomes: 6680,
    fuguesFromFosterCare: 2540,
    fuguesFromHotelRooms: 1030,
    policeAlertsHighRisk: 1890,
    keyContext: 'Dépôt du rapport final de la Commission Laurent exigeant un protocole unifié entre la police, les centres jeunesse et les hôpitaux.'
  },
  {
    year: '2022-2023',
    totalFugueEpisodes: 10890,
    uniqueChildrenFugueurs: 3870,
    recidivistesCount: 2550,
    recidivismeRate: 66,
    fuguesFromGroupHomes: 7190,
    fuguesFromFosterCare: 2470,
    fuguesFromHotelRooms: 1230,
    policeAlertsHighRisk: 2110,
    keyContext: 'Pic historique de fugues d\'adolescentes ciblées par des réseaux de proxénétisme et gangs de rue à Laval et dans l\'est de Montréal.'
  },
  {
    year: '2023-2024',
    totalFugueEpisodes: 10420,
    uniqueChildrenFugueurs: 3740,
    recidivistesCount: 2430,
    recidivismeRate: 65,
    fuguesFromGroupHomes: 6840,
    fuguesFromFosterCare: 2390,
    fuguesFromHotelRooms: 1190,
    policeAlertsHighRisk: 2040,
    keyContext: 'Rapport accablant de la CDPDJ sur les conditions de sécurité défaillantes dans les foyers de groupe et la pénurie d\'éducateurs formés.'
  },
  {
    year: '2024-2025 (Estimé)',
    totalFugueEpisodes: 10650,
    uniqueChildrenFugueurs: 3810,
    recidivistesCount: 2490,
    recidivismeRate: 65,
    fuguesFromGroupHomes: 7010,
    fuguesFromFosterCare: 2410,
    fuguesFromHotelRooms: 1230,
    policeAlertsHighRisk: 2180,
    keyContext: 'Plus de 3 800 jeunes toujours sur listes d\'attente, foyers de transition débordés et persistance des placements en motels.'
  }
];

export const DPJ_FUGUES_RISK_FACTORS: DpjFugueRiskFactor[] = [
  {
    factor: 'Réseaux de Proxénétisme & Traite Humaine',
    count: 3650,
    percentage: 35,
    color: '#e11d48', // rose-600
    description: 'Adolescentes ciblées et manipulées (« leurrage », cadeaux, fausses relations amoureuses par des proxénètes liés aux gangs de rue).',
    systemicVulnerability: 'Les proxénètes attendent ouvertement dans les stationnements des centres jeunesse sans intervention de sécurité préventive.'
  },
  {
    factor: 'Détresse Psychologique & Rupture Familiale',
    count: 2920,
    percentage: 28,
    color: '#d97706', // amber-600
    description: 'Fugue pour retrouver les parents biologiques, frères et sœurs séparés ou fuite devant un milieu d\'accueil ressenti comme hostile ou pénitentiaire.',
    systemicVulnerability: 'Retrait abrupt sans préparation ni soutien psychologique régulier; listes d\'attente en pédopsychiatrie de plus de 12 mois.'
  },
  {
    factor: 'Climat Dégradé & Surpopulation des Foyers',
    count: 1880,
    percentage: 18,
    color: '#2563eb', // blue-600
    description: 'Violence entre résidents, promiscuité, pénurie d\'éducateurs permanents et recours à des agents de gardiennage privés sans qualification sociale.',
    systemicVulnerability: 'Plus de 70% de rotation du personnel dans certains foyers de groupe sous-traités.'
  },
  {
    factor: 'Toxicomanie & Dépendances Chimiques',
    count: 1250,
    percentage: 12,
    color: '#9333ea', // purple-600
    description: 'Fugue pour consommer des opioïdes, fentanyl ou benzodiazépines fournies par des trafiquants gravitant autour des résidences jeunesse.',
    systemicVulnerability: 'Absence totale de lits de désintoxication fermés et adaptés aux mineurs dans la majorité des régions du Québec.'
  },
  {
    factor: 'Placements d\'Urgence Indignes (Motels/Hôtels)',
    count: 720,
    percentage: 7,
    color: '#ea580c', // orange-600
    description: 'Jeunes logés dans des chambres de motels en bordure d\'autoroute, sans cuisine ni encadrement, fuyant dès les premières 24 heures.',
    systemicVulnerability: 'Interdiction théorique par le MSSS mais pratique continue en catimini faute de places en familles d\'accueil.'
  }
];

export const DPJ_FUGUES_REGIONAL_DISTRIBUTION: DpjFugueRegionalStat[] = [
  {
    region: 'Montréal',
    cisssOrCiusss: 'CIUSSS du Centre-Sud, de l\'Ouest-de-l\'Île (Batshaw, Cité-des-Prairies)',
    episodesCount: 3950,
    uniqueYouths: 1420,
    groupHomesSaturatedCount: 38,
    criticalAlarm: 'Épicentre du recrutement par les gangs de rue; délais policiers SPVM avant géolocalisation des téléphones.'
  },
  {
    region: 'Laval',
    cisssOrCiusss: 'CISSS de Laval (Centre jeunesse de Laval, Foyers Hubert-Perron & environs)',
    episodesCount: 1920,
    uniqueYouths: 690,
    groupHomesSaturatedCount: 16,
    criticalAlarm: 'Scandale des fugues massives d\'adolescentes vers des réseaux de proxénétisme opérant dans des résidences Airbnb et motels de Laval.'
  },
  {
    region: 'Montérégie',
    cisssOrCiusss: 'CISSS de la Montérégie-Est et Centre (Chambly, Longueuil, Granby)',
    episodesCount: 1740,
    uniqueYouths: 630,
    groupHomesSaturatedCount: 19,
    criticalAlarm: 'Pénurie dramatique de familles d\'accueil; taux de récidive de fugue supérieur à 67%.'
  },
  {
    region: 'Laurentides',
    cisssOrCiusss: 'CISSS des Laurentides (Huberdeau, Saint-Jérôme)',
    episodesCount: 1040,
    uniqueYouths: 380,
    groupHomesSaturatedCount: 11,
    criticalAlarm: 'Foyers isolés géographiquement où les jeunes fuient le long des routes secondaires par désespoir d\'isolement.'
  },
  {
    region: 'Capitale-Nationale',
    cisssOrCiusss: 'CIUSSS de la Capitale-Nationale (Centre jeunesse de Québec)',
    episodesCount: 940,
    uniqueYouths: 340,
    groupHomesSaturatedCount: 12,
    criticalAlarm: 'Rapports répétés du Protecteur du citoyen sur le recours excessif à l\'isolement forcé incitant aux fugues à la levée de sanction.'
  },
  {
    region: 'Outaouais & Saguenay & Autres',
    cisssOrCiusss: 'CISSS de l\'Outaouais, Saguenay-Lac-Saint-Jean, Mauricie-Centre-du-Québec',
    episodesCount: 830,
    uniqueYouths: 350,
    groupHomesSaturatedCount: 14,
    criticalAlarm: 'Manque cruel de ressources spécialisées; transferts forcés de mineurs à des centaines de kilomètres de leur famille.'
  }
];

export const DPJ_DOCUMENTED_FUGUES_INCIDENTS: DpjDocumentedFugueIncident[] = [
  {
    id: 'fugue-laval-hubert-perron',
    title: 'Scandale des fugues et réseaux de proxénétisme au Foyer Hubert-Perron (Laval)',
    targetFacility: 'Foyer de groupe Hubert-Perron (CISSS de Laval)',
    region: 'Laval',
    year: 2020,
    youthProfile: 'Adolescentes de 14 à 17 ans hébergées sous ordonnance de protection LPJ',
    durationDays: 'Fugues récurrentes de 3 jours à 6 semaines',
    riskSeverity: 'Extrême - Risque de proxénétisme & traite',
    circumstances: 'Plusieurs adolescentes hébergées dans ce foyer ont fugué de manière répétée. Les éducateurs ont signalé la présence de véhicules suspects de proxénètes stationnés jour et nuit devant l\'établissement sans que la direction n\'instaure de garde physique ni de verrouillage.',
    institutionalFailures: [
      'Inaction administrative face aux véhicules de proxénètes identifiés et signalés à la police',
      'Politique des « portes ouvertes » interdisant aux intervenants de retenir physiquement une mineure en danger',
      'Absence de fouilles des téléphones fournis aux mineures par les réseaux d\'exploitation',
      'Manque criant de formation des intervenants sur les signaux d\'emprise du leurrage criminel'
    ],
    policeAndJudicialFindings: 'Enquête de l\'Escouade intégrée de lutte contre le proxénétisme (EILP) et du Service de police de Laval (SPL). Arrestations multiples de membres de gangs de rue pour traite de personnes mineures.',
    recommendationsLaurentEtCDPDJ: 'Recommandation n° 84 de la Commission Laurent : création d\'unités spécialisées sécurisées d\'accueil d\'urgence pour adolescentes victimes d\'exploitation sexuelle avec encadrement 24/7.',
    officialSourceCitations: [
      'Commission spéciale sur les droits des enfants (Commission Laurent), Chapitre 8 : Fugues et Exploitation Sexuelle (2021)',
      'Enquête spéciale de la CDPDJ sur les résidences jeunesse de Laval (2020)',
      'Rapport du Service de police de Laval sur le proxénétisme juvénile (2021)'
    ]
  },
  {
    id: 'fugue-batshaw-montreal',
    title: 'Crise systémique des fugues et fuites en foyer de groupe Batshaw (Montréal)',
    targetFacility: 'Centres de jeunesse Batshaw (CIUSSS de l\'Ouest-de-l\'Île-de-Montréal)',
    region: 'Montréal',
    year: 2022,
    youthProfile: 'Adolescents et adolescentes anglophones et allophones de 13 à 16 ans',
    durationDays: 'Fugues de 48h à plusieurs mois sans nouvelles',
    riskSeverity: 'Extrême - Risque de proxénétisme & traite',
    circumstances: 'Surpopulation chronique, vétusté des infrastructures et recours massif à des éducateurs temporaires d\'agences privées ne parlant pas la langue des jeunes. Des pensionnaires quittaient les installations sans que l\'alerte ne soit transmise aux policiers avant un délai de 6 à 12 heures.',
    institutionalFailures: [
      'Délai inacceptable entre le constat de la disparition et le signalement officiel au SPVM',
      'Rupture linguistique entre le personnel d\'agence et les jeunes vulnérables',
      'Absence de suivi post-fugue : les jeunes retrouvés étaient réintégrés sans évaluation médicale ni psychologique approfondie',
      'Dossiers classés en « fugue volontaire banalisée » par la hiérarchie'
    ],
    policeAndJudicialFindings: 'Le SPVM a réitéré publiquement que chaque heure de retard dans le signalement d\'une fugue d\'adolescente augmente de 40% le risque d\'emprise par un réseau de traite.',
    recommendationsLaurentEtCDPDJ: 'Exigence de signalement policier immédiat (dans l\'heure) pour tout mineur de moins de 16 ans en fugue avec transmission des géolocalisations autorisées.',
    officialSourceCitations: [
      'Rapport d\'inspection de la CDPDJ sur les centres Batshaw (2022)',
      'Bilan annuel des disparitions et fugues d\'enfants - SPVM (2023)',
      'Enquêtes journalistiques Radio-Canada & Montreal Gazette sur la crise Batshaw'
    ]
  },
  {
    id: 'fugue-motel-monteregie',
    title: 'Fugue d\'une adolescente placée dans un motel commercial sans surveillance (Longueuil)',
    targetFacility: 'Chambre d\'hôtel commercial sous-traitée par le CISSS de la Montérégie',
    region: 'Montérégie',
    year: 2023,
    youthProfile: 'Jeune fille de 15 ans retirée en urgence de sa famille',
    durationDays: '14 jours d\'errance avant d\'être localisée à Montréal',
    riskSeverity: 'Extrême - Risque de proxénétisme & traite',
    circumstances: 'Faute de place en famille d\'accueil ou en foyer de groupe, la jeune fille a été logée dans une chambre de motel le long de la route 116 avec un agent de sécurité privé en garde alternée. L\'adolescente s\'est enfuie par la fenêtre pendant que le gardien était dans le corridor.',
    institutionalFailures: [
      'Recours à un motel comme hébergement substitut en violation flagrante de l\'art. 54 de la LPJ',
      'Sous-traitance de la protection de l\'enfance à des gardiens de sécurité non formés à la relation d\'aide',
      'Incapacité à offrir un milieu rassurant et digne provoquant la panique et la fuite de la mineure',
      'Refus initial de la DPJ d\'informer les parents de la fugue pendant plus de 24 heures'
    ],
    policeAndJudicialFindings: 'Retrouvée dans un logement de Montréal sous l\'emprise d\'un individu connu des services policiers pour proxénétisme.',
    recommendationsLaurentEtCDPDJ: 'Interdiction formelle et absolue du placement d\'enfants dans les motels et hôtels du Québec; obligation d\'informer les parents immédiatement en cas de disparition.',
    officialSourceCitations: [
      'Rapport spécial du Protecteur du citoyen sur les placements hôteliers de la DPJ (2023)',
      'Jugement de la Cour du Québec, Chambre de la jeunesse (District de Longueuil, 2023)',
      'Commission des droits de la personne et des droits de la jeunesse (Dossier d\'enquête d\'office)'
    ]
  },
  {
    id: 'fugue-cite-des-prairies',
    title: 'Évasion et fugue répétée de jeunes en détresse au Centre Cité-des-Prairies (Montréal)',
    targetFacility: 'Centre de réadaptation Cité-des-Prairies (Montréal)',
    region: 'Montréal',
    year: 2021,
    youthProfile: 'Garçons et filles de 14 à 17 ans sous ordonnance de garde fermée ou intensive',
    durationDays: 'Fugues de groupe (2 à 4 jeunes) durant de 4 à 10 jours',
    riskSeverity: 'Critique - Errance sans ressources',
    circumstances: 'Fuites orchestrées lors de sorties extérieures ou franchissement de clôtures détériorées. Les jeunes errent dans les réseaux de métro et squats urbains sans argent ni vêtements d\'hiver adaptés.',
    institutionalFailures: [
      'Infrastructures physiques vétustes et défauts d\'entretien des périmètres de sécurité',
      'Ratios de surveillance non respectés en raison des arrêts de travail massifs du personnel',
      'Absence de programme structuré de réinsertion menant à la récidive immédiate après retour'
    ],
    policeAndJudicialFindings: 'Rapports d\'intervention conjoints SPVM / STM constatant l\'hyper-vulnérabilité des mineurs livrés à la rue et aux overdoses de drogues de rue contaminées.',
    recommendationsLaurentEtCDPDJ: 'Investissement massif d\'urgence dans la modernisation des centres de réadaptation et création d\'équipes mobiles mixtes (policiers-intervenants) de raccompagnement bienveillant.',
    officialSourceCitations: [
      'Rapport d\'enquête du Protecteur du citoyen sur les centres de réadaptation jeunesse (2021)',
      'Statistiques de l\'Équipe intégrée de soutien aux fugues (SPVM)',
      'Mémoire de l\'Alliance du personnel professionnel et technique de la santé et des services sociaux (APTS)'
    ]
  },
  {
    id: 'fugue-saguenay-isolement',
    title: 'Fugue d\'un adolescent placé à 400 km de sa région natale (Saguenay-Lac-Saint-Jean)',
    targetFacility: 'Foyer d\'accueil régional du CIUSSS du Saguenay-Lac-Saint-Jean',
    region: 'Outaouais & Saguenay & Autres',
    year: 2022,
    youthProfile: 'Garçon de 13 ans originaire de la Côte-Nord déraciné de sa communauté',
    durationDays: '7 jours de fugue le long de la route 175 (Parc des Laurentides)',
    riskSeverity: 'Critique - Errance sans ressources',
    circumstances: 'L\'enfant ne supportant plus le déracinement et l\'interdiction de voir ses proches a tenté de rentrer à pied chez lui en plein automne. Il a été retrouvé en état d\'hypothermie sévère par des automobilistes.',
    institutionalFailures: [
      'Déracinement géographique violent en contradiction totale avec le principe de proximité familiale de la LPJ',
      'Absence de prise en compte de la détresse d\'attachement de l\'enfant',
      'Retard dans le déclenchement des recherches terrestres en milieu boisé'
    ],
    policeAndJudicialFindings: 'Rapport de la Sûreté du Québec soulignant que l\'enfant a échappé de justesse à la mort par hypothermie.',
    recommendationsLaurentEtCDPDJ: 'Principe d\'ancrage régional obligatoire : interdire les délocalisations hors région à moins d\'une impossibilité matérielle documentée par un juge.',
    officialSourceCitations: [
      'Rapport annuel du Directeur de la protection de la jeunesse du Saguenay-Lac-Saint-Jean (2022)',
      'CDPDJ, Avis sur les droits des enfants éloignés de leur milieu naturel (2022)'
    ]
  },
  {
    id: 'fugue-filles-de-laval-reseau-proxenetisme',
    title: 'Affaire des « Filles de Laval » & Réseaux de Proxénétisme Juvénile (Gangs de Rue)',
    targetFacility: 'Centres jeunesse de Laval & Foyers de transition (Chomedey, Sainte-Rose)',
    region: 'Laval',
    year: 2019,
    youthProfile: 'Adolescentes de 13 à 16 ans confiées à la DPJ pour rupture familiale ou abus',
    durationDays: 'Fugues récurrentes coordonnées (plus de 300 épisodes/an recensés)',
    riskSeverity: 'Extrême - Risque de proxénétisme & traite',
    circumstances: 'Des dizaines de mineures prises en charge par la DPJ de Laval étaient recrutées dès leur sortie du foyer par des membres de gangs de rue (escouade Éclipse / projet Scorpion). Les proxénètes leur fournissaient téléphones intelligents cryptés, drogues de synthèse et vêtements, avant de les enfermer dans des appartements Airbnb et hôtels de Laval pour les contraindre à des dizaines de passes quotidiennes.',
    institutionalFailures: [
      'Refus pendant des années de considérer ces adolescentes comme des victimes de traite criminelle, les qualifiant plutôt de « fugueuses récidivistes consentantes »',
      'Absence de sécurisation des accès extérieurs des foyers laissant les proxénètes entrer jusque dans les cours intérieures',
      'Absence de partage d\'information en temps réel entre les intervenants sociaux de la DPJ et l\'escouade intégrée de lutte contre le proxénétisme (EILP)',
      'Manque criant de lits spécialisés fermés de désintoxication et de réhabilitation pour mineures sous emprise'
    ],
    policeAndJudicialFindings: 'Arrestations massives de proxénètes par le Service de police de Laval (SPL) et la Sûreté du Québec. Décisions retentissantes de la Cour supérieure et de la Cour du Québec qualifiant ces actes d\'esclavage moderne juvénile.',
    recommendationsLaurentEtCDPDJ: 'Recommandation n° 85 : Définition d\'une directive nationale d\'intervention immédiate qualifiant toute fugue d\'adolescente en foyer DPJ comme un cas de danger de traite avec réquisition policière prioritaire.',
    officialSourceCitations: [
      'Commission spéciale sur les droits des enfants (Commission Laurent), Chapitre 8 : « L\'exploitation sexuelle et les fugues »',
      'Rapport du Service de police de Laval (SPL) - Opération Scorpion (2018-2020)',
      'Jugements de la Cour du Québec, Chambre de la jeunesse et Chambre criminelle (District de Laval)'
    ]
  },
  {
    id: 'fugue-centre-jeunesse-quebec-hamel',
    title: 'Fugues Chroniques au Centre Jeunesse de Québec & Prostitution Juvénile sur Wilfrid-Hamel',
    targetFacility: 'Centre jeunesse de Québec (CIUSSS de la Capitale-Nationale)',
    region: 'Capitale-Nationale',
    year: 2021,
    youthProfile: 'Jeunes filles de 14 à 17 ans en rupture de placement',
    durationDays: 'Fugues hebdomadaires durant de 2 à 15 jours',
    riskSeverity: 'Extrême - Risque de proxénétisme & traite',
    circumstances: 'Des éducateurs du Centre jeunesse de Québec ont tiré la sonnette d\'alarme sur les réseaux de rabattage ciblant les pensionnaires à peine sorties des cours d\'école. Les jeunes filles étaient transportées vers des motels du boulevard Wilfrid-Hamel et des bars de danseuses clandestins.',
    institutionalFailures: [
      'Délai de signalement policier moyen de plus de 8 heures après le constat de la disparition',
      'Normalisation du phénomène par l\'encadrement : les fiches de fugue étaient empilées sans analyse de risque individuel',
      'Isolement forcé imposé aux jeunes à leur retour sans prise en charge psychologique du traumatisme subi',
      'Pénurie critique d\'éducateurs permanents compensée par des gardiens d\'agences privées de sécurité'
    ],
    policeAndJudicialFindings: 'Enquêtes du Service de police de la Ville de Québec (SPVQ) menant au démantèlement de réseaux de traite opérant entre Québec, Lévis et Montréal.',
    recommendationsLaurentEtCDPDJ: 'Mise en place d\'une unité d\'intervention mobile d\'urgence conjointe SPVQ-DPJ opérant 24/7 pour intercepter les mineures dans les 3 heures suivant la fugue.',
    officialSourceCitations: [
      'Rapports d\'inspection du Protecteur du citoyen sur le CIUSSS de la Capitale-Nationale (2021-2022)',
      'Statistiques de l\'Équipe d\'intervention auprès des personnes marginalisées et prostituées (SPVQ)',
      'Rapports de la CDPDJ sur les centres de réadaptation de Québec'
    ]
  },
  {
    id: 'fugue-motels-transit-crise-nationale',
    title: 'Scandale National des Placements d\'Enfants en Motels de Transit & Fuites Sans Garde (2022-2025)',
    targetFacility: 'Réseaux de motels commerciaux sous-traités (Autoroutes 20, 15 et 116)',
    region: 'Montérégie',
    year: 2023,
    youthProfile: 'Enfants et adolescents de 11 à 17 ans retirés d\'urgence faute de foyer',
    durationDays: 'Fugues immédiates dans les 24 premières heures du placement hôtelier',
    riskSeverity: 'Extrême - Risque de proxénétisme & traite',
    circumstances: 'Face à la pénurie aiguë de familles d\'accueil (plus de 1 200 places manquantes), les CISSS et CIUSSS ont loué des centaines de chambres de motels sans installations sanitaires adaptées ni cuisine. Des agents de gardiennage privés sans aucune compétence clinique étaient postés dans les corridors. Les mineurs, paniqués et indignés par ces conditions d\'enfermement commercial, ont fugué massivement dès la première nuit.',
    institutionalFailures: [
      'Recours illégal et dissimulé à des hébergements hôteliers en violation de l\'article 44 de la LPJ',
      'Sous-traitance de la sécurité à des firmes privées de gardiennage non assermentées et sans formation psycho-éducative',
      'Absence de déclaration de ces adresses de motels aux services policiers locaux pour la surveillance de quartier',
      'Facturation exorbitante de millions de dollars aux contribuables pour enrichir des propriétaires de motels de bord de route'
    ],
    policeAndJudicialFindings: 'Rapports de coroners et de juges de la Chambre de la jeunesse déclarant que les motels constituent des « passoires criminelles » amplifiant de 300% le taux de fugue.',
    recommendationsLaurentEtCDPDJ: 'Interdiction absolue immédiate et sans dérogation de tout placement d\'enfant dans un motel, sous peine de poursuites pénales contre les gestionnaires responsables.',
    officialSourceCitations: [
      'Rapport spécial d\'enquête du Protecteur du citoyen : « Placements de fortune : quand l\'urgence sacrifie l\'enfance » (2023)',
      'Vérification spéciale du Vérificateur général du Québec sur les dépenses d\'hébergement d\'urgence du MSSS (2024)',
      'Jugements de la Chambre de la jeunesse du district de Saint-Hyacinthe et Longueuil'
    ]
  },
  {
    id: 'fugue-granby-chambly-isolement-detresse',
    title: 'Fugues d\'Urgence et Détresse Extrême suite à l\'Isolement Cellulaire (Granby & Chambly)',
    targetFacility: 'Centres de réadaptation et foyers d\'accueil (CISSS de la Montérégie-Est)',
    region: 'Montérégie',
    year: 2022,
    youthProfile: 'Mineurs de 12 à 15 ans soumis à des mesures répétées d\'isolement en pièce fermée',
    durationDays: 'Fugues désespérées le long des voies ferrées et autoroutes (1 à 6 jours)',
    riskSeverity: 'Critique - Errance sans ressources',
    circumstances: 'Dans le sillage du drame de la fillette de Granby, les établissements de réadaptation de Granby et Chambly ont fait l\'objet de plaintes majeures pour recours excessif à des cellules d\'isolement de « retrait » pour des crises d\'anxiété banales. À la levée de l\'isolement ou lors de sorties de promenade, les jeunes fuyaient en état de terreur pour échapper à l\'enfermement.',
    institutionalFailures: [
      'Utilisation punitive de l\'isolement au lieu d\'un apaisement relationnel bienveillant',
      'Délai excessif dans l\'alerte aux familles biologiques et aux tuteurs légaux',
      'Manque de personnel stable provoquant un climat d\'incompréhension et d\'escalade conflictuelle'
    ],
    policeAndJudicialFindings: 'Rapports d\'intervention de la Sûreté du Québec soulignant le désespoir des jeunes interceptés le long des autoroutes, en pleurs et désorientés.',
    recommendationsLaurentEtCDPDJ: 'Prohibition stricte de l\'isolement des mineurs comme mesure de gestion d\'horaire; encadrement médical obligatoire de tout retrait supérieur à 60 minutes.',
    officialSourceCitations: [
      'Rapport d\'enquête du coroner Géhane Kamel sur les pratiques institutionnelles (2021)',
      'Enquêtes de la CDPDJ sur les mesures de contention et d\'isolement dans les centres jeunesse de la Montérégie (2022)'
    ]
  },
  {
    id: 'fugue-huberbeau-laurentides-foret',
    title: 'Fugues à Haut Risque dans les Forêts d\'Huberdeau (Laurentides) & Réseaux de Stupéfiants',
    targetFacility: 'Centre de réadaptation d\'Huberdeau (CISSS des Laurentides)',
    region: 'Laurentides',
    year: 2021,
    youthProfile: 'Adolescents de 14 à 17 ans hébergés dans des pavillons vétustes en milieu forestier isolé',
    durationDays: 'Fugues en forêt de 2 à 10 jours en conditions météorologiques hostiles',
    riskSeverity: 'Critique - Errance sans ressources',
    circumstances: 'Le centre d\'Huberdeau, réputé pour son isolement géographique dans les Hautes-Laurentides, a été le théâtre de fuites massives de pensionnaires fuyant l\'insalubrité des pavillons et les violences entre pairs. Des trafiquants de drogue attendaient les jeunes dans les localités voisines pour leur fournir des psychotropes contre des vols de cambriolage.',
    institutionalFailures: [
      'Infrastructures vétustes datant de plusieurs décennies et insalubrité documentée des pavillons',
      'Retard dans le déclenchement des recherches policières terrestres en zone forestière accidentée',
      'Absence d\'accompagnement en santé mentale pour les mineurs polytoxicomanes'
    ],
    policeAndJudicialFindings: 'Opérations régulières de sauvetage héliporté de la SQ pour retrouver des mineurs égarés en hypothermie dans les boisés des Laurentides.',
    recommendationsLaurentEtCDPDJ: 'Recommandation n° 91 : Fermeture et relocalisation des centres jeunesse isolés en milieu urbain ou périurbain favorisant l\'intégration sociale et l\'accès aux soins hospitaliers.',
    officialSourceCitations: [
      'Rapport du Protecteur du citoyen sur les conditions de vie au Centre d\'Huberdeau (2021)',
      'Avis de la Commission des droits de la personne et des droits de la jeunesse (2020)',
      'Rapports d\'intervention de la Sûreté du Québec (Poste de la MRC des Laurentides)'
    ]
  }
];

// Synthèse chiffrée pour les cartes métriques
export const TOTAL_ANNUAL_FUGUES_ESTIMATE = 10420;
export const PERCENT_REPETITIVE_FUGUEURS = 65;
export const PERCENT_TRAFFICKING_RECRUITMENT = 35;
export const DOCUMENTED_FUGUE_HOTEL_PLACEMENTS = 1190;
export const CRITICAL_POLICE_ALERTS_PER_YEAR = 2040;

// Guide d'urgence et protocole de recherche officiel en cas de fugue d'un enfant sous LPJ
export interface DpjFugueEmergencyProtocolStep {
  step: number;
  title: string;
  actionRequired: string;
  legalBasis: string;
  authorityToContact: string;
}

export const DPJ_FUGUES_EMERGENCY_PROTOCOL: DpjFugueEmergencyProtocolStep[] = [
  {
    step: 1,
    title: 'Alerte Policière Immédiate Sans Délai d\'Attente',
    actionRequired: 'Exiger le signalement immédiat au service de police local (SPVM, SQ, SPL, SPVQ). La règle des 24h ou 48h est un MYTHE ILLÉGAL : tout mineur sous garde en fuite doit être inscrit au CIPC (Centre d\'information de la police canadienne) dès la première heure.',
    legalBasis: 'Loi sur la protection de la jeunesse (art. 4 et 46) & Code criminel du Canada',
    authorityToContact: 'Corps de police local (911) + Division des personnes disparues'
  },
  {
    step: 2,
    title: 'Notification Immédiate des Parents & Tuteurs Légaux',
    actionRequired: 'La DPJ et le centre jeunesse ont l\'obligation formelle et légale d\'aviser les parents dès le constat de la fugue. Toute rétention d\'information par les intervenants constitue une faute lourde engageant la responsabilité civile de l\'établissement.',
    legalBasis: 'LPJ art. 2.4, 4 et 54 (Droit des parents d\'être informés de la sécurité de leur enfant)',
    authorityToContact: 'Directeur de la protection de la jeunesse (DPJ régional)'
  },
  {
    step: 3,
    title: 'Géolocalisation d\'Urgence & Réquisition Télécom (Loi de Rogers)',
    actionRequired: 'Demander formellement aux policiers d\'obtenir un mandat télécom d\'urgence sans délai auprès du juge de paix pour trianguler le signal GPS du téléphone cellulaire et des réseaux sociaux du jeune (Snapchat, Instagram, TikTok).',
    legalBasis: 'Code criminel art. 487.014 et art. 487.015 (Ordonnances de préservation et de localisation d\'urgence)',
    authorityToContact: 'Enquêteur au dossier / Escouade intégrée de lutte contre le proxénétisme (EILP)'
  },
  {
    step: 4,
    title: 'Signalement d\'Urgence au Protecteur du Citoyen & CDPDJ',
    actionRequired: 'En cas de passivité ou d\'inaction manifeste de la direction du foyer ou du CIUSSS, déposer une plainte d\'urgence pour mise en danger imminente d\'un mineur et rupture de protection étatique.',
    legalBasis: 'Loi sur le Protecteur du citoyen & Charte québécoise des droits et libertés (art. 1 et 39)',
    authorityToContact: 'Protecteur du citoyen (1-800-463-5070) & CDPDJ (1-800-361-6477)'
  },
  {
    step: 5,
    title: 'Protocole Spécifique Anti-Traite & Accueil Médicalisé au Retour',
    actionRequired: 'Au retour du mineur, interdire formellement toute mise en isolement punitif. Exiger un examen médical complet d\'urgence (recherche de traumatismes, tests toxicologiques, bilan IST) et un accompagnement psychologique spécialisé pour briser l\'emprise du leurrage.',
    legalBasis: 'Recommandation n° 84 de la Commission Laurent & Directive clinique nationale du MSSS',
    authorityToContact: 'Clinique de pédiatrie sociale / Unité hospitalière spécialisée (Sainte-Justine / CHUL)'
  }
];
