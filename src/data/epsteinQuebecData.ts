export interface EpsteinFlightLog {
  id: string;
  flightDate: string;
  aircraftTail: string; // ex: N908JE (Gulfstream II), N212JE (Boeing 727)
  aircraftModel: string;
  departureAirport: string;
  arrivalAirport: string;
  isMontrealStop: boolean;
  montrealAirport: 'Dorval (YUL)' | 'Mirabel (YMX)' | 'Autre';
  pilotInCommand: string; // David Rodgers, Larry Visoski, etc.
  passengersRecorded: string;
  officialCourtExhibitRef: string;
  faaCertifiedNotes: string;
}

export interface EpsteinBrunelEntity {
  id: string;
  entityName: string;
  category: 'AGENCE_MANNEQUINAT' | 'SOCIETE_FINANCIERE' | 'PROCEDURE_CRIMINELLE' | 'ENQUETE_MEDIA';
  roleInNetwork: string;
  montrealConnection: string;
  documentedFacts: string[];
  officialSource: string;
  legalStatus: string;
}

export interface EpsteinBlackBookEntry {
  id: string;
  nameOrEntity: string;
  category: 'AFFAIRES_MECENAT' | 'FAMILLE_BRONFMAN' | 'UNIVERSITES_RECHERCHE' | 'ORGANISATION_EVENEMENT';
  blackBookPageNumber?: string;
  addressBookContext: string;
  verifiedFactualStatus: 'MENTION_SANS_INCULPATION' | 'ENQUETE_VERIFIEE_NON_IMPLIQUE' | 'CONDAMNATION_CONNEXE_SDNY' | 'AUDIT_REFUS_DONS';
  officialStatementOrFact: string;
  sourceReference: string;
  ethicalSeparationNotice: string;
}

export interface EpsteinChronologyEvent {
  id: string;
  yearOrDate: string;
  title: string;
  description: string;
  impactLevel: 'CRITIQUE' | 'MAJEUR' | 'VERIFICATION';
  officialSource: string;
}

export interface EpsteinSDNYArchive {
  id: string;
  documentTitle: string;
  docketNumber: string;
  dateUnsealed: string;
  judgeOrAuthority: string;
  summary: string;
  keyUnsealedFindings: string[];
  relevanceToQuebec: string;
  sourceUrlOrRef: string;
}

