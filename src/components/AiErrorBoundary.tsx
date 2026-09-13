import React, { ErrorInfo, ReactNode } from 'react';
import { ShieldCheck, RefreshCw, AlertTriangle, Sparkles, Home } from 'lucide-react';
import { aiSelfHealing } from '../services/aiSelfHealing';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  isAutoHealing: boolean;
  healed: boolean;
}

export class AiErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      isAutoHealing: false,
      healed: false,
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
      isAutoHealing: true,
      healed: false
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ errorInfo });

    // Inform the AI Self-Healing Engine
    aiSelfHealing.handleGlobalError(error, 'REACT_COMPONENT_CRASH', errorInfo.componentStack || '');

    // Attempt automatic healing after brief scan animation
    setTimeout(() => {
      aiSelfHealing.sanitizeLocalStorage();
      aiSelfHealing.optimizeSystemMemory();
      this.setState({ isAutoHealing: false, healed: true });
    }, 1200);
  }

  private handleReset = () => {
    aiSelfHealing.optimizeSystemMemory();
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      isAutoHealing: false,
      healed: false
    });
  };

  private handleHome = () => {
    aiSelfHealing.sanitizeLocalStorage();
    window.location.href = window.location.pathname;
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-stone-900 text-stone-100 flex items-center justify-center p-4">
          <div className="max-w-xl w-full bg-stone-800/90 border border-stone-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden">
            {/* Ambient AI Glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                <Sparkles className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    Sentinelle IA
                  </span>
                  <span className="text-xs text-stone-400">• Protection Active</span>
                </div>
                <h2 className="text-lg font-bold font-serif text-stone-100 mt-0.5">
                  Anomalie Interceptée & Auto-Réparée
                </h2>
              </div>
            </div>

            {this.state.isAutoHealing ? (
              <div className="py-8 text-center space-y-4">
                <RefreshCw className="w-8 h-8 text-emerald-400 animate-spin mx-auto" />
                <p className="text-sm font-medium text-stone-300">
                  Diagnostic autonome en cours : isolement de l'erreur et restauration de l'intégrité...
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-stone-900/80 border border-stone-700/60 text-xs text-stone-300 font-mono overflow-x-auto">
                  <div className="flex items-center gap-2 text-rose-400 font-bold mb-1">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Incident neutralisé :</span>
                  </div>
                  <p className="line-clamp-2 text-stone-400">
                    {this.state.error?.message || 'Erreur inattendue d\'exécution du composant'}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-800/50 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-emerald-200 leading-relaxed">
                    <strong className="block text-emerald-300 font-semibold mb-0.5">
                      Mesures d'auto-guérison appliquées :
                    </strong>
                    Nettoyage du cache mémoire, vérification des clés locales et réinitialisation sécurisée de l'état d'affichage pour préserver votre navigation sans perte de données.
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="button"
                    onClick={this.handleReset}
                    className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-lg shadow-emerald-600/20"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>Reprendre la navigation fluide</span>
                  </button>

                  <button
                    type="button"
                    onClick={this.handleHome}
                    className="py-3 px-4 rounded-xl bg-stone-700 hover:bg-stone-600 text-stone-200 font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <Home className="w-4 h-4" />
                    <span>Accueil sécurisé</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
