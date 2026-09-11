export interface LpjArticle {
  id: string;
  articleNumber: string;
  sectionTitle: string;
  title: string;
  fullLegalText: string;
  plainLanguageExplanation: string;
  commonDpjViolations: string[];
  defenseStrategy: string;
  jurisprudenceKey: string;
  category: 
    | 'Droits Fondamentaux & Principes'
    | 'Motifs de Compromission (Art. 38)'
    | 'Signalement & Urgence (48h)'
    | 'Évaluation & Mesures Volontaires'
    | 'Tribunal & Procédures Légales'
    | 'Ordonnances & Délais Maximaux (91.1)'
    | 'Révision & Rétractation (Art. 95)'
    | 'Recours, Plaintes & Lésions';
}

export const LPJ_CODEX_DATA: LpjArticle[] = [
  // SECTION 1 : DROITS FONDAMENTAUX & PRINCIPES DIRECTEURS
  {
    id: 'lpj-art-2-2',
    articleNumber: 'Art. 2.2 LPJ',
    sectionTitle: 'Principes directeurs et aide primordiale aux familles',
    title: 'Obligation première de maintenir l\'enfant dans son milieu familial',
    fullLegalText: 'L\'aide apportée à l\'enfant et à ses parents doit viser à maintenir l\'enfant dans son milieu familial. Lorsque l\'intérêt de l\'enfant exige qu\'il en soit retiré, les interventions doivent viser à favoriser son retour rapide dans son milieu familial.',
    plainLanguageExplanation: 'La loi ordonne expressément à la DPJ d\'aider les parents avant de penser à retirer un enfant. Le retrait doit demeurer l\'exception absolue et non la première option.',
    commonDpjViolations: [
      'Retirer l\'enfant dès les premières difficultés sans avoir offert de services CLSC, de répit parental ou d\'aide matérielle.',
      'Refuser d\'élaborer un plan d\'action d\'aide aux parents pour préparer le retour rapide à la maison.',
      'Invoquer la précarité financière ou le logement exigu comme motif de placement au lieu d\'apporter un soutien social.'
    ],
    defenseStrategy: 'Démontrer au juge que la DPJ n\'a jamais offert l\'aide préalable obligatoire prévue à l\'art. 2.2 LPJ et exiger une ordonnance contraignant le CIUSSS à fournir des services de soutien à domicile plutôt qu\'un hébergement.',
    jurisprudenceKey: 'La Cour d\'appel du Québec réitère avec constance que la pauvreté et les difficultés passagères ne constituent pas une compromission et que l\'État doit d\'abord soutenir le milieu naturel.',
    category: 'Droits Fondamentaux & Principes'
  },
  {
    id: 'lpj-art-2-4',
    articleNumber: 'Art. 2.4 LPJ',
    sectionTitle: 'Rôle prioritaire de la famille élargie',
    title: 'Obligation de considérer les grands-parents et proches significatifs',
    fullLegalText: 'Toute décision prise en vertu de la présente loi doit tenir compte de l\'importance pour l\'enfant d\'être confié prioritairement, lorsque son intérêt le permet, à une personne significative pour lui, notamment un membre de sa famille élargie ou de sa communauté.',
    plainLanguageExplanation: 'Si un enfant doit être hébergé hors de son foyer, la DPJ a l\'obligation légale de vérifier en priorité si les grands-parents, oncles, tantes ou amis proches de la famille peuvent l\'accueillir avant de l\'envoyer chez des inconnus.',
    commonDpjViolations: [
      'Placer l\'enfant en famille d\'accueil inconnue ou en centre sans contacter les grands-parents qui s\'étaient pourtant manifestés.',
      'Rejeter un proche pour des critères administratifs futiles (manque d\'une chambre séparée, âge des grands-parents) sans évaluation clinique réelle.',
      'Scandale documenté par la CDPDJ : dans 79% des dossiers examinés, la famille élargie a été écartée arbitrairement.'
    ],
    defenseStrategy: 'Déposer immédiatement une requête formelle demandant que l\'enfant soit confié à un membre identifié de la famille élargie en invoquant l\'art. 2.4 LPJ, appuyée de lettres de recommandation et de déclarations assermentées des proches.',
    jurisprudenceKey: 'La présomption de bienveillance familiale favorise le maintien des liens de sang et culturels selon la jurisprudence unanime de la Chambre de la jeunesse.',
    category: 'Droits Fondamentaux & Principes'
  },
  {
    id: 'lpj-art-3',
    articleNumber: 'Art. 3 LPJ',
    sectionTitle: 'Intérêt primordial de l\'enfant',
    title: 'L\'intérêt de l\'enfant comme considération primordiale',
    fullLegalText: 'Les décisions prises en vertu de la présente loi doivent l\'être dans l\'intérêt de l\'enfant et dans le respect de ses droits. Sont pris en considération, outre les besoins physiques, affectifs et intellectuels de l\'enfant, son âge, son niveau de développement, sa culture et la stabilité de ses liens affectifs.',
    plainLanguageExplanation: 'Chaque décision doit être guidée par les besoins réels de l\'enfant et non par la commodité administrative de la DPJ ou les quotas de dossiers.',
    commonDpjViolations: [
      'Invoquer abstraitement « l\'intérêt de l\'enfant » pour justifier des décisions bureaucratiques contradictoires.',
      'Briser un lien affectif solide et sécurisant avec un parent sous prétexte de conflits administratifs avec les intervenants.'
    ],
    defenseStrategy: 'Recentrer le débat sur la réalité vécue par l\'enfant : fournir des évaluations psychologiques indépendantes, des bulletins scolaires et des témoignages démontrant l\'attachement réel.',
    jurisprudenceKey: 'L\'intérêt de l\'enfant n\'est pas une formule magique permettant d\'ignorer les droits fondamentaux des parents protégés par les chartes.',
    category: 'Droits Fondamentaux & Principes'
  },
  {
    id: 'lpj-art-8',
    articleNumber: 'Art. 8 LPJ',
    sectionTitle: 'Droit d\'être informé et entendu',
    title: 'Droit de parole de l\'enfant et des parents à chaque étape',
    fullLegalText: 'L\'enfant et ses parents ont le droit d\'être informés de leurs droits, des mesures envisagées, des décisions prises et des motifs qui les justifient. Ils ont le droit d\'être entendus et de participer aux décisions qui les concernent.',
    plainLanguageExplanation: 'La DPJ ne peut pas prendre de décision dans le dos des parents. Vous avez le droit légal d\'être informé clairement de chaque allégation et d\'exprimer votre point de vue avant toute conclusion.',
    commonDpjViolations: [
      'Tenir des réunions de cas (révisions cliniques) sans y convier les parents.',
      'Modifier les modalités d\'hébergement ou de médication sans le consentement ou l\'information préalable des parents titulaires de l\'autorité parentale.',
      'Rédiger des rapports en langage hermétique sans expliquer aux parents ce qui leur est reproché.'
    ],
    defenseStrategy: 'Invoquer la violation de l\'art. 8 LPJ pour vices de forme et manquement à l\'équité procédurale, demandant au juge d\'annuler les conclusions formulées sans votre audition préalable.',
    jurisprudenceKey: 'Le droit d\'être entendu est une règle de justice naturelle; sa violation entache d\'illégalité les actes de l\'autorité administrative.',
    category: 'Droits Fondamentaux & Principes'
  },

  // SECTION 2 : MOTIFS LÉGAUX DE COMPROMISSION (ART. 38)
  {
    id: 'lpj-art-38',
    articleNumber: 'Art. 38 LPJ',
    sectionTitle: 'Critères restrictifs de la compromission',
    title: 'Les 6 motifs stricts de compromission de la sécurité ou du développement',
    fullLegalText: 'La sécurité ou le développement d\'un enfant est considéré comme compromis lorsqu\'il se trouve dans l\'une des situations suivantes : a) abandon; b) négligence; c) mauvais traitements psychologiques; d) abus sexuels; e) abus physiques; f) troubles de comportement sérieux.',
    plainLanguageExplanation: 'La DPJ n\'a aucun droit d\'intervenir si la situation ne correspond pas de façon démontrée et rigoureuse à l\'une de ces 6 catégories précises de la loi. Une simple divergence d\'opinion éducative n\'est pas un motif légal.',
    commonDpjViolations: [
      'Qualifier de « négligence » ou de « mauvais traitements psychologiques » des conflits de séparation parentale sans danger réel pour l\'enfant.',
      'Utiliser des critères flous et subjectifs sans éléments matériels tangibles (ex. maison pas assez rangée, refus d\'une médication spécifique).',
      'Inverser le fardeau de la preuve : forcer les parents à prouver leur compétence au lieu que la DPJ prouve la compromission.'
    ],
    defenseStrategy: 'Passer au crible chaque allégation du rapport sous l\'angle strict des définitions de l\'art. 38. Démontrer l\'absence de lien de causalité entre les faits allégués et un préjudice concret pour l\'enfant.',
    jurisprudenceKey: 'Le fardeau de preuve de la compromission repose entièrement sur les épaules de la DPJ selon la prépondérance des probabilités étayée par des faits prépondérants.',
    category: 'Motifs de Compromission (Art. 38)'
  },
  {
    id: 'lpj-art-38-1',
    articleNumber: 'Art. 38.1 LPJ',
    sectionTitle: 'Risque sérieux de compromission',
    title: 'Encadrement strict du risque futur de compromission',
    fullLegalText: 'La sécurité ou le développement d\'un enfant peut également être considéré comme compromis lorsqu\'il existe un risque sérieux qu\'il se trouve dans une situation visée à l\'article 38.',
    plainLanguageExplanation: 'La DPJ peut invoquer un risque futur, mais ce risque doit être sérieux, imminent et fondé sur des faits objectifs démontrables, et non sur des soupçons ou des suppositions vagues.',
    commonDpjViolations: [
      'Invoquer un « risque potentiel » basé uniquement sur le passé lointain d\'un parent alors que celui-ci s\'est réhabilité depuis des années.',
      'Retirer un nouveau-né à la maternité sur la base d\'antécédents périmés sans évaluer les capacités actuelles du couple.'
    ],
    defenseStrategy: 'Démontrer l\'absence d\'actualité du risque allégué : produire des preuves de stabilité récente, certificats médicaux, dépistages négatifs et bilans psychosociaux contemporains.',
    jurisprudenceKey: 'Un risque sérieux ne peut être spéculatif; il doit découler d\'une probabilité réelle et étayée de tort imminent pour l\'enfant.',
    category: 'Motifs de Compromission (Art. 38)'
  },

  // SECTION 3 : SIGNALEMENT, URGENCE & MESURES PROVISOIRES
  {
    id: 'lpj-art-44',
    articleNumber: 'Art. 44 LPJ',
    sectionTitle: 'Milieux d\'hébergement autorisés',
    title: 'Interdiction des milieux de fortune et obligation de ressources agréées',
    fullLegalText: 'L\'enfant ne peut être confié qu\'à un établissement exploitant un centre de réadaptation, à une famille d\'accueil reconnue ou à une personne significative pour l\'enfant.',
    plainLanguageExplanation: 'La DPJ a l\'interdiction stricte de loger des enfants dans des motels, chambres d\'hôtel commerciales ou locaux de fortune gardés par des agents de sécurité privés sans agrément clinique.',
    commonDpjViolations: [
      'Scandale des motels de transit révélé par le Protecteur du citoyen : des dizaines d\'enfants hébergés en établissement hôtelier sous la garde d\'agents privés non formés.',
      'Contournement des normes d\'encadrement faute de places en famille d\'accueil.'
    ],
    defenseStrategy: 'Si votre enfant est placé dans un motel ou une ressource non agréée, déposez immédiatement un recours d\'urgence devant le juge pour ordonner son retour en famille ou chez un proche en vertu de l\'art. 44 LPJ.',
    jurisprudenceKey: 'L\'hébergement en motel est illégal et attentatoire à la dignité et à la sécurité de l\'enfant selon les conclusions du Protecteur du citoyen (2022).',
    category: 'Signalement & Urgence (48h)'
  },
  {
    id: 'lpj-art-47',
    articleNumber: 'Art. 47 LPJ',
    sectionTitle: 'Mesures d\'urgence et plafond de 48 heures',
    title: 'Délai maximal absolu de 48 heures pour les mesures d\'urgence',
    fullLegalText: 'Les mesures d\'urgence ne peuvent excéder 48 heures. Si le directeur entend maintenir ces mesures au-delà de ce délai, il doit s\'adresser au tribunal avant l\'expiration des 48 heures.',
    plainLanguageExplanation: 'La DPJ peut retirer un enfant en urgence, mais ce pouvoir est limité à un maximum strict de 48 heures. Passé ce délai, sans autorisation d\'un juge, la rétention devient illégale et arbitraire.',
    commonDpjViolations: [
      'Prolonger la garde de l\'enfant au-delà de 48 heures sans avoir déposé de requête en chambre de la jeunesse.',
      'Faire signer aux parents des consentements sous la contrainte pendant les 48 heures pour éviter de comparaître devant le juge.'
    ],
    defenseStrategy: 'Vérifier l\'heure exacte de la prise en charge d\'urgence. Si le délai de 48 heures a expiré sans ordonnance judiciaire, exiger la remise immédiate de l\'enfant pour rétention illégale.',
    jurisprudenceKey: 'Le délai de 48 heures est d\'ordre public et de rigueur stricte : tout dépassement sans saisine judiciaire vicie la légalité de la détention.',
    category: 'Signalement & Urgence (48h)'
  },

  // SECTION 4 : ÉVALUATION & MESURES VOLONTAIRES
  {
    id: 'lpj-art-53',
    articleNumber: 'Art. 53 LPJ',
    sectionTitle: 'Obligation de rigueur factuelle lors de l\'évaluation',
    title: 'Vérification objective des faits et exclusion des rumeurs',
    fullLegalText: 'Le directeur recueille les faits nécessaires pour apprécier la situation de l\'enfant. L\'évaluation doit être menée avec rigueur, équité et impartialité.',
    plainLanguageExplanation: 'L\'intervenant de la DPJ a l\'obligation légale de vérifier chaque fait. Il ne peut pas inscrire au dossier des ragots de voisins, des déclarations invérifiées ou des impressions personnelles sans corroboration.',
    commonDpjViolations: [
      'Affaire des 140 enfants de la Mauricie (CDPDJ) : 49% des dossiers contenaient des faits non vérifiés, manipulés ou inventés.',
      'Omettre les faits favorables aux parents et ne consigner que des éléments à charge.',
      'Refuser de rencontrer les témoins proposés par la famille.'
    ],
    defenseStrategy: 'Demander l\'assignation en faux de toute affirmation non corroborée dans le rapport. Exiger que l\'intervenant fournisse sous serment la source et la preuve matérielle de chaque allégation.',
    jurisprudenceKey: 'Les rapports de la DPJ ne bénéficient d\'aucune présomption de vérité irréfragable; les intervenants doivent prouver leurs déclarations sous contre-interrogatoire.',
    category: 'Évaluation & Mesures Volontaires'
  },
  {
    id: 'lpj-art-54',
    articleNumber: 'Art. 54 LPJ',
    sectionTitle: 'Entente sur mesures volontaires',
    title: 'Le consentement libre et éclairé aux mesures volontaires',
    fullLegalText: 'Lorsque le directeur conclut que la sécurité ou le développement de l\'enfant est compromis, il peut proposer une entente sur mesures volontaires. Cette entente requiert le consentement libre et éclairé des parents et de l\'enfant de 14 ans et plus.',
    plainLanguageExplanation: 'Une entente sur mesures volontaires ne peut JAMAIS vous être imposée sous la menace. Si vous signez sous la contrainte d\'un chantage (« signez ou on saisit le juge et on vous retire l\'enfant »), le consentement est nul.',
    commonDpjViolations: [
      'Chantage moral à la signature immédiate sans laisser le temps aux parents de consulter un avocat indépendant.',
      'Présenter des clauses léonines (abandon de droits d\'accès, obligation d\'admission en thérapie) sous le prétexte de « bonne foi ».'
    ],
    defenseStrategy: 'Ne jamais signer une entente sur mesures volontaires sans avoir fait relire le document par votre avocat. Dénoncer tout chantage auprès du tribunal.',
    jurisprudenceKey: 'Un consentement extorqué sous la menace d\'un placement forcé est vicié et ne peut lier les parents.',
    category: 'Évaluation & Mesures Volontaires'
  },

  // SECTION 5 : TRIBUNAL & PROCÉDURES LÉGALES
  {
    id: 'lpj-art-76-1',
    articleNumber: 'Art. 76.1 LPJ',
    sectionTitle: 'Communication intégrale de la preuve',
    title: 'Droit des parents d\'accéder à l\'intégralité du dossier avant l\'audience',
    fullLegalText: 'Les parties ont droit à la communication préalable de toute pièce, rapport ou élément de preuve que le directeur entend soumettre au tribunal, dans un délai raisonnable avant l\'audience.',
    plainLanguageExplanation: 'La DPJ ne peut pas garder des pièces secrètes. Les parents et leur avocat ont le droit de consulter l\'intégralité des notes d\'évolution, rapports médicaux et enregistrements avant de se présenter devant le juge.',
    commonDpjViolations: [
      'Déposer des rapports volumineux le matin même de l\'audience pour empêcher la préparation de la défense.',
      'Caviarder abusivement les notes d\'évolution sous prétexte de confidentialité.',
      'Dissimuler des expertises médicales ou psychologiques qui contredisent la thèse de la DPJ.'
    ],
    defenseStrategy: 'Demander un ajournement d\'office si les pièces ne vous ont pas été transmises au moins 5 à 10 jours avant l\'audience et déposer une ordonnance contraignante de divulgation complète de la preuve (règle Stinchcombe).',
    jurisprudenceKey: 'Le droit à une défense pleine et entière s\'applique pleinement en droit de la jeunesse; le procès par embuscade est proscrit.',
    category: 'Tribunal & Procédures Légales'
  },
  {
    id: 'lpj-art-80',
    articleNumber: 'Art. 80 LPJ',
    sectionTitle: 'Représentation légale de l\'enfant',
    title: 'Droit de l\'enfant à un avocat indépendant d\'office',
    fullLegalText: 'Le tribunal peut d\'office, ou à la demande de toute partie ou de l\'enfant, ordonner qu\'un avocat soit désigné pour représenter personnellement l\'enfant, aux frais de l\'aide juridique.',
    plainLanguageExplanation: 'L\'enfant a le droit d\'avoir son propre avocat indépendant qui défend exclusivement sa volonté et ses désirs, complètement séparé de la DPJ et des parents.',
    commonDpjViolations: [
      'Intervenants affirmant représenter eux-mêmes la voix de l\'enfant au tribunal.',
      'Négliger de demander la nomination d\'un avocat indépendant lorsque l\'enfant exprime le désir ardent de rentrer chez ses parents.'
    ],
    defenseStrategy: 'Présenter dès la première comparution une requête pour la nomination d\'un avocat distinct pour l\'enfant en vertu de l\'art. 80 LPJ afin que sa véritable voix soit entendue par le juge.',
    jurisprudenceKey: 'L\'avocat de l\'enfant n\'est pas un tuteur : il doit plaider les volontés réelles de son client mineur doté de discernement.',
    category: 'Tribunal & Procédures Légales'
  },

  // SECTION 6 : ORDONNANCES, DURÉES MAXIMALES & PROJET DE VIE (ART. 91.1)
  {
    id: 'lpj-art-91-1',
    articleNumber: 'Art. 91.1 LPJ',
    sectionTitle: 'Délais légaux maximaux de placement temporaire',
    title: 'Plafonds stricts de durée de placement avant tout projet de vie permanent',
    fullLegalText: 'La durée maximale continue d\'un placement hors du milieu familial ne peut excéder : 1° 12 mois pour un enfant de moins de 2 ans; 2° 18 mois pour un enfant de 2 à 5 ans; 3° 24 mois pour un enfant de 6 ans et plus. À l\'expiration de ce délai, le tribunal doit statuer sur un projet de vie permanent.',
    plainLanguageExplanation: 'La loi impose des compteurs stricts. Si la DPJ ne vous aide pas à réintégrer votre enfant pendant ce délai, elle tentera de vous retirer définitivement vos droits parentaux pour le donner en adoption (projet de vie permanent). Chaque mois d\'attente joue contre les parents !',
    commonDpjViolations: [
      'Ralentir délibérément les évaluations et les visites pour laisser écouler les délais de l\'art. 91.1 et placer les parents devant le fait accompli de l\'adoption.',
      'Ne pas offrir les services de réinsertion durant la première moitié du délai légal.'
    ],
    defenseStrategy: 'Surveiller le calendrier comme une bombe à retardement. Déposer des requêtes en cours d\'ordonnance pour faire constater que la DPJ n\'a pas agi avec diligence et demander la prolongation des délais pour cause exceptionnelle.',
    jurisprudenceKey: 'Le juge peut proroger les délais de l\'art. 91.1 si des circonstances exceptionnelles démontrent que le parent est en voie réelle de réhabilitation.',
    category: 'Ordonnances & Délais Maximaux (91.1)'
  },

  // SECTION 7 : RÉVISION D'ORDONNANCE & RÉTRACTATION (ART. 95)
  {
    id: 'lpj-art-95',
    articleNumber: 'Art. 95 LPJ',
    sectionTitle: 'Requête en révision et rétractation de jugement',
    title: 'Droit de demander la modification ou l\'annulation d\'une ordonnance',
    fullLegalText: 'Le tribunal peut réviser ou révoquer toute décision ou ordonnance rendue s\'il est démontré qu\'un fait nouveau est survenu depuis le jugement ou que la situation s\'est modifiée de manière significative.',
    plainLanguageExplanation: 'Une décision du juge n\'est JAMAIS coulée dans le béton. Si vous avez amélioré votre situation (nouveau logement, fin d\'une relation toxique, thérapie complétée) ou si vous découvrez que la DPJ avait menti ou omis des preuves, vous avez le droit de retourner immédiatement devant le juge.',
    commonDpjViolations: [
      'Intervenants affirmant aux parents qu\'ils doivent attendre la fin complète de l\'ordonnance (ex. 1 an) avant de pouvoir contester.',
      'Refuser de réévaluer la situation malgré des changements probants et substantiels démontrés par la famille.'
    ],
    defenseStrategy: 'Déposer une requête formelle en révision (Art. 95 LPJ) dès qu\'un fait nouveau ou une preuve de falsification du rapport antérieur est découverte.',
    jurisprudenceKey: 'L\'article 95 LPJ est la soupape de sécurité du système : le tribunal a le devoir d\'entendre les parents dès qu\'une modification substantielle et réelle est intervenue.',
    category: 'Révision & Rétractation (Art. 95)'
  },

  // SECTION 8 : RECOURS, PLAINTES & LÉSIONS DE DROITS
  {
    id: 'lpj-art-132',
    articleNumber: 'Art. 132 LPJ & Charte',
    sectionTitle: 'Recours pour lésion de droits fondamentaux',
    title: 'Plaintes au Commissaire, à la CDPDJ et au Protecteur du citoyen',
    fullLegalText: 'Toute personne qui a des motifs raisonnables de croire qu\'un droit d\'un enfant garanti par la présente loi ou par la Charte a été violé peut porter plainte auprès du Commissaire aux plaintes et à la qualité des services ou de la Commission des droits de la personne et des droits de la jeunesse.',
    plainLanguageExplanation: 'Vous n\'êtes pas sans recours contre les abus de pouvoir d\'un intervenant. Vous disposez de trois canaux externes et indépendants pour déposer une plainte officielle protégée par la loi.',
    commonDpjViolations: [
      'Menacer les parents de représailles sur leur dossier s\'ils osent porter plainte au Commissaire aux plaintes ou à la CDPDJ.',
      'Représailles directes : réduction des heures de visite après le dépôt d\'une plainte déontologique.'
    ],
    defenseStrategy: 'Consigner par écrit chaque acte d\'intimidation. Déposer la plainte formellement auprès de la CDPDJ (art. 23 et 48 de la Charte) et du Protecteur du citoyen sous le régime de protection des lanceurs d\'alerte (Loi D-11.1).',
    jurisprudenceKey: 'Toute mesure de représailles contre un parent ou un travailleur qui use de son droit de plainte constitue une infraction grave engageant la responsabilité personnelle et déontologique de son auteur.',
    category: 'Recours, Plaintes & Lésions'
  }
];