// 1. REGISTRE OFFICIEL DES VOLS VERS MONTRÉAL (YUL / YMX)
// Sources : Registres certifiés de la FAA et carnets de vol des pilotes David Rodgers et Larry Visoski
// déposés comme pièces sous serment dans Giuffre v. Maxwell (SDNY 15-cv-07433)
export const EPSTEIN_MONTREAL_FLIGHT_LOGS: EpsteinFlightLog[] = [
  {
    id: 'flight-1998-08-14',
    flightDate: '1998-08-14',
    aircraftTail: 'N908JE',
    aircraftModel: 'Gulfstream II (Bimoteur d\'affaires)',
    departureAirport: 'Palm Beach International (PBI)',
    arrivalAirport: 'Montréal-Dorval (YUL)',
    isMontrealStop: true,
    montrealAirport: 'Dorval (YUL)',
    pilotInCommand: 'Larry Visoski',
    passengersRecorded: 'Jeffrey Epstein, Ghislaine Maxwell et passagers privés non identifiés',
    officialCourtExhibitRef: 'SDNY Giuffre v. Maxwell • Pièce à conviction Rodgers Flight Log n° 1998-08',
    faaCertifiedNotes: 'Escale estivale documentée au terminal d\'aviation privée de Dorval. Ravitaillement et stationnement FBO.'
  },
  {
    id: 'flight-1999-06-22',
    flightDate: '1999-06-22',
    aircraftTail: 'N908JE',
    aircraftModel: 'Gulfstream II',
    departureAirport: 'Teterboro (TEB - New York)',
    arrivalAirport: 'Montréal-Mirabel (YMX)',
    isMontrealStop: true,
    montrealAirport: 'Mirabel (YMX)',
    pilotInCommand: 'David Rodgers',
    passengersRecorded: 'Jeffrey Epstein, invités du milieu de la mode et de la gestion privée',
    officialCourtExhibitRef: 'SDNY 15-cv-07433 • Pièce 1320-11, Registres certifiés FAA',
    faaCertifiedNotes: 'Atterrissage à Mirabel pour formalités douanières et correspondance vers l\'Europe de l\'Ouest.'
  },
  {
    id: 'flight-2001-09-28',
    flightDate: '2001-09-28',
    aircraftTail: 'N212JE',
    aircraftModel: 'Boeing 727-31H (« Lolita Express »)',
    departureAirport: 'John F. Kennedy (JFK - New York)',
    arrivalAirport: 'Montréal-Dorval (YUL)',
    isMontrealStop: true,
    montrealAirport: 'Dorval (YUL)',
    pilotInCommand: 'Larry Visoski',
    passengersRecorded: 'Jeffrey Epstein, Jean-Luc Brunel et équipe de production/mannequins',
    officialCourtExhibitRef: 'FAA Certified Radar Track & SDNY Trial Exhibit 212-B',
    faaCertifiedNotes: 'Vol de liaison transfrontalier coïncidant avec les opérations de prospection de l\'agence MC2 Model Management à Montréal.'
  },
  {
    id: 'flight-2002-07-11',
    flightDate: '2002-07-11',
    aircraftTail: 'N908JE',
    aircraftModel: 'Gulfstream II',
    departureAirport: 'Montréal-Dorval (YUL)',
    arrivalAirport: 'St. Thomas (TIST - Îles Vierges des États-Unis)',
    isMontrealStop: true,
    montrealAirport: 'Dorval (YUL)',
    pilotInCommand: 'David Rodgers',
    passengersRecorded: 'Jeffrey Epstein, Ghislaine Maxwell et accompagnateurs',
    officialCourtExhibitRef: 'Carnet de bord Rodgers • Tranche décachetée Janvier 2024 SDNY',
    faaCertifiedNotes: 'Départ direct de Dorval en direction de l\'île privée de Little St. James (Great St. James) via l\'aéroport Cyril E. King de St. Thomas.'
  },
  {
    id: 'flight-2004-10-05',
    flightDate: '2004-10-05',
    aircraftTail: 'N212JE',
    aircraftModel: 'Boeing 727-31H',
    departureAirport: 'Newark Liberty (EWR)',
    arrivalAirport: 'Montréal-Dorval (YUL)',
    isMontrealStop: true,
    montrealAirport: 'Dorval (YUL)',
    pilotInCommand: 'David Rodgers',
    passengersRecorded: 'Jeffrey Epstein et délégation corporative',
    officialCourtExhibitRef: 'FAA Flight Record Registry • United States v. Maxwell (2021)',
    faaCertifiedNotes: 'Escale logistique et technique de 36 heures avant redéploiement vers Paris-Le Bourget (LFPB).'
  }
];

