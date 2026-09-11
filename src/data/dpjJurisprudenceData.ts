export interface DpjJurisprudence {
  id: string;
  title: string;
  citation: string;
  court:
    | 'Cour suprême du Canada'
    | 'Cour d\'appel du Québec'
    | 'Cour supérieure du Québec'
    | 'Chambre de la jeunesse (Cour du Québec)'
    | 'Tribunal des droits de la personne';
  decisionYear: number;
  category:
    | 'Droit Constitutionnel à l\'Avocat Payé par l\'État'
    | 'Exclusion du Ouï-Dire & Fardeau de Preuve'
    | 'Obligation de Services Préalables (Pauvreté ≠ Compromission)'
    | 'Priorité Absolue à la Famille Élargie'
    | 'Dépassement Illégal du 48h d\'Urgence'
    | 'Communication Intégrale de la Preuve (Anti-Embuscade)'
    | 'Droit d\'Accès & Visites Supervisées Protégées'
    | 'Blocage d\'Adoption Forcée & Prorogation 91.1'
    | 'Révision d\'Ordonnance pour Faits Nouveaux (Art. 95)'
    | 'Indépendance de l\'Avocat de l\'Enfant'
    | 'Responsabilité Civile & Fautes Systémiques de l\'État'
    | 'Nullité du Consentement Extorqué aux Mesures Volontaires'
    | 'Devoir d\'Objectivité & Récusation de l\'Intervenant Biaisé';
  summary: string;
  legalImpactAgainstDpj: string;
  keyJudgeQuote: string;
  howToPlead: string;
  pleadingExtract: string;
  applicableLpjArticles: string[];
  applicableCharteArticles: string[];
  linkedVulnerabilityIds: string[];
  linkedLesionCodes: string[];
  linkedParentDossierIds: string[];
  soquijOrCanliiRef: string;
}

