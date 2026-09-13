export interface MkUltraDocumentedVictim {
  id: string;
  fullName: string;
  yearAdmitted: string;
  reasonForAdmission: string;
  treatmentsEndured: string[];
  consequencesAndDamages: string;
  legalActionTaken: string;
  settlementStatus: string;
  keyTestimonyQuote: string;
}

export interface MkUltraChronologyEvent {
  year: string;
  title: string;
  description: string;
  institutionalInvolvement: 'CIA' | 'Gouvernement du Canada' | 'Université McGill / Allan Memorial' | 'Tribunaux & Sénat';
  officialSourceDocument: string;
}

export interface MkUltraDeclassifiedArchive {
  docId: string;
  title: string;
  issuingBody: string;
  date: string;
  classificationStatus: string;
  archiveReference: string;
  keyExcerpts: string[];
  historicalSignificance: string;
}

export interface MkUltraExperimentalProtocol {
  protocolName: string;
  inventorOrPerpetrator: string;
  medicalPretext: string;
  actualProcedure: string;
  chemicalOrPhysicalAgents: string[];
  neurologicalImpact: string;
  scientificSource: string;
}

export const MK_ULTRA_VICTIMS: MkUltraDocumentedVictim[] = [
  {
    id: 'velma-orlikow',
    fullName: 'Velma Orlikow',
    yearAdmitted: '1956-1958',
    reasonForAdmission: 'Dépression post-partum légère',
    treatmentsEndured: [
      'Injections massives de LSD-25 à 14 reprises sans consentement',
      'Séances répétées d\'électrochocs de haute intensité',
      'Sommeil induit chimiquement sous barbituriques',
      'Conduite psychique (Psychic Driving) avec messages en boucle dans le casque'
    ],
    consequencesAndDamages: 'Perte irréversible de la mémoire à court terme, incapacité permanente à lire un livre complet, perte de l\'écriture manuscrite et terreurs nocturnes à vie.',
    legalActionTaken: 'Épouse du député fédéral canadien David Orlikow (NPD - Winnipeg). A mené avec 8 autres victimes la poursuite historique contre la CIA devant le tribunal fédéral de Washington (Orlikow et al. v. United States).',
    settlementStatus: 'Règlement hors cour de 750 000 $ US versé par le gouvernement américain (CIA) en 1988 aux 9 plaignants canadiens.',
    keyTestimonyQuote: '« Le Dr Cameron m\'a dit que mes pensées étaient mauvaises et devaient être effacées. Quand je suis sortie de l\'Allan Memorial, je ne savais plus qui j\'étais ni comment cuisiner pour ma famille. »'
  },
  {
    id: 'linda-macdonald',
    fullName: 'Linda Macdonald',
    yearAdmitted: '1963',
    reasonForAdmission: 'Dépression post-partum à l\'âge de 26 ans',
    treatmentsEndured: [
      '73 jours de sommeil comateux sous sédatifs lourds et cocktails chimiques',
      '102 séances d\'électrochocs massifs (Page-Russell technique)',
      'Déstructuration complète (Complete Depatterning) pour ramener le cerveau à l\'état de page blanche',
      'Écoute forcée de messages en boucle pendant des semaines'
    ],
    consequencesAndDamages: 'Régression infantile totale : incapable de parler, de marcher, perte du contrôle sphinctérien, amnésie totale de son mariage, de ses 5 enfants et de l\'ensemble de sa vie passée.',
    legalActionTaken: 'Bataille acharnée pour faire reconnaître l\'ampleur des séquelles. A fait l\'objet d\'auditions parlementaires et de reportages internationaux.',
    settlementStatus: 'A reçu l\'indemnité fédérale canadienne ex gratia de 100 000 $ en 1992 après un examen psychiatrique confirmant son effacement mémoriel complet.',
    keyTestimonyQuote: '« Ils ont complètement effacé mes 26 premières années de vie. Je ne reconnaissais ni mon mari ni mes bébés. J\'ai dû réapprendre à aller aux toilettes et à marcher comme un nouveau-né. »'
  },
  {
    id: 'gail-kastner',
    fullName: 'Gail Kastner',
    yearAdmitted: '1953 (à l\'âge de 19 ans)',
    reasonForAdmission: 'Anxiété et surmenage liés aux examens universitaires',
    treatmentsEndured: [
      'Électrochocs massifs répétés 2 à 3 fois par jour',
      'Comas médicamenteux prolongés',
      'Administration de substances hallucinogènes et curare',
      'Isolement sensoriel en cellule capitonnée'
    ],
    consequencesAndDamages: 'Destruction de ses facultés académiques, crises d\'angoisse et de panique sévères, dépendance psychologique et physique invalidante.',
    legalActionTaken: 'Poursuite de longue haleine contre le gouvernement fédéral canadien pour refus d\'indemnisation initiale dans les années 1990.',
    settlementStatus: 'A obtenu en 2018 une compensation de 100 000 $ après des décennies de contestation juridique prouvant que ses dossiers avaient été minimisés.',
    keyTestimonyQuote: '« J\'étais une brillante étudiante de 19 ans. En sortant de là, mon esprit était brisé en mille morceaux. Le Dr Cameron a utilisé des êtres humains vulnérables comme cobayes de laboratoire. »'
  },
  {
    id: 'janine-huard',
    fullName: 'Janine Huard',
    yearAdmitted: '1950-1951',
    reasonForAdmission: 'Migraines et dépression légère après son accouchement',
    treatmentsEndured: [
      'Injections expérimentales de produits psychotropes',
      'Électrochocs convulsifs intensifs',
      'Séquestration dans l\'aile « dortoir du sommeil » de l\'Allan Memorial'
    ],
    consequencesAndDamages: 'Amnésie rétrograde et incapacité de travail permanente, traumatismes psychiques transmis à ses enfants.',
    legalActionTaken: 'A déposé plainte en 2004 pour forcer le gouvernement fédéral canadien à rouvrir les critères stricts de déstructuration.',
    settlementStatus: 'Indemnisée en 2007 par Ottawa après un règlement confidentiel.',
    keyTestimonyQuote: '« On m\'a emmenée dans une pièce sombre en me disant que c\'était pour soigner mes maux de tête. Ils ont fait de moi un fantôme vivant. »'
  },
  {
    id: 'victimes-collectives-familles',
    fullName: 'Les familles & enfants de victimes (Recours Collectif Actuel)',
    yearAdmitted: '1950-1965 (Période des expériences)',
    reasonForAdmission: 'Divers troubles anxieux, dépressifs ou somatiques',
    treatmentsEndured: [
      'Protocoles complets du Sous-projet 68 de la CIA',
      'Destruction du lien d\'attachement parental par les séquelles neurologiques infligées'
    ],
    consequencesAndDamages: 'Traumatismes intergénérationnels : des centaines d\'enfants ont grandi avec des mères et pères devenus amnésiques, violents, dépendants ou incapables d\'affection.',
    legalActionTaken: 'Demande d\'autorisation d\'action collective déposée en Cour supérieure du Québec (menée par Me Alan Stein et Me Jeff Orenstein) contre l\'Hôpital Royal Victoria, McGill et le Procureur général du Canada.',
    settlementStatus: 'En litige actif devant la Cour supérieure du Québec (Demande de dédommagement de 1 M$ par victime et transmission de tous les dossiers médicaux scellés).',
    keyTestimonyQuote: '« Nos mères ne sont jamais revenues de l\'Allan Memorial. Les personnes qui sont sorties de cet hôpital étaient des corps brisés sans passé ni souvenir. »'
  }
];

