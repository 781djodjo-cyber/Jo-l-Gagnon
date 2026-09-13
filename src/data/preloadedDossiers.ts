import { InvestigationReport } from '../types';

export interface PreloadedDossier {
  id: string;
  title: string;
  subtitle: string;
  category: 'Commissions d\'Enquête & Élites' | 'Contrats Publics & IT' | 'Collusion & Financement' | 'Subventions & Fonds Publics' | 'Services aux Enfants & Familles' | 'Éthique & Députés';
  tag: string;
  report: InvestigationReport;
}

const RAW_PRELOADED_DOSSIERS: PreloadedDossier[] = [
  {
    id: 'saaqclic-it-contracts',
    title: 'Fiasco SAAQclic & Contrats Informatiques',
    subtitle: 'Octroi de contrats de gré à gré, dépassements de coûts et dépendance aux firmes de consultants',
    category: 'Contrats Publics & IT',
    tag: 'Rapport VGQ & SEAO',
    report: {
      subject: 'Société de l\'assurance automobile du Québec (SAAQ) - Projet SAAQclic et contrats de services conseils',
      alertLevel: 'ZONE_GRISE_DÉONTOLOGIQUE',
      alertLevelLabel: 'Graves Failles Contractuelles & Rapport Accablant du VGQ',
      integrityScore: 32,
      executiveSummary: 'Le virage numérique SAAQclic a entraîné des pannes massives, des files d\'attente historiques et une explosion des coûts de plus de 500 millions de dollars. Le Vérificateur général du Québec (VGQ) a documenté une dépendance systémique envers les firmes privées de consultation et de nombreux avenants contractuels accordés sans réels appels d\'offres concurrentiels.',
      coreFinding: 'Une gestion déficiente des contrats publics informatiques avec un recours massif à des firmes de consultants externes (CGI, LGS/IBM), contournant l\'expertise interne de l\'État et entraînant des dépassements financiers astronomiques sans imputation claire des responsabilités.',
      verifiedFacts: [
        'Le coût total du projet de transformation informatique a grimpé d\'un budget initial estimé à plus de 500 millions $ canadiens.',
        'La mise en service en février-mars 2023 a paralysé les services de permis et d\'immatriculation pendant des semaines.',
        'Rapport du Vérificateur général (mai 2023) : Faiblesses critiques dans la gouvernance, la planification des tests et l\'évaluation des risques.',
        'Recours continu à des avenants de contrats de gré à gré accordés à des grandes firmes de services-conseils.',
        'Démission du PDG de la SAAQ (Denis Marsolais) peu après le déclenchement de la crise.'
      ],
      interestLinks: [
        {
          actorFrom: 'Direction SAAQ & Ministère des Transports',
          actorTo: 'Grandes firmes privées de consultation IT (CGI, IBM/LGS)',
          relationship: 'Octroi de multiples avenants et contrats de services professionnels sans mise en concurrence ouverte',
          riskLevel: 'Critique',
          legalStatus: 'Réglementé par la Loi sur les contrats des organismes publics (LCOP) - sous la loupe de la Commission de l\'administration publique'
        },
        {
          actorFrom: 'Ex-cadres de la fonction publique',
          actorTo: 'Cabinets de consultants',
          relationship: 'Phénomène de portes tournantes entre les gestionnaires de projets publics et les fournisseurs de solutions privées',
          riskLevel: 'Modéré',
          legalStatus: 'Soumis au délai de carence déontologique du Commissaire à l\'éthique et à la Loi sur le lobbyisme'
        }
      ],
      assemblyNationalEvents: [
        {
          topic: 'Période des questions au Salon bleu (Mars-Avril 2023)',
          context: 'Salon bleu de l\'Assemblée nationale du Québec',
          quoteOrSummary: 'Les partis d\'opposition (PLQ, PQ, QS) ont réclamé sans relâche la démission du ministre responsable et une enquête indépendante sur les dépassements de coûts et la gestion des données citoyennes.',
          dateOrSession: '43e législature, 1re session'
        },
        {
          topic: 'Audition à la Commission de l\'administration publique (CAP)',
          context: 'Commission permanente de l\'Assemblée nationale',
          quoteOrSummary: 'Examen approfondi de la gestion financière et des contrats de sous-traitance avec comparution des hauts dirigeants de la SAAQ et du ministère de la Cybersécurité et du Numérique.',
          dateOrSession: 'Automne 2023'
        }
      ],
      officialReportsAndJudgments: [
        'Rapport du Vérificateur général du Québec (VGQ) à l\'Assemblée nationale du Québec sur la transformation numérique.',
        'Rapports de l\'Autorité des marchés publics (AMP) sur la conformité de l\'octroi des contrats dans le secteur des technologies de l\'information.',
        'Décisions et directives du Conseil du trésor concernant l\'encadrement des contrats de technologies de l\'information.'
      ],
      journalisticInvestigations: [
        'Enquête de Radio-Canada : "Les dessous du naufrage informatique de la SAAQ"',
        'Dossier spécial du Bureau d\'enquête (Journal de Québec / Journal de Montréal) sur les millions versés aux consultants privés',
        'Analyses de La Presse sur l\'explosion des coûts des systèmes informatiques gouvernementaux au Québec'
      ],
      criticalVulnerabilities: [
        'Perte d\'expertise interne de l\'État québécois au profit d\'un oligopole de firmes de consultants',
        'Contournement des plafonds d\'appels d\'offres par la multiplication d\'avenants contractuels',
        'Manque de reddition de comptes en temps réel auprès des élus de l\'Assemblée nationale'
      ],
      legalRecourses: [
        {
          body: 'Autorité des marchés publics (AMP)',
          procedure: 'Plainte d\'un citoyen ou entreprise concernant l\'irrégularité d\'un processus d\'attribution de contrat public ou d\'un avenant.',
          applicableLaw: 'Loi sur les contrats des organismes publics (L.Q. c. C-65.1)',
          whistleblowerProtection: 'Protection légale contre les représailles selon la Loi de l\'AMP'
        },
        {
          body: 'Protecteur du citoyen du Québec',
          procedure: 'Divulgation d\'un acte répréhensible touchant la gestion des fonds publics ou un cas grave de mauvaise administration.',
          applicableLaw: 'Loi facilitant la divulgation d\'actes répréhensibles à l\'égard des organismes publics (L.Q. c. D-11.1)',
          whistleblowerProtection: 'Confidentialité absolue de l\'identité et mécanisme d\'immunité pour les lanceurs d\'alerte'
        }
      ],
      impactOnCitizensAndChildren: 'Les centaines de millions de dollars perdus en inefficacités et en contrats de consultants privés sont autant de ressources soustraites à la rénovation des écoles décrépites du Québec, au financement des centres de la petite enfance (CPE) et aux services de santé de première ligne pour les familles.',
      sourcesGrounding: [
        'Journal des débats de l\'Assemblée nationale du Québec',
        'Rapport du Vérificateur général du Québec (VGQ)',
        'Système électronique d\'appel d\'offres (SEAO)',
        'Autorité des marchés publics (AMP)'
      ]
    }
  },
  {
    id: 'charbonneau-collusion-upac',
    title: 'Commission Charbonneau & Système de Collusion',
    subtitle: 'Financement politique illégal, trucage d\'appels d\'offres publics et condamnations UPAC',
    category: 'Commissions d\'Enquête & Élites',
    tag: 'Rapport CEIC & Condamnations Judiciaires',
    report: {
      subject: 'Commission d\'enquête sur l\'octroi et la gestion des contrats publics dans l\'industrie de la construction (CEIC)',
      alertLevel: 'INFRACTION_AVÉRÉE',
      alertLevelLabel: 'Corruption Systémique & Condamnations Criminelles / Pénales',
      integrityScore: 12,
      executiveSummary: 'La Commission Charbonneau a levé le voile sur un système généralisé de collusion entre firmes de génie-conseil, entrepreneurs en construction, intermédiaires mafieux et partis politiques municipaux et provinciaux. Ce système détournait des fonds publics via des surfacturations de 20 à 30 % sur les contrats d\'infrastructures routières et municipales.',
      coreFinding: 'Preuve irréfutable d\'un écosystème de ristournes illégales (« prête-noms ») où l\'accès aux contrats publics était monnayé contre des contributions électorales dissimulées, au détriment des contribuables québécois.',
      verifiedFacts: [
        'La Commission présidée par la juge France Charbonneau a siégé de 2011 à 2015, entendant près de 300 témoins sous serment.',
        'Mise au jour du système de prête-noms permettant de contourner les plafonds légaux de contributions politiques au Québec.',
        'Surévaluation systémique des contrats de voirie et de travaux publics par un cartel d\'entreprises complices.',
        'Multiples arrestations et condamnations menées par l\'Unité permanente anticorruption (UPAC) et le DPCP (ex: ex-maires, dirigeants de firmes d\'ingénierie, collecteurs de fonds).',
        'Création de l\'Autorité des marchés publics (AMP) et renforcement drastique des règles du DGEQ sur le financement politique (plafonné à 100 $).'
      ],
      interestLinks: [
        {
          actorFrom: 'Grandes firmes de génie-conseil (SNC-Lavalin, Dessau, Genivar, Roche, etc.)',
          actorTo: 'Partis politiques (PLQ, PQ, Union Montréal, etc.)',
          relationship: 'Financement politique illégal par le biais d\'employés remboursés en argent comptant ou en bonus (prête-noms)',
          riskLevel: 'Critique',
          legalStatus: 'Infractions criminelles de complot, fraude et infractions électorales documentées'
        },
        {
          actorFrom: 'Cartel d\'entrepreneurs en construction',
          actorTo: 'Donneurs d\'ordres municipaux et ministère des Transports (MTQ)',
          relationship: 'Trucage des soumissions publiques pour alterner les gagnants désignés et maintenir des prix artificiellement gonflés',
          riskLevel: 'Critique',
          legalStatus: 'Condamnations judiciaires multiples, Programme de remboursement volontaire (PRV) ayant récupéré plus de 150 M$'
        }
      ],
      assemblyNationalEvents: [
        {
          topic: 'Débats historiques sur la création de la Commission d\'enquête (2009-2011)',
          context: 'Salon bleu de l\'Assemblée nationale du Québec',
          quoteOrSummary: 'Pressions intenses de l\'opposition et de la société civile pour forcer le gouvernement Charest à instituer une commission d\'enquête publique dotée de pouvoirs de contrainte.',
          dateOrSession: '39e législature'
        },
        {
          topic: 'Dépôt du rapport final et adoption de la Loi sur l\'intégrité (2015-2017)',
          context: 'Assemblée nationale du Québec',
          quoteOrSummary: 'Adoption de 60 recommandations pour assainir l\'octroi des contrats publics, protéger les dénonciateurs et interdire l\'accès aux contrats aux entreprises condamnées.',
          dateOrSession: '41e législature'
        }
      ],
      officialReportsAndJudgments: [
        'Rapport final de la Commission d\'enquête sur l\'octroi et la gestion des contrats publics dans l\'industrie de la construction (Novembre 2015).',
        'Rapports d\'enquêtes et bilans opérationnels de l\'UPAC (Opérations Fronde, Gravier, Joug, etc.).',
        'Jugements de la Cour du Québec et de la Cour supérieure du Québec en matière de fraude envers le gouvernement et d\'abus de confiance.'
      ],
      journalisticInvestigations: [
        'Émission Enquête (Radio-Canada) : Reportages fondateurs d\'Alain Gravel et Marie-Maude Denis sur la collusion dans la construction',
        'Enquêtes de La Presse (André Noël) sur le financement occulte des partis politiques',
        'Dossiers d\'investigation du Devoir sur les firmes d\'ingénierie et les contrats du MTQ'
      ],
      criticalVulnerabilities: [
        'Vulnérabilité des règles de financement politique avant la réforme limitant les dons à 100 $',
        'Faiblesse des mécanismes de surveillance interne au ministère des Transports du Québec',
        'Pression hiérarchique sur les ingénieurs publics pour approuver des extras de chantier injustifiés'
      ],
      legalRecourses: [
        {
          body: 'Unité permanente anticorruption (UPAC)',
          procedure: 'Dénonciation confidentielle d\'actes de corruption, de collusion, de fraude ou d\'abus de confiance impliquant un titulaire de charge publique.',
          applicableLaw: 'Loi sur la lutte contre la corruption (L.Q. c. L-6.1)',
          whistleblowerProtection: 'Protection pénale contre toute mesure de représailles ou congédiement'
        },
        {
          body: 'Directeur général des élections du Québec (DGEQ)',
          procedure: 'Signalement d\'une irrégularité dans le financement d\'un parti politique ou d\'un député de l\'Assemblée nationale.',
          applicableLaw: 'Loi électorale du Québec (RLRQ c. E-3.3)',
          whistleblowerProtection: 'Traitement confidentiel des plaintes et sanctions pénales sévères'
        }
      ],
      impactOnCitizensAndChildren: 'Les milliards de dollars surfacturés dans les routes, ponts et infrastructures ont alourdi la dette publique du Québec que portent aujourd\'hui nos enfants, tout en privant le réseau des garderies et des écoles de fonds vitaux pour leur sécurité et leur épanouissement.',
      sourcesGrounding: [
        'Rapport officiel CEIC (Commission Charbonneau)',
        'Archives judiciaires de la Cour supérieure du Québec',
        'Direction des poursuites criminelles et pénales (DPCP)',
        'Registres du DGEQ'
      ]
    }
  },
  {
    id: 'northvolt-battery-transparency',
    title: 'Filière Batterie (Northvolt) & Fonds Publics',
    subtitle: 'Engagements de milliards de dollars de l\'État québécois, exemptions environnementales et transparence contractuelle',
    category: 'Subventions & Fonds Publics',
    tag: 'Investissement Québec & Décrets',
    report: {
      subject: 'Projet d\'usine de batteries Northvolt à Saint-Basile-le-Grand / McMasterville et investissements publics d\'Investissement Québec',
      alertLevel: 'ZONE_GRISE_DÉONTOLOGIQUE',
      alertLevelLabel: 'Opacité Financière & Risques Majeurs pour les Fonds Publics',
      integrityScore: 45,
      executiveSummary: 'Le gouvernement du Québec a engagé près de 2,9 milliards de dollars de fonds publics (actions, prêts convertibles, subventions d\'électricité à tarifs préférentiels) dans le projet de méga-usine de l\'entreprise suédoise Northvolt. Les difficultés financières majeures de la maison-mère en Europe et le contournement des audiences environnementales complètes du BAPE soulèvent d\'immenses questions de transparence démocratique et de protection du trésor public.',
      coreFinding: 'Une prise de risque financier exceptionnelle assumée par les contribuables québécois via Investissement Québec sans débat public préalable à l\'Assemblée nationale, accompagnée d\'une modification réglementaire ayant évité une évaluation environnementale complète par le BAPE.',
      verifiedFacts: [
        'L\'engagement financier combiné Québec-Canada dépasse les 7 milliards de dollars, dont environ 2,9 milliards $ pour le Québec via Investissement Québec.',
        'La réglementation sur le seuil de capacité de production d\'énergie pour déclencher une audience du BAPE a été modifiée peu avant l\'annonce officielle du projet.',
        'Northvolt AB en Suède a amorcé une restructuration majeure, des mises à pied et l\'abandon de filiales en raison d\'une crise de liquidités en 2024-2025.',
        'Les contrats détaillés et les clauses de garantie de récupération des fonds publics par l\'État québécois sont demeurés largement caviardés pour des motifs de « secret commercial ».'
      ],
      interestLinks: [
        {
          actorFrom: 'Ministère de l\'Économie, de l\'Innovation et de l\'Énergie (MEIE)',
          actorTo: 'Dirigeants et lobbyistes de Northvolt',
          relationship: 'Négociations directes d\'aides financières massives et d\'attribution de mégawatts d\'Hydro-Québec',
          riskLevel: 'Modéré',
          legalStatus: 'Inscriptions au Registre des lobbyistes du Québec vérifiables'
        },
        {
          actorFrom: 'Investissement Québec (IQ)',
          actorTo: 'Projet Northvolt Six',
          relationship: 'Prise de participation en capital et prêts accordés avec des garanties partielles',
          riskLevel: 'Critique',
          legalStatus: 'Soumis aux règles de reddition de comptes d\'IQ et de la Loi sur l\'accès à l\'information'
        }
      ],
      assemblyNationalEvents: [
        {
          topic: 'Débats intenses sur l\'accès aux contrats et les garanties financières',
          context: 'Période des questions orales au Salon bleu',
          quoteOrSummary: 'Les députés de l\'opposition ont exigé à répétition le dévoilement complet des ententes secrètes pour savoir si les Québécois perdraient leur mise en cas de faillite de l\'entreprise.',
          dateOrSession: '43e législature, 2023-2024'
        },
        {
          topic: 'Commission de l\'économie et du travail',
          context: 'Étude des crédits budgétaires à l\'Assemblée nationale',
          quoteOrSummary: 'Interrogatoire du ministre de l\'Économie sur la priorisation des blocs d\'énergie d\'Hydro-Québec alloués à des multinationales au détriment des entreprises locales.',
          dateOrSession: 'Printemps 2024'
        }
      ],
      officialReportsAndJudgments: [
        'Décrets gouvernementaux autorisant les interventions financières d\'Investissement Québec.',
        'Rapports d\'analyse environnementale du ministère de l\'Environnement, de la Lutte contre les changements climatiques, de la Faune et des Parcs (MELCCFP).',
        'Interventions de la Commission d\'accès à l\'information (CAI) sur les demandes de déclassification des clauses financières.'
      ],
      journalisticInvestigations: [
        'Enquêtes du journal Le Devoir sur la modification réglementaire sur mesure évitant le BAPE',
        'Analyses économiques de La Presse sur l\'exposition financière d\'Investissement Québec',
        'Reportages d\'investigation de Radio-Canada sur la crise de trésorerie de Northvolt en Suède'
      ],
      criticalVulnerabilities: [
        'Absence de clause de remboursement prioritaire garantie en cas d\'insolvabilité internationale',
        'Utilisation d\'arrêtés ministériels pour accélérer des projets industriels majeurs sans débat démocratique préalable',
        'Goulot d\'étranglement énergétique privant d\'autres secteurs économiques québécois'
      ],
      legalRecourses: [
        {
          body: 'Commission d\'accès à l\'information du Québec (CAI)',
          procedure: 'Recours pour forcer la divulgation de documents publics, contrats de subvention et correspondances ministérielles indûment caviardés.',
          applicableLaw: 'Loi sur l\'accès aux documents des organismes publics et sur la protection des renseignements personnels (RLRQ c. A-2.1)',
          whistleblowerProtection: 'Droit du public à l\'information garanti'
        },
        {
          body: 'Vérificateur général du Québec (VGQ)',
          procedure: 'Demande d\'audit de performance sur la rentabilité, les risques et la conformité des investissements d\'Investissement Québec.',
          applicableLaw: 'Loi sur le vérificateur général (RLRQ c. V-5.01)',
          whistleblowerProtection: 'Les employés de l\'État peuvent transmettre anonymement des pièces comptables'
        }
      ],
      impactOnCitizensAndChildren: 'Engager plusieurs milliards de dollars de la richesse collective dans un pari industriel privé à haut risque hypothèque la marge de manœuvre financière du Québec pour investir dans les hôpitaux pédiatriques, les services éducatifs spécialisés pour enfants en difficulté et la lutte contre la pauvreté des familles.',
      sourcesGrounding: [
        'Journal des débats de l\'Assemblée nationale du Québec',
        'États financiers et décrets d\'Investissement Québec',
        'Carrefour Lobby Québec',
        'Registre foncier du Québec'
      ]
    }
  },
  {
    id: 'protection-jeunesse-dpj-laurent',
    title: 'Crise de la DPJ, Garderies Privées & Commission Laurent',
    subtitle: 'Gestion des services aux enfants vulnérables, sous-financement des CPE et tragédies évitables',
    category: 'Services aux Enfants & Familles',
    tag: 'Commission Laurent & Avenir des Enfants',
    report: {
      subject: 'Protection de la jeunesse au Québec, Direction de la protection de la jeunesse (DPJ), réseaux des garderies et mise en œuvre des recommandations de la Commission Laurent',
      alertLevel: 'INFRACTION_AVÉRÉE',
      alertLevelLabel: 'Faillite Systémique Institutionnelle Documentée',
      integrityScore: 28,
      executiveSummary: 'La mort tragique de la fillette de Granby en 2019 a mené à la création de la Commission spéciale sur les droits des enfants et la protection de la jeunesse (Commission Laurent). Le rapport a conclu sans ambiguïté que le système québécois a failli à son devoir le plus sacré : protéger les enfants les plus vulnérables en raison de guerres de juridiction, de pénuries de personnel et d\'une bureaucratisation déshumanisante.',
      coreFinding: 'Une défaillance systémique de l\'État québécois où des signaux d\'alarme répétés concernant des enfants en danger sont restés sans suite, aggravée par un manque criant de ressources sur le terrain pendant que des millions étaient engloutis dans des réorganisations administratives.',
      verifiedFacts: [
        'Dépôt en mai 2021 du rapport de la Commission Laurent : plus de 550 pages documentant les ruptures de service auprès des enfants.',
        'La Commission a recommandé la création d\'un poste de Commissaire indépendant au bien-être et aux droits des enfants.',
        'Les listes d\'attente à la DPJ pour l\'évaluation et l\'attribution des dossiers d\'enfants signalés ont continué de croître dans plusieurs régions.',
        'Pénurie critique d\'éducatrices en petite enfance (CPE) forçant des milliers de mères à quitter le marché du travail ou à recourir à des garderies privées non subventionnées coûteuses.',
        'Plusieurs enquêtes de coroner ont réitéré que des décès d\'enfants auraient pu être évités si les recommandations de 2021 avaient été intégralement appliquées.'
      ],
      interestLinks: [
        {
          actorFrom: 'Ministère de la Santé et des Services sociaux (MSSS)',
          actorTo: 'Directions des CISSS / CIUSSS',
          relationship: 'Gestion hiérarchique centralisée imposant des cibles administratives au détriment des intervenants sociaux de première ligne',
          riskLevel: 'Critique',
          legalStatus: 'Responsabilité de l\'État en vertu de la Loi sur la protection de la jeunesse (LPJ)'
        },
        {
          actorFrom: 'Promoteurs de garderies privées à but lucratif',
          actorTo: 'Ministère de la Famille',
          relationship: 'Lobbyisme actif pour obtenir l\'autorisation de places et des crédits d\'impôt remboursables',
          riskLevel: 'Modéré',
          legalStatus: 'Encadré par la Loi sur les services de garde éducatifs à l\'enfance'
        }
      ],
      assemblyNationalEvents: [
        {
          topic: 'Adoption de la Loi 15 modifiant la Loi sur la protection de la jeunesse (2022)',
          context: 'Assemblée nationale du Québec',
          quoteOrSummary: 'Consécration du principe de l\'intérêt fondamental de l\'enfant et de la stabilité des liens d\'attachement, mais débats houleux sur l\'insuffisance des ressources humaines allouées.',
          dateOrSession: '42e législature'
        },
        {
          topic: 'Questions répétées sur la création du Commissaire à l\'enfance',
          context: 'Salon bleu de l\'Assemblée nationale',
          quoteOrSummary: 'Les députés de l\'opposition ont dénoncé les retards gouvernementaux de plusieurs années à nommer un Commissaire totalement indépendant du ministère.',
          dateOrSession: '43e législature, 2023-2024'
        }
      ],
      officialReportsAndJudgments: [
        'Rapport de la Commission spéciale sur les droits des enfants et la protection de la jeunesse présidée par Régine Laurent (Mai 2021).',
        'Rapports d\'enquêtes des coroners Me Géhane Kamel et Me Luc Malouin sur les décès d\'enfants signalés à la DPJ.',
        'Rapport spécial du Protecteur du citoyen du Québec sur les délais inacceptables de prise en charge des enfants vulnérables.'
      ],
      journalisticInvestigations: [
        'Dossier Enquête de Radio-Canada : "Dans les coulisses de la DPJ : l\'usure des intervenants"',
        'Série documentaire de La Presse : "Enfants brisés : le cri du cœur des travailleurs sociaux"',
        'Enquêtes du Devoir sur la précarité des services en pédopsychiatrie et le placement en famille d\'accueil'
      ],
      criticalVulnerabilities: [
        'Silos administratifs étanches entre le réseau de la santé, le milieu scolaire et les services de garde',
        'Plafonds de salaires et conditions de travail provoquant l\'exode des intervenants d\'expérience',
        'Inertie bureaucratique dans la mise en œuvre des recommandations d\'enquêtes publiques'
      ],
      legalRecourses: [
        {
          body: 'Protecteur du citoyen du Québec',
          procedure: 'Plainte d\'urgence concernant les manquements d\'un établissement de santé, d\'un CIUSSS ou de la DPJ à l\'égard d\'un enfant.',
          applicableLaw: 'Loi sur le Protecteur du citoyen (RLRQ c. P-32)',
          whistleblowerProtection: 'Pouvoir d\'enquête indépendant sans frais pour les familles'
        },
        {
          body: 'Commission des droits de la personne et des droits de la jeunesse (CDPDJ)',
          procedure: 'Dénonciation de toute atteinte aux droits fondamentaux d\'un enfant ou d\'une situation de négligence institutionnelle.',
          applicableLaw: 'Charte des droits et libertés de la personne (RLRQ c. C-12)',
          whistleblowerProtection: 'Capacité de saisir le Tribunal des droits de la personne'
        }
      ],
      impactOnCitizensAndChildren: 'Il s\'agit du cœur même de notre devoir collectif : chaque dollar gaspillé par mauvaise gouvernance, bureaucratie ou collusion est une heure d\'intervention perdue pour sauver un enfant de la maltraitance ou offrir une place d\'éveil de qualité dans un CPE à un tout-petit.',
      sourcesGrounding: [
        'Rapport Laurent (Commission spéciale sur la jeunesse)',
        'Rapports du Bureau du coroner du Québec',
        'Protecteur du citoyen du Québec',
        'Journal des débats de l\'Assemblée nationale'
      ]
    }
  },
  {
    id: 'subvention-kings-los-angeles',
    title: 'Subvention aux Kings de Los Angeles & Éthique Ministérielle',
    subtitle: 'Octroi de 5 à 7 millions de dollars de fonds publics à une équipe de la LNH et enquêtes déontologiques',
    category: 'Éthique & Députés',
    tag: 'Commissaire à l\'éthique & Finances publiques',
    report: {
      subject: 'Subvention gouvernementale de 5 à 7 millions $ accordée pour la tenue de deux matchs préparatoires des Kings de Los Angeles au Centre Vidéotron de Québec',
      alertLevel: 'ZONE_GRISE_DÉONTOLOGIQUE',
      alertLevelLabel: 'Jugement Politique Sévère & Controverse Déontologique',
      integrityScore: 38,
      executiveSummary: 'En novembre 2023, en pleine période d\'austérité budgétaire et de négociations salariales avec les enseignants et le personnel soignant, le gouvernement a octroyé entre 5 et 7 millions $ pour deux matchs hors-concours d\'une franchise milliardaire de la LNH à Québec. La décision a provoqué un tollé populaire et de multiples saisines du Commissaire à l\'éthique et à la déontologie.',
      coreFinding: 'Une dépense discrétionnaire de fonds publics décidée au plus haut niveau de l\'exécutif sans consultation préalable de l\'Assemblée nationale, en contradiction directe avec le discours officiel de rigueur financière.',
      verifiedFacts: [
        'Le montant consenti (jusqu\'à 7 M$) ne comportait aucune garantie de rentabilité économique pour les contribuables québécois.',
        'La décision a été annoncée quelques jours seulement après que le gouvernement ait affirmé ne pas avoir d\'argent pour bonifier l\'offre aux syndicats du secteur public.',
        'Le Commissaire à l\'éthique et à la déontologie (Me Ariane Mignolet) a été saisi de plusieurs plaintes visant le ministre des Finances Eric Girard.',
        'Le ministre a reconnu par la suite que la subvention aurait dû être mieux réfléchie devant l\'ampleur de l\'indignation citoyenne.'
      ],
      interestLinks: [
        {
          actorFrom: 'Cabinet du ministre des Finances du Québec',
          actorTo: 'Dirigeants des Kings de Los Angeles et gestionnaire du Centre Vidéotron (Québecor)',
          relationship: 'Négociation de gré à gré de deniers publics pour un événement commercial privé',
          riskLevel: 'Modéré',
          legalStatus: 'Pouvoir discrétionnaire ministériel mais soulève des questions de saine gestion'
        }
      ],
      assemblyNationalEvents: [
        {
          topic: 'Tempête politique au Salon bleu (Novembre-Décembre 2023)',
          context: 'Salon bleu de l\'Assemblée nationale du Québec',
          quoteOrSummary: 'Les partis d\'opposition ont dénoncé un mépris flagrant pour les Québécois confrontés à la hausse du coût de la vie et aux banques alimentaires débordées.',
          dateOrSession: '43e législature, 1re session'
        }
      ],
      officialReportsAndJudgments: [
        'Décisions et avis du Commissaire à l\'éthique et à la déontologie de l\'Assemblée nationale du Québec concernant les plaintes relatives au Code d\'éthique.',
        'Examen des dépenses du ministère des Finances lors de l\'étude des crédits budgétaires.'
      ],
      journalisticInvestigations: [
        'Sondages et analyses éditoriales de La Presse, Le Soleil et Le Devoir sur la rupture de confiance citoyenne',
        'Reportages de Radio-Canada sur l\'absence d\'étude d\'impact économique indépendante préalable à la subvention'
      ],
      criticalVulnerabilities: [
        'Pouvoir discrétionnaire accordé aux ministres sans balises rigoureuses sur les retombées économiques vérifiables',
        'Absence de clause d\'annulation ou de remboursement en cas de contestation publique majeure'
      ],
      legalRecourses: [
        {
          body: 'Commissaire à l\'éthique et à la déontologie (CED)',
          procedure: 'Demande d\'enquête déposée par un député de l\'Assemblée nationale concernant un manquement aux valeurs d\'intégrité ou d\'intérêt public.',
          applicableLaw: 'Code d\'éthique et de déontologie des membres de l\'Assemblée nationale (RLRQ c. C-23.1)',
          whistleblowerProtection: 'Pouvoir exclusif du Commissaire de recommander des sanctions au Salon bleu'
        }
      ],
      impactOnCitizensAndChildren: 'Cette subvention symbolise le décalage entre les priorités de la classe politique et les besoins urgents des enfants : ces 7 millions $ auraient pu financer plus de 1,4 million de repas scolaires gratuits pour des écoliers québécois défavorisés.',
      sourcesGrounding: [
        'Journal des débats de l\'Assemblée nationale',
        'Avis du Commissaire à l\'éthique et à la déontologie',
        'Registres des subventions du ministère des Finances du Québec'
      ]
    }
  },
  {
    id: 'dpj-mauricie-lesions-droits',
    title: 'Scandale DPJ Mauricie : Lésions de Droits sur 140 Enfants & Adoptions Forcées',
    subtitle: 'Enquête CDPDJ, dossiers d\'adoptions falsifiés, faits non vérifiés et mise sous tutelle par le ministre',
    category: 'Services aux Enfants & Familles',
    tag: 'Rapport Choc CDPDJ & Tutelle 2024',
    report: {
      subject: 'Direction de la protection de la jeunesse (DPJ) - CIUSSS de la Mauricie-et-du-Centre-du-Québec',
      alertLevel: 'INFRACTION_AVÉRÉE',
      alertLevelLabel: 'Lésions Systémiques de Droits & Mise sous Tutelle Ordonnée',
      integrityScore: 12,
      executiveSummary: 'Une enquête systémique historique de la Commission des droits de la personne et des droits de la jeunesse (CDPDJ) a révélé que la DPJ de la Mauricie-et-du-Centre-du-Québec a bafoué les droits fondamentaux de 140 enfants. Une culture organisationnelle déviante a systématiquement privilégié le placement et l\'accélération d\'adoptions plénières au détriment des familles biologiques, s\'appuyant dans 49 % des cas sur des faits non vérifiés, manipulés ou inventés.',
      coreFinding: 'Violation caractérisée de la Loi sur la protection de la jeunesse (LPJ) et de la Charte des droits et libertés. L\'appareil administratif a organisé une rupture prématurée et abusive des liens familiaux d\'enfants québécois sans leur offrir le soutien obligatoire, entraînant un taux d\'adoption 3 à 6 fois supérieur à la moyenne nationale et la mise sous tutelle officielle de l\'organisme en octobre 2024.',
      verifiedFacts: [
        'La CDPDJ a conclu formellement à des lésions de droits pour 140 enfants québécois suivis par cette direction régionale.',
        'Dans 49 % des dossiers analysés, les décisions de compromission et de retrait d\'enfant reposaient sur des faits non vérifiés ou déformés.',
        'Dans 57 % des cas, aucun soutien ou service concret n\'a été offert aux parents biologiques avant d\'enclencher la procédure de rupture de garde.',
        'Dans 63 % des situations, les membres de la famille élargie (grands-parents, oncles, tantes) prêts à accueillir l\'enfant ont été délibérément ignorés ou écartés.',
        'Les visites supervisées ont été instrumentalisées pour piéger les parents plutôt que pour consolider le lien affectif.',
        'En octobre 2024, le ministre Lionel Carmant a annoncé la mise sous tutelle de la direction régionale de la DPJ et ordonné un audit exhaustif de 157 dossiers d\'adoption.'
      ],
      interestLinks: [
        {
          actorFrom: 'Direction régionale DPJ Mauricie-Centre-du-Québec',
          actorTo: 'Familles d\'accueil postulant pour adoption plénière',
          relationship: 'Canalisation accélérée d\'enfants vers des projets d\'adoption permanente sans respecter le droit de retour dans le milieu naturel',
          riskLevel: 'Critique',
          legalStatus: 'Violation directe des articles 4, 8, 46, 53 et 54 de la Loi sur la protection de la jeunesse (LPJ)'
        },
        {
          actorFrom: 'Gestionnaires intermédiaires du CIUSSS MCQ',
          actorTo: 'Tribunal de la jeunesse de Trois-Rivières',
          relationship: 'Dépôt de rapports d\'évaluation contenant des omissions, informations non vérifiées et bilans biaisés sur les compétences parentales',
          riskLevel: 'Critique',
          legalStatus: 'Atteinte à l\'intégrité du processus judiciaire et responsabilité civile potentielle de l\'État'
        }
      ],
      assemblyNationalEvents: [
        {
          topic: 'Interpellation d\'urgence au Salon bleu sur la mise sous tutelle (Automne 2024)',
          context: 'Salon bleu de l\'Assemblée nationale du Québec',
          quoteOrSummary: 'Les oppositions ont exigé toute la lumière sur ce qu\'elles ont qualifié de dérive inacceptable, exigeant la révocation immédiate des adoptions contestées et la démission des cadres responsables.',
          dateOrSession: '43e législature, 1re session'
        },
        {
          topic: 'Séance de la Commission de la santé et des services sociaux',
          context: 'Audition parlementaire à Québec',
          quoteOrSummary: 'Le ministre Lionel Carmant a reconnu des manquements inacceptables et affirmé que la protection des enfants avait failli à sa mission la plus sacrée.',
          dateOrSession: 'Novembre 2024'
        }
      ],
      officialReportsAndJudgments: [
        'Rapport d\'enquête systémique de la Commission des droits de la personne et des droits de la jeunesse (CDPDJ) sur 140 enfants de la Mauricie-Centre-du-Québec (2024)',
        'Arrêté ministériel de mise sous tutelle et mandat d\'audit externe sur 157 dossiers d\'adoptions par le MSSS (2024-2025)',
        'Décisions de la Chambre de la jeunesse ordonnant la réouverture de dossiers pour vice de procédure et fausses déclarations'
      ],
      journalisticInvestigations: [
        'Enquêtes de Radio-Canada, TVA Nouvelles et La Presse dévoilant les témoignages déchirants de parents biologiques spoliés de leurs enfants',
        'Reportages d\'investigation sur les lanceurs d\'alerte et intervenants dénonçant l\'omerta et les consignes illégales de gestion'
      ],
      criticalVulnerabilities: [
        'Absence de contre-expertise indépendante obligatoire pour les parents avant toute requête en admissibilité à l\'adoption',
        'Pouvoir discrétionnaire excessif des évaluateurs de la DPJ face à des parents démunis ou sous-représentés judiciairement',
        'Fermeture hermétique de l\'accès au dossier médical et social en violation de la Loi sur les services de santé et les services sociaux'
      ],
      legalRecourses: [
        {
          body: 'Chambre de la jeunesse (Cour du Québec)',
          procedure: 'Requête en révision d\'ordonnance ou en rétractation de jugement en vertu de l\'article 95 de la LPJ pour fraude, faux témoignage ou fait nouveau déterminant.',
          applicableLaw: 'Loi sur la protection de la jeunesse (LPJ, RLRQ c. P-34.1, art. 95)',
          whistleblowerProtection: 'Représentation par avocat d\'office et recours direct au tribunal'
        },
        {
          body: 'Commission des droits de la personne et des droits de la jeunesse (CDPDJ)',
          procedure: 'Plainte formelle pour lésion de droits de l\'enfant et atteinte discriminatoire à la Charte des droits et libertés.',
          applicableLaw: 'Charte des droits et libertés de la personne (RLRQ c. C-12, art. 1, 39 et 40)',
          whistleblowerProtection: 'Protection absolue de la CDPDJ contre les représailles administratives'
        },
        {
          body: 'Recours civil en responsabilité contre le CIUSSS et l\'État québécois',
          procedure: 'Poursuite en dommages-intérêts punitifs et moraux pour faute lourde commise par des mandataires de la DPJ.',
          applicableLaw: 'Code civil du Québec (art. 1457 et 1607 C.c.Q.)',
          whistleblowerProtection: 'Prescription prorogée en cas de dissimulation intentionnelle de preuves'
        }
      ],
      impactOnCitizensAndChildren: 'Cette affaire représente la plus grave atteinte systémique aux droits des familles depuis les orphelins de Duplessis : des dizaines d\'enfants ont été séparés de façon permanente de parents aimants sur la foi de dossiers truqués, laissant des traumatismes psychologiques indélébiles.',
      sourcesGrounding: [
        'Rapport officiel CDPDJ (2024) - Lésions de droits de 140 enfants',
        'Ministère de la Santé et des Services sociaux (MSSS) - Décret de tutelle',
        'Jugements de la Cour du Québec (Chambre de la jeunesse)',
        'Journal des débats de l\'Assemblée nationale'
      ]
    }
  },
  {
    id: 'big-brother-elite-surveillance',
    title: '« Big Brother » Numérique, Commissions d\'Enquête & Collusion des Élites',
    subtitle: 'Grand dossier d\'enquête sur les commissions publiques, scandales IT d\'État (ArriveCAN, SAAQclic), McKinsey et dérives policières',
    category: 'Commissions d\'Enquête & Élites',
    tag: 'Commissions d\'Enquête & Rapports VG',
    report: {
      subject: 'Dossier des Élites : Grandes commissions d\'enquête sur le gouvernement (Charbonneau, Gomery, Bastarache, Chamberland, Poitras), scandales IT (ArriveCAN, SAAQclic), McKinsey et surveillance des citoyens au Québec et au Canada.',
      alertLevel: 'INFRACTION_AVÉRÉE',
      alertLevelLabel: 'Commissions d\'Enquête Historiques, Contrats Secrets & Collusion des Élites Documentée',
      integrityScore: 18,
      executiveSummary: 'Les grandes commissions d\'enquête publiques sur le gouvernement (Charbonneau sur la collusion, Gomery sur les commandites, Bastarache sur les juges, Chamberland sur l\'espionnage de la presse, Poitras sur la SQ) combinées aux audits accablants des Vérificateurs généraux révèlent un fil conducteur historique : la propension des élites politiques et administratives à contourner les lois pour privilégier des réseaux partisans d\'initiés, des cartels d\'affaires et des firmes de consultants intouchables (McKinsey, GCStrategies, SNC-Lavalin).',
      coreFinding: 'Une mécanique récurrente où les élites au pouvoir neutralisent les contre-pouvoirs démocratiques (parlement, journalistes, lanceurs d\'alerte), détournent des centaines de millions de dollars de fonds publics par des contrats opaques ou des prête-noms, jusqu\'à ce que des commissions d\'enquête citoyennes indépendantes forcent l\'ouverture des archives de l\'État.',
      verifiedFacts: [
        'Commission Charbonneau (2011-2015) : Preuve d\'un cartel de firmes de génie et d\'entrepreneurs finançant illégalement les partis politiques via des employés prête-noms avec 20% à 30% de surfacturation sur les contrats publics.',
        'Commission Bastarache (2010-2011) : Révélations de pressions directes des grands collecteurs de fonds du parti au pouvoir pour influencer la nomination des juges de la Cour du Québec au détriment de l\'indépendance de la justice.',
        'Commission Gomery (2004-2006) : Détournement prouvé de plus de 100 millions $ de fonds publics fédéraux via de fausses factures publicitaires et des ristournes en argent liquide alimentant les caisses électorales libérales.',
        'Commission Chamberland (2016-2017) : Constat d\'espionnage policier illégal de journalistes d\'enquête québécois (Patrick Lagacé, Michael Nguyen) par la SQ et le SPVM pour étouffer les fuites sur la corruption des élites.',
        'Commission Poitras (1996-1999) : Rapport en 4 tomes sur la Sûreté du Québec constatant la fabrication de fausses preuves par des policiers, des parjures en cour et des écoutes clandestines.',
        'Scandale ArriveCAN & GCStrategies (VG du Canada, 2024) : Projet passé de 80 000 $ à 59,5 millions $ avec « la pire tenue de registres financiers » et des intermédiaires dans un sous-sol touchant 19 M$ de commissions sans coder.',
        'Contrats McKinsey & Cabinets Mondiaux : Plus de 35 millions $ accordés sans appel d\'offres sous l\'urgence sanitaire par le gouvernement québécois et plus de 100 M$ au fédéral pour dicter des politiques publiques sans contrôle parlementaire.',
        'Fiasco SAAQclic (Québec) : Plus de 500 millions $ dépensés dans un système informatique paralysé avec une dépendance systémique envers des consultants privés externes.',
        'Outils d\'intrusion de la GRC : Reconnaissance officielle devant le Parlement de l\'utilisation d\'outils espions de type logiciels espions (ODITs) capables d\'activer micros, caméras et géolocalisation de citoyens sans cadre législatif clair voté par les députés.'
      ],
      interestLinks: [
        {
          actorFrom: 'Hauts fonctionnaires (ASPC, TPSGC, Ministères)',
          actorTo: 'Courtiers privés & Firme GCStrategies',
          relationship: 'Invitations à des soupers, cadeaux non déclarés et rédaction conjointe des critères d\'appels d\'offres pour éliminer la concurrence',
          riskLevel: 'Critique',
          legalStatus: 'Renvoyé à la GRC (Division des crimes financiers) et au Commissaire aux conflits d\'intérêts'
        },
        {
          actorFrom: 'Cabinets politiques (Québec & Ottawa)',
          actorTo: 'Multinationales du conseil (McKinsey, Deloitte, PwC)',
          relationship: 'Sous-traitance de la souveraineté décisionnelle : délégation de l\'écriture des politiques de santé et d\'énergie à des firmes privées',
          riskLevel: 'Critique',
          legalStatus: 'Violations des directives du Conseil du Trésor et de la Loi sur les contrats des organismes publics'
        },
        {
          actorFrom: 'Appareils de sécurité d\'État (SQ, SPVM, GRC)',
          actorTo: 'Journalistes & Lanceurs d\'alerte',
          relationship: 'Surveillance technologique pour museler les révélations sur la corruption et identifier les sources de fuites',
          riskLevel: 'Critique',
          legalStatus: 'Sévèrement blâmé par la Commission Chamberland; lois protectrices des sources adoptées a posteriori'
        }
      ],
      assemblyNationalEvents: [
        {
          topic: 'Comité permanent des opérations gouvernementales (OGGO - Ottawa)',
          context: 'Chambre des communes du Canada (2023-2024)',
          quoteOrSummary: 'Témoignages fracassants révélant des contrats antidatés, des courriels supprimés et des fonctionnaires fédéraux suspendus sans solde dans le dossier ArriveCAN et GCStrategies.',
          dateOrSession: '44e législature, 1re session'
        },
        {
          topic: 'Débats au Salon Bleu sur l\'empire des consultants & Eric Caire',
          context: 'Assemblée nationale du Québec',
          quoteOrSummary: 'Les oppositions ont exigé la démission du ministre de la Cybersécurité et du Numérique face à l\'explosion des coûts informatiques et au refus de rendre publics les contrats de McKinsey.',
          dateOrSession: '43e législature, débats de 2023-2024'
        }
      ],
      officialReportsAndJudgments: [
        'Rapport de la Vérificatrice générale du Canada sur ArriveCAN (Février 2024) concluant à un manque total de rigueur financière',
        'Rapports du Vérificateur général du Québec sur la gestion contractuelle des TI et le système SAAQclic (2023-2024)',
        'Rapport de la Commission Chamberland (2017) sur l\'espionnage policier des journalistes d\'enquête au Québec'
      ],
      journalisticInvestigations: [
        'Enquêtes du Bureau d\'enquête de Québecor et de La Presse sur l\'explosion des contrats de McKinsey au Québec',
        'Enquêtes de Radio-Canada et The Globe and Mail sur les millions perçus par GCStrategies pour ArriveCAN'
      ],
      criticalVulnerabilities: [
        'Violation des règles fondamentales d\'octroi de contrats publics (artifice des contrats d\'exception et de gré à gré)',
        'Atteinte disproportionnée au droit fondamental à la vie privée des citoyens (art. 5 de la Charte québécoise et art. 8 de la Charte canadienne)',
        'Facturations en cascade : des firmes intermédiaires empochent 15% à 30% de commission sans fournir le moindre travail technique',
        'Portes tournantes accélérées : passage direct de directeurs de projets informatiques d\'État vers des postes grassement rémunérés chez les fournisseurs privés'
      ],
      legalRecourses: [
        {
          body: 'Gendarmerie royale du Canada (GRC) & UPAC',
          procedure: 'Enquêtes criminelles pour fraude envers le gouvernement, corruption de fonctionnaires et abus de confiance (art. 121 et 122 du Code criminel).',
          applicableLaw: 'Code criminel du Canada (L.R.C. (1985), ch. C-46, art. 121, 122, 380)',
          whistleblowerProtection: 'Protection des dénonciateurs et immunité des témoins sous contrôle judiciaire'
        },
        {
          body: 'Commissariats à la protection de la vie privée (Québec - CAI et Canada - CPVP)',
          procedure: 'Enquêtes d\'office sur le déploiement de technologies de surveillance biométrique et le partage illégal de données personnelles de citoyens.',
          applicableLaw: 'Loi sur la protection des renseignements personnels (Loi 25 au Québec, LPRPDE au fédéral)',
          whistleblowerProtection: 'Pouvoir d\'ordonnance contraignant et sanctions administratives pécuniaires'
        },
        {
          body: 'Vérificateurs généraux (VGQ au Québec, VG du Canada)',
          procedure: 'Audits de performance indépendants et saisine automatique des comités des comptes publics de l\'Assemblée nationale et du Parlement.',
          applicableLaw: 'Loi sur le vérificateur général (RLRQ c. V-5.01) et Loi sur le vérificateur général du Canada',
          whistleblowerProtection: 'Ligne directe de signalement de gaspillage et protection légale contre les représailles'
        }
      ],
      impactOnCitizensAndChildren: 'Les centaines de millions de dollars siphonnés dans des contrats informatiques fictifs ou surévalués privent directement les écoles, les hôpitaux et les services de protection de la jeunesse (DPJ) de ressources vitales. De plus, la normalisation de la surveillance d\'État sans contre-pouvoir menace les libertés civiles des générations futures québécoises et canadiennes.',
      sourcesGrounding: [
        'Rapport de la Vérificatrice générale du Canada sur l\'application ArriveCAN (Février 2024)',
        'Rapports du Vérificateur général du Québec sur les contrats informatiques et SAAQclic (2023-2024)',
        'Rapport de la Commission d\'enquête sur la protection de la confidentialité des sources journalistiques (Commission Chamberland, 2017)',
        'Témoignages officiels devant le Comité permanent OGGO de la Chambre des communes'
      ]
    }
  },
  {
    id: 'dpj-superbase-derives-1995-2026',
    title: 'Superbase Enquêtes Médias : Dérives, Viols & Corruption DPJ (1995–2026)',
    subtitle: 'Consolidation de 30 ans d\'investigations journalistiques, entrevues de survivants, recours collectifs de 1,5 milliard $ et failles systémiques de la LPJ',
    category: 'Services aux Enfants & Familles',
    tag: 'Superbase 1995-2026 • 15 000+ Victimes',
    report: {
      subject: 'Protection de la jeunesse (DPJ), centres de réadaptation (Cité des Prairies, Huberdeau, Shawbridge, Laval), sévices sexuels, proxénétisme juvénile, faux rapports et corruption administrative depuis 1995',
      alertLevel: 'INFRACTION_AVÉRÉE',
      alertLevelLabel: 'Faillite Systémique & Recours Collectifs Historiques (1995–2026)',
      integrityScore: 18,
      executiveSummary: 'Depuis 1995, plus de trois décennies d\'enquêtes journalistiques d\'impact (Radio-Canada Enquête, TVA J.E., Bureau d\'enquête, La Presse) ont mis au jour une chaîne continue d\'abus au sein de la DPJ et des centres de réadaptation : viols institutionnels, prostitution juvénile tolérée, rapports d\'évaluation falsifiés, mise sous tutelle de directions régionales (Mauricie-Centre-du-Québec), recours illégal à des motels de transit et inconduites sexuelles d\'éducatrices à Laval.',
      coreFinding: 'Une culture d\'omerta et d\'impunité au sein de l\'appareil de protection de la jeunesse, caractérisée par la protection corporatiste des gestionnaires, la criminalisation des dénonciateurs et l\'incapacité de l\'État québécois à garantir la sécurité physique et la dignité des enfants confiés à sa garde (parens patriae).',
      verifiedFacts: [
        'Plus de 15 000 anciens pensionnaires regroupés dans un méga-recours collectif national réclamant 1,5 milliard $ pour des abus physiques et sexuels subis dans 16 centres jeunesse depuis 1990.',
        'Scandale Cité des Prairies et Huberdeau-Shawbridge : condamnations judiciaires et versements de dizaines de millions de dollars en dédommagements par le gouvernement du Québec.',
        '« Les Filles de Laval » (2008-2016) : des centaines de fugues annuelles exploitées par des gangs de rue pour le proxénétisme juvénile sous le regard impuissant ou complaisant des directions.',
        'Enquête de la CDPDJ en Mauricie-Centre-du-Québec (2023-2024) : 140 enfants victimes de lésions de droits caractérisées, faux rapports au Tribunal et adoptions forcées, menant à la tutelle du CIUSSS.',
        'Crise des motels de transit (2022-2024) : des dizaines d\'enfants hébergés illégalement dans des motels surveillés par des agents de sécurité privés non formés, entraînant des décès par surdose et des agressions.'
      ],
      interestLinks: [
        {
          actorFrom: 'Haute direction du MSSS & Directions régionales DPJ',
          actorTo: 'Tribunal de la jeunesse & Cabinets juridiques',
          relationship: 'Défense institutionnelle agressive et contestation systématique des recours des victimes pour retarder les indemnisations',
          riskLevel: 'Critique',
          legalStatus: 'Responsabilité civile de l\'État en vertu du Code civil du Québec et de la Charte québécoise'
        },
        {
          actorFrom: 'Centres de réadaptation jeunesse',
          actorTo: 'Compagnies privées de gardiennage et motels commerciaux',
          relationship: 'Octroi de contrats d\'hébergement de fortune sans agrément clinique pour contourner le manque criant de familles d\'accueil',
          riskLevel: 'Critique',
          legalStatus: 'Violation flagrante de l\'article 44 de la LPJ'
        }
      ],
      assemblyNationalEvents: [
        {
          topic: 'Commission spéciale sur les droits des enfants (Commission Laurent - 2019-2021)',
          context: 'Audiences publiques et rapport final',
          quoteOrSummary: 'Témoignages poignants de survivants ayant subi des abus sous la garde de la DPJ, conclusion formelle que le système a failli à son mandat fondamental.',
          dateOrSession: '42e législature du Québec'
        },
        {
          topic: 'Motion unanime de blâme sur la crise des motels et les éducatrices de Laval (2024)',
          context: 'Assemblée nationale du Québec',
          quoteOrSummary: 'Les députés de tous les partis ont sommé le ministre délégué Lionel Carmant de démettre les gestionnaires responsables et d\'interdire l\'hébergement commercial des enfants.',
          dateOrSession: '43e législature, Session 2024'
        }
      ],
      officialReportsAndJudgments: [
        'Rapports d\'enquêtes publiques des Coroners Me Géhane Kamel (Granby) et Me Luc Malouin (Wendake)',
        'Rapport d\'enquête systémique de la CDPDJ sur les 140 enfants de la Mauricie (Dossier 2021-0428)',
        'Rapports d\'enquêtes du Protecteur du citoyen sur les mesures de contention et les motels de transit (2003, 2022)',
        'Jugements d\'autorisation d\'actions collectives de la Cour supérieure du Québec (Huberdeau, Shawbridge, Cité des Prairies, Recours national 2025)'
      ],
      journalisticInvestigations: [
        'Radio-Canada Enquête : Reportages d\'Alain Gravel (1995), Marie-Maude Denis (2019, 2023) sur Cité des Prairies, Granby et la Mauricie',
        'TVA J.E. & Denis Lévesque : Enquêtes sur Huberdeau, les gangs de rue et le proxénétisme des fugueuses de Laval',
        'La Presse : Grandes enquêtes d\'Isabelle Hachey (« Les Filles de Laval ») et de Katia Gagnon',
        'Bureau d\'enquête de Québecor : Révélations sur les motels de transit et le scandale sexuel des éducatrices de Laval (2024)'
      ],
      criticalVulnerabilities: [
        'Absence de surveillance civile indépendante et impartiale des centres jeunesse',
        'Monopole de la parole accordé aux rapports d\'évaluation de la DPJ devant le Tribunal sans contre-expertise accessible pour les familles vulnérables',
        'Destruction ou dissimulation d\'archives institutionnelles dénoncée dans les recours collectifs'
      ],
      legalRecourses: [
        {
          body: 'Cour supérieure du Québec - Recours Collectif National',
          procedure: 'Adhésion au recours collectif pour les anciens pensionnaires ayant subi des violences, agressions sexuelles ou privations de droits fondamentaux.',
          applicableLaw: 'Code de procédure civile (RLRQ c. C-25.01) et Charte des droits et libertés de la personne',
          whistleblowerProtection: 'Témoignages protégés sous ordonnance de non-publication et de confidentialité'
        },
        {
          body: 'Commission des droits de la personne et de la jeunesse (CDPDJ)',
          procedure: 'Dépôt de plainte en lésion de droits (art. 23 et 48 de la Charte) pour violation des droits fondamentaux d\'un enfant sous garde.',
          applicableLaw: 'Charte des droits et libertés de la personne (RLRQ c. C-12, art. 74 et suivants)',
          whistleblowerProtection: 'Pouvoir d\'enquête d\'office et représentations directes devant le Tribunal des droits de la personne'
        },
        {
          body: 'Protecteur du citoyen (Loi sur le Protecteur du citoyen)',
          procedure: 'Signalement d\'un manquement grave, d\'un hébergement illégal en motel ou d\'un abus d\'autorité au sein d\'un CISSS/CIUSSS.',
          applicableLaw: 'Loi sur le Protecteur du citoyen (RLRQ c. P-32) et Loi facilitant la divulgation d\'actes répréhensibles (Loi D-11.1)',
          whistleblowerProtection: 'Immunité stricte contre toutes représailles disciplinaires ou professionnelles'
        }
      ],
      impactOnCitizensAndChildren: 'Les 30 années de dérives et de failles documentées ont brisé des milliers de trajectoires de vie, laissant des générations de jeunes Québécois avec des traumatismes psychologiques indélébiles, tandis que des centaines de millions de dollars ont été versés en contentieux et indemnisations au lieu d\'être investis dans la prévention et le soutien aux familles.',
      sourcesGrounding: [
        'Archives journalistiques Radio-Canada (Enquête, Le Point, Téléjournal)',
        'Archives TVA Nouvelles (J.E., Le TVA 18h, Denis Lévesque)',
        'Enquêtes de La Presse (Isabelle Hachey, Katia Gagnon)',
        'Rapports officiels de la CDPDJ et du Protecteur du citoyen',
        'Registres des greffes de la Cour supérieure du Québec'
      ]
    }
  },
  {
    id: 'commission-bastarache-juges',
    title: 'Commission Bastarache : Nomination des Juges & Pouvoir des Élites',
    subtitle: 'Allégations de trafic d\'influence, collecteurs de fonds libéraux au bureau du premier ministre et dépolitisation de la magistrature',
    category: 'Commissions d\'Enquête & Élites',
    tag: 'Rapport Bastarache • Nominations Judiciaires',
    report: {
      subject: 'Commission d\'enquête sur le processus de nomination des juges du Québec (Commission Bastarache)',
      alertLevel: 'ENQUÊTE_OFFICIELLE',
      alertLevelLabel: 'Ingérence Politique Suspectée & Dépolitisation de la Justice Exigée',
      integrityScore: 26,
      executiveSummary: 'Instituée suite aux déclarations fracassantes de l\'ex-ministre de la Justice Marc Bellemare, la Commission présidée par l\'ex-juge de la Cour suprême Michel Bastarache a mis en lumière l\'accès privilégié et l\'influence informelle des grands collecteurs de fonds du Parti libéral du Québec (Franco Fava, Charles Rondeau) auprès du cabinet du premier ministre Jean Charest pour pousser des candidats à la magistrature de la Cour du Québec.',
      coreFinding: 'Un processus de nomination opaque et perméable aux pressions partisanes qui minait gravement la confiance du public dans l\'indépendance de la magistrature québécoise et favorisait les proches du pouvoir politique.',
      verifiedFacts: [
        'L\'ex-ministre de la Justice Marc Bellemare a témoigné sous serment avoir reçu des pressions indues de collecteurs de fonds lors de déjeuners privés au restaurant Le Michelangelo à Québec.',
        'La Commission a documenté l\'accès direct de collecteurs de fonds partisans au cabinet du premier ministre et leur intérêt marqué pour les nominations de juges.',
        'Le rapport final a dénoncé les failles béantes du système de sélection qui laissait un pouvoir discrétionnaire excessif au ministre et à son entourage politique.',
        'Réforme complète adoptée en 2011 obligeant le gouvernement à choisir obligatoirement parmi trois candidats recommandés par un comité de sélection indépendant et dépolitisé.'
      ],
      interestLinks: [
        {
          actorFrom: 'Grands collecteurs de fonds du parti au pouvoir (Franco Fava, Charles Rondeau)',
          actorTo: 'Cabinet du premier ministre (Jean Charest)',
          relationship: 'Canal direct de communication et recommandations officieuses de candidats juges',
          riskLevel: 'Critique',
          legalStatus: 'Soumis au Code d\'éthique et aux règles d\'impartialité judiciaire'
        },
        {
          actorFrom: 'Ministre de la Justice',
          actorTo: 'Comités de sélection des juges de la Cour du Québec',
          relationship: 'Pouvoir de veto et sélection discrétionnaire des nominations à la magistrature',
          riskLevel: 'Critique',
          legalStatus: 'Désormais encadré par le Règlement sur la sélection des juges révisé'
        }
      ],
      assemblyNationalEvents: [
        {
          topic: 'Tempête politique au Salon bleu sur les révélations de Marc Bellemare (Avril 2010)',
          context: 'Période des questions orales à l\'Assemblée nationale',
          quoteOrSummary: 'Les partis d\'opposition ont exigé sans relâche une commission d\'enquête publique indépendante dotée des pleins pouvoirs pour forcer le premier ministre à témoigner sous serment.',
          dateOrSession: '39e législature du Québec'
        },
        {
          topic: 'Dépôt du rapport Bastarache et adoption du Code d\'éthique (2011)',
          context: 'Salon bleu de l\'Assemblée nationale',
          quoteOrSummary: 'Adoption à l\'unanimité des réformes de dépolitisation et création du poste de Commissaire à l\'éthique et à la déontologie.',
          dateOrSession: 'Décembre 2010 - Printemps 2011'
        }
      ],
      officialReportsAndJudgments: [
        'Rapport de la Commission d\'enquête sur le processus de nomination des juges (Rapport Bastarache, Janvier 2011)',
        'Règlement sur la procédure de sélection des candidats à la fonction de juge de la Cour du Québec',
        'Loi sur les tribunaux judiciaires (RLRQ c. T-16)'
      ],
      journalisticInvestigations: [
        'Enquêtes de La Presse (Denis Lessard, Vincent Marissal) sur les coulisses du pouvoir libéral et les collectes de fonds',
        'Reportages de Radio-Canada sur les déjeuners du Michelangelo et les témoignages devant la Commission',
        'Analyses juridiques du Devoir sur l\'indépendance judiciaire au Québec'
      ],
      criticalVulnerabilities: [
        'Perméabilité de l\'appareil d\'État aux sollicitations de bailleurs de fonds politiques',
        'Absence historique de comités de sélection totalement hermétiques aux interférences partisanes',
        'Risque de corruption feutrée dans les nominations stratégiques de la haute administration publique'
      ],
      legalRecourses: [
        {
          body: 'Conseil de la magistrature du Québec',
          procedure: 'Plainte déontologique contre un juge pour manquement aux devoirs d\'intégrité, d\'impartialité ou conflits d\'intérêts.',
          applicableLaw: 'Loi sur les tribunaux judiciaires (RLRQ c. T-16) et Code de déontologie de la magistrature',
          whistleblowerProtection: 'Audition publique et pouvoir de recommandation de destitution'
        },
        {
          body: 'Commissaire à l\'éthique et à la déontologie (CED)',
          procedure: 'Enquête sur tout manquement d\'un ministre ou député concernant l\'utilisation de sa charge publique à des fins partisanes.',
          applicableLaw: 'Code d\'éthique et de déontologie des membres de l\'Assemblée nationale (RLRQ c. C-23.1)',
          whistleblowerProtection: 'Protection garantie par l\'Assemblée nationale'
        }
      ],
      impactOnCitizensAndChildren: 'Lorsque les tribunaux et les juges de la Chambre de la jeunesse sont perçus comme tributaires de réseaux d\'influence politique, c\'est la protection des citoyens ordinaires et des enfants québécois les plus vulnérables qui est directement compromise.',
      sourcesGrounding: [
        'Rapport officiel Bastarache (2011)',
        'Journal des débats de l\'Assemblée nationale du Québec',
        'Décrets ministériels 328-2010 et 428-2010',
        'Témoignages transcrits sous serment devant la Commission'
      ]
    }
  },
  {
    id: 'commission-gomery-commandites',
    title: 'Commission Gomery : Scandale des Commandites & Caisses Noires',
    subtitle: 'Détournement de 100 millions $ de fonds publics, fausses factures et ristournes électorales au Parti libéral du Canada',
    category: 'Commissions d\'Enquête & Élites',
    tag: 'Rapport Gomery • 100 M$ Détournés',
    report: {
      subject: 'Commission d\'enquête sur le programme de commandites et les activités publicitaires (Commission Gomery)',
      alertLevel: 'INFRACTION_AVÉRÉE',
      alertLevelLabel: 'Fraude Criminelle Envers le Gouvernement & Condamnations Multiples',
      integrityScore: 10,
      executiveSummary: 'Le scandale des commandites (« Sponsorship Scandal ») constitue l\'un des plus grands scandales de détournement de deniers publics de l\'histoire canadienne et québécoise. Plus de 100 millions $ ont été siphonnés par un réseau d\'agences publicitaires montréalaises (Groupaction, Lafleur, Everest) et de barons politiques du Parti libéral du Canada via des fausses factures et des ristournes illégales en argent comptant.',
      coreFinding: 'Une conspiration politique et financière où les programmes de visibilité fédérale ont été détournés pour constituer une caisse noire partisane, enrichir des publicitaires complices et acheter des influences électorales au Québec.',
      verifiedFacts: [
        'La Vérificatrice générale Sheila Fraser a déposé en 2004 un rapport explosif révélant que 100 M$ sur 332 M$ de contrats de commandite avaient été versés sans justification ni contrôle.',
        'La Commission présidée par le juge John Gomery a siégé de 2004 à 2005, exposant les témoignages ahurissants d\'enveloppes brunes d\'argent liquide circulant dans les bureaux de campagne.',
        'Chuck Guité (directeur des services de communication) et Jean Brault (patron de Groupaction) ont été condamnés à des peines d\'emprisonnement ferme pour fraude.',
        'Jacques Corriveau, proche organisateur de Jean Chrétien, a été condamné en 2016 à 4 ans de prison pour avoir touché près de 7 millions $ de pots-de-vin.',
        'Le Parti libéral du Canada a été forcé de rembourser plus d\'un million de dollars de fonds illicites ayant transité par ses caisses.'
      ],
      interestLinks: [
        {
          actorFrom: 'Cabinet du premier ministre (Jean Chrétien / Alfonso Gagliano)',
          actorTo: 'Directeur du CCSB (Chuck Guité)',
          relationship: 'Instructions politiques directes pour contourner les appels d\'offres et favoriser des agences amies',
          riskLevel: 'Critique',
          legalStatus: 'Infraction criminelle d\'abus de confiance et fraude envers le gouvernement'
        },
        {
          actorFrom: 'Agences de publicité (Groupaction, Lafleur, Everest)',
          actorTo: 'Organisateurs électoraux du PLC (Jacques Corriveau)',
          relationship: 'Paiement de fausses factures et ristournes en argent comptant pour financer le parti',
          riskLevel: 'Critique',
          legalStatus: 'Condamnations pour recyclage des produits de la criminalité et fraude'
        }
      ],
      assemblyNationalEvents: [
        {
          topic: 'Débats historiques à la Chambre des communes et motion de censure (2004-2005)',
          context: 'Parlement d\'Ottawa',
          quoteOrSummary: 'Les révélations quotidiennes ont paralysé le gouvernement Martin, culminant par le renversement du gouvernement et l\'élection générale de 2006.',
          dateOrSession: '38e législature du Canada'
        }
      ],
      officialReportsAndJudgments: [
        'Rapports de la Commission Gomery (Phase I : « Qui est responsable ? » et Phase II : « Rétablir l\'imputabilité », 2005-2006)',
        'Rapport de la Vérificatrice générale du Canada Sheila Fraser (Février 2004)',
        'Jugements de culpabilité de la Cour supérieure du Québec contre Chuck Guité, Jean Brault et Jacques Corriveau'
      ],
      journalisticInvestigations: [
        'Enquêtes pionnières de Daniel Leblanc (The Globe and Mail) révélant les contrats suspects de Groupaction',
        'Reportages d\'investigation de Radio-Canada et de La Presse sur les caisses noires et le train de vie des publicitaires du régime'
      ],
      criticalVulnerabilities: [
        'Contrats de services de communication accordés de gré à gré sous le prétexte de « l\'unité nationale »',
        'Confusion délibérée entre l\'appareil gouvernemental neutre et la machine électorale du parti au pouvoir',
        'Destruction ou absence volontaire de dossiers administratifs et de pièces justificatives de dépenses'
      ],
      legalRecourses: [
        {
          body: 'Gendarmerie royale du Canada (GRC) - Division des crimes financiers',
          procedure: 'Dépôt de plaintes criminelles pour fraude envers le gouvernement (art. 380 C.cr.) et abus de confiance par un fonctionnaire public (art. 122 C.cr.).',
          applicableLaw: 'Code criminel du Canada (L.R.C. (1985), ch. C-46)',
          whistleblowerProtection: 'Immunité judiciaire et protection des informateurs de police'
        },
        {
          body: 'Directeur des poursuites pénales du Canada (DPPC)',
          procedure: 'Poursuites criminelles fédérales indépendantes du ministre de la Justice.',
          applicableLaw: 'Loi sur le directeur des poursuites pénales (L.C. 2006, ch. 9, art. 121)',
          whistleblowerProtection: 'Garantie d\'indépendance constitutionnelle'
        }
      ],
      impactOnCitizensAndChildren: 'Les dizaines de millions de dollars de fonds publics siphonnés par des publicitaires et des organisateurs politiques représentent des budgets retirés aux transferts canadiens en santé, aux garderies éducatives et aux programmes de réduction de la pauvreté des familles.',
      sourcesGrounding: [
        'Rapports finaux de la Commission Gomery (2005-2006)',
        'Rapports du Bureau du vérificateur général du Canada (2004)',
        'Archives judiciaires de la Cour supérieure du Québec (Dossiers Guité, Brault, Corriveau)'
      ]
    }
  },
  {
    id: 'commission-chamberland-espionnage',
    title: 'Commission Chamberland : Espionnage Policier des Journalistes & Protection des Sources',
    subtitle: 'Mandats secrets de la Sûreté du Québec et du SPVM contre les médias d\'investigation pour traquer les lanceurs d\'alerte de l\'État',
    category: 'Commissions d\'Enquête & Élites',
    tag: 'Rapport CERP • Espionnage d\'État',
    report: {
      subject: 'Commission d\'enquête sur la protection de la confidentialité des sources journalistiques (Commission Chamberland)',
      alertLevel: 'INFRACTION_AVÉRÉE',
      alertLevelLabel: 'Graves Violations Constitutionnelles & Abus de Pouvoir Policier',
      integrityScore: 16,
      executiveSummary: 'À l\'automne 2016, les révélations de l\'espionnage policier de journalistes d\'enquête québécois (Patrick Lagacé, Michael Nguyen, Fabrice de Pierrebourg, Alain Gravel) par la SQ et le SPVM ont provoqué une onde de choc démocratique. Présidée par le juge Jacques Chamberland de la Cour d\'appel, la commission a dévoilé que les forces de l\'ordre détournaient des pouvoirs de surveillance électronique pour identifier et museler les sources dénonçant la corruption publique.',
      coreFinding: 'Une dérive intolérable des appareils policiers québécois qui ont ciblé la presse d\'investigation pour protéger l\'omerta institutionnelle, avec la complaisance de juges de paix ayant signé des dizaines de mandats liberticides sans justification.',
      verifiedFacts: [
        'Le journaliste Patrick Lagacé a fait l\'objet de 24 mandats de surveillance policière secrets émis en 2016 par la police de Montréal.',
        'La Sûreté du Québec (SQ) a placé sous écoute et suivi GPS les téléphones de six journalistes d\'enquête majeurs dans le cadre du projet Mâchouillon.',
        'Les policiers ont accédé sans filtre à des registres d\'appels, à des données de géolocalisation et à des messages textuels confidentiels de journalistes.',
        'Le rapport final déposé en décembre 2017 a recommandé l\'interdiction totale pour les juges de paix d\'émettre de tels mandats et l\'immunité accrue pour les sources journalistiques.',
        'Le chef du SPVM Philippe Pichet a été destitué par le gouvernement suite aux révélations de crises et de pratiques douteuses aux affaires internes.'
      ],
      interestLinks: [
        {
          actorFrom: 'Haute direction de la SQ et du SPVM (Division des affaires internes)',
          actorTo: 'Journalistes d\'enquête (Patrick Lagacé, Michael Nguyen)',
          relationship: 'Espionnage électronique systématique pour détruire le secret des sources',
          riskLevel: 'Critique',
          legalStatus: 'Atteinte à l\'art. 2b de la Charte canadienne et art. 3 de la Charte québécoise'
        },
        {
          actorFrom: 'Corps policiers',
          actorTo: 'Juges de paix magistrats',
          relationship: 'Signature quasi-automatique de mandats de surveillance sans examen constitutionnel préalable',
          riskLevel: 'Critique',
          legalStatus: 'Blâmé sévèrement par le rapport Chamberland'
        }
      ],
      assemblyNationalEvents: [
        {
          topic: 'Séance d\'urgence sur la liberté de la presse à l\'Assemblée nationale (Novembre 2016)',
          context: 'Salon bleu de l\'Assemblée nationale du Québec',
          quoteOrSummary: 'Motion unanime des députés condamnant l\'espionnage des journalistes et ordonnant la création immédiate de la commission d\'enquête publique sous le décret 982-2016.',
          dateOrSession: '41e législature, 1re session'
        }
      ],
      officialReportsAndJudgments: [
        'Rapport de la Commission d\'enquête sur la protection de la confidentialité des sources journalistiques (CERP, Décembre 2017, 446 pages)',
        'Loi sur la protection des sources journalistiques (Loi fédérale S-231)',
        'Décisions de la Cour supérieure du Québec annulant les mandats de surveillance policière abusifs'
      ],
      journalisticInvestigations: [
        'Enquête fracassante de La Presse : « Sous surveillance policière » par Patrick Lagacé et Vincent Larouche (Octobre 2016)',
        'Révélations du Journal de Montréal et du Journal de Québec sur les mandats d\'écoute visant Michael Nguyen'
      ],
      criticalVulnerabilities: [
        'Absence de contrepoids judiciaire spécialisé face aux demandes intrusives des forces policières d\'État',
        'Vulnérabilité des métadonnées de télécommunication des citoyens face aux mandats généraux',
        'Représailles féroces et poursuites administratives contre les fonctionnaires dénonçant la corruption'
      ],
      legalRecourses: [
        {
          body: 'Cour supérieure du Québec & Cour du Québec',
          procedure: 'Requête en certiorari et en contestation de validité constitutionnelle de mandat de perquisition ou de surveillance.',
          applicableLaw: 'Charte canadienne des droits et libertés (art. 2b et art. 8)',
          whistleblowerProtection: 'Privilège d\'immunité du secret des sources journalistiques'
        },
        {
          body: 'Commissaire à la déontologie policière',
          procedure: 'Dépôt de plainte déontologique contre un policier pour abus d\'autorité, surveillance illégale ou atteinte aux libertés civiles.',
          applicableLaw: 'Loi sur la police (RLRQ c. P-13.1) et Code de déontologie des policiers du Québec',
          whistleblowerProtection: 'Protection des plaignants contre toute intimidation'
        }
      ],
      impactOnCitizensAndChildren: 'Sans journalistes libres de protéger leurs sources confidentielles, aucun scandale touchant les mauvais traitements d\'enfants à la DPJ, les détournements de fonds dans les écoles ou la corruption des contrats d\'hôpitaux n\'aurait pu être révélé aux Québécois.',
      sourcesGrounding: [
        'Rapport final CERP (Commission Chamberland, 2017)',
        'Décret du Conseil exécutif 982-2016',
        'Journal des débats de l\'Assemblée nationale du Québec'
      ]
    }
  },
  {
    id: 'commission-poitras-sq-preuves',
    title: 'Commission Poitras : Dérives de la Sûreté du Québec & Fausses Preuves',
    subtitle: 'Fabrication de preuves par la police provinciale, écoutes électroniques sauvages et crise institutionnelle de la justice québécoise',
    category: 'Commissions d\'Enquête & Élites',
    tag: 'Rapport Poitras • 4 Tomes • Crise de la SQ',
    report: {
      subject: 'Commission d\'enquête sur la Sûreté du Québec (Commission Poitras)',
      alertLevel: 'INFRACTION_AVÉRÉE',
      alertLevelLabel: 'Faillite Déontologique Systémique & Fabrication de Preuves Documentée',
      integrityScore: 14,
      executiveSummary: 'Instituée à la suite de l\'acquittement spectaculaire des frères Matticks causé par la fabrication délibérée de preuves par des enquêteurs de la SQ, la Commission présidée par l\'ex-juge en chef Lawrence Poitras a radiographié les entrailles de la police provinciale. Le rapport en 4 tomes a documenté des parjures policiers en cour, des écoutes clandestines non déclarées et la complaisance d\'une haute direction protégeant les coupables.',
      coreFinding: 'Une sous-culture policière toxique où les fins justifiaient les pires moyens illégaux, minant le fondement même de la confiance des justiciables et conduisant à l\'invalidation de dizaines de poursuites judiciaires majeures.',
      verifiedFacts: [
        'Dépôt en janvier 1999 d\'un rapport monumental en 4 tomes constatant que la SQ souffrait de carences organisationnelles et déontologiques majeures.',
        'Preuve formelle de fausses déclarations sous serment de policiers de l\'escouade des crimes économiques et des stupéfiants.',
        'Utilisation d\'écoutes électroniques sauvages sans mandat judiciaire pour espionner des suspects et des cibles administratives.',
        'Remplacement complet de la haute direction de la Sûreté du Québec et démissions en cascade.',
        'Création d\'un nouveau cadre législatif avec la refonte complète de la Loi sur la police en 2000.'
      ],
      interestLinks: [
        {
          actorFrom: 'Enquêteurs de la Sûreté du Québec',
          actorTo: 'Tribunaux judiciaires et procureurs de la Couronne',
          relationship: 'Dépôt de rapports d\'enquête tronqués et rétention volontaire de preuves favorables aux accusés',
          riskLevel: 'Critique',
          legalStatus: 'Atteinte à l\'intégrité de la justice (arrêt R. c. Stinchcombe) et entrave à la justice'
        },
        {
          actorFrom: 'Direction générale de la SQ',
          actorTo: 'Ministère de la Sécurité publique',
          relationship: 'Omerta corporatiste et camouflage interne des dérapages déontologiques',
          riskLevel: 'Critique',
          legalStatus: 'Sanctionné par les décrets gouvernementaux et la réforme de 2000'
        }
      ],
      assemblyNationalEvents: [
        {
          topic: 'Débats à l\'Assemblée nationale sur la refonte de la police (1999-2000)',
          context: 'Salon bleu de l\'Assemblée nationale du Québec',
          quoteOrSummary: 'Le ministre de la Sécurité publique a fait adopter la nouvelle Loi sur la police pour soumettre les policiers à un encadrement civil déontologique strict et indépendant.',
          dateOrSession: '36e législature du Québec'
        }
      ],
      officialReportsAndJudgments: [
        'Rapport de la Commission d\'enquête sur la Sûreté du Québec (Rapport Poitras, 4 tomes, Janvier 1999)',
        'Loi sur la police du Québec (RLRQ c. P-13.1, sanctionnée en 2000)',
        'Arrêts de la Cour suprême et de la Cour du Québec sur la divulgation de la preuve'
      ],
      journalisticInvestigations: [
        'Enquêtes du journal Le Devoir et de Radio-Canada sur l\'affaire Matticks et la crise de confiance envers la SQ',
        'Séries d\'articles de La Presse documentant la fronde des officiers et les témoignages de la Commission Poitras'
      ],
      criticalVulnerabilities: [
        'Absence de surveillance civile indépendante sur les méthodes d\'investigation de la police d\'État',
        'Pression hiérarchique pour obtenir des condamnations à tout prix au mépris des garanties constitutionnelles',
        'Rétention illégale de preuves favorables aux personnes poursuivies'
      ],
      legalRecourses: [
        {
          body: 'Comité et Commissaire à la déontologie policière',
          procedure: 'Plainte déontologique officielle contre tout agent de la paix du Québec pour manquement au Code de déontologie des policiers.',
          applicableLaw: 'Loi sur la police (RLRQ c. P-13.1, art. 193 et suivants)',
          whistleblowerProtection: 'Audition publique indépendante devant le Tribunal administratif'
        },
        {
          body: 'Cour du Québec / Cour supérieure - Requête en arrêt des procédures',
          procedure: 'Requête pour abus de procédure d\'État (art. 7 et 24 de la Charte canadienne) en cas de dissimulation ou fabrication de preuves.',
          applicableLaw: 'Charte canadienne des droits et libertés et Code criminel',
          whistleblowerProtection: 'Immunité absolue des droits de la défense'
        }
      ],
      impactOnCitizensAndChildren: 'L\'intégrité de la police est le premier rempart protégeant les familles et les enfants contre l\'arbitraire. Lorsque la police d\'État falsifie des preuves, aucun citoyen n\'est plus à l\'abri d\'un coup monté judiciaire ou d\'un retrait d\'enfant abusif.',
      sourcesGrounding: [
        'Rapport officiel de la Commission Poitras (1999)',
        'Publications officielles du gouvernement du Québec',
        'Loi sur la police (RLRQ c. P-13.1)'
      ]
    }
  },
  {
    id: 'commission-cliche-corruption-construction',
    title: 'Commission Cliche : Cartels de la Construction & Ministres Éclaboussés (1974–1975)',
    subtitle: 'Saccage de la Baie-James, extorsion syndicale, crime organisé et mise sous tutelle sous le gouvernement Robert Bourassa',
    category: 'Commissions d\'Enquête & Élites',
    tag: 'Rapport Cliche • Saccage Baie-James',
    report: {
      subject: 'Commission d\'enquête sur l\'exercice de la liberté syndicale sur les chantiers de construction (Commission Cliche)',
      alertLevel: 'INFRACTION_AVÉRÉE',
      alertLevelLabel: 'Violence Criminelle Systémique & Collusion Politique Historique Documentée',
      integrityScore: 12,
      executiveSummary: 'Créée après la destruction tragique au bulldozer et les incendies criminels du chantier hydroélectrique de la Baie-James (LG-2) en mars 1974, la Commission présidée par le juge Robert Cliche, assisté de Brian Mulroney et Guy Chevrette, a révélé au grand jour l\'extorsion, le racket mafieux et les liens compromettants entre des ministres du gouvernement Bourassa et les chefs véreux de syndicats de la construction.',
      coreFinding: 'Une emprise mafieuse sur les grands chantiers du Québec où la liberté d\'association était bafouée par la violence et où l\'élite politique au pouvoir tolérait des pratiques criminelles pour maintenir une paix industrielle de façade.',
      verifiedFacts: [
        'Le saccage du chantier de la Baie-James le 21 mars 1974 a paralysé le plus grand projet d\'infrastructure énergétique du Québec et causé plus de 30 millions de dollars de dégâts.',
        'La Commission Cliche a révélé l\'existence d\'un système d\'extorsion où les entrepreneurs devaient verser des pots-de-vin et embaucher des gardes du corps mafieux pour éviter le sabotage.',
        'Mise en lumière des liaisons dangereuses entre le cabinet du ministre du Travail Jean Cournoyer et des figures interlopes de la FTQ-Construction comme André « Dédé » Desjardins.',
        'Mise sous tutelle étatique immédiate de quatre sections locales de la FTQ-Construction.',
        'Création ordonnée de la Commission de la construction du Québec (CCQ) pour retirer aux caïds syndicaux le monopole d\'embauche des travailleurs.'
      ],
      interestLinks: [
        {
          actorFrom: 'Ministres du gouvernement Bourassa (Travail et Travaux publics)',
          actorTo: 'Barons syndicaux de la FTQ-Construction (André Desjardins)',
          relationship: 'Pactes officieux et concessions politiques en échange de paix sur les chantiers olympiques et hydroélectriques',
          riskLevel: 'Critique',
          legalStatus: 'Débats houleux et sanctions politiques majeures à l\'Assemblée nationale'
        },
        {
          actorFrom: 'Caïds syndicaux et criminels notoires',
          actorTo: 'Entrepreneurs en construction',
          relationship: 'Racket de protection, menaces de mort et grèves illégales coordonnées',
          riskLevel: 'Critique',
          legalStatus: 'Condamnations criminelles pour extorsion et voies de fait'
        }
      ],
      assemblyNationalEvents: [
        {
          topic: 'Séances d\'urgence et adoption de la Loi spéciale de tutelle (Mai 1975)',
          context: 'Assemblée nationale du Québec',
          quoteOrSummary: 'Adoption en un temps record de la Loi plaçant sous tutelle les syndicats corrompus et interdisant aux criminels de détenir des charges syndicales.',
          dateOrSession: '30e législature du Québec'
        }
      ],
      officialReportsAndJudgments: [
        'Rapport de la Commission d\'enquête sur l\'exercice de la liberté syndicale sur les chantiers de construction (Rapport Cliche, Mai 1975, 600 pages)',
        'Loi sur les relations de travail dans l\'industrie de la construction (Loi R-20)',
        'Décrets de mise sous tutelle gouvernementale des syndicats de la construction'
      ],
      journalisticInvestigations: [
        'Reportages d\'Alain Gravel, Jean-Pierre Charbonneau et Pierre O\'Neill sur la pègre de la construction',
        'Couverture médiatique historique en direct des auditions publiques de la Commission Cliche'
      ],
      criticalVulnerabilities: [
        'Monopole opaque du placement de la main-d\'œuvre sur les chantiers sans contrôle public',
        'Faiblesse des mécanismes de reddition de comptes des corporations syndicales',
        'Instrumentalisation des chantiers nationaux à des fins de chantage politique envers l\'État'
      ],
      legalRecourses: [
        {
          body: 'Commission de la construction du Québec (CCQ)',
          procedure: 'Dénonciation anonyme de travail au noir, de discrimination à l\'embauche syndicale ou de manoeuvres d\'intimidation sur un chantier.',
          applicableLaw: 'Loi sur les relations du travail, la formation professionnelle et la gestion de la main-d\'oeuvre dans l\'industrie de la construction (RLRQ c. R-20)',
          whistleblowerProtection: 'Ligne de dénonciation confidentielle et pouvoirs d\'inspection d\'office'
        },
        {
          body: 'Tribunal administratif du travail (TAT)',
          procedure: 'Plainte pour entrave à la liberté d\'association syndicale ou pratique déloyale.',
          applicableLaw: 'Code du travail du Québec (RLRQ c. C-27)',
          whistleblowerProtection: 'Protection légale contre les mesures de représailles'
        }
      ],
      impactOnCitizensAndChildren: 'Les coûts astronomiques des sabotages, des retards de chantiers et de la corruption sur les grands projets publics québécois ont alourdi la dette collective pendant des décennies, grevant les capacités d\'investissement de l\'État dans les services éducatifs et familiaux.',
      sourcesGrounding: [
        'Rapport officiel de la Commission Cliche (1975)',
        'Archives de l\'Assemblée nationale du Québec',
        'Publications de l\'Éditeur officiel du Québec'
      ]
    }
  },
  {
    id: 'dpj-fugues-traite-exploitation',
    title: 'Dossier National : Fugues Massives, Exploitation Sexuelle & Dérives de Garde DPJ',
    subtitle: 'Plus de 10 000 fugues annuelles, recrutement par les gangs de rue, motels de transit et faillite de la LPJ',
    category: 'Services aux Enfants & Familles',
    tag: 'Observatoire Fugues • 10 000+ Cas/an',
    report: {
      subject: 'Fugues récurrentes des centres jeunesse, proxénétisme juvénile, recrutement par les gangs de rue (Laval, Montréal, Québec) et défaillances de garde étatique sous la LPJ',
      alertLevel: 'INFRACTION_AVÉRÉE',
      alertLevelLabel: 'Urgence Nationale & Négligence Systémique de Garde Étatique',
      integrityScore: 12,
      executiveSummary: 'Chaque année au Québec, plus de 10 000 signalements de fugues d\'enfants et d\'adolescents sont enregistrés dans les centres de réadaptation et foyers de la DPJ. Loin de simples « escapades d\'adolescence », ces fugues révèlent un réseau d\'exploitation systémique où des mineures sous ordonnance de garde étatique sont captées dès les abords des foyers par des réseaux criminels de traite de personnes (Laval, Montréal-Nord, Québec). Le recours illégal aux chambres de motels sans surveillance clinique et les délais policiers de signalement aggravent dramatiquement le danger.',
      coreFinding: 'Une rupture caractérisée de l\'obligation de protection et de garde étatique (parens patriae) : l\'État québécois confie des mineurs vulnérables à des installations ouvertes non sécurisées et à des motels commerciaux gardés par des agents privés non qualifiés, livrant de fait des centaines d\'adolescentes aux proxénètes sans intervention policière immédiate.',
      verifiedFacts: [
        'Plus de 10 400 fugues enregistrées annuellement dans le réseau de la protection de la jeunesse du Québec (rapports annuels des directeurs de la protection de la jeunesse).',
        'Scandale des « Filles de Laval » (foyers Hubert-Perron et Chomedey) : des centaines de fugues coordonnées où des adolescentes ont été séquestrées et prostituées par des gangs de rue.',
        'La Commission Laurent (Chapitre 8) a conclu que les protocoles de signalement de fugue étaient chroniquement déficients et que les jeunes étaient souvent injustement qualifiés de « fugueurs volontaires » au lieu de victimes de traite criminelle.',
        'Rapport spécial du Protecteur du citoyen (2023-2024) : dénonciation du placement d\'enfants dans plus de 1 100 chambres de motel d\'urgence sous la garde d\'agents de sécurité privés, provoquant des vagues immédiates de fugues et d\'overdoses.',
        'Décisions judiciaires répétées de la Chambre de la jeunesse et de la Cour supérieure blâmant les CISSS et CIUSSS pour manquement à la sécurité fondamentale des enfants confiés à leur garde.'
      ],
      interestLinks: [
        {
          actorFrom: 'Directions des CISSS/CIUSSS & MSSS',
          actorTo: 'Réseaux de motels commerciaux d\'urgence et agences de gardiennage privé',
          relationship: 'Dépense de dizaines de millions de dollars en hébergements d\'urgence non agréés contournant le manque de foyers de groupe et de familles d\'accueil',
          riskLevel: 'Critique',
          legalStatus: 'Violation flagrante de l\'article 44 de la LPJ et des normes d\'agrément clinique'
        },
        {
          actorFrom: 'Foyers de groupe ouverts et centres de réadaptation',
          actorTo: 'Corps policiers locaux (SPVM, SQ, SPL, SPVQ)',
          relationship: 'Délais critiques de plusieurs heures à plusieurs jours avant le signalement officiel de la disparition d\'un mineur aux registres policiers CIPC',
          riskLevel: 'Critique',
          legalStatus: 'Manquement déontologique et atteinte au droit fondamental à la sécurité (art. 1 de la Charte québécoise)'
        }
      ],
      assemblyNationalEvents: [
        {
          topic: 'Débats d\'urgence au Salon bleu sur les fugues de Laval et l\'exploitation sexuelle des mineures (2019-2024)',
          context: 'Salon bleu de l\'Assemblée nationale du Québec',
          quoteOrSummary: 'Les députés de l\'opposition ont sommé le ministre délégué aux Services sociaux d\'interdire sur-le-champ les motels de transit et de doter les policiers de pouvoirs d\'intervention immédiats pour protéger les fugueuses.',
          dateOrSession: '42e et 43e législatures du Québec'
        },
        {
          topic: 'Commission spéciale sur les droits des enfants et la protection de la jeunesse (Commission Laurent)',
          context: 'Auditions publiques nationales',
          quoteOrSummary: 'Témoignages bouleversants d\'anciennes pensionnaires et d\'éducateurs décrivant comment des rabatteurs de proxénètes attendent les adolescentes à la sortie même des pavillons de la DPJ.',
          dateOrSession: 'Rapport déposé en mai 2021'
        }
      ],
      officialReportsAndJudgments: [
        'Rapport de la Commission spéciale sur les droits des enfants (Commission Laurent), Chapitre 8 : « L\'exploitation sexuelle et les fugues » (2021)',
        'Rapport d\'enquête du Protecteur du citoyen : « Placements de fortune : quand l\'urgence sacrifie l\'enfance » (2023)',
        'Rapports annuels des directeurs de la protection de la jeunesse (Bilan des directeurs DPJ 2020-2025)',
        'Jugements de la Cour du Québec, Chambre de la jeunesse (Districts de Laval, Montréal, Québec et Saint-Hyacinthe)'
      ],
      journalisticInvestigations: [
        'Enquête de Radio-Canada / La Facture : « Enfants de la DPJ dans les motels : un scandale d\'État »',
        'Série documentaire et enquêtes de La Presse et Le Journal de Montréal sur les réseaux de proxénétisme ciblant les fugueuses de Laval et Montréal',
        'Reportages d\'investigation de TVA Nouvelles (J.E.) sur l\'errance des jeunes en fugue et les failles de localisation GPS'
      ],
      criticalVulnerabilities: [
        'Délai systématique dans la transmission de la fiche de disparition au CIPC (Centre d\'information de la police canadienne)',
        'Manque de protocole clinique d\'interception dans les 3 heures critiques suivant la sortie d\'un mineur',
        'Contournement de l\'obligation de placement dans un milieu de vie substitutif agréé (art. 44 LPJ) par le recours aux motels',
        'Absence d\'accompagnement psychologique spécialisé au retour de fugue, souvent remplacé par un isolement punitif'
      ],
      legalRecourses: [
        {
          body: 'Chambre de la jeunesse de la Cour du Québec',
          procedure: 'Requête urgente en révision des mesures ou ordonnance de sauvegarde pour défaut de garde sécuritaire (art. 95 LPJ).',
          applicableLaw: 'Loi sur la protection de la jeunesse (art. 4, 38, 44, 95 LPJ)',
          whistleblowerProtection: 'Droit du parent et de l\'enfant d\'être représentés par un avocat distinct payé par l\'aide juridique'
        },
        {
          body: 'Protecteur du citoyen & Commission des droits de la jeunesse (CDPDJ)',
          procedure: 'Dépôt d\'une plainte urgente pour lésion de droit caractérisée, mise en danger de la vie d\'un mineur et défaillance de garde.',
          applicableLaw: 'Charte des droits et libertés de la personne (art. 1 et 39) et Loi sur la CDPDJ',
          whistleblowerProtection: 'Pouvoir d\'enquête d\'office avec immunité des témoins et protection contre les représailles'
        },
        {
          body: 'Escouade intégrée de lutte contre le proxénétisme (EILP) & SPVM / SQ',
          procedure: 'Dénonciation criminelle pour traite de personnes de moins de 18 ans et proxénétisme aggravé.',
          applicableLaw: 'Code criminel du Canada (L.R.C. (1985), ch. C-46, art. 279.011, 279.02, 286.1)',
          whistleblowerProtection: 'Protection des victimes de traite et ordonnances de non-publication immédiates'
        }
      ],
      impactOnCitizensAndChildren: 'Les milliers de fugues d\'enfants sous la garde de l\'État détruisent des vies et exposent des générations d\'adolescentes à des traumatismes irréversibles et à des réseaux d\'exploitation criminelle. Chaque jeune qui fuit un centre jeunesse est la démonstration vivante d\'une rupture de confiance entre la jeunesse québécoise et l\'institution qui a le devoir sacré de la protéger.',
      sourcesGrounding: [
        'Rapports annuels provinciaux des directeurs de la protection de la jeunesse (2018-2025)',
        'Commission Laurent (2021), Chapitre 8 : L\'exploitation sexuelle et les fugues',
        'Enquêtes du Protecteur du citoyen et de la CDPDJ (2020-2024)',
        'Code criminel du Canada et Loi sur la protection de la jeunesse (RLRQ c. P-34.1)'
      ]
    }
  },
  {
    id: 'reseau-epstein-elites-quebec',
    title: 'Réseau Epstein : Ramifications, Carnets d\'Adresses & Connexions au Québec',
    subtitle: 'Registres de vol à Montréal (YUL/YMX), agences de mannequins rabatteuses (Brunel), carnets saisis et vérifications des élites québécoises',
    category: 'Commissions d\'Enquête & Élites',
    tag: 'Documents Décachetés SDNY • Registres FAA',
    report: {
      subject: 'Jeffrey Epstein, Ghislaine Maxwell, Jean-Luc Brunel (MC2 Model Management), registres de vols vers Montréal (YUL/YMX), carnet d\'adresses saisi par le FBI (« Black Book »), mentions de personnalités québécoises et tentatives de pénétration philanthropique',
      alertLevel: 'ZONE_GRISE_DÉONTOLOGIQUE',
      alertLevelLabel: 'Faits Judiciaires Établis & Enquêtes Transfrontalières Rigoureuses',
      integrityScore: 22,
      executiveSummary: 'À la suite du décachetage par le tribunal fédéral de New York (SDNY - Juge Loretta Preska) de milliers de pages d\'actes de procédure dans l\'affaire Giuffre c. Maxwell, ainsi que de l\'analyse des registres officiels de vol de la FAA et du carnet d\'adresses saisi par le FBI, plusieurs ramifications directes et indirectes avec le Québec et Montréal ont été mises en lumière. Ce dossier dresse la cartographie factuelle rigoureuse : escales documentées d\'avions privés à Montréal, rabattage d\'aspirantes mannequins québécoises par le bras droit Jean-Luc Brunel (MC2), présence de personnalités d\'affaires montréalaises dans les carnets mondains, et vérifications institutionnelles.',
      coreFinding: 'Une séparation déontologique absolue s\'impose entre : 1) Les crimes fédéraux de trafic sexuel et de viols sur mineures formellement condamnés visant Epstein, Maxwell et Brunel ; 2) Les activités prédatrices de recrutement dans l\'industrie du mannequinat à Montréal ; et 3) La simple mention de coordonnées dans un carnet mondain saisi qui n\'implique aucune faute criminelle sans preuve d\'implication directe.',
      verifiedFacts: [
        'Registres officiels de la FAA et carnets de bord des pilotes Visoski et Rodgers : Le Gulfstream II et le Boeing 727 d\'Epstein (immatriculés N908JE et N212JE) ont atterri à plusieurs reprises aux aéroports de Montréal (Dorval YUL et Mirabel YMX) entre 1998 et 2005.',
        'La filière Jean-Luc Brunel & agence MC2 à Montréal : Brunel, associé d\'Epstein inculpé pour viols sur mineures et traite d\'êtres humains avant son décès en cellule à Paris en 2022, a dirigé Karin Models puis fondé MC2 (financée par Epstein). Des enquêtes journalistiques (Radio-Canada Enquête) ont révélé que des agences québécoises ont vu plusieurs jeunes modèles approchées pour des castings à New York, Paris et Miami.',
        'Présence au carnet d\'adresses saisi par le FBI (« Black Book ») : Les coordonnées de figures montréalaises notables, dont Guy Laliberté (fondateur du Cirque du Soleil) et des bureaux liés à la famille Bronfman (Claridge), y figuraient. Lors de la déclassification en janvier 2024, les représentants de Guy Laliberté ont confirmé des rencontres purement mondaines et caritatives internationales, sans qu\'aucune plainte ni allégation criminelle n\'ait jamais été portée contre lui.',
        'Affaire NXIVM et ramifications montréalaises : Les héritières montréalaises Clare et Sara Bronfman ont financé à coups de dizaines de millions de dollars la secte de trafic sexuel NXIVM de Keith Raniere, menant à la condamnation de Clare Bronfman à 6 ans et 9 mois de prison par la même cour fédérale de New York (SDNY).',
        'Vérifications auprès des universités québécoises : Epstein a massivement financé des chercheurs à Harvard et au MIT pour soigner sa réputation. Au Québec, l\'Université McGill et les fonds de recherche provinciaux ont confirmé aux médias qu\'aucun don financier n\'avait été accepté de ses fondations (Enhanced Education Foundation / COUQ Foundation).'
      ],
      interestLinks: [
        {
          actorFrom: 'Jean-Luc Brunel (Karin Models / MC2)',
          actorTo: 'Agences de mannequins et milieu de la mode à Montréal',
          relationship: 'Prospection et recrutement d\'adolescentes québécoises sous couvert de contrats de haute couture à l\'international',
          riskLevel: 'Critique',
          legalStatus: 'Objet d\'enquêtes criminelles internationales du Parquet de Paris et du FBI'
        },
        {
          actorFrom: 'Jeffrey Epstein & Ghislaine Maxwell',
          actorTo: 'Personnalités québécoises du grand mécénat et des affaires',
          relationship: 'Collecte de contacts mondains, invitations à des galas caritatifs internationaux et inscriptions dans l\'annuaire privé',
          riskLevel: 'Modéré',
          legalStatus: 'Contacts répertoriés au dossier SDNY sans accusation ni preuve de complicité pour les citoyens québécois'
        },
        {
          actorFrom: 'Réseau de transit aérien privé (avions N908JE / N212JE)',
          actorTo: 'Terminaux privés d\'aéroports québécois (Dorval / Mirabel)',
          relationship: 'Escales et ravitaillements documentés dans les registres de navigation aérienne civile',
          riskLevel: 'Critique',
          legalStatus: 'Pièces d\'archives produites devant le tribunal fédéral de New York'
        }
      ],
      assemblyNationalEvents: [
        {
          topic: 'Débats sur la protection des mineures dans l\'industrie du mannequinat au Québec (2020-2024)',
          context: 'Salon bleu et commissions de l\'Assemblée nationale du Québec',
          quoteOrSummary: 'Interpellations sur la régulation des agences artistiques et de mannequins pour interdire le rabattage sans consentement parental et imposer des permis stricts contre l\'exploitation.',
          dateOrSession: '42e et 43e législatures du Québec'
        },
        {
          topic: 'Dépôt des documents décachetés de la Cour de New York (Janvier 2024)',
          context: 'Couverture médiatique et réactions politiques québécoises',
          quoteOrSummary: 'Clarification publique par les médias d\'enquête québécois des mentions de noms de personnalités dans le carnet d\'adresses d\'Epstein, rappelant la présomption d\'innocence.',
          dateOrSession: 'Session parlementaire hiver 2024'
        }
      ],
      officialReportsAndJudgments: [
        'Dossier judiciaire décacheté SDNY : Giuffre v. Maxwell, Affaire n° 15-cv-07433-LAP (Cour fédérale du district sud de New York, Juge Loretta Preska, 2024)',
        'Actes d\'inculpation du Département de la Justice des États-Unis (DOJ) contre Jeffrey Epstein (2019) et Ghislaine Maxwell (2020)',
        'Dossier d\'instruction criminelle du Parquet de Paris contre Jean-Luc Brunel (2020-2022)',
        'Registres officiels de vol certifiés de la Federal Aviation Administration (FAA) et carnets de bord de David Rodgers'
      ],
      journalisticInvestigations: [
        'Enquête spéciale de Radio-Canada : « Dans les filets de Jean-Luc Brunel : les mannequins québécoises face au prédateur »',
        'Série d\'investigation de La Presse (Vincent Larouche) sur les escales montréalaises du jet d\'Epstein et les documents décachetés de New York',
        'Enquête du Miami Herald (Julie K. Brown) : « Perversion of Justice » révélant les réseaux de rabattage internationaux',
        'Reportages de TVA Nouvelles et du Bureau d\'enquête sur les ramifications de l\'affaire NXIVM des soeurs Bronfman'
      ],
      criticalVulnerabilities: [
        'Absence d\'encadrement déontologique et législatif strict des agences de mannequins au Québec recrutant des mineures',
        'Opacité des terminaux aéroportuaires privés (FBO) pour les vols corporatifs internationaux de jets privés',
        'Utilisation de la philanthropie et des galas caritatifs comme paravent de respectabilité mondaine pour infiltrer les élites'
      ],
      legalRecourses: [
        {
          body: 'Gendarmerie royale du Canada (GRC) - Division des crimes contre la personne',
          procedure: 'Dénonciation pour traite de personnes transfrontalière et infractions sexuelles commises à l\'étranger (art. 7(4.1) et 279.01 C.cr.).',
          applicableLaw: 'Code criminel du Canada & Loi sur l\'extradition',
          whistleblowerProtection: 'Protection des témoins et programme national d\'aide aux victimes d\'actes criminels'
        },
        {
          body: 'Cour supérieure du Québec - Recours civils pour préjudice corporel et sexuel',
          procedure: 'Action civile en dommages-intérêts imprescriptible pour agressions à caractère sexuel subies par des victimes québécoises.',
          applicableLaw: 'Code civil du Québec (art. 2926.1 - Imprescriptibilité des recours en matière d\'agression sexuelle)',
          whistleblowerProtection: 'Ordonnances d\'anonymat et de non-divulgation automatique'
        },
        {
          body: 'Office de la protection du consommateur & Ministère du Travail',
          procedure: 'Vérification de conformité des agences de recrutement et interdiction des contrats léonins imposés aux jeunes modèles.',
          applicableLaw: 'Loi sur la protection du consommateur et Loi sur les normes du travail (RLRQ c. N-1.1)',
          whistleblowerProtection: 'Immunité des plaignants contre toute rétorsion contractuelle'
        }
      ],
      impactOnCitizensAndChildren: 'Ce dossier rappelle que la prédation sexuelle de haut niveau ne s\'arrête pas aux frontières et cherche toujours à exploiter les aspirations des jeunes filles dans le milieu de la mode et de la culture. L\'intégrité exige de nommer les faits établis, de protéger sans relâche les victimes, tout en refusant l\'amalgame simpliste entre ceux qui ont commis ou facilité des crimes et ceux dont le nom n\'apparaissait que dans un répertoire de contacts mondains.',
      sourcesGrounding: [
        'Pièces judiciaires décachetées du tribunal fédéral de New York (SDNY)',
        'Registres certifiés de vol de la Federal Aviation Administration (FAA)',
        'Enquêtes journalistiques de Radio-Canada, La Presse et Miami Herald',
        'Code criminel du Canada (art. 279.01 et 7(4.1))'
      ]
    }
  },
  {
    id: 'mk-ultra-allan-memorial-mcgill',
    title: 'Projet MK-Ultra (Sous-projet 68) : Expérimentations Cérébrales à l\'Allan Memorial (McGill)',
    subtitle: 'Cobayes humains, lavage de cerveau, financement secret CIA & subventions fédérales du Canada',
    category: 'Commissions d\'Enquête & Élites',
    tag: 'Sous-projet 68 CIA • Allan Memorial (McGill)',
    report: {
      id: 'inv-mk-ultra-allan-memorial',
      timestamp: Date.now(),
      subject: 'Projet MK-Ultra : Le Sous-Projet 68 à l\'Institut Allan Memorial (McGill)',
      alertLevel: 'INFRACTION_AVÉRÉE',
      alertLevelLabel: 'Faits Historiques Déclassifiés & Responsabilités Établies',
      integrityScore: 0,
      executiveSummary: 'Dossier documentaire officiel sur le Sous-projet 68 de MK-Ultra mené à Montréal entre 1957 et 1964. Sous la direction du Dr Donald Ewen Cameron (président de l\'Association mondiale de psychiatrie) et avec l\'autorisation financière secrète de la CIA et des subventions du ministère de la Santé nationale du Canada, des centaines de patients ont subi des tortures médicales expérimentales sans consentement : déstructuration (électrochocs 30 à 40 fois supérieurs à la norme), comas médicamenteux continus jusqu\'à 65 jours sous LSD et barbituriques, et conduite psychique (messages enregistrés répétés 500 000 fois).',
      coreFinding: 'Violation absolue du serment d\'Hippocrate et des droits fondamentaux de citoyens canadiens et québécois, confirmée par les auditions du Sénat américain (1977), le Rapport Cooper d\'Ottawa (1986), les indemnités ex gratia fédérales (1992) et les recours collectifs pendants devant la Cour supérieure du Québec.',
      verifiedFacts: [
        'Sous-projet 68 de la CIA : Financement secret de 60 000 $ US canalisé par la Society for the Investigation of Human Ecology vers l\'Allan Memorial de McGill.',
        'Subventions fédérales canadiennes : Versement de plus de 500 000 $ par le ministère fédéral de la Santé et du Bien-être social au Dr Cameron.',
        'Protocole de déstructuration (Depatterning) : Électrochocs convulsifs intensifs répétés jusqu\'à 3 fois par jour pour effacer complètement la mémoire et la personnalité des patients.',
        'Protocole de conduite psychique (Psychic Driving) : Écoute continue jour et nuit au casque de bandes magnétiques négatives puis positives répétées jusqu\'à 500 000 fois.',
        'Aveux officiels au Sénat américain (1977) : Témoignage de l\'amiral Stansfield Turner (directeur de la CIA) confirmant les expérimentations montréalaises.',
        'Décret fédéral C.P. 1992-2342 : Indemnité de 100 000 $ versée par Ottawa à 77 victimes ayant subi une déstructuration complète.',
        'Recours collectif en Cour supérieure du Québec : Poursuite active contre l\'Hôpital Royal Victoria, McGill et le Procureur général du Canada pour les victimes exclues et leurs familles.'
      ],
      interestLinks: [
        {
          actorFrom: 'Central Intelligence Agency (CIA - Technical Services Staff)',
          actorTo: 'Dr. Donald Ewen Cameron (Allan Memorial / Université McGill)',
          relationship: 'Financement occulte via la Society for the Investigation of Human Ecology pour tester le contrôle mental',
          riskLevel: 'Critique',
          legalStatus: 'Sous-projet 68 déclassifié sous le FOIA (Freedom of Information Act)'
        },
        {
          actorFrom: 'Ministère de la Santé nationale et du Bien-être social du Canada',
          actorTo: 'Département de psychiatrie de l\'Université McGill',
          relationship: 'Attribution de subventions de recherche publique sans aucun contrôle éthique des cobayes humains',
          riskLevel: 'Critique',
          legalStatus: 'Rapport George Cooper (1986) déposé au Parlement fédéral'
        },
        {
          actorFrom: 'Université McGill & Hôpital Royal Victoria (CIUSSS)',
          actorTo: 'Victimes et descendants québécois',
          relationship: 'Refus institutionnel persistant de présenter des excuses officielles et rétention d\'archives médicales',
          riskLevel: 'Critique',
          legalStatus: 'Dossier d\'action collective en Cour supérieure du Québec (500-06-000854-191)'
        }
      ],
      assemblyNationalEvents: [
        {
          topic: 'Revendications pour la levée du secret des archives médicales de l\'Allan Memorial',
          context: 'Débats à l\'Assemblée nationale du Québec et à la Chambre des communes',
          quoteOrSummary: 'Interventions répétées de députés québécois demandant la déclassification complète des dossiers médicaux détenus par le CIUSSS de l\'Ouest-de-l\'Île-de-Montréal et la reconnaissance des préjudices subis par les familles.'
        }
      ],
      officialReportsAndJudgments: [
        'U.S. Senate Select Committee on Intelligence (Church Committee Hearings, 1977)',
        'Rapport de Me George Cooper, c.r. au ministre de la Justice du Canada (1986)',
        'Décret du Conseil privé du Canada C.P. 1992-2342 (Règlement ex gratia de 100 000 $)',
        'Jugement Orlikow et al. v. United States, 685 F. Supp. 1199 (D.D.C. 1988)',
        'Cour supérieure du Québec : Dossier d\'action collective n° 500-06-000854-191'
      ],
      journalisticInvestigations: [
        'Émission Enquête (Radio-Canada) : « Les cobayes oubliés de MK-Ultra à Montréal »',
        'The Fifth Estate (CBC) : « The Sleep Room » et « MK-Ultra: The CIA\'s Mind Control Program »',
        'Livre de John Marks : « The Search for the Manchurian Candidate: The CIA and Mind Control »'
      ],
      criticalVulnerabilities: [
        'Absence historique de comité d\'éthique indépendant pour les patients psychiatriques',
        'Impunité médicale et opacité des subventions de recherche transfrontalières'
      ],
      legalRecourses: [
        {
          body: 'Cour supérieure du Québec - Chambre des actions collectives',
          procedure: 'Demande d\'autorisation d\'action collective pour préjudice corporel et moral intergénérationnel.',
          applicableLaw: 'Code de procédure civile du Québec & Charte des droits et libertés de la personne',
          whistleblowerProtection: 'Protection des membres du groupe et ordonnances de scellé protecteur'
        },
        {
          body: 'Commission d\'accès à l\'information du Québec (CAI)',
          procedure: 'Demande d\'accès aux dossiers médicaux complets des défunts auprès du CIUSSS de l\'Ouest-de-l\'Île-de-Montréal.',
          applicableLaw: 'Loi sur l\'accès aux documents des organismes publics et sur la protection des renseignements personnels (RLRQ c. A-2.1)',
          whistleblowerProtection: 'Droit d\'accès légal des héritiers et ayants droit'
        }
      ],
      impactOnCitizensAndChildren: 'Les expérimentations de l\'Allan Memorial constituent la violation des droits humains la plus documentée de l\'histoire médicale moderne au Québec. Des mères de famille et de jeunes adultes ont vu leur mémoire et leur identité anéanties à jamais, infligeant des traumatismes psychologiques et affectifs dévastateurs à des générations entières d\'enfants québécois.',
      sourcesGrounding: [
        'Documents déclassifiés de la CIA (Freedom of Information Act - Project MKULTRA Subproject 68)',
        'Rapport George Cooper commandé par le ministère de la Justice du Canada (1986)',
        'Décret fédéral C.P. 1992-2342',
        'Pièces déposées devant la Cour supérieure du Québec (Dossier 500-06-000854-191)'
      ]
    }
  }
];

