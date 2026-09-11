import { SocialPushPack } from '../types';

export const PRELOADED_SOCIAL_PUSHES: SocialPushPack[] = [
  {
    id: 'push-dpj-140-enfants',
    timestamp: Date.now() - 1000 * 60 * 18, // 18 min ago
    topic: 'DPJ Mauricie : Lésions de Droits sur 140 Enfants & Adoptions Forcées',
    status: 'D-1 Urgent',
    urgencyLevel: 'URGENCE_D1',
    viralScore: 99,
    hook: '140 enfants ont vu leurs droits fondamentaux violés par la DPJ pour accélérer des adoptions. 49% des dossiers contenaient des faits non vérifiés ou inventés.',
    xThread: [
      `1/4 🚨 RUPTURE D-1 : L'enquête choc de la CDPDJ confirme que la DPJ Mauricie-Centre-du-Québec a bafoué les droits fondamentaux de 140 enfants québécois. 
Un système perverti où des enfants ont été arrachés à leur famille sur des rumeurs. 🧵⤵️ #PolQc #DPJ #AssNat`,
      `2/4 📊 LES CHIFFRES IMPARABLES :
• 49% des dossiers de compromission basés sur des faits manipulés ou non corroborés
• 63% des familles élargies (grands-parents aimants) écartées sans visite
• 57% des foyers privés de tout soutien avant placement
Source : Rapport officiel CDPDJ 2024.`,
      `3/4 ⚖️ L'ARTICLE DE LOI BAFOUÉ :
Art. 4 LPJ : « Le maintien dans le milieu familial doit être privilégié. »
Pourtant, le taux d'adoption forcée y était 3 à 6 fois supérieur à la moyenne provinciale. Une direction mise sous tutelle officielle par le MSSS.`,
      `4/4 📢 ACTION CITOYENNE D-1 :
Ne laissons pas ce scandale étouffé sous le tapis parlementaire.
Exigez une commission d'enquête publique indépendante sur TOUTES les DPJ du Québec.
👉 Partagez & consultez le dossier complet sur Transparence Québec ! #PolQc #JusticePourNosEnfants`
    ],
    linkedInPost: `🏛️ CRISE DE GOUVERNANCE & ÉTHIQUE PUBLIQUE : L'AFFAIRE DES 140 ENFANTS DE LA DPJ

L'enquête systémique menée par la Commission des droits de la personne et des droits de la jeunesse (CDPDJ) révèle une faillite éthique sans précédent au sein du CIUSSS de la Mauricie-et-du-Centre-du-Québec.

Les constats documentés posent des questions fondamentales sur nos mécanismes d'audit interne :
1️⃣ Dérive d'objectifs : 140 enfants ont subi des lésions de droits caractérisées pour privilégier l'adoption plénière au détriment du maintien familial naturel (violation de l'art. 4 LPJ).
2️⃣ Rigueur factuelle compromise : Dans 49 % des cas analysés, des allégations non corroborées ont servi de fondement à des ordonnances judiciaires de placement.
3️⃣ Éviction systémique des proches : 63 % des grands-parents et familles élargies ont été délibérément ignorés.

Lorsque les contre-pouvoirs institutionnels échouent, seule la transparence absolue et la reddition de comptes au Salon Bleu peuvent restaurer la confiance citoyenne envers nos services publics de protection.

#GouvernancePublique #ProtectionDeLaJeunesse #Éthique #Québec #TransparenceQC`,
    facebookPost: `💔 140 ENFANTS DU QUÉBEC ONT VU LEURS DROITS VIOLÉS : NE DÉTOURNEZ PAS LE REGARD.

Ce n'est pas une rumeur. C'est la conclusion officielle et accablante de la Commission des droits de la personne (CDPDJ).

En Mauricie–Centre-du-Québec, des intervenants de la DPJ ont :
❌ Utilisé des faits inventés ou non vérifiés dans 49% des dossiers pour justifier des retraits d'enfants ;
❌ Refusé de confier les petits à leurs propres grands-parents dans 63% des cas pour précipiter des adoptions permanentes ;
❌ Privé 57% des parents en difficulté de tout soutien avant de briser leur famille.

Le ministre a dû mettre la direction sous tutelle. Mais qu'en est-il des 140 enfants dont la vie a été bouleversée à jamais ?

👨‍👩‍👧‍👦 En tant que parents, citoyens et contribuables, nous exigeons des comptes clairs et une révision indépendante immédiate de chaque dossier d'adoption forcé.

Partagez ce message sur vos réseaux pour que la voix des enfants et des familles soit enfin entendue à l'Assemblée nationale ! 👇`,
    tiktokScript: {
      hookVisual: 'Gros plan sur le document officiel CDPDJ avec tampon rouge "MISE SOUS TUTELLE" et le chiffre 140 ENFANTS qui clignote.',
      hookSpoken: 'Si tu penses que la DPJ protège toujours les enfants, ce document officiel va te glacer le sang.',
      bodySteps: [
        {
          visual: 'Graphique : 49% de fausses notes et rumeurs intégrées aux rapports judiciaires.',
          audio: 'La Commission des droits de la personne vient de confirmer que sur 140 enfants, la moitié des dossiers contenaient des faits non vérifiés ou déformés pour justifier le placement.'
        },
        {
          visual: 'Carte du Québec avec un ratio 3X à 6X d\'adoptions permanentes forcées.',
          audio: 'Pire : 63% des grands-parents disponibles ont été écartés sans aucune visite pour diriger les bébés vers des adoptions irréversibles.'
        },
        {
          visual: 'Extrait de la période de questions à l\'Assemblée nationale.',
          audio: 'La direction a été placée sous tutelle gouvernementale, mais le gouvernement refuse toujours une commission d\'enquête publique élargie.'
        }
      ],
      callToAction: 'Va sur le registre Transparence Québec pour copier la requête légale art. 95 LPJ et partage cette vidéo d\'urgence.'
    },
    pressAlertD1: {
      embargo: 'COMMUNIQUÉ FLASH D-1 • DIFFUSION CITOYENNE IMMÉDIATE',
      headline: 'LÉSIONS DE DROITS SUR 140 ENFANTS : APPEL À LA CRÉATION D\'UN TRIBUNAL SPÉCIAL DE RÉVISION LPJ',
      leadParagraph: 'Face à la confirmation par la CDPDJ de lésions systémiques de droits infligées à 140 enfants par la DPJ de la Mauricie-et-du-Centre-du-Québec, la coalition citoyenne Transparence Québec réclame la suspension conservatoire des requêtes en admissibilité à l\'adoption et l\'ouverture immédiate d\'un guichet de contre-expertise pédiatrique indépendante.',
      bulletPoints: [
        '49 % des évaluations judiciaires fondées sur des faits non vérifiés ou biaisés ;',
        'Violation documentée des articles 2.2, 4 et 11.1 de la Loi sur la protection de la jeunesse ;',
        'Mise sous tutelle administrative sans précédent par le ministère de la Santé et des Services sociaux.'
      ],
      callToAction: 'Interpellation formelle de tous les députés de l\'Assemblée nationale pour le vote d\'une commission d\'enquête plénière.'
    },
    quoteCards: [
      {
        quote: '« Dans 49% des cas, des allégations non corroborées ont été présentées comme des certitudes cliniques au Tribunal de la jeunesse. »',
        authorOrEntity: 'Commission des droits de la personne (CDPDJ)',
        context: 'Rapport d\'enquête systémique Mauricie 2024'
      },
      {
        quote: '« On a brisé des familles sans même donner un dollar d\'aide ou un répit aux parents biologiques. »',
        authorOrEntity: 'Observatoire Citoyen Transparence Québec',
        context: 'Audit de l\'article 2.2 LPJ'
      }
    ],
    hashtags: ['#PolQc', '#DPJ', '#AssNat', '#DroitsEnfants', '#TransparenceQC', '#Québec']
  },
  {
    id: 'push-saaqclic-fiasco',
    timestamp: Date.now() - 1000 * 60 * 52, // 52 min ago
    topic: 'Fiasco SAAQclic : 1,1 Milliard $ et Contrats Informatiques sans Contrôle',
    status: 'H24 Live Push',
    urgencyLevel: 'VIGILANCE_H24',
    viralScore: 95,
    hook: 'SAAQclic : Plus d\'un milliard de dollars de fonds publics engloutis pendant que des citoyens dorment sur le trottoir pour une plaque.',
    xThread: [
      `1/4 🚨 GÂCHIS DU SIÈCLE : La facture réelle de la transition numérique SAAQclic dépasse 1,1 milliard $ selon les analyses d'audit.
Où est passée l'imputabilité ministérielle ? 🧵👇 #PolQc #SAAQclic #AssNat`,
      `2/4 💸 PENDANT CE TEMPS :
• Des citoyens obligés de faire la file à 4h du matin dans le froid
• Des transporteurs routiers paralysés pendant des semaines
• Des avenants contractuels et consultants privés payés jusqu'à 2500$/jour
Qui a approuvé les tests de montée en charge inexistants ?`,
      `3/4 🔍 L'ENJEU DE FOND :
Les firmes de conseil informatique continuent d'engranger des millions en "frais de stabilisation" sans pénalité de performance. L'UPAC et la Vérificatrice générale ont été saisies du dossier.`,
      `4/4 📢 VOTRE ARGENT, VOS SERVICES :
Chaque dollar gaspillé dans des contrats publics mal ficelés est un dollar en moins pour nos urgences et nos écoles. 
Exigeons des pénalités contractuelles et la fin de l'impunité ! RT massif ! #PolQc`
    ],
    linkedInPost: `💻 RETOUR D'EXPÉRIENCE IT & GOUVERNANCE PUBLIQUE : LA LEÇON DE SAAQCLIC

Le déploiement de SAAQclic restera comme un cas d'école dans l'histoire des grands projets informatiques gouvernementaux au Canada.

Trois constats majeurs à tirer pour les gestionnaires et décideurs publics :
🔹 Gouvernance déconnectée : L'absence de tests de charge grandeur nature combinée à un calendrier politique rigide a conduit à l'effondrement opérationnel dès la mise en production.
🔹 Dépendance extrême aux consultants externes : L'atrophie de l'expertise interne de l'État a empêché tout contrôle indépendant de la qualité du code délivré.
🔹 Flambée budgétaire : D'un devis initial de quelques centaines de millions, le coût total consolidé flirte avec le milliard de dollars.

La modernisation numérique ne peut s'affranchir des règles élémentaires de gestion du risque et d'obligation de résultat contractuelle.

#TechGov #GestionDeProjet #Gouvernance #SecteurPublic #TransparenceQC`,
    facebookPost: `🚗 VOS IMPÔTS DANS LE TROU SAAQCLIC : JUSQU'À QUAND LE SILENCE ?

Rappelez-vous des files d'attente interminables de l'hiver dernier. Des gens qui perdaient leur journée de salaire pour enregistrer leur véhicule.

Aujourd'hui, les rapports confirment l'ampleur du désastre : plus d'UN MILLIARD de dollars de votre argent englouti dans ce système informatique déficient.

Pendant que les consultants empochaient des millions, aucun ministre ni haut dirigeant n'a assumé la facture.

👉 Posez la question à votre député : allez-vous exiger le remboursement des dépassements de coûts aux firmes responsables ?

Partagez si vous en avez assez que les erreurs de gestion soient toujours payées par le contribuable ! 📢`,
    tiktokScript: {
      hookVisual: 'Compteur de dollars qui tourne à toute vitesse jusqu\'à 1 100 000 000 $ avec des images des files d\'attente SAAQ.',
      hookSpoken: 'Ce fiasco informatique a coûté plus d\'un milliard de dollars au Québec, et personne n\'a été congédié.',
      bodySteps: [
        {
          visual: 'Facture avec les taux horaires des consultants à 300$/heure.',
          audio: 'Pendant que tu attendais 6 heures dans le froid pour un permis, des firmes privées facturaient des millions en extras.'
        },
        {
          visual: 'Rapport de la Vérificatrice générale du Québec.',
          audio: 'Le système a été lancé alors que les alertes internes disaient clairement qu\'il n\'était pas prêt.'
        }
      ],
      callToAction: 'Abonne-toi pour suivre les contrats publics décortiqués sur Transparence Québec.'
    },
    pressAlertD1: {
      embargo: 'BULLETIN D-1 TRANS-QC',
      headline: 'SAAQCLIC : AUDIT DES SURCOÛTS ET EXIGENCE D\'UN REGISTRE PUBLIC DES CONSULTANTS TI',
      leadParagraph: 'Transparence Québec rend public son comparatif des coûts par habitant de la transition SAAQclic par rapport aux standards de l\'OCDE, confirmant un dépassement de plus de 300% imputable à l\'absence de clauses de pénalité de livraison.',
      bulletPoints: [
        'Dépassement consolidé estimé à 1,1 milliard $ incluant les pertes économiques indirectes ;',
        'Contrats octroyés par avenants successifs sans réappel d\'offres concurrentiel ;',
        'Demande formelle de commission d\'enquête permanente sur l\'octroi des contrats TI d\'État.'
      ],
      callToAction: 'Dépôt immédiat d\'une pétition citoyenne à l\'Assemblée nationale.'
    },
    quoteCards: [
      {
        quote: '« Quand un projet informatique public échoue, le citoyen paie deux fois : au guichet et sur son rapport d\'impôt. »',
        authorOrEntity: 'Vigie Numérique Citoyenne',
        context: 'Analyse du contrat SAAQclic'
      }
    ],
    hashtags: ['#SAAQclic', '#PolQc', '#FondsPublics', '#TransparenceQC', '#Gouvernance']
  },
  {
    id: 'push-northvolt-subsides',
    timestamp: Date.now() - 1000 * 60 * 140, // 2h ago
    topic: 'Filière Batterie Northvolt : 7 Milliards $ d\'Aide Publique & Risques Financiers',
    status: 'Alerte Citoyenne',
    urgencyLevel: 'COMMUNIQUÉ_PRESSE',
    viralScore: 92,
    hook: '7 milliards de dollars engagés pour Northvolt : que reste-t-il des garanties québécoises face aux déboires financiers mondiaux ?',
    xThread: [
      `1/4 ⚡ NORTHVOLT & FONDS PUBLICS : Alors que le géant suédois Northvolt annonce des licenciements et le gel de projets internationaux, quel est le risque réel pour les milliards investis par Québec et Ottawa ? 🧵👇 #PolQc #Northvolt #ÉconomieQC`,
      `2/4 💰 LES CHIFFRES EN JEU :
• Jusqu'à 7 milliards $ en subventions, prêts et rabais d'électricité garantis
• Déboisement précipité de milieux humides sensibles sans étude BAPE complète préalable
• Risque de dilution des actifs publics en cas de restructuration globale.`,
      `3/4 📉 LA QUESTION DU SALON BLEU :
Pourquoi avoir consenti des exemptions environnementales exceptionnelles si la santé financière de l'entreprise n'était pas rigoureusement verrouillée ? Le ministre Fitzgibbon a quitté ses fonctions, mais l'engagement financier demeure.`,
      `4/4 📢 CLARTÉ IMMÉDIATE :
Les contribuables québécois ont le droit de savoir si leur argent est protégé par des hypothèques de premier rang. Exigeons la divulgation intégrale des contrats ! #PolQc #TransparenceQC`
    ],
    linkedInPost: `🔋 TRANSITION ÉNERGÉTIQUE ET CAPITAL DE RISQUE ÉTATIQUE : L'ÉQUILIBRE DÉLICAT DU DOSSIER NORTHVOLT

L'ambition de bâtir une filière batterie québécoise est stratégique. Cependant, la posture d'investisseur de l'État commande une gestion de risque de niveau institutionnel.

Face aux récentes turbulences financières de la maison-mère suédoise, des questions légitimes se posent pour le secteur financier et économique québécois :
1. Structuration du capital : Quelle est la part de dette garantie vs d'équité directe absorbée par Investissement Québec ?
2. Clauses de sauvegarde : En cas de ralentissement mondial de la demande de VE, quels sont les recours de sortie pour les deniers publics ?
3. Précédents historiques : Le Québec a déjà connu des déconvenues majeures dans le sauvetage d'entreprises étrangères.

La transparence sur les engagements contractuels n'affaiblit pas les projets industriels ; elle est le garant de leur viabilité démocratique.

#DéveloppementÉconomique #FilièreBatterie #InvestissementQuébec #ESG #TransparenceQC`,
    facebookPost: `⚡ MILLIARDS POUR NORTHVOLT : VOTRE OPINION SUR CE PARI INDUSTRIEL ?

Le gouvernement a promis jusqu'à 7 milliards de dollars pour implanter la méga-usine de batteries Northvolt en Montérégie.

Mais aujourd'hui, l'entreprise traverse de graves difficultés financières en Europe et licencie du personnel.

Pendant que nos hôpitaux manquent de personnel et que nos écoles tombent en ruine, l'État a-t-il eu raison de miser autant sur une seule entreprise multinationale privée ?

💬 Donnez votre avis avec respect dans les commentaires et partagez à vos proches pour susciter le débat ! 👇`,
    tiktokScript: {
      hookVisual: 'Carte satellite du site de Northvolt avec superposition d\'un chèque géant de 7 000 000 000 $ signé par le contribuable.',
      hookSpoken: 'Est-ce que le Québec vient de risquer 7 milliards de dollars sur une entreprise qui est en train de vaciller en Europe ?',
      bodySteps: [
        {
          visual: 'Graphique de la chute des actions et gels d\'usines de Northvolt en Suède.',
          audio: 'En Europe, Northvolt annule des projets et licencie. Mais ici, le gouvernement a déjà engagé des milliards de fonds publics.'
        },
        {
          visual: 'Les arbres coupés et le refus d\'un BAPE complet.',
          audio: 'Les lois environnementales ont été assouplies pour aller vite. Mais qui va payer la facture si l\'usine ne livre pas ses promesses ?'
        }
      ],
      callToAction: 'Partage pour que les citoyens demandent la publication intégrale des contrats secrets.'
    },
    pressAlertD1: {
      embargo: 'POUR PUBLICATION IMMÉDIATE',
      headline: 'TRANSPARENCE DES FONDS PUBLICS : APPEL AU DÉPÔT INTÉGRAL DU PACTE D\'ACTIONNAIRES NORTHVOLT',
      leadParagraph: 'À la suite des restructurations internationales annoncées par Northvolt AB, Transparence Québec enjoint le ministre de l\'Économie et Investissement Québec de rendre publics les termes des garanties de prêt et clauses de reprise d\'actifs protégeant le Trésor québécois.',
      bulletPoints: [
        'Engagements financiers québécois et fédéraux s\'élevant à plusieurs milliards de dollars ;',
        'Absence de visibilité publique sur les conditions de premier rang hypothécaire ;',
        'Nécessité démocratique d\'un débat parlementaire d\'urgence en commission de l\'économie.'
      ],
      callToAction: 'Dépôt d\'une demande d\'accès à l\'information consolidée auprès d\'Investissement Québec.'
    },
    quoteCards: [
      {
        quote: '« Les subventions publiques ne doivent jamais être du capital de risque à perte unilatérale pour le citoyen. »',
        authorOrEntity: 'Observatoire Économique Citoyen',
        context: 'Note de conjoncture sur les filières subventionnées'
      }
    ],
    hashtags: ['#Northvolt', '#PolQc', '#InvestissementQuébec', '#ÉconomieQC', '#TransparenceQC']
  },
  {
    id: 'push-big-brother-elites',
    timestamp: Date.now() - 1000 * 60 * 5, // 5 min ago
    topic: '« Big Brother » Numérique & Élite des Cabinets-Conseils (ArriveCAN, SAAQclic, McKinsey)',
    status: 'D-1 Urgent',
    urgencyLevel: 'URGENCE_D1',
    viralScore: 98,
    hook: 'De 80 000 $ à 60 millions $ pour ArriveCAN, 500M$ pour SAAQclic, millions versés sans appel d\'offres à McKinsey et surveillance d\'État. L\'anatomie d\'une dérive techno-bureaucratique.',
    xThread: [
      `1/4 🚨 ALERTE D-1 : Du fédéral au Québec, le système « Big Brother » s'est nourri d'une collusion entre élites politiques et courtiers en informatique.
ArriveCAN : 80 000 $ prévus, 60M$ dépensés. SAAQclic : plus de 500M$. 🧵⤵️ #PolQc #ArriveCAN #AssNat #CdnPoli`,
      `2/4 📊 LES FAITS ÉTABLIS PAR LES VÉRIFICATEURS GÉNÉRAUX :
• Karen Hogan (VG Canada) : « La pire tenue de dossiers jamais vue » sur ArriveCAN.
• GCStrategies : 2 personnes dans un sous-sol, 19 millions $ de commissions sans coder une ligne.
• McKinsey : Des dizaines de millions de fonds publics accordés en secret pendant la pandémie.`,
      `3/4 ⚖️ SURVEILLANCE & DROITS CIVILS :
La Commission Chamberland au Québec avait déjà prouvé l'espionnage policier de journalistes d'enquête. 
Aujourd'hui, la centralisation des données biométriques des citoyens se fait sans réels contre-pouvoirs parlementaires.`,
      `4/4 📢 MOBILISATION CITOYENNE :
Arrêtons de laisser les firmes de conseil privatiser l'État et capter les deniers publics.
Exigeons des commissions d'enquête indépendantes et la levée du secret administratif !
👉 Dossier complet sur Transparence Québec ! #PolQc #TransparenceQC`
    ],
    linkedInPost: `🏛️ ANALYSE DE GOUVERNANCE : DÉRIVE DU MODÈLE TECHNO-BUREAUCRATIQUE AU QUÉBEC ET AU CANADA

Les récents rapports de la Vérificatrice générale du Canada (dossier ArriveCAN) et du Vérificateur général du Québec (dossier SAAQclic et firmes de consultants) documentent une rupture déontologique majeure :

1️⃣ L'illusion de l'externalisation : Des agences de courtage sans personnel technique ont empoché des millions de dollars de commissions sur les fonds publics (cas emblématique de GCStrategies).
2️⃣ Dépossession démocratique : La sous-traitance à des cabinets mondiaux (McKinsey, Deloitte) a supplanté l'expertise de la fonction publique sans reddition de comptes devant les élus.
3️⃣ Données citoyennes & vie privée : Déploiement de plateformes de traçage et de centralisation de données personnelles sans architecture d'audit indépendant.

La restauration de la confiance du public exige une tolérance zéro pour les contrats de complaisance et une réaffirmation stricte de la souveraineté parlementaire sur les outils numériques d'État.

#GouvernancePublique #AuditPublic #Éthique #PolQc #CdnPoli #TransparenceQC`,
    facebookPost: `🛑 COMMENT L'ÉLITE POLITIQUE ET LES FIRMES PRIVÉES ONT CRÉÉ UN SYSTÈME « BIG BROTHER » AVEC VOS TAXES.

Pendant que nos hôpitaux manquent d'infirmières et que la DPJ manque de ressources pour protéger nos enfants, voici où va l'argent public :

❌ ArriveCAN : Une application budgétée à 80 000 $ qui a fini par coûter plus de 60 000 000 $. Une firme de deux personnes dans un sous-sol a touché 19 millions $ sans même programmer.
❌ SAAQclic : Plus de 500 millions $ pour paralyser le Québec avec des files d'attente monstres et des contrats accordés à des firmes de consultants privées.
❌ McKinsey : Des contrats secrets de dizaines de millions accordés par décrets sans appel d'offres.
❌ Surveillance : Des mandats policiers pour espionner les téléphones de journalistes québécois (Commission Chamberland).

Ce n'est pas une théorie du complot : ce sont les RAPPORTS OFFICIELS des Vérificateurs généraux et des Commissions d'enquête.

Partagez ce message massivement. L'argent des contribuables doit servir le bien commun, pas une caste de sous-traitants protégés ! 👇`,
    tiktokScript: {
      hookVisual: 'Graphique qui monte en flèche : 80 000 $ ➡️ 60 000 000 $. Texte géant : ARRESTATION DU PROTOCOLE.',
      hookSpoken: 'Deux gars dans un sous-sol ont empoché 19 millions de dollars de ton argent pour une application de voyage. Et ce n\'est que la pointe de l\'iceberg.',
      bodySteps: [
        {
          visual: 'Rapport officiel de la Vérificatrice générale du Canada.',
          audio: 'La Vérificatrice générale a dit que c\'était la pire gestion de l\'histoire. Des courriels supprimés, des contrats antidatés, zéro contrôle.'
        },
        {
          visual: 'Files d\'attente de la SAAQ et logo McKinsey.',
          audio: 'Au Québec, c\'est plus de 500 millions pour SAAQclic et des millions versés à McKinsey sans appel d\'offres. Pendant ce temps, on trace les données des citoyens.'
        }
      ],
      callToAction: 'Consulte toutes les pièces justificatives et les rapports officiels sur Transparence Québec.'
    },
    pressAlertD1: {
      embargo: 'BULLETIN D\'ALERTE D-1 • DIFFUSION IMMÉDIATE',
      headline: 'CONTRATS PUBLICS IT & DÉRIVES DE SURVEILLANCE : BILAN ACCABLANT DU RÉSEAU DES CONSULTANTS',
      leadParagraph: 'L\'Observatoire Transparence Québec rend public un dossier consolidé sur les dérives contractuelles et de gouvernance associées au virage numérique d\'État au Québec et au Canada, documentant l\'opacité des firmes de conseil et les risques pour les droits démocratiques.',
      bulletPoints: [
        'Multiplication par 750 du coût initial d\'ArriveCAN (de 80 000 $ à ~60M$) ;',
        'Contournement systématique du SEAO et des règles concurrentielles d\'appels d\'offres ;',
        'Rappel des recommandations de la Commission Chamberland sur la protection des données citoyennes et du travail journalistique.'
      ],
      callToAction: 'Demande formelle d\'un audit d\'intégrité global par les commissions parlementaires compétentes.'
    },
    quoteCards: [
      {
        quote: '« Nous avons constaté une mauvaise tenue de dossiers si flagrante qu\'il est impossible de déterminer le coût total réel. »',
        authorOrEntity: 'Karen Hogan, Vérificatrice générale du Canada',
        context: 'Rapport officiel sur l\'application ArriveCAN (2024)'
      },
      {
        quote: '« La surveillance étatique de ceux qui révèlent la corruption est la marque d\'un pouvoir qui redoute sa propre transparence. »',
        authorOrEntity: 'Commission Chamberland',
        context: 'Rapport sur la protection des sources et la surveillance policière'
      }
    ],
    hashtags: ['#ArriveCAN', '#SAAQclic', '#McKinsey', '#PolQc', '#CdnPoli', '#TransparenceQC']
  }
];
