import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bot, 
  Send, 
  Sparkles, 
  ShieldAlert, 
  Scale, 
  HeartHandshake, 
  Building2, 
  FileText, 
  AlertTriangle, 
  CheckCircle2, 
  Copy, 
  Check, 
  ArrowRight, 
  RotateCcw, 
  Lock,
  Layers,
  HelpCircle,
  ExternalLink,
  Flame,
  FileCheck2,
  Eye
} from 'lucide-react';
import { ControlTriggerType, InvestigationAlertLevel } from '../types';
import { safeCopyToClipboard } from '../utils/clipboard';

interface ChatResponseData {
  content: string;
  alertLevel: InvestigationAlertLevel;
  alertLevelLabel: string;
  keyTakeaways: string[];
  actionableSteps: string[];
  sourcesGrounding: string[];
  timestamp?: number;
  id?: string;
}

interface MessageItem {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
  trigger?: ControlTriggerType;
  parsedData?: ChatResponseData;
}

interface InteractiveChatViewProps {
  onTriggerFullInvestigation: (query: string) => void;
  onNavigateToTab: (tab: any) => void;
  initialQuery?: string;
  initialTrigger?: ControlTriggerType;
}

const CONTROL_TRIGGERS: {
  id: ControlTriggerType;
  label: string;
  shortDesc: string;
  icon: any;
  color: string;
  badge: string;
}[] = [
  {
    id: 'DPJ_PIPELINE',
    label: 'Pipeline DPJ & Protection Enfant',
    shortDesc: 'Goulots de signalements, délais de rétention, Commission Laurent et imputabilité ministérielle',
    icon: HeartHandshake,
    color: 'border-amber-500/40 bg-amber-500/10 text-amber-900 dark:text-amber-200',
    badge: 'Avenir des Enfants'
  },
  {
    id: 'CHAOS_ADMIN',
    label: 'Chaos Administratif & Dilution',
    shortDesc: 'Ruptures bureaucratiques, alertes ignorées, opacité CIUSSS et failles de transmission',
    icon: Layers,
    color: 'border-rose-500/40 bg-rose-500/10 text-rose-900 dark:text-rose-200',
    badge: 'Bureaucratie & Crise'
  },
  {
    id: 'PUBLIC_FUNDS_CONTRACTS',
    label: 'Contrats Publics & Gré à Gré',
    shortDesc: 'SEAO, firmes de consultants informatiques, dépassements de coûts et budgets détournés',
    icon: Building2,
    color: 'border-blue-500/40 bg-blue-500/10 text-blue-900 dark:text-blue-200',
    badge: 'Fonds Publics'
  },
  {
    id: 'LOBBY_ETHICS',
    label: 'Lobbyisme & Portes Tournantes',
    shortDesc: 'Cabinets ministériels, Carrefour Lobby, commissaire à l\'éthique et conflits d\'intérêts',
    icon: Scale,
    color: 'border-purple-500/40 bg-purple-500/10 text-purple-900 dark:text-purple-200',
    badge: 'Déontologie'
  },
  {
    id: 'CITIZEN_RECOURSE',
    label: 'Canaux Légaux & Immunité',
    shortDesc: 'Loi D-11.1, Protecteur du citoyen, UPAC, protection anonyme contre les représailles',
    icon: ShieldAlert,
    color: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200',
    badge: 'Protection Lanceur d\'Alerte'
  },
  {
    id: 'BIG_BROTHER_SURVEILLANCE',
    label: '« Big Brother » & Élite IT',
    shortDesc: 'ArriveCAN (60M$), SAAQclic, McKinsey, surveillance policière et contrats secrets',
    icon: Eye,
    color: 'border-cyan-500/40 bg-cyan-500/10 text-cyan-900 dark:text-cyan-200',
    badge: 'Surveillance & Lobby'
  }
];