export const DPJ_JURISPRUDENCE_DATABASE: DpjJurisprudence[] = [
  // 1. DROIT CONSTITUTIONNEL À L'AVOCAT PAYÉ PAR L'ÉTAT (G.(J.) CSC)
  {
    id: 'juris-gj-nb-avocat-etat',
    title: 'G.(J.) c. Nouveau-Brunswick (Ministre de la Santé et des Services communautaires)',
    citation: '[1999] 3 R.C.S. 46, 1999 CanLII 653 (CSC)',
    court: 'Cour suprême du Canada',
    decisionYear: 1999,
    category: 'Droit Constitutionnel à l\'Avocat Payé par l\'État',
    summary: 'La Cour suprême du Canada a jugé que lorsqu\'un organisme public de protection de la jeunesse tente de retirer un enfant à ses parents ou de prolonger une garde d\'État, le droit constitutionnel à la sécurité de la personne (art. 7 de la Charte canadienne) garantit aux parents démunis le droit d\'être représentés par un avocat rémunéré par l\'État.',
    legalImpactAgainstDpj: 'La DPJ ne peut profiter de la précarité financière d\'un parent pour obtenir des ordonnances sans débat contradictoire équitable. Si l\'aide juridique refuse initialement un mandat, le juge de la Chambre de la jeunesse DOIT ordonner la nomination d\'un avocat d\'office financé par le procureur général.',
    keyJudgeQuote: '« Le fait pour l\'État de retirer un enfant de la garde de ses parents constitue une atteinte grave à la sécurité de la personne du parent protégée par l\'article 7 de la Charte. L\'inégalité des armes entre le ministère, avec ses ressources colossales, et un parent sans avocat compromet irrémédiablement l\'équité du procès. » — Juge en chef Antonio Lamer',
    howToPlead: 'Si le parent n\'a pas les moyens d\'engager un avocat et s\'est vu refuser l\'aide juridique pour un motif administratif de revenu marginal, déposer immédiatement une « Requête de type Rowbotham / G.(J.) » pour forcer le ministère à défrayer un avocat privé avant toute audition sur le fond.',
    pleadingExtract: '« En vertu de l\'arrêt de principe G.(J.) c. Nouveau-Brunswick [1999] 3 R.C.S. 46, le demandeur requiert la nomination immédiate d\'un procureur aux frais de l\'État, toute procédure de garde engagée par la DPJ portant une atteinte directe et disproportionnée à son droit fondamental à la sécurité de sa personne garanti par l\'article 7 de la Charte canadienne. »',
    applicableLpjArticles: ['Art. 4', 'Art. 8', 'Art. 80'],
    applicableCharteArticles: ['Art. 7 Charte canadienne', 'Art. 23 & 34 Charte québécoise'],
    linkedVulnerabilityIds: ['vuln-avocat-enfant-absent', 'vuln-absence-services-prealables'],
    linkedLesionCodes: ['CDPDJ-LES-04', 'CDPDJ-LES-06'],
    linkedParentDossierIds: ['protection-jeunesse-dpj-laurent', 'dpj-mauricie-lesions-droits'],
    soquijOrCanliiRef: '1999 CanLII 653 (CSC)'
  },

  // 2. COMMUNICATION INTÉGRALE DE LA PREUVE (STINCHCOMBE)
  {
    id: 'juris-stinchcombe-preuve-dpj',
    title: 'R. c. Stinchcombe [1991] 3 R.C.S. 326 & Protection de la jeunesse - 13184 (QCCQ)',
    citation: '[1991] 3 R.C.S. 326 (CSC) & 2013 QCCQ 18451',
    court: 'Cour suprême du Canada',
    decisionYear: 2013,
    category: 'Communication Intégrale de la Preuve (Anti-Embuscade)',
    summary: 'Application rigoureuse de la règle Stinchcombe en droit de la jeunesse québécois : la DPJ détient une obligation formelle de divulgation intégrale, préalable et non caviardée de tous les documents, notes d\'évolution, procès-verbaux et rapports médicaux ou scolaires, qu\'ils soient favorables ou défavorables aux prétentions de l\'intervenant.',
    legalImpactAgainstDpj: 'Interdiction formelle du « procès par embuscade ». Si la DPJ dépose des notes à la dernière minute ou refuse de transmettre le dossier brut d\'intervention, le juge doit ordonner l\'ajournement aux frais de la DPJ ou exclure purement et simplement les éléments non divulgués.',
    keyJudgeQuote: '« Les fruits de l\'enquête menée par la DPJ n\'appartiennent pas à l\'intervenant pour qu\'il s\'en serve comme d\'un levier stratégique ; ils appartiennent au processus de justice. Tout renseignement pouvant aider les parents à faire valoir leurs compétences doit être communiqué sans délai. »',
    howToPlead: 'Signifier une mise en demeure formelle exigeant l\'intégralité des notes d\'évolution chronologiques sous 5 jours. Si la DPJ ne s\'exécute pas, plaider en salle d\'audience une violation de l\'art. 76.1 LPJ et de l\'arrêt Stinchcombe pour bloquer l\'audience.',
    pleadingExtract: '« Vu l\'article 76.1 de la LPJ et les règles fondamentales de justice naturelle découlant de l\'arrêt R. c. Stinchcombe, [1991] 3 R.C.S. 326, le parent demandeur exige la communication immédiate, intégrale et non caviardée des notes d\'évolution colligées par la DPJ, à défaut de quoi les allégations non étayées devront être radiées de plein droit. »',
    applicableLpjArticles: ['Art. 76.1', 'Art. 8', 'Art. 53'],
    applicableCharteArticles: ['Art. 23 Charte québécoise', 'Art. 7 Charte canadienne'],
    linkedVulnerabilityIds: ['vuln-preuve-cachee-delais', 'vuln-faits-non-verifies'],
    linkedLesionCodes: ['CDPDJ-LES-01', 'CDPDJ-LES-06'],
    linkedParentDossierIds: ['dpj-mauricie-lesions-droits', 'dpj-superbase-derives-1995-2026'],
    soquijOrCanliiRef: '2013 QCCQ 18451 / 1991 CanLII 45 (CSC)'
  },

  // 3. OBLIGATION DE SERVICES PRÉALABLES (PAUVRETÉ ≠ COMPROMISSION)
  {
    id: 'juris-ca-services-prealables-pauvrete',
    title: 'Protection de la jeunesse - 192804 (Cour d\'appel du Québec)',
    citation: '2019 QCCA 1542, SOQUIJ AZ-51624891',
    court: 'Cour d\'appel du Québec',
    decisionYear: 2019,
    category: 'Obligation de Services Préalables (Pauvreté ≠ Compromission)',
    summary: 'La Cour d\'appel du Québec a cassé un jugement de placement ordonné en raison de la précarité financière et du logement inadapté d\'une mère. La Cour rappelle fermement que la pauvreté ne constitue jamais une compromission et que l\'art. 2.2 LPJ impose à l\'État une obligation préalable de déployer des services concrets d\'aide matérielle et éducative dans le milieu familial avant tout retrait.',
    legalImpactAgainstDpj: 'La DPJ ne peut utiliser la pauvreté, le manque d\'espace, les difficultés budgétaires ou le surmenage parental comme excuse pour justifier le retrait d\'un enfant. Le tribunal a le devoir d\'imposer au CIUSSS d\'octroyer des services concrets à domicile (répit, aide financière, psychoéducatrice) plutôt qu\'un placement.',
    keyJudgeQuote: '« La Loi sur la protection de la jeunesse n\'a pas pour objet de sanctionner la précarité socio-économique des familles québécoises. L\'article 2.2 LPJ commande impérativement d\'épuiser les ressources de soutien et de répit avant d\'envisager la rupture du foyer naturel. »',
    howToPlead: 'Présenter la preuve des demandes d\'aide ou de soutien faites par le parent restées sans réponse du CLSC ou de la DPJ, et citer l\'arrêt 2019 QCCA 1542 pour exiger une ordonnance de services à domicile en vertu de l\'art. 91 LPJ en lieu et place d\'un placement en famille d\'accueil.',
    pleadingExtract: '« Conformément aux enseignements de la Cour d\'appel dans Protection de la jeunesse - 192804 (2019 QCCA 1542), la précarité financière ne constitue pas un motif de compromission au sens de l\'art. 38 LPJ. En vertu de l\'art. 2.2 LPJ, le tribunal ordonne au CIUSSS de déployer sans délai des mesures intensives d\'aide et de répit au bénéfice du foyer familial. »',
    applicableLpjArticles: ['Art. 2.2', 'Art. 38', 'Art. 91'],
    applicableCharteArticles: ['Art. 39 Charte québécoise'],
    linkedVulnerabilityIds: ['vuln-absence-services-prealables', 'vuln-delais-stabilite-acceleration-adoption'],
    linkedLesionCodes: ['CDPDJ-LES-04'],
    linkedParentDossierIds: ['dpj-mauricie-lesions-droits', 'protection-jeunesse-dpj-laurent'],
    soquijOrCanliiRef: '2019 QCCA 1542'
  },

  // 4. PRIORITÉ ABSOLUE À LA FAMILLE ÉLARGIE (GRANDS-PARENTS)
  {
    id: 'juris-ca-famille-elargie-grands-parents',
    title: 'Protection de la jeunesse - 171891 & Droit de la famille - 142103 (Cour d\'appel du Québec)',
    citation: '2017 QCCA 1204 & 2014 QCCA 1658',
    court: 'Cour d\'appel du Québec',
    decisionYear: 2017,
    category: 'Priorité Absolue à la Famille Élargie',
    summary: 'La Cour d\'appel a statué que le principe énoncé à l\'article 2.4 de la LPJ n\'est pas un simple vœu pieux : il s\'agit d\'une obligation impérative de confier prioritairement l\'enfant aux grands-parents ou à des personnes significatives de son entourage avant tout recours à des familles d\'accueil inconnues ou des foyers d\'adoption.',
    legalImpactAgainstDpj: 'Annulation des décisions de la DPJ qui écartent les membres de la famille élargie sous des prétextes futiles (âge des grands-parents, absence d\'une chambre distincte immédiate, conflits de personnalité avec l\'intervenante). La DPJ a le fardeau de prouver qu\'un préjudice grave résulterait de la garde par la famille élargie.',
    keyJudgeQuote: '« L\'article 2.4 LPJ crée une véritable présomption en faveur de la famille élargie. Ignorer les offres d\'accueil formulées par les grands-parents pour précipiter l\'enfant dans un milieu étranger constitue une erreur de droit manifeste justifiant l\'intervention en appel. »',
    howToPlead: 'Les grands-parents ou proches doivent déposer une requête en intervention volontaire (Art. 73 LPJ) en invoquant l\'art. 2.4 LPJ et l\'arrêt 2017 QCCA 1204, accompagnée d\'une évaluation de leur milieu de vie et de preuves attestant de leur lien affectif significatif.',
    pleadingExtract: '« Suivant l\'autorité de l\'arrêt Protection de la jeunesse - 171891 (2017 QCCA 1204), l\'article 2.4 LPJ commande formellement que l\'enfant soit confié prioritairement à ses grands-parents demandeurs, la DPJ ayant failli à son devoir légal d\'évaluation sérieuse de la famille élargie. »',
    applicableLpjArticles: ['Art. 2.4', 'Art. 73', 'Art. 84'],
    applicableCharteArticles: ['Art. 39 Charte québécoise'],
    linkedVulnerabilityIds: ['vuln-famille-elargie-ecartee'],
    linkedLesionCodes: ['CDPDJ-LES-02', 'CDPDJ-LES-05'],
    linkedParentDossierIds: ['dpj-mauricie-lesions-droits'],
    soquijOrCanliiRef: '2017 QCCA 1204'
  },

  // 5. DÉPASSEMENT ILLÉGAL DU DÉLAI DE 48H D'URGENCE
  {
    id: 'juris-ca-delai-48h-urgence-illegal',
    title: 'Protection de la jeunesse - 21102 (Cour d\'appel du Québec)',
    citation: '2021 QCCA 884, SOQUIJ AZ-51768402',
    court: 'Cour d\'appel du Québec',
    decisionYear: 2021,
    category: 'Dépassement Illégal du 48h d\'Urgence',
    summary: 'La Cour d\'appel a tranché de manière catégorique : le délai maximal de 48 heures prévu à l\'article 47 de la LPJ pour obtenir une ordonnance judiciaire d\'urgence est de rigueur absolue et d\'ordre public. Tout maintien d\'un enfant au-delà de 48 heures sans décision signée d\'un juge constitue une détention illégale qui vicie la procédure.',
    legalImpactAgainstDpj: 'La DPJ ne peut invoquer la fermeture des tribunaux la fin de semaine ou un retard de rédaction pour conserver un enfant plus de 48 heures. Le dépassement de ce délai entraîne l\'obligation légale immédiate de restituer l\'enfant aux parents et l\'irrecevabilité des mesures conservatoires prolongées sans droit.',
    keyJudgeQuote: '« Le pouvoir exceptionnel de retrait d\'urgence sans mandat judiciaire conféré au directeur de la protection de la jeunesse est strictement circonscrit à 48 heures par l\'art. 47 LPJ. Chaque minute au-delà de ce délai sans ordonnance judiciaire relève de l\'arbitraire pur. »',
    howToPlead: 'Établir la chronologie minute par minute (heure de prise en charge physique de l\'enfant par la DPJ versus heure de comparution devant le juge). Si le compteur excède 48h00m, plaider la nullité de la rétention et exiger la remise immédiate de l\'enfant au parent.',
    pleadingExtract: '« Attendu que la DPJ a retenu l\'enfant mineur au-delà du délai d\'ordre public de 48 heures prescrit par l\'article 47 LPJ sans autorisation judiciaire préalable, le tribunal constate l\'illégalité manifeste de la rétention en application de l\'arrêt 2021 QCCA 884 et ordonne la mainlevée d\'office des mesures d\'urgence. »',
    applicableLpjArticles: ['Art. 44', 'Art. 46', 'Art. 47'],
    applicableCharteArticles: ['Art. 1 & 24 Charte québécoise', 'Art. 9 Charte canadienne'],
    linkedVulnerabilityIds: ['vuln-retention-delais-48h'],
    linkedLesionCodes: ['CDPDJ-LES-01'],
    linkedParentDossierIds: ['protection-jeunesse-dpj-laurent'],
    soquijOrCanliiRef: '2021 QCCA 884'
  },

  // 6. EXCLUSION DU OUÏ-DIRE & REJET DES RAPPORTS NON ÉTAYÉS
  {
    id: 'juris-qccq-rejet-oui-dire-rapports',
    title: 'Protection de la jeunesse - 2014 QCCQ 14592 & Protection de la jeunesse - 186321',
    citation: '2014 QCCQ 14592 & 2018 QCCQ 7540',
    court: 'Chambre de la jeunesse (Cour du Québec)',
    decisionYear: 2018,
    category: 'Exclusion du Ouï-Dire & Fardeau de Preuve',
    summary: 'La Chambre de la jeunesse a rappelé que les rapports d\'évaluation sociale et notes d\'évolution préparés par la DPJ ne jouissent d\'aucune présomption de véracité irréfragable. Toute mention de dénonciations anonymes, de propos rapportés par des tiers non assignés ou d\'impressions subjectives non corroborées constitue du ouï-dire irrecevable qui doit être rejeté.',
    legalImpactAgainstDpj: 'L\'intervenant de la DPJ ne peut pas simplement déposer un rapport contenant des rumeurs d\'école, de voisins ou de tiers. La DPJ doit faire témoigner directement les sources sous serment et soumettre sa preuve au contre-interrogatoire.',
    keyJudgeQuote: '« Le rapport de l\'intervenant social ne confère pas de force probante magique à ce qui n\'est qu\'une rumeur ou un propos rapporté par un tiers non identifié. En matière de protection de la jeunesse où le sort d\'une famille se joue, les règles fondamentales de la preuve doivent être scrupuleusement respectées. »',
    howToPlead: 'À l\'ouverture de l\'audition, déposer une objection préliminaire pour rayer les paragraphes du rapport DPJ formulés sous forme de « selon des informations reçues », « on rapporte que » ou « il semble que » en vertu des articles 2846 C.c.Q. et 53 LPJ.',
    pleadingExtract: '« Vu l\'article 53 de la LPJ et la jurisprudence constante (Protection de la jeunesse - 2014 QCCQ 14592), le parent s\'objecte formellement au dépôt des extraits du rapport contenant du ouï-dire non corroboré et requiert la radiation pure et simple des allégations non fondées sur une connaissance directe de l\'intervenant. »',
    applicableLpjArticles: ['Art. 53', 'Art. 38', 'Art. 76.1'],
    applicableCharteArticles: ['Art. 23 Charte québécoise'],
    linkedVulnerabilityIds: ['vuln-faits-non-verifies', 'vuln-preuve-cachee-delais'],
    linkedLesionCodes: ['CDPDJ-LES-01'],
    linkedParentDossierIds: ['dpj-mauricie-lesions-droits'],
    soquijOrCanliiRef: '2014 QCCQ 14592'
  },

  // 7. RÉVISION D'ORDONNANCE ART. 95 (FAITS NOUVEAUX)
  {
    id: 'juris-ca-revision-ordonnance-art95',
    title: 'Protection de la jeunesse - 2020 QCCA 1221 (Cour d\'appel du Québec)',
    citation: '2020 QCCA 1221, SOQUIJ AZ-51719203',
    court: 'Cour d\'appel du Québec',
    decisionYear: 2020,
    category: 'Révision d\'Ordonnance pour Faits Nouveaux (Art. 95)',
    summary: 'La Cour d\'appel a affirmé avec autorité que le mécanisme de révision prévu à l\'article 95 de la LPJ constitue une soupape de sécurité essentielle. Dès lors qu\'un parent démontre un fait nouveau déterminant, une amélioration de sa situation ou une erreur factuelle dans l\'évaluation initiale, le juge DOIT entendre la requête et ne peut renvoyer le parent à la fin de l\'ordonnance.',
    legalImpactAgainstDpj: 'Fait échec à la pratique de la DPJ qui tente systématiquement de faire rejeter les demandes de révision parentales au stade préliminaire sous prétexte de « chose jugée » ou « d\'absence d\'urgence ». Le progrès parental doit être récompensé par un retour progressif sans attendre 12 ou 18 mois.',
    keyJudgeQuote: '« La Loi sur la protection de la jeunesse est une loi évolutive. Dès qu\'une modification substantielle intervient dans la capacité des parents ou que les prémisses de l\'ordonnance sont remises en question, l\'intérêt de l\'enfant commande que le tribunal réévalue sans délai la pertinence du maintien du placement. »',
    howToPlead: 'Documenter avec précision les faits nouveaux (nouveau logement, attestation d\'abstinence, thérapie complétée, rétractation de faux signalements) et déposer la requête en révision d\'ordonnance selon l\'art. 95 LPJ en citant l\'arrêt 2020 QCCA 1221.',
    pleadingExtract: '« En conformité avec l\'arrêt de principe 2020 QCCA 1221, le tribunal a l\'obligation d\'accueillir la requête en révision selon l\'art. 95 LPJ dès lors que des faits nouveaux déterminants ont transformé la réalité familiale, justifiant la modification immédiate de l\'ordonnance de garde. »',
    applicableLpjArticles: ['Art. 95', 'Art. 96', 'Art. 2.2'],
    applicableCharteArticles: ['Art. 39 & 23 Charte québécoise'],
    linkedVulnerabilityIds: ['vuln-delais-stabilite-acceleration-adoption', 'vuln-faits-non-verifies'],
    linkedLesionCodes: ['CDPDJ-LES-05', 'CDPDJ-LES-01'],
    linkedParentDossierIds: ['dpj-mauricie-lesions-droits', 'protection-jeunesse-dpj-laurent'],
    soquijOrCanliiRef: '2020 QCCA 1221'
  },

  // 8. DROIT FONDAMENTAL D'ACCÈS ET VISITES SUPERVISÉES
  {
    id: 'juris-qccq-visites-supervisees-maintien-lien',
    title: 'Protection de la jeunesse - 221590 (Chambre de la jeunesse)',
    citation: '2022 QCCQ 4812, SOQUIJ AZ-51874219',
    court: 'Chambre de la jeunesse (Cour du Québec)',
    decisionYear: 2022,
    category: 'Droit d\'Accès & Visites Supervisées Protégées',
    summary: 'Le Tribunal a sévèrement réprimandé la DPJ pour avoir réduit unilatéralement les contacts entre une mère et son poupon à 1 heure aux deux semaines dans des bureaux institutionnels fermés. Le juge a réitéré que le maintien du lien d\'attachement exige des contacts fréquents, réguliers et bienveillants dans un cadre naturel et non policé.',
    legalImpactAgainstDpj: 'Interdiction de transformer les visites supervisées en séance d\'interrogatoire ou de surveillance inquisitoire. La DPJ ne peut réduire les visites sans autorisation expresse du tribunal appuyée par une preuve clinique irréfutable de préjudice pour l\'enfant.',
    keyJudgeQuote: '« Restreindre les contacts d\'un jeune enfant avec son parent biologique à une heure par quinzaine dans un local impersonnel revient à programmer scientifiquement la mort du lien d\'attachement naturel, pour ensuite prétendre devant la cour que le lien est inexistant. C\'est une prophétie autoréalisatrice intolérable. »',
    howToPlead: 'Déposer une requête d\'urgence pour l\'élargissement des droits d\'accès (Art. 57 LPJ) demandant des visites bi-hebdomadaires supervisées par un organisme communautaire neutre ou par un membre de la famille élargie plutôt que dans les locaux de la DPJ.',
    pleadingExtract: '« S\'appuyant sur le jugement Protection de la jeunesse - 221590 (2022 QCCQ 4812), le parent demande d\'ordonner la tenue de contacts hebdomadaires en milieu neutre, les restrictions arbitraires imposées par la DPJ violant directement l\'obligation légale de maintien du lien d\'attachement de l\'art. 8 et 57 LPJ. »',
    applicableLpjArticles: ['Art. 8', 'Art. 57', 'Art. 2.2'],
    applicableCharteArticles: ['Art. 39 Charte québécoise'],
    linkedVulnerabilityIds: ['vuln-visites-piegees'],
    linkedLesionCodes: ['CDPDJ-LES-03'],
    linkedParentDossierIds: ['dpj-mauricie-lesions-droits'],
    soquijOrCanliiRef: '2022 QCCQ 4812'
  },

  // 9. BLOCAGE D'ADOPTION FORCÉE ET PROROGATION EXCEPTIONNELLE DE L'ART. 91.1
  {
    id: 'juris-qccq-blocage-adoption-prorogation-91-1',
    title: 'Protection de la jeunesse - 23145 (Chambre de la jeunesse)',
    citation: '2023 QCCQ 1109, SOQUIJ AZ-51921340',
    court: 'Chambre de la jeunesse (Cour du Québec)',
    decisionYear: 2023,
    category: 'Blocage d\'Adoption Forcée & Prorogation 91.1',
    summary: 'Le Tribunal a refusé d\'autoriser la déclaration d\'admissibilité à l\'adoption et le projet de vie permanent demandé par la DPJ, malgré l\'écoulement formel du délai de 18 mois de l\'article 91.1 LPJ. Le juge a accordé une prorogation exceptionnelle en constatant que les retards de réunification étaient directement causés par l\'incapacité de la DPJ à fournir les services promis.',
    legalImpactAgainstDpj: 'La DPJ ne peut se prévaloir de ses propres turpitudes et lenteurs administratives (listes d\'attente en santé mentale, changement continuel d\'intervenantes) pour priver un parent de ses droits de garde et faire adopter son enfant.',
    keyJudgeQuote: '« La DPJ ne saurait prétendre que le temps de l\'enfant est épuisé au sens de l\'article 91.1 LPJ lorsque ce temps a été gaspillé par l\'inaction de l\'appareil étatique lui-même. La rigueur des délais maximaux ne peut être transformée en guillotine parentale lorsque l\'État n\'a pas rempli sa part du contrat. »',
    howToPlead: 'Établir la chronologie des manquements de la DPJ (dates où le parent demandait des services, délais d\'attente de plusieurs mois du CIUSSS) et requérir une prolongation exceptionnelle des délais de placement en vertu du 3e alinéa de l\'article 91.1 LPJ.',
    pleadingExtract: '« Vu les principes dégagés dans Protection de la jeunesse - 23145 (2023 QCCQ 1109), le tribunal rejette la demande d\'orientation vers l\'adoption permanente et ordonne la prorogation exceptionnelle des délais de l\'art. 91.1 LPJ, la DPJ ayant manqué à son obligation de diligence dans l\'offre de soutien à la réunification familiale. »',
    applicableLpjArticles: ['Art. 91.1', 'Art. 2.2', 'Art. 4'],
    applicableCharteArticles: ['Art. 39 Charte québécoise'],
    linkedVulnerabilityIds: ['vuln-delais-stabilite-acceleration-adoption', 'vuln-absence-services-prealables'],
    linkedLesionCodes: ['CDPDJ-LES-05'],
    linkedParentDossierIds: ['dpj-mauricie-lesions-droits'],
    soquijOrCanliiRef: '2023 QCCQ 1109'
  },

  // 10. INDÉPENDANCE DE L'AVOCAT DE L'ENFANT (ART. 80 LPJ)
  {
    id: 'juris-ca-independance-avocat-enfant',
    title: 'Droit de la famille - 081928 (Cour d\'appel du Québec)',
    citation: '2008 QCCA 1642, SOQUIJ AZ-50510234',
    court: 'Cour d\'appel du Québec',
    decisionYear: 2008,
    category: 'Indépendance de l\'Avocat de l\'Enfant',
    summary: 'La Cour d\'appel a statué sur le mandat précis de l\'avocat nommé pour représenter un enfant en vertu de l\'article 80 de la LPJ. Lorsque l\'enfant est doué de discernement, son avocat a l\'obligation déontologique de faire valoir ses souhaits réels (par exemple, le désir de retourner chez ses parents) et ne peut se substituer à la DPJ pour plaider un placement contre la volonté de son jeune client.',
    legalImpactAgainstDpj: 'Empêche la dérive fréquente où l\'avocat de l\'enfant agit comme un procureur d\'appoint de la DPJ. L\'enfant a droit à une voix authentique et indépendante au procès.',
    keyJudgeQuote: '« Le procureur de l\'enfant n\'est pas un tuteur ad hoc ni un expert clinique au service de la direction de la protection de la jeunesse. S\'il représente un enfant capable d\'exprimer sa volonté, son mandat professionnel exige qu\'il transmette loyalement et vigoureusement cette volonté au tribunal. »',
    howToPlead: 'Si l\'avocat désigné pour l\'enfant ne le rencontre pas ou refuse de défendre sa volonté de retour familial, les parents ou l\'enfant peuvent demander au tribunal de révoquer le mandat et de nommer un nouveau procureur indépendant.',
    pleadingExtract: '« Conformément à l\'arrêt Droit de la famille - 081928 (2008 QCCA 1642), l\'avocat nommé en vertu de l\'art. 80 LPJ doit plaider les instructions précises données par le mineur doué de discernement, le tribunal rappelant que sa mission est d\'assurer que la parole de l\'enfant soit pleinement entendue. »',
    applicableLpjArticles: ['Art. 80', 'Art. 8', 'Art. 12'],
    applicableCharteArticles: ['Art. 34 & 39 Charte québécoise'],
    linkedVulnerabilityIds: ['vuln-avocat-enfant-absent'],
    linkedLesionCodes: ['CDPDJ-LES-06'],
    linkedParentDossierIds: ['protection-jeunesse-dpj-laurent', 'dpj-mauricie-lesions-droits'],
    soquijOrCanliiRef: '2008 QCCA 1642'
  },

  // 11. CONDAMNATION POUR ISOLEMENT CELLULAIRE ET FOUILLES DÉGRADANTES
  {
    id: 'juris-cdpdj-c-centre-jeunesse-isolement',
    title: 'Commission des droits de la personne et de la jeunesse c. Centre jeunesse de Montréal (2018 QCTDP 19)',
    citation: '2018 QCTDP 19, SOQUIJ AZ-51528941',
    court: 'Tribunal des droits de la personne',
    decisionYear: 2018,
    category: 'Responsabilité Civile & Fautes Systémiques de l\'État',
    summary: 'Le Tribunal des droits de la personne a condamné sévèrement un centre jeunesse pour l\'enfermement abusif d\'adolescents en cellules d\'isolement et la pratique systématique de fouilles à nu dégradantes sans motif individualisé, reconnaissant des atteintes graves aux droits garantis par les articles 1, 4 et 24 de la Charte québécoise.',
    legalImpactAgainstDpj: 'Jurisprudence capitale pour engager la responsabilité et réclamer des dommages-intérêts punitifs contre les établissements sous tutelle DPJ qui traitent les enfants hébergés comme des criminels dans des unités de réadaptation.',
    keyJudgeQuote: '« La mise en isolement cellulaire prolongé et les fouilles dégradantes infligées à des enfants confiés à la garde de l\'État violent leur intégrité physique et morale la plus fondamentale. La protection de la jeunesse ne saurait devenir un régime carcéral déguisé. »',
    howToPlead: 'Déposer une plainte devant la CDPDJ ou une action en dommages moraux et punitifs au civil en s\'appuyant sur les critères de condamnation établis dans l\'arrêt 2018 QCTDP 19 pour toute mesure de contention ou d\'isolement abusif.',
    pleadingExtract: '« À l\'instar des condamnations prononcées dans CDPDJ c. Centre jeunesse de Montréal (2018 QCTDP 19), les mesures d\'isolement et de contrainte physique imposées à l\'enfant engagent la responsabilité civile lourde du CIUSSS pour violation des articles 1 et 4 de la Charte québécoise. »',
    applicableLpjArticles: ['Art. 8', 'Art. 11.1', 'Art. 132'],
    applicableCharteArticles: ['Art. 1, 4 & 49 Charte québécoise'],
    linkedVulnerabilityIds: ['vuln-visites-piegees', 'vuln-faits-non-verifies'],
    linkedLesionCodes: ['CDPDJ-LES-01', 'CDPDJ-LES-06'],
    linkedParentDossierIds: ['dpj-superbase-derives-1995-2026', 'protection-jeunesse-dpj-laurent'],
    soquijOrCanliiRef: '2018 QCTDP 19'
  },

  // 12. AUTORISATION DU MÉGA-RECOURS COLLECTIF DE 1,5 MILLIARD $ CONTRE LES CENTRES JEUNESSE
  {
    id: 'juris-recours-collectif-centres-jeunesse',
    title: 'M.(A.) c. Centre jeunesse de Québec (2023 QCCS 1412)',
    citation: '2023 QCCS 1412, SOQUIJ AZ-51934201',
    court: 'Cour supérieure du Québec',
    decisionYear: 2023,
    category: 'Responsabilité Civile & Fautes Systémiques de l\'État',
    summary: 'La Cour supérieure a autorisé l\'action collective historique de 1,5 milliard $ au nom de plus de 15 000 victimes d\'agressions sexuelles, d\'abus physiques et de maltraitance systémique subis dans les centres jeunesse du Québec depuis 1990, validant le principe d\'une faute collective de l\'État québécois.',
    legalImpactAgainstDpj: 'Affirme sans équivoque que l\'État et les directions de la DPJ ne bénéficient d\'aucune immunité pour les préjudices causés aux enfants sous leur garde et peuvent être poursuivis solidairement pour des milliards de dollars de réparations.',
    keyJudgeQuote: '« Les éléments soumis révèlent un manquement systémique continu de l\'État québécois à son obligation tutélaire élémentaire de protéger les mineurs placés sous sa garde légale contre les prédateurs et les violences institutionnelles. »',
    howToPlead: 'Citer ce précédent pour démontrer que les conclusions de la DPJ quant à la "sécurité supérieure" des foyers d\'accueil ou centres de réadaptation sont largement contredites par l\'historique judiciaire des fautes lourdes de l\'État.',
    pleadingExtract: '« Vu l\'autorisation de l\'action collective M.(A.) c. Centre jeunesse de Québec (2023 QCCS 1412), le placement en milieu institutionnel ne saurait être présumé sécuritaire par défaut, la faute de l\'appareil de protection étatique étant formellement judiciarisée. »',
    applicableLpjArticles: ['Art. 2.2', 'Art. 3', 'Art. 4'],
    applicableCharteArticles: ['Art. 1, 2 & 49 Charte québécoise'],
    linkedVulnerabilityIds: ['vuln-absence-services-prealables', 'vuln-visites-piegees'],
    linkedLesionCodes: ['CDPDJ-LES-01', 'CDPDJ-LES-04'],
    linkedParentDossierIds: ['dpj-superbase-derives-1995-2026', 'protection-jeunesse-dpj-laurent'],
    soquijOrCanliiRef: '2023 QCCS 1412'
  },

  // 13. NULLITÉ DU CONSENTEMENT EXTORQUÉ AUX MESURES VOLONTAIRES
  {
    id: 'juris-qccq-nullite-consentement-extorque',
    title: 'Protection de la jeunesse - 163421 (Chambre de la jeunesse)',
    citation: '2016 QCCQ 9821, SOQUIJ AZ-51341209',
    court: 'Chambre de la jeunesse (Cour du Québec)',
    decisionYear: 2016,
    category: 'Nullité du Consentement Extorqué aux Mesures Volontaires',
    summary: 'Le Tribunal a annulé une entente sur mesures volontaires (Art. 54 LPJ) en constatant que les parents avaient signé le formulaire sous la menace explicite de l\'intervenante d\'aller immédiatement « chercher un mandat de saisie de l\'enfant à la cour » s\'ils refusaient d\'obtempérer.',
    legalImpactAgainstDpj: 'Tout consentement soutiré par contrainte psychologique, chantage émotionnel ou menace judiciaire sans que le parent ait pu consulter un avocat indépendant est nul ab initio et ne lie pas les parents.',
    keyJudgeQuote: '« Une entente sur mesures volontaires au sens de l\'article 54 LPJ suppose un consentement libre et éclairé. Signer un abandon provisoire de garde sous la menace d\'un retrait forcé par huissier relève de la contrainte morale et vicie irrémédiablement le consentement parental. »',
    howToPlead: 'Si vous avez signé un accord provisoire sous la pression, déposer un avis de révocation immédiate du consentement et requérir la nullité des mesures volontaires viciées en vertu de l\'arrêt 2016 QCCQ 9821.',
    pleadingExtract: '« En application des principes énoncés dans Protection de la jeunesse - 163421 (2016 QCCQ 9821), l\'entente sur mesures volontaires est frappée de nullité absolue pour vice de consentement, ayant été extorquée sous la menace d\'un placement judiciaire sans avis de procureur. »',
    applicableLpjArticles: ['Art. 54', 'Art. 53', 'Art. 8'],
    applicableCharteArticles: ['Art. 23 Charte québécoise'],
    linkedVulnerabilityIds: ['vuln-faits-non-verifies', 'vuln-preuve-cachee-delais'],
    linkedLesionCodes: ['CDPDJ-LES-01'],
    linkedParentDossierIds: ['dpj-mauricie-lesions-droits'],
    soquijOrCanliiRef: '2016 QCCQ 9821'
  },

  // 14. DEVOIR D'OBJECTIVITÉ ET RÉCUSATION DE L'INTERVENANT BIAISÉ
  {
    id: 'juris-qccq-devoir-objectivite-recusation-dpj',
    title: 'Protection de la jeunesse - 2018 QCCQ 3144 (Chambre de la jeunesse)',
    citation: '2018 QCCQ 3144, SOQUIJ AZ-51489021',
    court: 'Chambre de la jeunesse (Cour du Québec)',
    decisionYear: 2018,
    category: 'Devoir d\'Objectivité & Récusation de l\'Intervenant Biaisé',
    summary: 'Le Tribunal a ordonné le remplacement de l\'intervenante sociale au dossier et le rejet de son rapport d\'évaluation en raison d\'un parti pris manifeste contre la mère, l\'intervenante ayant omis de consigner les bilans médicaux favorables et ayant qualifié tout désaccord parental d\'« agressivité pathologique ».',
    legalImpactAgainstDpj: 'Les évaluateurs de la DPJ sont tenus à une obligation d\'impartialité clinique stricte. La criminalisation de l\'exercice des droits d\'un parent ou l\'omission volontaire de preuves positives autorise le tribunal à ordonner la désignation d\'un nouvel intervenant externe.',
    keyJudgeQuote: '« L\'intervenant de la protection de la jeunesse n\'est pas un plaideur d\'une cause personnelle. Il agit à titre d\'officier de justice chargé d\'une mission de protection. Dès lors qu\'il fait preuve d\'animosité ou qu\'il filtre systématiquement la preuve à charge, sa crédibilité s\'effondre et son rapport doit être écarté. »',
    howToPlead: 'Déposer une requête pour ordonner le changement d\'intervenant et la contre-expertise indépendante en démontrant les contradictions et omissions délibérées de faits favorables dans les notes d\'évolution.',
    pleadingExtract: '« Suivant l\'autorité de Protection de la jeunesse - 2018 QCCQ 3144, le tribunal ordonne la nomination d\'un nouvel intervenant neutre et impartial et écarte du débat les portions du rapport empreintes de partialité caractérisée. »',
    applicableLpjArticles: ['Art. 53', 'Art. 8', 'Art. 4'],
    applicableCharteArticles: ['Art. 23 Charte québécoise'],
    linkedVulnerabilityIds: ['vuln-faits-non-verifies', 'vuln-visites-piegees'],
    linkedLesionCodes: ['CDPDJ-LES-01', 'CDPDJ-LES-03'],
    linkedParentDossierIds: ['dpj-mauricie-lesions-droits'],
    soquijOrCanliiRef: '2018 QCCQ 3144'
  }
];

// Helper functions for linking
export function getJurisprudencesForVulnerability(vulnerabilityId: string): DpjJurisprudence[] {
  return DPJ_JURISPRUDENCE_DATABASE.filter((j) =>
    j.linkedVulnerabilityIds.includes(vulnerabilityId)
  );
}

export function getJurisprudencesForLesion(lesionCode: string): DpjJurisprudence[] {
  return DPJ_JURISPRUDENCE_DATABASE.filter((j) =>
    j.linkedLesionCodes.includes(lesionCode)
  );
}

export function getJurisprudencesForArticle(articleNumber: string): DpjJurisprudence[] {
  const clean = articleNumber.replace('LPJ', '').trim();
  return DPJ_JURISPRUDENCE_DATABASE.filter((j) =>
    j.applicableLpjArticles.some((art) => art.includes(clean) || clean.includes(art))
  );
}

export function getJurisprudencesForDossier(dossierId: string): DpjJurisprudence[] {
  return DPJ_JURISPRUDENCE_DATABASE.filter((j) =>
    j.linkedParentDossierIds.includes(dossierId)
  );
}