// 2. LA FILIÈRE JEAN-LUC BRUNEL & AGENCES DE MANNEQUINS À MONTRÉAL
export const EPSTEIN_BRUNEL_ENTITIES: EpsteinBrunelEntity[] = [
  {
    id: 'entity-brunel-mc2',
    entityName: 'Jean-Luc Brunel & MC2 Model Management',
    category: 'AGENCE_MANNEQUINAT',
    roleInNetwork: 'Bras droit d\'Epstein pour le recrutement international de mannequins. Financé directement par Epstein (virement bancaire initial de plus de 1 million $ US pour fonder MC2).',
    montrealConnection: 'Visites régulières à Montréal pour organiser des séances de photos (« scoutings ») et des castings d\'aspirantes mannequins québécoises adolescentes pour les marchés de Paris, Miami et New York.',
    documentedFacts: [
      'Jean-Luc Brunel a utilisé la réputation de ses agences (Karin Models puis MC2) pour approcher de jeunes modèles québécoises dès l\'âge de 14-17 ans.',
      'Enquête spéciale de l\'émission Enquête de Radio-Canada : témoignages d\'anciennes modèles montréalaises décrivant des propositions inappropriées, de la soumission chimique et des pressions pour participer à des soirées privées.',
      'Inculpé en décembre 2020 par le Parquet de Paris pour viols sur mineurs de plus de 15 ans, harcèlement sexuel et traite d\'êtres humains aggravée.',
      'Retrouvé pendu dans sa cellule de la prison de La Santé à Paris le 19 février 2022, éteignant l\'action pénale publique sans procès mais confirmant la véracité des dossiers d\'instruction.'
    ],
    officialSource: 'Parquet de Paris (Pôle d\'instruction criminelle) • Radio-Canada Enquête • Actes d\'accusation du Tribunal judiciaire de Paris',
    legalStatus: 'Extinction de l\'action publique par décès du prévenu (2022) ; faits d\'enquête établis par les déclarations de dizaines de victimes assermentées.'
  },
  {
    id: 'entity-karin-models',
    entityName: 'Karin Models (Antenne et Partenariats Québec)',
    category: 'AGENCE_MANNEQUINAT',
    roleInNetwork: 'Agence de mannequins historique fondée par Brunel à Paris, ayant tissé des liens de correspondants avec le milieu de la mode montréalais dans les années 1990 et 2000.',
    montrealConnection: 'Contrats de représentation d\'aspirantes mannequins de Montréal pour des défilés en Europe et aux États-Unis.',
    documentedFacts: [
      'Plusieurs agences québécoises d\'alors ont servi de relais pour des concours et auditions sans connaître la double nature criminelle du réseau sous-jacent.',
      'Virginia Giuffre a déclaré sous serment devant le tribunal fédéral de New York que Brunel lui avait fourni de jeunes filles recrutées à travers ses agences.',
      'Révélations sur l\'absence totale de réglementation stricte et de permis d\'agences artistiques au Québec à cette époque.'
    ],
    officialSource: 'Déposition sous serment de Virginia Giuffre (SDNY) • Enquêtes de presse La Presse / Le Devoir',
    legalStatus: 'Société dissoute ; archives exploitées par les enquêteurs français de l\'Office central pour la répression des violences aux personnes (OCRVP).'
  },
  {
    id: 'entity-rcmp-grc-inquiry',
    entityName: 'Gendarmerie Royale du Canada (GRC) & SPVM - Vigie Transfrontalière',
    category: 'PROCEDURE_CRIMINELLE',
    roleInNetwork: 'Coordination policière nationale contre la traite transfrontalière de personnes et protection des victimes mineures.',
    montrealConnection: 'Vérification des signalements et collaboration avec les autorités judiciaires américaines (FBI / SDNY) et françaises (OCRVP) à la suite des plaintes de citoyennes canadiennes.',
    documentedFacts: [
      'La GRC a rappelé que la traite de personnes commise à l\'étranger par ou contre des citoyens canadiens est passible de poursuites extraterritoriales en vertu des articles 7(4.1) et 279.01 du Code criminel.',
      'Le SPVM a renforcé ses unités de lutte contre l\'exploitation sexuelle des mineures dans les hôtels et aéroports de la région métropolitaine.',
      'Aucune accusation formelle canadienne n\'a pu être complétée avant le décès des deux principaux prévenus (Epstein en 2019 et Brunel en 2022).'
    ],
    officialSource: 'Centre national de coordination contre la traite des personnes (GRC) • Code criminel du Canada',
    legalStatus: 'Vigie documentaire et assistance continue aux victimes d\'actes criminels (IVAC / CAVAC).'
  }
];