export const MK_ULTRA_CHRONOLOGY: MkUltraChronologyEvent[] = [
  {
    year: '1943',
    title: 'Fondation de l\'Institut Allan Memorial à Montréal',
    description: 'Sir Hugh Allan fait don de sa somptueuse résidence « Ravenscrag » au sommet du Mont-Royal à l\'Hôpital Royal Victoria et l\'Université McGill. Le Dr Donald Ewen Cameron en devient le premier directeur et prend la tête du Département de psychiatrie de McGill.',
    institutionalInvolvement: 'Université McGill / Allan Memorial',
    officialSourceDocument: 'Archives de l\'Université McGill & Hôpital Royal Victoria'
  },
  {
    year: '1953',
    title: 'Lancement du Projet MK-Ultra par le directeur de la CIA Allen Dulles',
    description: 'En pleine guerre froide, la CIA lance le programme ultra-secret MK-Ultra, sous la supervision du chimiste Sidney Gottlieb, pour développer des techniques de lavage de cerveau, de sérums de vérité et de contrôle du comportement face au bloc soviétique.',
    institutionalInvolvement: 'CIA',
    officialSourceDocument: 'Directive du Directeur de la CIA Allen Dulles du 13 avril 1953'
  },
  {
    year: '1957',
    title: 'Création du « Sous-projet 68 » (Subproject 68) à l\'Allan Memorial de Montréal',
    description: 'La CIA subventionne secrètement les recherches du Dr Cameron via une organisation-paravent : la « Society for the Investigation of Human Ecology ». Des fonds d\'au moins 60 000 $ US (équivalent à plus de 650 000 $ aujourd\'hui) sont versés directement à l\'Allan Memorial pour tester la déprogrammation mentale sur des patients psychiatriques non avertis.',
    institutionalInvolvement: 'CIA',
    officialSourceDocument: 'Documents déclassifiés CIA MK-Ultra Sous-projet 68 (FOIA Records)'
  },
  {
    year: '1950-1964',
    title: 'Co-financement par le gouvernement fédéral canadien (Santé et Bien-être)',
    description: 'Parallèlement aux fonds secrets de la CIA, le ministère fédéral de la Santé nationale et du Bien-être social du Canada accorde plus de 500 000 $ en subventions publiques au Dr Cameron pour ses recherches à McGill, sans jamais contrôler les traitements administrés aux citoyens.',
    institutionalInvolvement: 'Gouvernement du Canada',
    officialSourceDocument: 'Rapport d\'enquête George Cooper (1986) & Registres du Conseil des recherches médicales'
  },
  {
    year: '1964',
    title: 'Démission précipitée du Dr Donald Ewen Cameron',
    description: 'Face aux critiques internes grandissantes sur la dévastation neurologique infligée aux patients et le taux d\'échec total de ses « reconstructions » mentales, Cameron quitte subitement McGill et l\'Allan Memorial. Il décède d\'une crise cardiaque en 1967.',
    institutionalInvolvement: 'Université McGill / Allan Memorial',
    officialSourceDocument: 'Archives départementales de psychiatrie McGill'
  },
  {
    year: '1973',
    title: 'Destruction ordonnée des dossiers MK-Ultra par le directeur de la CIA Richard Helms',
    description: 'Prévoyant des enquêtes imminentes du Congrès après le scandale du Watergate, le directeur de la CIA Richard Helms ordonne la destruction massive de tous les dossiers MK-Ultra. Cependant, plusieurs cartons financiers et pièces comptables échappent aux broyeuses dans des dépôts d\'archives.',
    institutionalInvolvement: 'CIA',
    officialSourceDocument: 'Rapport de la Commission Rockefeller (1975)'
  },
  {
    year: '1977',
    title: 'Auditions historiques du Comité Church au Sénat américain',
    description: 'Le sénateur Frank Church et le sénateur Ted Kennedy mènent des auditions publiques explosives révélant l\'existence de MK-Ultra et les expérimentations menées à l\'Allan Memorial de Montréal sur des citoyens canadiens innocents.',
    institutionalInvolvement: 'Tribunaux & Sénat',
    officialSourceDocument: 'U.S. Senate Select Committee on Intelligence Hearings (1977)'
  },
  {
    year: '1980',
    title: 'Poursuite de 9 victimes canadiennes contre la CIA à Washington',
    description: 'Menées par Velma Orlikow et l\'avocat américain Joseph Rauh Jr., 9 victimes de l\'Allan Memorial déposent une plainte historique devant la Cour de district de Washington D.C. contre le gouvernement des États-Unis.',
    institutionalInvolvement: 'Tribunaux & Sénat',
    officialSourceDocument: 'Dossier civil Orlikow et al. v. United States, 685 F. Supp. 1199 (D.D.C. 1988)'
  },
  {
    year: '1986',
    title: 'Dépôt du « Rapport Cooper » commandé par Ottawa',
    description: 'Le ministre de la Justice du Canada John Crosbie mandate l\'avocat George Cooper pour enquêter sur la responsabilité du Canada. Le rapport conclut que le gouvernement a financé Cameron mais nie toute faute juridique directe de l\'État canadien, tout en recommandant une aide humanitaire.',
    institutionalInvolvement: 'Gouvernement du Canada',
    officialSourceDocument: 'Opinion of George Cooper, Q.C., Regarding Canadian Government Funding (1986)'
  },
  {
    year: '1988',
    title: 'La CIA capitule et verse 750 000 $ US de dédommagement',
    description: 'Pour éviter un procès public dévastateur avec la comparution d\'anciens directeurs de la CIA, le département de la Justice américain signe un accord hors cour accordant 750 000 $ US aux 9 victimes canadiennes d\'Orlikow.',
    institutionalInvolvement: 'CIA',
    officialSourceDocument: 'Protocole d\'accord transactionnel Department of Justice / CIA'
  },
  {
    year: '1992',
    title: 'Règlement fédéral d\'Ottawa : 100 000 $ à 77 victimes déstructurées',
    description: 'Le gouvernement progressiste-conservateur de Brian Mulroney (ministre Kim Campbell) adopte un décret offrant 100 000 $ d\'indemnisation « ex gratia » aux victimes ayant subi une « déstructuration complète », imposant une clause de non-poursuite et excluant des centaines d\'autres patients moins documentés.',
    institutionalInvolvement: 'Gouvernement du Canada',
    officialSourceDocument: 'Décret en conseil C.P. 1992-2342 • Gazette officielle du Canada'
  },
  {
    year: '2017-2026',
    title: 'Recours collectifs devant la Cour supérieure du Québec & refus d\'excuses de McGill',
    description: 'Des familles et descendants de victimes déposent un recours collectif historique devant la Cour supérieure du Québec contre McGill, le Royal Victoria et le Procureur général du Canada. L\'Université McGill refuse catégoriquement de présenter des excuses officielles, affirmant que le Dr Cameron opérait de manière indépendante.',
    institutionalInvolvement: 'Tribunaux & Sénat',
    officialSourceDocument: 'Dossier Cour supérieure du Québec n° 500-06-000854-191'
  }
];

