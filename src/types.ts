export type InvestigationAlertLevel =
  | 'INFRACTION_AVÉRÉE'
  | 'ENQUÊTE_OFFICIELLE'
  | 'ZONE_GRISE_DÉONTOLOGIQUE'
  | 'SOUPÇON_NON_ÉTAYÉ'
  | 'CONFORME_DOCUMENTÉ';

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  sourceType: 'Assemblée nationale' | 'Rapport officiel' | 'Enquête journalistique' | 'Décision judiciaire / UPAC' | 'Autre';
}

export interface InterestLink {
  actorFrom: string;
  actorTo: string;
  relationship: string;
  riskLevel: 'Critique' | 'Modéré' | 'Faible';
  legalStatus: string;
}

export interface AssemblyReference {
  topic: string;
  context: string; // ex: "Période de questions orales (Salon bleu)", "Commission parlementaire"
  quoteOrSummary: string;
  dateOrSession?: string;
}

export interface LegalRecourse {
  body: string; // ex: "Commissaire à l'éthique", "UPAC", "Vérificateur général", "Protecteur du citoyen"
  procedure: string;
  applicableLaw: string;
  whistleblowerProtection: string;
}

export interface InvestigationReport {
  id?: string;
  timestamp?: number;
  subject: string;
  alertLevel: InvestigationAlertLevel;
  alertLevelLabel: string;
  integrityScore: number; // 0 = corruption avérée / grave manquement, 100 = intégrité et transparence totale
  executiveSummary: string;
  coreFinding: string;
  verifiedFacts: string[];
  interestLinks: InterestLink[];
  assemblyNationalEvents: AssemblyReference[];
  officialReportsAndJudgments: string[];
  journalisticInvestigations: string[];
  criticalVulnerabilities: string[]; // failles déontologiques ou contractuelles
  legalRecourses: LegalRecourse[];
  impactOnCitizensAndChildren: string; // Impact sur l'avenir public, les fonds des écoles, garderies, services publics
  sourcesGrounding: string[];
}

export type ViewTab = 'investigate' | 'chat_ai' | 'cases' | 'network' | 'speech_check' | 'whistleblower_guide';

export type ControlTriggerType =
  | 'DPJ_PIPELINE'
  | 'CHAOS_ADMIN'
  | 'PUBLIC_FUNDS_CONTRACTS'
  | 'LOBBY_ETHICS'
  | 'CITIZEN_RECOURSE';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
  triggerType?: ControlTriggerType;
  sourcesGrounding?: string[];
  alertLevel?: InvestigationAlertLevel;
}

export interface SavedDossier {
  id: string;
  timestamp: number;
  subject: string;
  report: InvestigationReport;
}