const PRESET_QUERIES: Record<ControlTriggerType, string[]> = {
  BIG_BROTHER_SURVEILLANCE: [
    "Comment le scandale ArriveCAN est-il passé de 80 000 $ à 60M$ et quel a été le rôle de GCStrategies ?",
    "Quels contrats sans appel d'offres ont été octroyés à McKinsey au fédéral et au Québec ?",
    "Quelles sont les preuves d'espionnage policier de journalistes québécois selon la Commission Chamberland ?",
    "Quels sont les recours légaux contre la centralisation et la surveillance biométrique des citoyens ?"
  ],
  DPJ_PIPELINE: [
    "Pourquoi le pipeline des signalements à la DPJ est-il saturé et quels enfants sont en attente ?",
    "Quelles sont les responsabilités directes du ministre Lionel Carmant dans les retards de la DPJ ?",
    "Quelles recommandations majeures de la Commission Laurent ne sont toujours pas appliquées ?",
    "Comment un intervenant de la DPJ peut-il dénoncer la rétention de signalements sans représailles ?"
  ],
  CHAOS_ADMIN: [
    "Comment le chaos dans la transmission des dossiers entre CISSS et DPJ met-il en danger les usagers ?",
    "Pourquoi les réformes de structures comme Santé Québec ne règlent-elles pas les goulots d'étranglement ?",
    "Quelles sont les preuves documentées d'alertes étouffées dans les ministères québécois ?"
  ],
  PUBLIC_FUNDS_CONTRACTS: [
    "Combien ont coûté les firmes de consultants privées dans la gestion informatique de la santé ?",
    "Quels contrats de gré à gré dans le SEAO ont contourné les appels d'offres publics récemment ?",
    "Comment le fiasco SAAQclic a-t-il privé d'autres ministères de budgets vitaux ?"
  ],
  LOBBY_ETHICS: [
    "Quels sont les faits vérifiés et documents décachetés de New York (SDNY) liant le réseau Jeffrey Epstein et Jean-Luc Brunel à Montréal et au Québec ?",
    "Quels sont les cas récents de portes tournantes entre les cabinets politiques et les lobbyistes au Québec ?",
    "Que prévoient les règles du Commissaire à l'éthique pour les ministres démissionnaires ?",
    "Comment vérifier si une rencontre avec un ministre a été inscrite à Carrefour Lobby Québec ?"
  ],
  CITIZEN_RECOURSE: [
    "Comment déposer une divulgation protégée au Protecteur du citoyen sous la Loi D-11.1 ?",
    "Quelle est la différence entre signaler à l'UPAC et porter plainte au Commissaire à l'éthique ?",
    "Quelles garanties légales existent contre le congédiement ou le harcèlement après une alerte ?"
  ]
};