export const MK_ULTRA_PROTOCOLS: MkUltraExperimentalProtocol[] = [
  {
    protocolName: 'La Déstructuration Cérébrale (« Depatterning »)',
    inventorOrPerpetrator: 'Dr. Donald Ewen Cameron (Allan Memorial / McGill)',
    medicalPretext: 'Éliminer les comportements et schémas névrotiques ancrés dans le cerveau pour créer une « ardoise vierge » (Tabula Rasa).',
    actualProcedure: 'Administration d\'électrochocs convulsifs intensifs selon la méthode Page-Russell (chocs multiples en séquence) à des fréquences de 2 à 3 fois par jour pendant des semaines (jusqu\'à 30 à 40 fois la dose psychiatrique standard), combinée à un sommeil chimique prolongé.',
    chemicalOrPhysicalAgents: ['Électroconvulsivothérapie à haute intensité', 'Thorazine (Chlorpromazine)', 'Sodium Amytal', 'Nembutal', 'Seconal'],
    neurologicalImpact: 'Amnésie rétrograde massive, perte de la motricité fine, perte de la propreté corporelle, confusion mentale sévère et régression à l\'état de la petite enfance.',
    scientificSource: 'Cameron, D. E. (1956). « The Production of Differential Amnesia as a Factor in the Treatment of Schizophrenia », Comprehensive Psychiatry.'
  },
  {
    protocolName: 'La Conduite Psychique (« Psychic Driving »)',
    inventorOrPerpetrator: 'Dr. Donald Ewen Cameron & Techniciens de laboratoire McGill',
    medicalPretext: 'Remplacer les pensées névrotiques par de nouveaux schémas mentaux positifs et fonctionnels.',
    actualProcedure: 'Le patient, placé sous contention physique ou semi-comateux sous barbituriques, est contraint de porter des casques d\'écoute ou des haut-parleurs dissimulés dans son oreiller diffusant un message vocal enregistré en boucle 16 à 24 heures par jour, répété entre 250 000 et 500 000 fois. Première phase : messages ultra-négatifs (« Tu es méchante, tu ne vaux rien ») ; deuxième phase : messages de reprogrammation (« Tu dois obéir, tu es calme »).',
    chemicalOrPhysicalAgents: ['Casques verrouillés', 'Substances paralysantes (Curare)', 'LSD-25', 'Magnétophones en boucle continue'],
    neurologicalImpact: 'Effondrement psychologique total, dissociation de la personnalité, terreurs claustrophobiques permanentes et obéissance automatique.',
    scientificSource: 'Cameron, D. E. (1956). « Psychic Driving », The American Journal of Psychiatry, 112(7), 502-509.'
  },
  {
    protocolName: 'Le Sommeil Continu Prolonge (« Sleep Therapy » / Prolonged Narcosis)',
    inventorOrPerpetrator: 'Dr. Donald Ewen Cameron (Subvention CIA Subproject 68)',
    medicalPretext: 'Repos complet du cortex cérébral pour faciliter la réorganisation synaptique.',
    actualProcedure: 'Les cobayes étaient maintenus dans un état de coma médicamenteux artificiel ininterrompu pendant 30 à 65 jours consécutifs dans la section « dortoir » de l\'Allan Memorial. Les patients étaient réveillés uniquement trois fois par jour pour manger et recevoir des doses supplémentaires de drogues.',
    chemicalOrPhysicalAgents: ['Cocktails de barbituriques', 'Phénothiazines', 'Hallucinogènes (LSD)', 'PCP (Phencyclidine)'],
    neurologicalImpact: 'Atrophie musculaire sévère, escarres, pneumonies d\'aspiration, hallucinations hallucinatoires délirantes chroniques et rupture définitive du sentiment de sécurité.',
    scientificSource: 'Dossiers déclassifiés CIA FOIA MK-Ultra Subproject 68, Boîte 4.'
  },
  {
    protocolName: 'La Privation Sensorielle (« Isolation Cubicle »)',
    inventorOrPerpetrator: 'Département de psychologie de McGill (D.O. Hebb) & Dr. Cameron',
    medicalPretext: 'Mesurer la résistance de l\'esprit humain en l\'absence de stimuli externes.',
    actualProcedure: 'Placement du patient dans un caisson d\'isolation capitonné et insonorisé, yeux recouverts de lunettes translucides diffusant une lumière diffuse sans forme, bras enveloppés dans des manchons de carton rigide pour empêcher tout contact tactile, et diffusion d\'un bruit blanc ou sifflement continu dans les oreilles.',
    chemicalOrPhysicalAgents: ['Chambres anéchoïques', 'Manchons de contention', 'Générateurs de bruit blanc'],
    neurologicalImpact: 'Hallucinations visuelles et auditives spontanées dès la 24e heure, dépersonnalisation, perte du repère spatio-temporel et suggestibilité extrême.',
    scientificSource: 'Bexton, Heron, & Doane (McGill University, 1954) • Études préparatoires financées par le Conseil de recherches pour la défense (CRD Canada).'
  }
];

