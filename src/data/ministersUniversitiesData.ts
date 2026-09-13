export interface UniversityDegree {
  institution: string;
  shortName: 'UdeM' | 'ULaval' | 'McGill' | 'HEC' | 'Sherbrooke' | 'UQAM' | 'Concordia' | 'UQTR' | 'UQAC' | 'Polytechnique' | 'Harvard' | 'LSE' | 'Sciences Po' | 'Oxford' | 'Autre';
  degree: string;
  discipline: 'Droit' | 'Économie & Finances' | 'Gestion & MBA' | 'Médecine & Santé' | 'Sciences Politiques' | 'Communications' | 'Génie & Sciences' | 'Éducation' | 'Autre';
  graduationYear?: number;
  location: string;
}

export interface QuebecMinisterProfile {
  id: string;
  fullName: string;
  party: 'CAQ' | 'PLQ' | 'PQ';
  yearsInOffice: string;
  premiersServedUnder: string[];
  keyPortfolios: string[];
  education: UniversityDegree[];
  highestDegree: string;
  almaMaterSummary: string;
  notableActionsOrScandals?: string;
  commissionsMentioned?: string[];
  currentRoleOrStatus: string;
}

export const QUEBEC_MINISTERS_SINCE_1995: QuebecMinisterProfile[] = [
  // --- PREMIERS MINISTRES (PREMIERS) ---
  {
    id: 'jacques-parizeau',
    fullName: 'Jacques Parizeau',
    party: 'PQ',
    yearsInOffice: '1994-1996 (Premier ministre & Finances antérieures)',
    premiersServedUnder: ['Lui-même (Premier ministre)', 'René Lévesque'],
    keyPortfolios: ['Premier ministre du Québec', 'Finances', 'Revenu'],
    education: [
      {
        institution: 'HEC Montréal',
        shortName: 'HEC',
        degree: 'Diplôme d\'études commerciales (B.A.A.)',
        discipline: 'Économie & Finances',
        graduationYear: 1950,
        location: 'Montréal, QC'
      },
      {
        institution: 'Institut d\'études politiques de Paris (Sciences Po)',
        shortName: 'Sciences Po',
        degree: 'Diplôme de Sciences Po',
        discipline: 'Sciences Politiques',
        graduationYear: 1952,
        location: 'Paris, France'
      },
      {
        institution: 'Faculté de droit de Paris',
        shortName: 'Autre',
        degree: 'Licence en droit',
        discipline: 'Droit',
        graduationYear: 1953,
        location: 'Paris, France'
      },
      {
        institution: 'London School of Economics (LSE)',
        shortName: 'LSE',
        degree: 'Ph.D. in Economics (Doctorat en économie)',
        discipline: 'Économie & Finances',
        graduationYear: 1955,
        location: 'Londres, Royaume-Uni'
      }
    ],
    highestDegree: 'Doctorat en économie (Ph.D. LSE)',
    almaMaterSummary: 'HEC Montréal, Sciences Po Paris, Faculté de droit de Paris, London School of Economics (LSE)',
    notableActionsOrScandals: 'Architecte de la Caisse de dépôt et placement du Québec (CDPQ), nationalisation de l\'électricité, référendum de 1995.',
    currentRoleOrStatus: 'Décédé en 2015 (Figure historique de la Révolution tranquille)'
  },
  {
    id: 'lucien-bouchard',
    fullName: 'Lucien Bouchard',
    party: 'PQ',
    yearsInOffice: '1996-2001 (Premier ministre)',
    premiersServedUnder: ['Lui-même (Premier ministre)'],
    keyPortfolios: ['Premier ministre du Québec', 'Affaires intergouvernementales'],
    education: [
      {
        institution: 'Université Laval',
        shortName: 'ULaval',
        degree: 'Licence en droit (LL.L.)',
        discipline: 'Droit',
        graduationYear: 1963,
        location: 'Québec, QC'
      },
      {
        institution: 'Université Laval',
        shortName: 'ULaval',
        degree: 'Baccalauréat ès arts (B.A.)',
        discipline: 'Sciences Politiques',
        graduationYear: 1959,
        location: 'Jonquière / Québec, QC'
      }
    ],
    highestDegree: 'Licence en droit (LL.L.)',
    almaMaterSummary: 'Université Laval (Droit et Arts)',
    notableActionsOrScandals: 'Politique du « Déficit Zéro », Sommets économiques de 1996, négociations de la Paix des Braves avec les Cris.',
    currentRoleOrStatus: 'Avocat-conseil chez Davies Ward Phillips & Vineberg (Grand négociateur et lobbyiste)'
  },
  {
    id: 'bernard-landry',
    fullName: 'Bernard Landry',
    party: 'PQ',
    yearsInOffice: '1994-2003 (Vice-premier ministre, Finances, puis Premier ministre)',
    premiersServedUnder: ['Lui-même (Premier ministre 2001-2003)', 'Lucien Bouchard', 'Jacques Parizeau'],
    keyPortfolios: ['Premier ministre', 'Vice-premier ministre', 'Finances', 'Économie et Commerce extérieur'],
    education: [
      {
        institution: 'Université de Montréal',
        shortName: 'UdeM',
        degree: 'Licence en droit (LL.L.)',
        discipline: 'Droit',
        graduationYear: 1964,
        location: 'Montréal, QC'
      },
      {
        institution: 'Institut d\'études politiques de Paris (Sciences Po)',
        shortName: 'Sciences Po',
        degree: 'Diplôme en économie et finances',
        discipline: 'Économie & Finances',
        graduationYear: 1967,
        location: 'Paris, France'
      }
    ],
    highestDegree: 'Diplôme Sciences Po Paris & Licence en droit UdeM',
    almaMaterSummary: 'Université de Montréal (Droit) & Sciences Po Paris (Économie)',
    notableActionsOrScandals: 'Création de la Cité du Multimédia, crédits d\'impôt aux jeux vidéo, signature historique de la Paix des Braves (2002).',
    currentRoleOrStatus: 'Décédé en 2018 (Professeur émérite ESG UQAM)'
  },
  {
    id: 'jean-charest',
    fullName: 'Jean Charest',
    party: 'PLQ',
    yearsInOffice: '2003-2012 (Premier ministre)',
    premiersServedUnder: ['Lui-même (Premier ministre)'],
    keyPortfolios: ['Premier ministre du Québec', 'Affaires intergouvernementales'],
    education: [
      {
        institution: 'Université de Sherbrooke',
        shortName: 'Sherbrooke',
        degree: 'Baccalauréat en droit (LL.B.)',
        discipline: 'Droit',
        graduationYear: 1980,
        location: 'Sherbrooke, QC'
      }
    ],
    highestDegree: 'Baccalauréat en droit (LL.B. Sherbrooke)',
    almaMaterSummary: 'Université de Sherbrooke (Faculté de droit)',
    notableActionsOrScandals: 'Réingénierie de l\'État, Plan Nord, Commission Charbonneau, Printemps érable (loi spéciale 78), enquête UPAC (Projet Mâchurer).',
    commissionsMentioned: ['Commission Charbonneau', 'Commission Bastarache', 'Enquête UPAC Mâchurer'],
    currentRoleOrStatus: 'Associé chez McCarthy Tétrault (Avocat d\'affaires et conseiller stratégique)'
  },
  {
    id: 'pauline-marois',
    fullName: 'Pauline Marois',
    party: 'PQ',
    yearsInOffice: '1994-2003 & 2012-2014 (Ministre sous Parizeau/Bouchard/Landry, puis Première ministre)',
    premiersServedUnder: ['Elle-même (Première ministre)', 'Bernard Landry', 'Lucien Bouchard', 'Jacques Parizeau'],
    keyPortfolios: ['Première ministre du Québec', 'Finances', 'Éducation', 'Santé', 'Famille & Enfance'],
    education: [
      {
        institution: 'Université Laval',
        shortName: 'ULaval',
        degree: 'Baccalauréat en service social',
        discipline: 'Sciences Politiques',
        graduationYear: 1971,
        location: 'Québec, QC'
      },
      {
        institution: 'HEC Montréal',
        shortName: 'HEC',
        degree: 'Maîtrise en administration des affaires (MBA)',
        discipline: 'Gestion & MBA',
        graduationYear: 1976,
        location: 'Montréal, QC'
      }
    ],
    highestDegree: 'MBA (HEC Montréal)',
    almaMaterSummary: 'Université Laval (Service social) & HEC Montréal (MBA)',
    notableActionsOrScandals: 'Création du réseau des CPE à 5 $, déconfessionnalisation des écoles, Charte des valeurs québécoises (projet de loi 60).',
    currentRoleOrStatus: 'Retirée de la vie politique active'
  },
  {
    id: 'philippe-couillard',
    fullName: 'Philippe Couillard',
    party: 'PLQ',
    yearsInOffice: '2003-2008 (Santé) & 2014-2018 (Premier ministre)',
    premiersServedUnder: ['Lui-même (Premier ministre 2014-2018)', 'Jean Charest'],
    keyPortfolios: ['Premier ministre du Québec', 'Santé et Services sociaux'],
    education: [
      {
        institution: 'Université de Montréal',
        shortName: 'UdeM',
        degree: 'Doctorat en médecine (M.D.)',
        discipline: 'Médecine & Santé',
        graduationYear: 1979,
        location: 'Montréal, QC'
      },
      {
        institution: 'Université de Montréal',
        shortName: 'UdeM',
        degree: 'Spécialisation en neurochirurgie (Certificat FRCSC)',
        discipline: 'Médecine & Santé',
        graduationYear: 1985,
        location: 'Montréal, QC'
      }
    ],
    highestDegree: 'Doctorat en médecine (M.D.) & Neurochirurgien certifié',
    almaMaterSummary: 'Université de Montréal (Médecine & Neurochirurgie)',
    notableActionsOrScandals: 'Projet des mégahôpitaux (CUSM / CHUM / Arthur Porter), austérité budgétaire 2014-2016, liens avec le Dr Arthur Porter.',
    commissionsMentioned: ['Commission Charbonneau (Affaire CUSM)', 'Enquêtes UPAC Porter'],
    currentRoleOrStatus: 'Conseiller stratégique senior, chercheur et conférencier'
  },
  {
    id: 'francois-legault',
    fullName: 'François Legault',
    party: 'CAQ',
    yearsInOffice: '1998-2003 (PQ: Éducation/Santé) & 2018-présent (CAQ: Premier ministre)',
    premiersServedUnder: ['Lui-même (Premier ministre 2018-présent)', 'Lucien Bouchard (PQ)', 'Bernard Landry (PQ)'],
    keyPortfolios: ['Premier ministre du Québec', 'Éducation (PQ)', 'Santé et Services sociaux (PQ)'],
    education: [
      {
        institution: 'HEC Montréal',
        shortName: 'HEC',
        degree: 'Baccalauréat en administration des affaires (B.A.A. Comptabilité)',
        discipline: 'Économie & Finances',
        graduationYear: 1978,
        location: 'Montréal, QC'
      },
      {
        institution: 'HEC Montréal',
        shortName: 'HEC',
        degree: 'Maîtrise en administration des affaires (MBA Finances)',
        discipline: 'Gestion & MBA',
        graduationYear: 1984,
        location: 'Montréal, QC'
      },
      {
        institution: 'Ordre des comptables agréés du Québec',
        shortName: 'Autre',
        degree: 'Titre de Fellow comptable professionnel agréé (FCPA)',
        discipline: 'Économie & Finances',
        graduationYear: 2000,
        location: 'Montréal, QC'
      }
    ],
    highestDegree: 'MBA Finances (HEC Montréal) & FCPA',
    almaMaterSummary: 'HEC Montréal (B.A.A. Comptabilité & MBA Finances)',
    notableActionsOrScandals: 'Cofondateur d\'Air Transat, Loi 21 sur la laïcité, Loi 96 sur la langue, gestion pandémique des décrets sanitaires, subvention aux Kings, Northvolt.',
    currentRoleOrStatus: 'Premier ministre en fonction du Québec'
  },

  // --- MINISTRES CLÉS (GOUVERNEMENT CAQ : 2018-PRÉSENT) ---
  {
    id: 'christian-dube',
    fullName: 'Christian Dubé',
    party: 'CAQ',
    yearsInOffice: '2018-présent',
    premiersServedUnder: ['François Legault'],
    keyPortfolios: ['Santé et Services sociaux', 'Président du Conseil du trésor', 'Administration gouvernementale'],
    education: [
      {
        institution: 'Université Laval',
        shortName: 'ULaval',
        degree: 'Baccalauréat en administration des affaires (B.A.A. Comptabilité)',
        discipline: 'Économie & Finances',
        graduationYear: 1979,
        location: 'Québec, QC'
      },
      {
        institution: 'Ordre des comptables professionnels agréés',
        shortName: 'Autre',
        degree: 'Fellow CPA (FCPA)',
        discipline: 'Économie & Finances',
        graduationYear: 2004,
        location: 'Montréal, QC'
      }
    ],
    highestDegree: 'B.A.A. Comptabilité (Laval) & Titre de Fellow CPA',
    almaMaterSummary: 'Université Laval (Faculté des sciences de l\'administration)',
    notableActionsOrScandals: 'Création de l\'agence Santé Québec (Top Gun), passeport vaccinal COVID-19, gestion de la réforme du réseau de la santé.',
    currentRoleOrStatus: 'Ministre de la Santé du Québec'
  },
  {
    id: 'genevieve-guilbault',
    fullName: 'Geneviève Guilbault',
    party: 'CAQ',
    yearsInOffice: '2018-présent',
    premiersServedUnder: ['François Legault'],
    keyPortfolios: ['Vice-première ministre', 'Transports et Mobilité durable', 'Sécurité publique'],
    education: [
      {
        institution: 'Université Laval',
        shortName: 'ULaval',
        degree: 'Baccalauréat en communication publique',
        discipline: 'Communications',
        graduationYear: 2006,
        location: 'Québec, QC'
      },
      {
        institution: 'Université Laval',
        shortName: 'ULaval',
        degree: 'Maîtrise en relations publiques (M.A.)',
        discipline: 'Communications',
        graduationYear: 2008,
        location: 'Québec, QC'
      }
    ],
    highestDegree: 'Maîtrise en relations publiques (M.A. Laval)',
    almaMaterSummary: 'Université Laval (Communication & Relations publiques)',
    notableActionsOrScandals: 'Ancienne porte-parole du Bureau du coroner du Québec, dossier du Troisième Lien de Québec, dossier SAAQclic et transport collectif.',
    currentRoleOrStatus: 'Vice-première ministre et Ministre des Transports'
  },
  {
    id: 'simon-jolin-barrette',
    fullName: 'Simon Jolin-Barrette',
    party: 'CAQ',
    yearsInOffice: '2018-présent',
    premiersServedUnder: ['François Legault'],
    keyPortfolios: ['Justice', 'Procureur général', 'Immigration', 'Langue française', 'Leader parlementaire du gouvernement'],
    education: [
      {
        institution: 'Université de Sherbrooke',
        shortName: 'Sherbrooke',
        degree: 'Baccalauréat en droit (LL.B.)',
        discipline: 'Droit',
        graduationYear: 2009,
        location: 'Sherbrooke, QC'
      },
      {
        institution: 'Université de Sherbrooke',
        shortName: 'Sherbrooke',
        degree: 'Maîtrise en droit LL.M. (Droit international public)',
        discipline: 'Droit',
        graduationYear: 2011,
        location: 'Sherbrooke, QC'
      },
      {
        institution: 'Université de Montréal',
        shortName: 'UdeM',
        degree: 'Études de doctorat en droit constitutionnel (scolarité complétée)',
        discipline: 'Droit',
        graduationYear: 2014,
        location: 'Montréal, QC'
      }
    ],
    highestDegree: 'Maîtrise en droit (LL.M. Sherbrooke) & Scolarité de doctorat (UdeM)',
    almaMaterSummary: 'Université de Sherbrooke (LL.B. & LL.M.) & Université de Montréal',
    notableActionsOrScandals: 'Auteur de la Loi 21 (Laïcité de l\'État avec clause dérogatoire), Loi 96 (Réforme de la Charte de la langue française), réforme du droit de la famille.',
    currentRoleOrStatus: 'Ministre de la Justice et Procureur général du Québec'
  },
  {
    id: 'eric-girard',
    fullName: 'Eric Girard',
    party: 'CAQ',
    yearsInOffice: '2018-présent',
    premiersServedUnder: ['François Legault'],
    keyPortfolios: ['Finances', 'Relations avec les institutions financières', 'Ministre responsable des Relations avec les Québécois d\'expression anglaise'],
    education: [
      {
        institution: 'Université McGill',
        shortName: 'McGill',
        degree: 'Baccalauréat en économie (B.A. Economics)',
        discipline: 'Économie & Finances',
        graduationYear: 1989,
        location: 'Montréal, QC'
      },
      {
        institution: 'Université du Québec à Montréal (UQAM)',
        shortName: 'UQAM',
        degree: 'Maîtrise en sciences économiques (M.Sc. Économie)',
        discipline: 'Économie & Finances',
        graduationYear: 1993,
        location: 'Montréal, QC'
      }
    ],
    highestDegree: 'Maîtrise en sciences économiques (UQAM)',
    almaMaterSummary: 'Université McGill (B.A.) & UQAM (M.Sc. Économie)',
    notableActionsOrScandals: 'Ancien trésorier en chef de la Banque Nationale du Canada, octroi de la subvention de 5 à 7 M$ aux Kings de Los Angeles, déficit record de 11 milliards $ en 2024.',
    currentRoleOrStatus: 'Ministre des Finances du Québec'
  },
  {
    id: 'sonia-lebel',
    fullName: 'Sonia LeBel',
    party: 'CAQ',
    yearsInOffice: '2018-présent',
    premiersServedUnder: ['François Legault'],
    keyPortfolios: ['Présidente du Conseil du trésor', 'Justice (2018-2020)', 'Relations canadiennes'],
    education: [
      {
        institution: 'Université de Montréal',
        shortName: 'UdeM',
        degree: 'Baccalauréat en droit (LL.B.)',
        discipline: 'Droit',
        graduationYear: 1990,
        location: 'Montréal, QC'
      }
    ],
    highestDegree: 'Baccalauréat en droit (LL.B. UdeM)',
    almaMaterSummary: 'Université de Montréal (Faculté de droit)',
    notableActionsOrScandals: 'Procureure en chef de la Commission Charbonneau (interrogatoires célèbres des maires et entrepreneurs), négociations des conventions collectives du secteur public.',
    commissionsMentioned: ['Commission Charbonneau (Procureure en chef)'],
    currentRoleOrStatus: 'Présidente du Conseil du trésor du Québec'
  },
  {
    id: 'pierre-fitzgibbon',
    fullName: 'Pierre Fitzgibbon',
    party: 'CAQ',
    yearsInOffice: '2018-2024 (Démission)',
    premiersServedUnder: ['François Legault'],
    keyPortfolios: ['Économie, Innovation et Énergie', 'Développement économique régional', 'Métropole'],
    education: [
      {
        institution: 'HEC Montréal',
        shortName: 'HEC',
        degree: 'Baccalauréat en administration des affaires (B.A.A. Finances)',
        discipline: 'Économie & Finances',
        graduationYear: 1978,
        location: 'Montréal, QC'
      },
      {
        institution: 'Harvard Business School',
        shortName: 'Harvard',
        degree: 'Program for Management Development (PMD)',
        discipline: 'Gestion & MBA',
        graduationYear: 1990,
        location: 'Boston, Massachusetts, USA'
      },
      {
        institution: 'Ordre des CPA',
        shortName: 'Autre',
        degree: 'Titre de CPA, CA',
        discipline: 'Économie & Finances',
        graduationYear: 1980,
        location: 'Montréal, QC'
      }
    ],
    highestDegree: 'B.A.A. HEC & Exécutif Harvard Business School',
    almaMaterSummary: 'HEC Montréal & Harvard Business School',
    notableActionsOrScandals: 'Filière batterie Northvolt (2,9 milliards $ de fonds publics engagés sans BAPE), six rapports de blâme du Commissaire à l\'éthique de l\'Assemblée nationale pour conflits d\'intérêts et participations dans des entreprises privées.',
    commissionsMentioned: ['Commissaire à l\'éthique de l\'Assemblée nationale (6 rapports)'],
    currentRoleOrStatus: 'A démissionné du Conseil des ministres en septembre 2024'
  },
  {
    id: 'bernard-drainville',
    fullName: 'Bernard Drainville',
    party: 'CAQ',
    yearsInOffice: '2012-2014 (PQ: Institutions démocratiques) & 2022-présent (CAQ: Éducation)',
    premiersServedUnder: ['François Legault (CAQ)', 'Pauline Marois (PQ)'],
    keyPortfolios: ['Éducation (CAQ)', 'Développement démocratique et Charte de la laïcité (PQ)'],
    education: [
      {
        institution: 'Université d\'Ottawa',
        shortName: 'Autre',
        degree: 'Baccalauréat en science politique (B.A.)',
        discipline: 'Sciences Politiques',
        graduationYear: 1986,
        location: 'Ottawa, ON'
      },
      {
        institution: 'London School of Economics (LSE)',
        shortName: 'LSE',
        degree: 'Master of Science in International Relations (M.Sc.)',
        discipline: 'Sciences Politiques',
        graduationYear: 1989,
        location: 'Londres, Royaume-Uni'
      }
    ],
    highestDegree: 'M.Sc. Relations internationales (London School of Economics)',
    almaMaterSummary: 'Université d\'Ottawa & London School of Economics (LSE)',
    notableActionsOrScandals: 'Auteur de la défunte Charte des valeurs québécoises en 2013 (PQ), animateur au 98,5 FM, dossier de l\'interdiction des cellulaires en classe et grève des enseignants (CAQ).',
    currentRoleOrStatus: 'Ministre de l\'Éducation du Québec'
  },
  {
    id: 'eric-caire',
    fullName: 'Éric Caire',
    party: 'CAQ',
    yearsInOffice: '2018-présent',
    premiersServedUnder: ['François Legault'],
    keyPortfolios: ['Cybersécurité et Numérique', 'Accès à l\'information et Réforme des institutions démocratiques'],
    education: [
      {
        institution: 'Collège CDI / Collège de Rosemont',
        shortName: 'Autre',
        degree: 'AEC en programmation et analyse informatique',
        discipline: 'Génie & Sciences',
        graduationYear: 1993,
        location: 'Montréal / Québec, QC'
      }
    ],
    highestDegree: 'Attestation d\'études collégiales en informatique (AEC)',
    almaMaterSummary: 'Collège CDI & Collège de Rosemont (Formation technique)',
    notableActionsOrScandals: 'Scandale du virage numérique SAAQclic (dépassements de 500M$ et chaos dans les succursales), prêt personnel controversé de 55 000 $ contracté auprès du maire de L\'Ancienne-Lorette.',
    commissionsMentioned: ['Commissaire à l\'éthique de l\'Assemblée nationale', 'Vérificateur général du Québec (VGQ - Audit SAAQclic)'],
    currentRoleOrStatus: 'Ministre de la Cybersécurité et du Numérique'
  },
  {
    id: 'lionel-carmant',
    fullName: 'Lionel Carmant',
    party: 'CAQ',
    yearsInOffice: '2018-présent',
    premiersServedUnder: ['François Legault'],
    keyPortfolios: ['Services sociaux', 'Protection de la jeunesse (DPJ)', 'Santé mentale'],
    education: [
      {
        institution: 'Université de Montréal',
        shortName: 'UdeM',
        degree: 'Doctorat en médecine (M.D.)',
        discipline: 'Médecine & Santé',
        graduationYear: 1988,
        location: 'Montréal, QC'
      },
      {
        institution: 'Université de Montréal',
        shortName: 'UdeM',
        degree: 'Spécialisation en pédiatrie et neurologie',
        discipline: 'Médecine & Santé',
        graduationYear: 1993,
        location: 'Montréal, QC'
      },
      {
        institution: 'Harvard Medical School',
        shortName: 'Harvard',
        degree: 'Postdoctoral Research Fellowship (Épilepsie pédiatrique)',
        discipline: 'Médecine & Santé',
        graduationYear: 1996,
        location: 'Boston, Massachusetts, USA'
      }
    ],
    highestDegree: 'Doctorat en médecine (M.D. UdeM) & Postdoctorat Harvard',
    almaMaterSummary: 'Université de Montréal (Médecine) & Harvard Medical School',
    notableActionsOrScandals: 'Responsable politique de la DPJ lors de la tragédie de la fillette de Granby en 2019, mise en oeuvre contestée des recommandations de la Commission Laurent.',
    commissionsMentioned: ['Commission Laurent', 'Commission spéciale sur les droits des enfants'],
    currentRoleOrStatus: 'Ministre responsable des Services sociaux'
  },
  {
    id: 'jean-francois-roberge',
    fullName: 'Jean-François Roberge',
    party: 'CAQ',
    yearsInOffice: '2018-présent',
    premiersServedUnder: ['François Legault'],
    keyPortfolios: ['Langue française', 'Relations canadiennes', 'Éducation (2018-2022)'],
    education: [
      {
        institution: 'Université du Québec à Montréal (UQAM)',
        shortName: 'UQAM',
        degree: 'Baccalauréat en éducation préscolaire et enseignement primaire (B.Éd.)',
        discipline: 'Éducation',
        graduationYear: 1996,
        location: 'Montréal, QC'
      }
    ],
    highestDegree: 'Baccalauréat en enseignement (B.Éd. UQAM)',
    almaMaterSummary: 'UQAM (Faculté des sciences de l\'éducation)',
    notableActionsOrScandals: 'Création des maternelles 4 ans, dossier des tests de qualité de l\'air dans les écoles pendant la COVID-19, création des Espaces bleus.',
    currentRoleOrStatus: 'Ministre de la Langue française'
  },

  // --- MINISTRES CLÉS (GOUVERNEMENT LIBÉRAL DU QUÉBEC : 2003-2018) ---
  {
    id: 'gaetan-barrette',
    fullName: 'Gaétan Barrette',
    party: 'PLQ',
    yearsInOffice: '2014-2018',
    premiersServedUnder: ['Philippe Couillard'],
    keyPortfolios: ['Santé et Services sociaux'],
    education: [
      {
        institution: 'Université de Montréal',
        shortName: 'UdeM',
        degree: 'Doctorat en médecine (M.D.)',
        discipline: 'Médecine & Santé',
        graduationYear: 1985,
        location: 'Montréal, QC'
      },
      {
        institution: 'Université de Montréal',
        shortName: 'UdeM',
        degree: 'Spécialité en radiologie diagnostique',
        discipline: 'Médecine & Santé',
        graduationYear: 1989,
        location: 'Montréal, QC'
      },
      {
        institution: 'University of California, San Diego (UCSD)',
        shortName: 'Autre',
        degree: 'Surspécialisation en imagerie par résonance magnétique (IRM)',
        discipline: 'Médecine & Santé',
        graduationYear: 1991,
        location: 'San Diego, Californie, USA'
      }
    ],
    highestDegree: 'Doctorat en médecine (M.D.) & Radiologue certifié UCSD',
    almaMaterSummary: 'Université de Montréal & University of California San Diego (UCSD)',
    notableActionsOrScandals: 'Auteur de la « Réforme Barrette » (Loi 10) : abolition des régies régionales de la santé et création des mégastructures CISSS/CIUSSS, centralisation et surrémunération des médecins spécialistes.',
    currentRoleOrStatus: 'Ancien ministre, analyste politique aux médias'
  },
  {
    id: 'carlos-leitao',
    fullName: 'Carlos J. Leitão',
    party: 'PLQ',
    yearsInOffice: '2014-2018',
    premiersServedUnder: ['Philippe Couillard'],
    keyPortfolios: ['Finances du Québec', 'Administration gouvernementale'],
    education: [
      {
        institution: 'Université McGill',
        shortName: 'McGill',
        degree: 'Baccalauréat en sciences économiques (B.A. Honours Economics)',
        discipline: 'Économie & Finances',
        graduationYear: 1979,
        location: 'Montréal, QC'
      }
    ],
    highestDegree: 'B.A. Honours Economics (McGill University)',
    almaMaterSummary: 'Université McGill (Département d\'économie)',
    notableActionsOrScandals: 'Ancien économiste en chef de Valeurs mobilières Banque Laurentienne, pilotage des budgets d\'austérité et compression des dépenses publiques dans les écoles et hôpitaux.',
    currentRoleOrStatus: 'Retiré de la politique active'
  },
  {
    id: 'monique-jerome-forget',
    fullName: 'Monique Jérôme-Forget',
    party: 'PLQ',
    yearsInOffice: '2003-2009',
    premiersServedUnder: ['Jean Charest'],
    keyPortfolios: ['Présidente du Conseil du trésor', 'Finances (2007-2009)', 'Services gouvernementaux'],
    education: [
      {
        institution: 'Université de Montréal',
        shortName: 'UdeM',
        degree: 'Baccalauréat en sciences (B.Sc. Psychologie)',
        discipline: 'Sciences Politiques',
        graduationYear: 1972,
        location: 'Montréal, QC'
      },
      {
        institution: 'Université McGill',
        shortName: 'McGill',
        degree: 'Doctorat en psychologie cognitive (Ph.D.)',
        discipline: 'Sciences Politiques',
        graduationYear: 1977,
        location: 'Montréal, QC'
      }
    ],
    highestDegree: 'Doctorat en psychologie cognitive (Ph.D. McGill)',
    almaMaterSummary: 'Université de Montréal & Université McGill',
    notableActionsOrScandals: 'Instigatrice majeure des Partenariats Public-Privé (PPP) au Québec : Autoroute 25, Autoroute 30, Mégahôpital CUSM et CHUM.',
    commissionsMentioned: ['Commission Charbonneau (Dossiers PPP)'],
    currentRoleOrStatus: 'Administratrice de sociétés et auteure'
  },
  {
    id: 'raymond-bachand',
    fullName: 'Raymond Bachand',
    party: 'PLQ',
    yearsInOffice: '2005-2012',
    premiersServedUnder: ['Jean Charest'],
    keyPortfolios: ['Finances', 'Développement économique, Innovation et Exportation', 'Tourisme'],
    education: [
      {
        institution: 'Université de Montréal',
        shortName: 'UdeM',
        degree: 'Licence en droit (LL.L.)',
        discipline: 'Droit',
        graduationYear: 1969,
        location: 'Montréal, QC'
      },
      {
        institution: 'HEC Montréal',
        shortName: 'HEC',
        degree: 'Maîtrise en administration des affaires (MBA)',
        discipline: 'Gestion & MBA',
        graduationYear: 1972,
        location: 'Montréal, QC'
      },
      {
        institution: 'Harvard Business School',
        shortName: 'Harvard',
        degree: 'Doctorat en administration des affaires (D.B.A.)',
        discipline: 'Gestion & MBA',
        graduationYear: 1981,
        location: 'Boston, Massachusetts, USA'
      }
    ],
    highestDegree: 'Doctorat en administration (D.B.A. Harvard Business School)',
    almaMaterSummary: 'Université de Montréal (Droit), HEC Montréal (MBA) & Harvard (D.B.A.)',
    notableActionsOrScandals: 'Ancien chef de cabinet de René Lévesque devenu ministre libéral, architecte de la hausse des droits de scolarité universitaire de 2012 déclenchant la grève étudiante historique.',
    currentRoleOrStatus: 'Conseiller stratégique chez Norton Rose Fulbright'
  },
  {
    id: 'yves-bolduc',
    fullName: 'Yves Bolduc',
    party: 'PLQ',
    yearsInOffice: '2008-2012 & 2014-2015',
    premiersServedUnder: ['Jean Charest', 'Philippe Couillard'],
    keyPortfolios: ['Santé et Services sociaux', 'Éducation, Loisir et Sport'],
    education: [
      {
        institution: 'Université Laval',
        shortName: 'ULaval',
        degree: 'Doctorat en médecine (M.D.)',
        discipline: 'Médecine & Santé',
        graduationYear: 1981,
        location: 'Québec, QC'
      },
      {
        institution: 'Université de Sherbrooke',
        shortName: 'Sherbrooke',
        degree: 'Maîtrise en gestion et bioéthique',
        discipline: 'Gestion & MBA',
        graduationYear: 2001,
        location: 'Sherbrooke, QC'
      }
    ],
    highestDegree: 'Doctorat en médecine (M.D. Laval) & Maîtrise en gestion',
    almaMaterSummary: 'Université Laval (Médecine) & Université de Sherbrooke',
    notableActionsOrScandals: 'Controverse sur les primes de prise en charge des patients (215 000 $ empochés avant de redevenir ministre), déclaration polémique sur les livres dans les bibliothèques d\'écoles.',
    currentRoleOrStatus: 'Médecin de famille et coroner'
  },
  {
    id: 'julie-boulet',
    fullName: 'Julie Boulet',
    party: 'PLQ',
    yearsInOffice: '2003-2012 & 2016-2018',
    premiersServedUnder: ['Jean Charest', 'Philippe Couillard'],
    keyPortfolios: ['Transports', 'Emploi et Solidarité sociale', 'Tourisme'],
    education: [
      {
        institution: 'Université Laval',
        shortName: 'ULaval',
        degree: 'Baccalauréat en pharmacie (B.Pharm.)',
        discipline: 'Médecine & Santé',
        graduationYear: 1982,
        location: 'Québec, QC'
      }
    ],
    highestDegree: 'Baccalauréat en pharmacie (Université Laval)',
    almaMaterSummary: 'Université Laval (Faculté de pharmacie)',
    notableActionsOrScandals: 'Ministre des Transports au cœur des révélations de la Commission Charbonneau sur le financement politique libéral et l\'octroi des contrats du MTQ.',
    commissionsMentioned: ['Commission Charbonneau (Témoignage public sous serment)'],
    currentRoleOrStatus: 'Retirée de la vie politique'
  },
  {
    id: 'tony-tomassi',
    fullName: 'Tony Tomassi',
    party: 'PLQ',
    yearsInOffice: '2008-2010 (Congédié par Jean Charest)',
    premiersServedUnder: ['Jean Charest'],
    keyPortfolios: ['Famille et Aînés'],
    education: [
      {
        institution: 'Université de Montréal',
        shortName: 'UdeM',
        degree: 'Études universitaires en science politique (non complété)',
        discipline: 'Sciences Politiques',
        graduationYear: 1993,
        location: 'Montréal, QC'
      }
    ],
    highestDegree: 'Études collégiales et universitaires en science politique',
    almaMaterSummary: 'Université de Montréal (Science politique)',
    notableActionsOrScandals: 'Scandale de la carte de crédit d\'essence fournie par la firme privée BCIA (Luigi Coretti) alors qu\'il accordait des places en garderies subventionnées. Condamné par la justice criminelle pour abus de confiance.',
    commissionsMentioned: ['Cour du Québec (Condamnation pénale pour abus de confiance)'],
    currentRoleOrStatus: 'Condamné judiciairement en 2014 (peine de prison avec sursis)'
  },
  {
    id: 'line-beauchamp',
    fullName: 'Line Beauchamp',
    party: 'PLQ',
    yearsInOffice: '2003-2012 (Démission en plein Printemps érable)',
    premiersServedUnder: ['Jean Charest'],
    keyPortfolios: ['Vice-première ministre', 'Éducation, Loisir et Sport', 'Développement durable et Environnement', 'Culture et Communications'],
    education: [
      {
        institution: 'Université de Montréal',
        shortName: 'UdeM',
        degree: 'Baccalauréat en psychologie (B.Sc.)',
        discipline: 'Sciences Politiques',
        graduationYear: 1984,
        location: 'Montréal, QC'
      }
    ],
    highestDegree: 'Baccalauréat en psychologie (UdeM)',
    almaMaterSummary: 'Université de Montréal (Psychologie)',
    notableActionsOrScandals: 'Ministre de l\'Éducation lors de la crise étudiante de 2012, liens de proximité étalés à la Commission Charbonneau avec l\'organisateur électoral libéral Marc Bibeau.',
    commissionsMentioned: ['Commission Charbonneau'],
    currentRoleOrStatus: 'Déléguée générale du Québec à Paris (2014-2019), consultante'
  },
  {
    id: 'jean-marc-fournier',
    fullName: 'Jean-Marc Fournier',
    party: 'PLQ',
    yearsInOffice: '2003-2007 & 2010-2018',
    premiersServedUnder: ['Jean Charest', 'Philippe Couillard'],
    keyPortfolios: ['Justice et Procureur général', 'Éducation', 'Affaires intergouvernementales canadiennes', 'Leader parlementaire'],
    education: [
      {
        institution: 'Université de Montréal',
        shortName: 'UdeM',
        degree: 'Licence en droit (LL.L.)',
        discipline: 'Droit',
        graduationYear: 1981,
        location: 'Montréal, QC'
      },
      {
        institution: 'Université de Montréal',
        shortName: 'UdeM',
        degree: 'Maîtrise en droit public (LL.M.)',
        discipline: 'Droit',
        graduationYear: 1983,
        location: 'Montréal, QC'
      }
    ],
    highestDegree: 'Maîtrise en droit public (LL.M. UdeM)',
    almaMaterSummary: 'Université de Montréal (Faculté de droit)',
    notableActionsOrScandals: 'Pilier stratégique du PLQ, ministre de la Justice lors des nominations de juges scrutées par la Commission Bastarache.',
    commissionsMentioned: ['Commission Bastarache (Processus de nomination des juges)'],
    currentRoleOrStatus: 'Président de l\'Institut de développement urbain du Québec (IDU)'
  },
  {
    id: 'martin-coiteux',
    fullName: 'Martin Coiteux',
    party: 'PLQ',
    yearsInOffice: '2014-2018',
    premiersServedUnder: ['Philippe Couillard'],
    keyPortfolios: ['Président du Conseil du trésor', 'Sécurité publique', 'Affaires municipales et Métropole'],
    education: [
      {
        institution: 'Université de Sherbrooke',
        shortName: 'Sherbrooke',
        degree: 'Baccalauréat en sciences économiques (B.A.)',
        discipline: 'Économie & Finances',
        graduationYear: 1985,
        location: 'Sherbrooke, QC'
      },
      {
        institution: 'Queen\'s University',
        shortName: 'Autre',
        degree: 'Maîtrise en économie (M.A.)',
        discipline: 'Économie & Finances',
        graduationYear: 1986,
        location: 'Kingston, ON'
      },
      {
        institution: 'Institut universitaire européen (Florence)',
        shortName: 'Autre',
        degree: 'Doctorat en économie (Ph.D.)',
        discipline: 'Économie & Finances',
        graduationYear: 1991,
        location: 'Florence, Italie'
      }
    ],
    highestDegree: 'Doctorat en économie (Ph.D. Institut universitaire européen)',
    almaMaterSummary: 'Université de Sherbrooke, Queen\'s University & IUE Florence',
    notableActionsOrScandals: 'Ancien professeur à HEC Montréal et représentant de la Banque du Canada, pilote de la loi sur la réforme des régimes de retraite municipaux (Loi 15).',
    currentRoleOrStatus: 'Chef économiste de la Caisse de dépôt et placement du Québec (CDPQ)'
  },

  // --- MINISTRES CLÉS (GOUVERNEMENT DU PARTI QUÉBÉCOIS : 1994-2003 & 2012-2014) ---
  {
    id: 'nicolas-marceau',
    fullName: 'Nicolas Marceau',
    party: 'PQ',
    yearsInOffice: '2012-2014',
    premiersServedUnder: ['Pauline Marois'],
    keyPortfolios: ['Finances et Économie'],
    education: [
      {
        institution: 'Université Laval',
        shortName: 'ULaval',
        degree: 'Baccalauréat en économie (B.Sc.)',
        discipline: 'Économie & Finances',
        graduationYear: 1987,
        location: 'Québec, QC'
      },
      {
        institution: 'Université Laval',
        shortName: 'ULaval',
        degree: 'Maîtrise en économie (M.Sc.)',
        discipline: 'Économie & Finances',
        graduationYear: 1989,
        location: 'Québec, QC'
      },
      {
        institution: 'University of Rochester',
        shortName: 'Autre',
        degree: 'Doctorat en économie (Ph.D.)',
        discipline: 'Économie & Finances',
        graduationYear: 1994,
        location: 'Rochester, New York, USA'
      }
    ],
    highestDegree: 'Doctorat en économie (Ph.D. University of Rochester)',
    almaMaterSummary: 'Université Laval (B.Sc., M.Sc.) & University of Rochester (Ph.D.)',
    notableActionsOrScandals: 'Ancien professeur d\'économie à l\'UQAM, auteur du budget Marceau instaurant la taxe santé progressive et la fermeture de la centrale nucléaire Gentilly-2.',
    currentRoleOrStatus: 'Professeur au Département des sciences économiques de l\'ESG UQAM'
  },
  {
    id: 'serge-menard',
    fullName: 'Serge Ménard',
    party: 'PQ',
    yearsInOffice: '1994-2003',
    premiersServedUnder: ['Jacques Parizeau', 'Lucien Bouchard', 'Bernard Landry'],
    keyPortfolios: ['Sécurité publique', 'Justice et Procureur général', 'Transports'],
    education: [
      {
        institution: 'Université de Montréal',
        shortName: 'UdeM',
        degree: 'Licence en droit (LL.L.)',
        discipline: 'Droit',
        graduationYear: 1965,
        location: 'Montréal, QC'
      }
    ],
    highestDegree: 'Licence en droit (LL.L. UdeM) & Bâtonnier du Québec',
    almaMaterSummary: 'Université de Montréal (Droit)',
    notableActionsOrScandals: 'Grand criminaliste, ancien Bâtonnier, gestion de la guerre des motards (Hells Angels vs Rock Machine) et création de l\'escouade Carcajou, Loi anti-gang fédérale.',
    commissionsMentioned: ['Commission d\'enquête sur le viaduc de la Concorde (Président)'],
    currentRoleOrStatus: 'Retiré de la politique, juriste consultant'
  },
  {
    id: 'louise-beaudoin',
    fullName: 'Louise Beaudoin',
    party: 'PQ',
    yearsInOffice: '1994-2003',
    premiersServedUnder: ['Jacques Parizeau', 'Lucien Bouchard', 'Bernard Landry'],
    keyPortfolios: ['Relations internationales', 'Culture et Communications', 'Charte de la langue française'],
    education: [
      {
        institution: 'Université Laval',
        shortName: 'ULaval',
        degree: 'Licence en histoire (B.A.)',
        discipline: 'Sciences Politiques',
        graduationYear: 1967,
        location: 'Québec, QC'
      },
      {
        institution: 'Université Paris-Sorbonne (Paris IV)',
        shortName: 'Autre',
        degree: 'Diplôme d\'études supérieures en histoire contemporaine',
        discipline: 'Sciences Politiques',
        graduationYear: 1969,
        location: 'Paris, France'
      },
      {
        institution: 'Université Laval',
        shortName: 'ULaval',
        degree: 'Maîtrise en histoire',
        discipline: 'Sciences Politiques',
        graduationYear: 1971,
        location: 'Québec, QC'
      }
    ],
    highestDegree: 'Maîtrise en histoire (Laval) & D.E.S. Sorbonne Paris',
    almaMaterSummary: 'Université Laval & Université Paris-Sorbonne',
    notableActionsOrScandals: 'Défense internationale de l\'exception culturelle à l\'UNESCO, politique du français sur Internet et application de la Loi 101.',
    currentRoleOrStatus: 'Officière de la Légion d\'honneur, conférencière'
  },
  {
    id: 'jean-pierre-charbonneau',
    fullName: 'Jean-Pierre Charbonneau',
    party: 'PQ',
    yearsInOffice: '1996-2003 (Président de l\'Assemblée nationale & Ministre)',
    premiersServedUnder: ['Lucien Bouchard', 'Bernard Landry'],
    keyPortfolios: ['Président de l\'Assemblée nationale (1996-2002)', 'Ministre délégué à la Réforme des institutions démocratiques et aux Citoyens'],
    education: [
      {
        institution: 'Université de Montréal',
        shortName: 'UdeM',
        degree: 'Baccalauréat en criminologie (B.Sc.)',
        discipline: 'Sciences Politiques',
        graduationYear: 1974,
        location: 'Montréal, QC'
      },
      {
        institution: 'Université de Montréal',
        shortName: 'UdeM',
        degree: 'Maîtrise en criminologie (M.Sc.)',
        discipline: 'Sciences Politiques',
        graduationYear: 1976,
        location: 'Montréal, QC'
      }
    ],
    highestDegree: 'Maîtrise en criminologie (M.Sc. UdeM)',
    almaMaterSummary: 'Université de Montréal (École de criminologie)',
    notableActionsOrScandals: 'Journaliste d\'investigation ayant survécu à un attentat par balle de la mafia au Devoir en 1973, pionnier de la lutte anticorruption et de la réforme du mode de scrutin.',
    commissionsMentioned: ['Commission Cliche (1974-1975)'],
    currentRoleOrStatus: 'Analyste politique chevronné et militant pour la démocratie'
  }
];

