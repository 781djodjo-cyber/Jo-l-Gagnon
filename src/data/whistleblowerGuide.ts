export interface WatchdogAgency {
  name: string;
  role: string;
  scope: string;
  reportingProcess: string;
  legalProtection: string;
  lawReference: string;
  officialPortal: string;
  confidentialityLevel: 'Anonymat Total Disponible' | 'Haute Confidentialité Protégée' | 'Procédure Parlementaire';
}

export const WATCHDOG_AGENCIES: WatchdogAgency[] = [
  {
    name: 'Protecteur du citoyen du Québec',
    role: 'Pôle central des lanceurs d\'alerte pour les organismes publics',
    scope: 'Tous les ministères, sociétés d\'État (Hydro-Québec, SAAQ, etc.), réseaux de la santé, de l\'éducation et de la protection de la jeunesse.',
    reportingProcess: 'Dépôt direct en ligne, par téléphone sécurisé ou courrier confidentiel d\'une divulgation d\'acte répréhensible (détournement de fonds, malversation, violation grave d\'une loi, risque pour la santé ou la sécurité des enfants).',
    legalProtection: 'Immunité absolue contre les poursuites et protection pénale contre toute forme de représailles (congédiement, suspension, rétrogradation, harcèlement professionnel).',
    lawReference: 'Loi facilitant la divulgation d\'actes répréhensibles à l\'égard des organismes publics (RLRQ, c. D-11.1)',
    officialPortal: 'protecteurducitoyen.qc.ca',
    confidentialityLevel: 'Anonymat Total Disponible'
  },
  {
    name: 'Unité permanente anticorruption (UPAC)',
    role: 'Corps de police spécialisé dans les crimes économiques et de corruption',
    scope: 'Corruption, collusion, malversation, abus de confiance, pots-de-vin, fraude envers le gouvernement et le secteur public québécois.',
    reportingProcess: 'Ligne de dénonciation confidentielle 1 844 541-UPAC ou formulaire web crypté. Traitement direct par des enquêteurs assermentés de la Sûreté du Québec et du DPCP.',
    legalProtection: 'Statut de dénonciateur protégé. Les représailles contre une personne collaborant avec l\'UPAC constituent une infraction pénale passible de lourdes amendes et de prison.',
    lawReference: 'Loi sur la lutte contre la corruption (RLRQ, c. L-6.1)',
    officialPortal: 'upac.gouv.qc.ca',
    confidentialityLevel: 'Anonymat Total Disponible'
  },
  {
    name: 'Commissaire à l\'éthique et à la déontologie (CED)',
    role: 'Surveillance déontologique des députés et ministres de l\'Assemblée nationale',
    scope: 'Conflits d\'intérêts personnels, cadeaux, voyages non déclarés, utilisation partisane des ressources de l\'État, manquement à l\'honneur parlementaire.',
    reportingProcess: 'Toute personne peut adresser un renseignement au Commissaire. Les députés de l\'Assemblée nationale peuvent formellement demander une enquête officielle au Salon bleu.',
    legalProtection: 'Protection de la confidentialité de l\'identité des personnes transmettant des informations lors des enquêtes déontologiques.',
    lawReference: 'Code d\'éthique et de déontologie des membres de l\'Assemblée nationale (RLRQ, c. C-23.1)',
    officialPortal: 'ced-qc.ca',
    confidentialityLevel: 'Haute Confidentialité Protégée'
  },
  {
    name: 'Commissaire au lobbyisme du Québec (Carrefour Lobby Québec)',
    role: 'Transparence des influences exercées sur les titulaires de charges publiques',
    scope: 'Lobbyisme non déclaré auprès des ministres, députés, fonctionnaires et élus municipaux pour influencer une loi, une subvention ou un contrat.',
    reportingProcess: 'Signalement en ligne d\'une activité d\'influence illégale ou d\'une omission d\'inscription au registre Carrefour Lobby Québec.',
    legalProtection: 'Enquêtes indépendantes avec pouvoirs de perquisition et transmission de dossiers au Directeur des poursuites criminelles et pénales (DPCP).',
    lawReference: 'Loi sur la transparence et l\'éthique en matière de lobbyisme (RLRQ, c. T-11.011)',
    officialPortal: 'lobbyisme.qc.ca',
    confidentialityLevel: 'Haute Confidentialité Protégée'
  },
  {
    name: 'Autorité des marchés publics (AMP)',
    role: 'Gendarme de l\'octroi des contrats publics au Québec',
    scope: 'Processus d\'appels d\'offres, contrats de gré à gré, clauses discriminatoires, avenants abusifs et surfacturation par des fournisseurs de l\'État.',
    reportingProcess: 'Formulaire de plainte officiel ou de renseignement confidentiel sur des irrégularités contractuelles avant ou après l\'adjudication.',
    legalProtection: 'Protection renforcée pour les employés d\'entreprises ou de la fonction publique qui dénoncent des trucages ou manœuvres déloyales.',
    lawReference: 'Loi sur l\'Autorité des marchés publics (RLRQ, c. A-33.201)',
    officialPortal: 'amp.quebec',
    confidentialityLevel: 'Haute Confidentialité Protégée'
  },
  {
    name: 'Vérificateur général du Québec (VGQ)',
    role: 'Audit des finances publiques et de la performance des programmes',
    scope: 'Optimisation des ressources financières, gaspillage de fonds publics, projets informatiques gouvernementaux, hôpitaux, garderies et écoles.',
    reportingProcess: 'Transmission de signalements et de documents internes étayant des cas graves d\'inefficacité ou de mauvaise gouvernance financière.',
    legalProtection: 'Accès sans restriction légale à tous les documents gouvernementaux sous le sceau du secret d\'État.',
    lawReference: 'Loi sur le vérificateur général (RLRQ, c. V-5.01)',
    officialPortal: 'vgq.qc.ca',
    confidentialityLevel: 'Haute Confidentialité Protégée'
  }
];