export const MK_ULTRA_DECLASSIFIED_ARCHIVES: MkUltraDeclassifiedArchive[] = [
  {
    docId: 'CIA-MKULTRA-SUBPROJECT-68',
    title: 'CIA Memorandum : Approval and Financial Authorization for Subproject 68 (Dr. Ewen Cameron)',
    issuingBody: 'Central Intelligence Agency (Technical Services Staff / Chemical Division)',
    date: '1957-01-22',
    classificationStatus: 'DÉCLASSIFIÉ (Secret / Orcon - Levée de classification FOIA 1977)',
    archiveReference: 'CIA-RDP88-01314R000100230006-8',
    keyExcerpts: [
      '« Subproject 68 is designed to cover research into the effects of various drugs and physical treatments on the mental processes of human subjects... »',
      '« Dr. Cameron\'s techniques of depatterning and psychic driving offer a promising avenue for inducing disorientation and erasing prior memory patterns... »',
      '« Funds will be channeled via the Society for the Investigation of Human Ecology to conceal any official United States Government connection. »'
    ],
    historicalSignificance: 'Preuve irréfutable et matérielle que l\'Allan Memorial Institute de Montréal et le Dr Cameron étaient directement rémunérés et mandatés par les services secrets américains pour des expériences sur des cobayes humains.'
  },
  {
    docId: 'CHURCH-COMM-SENATE-1977',
    title: 'Hearings Before the Select Committee on Intelligence, United States Senate (95th Congress)',
    issuingBody: 'Sénat des États-Unis (Présidence : Sénateur Frank Church & Ted Kennedy)',
    date: '1977-08-03',
    classificationStatus: 'DOCUMENT PUBLIC DU SÉNAT AMÉRICAIN',
    archiveReference: 'U.S. Government Printing Office 96-444 O, Washington D.C.',
    keyExcerpts: [
      '« Senator Kennedy: Is it not true that the CIA subsidized experiments in Montreal, Canada, on patients who did not have the slightest inkling that they were subjects of mind-control research? »',
      '« Admiral Turner (Directeur de la CIA): Yes, sir. The records confirm that financial grants were provided to the Montreal institution under Subproject 68 without informed consent. »'
    ],
    historicalSignificance: 'Aveu public officiel du directeur de la CIA devant le Sénat américain confirmant les expérimentations illégales menées sur le sol québécois et canadien.'
  },
  {
    docId: 'COOPER-REPORT-1986',
    title: 'Opinion of George Cooper, Q.C., Regarding Canadian Government Funding of the Allan Memorial Institute',
    issuingBody: 'Ministère de la Justice du Canada (Ottawa)',
    date: '1986-12-15',
    classificationStatus: 'DÉPOSÉ À LA CHAMBRE DES COMMUNES',
    archiveReference: 'Catalogue fédéral no J2-64/1986E • ISBN 0-662-15183-1',
    keyExcerpts: [
      '« Le Dr Cameron a reçu plus de 500 000 $ en subventions fédérales du ministère de la Santé nationale et du Bien-être social entre 1950 et 1964. »',
      '« Les traitements de déstructuration et de conduite psychique s\'écartaient des standards psychiatriques acceptés et ont causé des torts substantiels aux patients. »',
      '« Bien qu\'aucune responsabilité légale stricte ne puisse être imputée au gouvernement canadien en vertu des lois de l\'époque, une obligation morale justifie une assistance humanitaire. »'
    ],
    historicalSignificance: 'Rapport officiel du gouvernement canadien reconnaissant le financement public massif des travaux du Dr Cameron et l\'effroyable préjudice causé aux patients québécois et canadiens.'
  },
  {
    docId: 'ORDER-IN-COUNCIL-PC-1992-2342',
    title: 'Décret en conseil C.P. 1992-2342 : Règlement d\'indemnisation ex gratia aux victimes de l\'Allan Memorial',
    issuingBody: 'Conseil privé du Canada (Gouvernement de Brian Mulroney)',
    date: '1992-11-19',
    classificationStatus: 'GAZETTE DU CANADA (DÉCRET OFFICIEL)',
    archiveReference: 'C.P. 1992-2342 / P.C. 1992-2342',
    keyExcerpts: [
      '« Paiement à titre gracieux (ex gratia) de la somme de 100 000 $ à chacune des 77 personnes ayant subi une déstructuration complète à l\'Allan Memorial Institute. »',
      '« En contrepartie du paiement, la personne ou ses ayants droit doivent signer une quittance générale libérant sa Majesté la Reine du chef du Canada de toute poursuite future. »'
    ],
    historicalSignificance: 'Premier dédommagement financier officiel accordé par l\'État canadien, tout en imposant une clause de bâillon juridique pour tenter de clore définitivement le dossier.'
  }
];