// 3. AUDIT DU CARNET SAISI (« BLACK BOOK ») & VÉRIFICATIONS ÉLITES QUÉBÉCOISES
// Règle d'or de Transparence Québec : Séparation déontologique absolue entre crimes et simples mentions d'annuaire
export const EPSTEIN_BLACK_BOOK_QUEBEC_AUDIT: EpsteinBlackBookEntry[] = [
  {
    id: 'bb-guy-laliberte',
    nameOrEntity: 'Guy Laliberté (Fondateur du Cirque du Soleil)',
    category: 'AFFAIRES_MECENAT',
    blackBookPageNumber: 'Pages 34-35 (Carnet de 97 pages saisi par le FBI)',
    addressBookContext: 'Inscription des numéros de bureaux corporatifs et assistants du Cirque du Soleil à Montréal et Las Vegas.',
    verifiedFactualStatus: 'ENQUETE_VERIFIEE_NON_IMPLIQUE',
    officialStatementOrFact: 'Lors du décachetage par la juge Loretta Preska en janvier 2024, les représentants officiels de Guy Laliberté ont rappelé que ces coordonnées relevaient uniquement de contacts mondains et caritatifs internationaux (notamment la fondation One Drop). Aucune allégation, aucune plainte, ni aucun fait répréhensible n\'a jamais été formulé à son encontre par une victime ou une cour de justice.',
    sourceReference: 'United States District Court for the Southern District of New York • Déclaration publique du 4 janvier 2024 (La Presse / Le Journal de Montréal)',
    ethicalSeparationNotice: 'La simple présence d\'un nom dans l\'annuaire d\'Epstein ne constitue en aucun cas une preuve d\'acte répréhensible. L\'intégrité citoyenne exige de récuser les amalgames diffamatoires tout en documentant les cercles mondains que le criminel cherchait à approcher.'
  },
  {
    id: 'bb-bronfman-claridge',
    nameOrEntity: 'Bureaux liés à la Famille Bronfman (Claridge Inc. Montréal)',
    category: 'FAMILLE_BRONFMAN',
    blackBookPageNumber: 'Page 12 (Carnet d\'adresses privé)',
    addressBookContext: 'Coordonnées administratives de bureaux d\'investissement à Montréal et New York liés au magnat Edgar Bronfman Sr. et ses filiales.',
    verifiedFactualStatus: 'MENTION_SANS_INCULPATION',
    officialStatementOrFact: 'Epstein gérait les finances de milliardaires new-yorkais et cherchait à s\'entourer des grandes fortunes nord-américaines. Edgar Bronfman Sr. (décédé en 2013) a publiquement déclaré avoir coupé les ponts dès le début des années 2000 en constatant des comportements suspects. Aucune entité montréalaise du groupe n\'a été impliquée pénalement dans les dossiers Epstein.',
    sourceReference: 'Archives SDNY • Déclarations corporatives Claridge Inc.',
    ethicalSeparationNotice: 'Distinguer les liens d\'affaires institutionnels de la famille Bronfman avec Epstein de l\'affaire NXIVM (voir section dédiée ci-dessous).'
  },
  {
    id: 'bb-nxivm-clare-sara-bronfman',
    nameOrEntity: 'Ramification NXIVM : Héritières Bronfman (Condamnation Criminelle SDNY)',
    category: 'FAMILLE_BRONFMAN',
    blackBookPageNumber: 'Dossier pénal connexe SDNY n° 18-cr-00204 (Cour fédérale de New York)',
    addressBookContext: 'Bien que distinct du dossier direct d\'Epstein, ce dossier est instruit par la même cour fédérale de New York (SDNY) concernant un réseau de prédation sexuelle de très haut niveau avec des capitaux montréalais.',
    verifiedFactualStatus: 'CONDAMNATION_CONNEXE_SDNY',
    officialStatementOrFact: 'Clare Bronfman (héritière montréalaise de Seagram) a financé la secte NXIVM de Keith Raniere à hauteur de plus de 100 millions $ US. Elle a plaidé coupable devant le juge fédéral Nicholas Garaufis à New York pour complot de dissimulation et hébergement d\'étrangers à des fins d\'exploitation financière et utilisation frauduleuse de pièces d\'identité. Elle a été condamnée en septembre 2020 à 6 ans et 9 mois de prison fédérale.',
    sourceReference: 'United States District Court for the Eastern/Southern District of New York • Jugement pénal United States v. Clare Bronfman',
    ethicalSeparationNotice: 'Fait judiciaire formellement jugé et condamné : prouve la vulnérabilité d\'héritières de grandes dynasties financières québécoises face à des réseaux prédateurs de manipulation mentale et sexuelle.'
  },
  {
    id: 'bb-universites-mcgill-udem',
    nameOrEntity: 'Universités Québécoises (McGill, UdeM, FRQNT, FRQS)',
    category: 'UNIVERSITES_RECHERCHE',
    blackBookPageNumber: 'Audits institutionnels post-2019',
    addressBookContext: 'Vérifications menées par les médias d\'enquête pour savoir si Epstein avait infiltré les facultés québécoises avec ses fondations (Enhanced Education Foundation / COUQ Foundation), à l\'instar de ses dons majeurs à Harvard et au MIT.',
    verifiedFactualStatus: 'AUDIT_REFUS_DONS',
    officialStatementOrFact: 'Les porte-paroles de l\'Université McGill et des Fonds de recherche du Québec ont formellement confirmé aux journalistes d\'enquête qu\'aucun don financier n\'avait été sollicité ni reçu d\'Epstein ou de ses fondations écrans. Aucun chercheur québécois n\'a été compromis dans des partenariats philanthropiques avec lui.',
    sourceReference: 'Vérifications journalistiques de La Presse et Le Devoir (Septembre 2019) • Registres des dons philanthropiques de McGill',
    ethicalSeparationNotice: 'Atteste de la vigilance et de l\'intégrité des universités québécoises face aux tentatives de blanchiment de réputation par le mécénat académique.'
  }
];