export interface UniversityStats {
  shortName: string;
  fullName: string;
  count: number;
  percentage: number;
  famousAlumni: string[];
}

export function calculateUniversityBreakdown(): UniversityStats[] {
  const totalMinisters = QUEBEC_MINISTERS_SINCE_1995.length;
  const counts: Record<string, { fullName: string; count: number; alumni: string[] }> = {
    UdeM: { fullName: 'Université de Montréal', count: 0, alumni: [] },
    ULaval: { fullName: 'Université Laval', count: 0, alumni: [] },
    HEC: { fullName: 'HEC Montréal', count: 0, alumni: [] },
    Sherbrooke: { fullName: 'Université de Sherbrooke', count: 0, alumni: [] },
    McGill: { fullName: 'Université McGill', count: 0, alumni: [] },
    UQAM: { fullName: 'Université du Québec à Montréal (UQAM)', count: 0, alumni: [] },
    Harvard: { fullName: 'Harvard University (USA)', count: 0, alumni: [] },
    LSE: { fullName: 'London School of Economics (UK)', count: 0, alumni: [] },
    'Sciences Po': { fullName: 'Sciences Po Paris (France)', count: 0, alumni: [] },
    Autre: { fullName: 'Autres universités canadiennes & internationales', count: 0, alumni: [] }
  };

  for (const m of QUEBEC_MINISTERS_SINCE_1995) {
    const recordedSchools = new Set<string>();
    for (const edu of m.education) {
      const key = edu.shortName in counts ? edu.shortName : 'Autre';
      if (!recordedSchools.has(key)) {
        recordedSchools.add(key);
        counts[key].count++;
        counts[key].alumni.push(m.fullName);
      }
    }
  }

  return Object.entries(counts)
    .map(([key, data]) => ({
      shortName: key,
      fullName: data.fullName,
      count: data.count,
      percentage: Math.round((data.count / totalMinisters) * 100),
      famousAlumni: data.alumni
    }))
    .sort((a, b) => b.count - a.count);
}

export function calculateDisciplineBreakdown(): { discipline: string; count: number; percentage: number }[] {
  const totalMinisters = QUEBEC_MINISTERS_SINCE_1995.length;
  const disciplineCounts: Record<string, number> = {};

  for (const m of QUEBEC_MINISTERS_SINCE_1995) {
    const disciplines = new Set<string>();
    for (const edu of m.education) {
      disciplines.add(edu.discipline);
    }
    for (const disc of disciplines) {
      disciplineCounts[disc] = (disciplineCounts[disc] || 0) + 1;
    }
  }

  return Object.entries(disciplineCounts)
    .map(([discipline, count]) => ({
      discipline,
      count,
      percentage: Math.round((count / totalMinisters) * 100)
    }))
    .sort((a, b) => b.count - a.count);
}
