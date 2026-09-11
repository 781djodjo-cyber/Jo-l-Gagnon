export interface CommissionEnquete {
  id: string;
  name: string;
  officialTitle: string;
  presidentOrJudges: string;
  years: string;
  governingPartyTargeted: string;
  domain: 'Corruption & Collusion' | 'Magistrature & Pouvoir Judiciaire' | 'Espionnage & Police d\'État' | 'Financement Politique & Commandites' | 'Syndicats & Crime Organisé' | 'Protection de la Jeunesse & Santé' | 'Infrastructures & Négligence Publique';
  eliteActorsTargeted: string[];
  keyScandalSummary: string;
  shockingRevelations: string[];
  investigativePowersAndScope: string;
  judicialAndPoliticalOutcomes: string[];
  majorLawsAndReformsAdopted: string[];
  famousQuoteOrJudgeRatio: string;
  canliiOrOfficialRef: string;
  linkedDossierId?: string;
}

export const COMMISSIONS_ENQUETE_DATABASE: CommissionEnquete[] = [
  {
    id: 'commission-charbonneau',
    name: 'Commission Charbonneau (CEIC)',
    officialTitle: 'Commission d\'enquête sur l\'octroi et la gestion des contrats publics dans l\'industrie de la construction',
    presidentOrJudges: 'Juge France Charbonneau (Cour supérieure du Québec), commissaires Renaud Lachance et Guy Cournoyer',
    years: '2011 – 2015 (Rapport déposé en novembre 2015)',
    governingPartyTargeted: 'Gouvernements libéraux (Jean Charest) et péquistes (Bernard Landry, Pauline Marois), administrations municipales de Montréal (Gérald Tremblay / Union Montréal) et Laval (Gilles Vaillancourt)',
    domain: 'Corruption & Collusion',
    eliteActorsTargeted: [
      'Grands patrons du génie-conseil (SNC-Lavalin, Dessau, Genivar/WSP, Roche)',
      'Cartels de la construction (Tony Accurso, Paolo Catania, Lino Zambito, Nicolo Milioto)',
      'Collecteurs de fonds politiques (Marc Bibeau, Violette Trépanier, Franco Fava)',
      'Hauts fonctionnaires du ministère des Transports du Québec (MTQ) et directeurs des travaux publics de Montréal et Laval',
      'Dirigeants syndicaux (FTQ-Construction, Jocelyn Dupuis, Ken Pereira)'
    ],
    keyScandalSummary: 'Mise au jour d\'un système tentaculaire de collusion, de corruption et de financement politique occulte où l\'octroi des contrats publics était verrouillé par un cartel d\'entrepreneurs, avec des surfacturations de 20% à 30% sur les deniers publics et des ristournes reversées aux partis politiques provinciaux et municipaux par le biais d\'employés prête-noms.',
    shockingRevelations: [
      'Le système généralisé des « prête-noms » : des firmes de génie remboursaient en bonus ou en argent comptant leurs employés pour qu\'ils fassent des dons politiques au parti au pouvoir.',
      'Les réunions secrètes au Café Consenza du parrain de la mafia Nicolo Rizzuto et de Nicolo Milioto pour redistribuer l\'argent comptant tiré des contrats de trottoirs et d\'égouts de Montréal.',
      'Les vacances somptueuses d\'élites syndicales et de politiciens sur le yacht « Touch » de l\'entrepreneur Tony Accurso.',
      'La falsification d\'appels d\'offres au ministère des Transports (MTQ) et les cadeaux somptueux offerts aux ingénieurs publics (bouteilles de vin grand cru, billets de hockey au Centre Bell, voyages).'
    ],
    investigativePowersAndScope: 'Pouvoirs de contrainte de la Loi sur les commissions d\'enquête : citations à comparaître, mandats de perquisition, écoutes électroniques policières et témoignages sous serment retransmis en direct à la télévision pendant 263 jours d\'audiences.',
    judicialAndPoliticalOutcomes: [
      'Plusieurs dizaines d\'arrestations massives par l\'Unité permanente anticorruption (UPAC) dans les opérations Fronde, Gravier, Joug et Mémoire.',
      'Condamnation pénale et démission du maire de Laval Gilles Vaillancourt (condamné à 6 ans de pénitencier pour complot de corruption).',
      'Démission du maire de Montréal Gérald Tremblay en cours de mandat suite aux témoignages dévastateurs.',
      'Programme de remboursement volontaire (PRV) qui a forcé les firmes de génie et de construction à restituer plus de 150 millions $ aux contribuables québécois.'
    ],
    majorLawsAndReformsAdopted: [
      'Loi sur l\'intégrité en matière de contrats publics (Loi 1) et création du Registre des entreprises non admissibles (RENA).',
      'Création de l\'Autorité des marchés publics (AMP) dotée d\'un pouvoir d\'annulation et d\'enquête sur les appels d\'offres.',
      'Plafonnement historique des dons politiques individuels à 100 $ par électeur avec financement public majoritaire des partis.',
      'Renforcement de la protection légale des lanceurs d\'alerte et statut permanent de l\'UPAC.'
    ],
    famousQuoteOrJudgeRatio: '« Un système de corruption et de collusion s\'était profondément enraciné au Québec, minant la confiance des citoyens et coûtant des centaines de millions de dollars à la collectivité. La complaisance et l\'aveuglement volontaire ont régné trop longtemps. » — Juge France Charbonneau',
    canliiOrOfficialRef: 'Rapport CEIC 2015 (1741 pages, 60 recommandations) • SOQUIJ / Publications du Québec • Décret 1029-2011',
    linkedDossierId: 'charbonneau-collusion-upac'
  },
  {
    id: 'commission-bastarache',
    name: 'Commission Bastarache',
    officialTitle: 'Commission d\'enquête sur le processus de nomination des juges du Québec',
    presidentOrJudges: 'Juge Michel Bastarache (ancien juge puîné de la Cour suprême du Canada)',
    years: '2010 – 2011 (Rapport déposé en janvier 2011)',
    governingPartyTargeted: 'Gouvernement du Parti libéral du Québec (Gouvernement Jean Charest)',
    domain: 'Magistrature & Pouvoir Judiciaire',
    eliteActorsTargeted: [
      'Jean Charest (Premier ministre du Québec)',
      'Marc Bellemare (Ex-ministre de la Justice et Procureur général du Québec)',
      'Franco Fava et Charles Rondeau (Puissants collecteurs de fonds du PLQ et intimes du premier ministre)',
      'Stéphane Bertrand (Directeur de cabinet du premier ministre)',
      'Membres des comités de sélection de la magistrature de la Cour du Québec et de la Chambre de la jeunesse'
    ],
    keyScandalSummary: 'L\'ex-ministre de la Justice Marc Bellemare a affirmé sous serment avoir subi des pressions indues de la part de collecteurs de fonds libéraux majeurs et du bureau du premier ministre Jean Charest pour nommer des avocats donateurs ou militants libéraux comme juges à la Cour du Québec. L\'enquête a levé le voile sur l\'accès privilégié des élites partisanes aux plus hautes charges judiciaires.',
    shockingRevelations: [
      'Marc Bellemare a témoigné qu\'on lui remettait des listes de candidats juges approuvés par des collecteurs de fonds du parti lors de déjeuners privés au restaurant Le Michelangelo à Québec.',
      'Preuve de la proximité intime entre les collecteurs de fonds (Franco Fava, Charles Rondeau) et le cabinet du premier ministre, bénéficiant d\'un accès direct et prioritaire.',
      'Dévoilement des pratiques de « sollicitation de contributions » auprès des avocats aspirant à devenir juges ou souhaitant obtenir des charges publiques.',
      'Le rapport a conclu que si la preuve ne démontrait pas formellement un trafic de charge criminelle imputable au premier ministre, le processus comportait des faiblesses inacceptables et un sentiment public de favoritisme politique insoutenable.'
    ],
    investigativePowersAndScope: 'Audiences publiques sous la Loi sur les commissions d\'enquête, interrogatoires croisés menés par Me Giuseppe Battista et comparution sous serment du premier ministre Jean Charest et de son chef de cabinet.',
    judicialAndPoliticalOutcomes: [
      'Affaiblissement politique majeur du gouvernement Charest et discrédit sur l\'intégrité des nominations judiciaires.',
      'Mise en lumière de la nécessité absolue de dépolitiser intégralement la sélection des juges au Québec.',
      'Départ définitif de Marc Bellemare de la sphère politique et affrontements judiciaires en diffamation.'
    ],
    majorLawsAndReformsAdopted: [
      'Refonte complète du Règlement sur la procédure de sélection des candidats à la fonction de juge de la Cour du Québec.',
      'Interdiction absolue pour les membres des comités de sélection d\'avoir des attaches politiques actives ou d\'avoir collecté des fonds.',
      'Retrait du pouvoir discrétionnaire du ministre de choisir en dehors de la liste restreinte de trois noms hautement qualifiés recommandés par un comité indépendant.',
      'Adoption du Code d\'éthique et de déontologie des membres de l\'Assemblée nationale en décembre 2010.'
    ],
    famousQuoteOrJudgeRatio: '« Pour maintenir la confiance du public dans l\'indépendance de la justice, le processus de nomination des juges doit non seulement être équitable, mais paraître absolument irréprochable et imperméable aux influences partisanes. » — Juge Michel Bastarache',
    canliiOrOfficialRef: 'Rapport Bastarache 2011 (380 pages) • Publications du Québec • Décret 328-2010',
    linkedDossierId: 'commission-bastarache-juges'
  },
  {
    id: 'commission-gomery',
    name: 'Commission Gomery',
    officialTitle: 'Commission d\'enquête sur le programme de commandites et les activités publicitaires',
    presidentOrJudges: 'Juge John Gomery (Cour supérieure du Québec)',
    years: '2004 – 2006 (Rapports « Qui est responsable ? » et « Rétablir l\'imputabilité »)',
    governingPartyTargeted: 'Gouvernement du Parti libéral du Canada (Cabinets Jean Chrétien et Paul Martin)',
    domain: 'Financement Politique & Commandites',
    eliteActorsTargeted: [
      'Jean Chrétien (Premier ministre du Canada) et Jean Pelletier (Son chef de cabinet)',
      'Alfonso Gagliano (Ministre des Travaux publics et des Services gouvernementaux)',
      'Jacques Corriveau (Figure influente du Parti libéral du Canada et organisateur électoral)',
      'Chuck Guité (Directeur de la Direction générale des services de coordination des communications - CCSB)',
      'Patrons des grandes agences de communication et de publicité montréalaises (Groupaction, Lafleur Communication, Claude Boulay / Groupe Everest, Gosselin)'
    ],
    keyScandalSummary: 'Après le référendum de 1995 sur la souveraineté du Québec, le gouvernement fédéral a mis en place un « programme de commandites » secret de 332 millions $ pour accroître la visibilité du Canada. Plus de 100 millions $ ont été siphonnés sous forme de commissions abusives, de fausses factures et de ristournes illégales en argent comptant destinées à financer le Parti libéral du Canada.',
    shockingRevelations: [
      'Des millions de dollars versés pour des rapports publicitaires fictifs ou dupliqués (ex: faux rapports de visibilité payés à 500 000 $ pièce).',
      'Des enveloppes brunes bourrées de billets de banque de 100 $ remises dans des restaurants montréalais à des organisateurs politiques pour payer des dépenses électorales clandestines.',
      'Témoignage de Chuck Guité confirmant qu\'il recevait des ordres directs du ministre Alfonso Gagliano pour favoriser des agences de publicité amies du régime sans le moindre appel d\'offres.',
      'Le système de fausses factures mis en place par Jacques Corriveau (condamné à 4 ans de prison pour fraude et recyclage des produits de la criminalité).'
    ],
    investigativePowersAndScope: 'Commission royale fédérale d\'enquête créée en vertu de la Partie I de la Loi sur les enquêtes, avec transmission télévisée intégrale ayant captivé des millions de citoyens.',
    judicialAndPoliticalOutcomes: [
      'Condamnation criminelle et peines d\'emprisonnement ferme pour Chuck Guité et pour le publicitaire Jean Brault (Groupaction).',
      'Condamnation de Jacques Corriveau pour fraude et confiscation de biens criminels.',
      'Chute du gouvernement libéral de Paul Martin lors de l\'élection fédérale de 2006.',
      'Remboursement de plus d\'un million de dollars ordonné au Parti libéral du Canada pour les sommes détournées dans ses caisses.'
    ],
    majorLawsAndReformsAdopted: [
      'Adoption de la Loi fédérale sur la responsabilité (Federal Accountability Act - 2006).',
      'Interdiction totale des dons corporatifs et syndicaux au fédéral et plafond drastique sur les contributions individuelles.',
      'Création du poste indépendant de Directeur des poursuites pénales (DPP/PPSC) pour soustraire les poursuites criminelles au ministre politique.',
      'Création du Commissaire aux conflits d\'intérêts et à l\'éthique et du Commissaire au lobbying du Canada.'
    ],
    famousQuoteOrJudgeRatio: '« Un programme conçu sans contrôle, géré sans rigueur et instrumentalisé au bénéfice d\'intérêts partisans au mépris des règles fondamentales du droit public et de la confiance des citoyens. » — Juge John Gomery',
    canliiOrOfficialRef: 'Rapport Gomery 2005-2006 (Phase I & II) • Travaux publics et Services gouvernementaux Canada • CP32-86/2006F',
    linkedDossierId: 'commission-gomery-commandites'
  },
  {
    id: 'commission-chamberland',
    name: 'Commission Chamberland (CERP)',
    officialTitle: 'Commission d\'enquête sur la protection de la confidentialité des sources journalistiques',
    presidentOrJudges: 'Juge Jacques Chamberland (Cour d\'appel du Québec)',
    years: '2016 – 2017 (Rapport déposé en décembre 2017)',
    governingPartyTargeted: 'Gouvernement du Parti libéral du Québec (Philippe Couillard), ministère de la Sécurité publique, corps policiers de la Sûreté du Québec (SQ) et du SPVM',
    domain: 'Espionnage & Police d\'État',
    eliteActorsTargeted: [
      'Martin Prud\'homme (Directeur général de la Sûreté du Québec)',
      'Philippe Pichet (Chef de police du SPVM)',
      'Enquêteurs des affaires internes et de la division de la sécurité de l\'État',
      'Magistrats de paix ayant signé des mandats de surveillance à l\'aveugle',
      'Journalistes d\'enquête ciblés (Patrick Lagacé, Michael Nguyen, Fabrice de Pierrebourg, Alain Gravel, Marie-Maude Denis)'
    ],
    keyScandalSummary: 'Révélation explosive que la Sûreté du Québec (SQ) et le SPVM ont placé sous surveillance électronique secrète plusieurs journalistes d\'enquête québécois majeurs, traquant leurs téléphones portables et leurs déplacements géographiques dans le but d\'identifier et de punir les policiers ou fonctionnaires ayant divulgué des preuves de corruption ou d\'inconduite des élites (notamment dans l\'affaire Mâchouillon et les enquêtes sur l\'UPAC).',
    shockingRevelations: [
      'Le journaliste Patrick Lagacé de La Presse a fait l\'objet de 24 mandats de surveillance policière secrets émis par un juge de paix en seulement quelques mois.',
      'Les policiers ont utilisé des mandats de géolocalisation GPS en temps réel et des registres d\'appels détaillés pour cartographier les réseaux de contacts des journalistes.',
      'Les juges de paix signaient les mandats policiers sans aucune vérification approfondie de l\'atteinte à la liberté de la presse garantie par les Chartes constitutionnelles.',
      'La dérive d\'un appareil policier qui consacrait ses ressources les plus sophistiquées à chasser les lanceurs d\'alerte et les journalistes plutôt que de poursuivre les corrupteurs au sommet de l\'État.'
    ],
    investigativePowersAndScope: 'Commission provinciale d\'enquête publique avec accès aux dossiers d\'enquêtes policières scellés, interrogatoires des plus hauts gradés de la SQ et du SPVM.',
    judicialAndPoliticalOutcomes: [
      'Suspension puis destitution du chef de police du SPVM Philippe Pichet par le gouvernement suite au rapport accablant.',
      'Mise en tutelle temporaire du SPVM par Martin Prud\'homme.',
      'Blâme sévère contre les méthodes d\'espionnage policier des médias et invalidation judiciaire de mandats illégaux.'
    ],
    majorLawsAndReformsAdopted: [
      'Adoption au Québec de réformes majeures encadrant l\'émission des mandats visant des membres de la presse (obligation de passer devant un juge de la Cour supérieure ou de la Cour du Québec).',
      'Adoption au fédéral de la Loi sur la protection des sources journalistiques (Projet de loi S-231).',
      'Établissement du privilège juridique protégeant l\'identité des sources confidentielles contre les saisies policières d\'État.'
    ],
    famousQuoteOrJudgeRatio: '« La liberté de la presse n\'est pas un privilège corporatiste pour les journalistes, mais un rempart démocratique essentiel pour le public afin de dévoiler les abus de pouvoir et les dérives de l\'État. » — Juge Jacques Chamberland',
    canliiOrOfficialRef: 'Rapport CERP 2017 (446 pages) • Publications du Québec • Décret 982-2016',
    linkedDossierId: 'commission-chamberland-espionnage'
  },
  {
    id: 'commission-poitras',
    name: 'Commission Poitras',
    officialTitle: 'Commission d\'enquête sur la Sûreté du Québec',
    presidentOrJudges: 'Juge Lawrence Poitras (ex-juge en chef de la Cour supérieure du Québec)',
    years: '1996 – 1999 (Rapport en 4 tomes)',
    governingPartyTargeted: 'Gouvernement du Québec (ministère de la Sécurité publique sous le PQ et le PLQ)',
    domain: 'Espionnage & Police d\'État',
    eliteActorsTargeted: [
      'Directeurs généraux et états-majors successifs de la Sûreté du Québec (SQ)',
      'Escouade des crimes économiques et divisions des stupéfiants',
      'Avocats et procureurs de la Couronne ayant couvert des pratiques policières illégales',
      'Indics et agents provocateurs policiers protégés au mépris de la loi'
    ],
    keyScandalSummary: 'Commission d\'enquête historique créée après les scandales Matticks et les révélations de fabrication systématique de fausses preuves par des policiers de la SQ, de parjures devant les tribunaux criminels, d\'écoutes électroniques illégales non déclarées et d\'une sous-culture d\'omerta et de mépris des règles constitutionnelles au sommet de la police provinciale.',
    shockingRevelations: [
      'Fabrication de preuves par des enquêteurs pour faire condamner des cibles ou masquer les ratés d\'enquêtes majeures.',
      'Destruction volontaire de notes d\'enquête et dissimulation d\'éléments de preuve favorables à la défense (violation flagrante de l\'arrêt Stinchcombe).',
      'Écoutes électroniques sauvages sans mandats judiciaires et utilisation d\'enregistrements clandestins.',
      'Une culture de « fraternité blindée » où tout dénonciateur interne subissait des représailles impitoyables de la hiérarchie policière.'
    ],
    investigativePowersAndScope: 'Auditions sous serment de centaines de policiers, perquisitions dans les quartiers généraux de la SQ, examen de dossiers classifiés confidentiels.',
    judicialAndPoliticalOutcomes: [
      'Démission et remplacement forcé de hauts dirigeants de la Sûreté du Québec.',
      'Annulation de plusieurs procès criminels majeurs pour abus de procédure d\'État.',
      'Création d\'organismes civils indépendants de surveillance et séparation des fonctions déontologiques.'
    ],
    majorLawsAndReformsAdopted: [
      'Refonte globale de la Loi sur la police du Québec (RLRQ c. P-13.1) en 2000.',
      'Création du Comité de déontologie policière et renforcement du Commissaire à la déontologie policière.',
      'Mise en place de protocoles stricts de conservation et de divulgation de la preuve judiciaire pour tous les corps policiers.'
    ],
    famousQuoteOrJudgeRatio: '« La fin ne peut justifier les moyens dans un État de droit. Lorsque les forces de l\'ordre violent elles-mêmes la loi pour obtenir des condamnations, c\'est l\'ensemble de l\'édifice judiciaire qui s\'effondre. » — Juge Lawrence Poitras',
    canliiOrOfficialRef: 'Rapport Poitras 1999 (Tomes 1 à 4) • Publications du Québec • Décret 1269-96',
    linkedDossierId: 'commission-poitras-sq-preuves'
  },
  {
    id: 'commission-cliche',
    name: 'Commission Cliche',
    officialTitle: 'Commission d\'enquête sur l\'exercice de la liberté syndicale sur les chantiers de construction',
    presidentOrJudges: 'Juge Robert Cliche, assisté de Brian Mulroney et Guy Chevrette',
    years: '1974 – 1975 (Rapport déposé en mai 1975)',
    governingPartyTargeted: 'Gouvernement libéral de Robert Bourassa',
    domain: 'Syndicats & Crime Organisé',
    eliteActorsTargeted: [
      'Ministres du cabinet Bourassa (notamment au Travail et aux Travaux publics)',
      'Dirigeants de la FTQ-Construction (André Desjardins, surnommé « le roi de la construction »)',
      'Chefs syndicaux rivaux de la CSN',
      'Dirigeants d\'Hydro-Québec et de la Société d\'énergie de la Baie-James (SEBJ)'
    ],
    keyScandalSummary: 'Créée après le saccage d\'une rare violence du chantier hydroélectrique de la Baie-James (LG-2) par des syndicalistes en mars 1974 (incendies de génératrices, destruction au bulldozer, 30 M$ de dégâts), la Commission a dévoilé la corruption, l\'extorsion, le racket, l\'intimidation physique et les connivences malsaines entre certaines élites politiques ministérielles et les barons syndicaux.',
    shockingRevelations: [
      'L\'emprise totale de chefs syndicaux liés à la pègre sur l\'embauche des ouvriers et le contrôle tyrannique des chantiers.',
      'Le chantage exercé sur les entrepreneurs sous peine de grèves sauvages, d\'actes de sabotage et de violence physique.',
      'Les liens de complaisance entre des membres de l\'exécutif politique provincial et des figures influentes de la pègre syndicale pour assurer la paix industrielle à n\'importe quel prix.',
      'La mise en tutelle historique ordonnée sur plusieurs syndicats de la construction.'
    ],
    investigativePowersAndScope: 'Audiences télévisées électrisantes révélant au grand public le fonctionnement mafieux de pans entiers de l\'économie québécoise.',
    judicialAndPoliticalOutcomes: [
      'Condamnations criminelles d\'organisateurs syndicaux et poursuites pénales.',
      'Mise sous tutelle étatique de sections syndicales de la FTQ-Construction par décret.',
      'Ébranlement du gouvernement Robert Bourassa, précipitant sa défaite électorale historique en 1976.'
    ],
    majorLawsAndReformsAdopted: [
      'Création de l\'Office de la construction du Québec (qui deviendra la Commission de la construction du Québec - CCQ).',
      'Établissement du carnet de référence syndicale encadré et de l\'examen obligatoire de compétence pour éliminer le placement illégal.',
      'Législation stricte interdisant aux personnes condamnées au criminel de diriger des organisations syndicales.'
    ],
    famousQuoteOrJudgeRatio: '« La liberté syndicale ne saurait être le manteau sous lequel s\'abritent le gangstérisme, la corruption et le mépris de la loi démocratique. » — Juge Robert Cliche',
    canliiOrOfficialRef: 'Rapport de la Commission d\'enquête sur l\'exercice de la liberté syndicale (Rapport Cliche, 1975) • Éditeur officiel du Québec',
    linkedDossierId: 'commission-cliche-corruption-construction'
  },
  {
    id: 'commission-ceco',
    name: 'Commission CECO (Crime Organisé)',
    officialTitle: 'Commission d\'enquête sur le crime organisé (Police Commission du Québec)',
    presidentOrJudges: 'Juge Rhéal Brunet, commissaires Marc Cordeau et Jean L. Dutil',
    years: '1972 – 1977 (Multiples rapports thématiques)',
    governingPartyTargeted: 'Gouvernements provinciaux et administrations municipales de Montréal',
    domain: 'Syndicats & Crime Organisé',
    eliteActorsTargeted: [
      'Parrains de la mafia montréalaise (Vic Cotroni, Paolo Violi)',
      'Dirigeants du redoutable clan Dubois',
      'Inspecteurs et fonctionnaires du ministère de l\'Agriculture et de l\'Alimentation (Scandale de la viande avariée)',
      'Fonctionnaires municipaux et agents de la paix complices'
    ],
    keyScandalSummary: 'Enquête publique titanesque sur l\'infiltration du crime organisé dans l\'économie légitime québécoise : scandale des viandes de rebut réintroduites dans la chaîne alimentaire humaine (« viande avariée »), racket de protection, corruption de fonctionnaires sanitaires et collusion avec des membres de l\'appareil d\'État.',
    shockingRevelations: [
      'Des dizaines de tonnes de viande d\'animaux malades ou morts revendues dans les épiceries et supermarchés grâce à des faux certificats d\'inspection vétérinaire délivrés contre pots-de-vin.',
      'Les comparutions sous serment des chefs de la mafia et du clan Dubois devant les caméras, refusant de répondre et incarcérés pour outrage au tribunal.',
      'L\'étendue de la corruption parmi les inspecteurs d\'État fermant les yeux sur des usines clandestines insalubres.',
      'La preuve des liens étroits unissant le milieu interlope, la haute finance et des intermédiaires politiques.'
    ],
    investigativePowersAndScope: 'Pouvoirs exceptionnels d\'assignation et d\'incarcération pour outrage au tribunal, ayant forcé des dizaines de témoins hostiles à purger des peines de prison immédiates.',
    judicialAndPoliticalOutcomes: [
      'Incarcération pour outrage et condamnations de nombreuses figures de la mafia et du crime organisé.',
      'Démantèlement de réseaux de distribution de viande clandestine et fermeture d\'abattoirs illégaux.',
      'Purge administrative parmi les inspecteurs corrompus du ministère de l\'Agriculture.'
    ],
    majorLawsAndReformsAdopted: [
      'Adoption de la Loi sur les produits alimentaires et renforcement drastique de l\'inspection vétérinaire et sanitaire (MAPAQ).',
      'Modernisation des pouvoirs de la police d\'État contre le crime organisé et les infractions de complot.',
      'Renforcement de l\'encadrement des débits de boisson et des permis de la Régie des alcools.'
    ],
    famousQuoteOrJudgeRatio: '« Le crime organisé ne peut prospérer sans la complicité passive ou active de ceux qui sont chargés d\'appliquer les lois de l\'État. » — Commission d\'enquête sur le crime organisé',
    canliiOrOfficialRef: 'Rapports CECO (1975-1977) • La viande avariée • Le clan Dubois • Éditeur officiel du Québec'
  },
  {
    id: 'commission-laurent',
    name: 'Commission Laurent (Droits des Enfants)',
    officialTitle: 'Commission spéciale sur les droits des enfants et la protection de la jeunesse',
    presidentOrJudges: 'Régine Laurent (Présidente, ex-présidente de la FIQ), assistée d\'experts en pédiatrie sociale et droit de la jeunesse',
    years: '2019 – 2021 (Rapport final déposé en mai 2021)',
    governingPartyTargeted: 'Ministère de la Santé et des Services sociaux (MSSS), hauts dirigeants des CISSS/CIUSSS et gouvernements successifs (PLQ, PQ, CAQ)',
    domain: 'Protection de la Jeunesse & Santé',
    eliteActorsTargeted: [
      'Lionel Carmant (Ministre délégué à la Santé et aux Services sociaux)',
      'Sous-ministres et directeurs généraux des CISSS / CIUSSS',
      'Directions régionales de la protection de la jeunesse (DPJ)',
      'Conseil du trésor (pour le sous-financement chronique et la rétention de ressources)',
      'Ordres professionnels et appareils juridiques de la Chambre de la jeunesse'
    ],
    keyScandalSummary: 'Créée après le drame insoutenable de la fillette de Granby morte martyrisée en avril 2019 malgré de multiples signalements à la DPJ, la Commission a radiographié l\'échec systémique des élites technocratiques de l\'État québécois, des guerres de clochers administratives, du manque de collaboration entre ministères et du délaissement des enfants les plus vulnérables.',
    shockingRevelations: [
      'Des milliers de signalements d\'enfants en détresse placés sur des listes d\'attente interminables pendant des mois sans la moindre visite d\'évaluation.',
      'Des guerres de tranchées et de juridiction étanches entre le réseau de la santé, le milieu scolaire, la police et les services de garde.',
      'L\'épuisement extrême et l\'exode des intervenants sociaux de terrain face à une bureaucratie centralisée sourde et déconnectée.',
      'Des enfants transférés d\'une famille d\'accueil à une autre jusqu\'à 10 à 15 fois, détruisant tout lien d\'attachement stable.'
    ],
    investigativePowersAndScope: 'Commission spéciale itinérante à travers tout le Québec, audition de centaines de témoins (parents, enfants devenus adultes, travailleurs sociaux, experts internationaux) et analyses de dossiers médicaux et sociaux confidentiels.',
    judicialAndPoliticalOutcomes: [
      'Démission et mutation de gestionnaires de la DPJ de l\'Estrie et enquêtes de coroners accablantes.',
      'Condamnation publique unanime de l\'inertie étatique et promesse gouvernementale de réformer de fond en comble la LPJ.',
      'Création ordonnée d\'un poste de Directeur national de la protection de la jeunesse.'
    ],
    majorLawsAndReformsAdopted: [
      'Adoption de la Loi 15 modifiant la Loi sur la protection de la jeunesse (2022) pour consacrer la stabilité des liens d\'attachement et le respect des familles.',
      'Création du poste de Commissaire indépendant au bien-être et aux droits des enfants.',
      'Obligation légale pour le réseau scolaire et le réseau de la santé de partager les informations critiques sans barrière administrative.'
    ],
    famousQuoteOrJudgeRatio: '« Nous avons collectivement failli à notre devoir le plus sacré. Le système est devenu une forteresse bureaucratique opaque qui oublie le visage de l\'enfant. Il est temps de remettre l\'enfant au cœur de chaque décision. » — Régine Laurent',
    canliiOrOfficialRef: 'Rapport de la Commission Laurent (552 pages, 2021) • Assemblée nationale du Québec',
    linkedDossierId: 'protection-jeunesse-dpj-laurent'
  },
  {
    id: 'commission-johnson-concorde',
    name: 'Commission Johnson (Viaduc de la Concorde)',
    officialTitle: 'Commission d\'enquête sur le viaduc de la Concorde',
    presidentOrJudges: 'Pierre Marc Johnson (ex-premier ministre du Québec, avocat et médecin)',
    years: '2006 – 2007 (Rapport déposé en octobre 2007)',
    governingPartyTargeted: 'Ministère des Transports du Québec (MTQ) et gouvernements provinciaux successifs',
    domain: 'Infrastructures & Négligence Publique',
    eliteActorsTargeted: [
      'Direction générale et ingénieurs du ministère des Transports du Québec (MTQ)',
      'Firmes de génie-conseil conceptrices et inspectrices (Desjardins Sauriol / Tecsult / Dessau)',
      'Gestionnaires des budgets de réfection des ponts et viaducs du Québec'
    ],
    keyScandalSummary: 'L\'effondrement soudain du viaduc de la Concorde sur l\'autoroute 19 à Laval le 30 septembre 2006 a fait 5 morts et 6 blessés graves. L\'enquête a mis en lumière une chaîne invraisemblable de négligences : erreurs de conception originales par une firme privée, absence de suivi des armatures, inspections superficielles par le MTQ et faillite de la mémoire institutionnelle de l\'État.',
    shockingRevelations: [
      'Le viaduc s\'est effondré en raison d\'un cisaillement d\'épaisseur causé par une mauvaise disposition des armatures lors de sa construction en 1970 par une firme privée.',
      'Moins de deux heures avant le drame, un patrouilleur du MTQ avait été envoyé sur place après des signalements de morceaux de béton tombés, mais n\'avait rien détecté d\'anormal faute de formation.',
      'Le MTQ manquait cruellement d\'ingénieurs qualifiés en raison de la vague de départs à la retraite non remplacés et de la sous-traitance aveugle au secteur privé.',
      'Des dizaines de structures routières au Québec présentaient un état de dégradation avancé sans diagnostic fiable.'
    ],
    investigativePowersAndScope: 'Expertises métallurgiques et géotechniques indépendantes, reconstitution 3D des forces d\'effondrement et examen exhaustif des 35 ans d\'archives du MTQ.',
    judicialAndPoliticalOutcomes: [
      'Indemnisation des familles des victimes par l\'État québécois et les assureurs des firmes.',
      'Fermeture d\'urgence et reconstruction complète de viaducs présentant des typologies similaires.',
      'Remaniement profond des structures d\'ingénierie au ministère des Transports.'
    ],
    majorLawsAndReformsAdopted: [
      'Révision intégrale du Guide d\'inspection des structures du MTQ.',
      'Création d\'un système informatisé de gestion des structures routières (GSR).',
      'Réinvestissement massif obligatoire dans le maintien d\'actifs des infrastructures publiques du Québec.'
    ],
    famousQuoteOrJudgeRatio: '« Un accident qui n\'était pas une fatalité mais l\'aboutissement d\'une chaîne de faiblesses administratives et techniques que personne n\'a su interrompre. » — Pierre Marc Johnson',
    canliiOrOfficialRef: 'Rapport de la Commission d\'enquête sur le viaduc de la Concorde (2007) • Gouvernement du Québec'
  }
];

export function getCommissionById(id: string): CommissionEnquete | undefined {
  return COMMISSIONS_ENQUETE_DATABASE.find((c) => c.id === id);
}