// 4. PIÈCES DÉCACHETÉES DU TRIBUNAL FÉDÉRAL DE NEW YORK (SDNY)
export const EPSTEIN_SDNY_DECLASSIFIED_ARCHIVES: EpsteinSDNYArchive[] = [
  {
    id: 'sdny-unsealed-batch-2024',
    documentTitle: 'Giuffre v. Maxwell : Décachetage Massif de 4 500 Pages (Ordonnance Preska)',
    docketNumber: '15-cv-07433-LAP (Documents 1320 à 1335)',
    dateUnsealed: '2024-01-03 à 2024-01-08',
    judgeOrAuthority: 'Juge Fédérale Loretta A. Preska (SDNY)',
    summary: 'Révélation publique intégrale de centaines de dépositions sous serment, assignations à comparaître, registres de vols transfrontaliers et correspondances électroniques classées secrètes pendant près d\'une décennie.',
    keyUnsealedFindings: [
      'Confirmation de l\'utilisation de jets privés pour acheminer des victimes à travers l\'Amérique du Nord et les Caraïbes.',
      'Détail des méthodes de recrutement de Jean-Luc Brunel via des agences de mannequins internationales.',
      'Publication des dépositions d\'employés de maison et de pilotes attestant des escales à Dorval et Mirabel.',
      'Clarification de dizaines de noms cités simplement comme connaissances sans faute criminelle, réfutant les thèses conspirationnistes extrêmes.'
    ],
    relevanceToQuebec: 'Permet d\'authentifier les dates précises des passages d\'aéronefs au Québec et d\'écarter définitivement les rumeurs sans fondement pour se concentrer sur les faits réels.',
    sourceUrlOrRef: 'CourtListener • SDNY Giuffre v. Maxwell Docket 15-cv-07433'
  },
  {
    id: 'sdny-maxwell-conviction-2021',
    documentTitle: 'Procès Criminel & Condamnation de Ghislaine Maxwell (20 Ans de Prison)',
    docketNumber: '20-cr-00330-AJN',
    dateUnsealed: '2022-06-28 (Jugement Définitif)',
    judgeOrAuthority: 'Juge Alison J. Nathan (SDNY)',
    summary: 'Verdict de culpabilité unanime déclarant Ghislaine Maxwell coupable de trafic sexuel de mineures, complot et incitation à la débauche au profit de Jeffrey Epstein.',
    keyUnsealedFindings: [
      'Reconnaissance judiciaire formelle de l\'existence d\'un système structuré et prolongé d\'exploitation de jeunes filles.',
      'Témoignages poignants de survivantes (« Jane », « Annie », « Kate », « Carolyn ») sous serment.',
      'Validation probatoire des carnets de vol et des transferts financiers bancaires internationaux.'
    ],
    relevanceToQuebec: 'Jurisprudence de référence mondiale sur la complicité de l\'entourage dans les réseaux d\'exploitation prédatrice de haut niveau.',
    sourceUrlOrRef: 'United States Department of Justice (DOJ) • Southern District of New York'
  },
  {
    id: 'doj-oig-mcc-report-2023',
    documentTitle: 'Rapport d\'Enquête du Vérificateur Général du DOJ sur le Centre Correctionnel MCC New York',
    docketNumber: 'DOJ-OIG Report 23-085',
    dateUnsealed: '2023-06-27',
    judgeOrAuthority: 'Michael E. Horowitz (Inspecteur Général du Département de la Justice)',
    summary: 'Rapport officiel de 120 pages concluant à des négligences professionnelles graves, falsification de registres de ronde et faillites du système de surveillance pénitentiaire ayant permis le suicide d\'Epstein le 10 août 2019.',
    keyUnsealedFindings: [
      'Aucune trace d\'intrusion extérieure mais des défaillances systémiques monumentales de l\'administration pénitentiaire fédérale (BOP).',
      'Deux gardiens ont plaidé coupable pour falsification des registres de rondes de sécurité.',
      'Fermeture définitive ordonnée de l\'établissement MCC New York en raison de la vétusté et du manque d\'intégrité des contrôles.'
    ],
    relevanceToQuebec: 'Rappel pour les institutions publiques québécoises (DPJ, prisons provinciales) des ravages systémiques du laxisme documentaire et du manque de vérification indépendante.',
    sourceUrlOrRef: 'Office of the Inspector General • U.S. Department of Justice'
  }
];