export const InteractiveChatView: React.FC<InteractiveChatViewProps> = ({
  onTriggerFullInvestigation,
  onNavigateToTab,
  initialQuery,
  initialTrigger,
}) => {
  const [selectedTrigger, setSelectedTrigger] = useState<ControlTriggerType>(initialTrigger || 'DPJ_PIPELINE');
  const [inputMessage, setInputMessage] = useState(initialQuery || '');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    if (initialTrigger) {
      setSelectedTrigger(initialTrigger);
    }
    if (initialQuery) {
      setInputMessage(initialQuery);
    }
  }, [initialQuery, initialTrigger]);

  const [messages, setMessages] = useState<MessageItem[]>([
    {
      id: 'welcome-msg',
      role: 'assistant',
      content: `Bienvenue sur le **Dialogue d'Investigation Transparence Québec**.\n\nCe canal direct vous permet d'interroger en direct l'oracle documentaire sur les dysfonctionnements institutionnels, les blocages de la DPJ, les contrats publics et les recours juridiques. Aucun faux-fuyant, aucune langue de bois : uniquement des faits documentés, les lois en vigueur et les rapports officiels.`,
      timestamp: Date.now(),
      trigger: 'DPJ_PIPELINE',
      parsedData: {
        content: `Bienvenue sur le **Dialogue d'Investigation Transparence Québec**.\n\nCe canal direct vous permet d'interroger en direct l'oracle documentaire sur les dysfonctionnements institutionnels, les blocages de la DPJ, les contrats publics et les recours juridiques. Aucun faux-fuyant, aucune langue de bois : uniquement des faits documentés, les lois en vigueur et les rapports officiels.`,
        alertLevel: 'CONFORME_DOCUMENTÉ',
        alertLevelLabel: 'Vigie Citoyenne Active & Accès Direct',
        keyTakeaways: [
          "Canal d'investigation réactif pour décortiquer le pipeline de la DPJ et la reddition de comptes.",
          "Confrontation systématique aux lois québécoises (LPJ, Loi D-11.1, LCOP) et à la Commission Laurent.",
          "Protection de l'intérêt supérieur des enfants et surveillance impartiale des fonds publics."
        ],
        actionableSteps: [
          "Sélectionnez un déclencheur de contrôle ci-dessus (ex: Pipeline DPJ ou Chaos Administratif).",
          "Posez votre question ou utilisez une des requêtes rapides suggérées.",
          "Utilisez les options pour exporter un rapport d'investigation officiel complet."
        ],
        sourcesGrounding: [
          "Commission spéciale sur les droits des enfants (Commission Laurent)",
          "Protecteur du citoyen du Québec",
          "Journal des débats de l'Assemblée nationale"
        ]
      }
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputMessage).trim();
    if (!query || isLoading) return;

    const userMsgId = `user-${Date.now()}`;
    const newMsg: MessageItem = {
      id: userMsgId,
      role: 'user',
      content: query,
      timestamp: Date.now(),
      trigger: selectedTrigger
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Build lightweight conversation history
      const history = messages
        .filter((m) => m.id !== 'welcome-msg')
        .map((m) => ({
          role: m.role,
          content: m.content
        }));

      const res = await fetch('/api/transparence/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          history,
          controlTrigger: selectedTrigger
        })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Erreur lors de la réponse de l'analyste.");
      }

      if (data.data) {
        const parsed: ChatResponseData = data.data;
        const textContent = parsed.content || (parsed as any).reply || "";
        const assistantMsg: MessageItem = {
          id: parsed.id || `bot-${Date.now()}`,
          role: 'assistant',
          content: textContent,
          timestamp: Date.now(),
          trigger: selectedTrigger,
          parsedData: parsed
        };
        setMessages((prev) => [...prev, assistantMsg]);
      }
    } catch (err: any) {
      const errorMsg: MessageItem = {
        id: `err-${Date.now()}`,
        role: 'assistant',
        content: `⚠️ **Erreur lors de l'investigation :** ${err?.message || "Impossible de contacter le moteur d'investigation en temps réel. Veuillez réessayer."}`,
        timestamp: Date.now(),
        trigger: selectedTrigger
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyText = async (id: string, text: string) => {
    const success = await safeCopyToClipboard(text);
    if (success) {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: 'welcome-reset',
        role: 'assistant',
        content: "Dialogue réinitialisé. Choisissez un déclencheur de contrôle d'investigation ci-dessus pour entamer une nouvelle consultation citoyenne.",
        timestamp: Date.now(),
        trigger: selectedTrigger
      }
    ]);
  };

  return (
    <div className="space-y-6">
      {/* Control Triggers Bar ("Triggers d'Imputabilité") */}
      <div 
        id="control-triggers-section"
        className="rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-5 sm:p-7 shadow-sm space-y-4"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-stone-100 dark:border-stone-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-blue-900 text-white dark:bg-blue-800 shadow-xs">
              <Bot className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold font-serif text-stone-900 dark:text-stone-100 flex items-center gap-2">
                <span>Déclencheurs d'Enquête & Contrôle</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 font-bold border border-blue-200 dark:border-blue-900">
                  Node SDK AI Direct
                </span>
              </h2>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                Sélectionnez le filtre d'imputabilité pour orienter l'analyse documentaire en temps réel
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleResetChat}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-xs font-semibold text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-700 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Réinitialiser le Chat</span>
          </button>
        </div>

        {/* Triggers Buttons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
          {CONTROL_TRIGGERS.map((trigger) => {
            const Icon = trigger.icon;
            const isSelected = selectedTrigger === trigger.id;
            return (
              <button
                key={trigger.id}
                type="button"
                onClick={() => setSelectedTrigger(trigger.id)}
                className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-2 group ${
                  isSelected
                    ? `${trigger.color} ring-2 ring-blue-600/30 dark:ring-blue-400/30 shadow-xs`
                    : 'border-stone-200 dark:border-stone-800 bg-stone-50/60 dark:bg-stone-950/60 hover:bg-white dark:hover:bg-stone-900 text-stone-700 dark:text-stone-300'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-white/80 dark:bg-stone-900/80 shadow-2xs' : 'bg-stone-200/70 dark:bg-stone-800/80'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-wider opacity-80">
                    {trigger.badge}
                  </span>
                </div>
                <div>
                  <h4 className="text-xs font-bold font-serif leading-tight">
                    {trigger.label}
                  </h4>
                  <p className="text-[10px] opacity-75 line-clamp-2 mt-0.5 leading-snug">
                    {trigger.shortDesc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Quick Question Chips for Selected Trigger */}
        <div className="pt-2">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-stone-600 dark:text-stone-300">
              Questions suggérées pour ce déclencheur :
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {PRESET_QUERIES[selectedTrigger].map((q, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setInputMessage(q);
                  handleSendMessage(q);
                }}
                disabled={isLoading}
                className="text-left px-3 py-1.5 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950/80 hover:border-blue-500/50 hover:bg-blue-50/40 dark:hover:bg-blue-950/40 text-xs text-stone-800 dark:text-stone-200 transition-colors cursor-pointer"
              >
                <span>« {q} »</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Chat Dialogue Container */}
      <div 
        id="chat-dialogue-container"
        className="rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-5 sm:p-7 shadow-sm space-y-6 flex flex-col min-h-[500px]"
      >
        <div className="flex-1 space-y-6 overflow-y-auto max-h-[600px] pr-2">
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
            >
              {/* User Bubble */}
              {msg.role === 'user' ? (
                <div className="max-w-2xl bg-blue-900 text-white p-4 rounded-2xl rounded-tr-xs shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between gap-3 text-[10px] text-blue-200">
                    <span className="font-bold uppercase tracking-wider">Demande Citoyenne</span>
                    <span>{new Date(msg.timestamp).toLocaleTimeString('fr-CA', { hour: '2-digit', minute: '2-digit' })}</span>
                  </div>
                  <p className="text-sm font-medium leading-relaxed">
                    {msg.content}
                  </p>
                </div>
              ) : (
                /* Assistant Bubble */
                <div className="max-w-3xl w-full bg-stone-50 dark:bg-stone-950 border border-stone-200/80 dark:border-stone-800/80 p-5 sm:p-6 rounded-3xl rounded-tl-xs shadow-2xs space-y-4">
                  {/* Status Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-stone-200/70 dark:border-stone-800">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-blue-900 text-white flex items-center justify-center text-xs font-bold">
                        <Scale className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-serif font-bold text-xs text-stone-900 dark:text-stone-100">
                        Transparence Québec • Analyse Rigueur
                      </span>
                    </div>

                    {msg.parsedData?.alertLevelLabel && (
                      <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                        msg.parsedData.alertLevel === 'INFRACTION_AVÉRÉE'
                          ? 'bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-500/30'
                          : msg.parsedData.alertLevel === 'ZONE_GRISE_DÉONTOLOGIQUE'
                          ? 'bg-amber-500/10 text-amber-800 dark:text-amber-300 border-amber-500/30'
                          : 'bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border-emerald-500/30'
                      }`}>
                        {msg.parsedData.alertLevelLabel}
                      </span>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="text-sm text-stone-800 dark:text-stone-200 leading-relaxed whitespace-pre-line font-sans space-y-2">
                    {msg.content}
                  </div>

                  {/* Key Takeaways */}
                  {msg.parsedData?.keyTakeaways && msg.parsedData.keyTakeaways.length > 0 && (
                    <div className="p-4 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-2">
                      <h5 className="text-xs font-bold uppercase tracking-wider text-blue-900 dark:text-blue-300 flex items-center gap-1.5 font-serif">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Faits Saillants & Constats Incontestables :
                      </h5>
                      <ul className="space-y-1.5 text-xs text-stone-700 dark:text-stone-300">
                        {msg.parsedData.keyTakeaways.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold shrink-0">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Actionable Steps for Citizens / Whistleblowers */}
                  {msg.parsedData?.actionableSteps && msg.parsedData.actionableSteps.length > 0 && (
                    <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-500/20 space-y-2">
                      <h5 className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-200 flex items-center gap-1.5 font-serif">
                        <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
                        Que Faire Concrètement ? (Leviers d'Action Légale) :
                      </h5>
                      <ul className="space-y-1.5 text-xs text-stone-700 dark:text-stone-300">
                        {msg.parsedData.actionableSteps.map((step, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold shrink-0">➔</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Grounding Sources */}
                  {msg.parsedData?.sourcesGrounding && msg.parsedData.sourcesGrounding.length > 0 && (
                    <div className="pt-2 flex flex-wrap items-center gap-2 text-[11px] text-stone-500 dark:text-stone-400">
                      <span className="font-semibold">Sources officielles :</span>
                      {msg.parsedData.sourcesGrounding.map((src, srcIdx) => (
                        <span key={srcIdx} className="px-2 py-0.5 rounded-md bg-stone-200/70 dark:bg-stone-800 text-stone-700 dark:text-stone-300 font-medium">
                          {src}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Actions under message */}
                  <div className="pt-3 border-t border-stone-200/70 dark:border-stone-800 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleCopyText(msg.id, msg.content)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-xs font-medium text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
                      >
                        {copiedId === msg.id ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-600 font-bold">Copié !</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copier</span>
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => onNavigateToTab('whistleblower_guide')}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-xs font-medium text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
                      >
                        <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
                        <span>Canaux de Recours</span>
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => onTriggerFullInvestigation(msg.content.slice(0, 150))}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-blue-900 hover:bg-blue-800 dark:bg-blue-700 dark:hover:bg-blue-600 text-white text-xs font-bold transition-all cursor-pointer shadow-2xs"
                    >
                      <span>Transformer en Rapport d'Investigation Officiel</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          ))}

          {isLoading && (
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 w-fit">
              <div className="w-4 h-4 border-2 border-blue-900/30 border-t-blue-900 dark:border-blue-400/30 dark:border-t-blue-400 rounded-full animate-spin" />
              <span className="text-xs font-bold text-stone-600 dark:text-stone-300">
                L'oracle examine les archives du Québec, la LPJ et les registres publics...
              </span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="pt-4 border-t border-stone-100 dark:border-stone-800 space-y-3"
        >
          <div className="relative">
            <textarea
              rows={3}
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              placeholder="Posez votre question sur le pipeline DPJ, un goulot de signalements, un contrat public, une défaillance de gestion ou un recours légal (ex: 'Qui est responsable des délais de traitement des signalements d'enfants ?', 'Comment dénoncer une directive illégale ?')..."
              className="w-full rounded-2xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-950 p-4 text-sm text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-blue-600 resize-none pr-14"
              disabled={isLoading}
            />

            <button
              type="submit"
              disabled={!inputMessage.trim() || isLoading}
              className={`absolute right-3.5 bottom-4 p-2.5 rounded-xl shadow-xs transition-all cursor-pointer ${
                !inputMessage.trim() || isLoading
                  ? 'bg-stone-200 dark:bg-stone-800 text-stone-400 cursor-not-allowed'
                  : 'bg-blue-900 hover:bg-blue-800 dark:bg-blue-700 dark:hover:bg-blue-600 text-white active:scale-95'
              }`}
              title="Envoyer la question"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 dark:text-stone-400 gap-2">
            <span className="flex items-center gap-1.5">
              <Lock className="w-3 h-3 text-emerald-600" />
              Échange direct sécurisé via Node SDK. Aucune censure sur les dossiers d'intérêt public.
            </span>
            <span>Appuyez sur Entrée pour soumettre</span>
          </div>
        </form>
      </div>
    </div>
  );
};
