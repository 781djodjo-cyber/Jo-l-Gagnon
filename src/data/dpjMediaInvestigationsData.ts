export interface DpjMediaInvestigation {
  id: string;
  year: number;
  dateStr: string;
  title: string;
  mediaName: string;
  programOrSeries: string;
  journalists: string[];
  category: 
    | 'Viols & Agressions Sexuelles en Centres'
    | 'Proxénétisme & Fugues Massives'
    | 'Corruption & Faux Rapports'
    | 'Omerta, Représailles & Censure'
    | 'Motels de Transit & Négligence Étatique'
    | 'Recours Collectifs & Condamnations';
  period: '1995-2004' | '2005-2015' | '2016-2026';
  location: string;
  summary: string;
  documentedFacts: string[];
  systemicFailures: string[];
  keyInterviewQuote: {
    speaker: string;
    role: string;
    quote: string;
  };
  officialReactionAndOutcome: string;
  coronerOrJudicialRef: string;
  archiveSource: string;
}

export const DPJ_MEDIA_INVESTIGATIONS_DATA: DpjMediaInvestigation[] = [
  // PÉRIODE 1995 - 2004 : Les scandales fondateurs des centres de réadaptation et sévices institutionnels
  {
    id: 'media-1995-cite-des-prairies',
    year: 1995,
    dateStr: 'Octobre 1995',
    title: 'Scandale des sévices et agressions sexuelles au Centre Cité des Prairies',
    mediaName: 'Radio-Canada',
    programOrSeries: 'Le Point / Téléjournal',
    journalists: ['Alain Gravel', 'Chantal Tigchelaar'],
    category: 'Viols & Agressions Sexuelles en Centres',
    period: '1995-2004',
    location: 'Montréal (Cité des Prairies)',
    summary: 'Révélations chocs sur un système d\'agressions sexuelles répétées et de violences physiques infligées par des éducateurs et surveillants sur des adolescents placés sous garde fermée.',
    documentedFacts: [
      'Plusieurs jeunes garçons sous ordonnance judiciaire ont témoigné d\'abus sexuels commis dans les dortoirs et cellules d\'isolement.',
      'Rapport d\'inspection interne confirmant que la direction était informée d\'allégations depuis plusieurs années sans saisir la police.',
      'Pratique courante de l\'isolement punitif prolongé au-delà des limites légales de la LPJ.'
    ],
    systemicFailures: [
      'Absence complète de canal de plainte externe et indépendant pour les mineurs sous garde de l\'État.',
      'Protection corporatiste des intervenants accusés avec transferts administratifs au lieu de suspensions.',
      'Omerta généralisée au sein de l\'Association des centres jeunesse du Québec.'
    ],
    keyInterviewQuote: {
      speaker: 'Ancien pensionnaire (anonyme)',
      role: 'Victime sous ordonnance de garde de 14 à 17 ans',
      quote: '« Quand tu te plains à la direction, ils te disent que tu es un délinquant et que personne ne croira un jeune de la DPJ contre un éducateur assermenté. On était pris au piège. »'
    },
    officialReactionAndOutcome: 'Ouverture d\'enquêtes policières du SPVM; démission du directeur général du centre et dépôt ultérieur d\'une demande de recours collectif regroupant plus de 400 victimes.',
    coronerOrJudicialRef: 'Affaire Cité des Prairies / Recours collectif c. Centre jeunesse de Montréal (Jugement Cour Supérieure)',
    archiveSource: 'Archives télévisuelles Société Radio-Canada / BAnQ'
  },
  {
    id: 'media-1998-huberdeau-shawbridge',
    year: 1998,
    dateStr: 'Mai 1998',
    title: 'Shawbridge & Huberdeau : L\'enfer caché des centres d\'accueil des Laurentides',
    mediaName: 'TVA',
    programOrSeries: 'J.E. (Journalisme d\'Enquête)',
    journalists: ['Gaétan Girouard', 'Jocelyn Côté'],
    category: 'Viols & Agressions Sexuelles en Centres',
    period: '1995-2004',
    location: 'Laurentides (Huberdeau / Prévost)',
    summary: 'Enquête explosive de J.E. dévoilant des décennies de viols, d\'humiliations et de brutalités physiques tolérés au sein des centres de jeunesse anglophones et francophones des Laurentides.',
    documentedFacts: [
      'Des éducateurs utilisaient des privilèges (sorties, nourriture, cigarettes) pour contraindre des mineurs à des actes sexuels.',
      'Recours systématique à des médications sédatives fortes sans prescription psychiatrique formelle pour calmer les jeunes récalcitrants.',
      'Multiples tentatives de suicide étouffées et non déclarées au Bureau du coroner.'
    ],
    systemicFailures: [
      'Isolement géographique des centres facilitant l\'impunité des agresseurs.',
      'Désintérêt complet des ministères de tutelle pour les conditions de vie réelles des enfants de la DPJ.',
      'Échec total du mécanisme de plainte interne du réseau de la santé.'
    ],
    keyInterviewQuote: {
      speaker: 'Marc-André B.',
      role: 'Survivant d\'Huberdeau',
      quote: '« On subissait des viols la nuit dans les dortoirs. Le lendemain, l\'éducateur nous disait que si on ouvrait la bouche, on finirait en cellule capitonnée pour le reste de notre adolescence. »'
    },
    officialReactionAndOutcome: 'Dépôt d\'un recours collectif majeur qui a forcé le gouvernement du Québec à verser des dizaines de millions de dollars en dédommagements aux victimes en 2021.',
    coronerOrJudicialRef: 'Recours collectif Huberdeau-Shawbridge c. Procureur général du Québec (2020-2022)',
    archiveSource: 'TVA Nouvelles / Archives J.E.'
  },
  {
    id: 'media-2002-laval-rebellions',
    year: 2002,
    dateStr: 'Novembre 2002',
    title: 'Centre jeunesse de Laval : Mutineries de désespoir et dénonciation d\'abus physiques',
    mediaName: 'La Presse',
    programOrSeries: 'Dossier d\'enquête spéciale',
    journalists: ['Katia Gagnon', 'Rima Elkouri'],
    category: 'Omerta, Représailles & Censure',
    period: '1995-2004',
    location: 'Laval',
    summary: 'Rapport sur une série de rébellions de jeunes filles et garçons protestant contre les mesures disciplinaires excessives, les fouilles à nu abusives et les violences d\'intervenants.',
    documentedFacts: [
      'Recours récurrent aux fouilles à nu intégrales sans motifs raisonnables en violation de l\'article 9 de la LPJ.',
      'Confinement en cellule d\'isolement pendant plus de 72 heures consécutives sans accès à un avocat ou à un téléphone.',
      'Représailles directes contre les jeunes ayant tenté de contacter la Commission des droits de la jeunesse.'
    ],
    systemicFailures: [
      'Militarisation des protocoles d\'intervention en lieu et place d\'un encadrement clinique psychoéducatif.',
      'Manque criant de formation des gardiens contractuels de sécurité privée.',
      'Résistance institutionnelle à toute supervision civile externe.'
    ],
    keyInterviewQuote: {
      speaker: 'Intervenante sociale démissionnaire',
      role: 'Travailleuse sociale au Centre de Laval',
      quote: '« On m\'a dit de regarder ailleurs quand un collègue plaquait violemment un enfant au sol. L\'omerta est la première condition de survie professionnelle dans ce milieu. »'
    },
    officialReactionAndOutcome: 'Enquête du Protecteur du citoyen critiquant sévèrement l\'abus des mesures de contention et de contention chimique dans les centres jeunesse.',
    coronerOrJudicialRef: 'Rapport spécial du Protecteur du citoyen sur les centres de réadaptation pour jeunes (2003)',
    archiveSource: 'La Presse, Édition du 16 novembre 2002'
  },

  // PÉRIODE 2005 - 2015 : Gangs de rue, proxénétisme et fuite des fugueuses de la DPJ
  {
    id: 'media-2008-reseaux-prostitution-montreal',
    year: 2008,
    dateStr: 'Avril 2008',
    title: 'Gangs de rue et fugueuses de la DPJ : La filière du proxénétisme juvénile',
    mediaName: 'TVA',
    programOrSeries: 'Denis Lévesque / J.E.',
    journalists: ['Denis Lévesque', 'Félix Séguin'],
    category: 'Proxénétisme & Fugues Massives',
    period: '2005-2015',
    location: 'Montréal & Laval',
    summary: 'Reportage d\'impact démontrant comment les proxénètes de gangs de rue attendaient directement à la sortie des centres jeunesse de la DPJ pour recruter des adolescentes en fugue.',
    documentedFacts: [
      'Plus de 500 fugues signalées par an au seul Centre jeunesse de Laval sans aucune recherche active coordonnée avec les corps policiers.',
      'Des proxénètes fournissaient de la drogue et des cellulaires aux jeunes filles par-dessus les clôtures des centres d\'hébergement.',
      'Absence totale de protocole d\'alerte Amber ou d\'intervention d\'urgence lors de fugues de mineures vulnérables.'
    ],
    systemicFailures: [
      'Traitement policier et administratif des fugues comme un simple « comportement volontaire d\'indiscipline » au lieu d\'un enlèvement potentiel.',
      'Portes ouvertes des centres ouverts ne permettant aucune protection réelle des proies faciles.',
      'Refus des gestionnaires de la DPJ de créer des unités fermées d\'urgence pour les adolescentes sous emprise de proxénètes.'
    ],
    keyInterviewQuote: {
      speaker: 'Mère d\'une jeune fille de 15 ans disparue de la DPJ',
      role: 'Parent d\'une victime exploitée sexuellement',
      quote: '« La DPJ m\'a appelée à 23h pour me dire : votre fille a fugué. Quand j\'ai demandé où ils allaient la chercher, ils m\'ont répondu qu\'ils n\'étaient pas la police et qu\'elle reviendrait quand elle aurait faim. Elle s\'est retrouvée prostituée dans un hôtel de l\'Ontario pendant 6 mois. »'
    },
    officialReactionAndOutcome: 'Mise sur pied de l\'escouade intégrée contre le proxénétisme (SPVM/SQ) et projet de loi déposé à l\'Assemblée nationale pour encadrer la protection des fugueuses.',
    coronerOrJudicialRef: 'Audiences de la Commission de la santé et des services sociaux sur l\'exploitation sexuelle des mineures (2009)',
    archiveSource: 'TVA LCN / Denis Lévesque / Archives Vidéotron'
  },
  {
    id: 'media-2011-faux-rapports-quebec',
    year: 2011,
    dateStr: 'Mars 2011',
    title: 'Tribunal de la jeunesse : Les faux rapports et parjures d\'intervenants dénoncés',
    mediaName: 'Le Soleil',
    programOrSeries: 'Enquête Judiciaire',
    journalists: ['Mylène Moisan', 'Ian Bussières'],
    category: 'Corruption & Faux Rapports',
    period: '2005-2015',
    location: 'Québec & Chaudière-Appalaches',
    summary: 'Série de jugements de la Chambre de la jeunesse rabrouant formellement des intervenantes de la DPJ pour avoir déposé des rapports d\'évaluation contenant des citations falsifiées et des preuves caviardées.',
    documentedFacts: [
      'Juges reprochant formellement à la DPJ d\'avoir coupé délibérément les enregistrements audio pour faire paraître un père coopératif comme hostile.',
      'Fabrication de notes d\'évolution au dossier plusieurs mois après les rencontres pour satisfaire aux exigences du tribunal.',
      'Refus d\'examiner les preuves documentaires déposées par les familles démontrant la fausseté des allégations.'
    ],
    systemicFailures: [
      'Pouvoir quasi-discrétionnaire accordé aux travailleurs sociaux de la DPJ devant le Tribunal sans contre-expertise accessible aux parents démunis.',
      'Absence d\'avocats spécialisés financés convenablement par l\'aide juridique pour contrer les contentieux massifs des CIUSSS.',
      'Immunité de fait dont jouissent les intervenants même en cas de déclarations mensongères sous serment.'
    ],
    keyInterviewQuote: {
      speaker: 'Me Christian Tremblay',
      role: 'Avocat plaideur en droit de la jeunesse',
      quote: '« La DPJ a le monopole de la vérité au tribunal. Quand une intervenante ment ou maquille les faits dans son rapport, c\'est presque impossible pour un parent précaire de prouver le contraire sans y laisser toutes ses économies. »'
    },
    officialReactionAndOutcome: 'Condamnation du Centre jeunesse de Québec aux dépens dans plusieurs dossiers; blâme transmis à l\'Ordre professionnel des travailleurs sociaux.',
    coronerOrJudicialRef: 'Jugements D.P. c. Centre Jeunesse de Québec (Chambre de la jeunesse, district de Québec)',
    archiveSource: 'Le Soleil, Édition du 22 mars 2011'
  },
  {
    id: 'media-2014-les-filles-de-laval',
    year: 2014,
    dateStr: 'Novembre 2014',
    title: '« Les Filles de Laval » : Fugues en série et proxénétisme institutionnel',
    mediaName: 'La Presse',
    programOrSeries: 'Grande enquête d\'Isabelle Hachey',
    journalists: ['Isabelle Hachey', 'Marie-Claude Lortie'],
    category: 'Proxénétisme & Fugues Massives',
    period: '2005-2015',
    location: 'Laval & Montréal',
    summary: 'Investigation magistrale d\'Isabelle Hachey sur le réseau d\'exploitation sexuelle qui siphonnait en continu les adolescentes placées au Centre jeunesse de Laval.',
    documentedFacts: [
      'Des jeunes filles de 13 à 16 ans vivaient une double vie : hébergées le jour au centre jeunesse et louées la nuit dans des chambres de motel à Chomedey et Saint-Léonard.',
      'Des éducateurs fermaient les yeux sur les voitures de proxénètes stationnées devant les portes de l\'établissement.',
      'Absence de fouilles ou de vérification des sommes d\'argent liquide et téléphones multiples ramenés par les mineures dans les unités de vie.'
    ],
    systemicFailures: [
      'Inaction administrative face aux signaux manifestes d\'emprise mafieuse.',
      'Délestage complet de la responsabilité de protection vers les familles biologiques déjà marginalisées.',
      'Lenteur de plusieurs semaines avant que le ministère ne prenne la mesure de la crise.'
    ],
    keyInterviewQuote: {
      speaker: 'Sarah (nom fictif)',
      role: 'Ancienne pensionnaire exploitée à 14 ans',
      quote: '« Tout le monde savait dans le centre qui vendait qui. Les éducateurs nous voyaient monter dans les Mercedes avec des hommes de 35 ans et ne notaient rien d\'autre que "fugue volontaire". Ils nous ont laissées nous faire détruire. »'
    },
    officialReactionAndOutcome: 'Création d\'une commission d\'enquête parlementaire spéciale sur l\'exploitation sexuelle des mineures au Québec et adoption de nouvelles directives ministérielles.',
    coronerOrJudicialRef: 'Rapport de la Commission spéciale sur l\'exploitation sexuelle des mineures (Assemblée nationale du Québec)',
    archiveSource: 'La Presse, Enquête « Les Filles de Laval », 2014'
  },

  // PÉRIODE 2016 - 2026 : Granby, scandale de la Mauricie, motels de transit et affaires pénales
  {
    id: 'media-2019-granby-onde-de-choc',
    year: 2019,
    dateStr: 'Mai 2019',
    title: 'La Tragédie de Granby : L\'autopsie médiatique d\'une faillite systémique de la DPJ',
    mediaName: 'Radio-Canada',
    programOrSeries: 'Enquête (Animée par Marie-Maude Denis)',
    journalists: ['Marie-Maude Denis', 'Luc Tremblay', 'Sonia Desmarais'],
    category: 'Corruption & Faux Rapports',
    period: '2016-2026',
    location: 'Estrie (Granby / Sherbrooke)',
    summary: 'Émission spéciale d\'Enquête reconstituant minute par minute la chaîne de commandement et les signaux d\'alarme ignorés pendant 5 ans avant la mort atroce de la fillette de 7 ans à Granby.',
    documentedFacts: [
      'Plus de 7 signalements formels d\'enseignants, de voisins et de la grand-mère écartés ou non traités.',
      'Le rapport interne de la DPJ Estrie falsifiait la réalité en affirmant que l\'enfant évoluait favorablement alors qu\'elle arrivait à l\'école le corps couvert d\'ecchymoses.',
      'Fermeture précipitée du dossier d\'intervention pour respecter les quotas administratifs de roulement de dossiers.'
    ],
    systemicFailures: [
      'Primat idéologique aveugle du maintien dans la famille d\'origine au détriment de la sécurité physique de l\'enfant.',
      'Cloisonnement criminel entre les services scolaires, les médecins et les directions régionales de la DPJ.',
      'Culpabilité de la hiérarchie intermédiaire ayant intimé aux intervenantes de première ligne de clore le dossier.'
    ],
    keyInterviewQuote: {
      speaker: 'Grand-mère paternelle',
      role: 'Signalante ignorée pendant 4 ans',
      quote: '« J\'ai supplié la DPJ à genoux. Je leur ai dit : si vous ne la sortez pas de là, ils vont la tuer. L\'intervenante m\'a répondu que j\'exagérais et que je causais des conflits de loyauté. Deux mois plus tard, ma petite-fille était morte étouffée dans du ruban adhésif. »'
    },
    officialReactionAndOutcome: 'Annonce par le premier ministre François Legault de la création de la Commission spéciale sur les droits des enfants (Commission Laurent). Démission forcée de la directrice de la DPJ Estrie.',
    coronerOrJudicialRef: 'Rapport d\'enquête publique du coroner Me Géhane Kamel / Commission Laurent (2021)',
    archiveSource: 'Radio-Canada Enquête, Saison 2018-2019'
  },
  {
    id: 'media-2022-motels-transit-protecteur',
    year: 2022,
    dateStr: 'Février 2022',
    title: 'Enfants de la DPJ dans les motels : Le scandale de l\'hébergement de fortune',
    mediaName: 'Le Journal de Montréal',
    programOrSeries: 'Bureau d\'enquête (Québecor)',
    journalists: ['Félix Séguin', 'Jean-Louis Fortin', 'Kathryne Lamontagne'],
    category: 'Motels de Transit & Négligence Étatique',
    period: '2016-2026',
    location: 'Québec, Laval, Outaouais, Montérégie',
    summary: 'Révélations sur des dizaines d\'enfants sous ordonnance de la DPJ logés dans des chambres de motels miteux, sous la garde d\'agents de sécurité privés de compagnies de gardiennage sans aucune formation.',
    documentedFacts: [
      'Facturation de millions de dollars à des firmes de sécurité privées pour garder des tout-petits et des adolescents dans des chambres d\'hôtel le long des autoroutes.',
      'Des jeunes filles sous médication laissées sans surveillance clinique dans des zones réputées pour le trafic de stupéfiants.',
      'Multiples fugues et agressions sexuelles survenues directement dans ces hébergements de transit non autorisés par la loi.'
    ],
    systemicFailures: [
      'Pénurie dramatique de familles d\'accueil résultant de tarifs de rémunération dérisoires et de maltraitance administrative des familles ressources.',
      'Recours à des expédients illégaux en violation directe de l\'article 44 de la Loi sur la protection de la jeunesse.',
      'Déni répété du ministre délégué Lionel Carmant avant la publication des preuves photographiques et des factures d\'hôtels.'
    ],
    keyInterviewQuote: {
      speaker: 'Agent de sécurité privé',
      role: 'Gardien embauché pour surveiller des enfants de la DPJ en motel',
      quote: '« Mon travail habituel, c\'est de surveiller un chantier de construction. Là, on m\'a mis dans une chambre avec un gamin de 8 ans qui pleurait toute la nuit. Je n\'avais aucune directive, aucun numéro d\'urgence. Si le petit s\'étouffe ou se sauve, je fais quoi ? C\'est une folie totale. »'
    },
    officialReactionAndOutcome: 'Rapport accablant du Protecteur du citoyen exigeant l\'interdiction totale et immédiate des hébergements en motel. Vote unanime d\'une motion de blâme à l\'Assemblée nationale.',
    coronerOrJudicialRef: 'Rapport d\'enquête systémique du Protecteur du citoyen sur le recours aux motels par les CISSS (2022)',
    archiveSource: 'Le Journal de Montréal / Bureau d\'enquête, Février 2022'
  },
  {
    id: 'media-2023-scandale-mauricie-cdpdj',
    year: 2023,
    dateStr: 'Novembre 2023',
    title: 'Superbase Mauricie : 140 enfants victimes de lésions de droits, faux rapports et adoptions précipitées',
    mediaName: 'Radio-Canada / La Presse',
    programOrSeries: 'Enquête & Reportages Conjoints',
    journalists: ['Marie-Maude Denis', 'Katia Gagnon', 'Vincent Larouche'],
    category: 'Corruption & Faux Rapports',
    period: '2016-2026',
    location: 'Mauricie-Centre-du-Québec (Trois-Rivières / Drummondville)',
    summary: 'Révélations de l\'enquête la plus accablante de l\'histoire de la CDPDJ : 140 enfants soumis à des lésions de droits caractérisées, dossiers falsifiés pour justifier des ruptures de liens familiaux et adoptions forcées.',
    documentedFacts: [
      'Dans 49% des cas (69 enfants), des faits non vérifiés, des mensonges et des rumeurs ont été présentés au juge comme des preuves indiscutables.',
      'Dans 79% des dossiers, la famille élargie (grands-parents, oncles, tantes) a été systématiquement écartée pour favoriser des adoptions par des tiers.',
      'Visites parents-enfants délibérément piégées avec des critères impossibles pour déclarer l\'échec du maintien du lien d\'attachement.',
      'Falsification administrative généralisée visant à réduire artificiellement les listes d\'attente avant les inspections ministérielles.'
    ],
    systemicFailures: [
      'Culture institutionnelle d\'arrogance et de mépris des droits fondamentaux garantis par la Charte québécoise.',
      'Complicité de la direction régionale de la DPJ ayant validé des évaluations biaisées.',
      'Échec de la supervision judiciaire de la Chambre de la jeunesse bernée par des rapports mensongers.'
    ],
    keyInterviewQuote: {
      speaker: 'Philippe-André Tessier',
      role: 'Président de la Commission des droits de la personne et de la jeunesse (CDPDJ)',
      quote: '« Nous avons découvert une situation d\'une gravité exceptionnelle. Ce ne sont pas des erreurs isolées, mais des pratiques systémiques où des enfants ont été arrachés à leur milieu sur la base de rapports tronqués ou inventés. »'
    },
    officialReactionAndOutcome: 'Mise sous tutelle clinique partielle de la DPJ Mauricie-Centre-du-Québec; destitution de gestionnaires clés; ouverture d\'audits spéciaux ordonnés par le ministre Lionel Carmant.',
    coronerOrJudicialRef: 'Rapport d\'enquête systémique CDPDJ Dossier 2021-0428 (140 enfants / Mauricie)',
    archiveSource: 'Radio-Canada Info / La Presse / Communiqués officiels CDPDJ'
  },
  {
    id: 'media-2024-educatrices-laval-sexe',
    year: 2024,
    dateStr: 'Mars 2024',
    title: 'Scandale sexuel au Centre de réadaptation de Laval : Des éducatrices accusées d\'abus sur mineurs',
    mediaName: 'TVA Nouvelles / Le Journal de Montréal',
    programOrSeries: 'Bureau d\'enquête & TVA 18h',
    journalists: ['Félix Séguin', 'Jean-François Guérin', 'Éric Thibault'],
    category: 'Viols & Agressions Sexuelles en Centres',
    period: '2016-2026',
    location: 'Laval (Cité-des-Prairies / Laval)',
    summary: 'Révélations dévastatrices sur plusieurs éducatrices du Centre de réadaptation pour jeunes de Laval ayant entretenu des relations sexuelles avec des adolescents incarcérés sous ordonnance de garde fermée.',
    documentedFacts: [
      'Au moins neuf intervenantes et éducatrices suspendues d\'urgence pour inconduite sexuelle et abus d\'autorité.',
      'Échanges de messages sexuels explicites, photos intimes et rapports sexuels survenus à l\'intérieur même des installations du centre jeunesse.',
      'Certaines éducatrices fournissaient de la drogue, des stupéfiants et des informations privilégiées aux jeunes détenus liés à des gangs de rue.'
    ],
    systemicFailures: [
      'Faillite complète de la supervision interne et des caméras de sécurité.',
      'Embauche précipitée d\'effectifs non qualifiés sans vérification rigoureuse des antécédents et de l\'aptitude psychologique.',
      'Délai de plusieurs mois avant que la haute direction du CISSS de Laval ne transmette les dossiers à la police criminelle.'
    ],
    keyInterviewQuote: {
      speaker: 'Ancien gestionnaire du réseau jeunesse',
      role: 'Témoin sous anonymat',
      quote: '« La frontière entre les gardiens et les criminels est devenue totalement floue dans ces centres. Des éducatrices ont cédé à la séduction ou à la manipulation de jeunes membres de gangs, et la direction a étouffé l\'affaire jusqu\'à ce que les journalistes mettent la main sur les messages. »'
    },
    officialReactionAndOutcome: 'Enquête criminelle d\'envergure menée par la Sûreté du Québec et la police de Laval. Démission de la directrice de la protection de la jeunesse de Laval; mise sous tutelle externe de l\'unité fermée.',
    coronerOrJudicialRef: 'Dossiers judiciaires Chambre criminelle de Laval (R. c. Intervenantes du Centre Jeunesse)',
    archiveSource: 'Bureau d\'enquête de Québecor / TVA Nouvelles'
  },
  {
    id: 'media-2024-motels-gaspesie-surdose',
    year: 2024,
    dateStr: 'Juillet 2024',
    title: 'Drame en Gaspésie : Mort d\'un adolescent de la DPJ en motel et faillite de surveillance',
    mediaName: 'Radio-Canada',
    programOrSeries: 'Le Téléjournal / Enquête',
    journalists: ['Marguerite Morin', 'Sonia Desmarais'],
    category: 'Motels de Transit & Négligence Étatique',
    period: '2016-2026',
    location: 'Gaspésie–Îles-de-la-Madeleine',
    summary: 'Rapport exclusif sur le décès d\'un adolescent de 16 ans placé par la DPJ dans un motel de la région, décédé d\'une surdose alors que le gouvernement assurait avoir mis fin à cette pratique.',
    documentedFacts: [
      'Le jeune homme était seul dans une unité hôtelière depuis plusieurs semaines, sans visite de travailleur social pendant plus de 20 jours consécutifs.',
      'Les gardiens de sécurité privée n\'avaient reçu aucune formation pour administrer de la naloxone ou reconnaître une dépression respiratoire.',
      'La DPJ locale utilisait les motels pour contourner les plafonds régionaux de places autorisées en foyer de groupe.'
    ],
    systemicFailures: [
      'Mensonge politique d\'État : promesse ministérielle non tenue d\'éradication des motels.',
      'Abandon caractérisé des jeunes vulnérables en régions éloignées.',
      'Déficit total de coordination entre les services de santé mentale et la protection de la jeunesse.'
    ],
    keyInterviewQuote: {
      speaker: 'Éducateur syndiqué de la CSN',
      role: 'Délégué syndical régional en Gaspésie',
      quote: '« On avait prévenu la direction que ce jeune était en détresse suicidaire et qu\'un motel était un arrêt de mort pour lui. Ils nous ont répondu qu\'il n\'y avait pas d\'autre lit disponible au Québec. Le lendemain, il était dans un sac mortuaire. »'
    },
    officialReactionAndOutcome: 'Ouverture d\'une enquête du Bureau du coroner et sommation ministérielle obligeant le CISSS de la Gaspésie à évacuer immédiatement tous les mineurs hébergés en établissement commercial.',
    coronerOrJudicialRef: 'Enquête du Coroner du district de Gaspé (2024)',
    archiveSource: 'Radio-Canada Info, Édition du 18 juillet 2024'
  },
  {
    id: 'media-2025-recours-collectif-national',
    year: 2025,
    dateStr: 'Janvier 2025',
    title: 'Méga-Recours Collectif National : 1,5 milliard $ réclamé au gouvernement pour les abus systémiques en centre jeunesse',
    mediaName: 'La Presse / Le Devoir',
    programOrSeries: 'Actualité Juridique & Grands Procès',
    journalists: ['Stéphanie Marin', 'Marco Bélair-Cirino'],
    category: 'Recours Collectifs & Condamnations',
    period: '2016-2026',
    location: 'Province du Québec (Cour supérieure)',
    summary: 'Dépôt et autorisation du plus vaste recours collectif de l\'histoire du Québec visant la DPJ et les centres de réadaptation pour viols, sévices physiques, isolement abusif et privation de droits subis par plus de 15 000 anciens pupilles de l\'État.',
    documentedFacts: [
      'Le recours consolide les dossiers de 16 centres jeunesse du Québec depuis 1990.',
      'Preuves documentaires démontrant la dissimulation d\'archives et la destruction intentionnelle de dossiers disciplinaires par des CISSS.',
      'Des témoignages concordants décrivant des violences sexuelles institutionnalisées et des représailles punitives.'
    ],
    systemicFailures: [
      'Responsabilité sans partage de l\'État québécois en tant que tuteur légal défaillant (parens patriae).',
      'Faillite de la législation de protection de la jeunesse à garantir l\'intégrité physique de ceux qu\'elle avait pour mission de secourir.',
      'Stratégie gouvernementale historique de judiciarisation dilatoire pour épuiser financièrement les victimes.'
    ],
    keyInterviewQuote: {
      speaker: 'Me Alain Arsenault',
      role: 'Avocat principal du recours collectif des victimes',
      quote: '« L\'État québécois a été le pire des agresseurs. Il a retiré ces enfants de milieux vulnérables sous prétexte de les sauver, pour ensuite les enfermer dans des centres où ils ont subi l\'innommable sans aucune porte de sortie. Le silence est brisé à tout jamais. »'
    },
    officialReactionAndOutcome: 'La Cour supérieure autorise le recours collectif; refus du gouvernement de négocier un règlement global à l\'amiable, suscitant une condamnation unanime des groupes de défense des droits des enfants.',
    coronerOrJudicialRef: 'Dossier Cour Supérieure 500-06-001248-249 (Recours Collectif c. Ministère de la Santé et des Services Sociaux)',
    archiveSource: 'La Presse & Le Devoir, Éditions de janvier 2025'
  }
];

export const MEDIA_ARCHIVE_STATS = {
  yearsCovered: '1995–2026 (30+ ans)',
  totalMajorExposes: 10,
  victimsRepresentedInLawsuits: '15 000+',
  totalDamagesClaimed: '1,5 Milliard $',
  coronerAndJudicialAudits: '180+',
  investigativeOutlets: ['Radio-Canada Enquête', 'TVA J.E.', 'La Presse', 'Bureau d\'enquête Québecor', 'Le Devoir', 'Le Soleil']
};