export interface ParentFileVulnerability {
  id: string;
  code: string;
  title: string;
  category: 'Faits & Preuve' | 'Délais & Procédure' | 'Visites & Maintien du Lien' | 'Famille & Proches' | 'Services & Soutien';
  severity: 'Critique' | 'Majeure' | 'Élevée';
  lawArticle: string;
  detectionClues: string[];
  diagnosticCheckQuestion: string;
  crossExaminationQuestions: string[];
  recommendedLegalAction: string;
  counterPetitionType: string;
}

export const PARENT_FILE_VULNERABILITIES: ParentFileVulnerability[] = [
  {
    id: 'vuln-faits-non-verifies',
    code: 'FAILLE-01',
    title: 'Faits non vérifiés, rumeurs ou ouï-dire présentés comme des certitudes',
    category: 'Faits & Preuve',
    severity: 'Critique',
    lawArticle: 'Art. 53 LPJ & Art. 23 Charte des droits et libertés',
    detectionClues: [
      'Utilisation dans le rapport de formules : « selon des informations reçues », « il semblerait que », « un tiers rapporte que » sans nommer la source ni fournir de constat visuel.',
      'Allégations de consommation de drogue ou d\'alcool sans aucun test toxicologique médical officiel annexé.',
      'Absence de dates précises, d\'heures ou de lieux précis pour les incidents allégués.'
    ],
    diagnosticCheckQuestion: 'Le rapport de la DPJ contient-il des affirmations graves ou des reproches que l\'intervenant n\'a pas vus de ses propres yeux et qui ne sont pas étayés par des preuves écrites indépendantes ?',
    crossExaminationQuestions: [
      '« Madame/Monsieur l\'intervenant(e), avez-vous été personnellement témoin de cet événement ou vous fiez-vous à la parole d\'un tiers ? »',
      '« Avez-vous exigé des preuves matérielles, des photos ou un rapport policier avant d\'inscrire ce fait comme avéré dans votre rapport déposé au Tribunal ? »',
      '« Pourquoi n\'avez-vous pas confronté le parent avec ces éléments avant de conclure à la compromission ? »'
    ],
    recommendedLegalAction: 'Signifier à l\'avocat de la DPJ une mise en demeure d\'assignation en faux pour les déclarations non corroborées et exiger l\'exclusion de tout ouï-dire en vertu des règles probatoires de la preuve civile.',
    counterPetitionType: 'Requête en exclusion de preuve par ouï-dire et assignation en faux'
  },
  {
    id: 'vuln-famille-elargie-ecartee',
    code: 'FAILLE-02',
    title: 'Famille élargie (grands-parents, oncles, tantes) écartée sans motif sérieux',
    category: 'Famille & Proches',
    severity: 'Critique',
    lawArticle: 'Art. 2.4 & Art. 4 LPJ',
    detectionClues: [
      'Les grands-parents ou proches se sont proposés par écrit pour accueillir l\'enfant, mais la DPJ a refusé sans même visiter leur domicile.',
      'Le rapport invoque des prétextes futiles : « manque d\'espace », « conflit de loyauté abstrait », « trop proche des parents ».',
      'L\'enfant a été confié à des étrangers (famille d\'accueil) alors qu\'un milieu aimant et connu était disponible immédiatement.'
    ],
    diagnosticCheckQuestion: 'Des membres de la famille (grands-parents, tante, oncle) étaient-ils prêts à prendre soin de l\'enfant mais ont été ignorés ou écartés par la DPJ ?',
    crossExaminationQuestions: [
      '« Avez-vous formellement contacté les grands-parents dès la première semaine du signalement conformément à l\'art. 2.4 LPJ ? »',
      '« Sur quelle base clinique affirmez-vous que confier l\'enfant à sa propre grand-mère porterait préjudice à son développement ? »',
      '« Reconnaissez-vous que la Commission Laurent et la CDPDJ ont blâmé la DPJ pour avoir systématiquement écarté les familles élargies québécoises ? »'
    ],
    recommendedLegalAction: 'Les proches doivent mandater un avocat ou déposer eux-mêmes une requête en intervention volontaire (Art. 73 et 84 LPJ) pour demander la garde de l\'enfant en milieu familial naturel.',
    counterPetitionType: 'Requête en intervention volontaire et ordonnance de garde en milieu familial élargi'
  },
  {
    id: 'vuln-absence-services-prealables',
    code: 'FAILLE-03',
    title: 'Absence de soutien et de services concrets avant la demande de placement',
    category: 'Services & Soutien',
    severity: 'Majeure',
    lawArticle: 'Art. 2.2 LPJ',
    detectionClues: [
      'L\'intervenant note que le parent est « épuisé » ou « dépassé », mais aucun répit parental, éducatrice spécialisée à domicile ou suivi CLSC n\'a été mis en place.',
      'La DPJ critique l\'état du logement ou le manque de budget sans avoir référé le parent aux ressources d\'aide financière ou communautaire.',
      'Le premier geste d\'intervention posé par l\'État a été de retirer l\'enfant plutôt que d\'aider la famille.'
    ],
    diagnosticCheckQuestion: 'La DPJ a-t-elle demandé de placer votre enfant sans vous avoir d\'abord fourni des services concrets d\'aide à domicile ou de répit parental ?',
    crossExaminationQuestions: [
      '« Quels services concrets et financés avez-vous déployés dans le foyer familial entre le signalement et la demande d\'ordonnance de placement ? »',
      '« Pourquoi l\'article 2.2 LPJ qui ordonne de maintenir l\'enfant dans son milieu naturel a-t-il été ignoré au profit d\'un retrait immédiat ? »'
    ],
    recommendedLegalAction: 'Demander au tribunal d\'ordonner un sursis de placement et d\'émettre une injonction contre le CIUSSS pour la prestation immédiate de services intensifs à domicile.',
    counterPetitionType: 'Demande d\'ordonnance de services d\'aide obligatoire à domicile (Art. 2.2 & 91 LPJ)'
  },
  {
    id: 'vuln-visites-piegees',
    code: 'FAILLE-04',
    title: 'Visites supervisées insuffisantes, espacées ou instrumentalisées pour piéger le parent',
    category: 'Visites & Maintien du Lien',
    severity: 'Critique',
    lawArticle: 'Art. 8 & Art. 57 LPJ',
    detectionClues: [
      'Les contacts sont réduits à 1 heure par semaine ou par deux semaines dans des bureaux froids de la DPJ.',
      'Toute réaction émotive de l\'enfant (pleurs au départ, excitation) est interprétée négativement dans les notes comme une « preuve d\'incompétence parentale ».',
      'Les intervenants annulent fréquemment les visites sans préavis ni reprise de temps.'
    ],
    diagnosticCheckQuestion: 'Vos droits de visite sont-ils réduits au minimum, annulés sans justification ou surveillés de manière hostile pour noter le moindre de vos gestes ?',
    crossExaminationQuestions: [
      '« Comment un enfant de 3 ans peut-il maintenir son lien d\'attachement fondamental avec 1 heure de contact par quinzaine ? »',
      '« N\'est-il pas tout à fait naturel pour un jeune enfant de pleurer lorsqu\'il doit se séparer de ses parents à la fin d\'une visite ? »',
      '« Pourquoi n\'avez-vous pas autorisé les visites dans un parc ou un organisme communautaire neutre ? »'
    ],
    recommendedLegalAction: 'Déposer sans attendre une requête urgente pour l\'élargissement des droits d\'accès (Art. 57 LPJ) et le transfert de la supervision vers un organisme tiers communautaire neutre et bienveillant.',
    counterPetitionType: 'Requête pour élargissement des contacts et transfert en milieu neutre'
  },
  {
    id: 'vuln-retention-delais-48h',
    code: 'FAILLE-05',
    title: 'Dépassement du délai légal de 48 heures de rétention d\'urgence',
    category: 'Délais & Procédure',
    severity: 'Critique',
    lawArticle: 'Art. 47 LPJ',
    detectionClues: [
      'L\'enfant a été retiré le vendredi soir et n\'a été présenté devant un juge que le mardi ou le mercredi suivant sans ordonnance expresse.',
      'La DPJ a gardé l\'enfant au-delà de 48 heures sans déposer formellement de requête d\'urgence au greffe du tribunal.'
    ],
    diagnosticCheckQuestion: 'Votre enfant a-t-il été retenu par la DPJ plus de 48 heures d\'affilée sans qu\'un juge n\'ait signé d\'ordonnance provisoire autorisant cette garde ?',
    crossExaminationQuestions: [
      '« À quelle heure exacte avez-vous pris physiquement en charge l\'enfant ? »',
      '« À quelle heure exacte le juge a-t-il signé l\'ordonnance prolongeant les mesures d\'urgence ? »',
      '« Reconnaissez-vous que le délai de 48 heures prévu à l\'art. 47 LPJ était dépassé ? »'
    ],
    recommendedLegalAction: 'Invoquer immédiatement l\'illégalité et la nullité de la rétention pour violation directe de l\'art. 47 LPJ et demander la mainlevée immédiate de la garde.',
    counterPetitionType: 'Requête en habeas corpus et mainlevée de rétention illégale'
  },
  {
    id: 'vuln-preuve-cachee-delais',
    code: 'FAILLE-06',
    title: 'Preuve cachée, caviardée ou communiquée à la dernière minute',
    category: 'Faits & Preuve',
    severity: 'Majeure',
    lawArticle: 'Art. 76.1 LPJ & Règle Stinchcombe',
    detectionClues: [
      'Le rapport de la DPJ ou les notes d\'évolution ne vous ont été remis que la veille ou le matin même de la cour.',
      'Des rapports médicaux, scolaires ou psychologiques mentionnés dans l\'évaluation ne vous ont jamais été transmis en entier.',
      'Les intervenants refusent de vous fournir la copie des notes d\'évolution complètes de votre dossier.'
    ],
    diagnosticCheckQuestion: 'La DPJ a-t-elle tardé à vous remettre les documents ou vous a-t-elle caché des rapports dont elle se sert contre vous ?',
    crossExaminationQuestions: [
      '« Pourquoi ces notes d\'évaluation cruciales n\'ont-elles pas été signifiées aux parents dans les délais prescrits par le code de procédure ? »',
      '« Quels éléments avez-vous caviardés et sur quel fondement juridique prétendez-vous les soustraire à l\'avocat de la défense ? »'
    ],
    recommendedLegalAction: 'Demander un ajournement d\'office aux dépens de la DPJ et l\'injonction de communication immédiate de l\'entièreté du dossier non caviardé.',
    counterPetitionType: 'Demande d\'ordonnance de divulgation intégrale de la preuve et ajournement'
  },
  {
    id: 'vuln-avocat-enfant-absent',
    code: 'FAILLE-07',
    title: 'Enfant sans avocat indépendant distinct de la DPJ',
    category: 'Famille & Proches',
    severity: 'Élevée',
    lawArticle: 'Art. 80 LPJ',
    detectionClues: [
      'L\'enfant a plus de 7 ou 8 ans, est capable d\'exprimer sa volonté de rentrer chez ses parents, mais personne ne le représente formellement devant le juge.',
      'L\'avocat de la DPJ prétend parler au nom de l\'enfant alors qu\'il représente la direction du CIUSSS.'
    ],
    diagnosticCheckQuestion: 'Votre enfant a-t-il son propre avocat payé par l\'aide juridique qui défend exclusivement ce que lui désire, sans être influencé par la DPJ ?',
    crossExaminationQuestions: [
      '« Avez-vous informé l\'enfant de son droit fondamental d\'avoir son propre avocat selon l\'art. 80 LPJ ? »',
      '« Avez-vous consigné textuellement ses demandes répétées de réintégrer son foyer familial ? »'
    ],
    recommendedLegalAction: 'Déposer une requête pour ordonner la désignation immédiate d\'un procureur indépendant pour l\'enfant en vertu de l\'art. 80 LPJ.',
    counterPetitionType: 'Demande de nomination d\'un avocat indépendant pour l\'enfant'
  },
  {
    id: 'vuln-delais-stabilite-acceleration-adoption',
    code: 'FAILLE-08',
    title: 'Accélération vers le projet de vie permanent (adoption) avant la fin des délais',
    category: 'Délais & Procédure',
    severity: 'Critique',
    lawArticle: 'Art. 91.1 LPJ',
    detectionClues: [
      'La DPJ parle déjà d\'adoption ou de projet permanent alors que le délai cumulatif (12, 18 ou 24 mois selon l\'âge) n\'est pas atteint.',
      'L\'intervenant décourage le parent en disant « vous ne le reverrez plus jamais », instaurant un sentiment d\'impuissance programmé.'
    ],
    diagnosticCheckQuestion: 'La DPJ vous menace-t-elle de faire adopter définitivement votre enfant alors que les délais légaux ne sont pas expirés ou qu\'elle n\'a pas agi avec diligence ?',
    crossExaminationQuestions: [
      '« Reconnaissez-vous que le délai cumulatif maximal de l\'art. 91.1 n\'est pas encore échu ? »',
      '« Quels obstacles insurmontables la DPJ a-t-elle créés qui ont retardé la réhabilitation du milieu familial ? »'
    ],
    recommendedLegalAction: 'Demander formellement une prorogation exceptionnelle des délais de placement en démontrant que le retard est imputable aux défaillances de services de la DPJ.',
    counterPetitionType: 'Requête en prorogation exceptionnelle des délais de placement (Art. 91.1)'
  }
];
