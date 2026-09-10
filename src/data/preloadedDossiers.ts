import { InvestigationReport } from '../types';

export interface PreloadedDossier {
  id: string;
  title: string;
  subtitle: string;
  category: 'Contrats Publics & IT' | 'Collusion & Financement' | 'Subventions & Fonds Publics' | 'Services aux Enfants & Familles' | 'Éthique & Députés';
  tag: string;
  report: InvestigationReport;
}

export const PRELOADED_DOSSIERS: PreloadedDossier[] = [
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
    category: 'Collusion & Financement',
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
  }
];