import { autoTriangulateReport } from '../services/crossDocumentMatrix';

/**
 * Collection officielle de dossiers enrichis et triangulés avec leurs documents complémentaires.
 * Chaque dossier intègre les preuves croisées, jurisprudences et lois applicables.
 */
export const PRELOADED_DOSSIERS: PreloadedDossier[] = RAW_PRELOADED_DOSSIERS.map((dossier) => ({
  ...dossier,
  report: autoTriangulateReport(dossier.report, dossier.id)
}));

const DOSSIER_ALIASES: Record<string, string> = {
  'dpj-commission-laurent-crise': 'protection-jeunesse-dpj-laurent',
  'fillette-granby-coroner': 'protection-jeunesse-dpj-laurent',
  'charbonneau-genie-conseil': 'charbonneau-collusion-upac',
  'mckinsey-saaqclic': 'saaqclic-it-contracts',
  'northvolt-filiere-batterie': 'northvolt-battery-transparency',
  'laval-hubert-perron': 'dpj-fugues-traite-exploitation',
  'fugues-dpj': 'dpj-fugues-traite-exploitation',
  'dpj-fugues': 'dpj-fugues-traite-exploitation',
  'epstein-quebec': 'reseau-epstein-elites-quebec',
  'epstein': 'reseau-epstein-elites-quebec',
  'reseau-epstein': 'reseau-epstein-elites-quebec',
  'epstein-montreal': 'reseau-epstein-elites-quebec',
  'brunel-montreal': 'reseau-epstein-elites-quebec',
  'mk-ultra': 'mk-ultra-allan-memorial-mcgill',
  'mkultra': 'mk-ultra-allan-memorial-mcgill',
  'allan-memorial': 'mk-ultra-allan-memorial-mcgill',
  'cameron': 'mk-ultra-allan-memorial-mcgill',
  'cameron-mcgill': 'mk-ultra-allan-memorial-mcgill',
  'sous-projet-68': 'mk-ultra-allan-memorial-mcgill'
};

export function getPreloadedDossierById(id: string): PreloadedDossier | undefined {
  const direct = PRELOADED_DOSSIERS.find((d) => d.id === id);
  if (direct) return direct;
  const resolvedId = DOSSIER_ALIASES[id];
  if (resolvedId) {
    return PRELOADED_DOSSIERS.find((d) => d.id === resolvedId);
  }
  return undefined;
}