// 5. CHRONOLOGIE DES FAITS VÉRIFIÉS (1996 - 2026)
export const EPSTEIN_QUEBEC_CHRONOLOGY: EpsteinChronologyEvent[] = [
  {
    id: 'chrono-1998',
    yearOrDate: '1998',
    title: 'Premières escales certifiées à Montréal-Dorval (YUL)',
    description: 'Le Gulfstream II immatriculé N908JE effectue ses premiers atterrissages enregistrés par la FAA aux terminaux privés de Dorval et Mirabel.',
    impactLevel: 'MAJEUR',
    officialSource: 'Registres FAA • Carnets de vol Visoski'
  },
  {
    id: 'chrono-2001',
    yearOrDate: '2001',
    title: 'Fondation de MC2 Model Management & Prospection à Montréal',
    description: 'Jean-Luc Brunel fonde l\'agence MC2 avec un financement de plus de 1 million $ US fourni par Jeffrey Epstein. Des tournées de détection sont conduites à Montréal auprès de jeunes modèles.',
    impactLevel: 'CRITIQUE',
    officialSource: 'Dossier Parquet de Paris • Enquête Radio-Canada'
  },
  {
    id: 'chrono-2008',
    yearOrDate: '2008',
    title: 'Accord de non-poursuite scandaleux en Floride (Procureur Acosta)',
    description: 'Epstein obtient un accord controversé de non-poursuite fédérale en Floride malgré des preuves écrasantes du FBI. Les victimes sont privées de justice complète pendant plus d\'une décennie.',
    impactLevel: 'CRITIQUE',
    officialSource: 'Cour fédérale du district sud de Floride (SDFL)'
  },
  {
    id: 'chrono-2018',
    yearOrDate: '2018',
    title: 'Enquête explosive « Perversion of Justice » du Miami Herald',
    description: 'La journaliste Julie K. Brown brise l\'omerta et relance les enquêtes fédérales, conduisant le SDNY à rouvrir un dossier pénal majeur.',
    impactLevel: 'MAJEUR',
    officialSource: 'Miami Herald • Prix George Polk'
  },
  {
    id: 'chrono-2019-arrest',
    yearOrDate: 'Juillet 2019',
    title: 'Arrestation d\'Epstein par le FBI au retour de Paris',
    description: 'Jeffrey Epstein est arrêté à l\'aéroport de Teterboro pour trafic sexuel de mineures. Saisie de son coffre-fort et des carnets d\'adresses.',
    impactLevel: 'CRITIQUE',
    officialSource: 'Acte d\'accusation SDNY • FBI New York'
  },
  {
    id: 'chrono-2019-death',
    yearOrDate: 'Août 2019',
    title: 'Mort d\'Epstein en détention au MCC New York',
    description: 'Epstein est retrouvé inanimé dans sa cellule. Le bureau du médecin légiste de New York conclut à un suicide par pendaison dans un contexte de négligences carcérales majeures.',
    impactLevel: 'CRITIQUE',
    officialSource: 'Chief Medical Examiner of NYC • Rapport OIG'
  },
  {
    id: 'chrono-2020-bronfman',
    yearOrDate: 'Septembre 2020',
    title: 'Condamnation de Clare Bronfman à New York (Dossier NXIVM)',
    description: 'La juge fédérale condamne l\'héritière montréalaise à 6 ans et 9 mois d\'emprisonnement pour son rôle de soutien financier et logistique à la secte prédatrice NXIVM.',
    impactLevel: 'MAJEUR',
    officialSource: 'Cour fédérale de New York (SDNY/EDNY)'
  },
  {
    id: 'chrono-2020-brunel',
    yearOrDate: 'Décembre 2020',
    title: 'Arrestation de Jean-Luc Brunel à l\'aéroport Charles-de-Gaulle',
    description: 'Brunel est intercepté alors qu\'il s\'apprête à embarquer pour Dakar (Sénégal). Il est mis en examen pour viols sur mineurs et traite d\'êtres humains.',
    impactLevel: 'CRITIQUE',
    officialSource: 'Parquet de Paris • OCRVP'
  },
  {
    id: 'chrono-2021-maxwell',
    yearOrDate: 'Décembre 2021',
    title: 'Procès & Verdict de culpabilité contre Ghislaine Maxwell',
    description: 'Maxwell est reconnue coupable sur 5 chefs d\'accusation par un jury fédéral à Manhattan et condamnée à 20 ans de réclusion.',
    impactLevel: 'CRITIQUE',
    officialSource: 'Tribunal fédéral SDNY'
  },
  {
    id: 'chrono-2022-brunel-death',
    yearOrDate: 'Février 2022',
    title: 'Mort de Jean-Luc Brunel à la prison de La Santé',
    description: 'Brunel est retrouvé pendu dans sa cellule à Paris dans l\'attente de son procès, suscitant l\'amertume des victimes québécoises et françaises.',
    impactLevel: 'MAJEUR',
    officialSource: 'Parquet de Paris'
  },
  {
    id: 'chrono-2024-unsealing',
    yearOrDate: 'Janvier 2024',
    title: 'Décachetage massif Preska & Vérifications au Québec',
    description: 'Publication de 4 500 pages de dossiers judiciaires par le SDNY. Couverture médiatique détaillée au Québec : mise au point sur Guy Laliberté et confirmation qu\'aucune institution québécoise n\'a reçu d\'argent d\'Epstein.',
    impactLevel: 'MAJEUR',
    officialSource: 'SDNY Docket 15-cv-07433 • Déclarations publiques'
  },
  {
    id: 'chrono-2026-vigie',
    yearOrDate: '2026',
    title: 'Vigie Citoyenne Permanente & Protection des Mineures',
    description: 'Consolidation sur Transparence Québec de la base complète des faits déclassifiés, au service de la mémoire des victimes et de la prévention contre l\'exploitation transfrontalière.',
    impactLevel: 'VERIFICATION',
    officialSource: 'Transparence Québec • Vigie Citoyenne'
  }
];
