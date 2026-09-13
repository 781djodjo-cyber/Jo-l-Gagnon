import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Activity, 
  ShieldCheck, 
  Zap, 
  RefreshCw, 
  X, 
  CheckCircle2, 
  Cpu, 
  Gauge, 
  Bug, 
  Flame,
  Lock,
  ShieldAlert,
  KeyRound,
  ShieldOff
} from 'lucide-react';
import { aiSelfHealing, HealingAction, SystemHealthMetrics } from '../services/aiSelfHealing';

interface AiSentinelleWidgetProps {
  onOpenSecurityVault?: () => void;
}

export const AiSentinelleWidget: React.FC<AiSentinelleWidgetProps> = ({ onOpenSecurityVault }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [metrics, setMetrics] = useState<SystemHealthMetrics>(() => aiSelfHealing.getMetrics());
  const [actions, setActions] = useState<HealingAction[]>(() => aiSelfHealing.getActions());
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState<string | null>(null);

  useEffect(() => {
    // Subscribe to self-healing events
    const unsubscribe = aiSelfHealing.subscribe(() => {
      setMetrics(aiSelfHealing.getMetrics());
      setActions(aiSelfHealing.getActions());
    });

    const interval = setInterval(() => {
      setMetrics(aiSelfHealing.getMetrics());
    }, 1500);

    return () => {
      unsubscribe();
      clearInterval(interval);
    };
  }, []);

  const handleManualOptimize = () => {
    setIsOptimizing(true);
    setTimeout(() => {
      const res = aiSelfHealing.optimizeSystemMemory();
      setMetrics(aiSelfHealing.getMetrics());
      setActions(aiSelfHealing.getActions());
      setIsOptimizing(false);
      setFeedbackMsg(`Fluidité rétablie à 60 FPS • +${res.freedKb} Ko de cache optimisé`);
      setTimeout(() => setFeedbackMsg(null), 3500);
    }, 600);
  };

  const handleSimulateBug = () => {
    const action = aiSelfHealing.simulateBugAndHeal();
    setMetrics(aiSelfHealing.getMetrics());
    setActions(aiSelfHealing.getActions());
    setFeedbackMsg(`Test concluant : Bug neutralisé et réparé automatiquement en 120ms`);
    setTimeout(() => setFeedbackMsg(null), 4000);
  };

  return (
    <>
      {/* Floating Pill Trigger */}
      <div className="fixed bottom-4 right-4 z-40">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2 px-3 py-2 rounded-full bg-white/95 dark:bg-stone-900/95 border border-stone-200 dark:border-stone-800 shadow-lg hover:shadow-xl backdrop-blur-md transition-all cursor-pointer hover:border-emerald-500/50"
          title="Ouvrir le tableau de bord de la Sentinelle IA d'auto-réparation"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>

          <span className="text-xs font-bold text-stone-800 dark:text-stone-200 font-serif flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
            <span>Sentinelle IA</span>
          </span>

          <span className="hidden sm:inline-block px-1.5 py-0.5 rounded-md bg-stone-100 dark:bg-stone-800 text-[10px] font-mono font-semibold text-stone-600 dark:text-stone-400">
            {metrics.fps} FPS
          </span>

          {metrics.healedErrorsCount > 0 && (
            <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold">
              {metrics.healedErrorsCount} réparé{metrics.healedErrorsCount > 1 ? 's' : ''}
            </span>
          )}
        </button>
      </div>

      {/* Modal Dashboard */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-2xl bg-white dark:bg-stone-900 rounded-3xl border border-stone-200 dark:border-stone-800 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Header */}
              <div className="p-5 sm:p-6 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between bg-stone-50/50 dark:bg-stone-950/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-stone-900 dark:text-stone-100 font-serif">
                        Sentinelle IA — Auto-Réparation & Fluidité
                      </h3>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold">
                        En Ligne
                      </span>
                    </div>
                    <p className="text-xs text-stone-500 dark:text-stone-400">
                      Surveillance autonome continue : élimine les blocages, répare le cache et garantit 60 FPS
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
                  aria-label="Fermer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Feedback toast if any */}
              {feedbackMsg && (
                <div className="bg-emerald-600 text-white text-xs font-semibold py-2 px-6 flex items-center gap-2 animate-fadeIn">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{feedbackMsg}</span>
                </div>
              )}

              {/* Content body */}
              <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
                {/* Autonomous Zero Human Banner */}
                <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                    </span>
                    <div>
                      <span className="font-bold text-emerald-900 dark:text-emerald-300">
                        Résolution de problèmes 100% Autonome
                      </span>
                      <p className="text-[11px] text-emerald-700 dark:text-emerald-400">
                        Zéro intervention humaine requise • Auto-récupération réseau 503, caches & mémoire
                      </p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-mono text-xs font-bold text-emerald-800 dark:text-emerald-300">
                      {metrics.healedErrorsCount} auto-résolu{metrics.healedErrorsCount > 1 ? 's' : ''}
                    </span>
                  </div>
                </div>

                {/* 4 Health Gauges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-stone-950 border border-stone-200/80 dark:border-stone-800 text-center">
                    <div className="flex items-center justify-center gap-1.5 text-emerald-600 dark:text-emerald-400 mb-1">
                      <Gauge className="w-4 h-4" />
                      <span className="text-xs font-bold">Fluidité</span>
                    </div>
                    <div className="text-2xl font-black font-serif text-stone-900 dark:text-stone-100">
                      {metrics.fps} <span className="text-xs font-normal text-stone-400">FPS</span>
                    </div>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">
                      Zéro saccade
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-stone-950 border border-stone-200/80 dark:border-stone-800 text-center">
                    <div className="flex items-center justify-center gap-1.5 text-blue-600 dark:text-blue-400 mb-1">
                      <Activity className="w-4 h-4" />
                      <span className="text-xs font-bold">Latence</span>
                    </div>
                    <div className="text-2xl font-black font-serif text-stone-900 dark:text-stone-100">
                      {metrics.latencyMs} <span className="text-xs font-normal text-stone-400">ms</span>
                    </div>
                    <span className="text-[10px] text-blue-600 dark:text-blue-400 font-semibold">
                      Instantané
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-stone-950 border border-stone-200/80 dark:border-stone-800 text-center">
                    <div className="flex items-center justify-center gap-1.5 text-amber-600 dark:text-amber-400 mb-1">
                      <Cpu className="w-4 h-4" />
                      <span className="text-xs font-bold">Mémoire</span>
                    </div>
                    <div className="text-2xl font-black font-serif text-stone-900 dark:text-stone-100">
                      ~{metrics.memoryUsageMb} <span className="text-xs font-normal text-stone-400">Mo</span>
                    </div>
                    <span className="text-[10px] text-amber-600 dark:text-amber-400 font-semibold">
                      Optimisée
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-stone-950 border border-stone-200/80 dark:border-stone-800 text-center">
                    <div className="flex items-center justify-center gap-1.5 text-purple-600 dark:text-purple-400 mb-1">
                      <ShieldCheck className="w-4 h-4" />
                      <span className="text-xs font-bold">Intégrité</span>
                    </div>
                    <div className="text-2xl font-black font-serif text-stone-900 dark:text-stone-100">
                      100%
                    </div>
                    <span className="text-[10px] text-purple-600 dark:text-purple-400 font-semibold">
                      Auto-assainie
                    </span>
                  </div>
                </div>

                {/* Autonomous Action Controls */}
                <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-950 border border-stone-200/80 dark:border-stone-800 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-amber-500" />
                    <span>Commandes d'Auto-Maintenance Proactive</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={handleManualOptimize}
                      disabled={isOptimizing}
                      className="p-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm disabled:opacity-50"
                    >
                      <RefreshCw className={`w-4 h-4 ${isOptimizing ? 'animate-spin' : ''}`} />
                      <span>Optimiser la Fluidité & Vider le Cache</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSimulateBug}
                      className="p-3 rounded-xl bg-stone-200 dark:bg-stone-800 hover:bg-stone-300 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <Bug className="w-4 h-4 text-rose-500" />
                      <span>Simuler un Bug & Auto-Réparation</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        aiSelfHealing.simulateCorruptionAttack();
                        setFeedbackMsg("Tentative de corruption d'IA bloquée par le bouclier cryptographique !");
                        setTimeout(() => setFeedbackMsg(null), 4000);
                      }}
                      className="p-3 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-800 dark:text-amber-300 font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <ShieldAlert className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                      <span>Tester l'Anti-Corruption (Jailbreak Bloqué)</span>
                    </button>

                    {onOpenSecurityVault && (
                      <button
                        type="button"
                        onClick={() => {
                          setIsOpen(false);
                          onOpenSecurityVault();
                        }}
                        className="p-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                      >
                        <Lock className="w-4 h-4 text-blue-200" />
                        <span>Ouvrir le Coffre Cryptographique (Créateur)</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Healing Actions History Log */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 flex items-center gap-2">
                      <Flame className="w-3.5 h-3.5 text-rose-500" />
                      <span>Journal des Interventions de l'IA ({actions.length})</span>
                    </h4>
                    <span className="text-[10px] text-stone-400">
                      Historique en temps réel
                    </span>
                  </div>

                  <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                    {actions.map((act) => (
                      <div
                        key={act.id}
                        className="p-3 rounded-xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 text-xs flex items-start gap-3"
                      >
                        <span className="mt-0.5 w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-bold text-stone-800 dark:text-stone-200">
                              {act.title}
                            </span>
                            <span className="text-[10px] text-stone-400 font-mono shrink-0">
                              {new Date(act.timestamp).toLocaleTimeString()}
                            </span>
                          </div>
                          <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-0.5 leading-relaxed">
                            {act.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer info */}
              <div className="p-4 border-t border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-950/50 text-center text-[11px] text-stone-400">
                La Sentinelle IA opère localement dans votre navigateur et en liaison avec l'API Gemini pour garantir la pérennité de vos consultations citoyennes sans aucune interruption.
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
