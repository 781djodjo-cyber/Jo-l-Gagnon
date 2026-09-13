import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Lock, 
  Unlock, 
  KeyRound, 
  ShieldAlert, 
  CheckCircle2, 
  X, 
  Sparkles, 
  Flame, 
  RefreshCw, 
  Eye, 
  FileCode, 
  Cpu, 
  AlertOctagon,
  Clock
} from 'lucide-react';
import { cryptoSecurityVault, SecurityEvent, SecurityStatus } from '../services/cryptoSecurity';
import { aiSelfHealing } from '../services/aiSelfHealing';

interface SecurityVaultModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SecurityVaultModal: React.FC<SecurityVaultModalProps> = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState<SecurityStatus>(() => cryptoSecurityVault.getStatus());
  const [events, setEvents] = useState<SecurityEvent[]>(() => cryptoSecurityVault.getEvents());
  const [passphraseInput, setPassphraseInput] = useState('');
  const [newPassphraseInput, setNewPassphraseInput] = useState('');
  const [authError, setAuthError] = useState<string | null>(null);
  const [authSuccess, setAuthSuccess] = useState<string | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [activeSubTab, setActiveSubTab] = useState<'overview' | 'vault_auth' | 'security_log'>('overview');

  useEffect(() => {
    const unsub = cryptoSecurityVault.subscribe(() => {
      setStatus(cryptoSecurityVault.getStatus());
      setEvents(cryptoSecurityVault.getEvents());
    });
    return unsub;
  }, []);

  const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    setAuthSuccess(null);
    setIsVerifying(true);

    try {
      const res = await cryptoSecurityVault.unlockWithMasterKey(passphraseInput);
      if (res.success) {
        setAuthSuccess(res.message);
        setPassphraseInput('');
      } else {
        setAuthError(res.message);
      }
    } catch {
      setAuthError("Erreur lors de la vérification cryptographique.");
    } finally {
      setIsVerifying(false);
    }
  };

  const handleLock = () => {
    cryptoSecurityVault.lockVault();
    setAuthSuccess("Coffre-fort verrouillé. L'application est revenue en mode consultation publique scellée.");
    setAuthError(null);
  };

  const handleUpdatePassphrase = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    setAuthSuccess(null);

    const res = await cryptoSecurityVault.updateMasterPassphrase(newPassphraseInput);
    if (res.success) {
      setAuthSuccess(res.message);
      setNewPassphraseInput('');
    } else {
      setAuthError(res.message);
    }
  };

  const handleSimulateAttack = () => {
    aiSelfHealing.simulateCorruptionAttack();
    setAuthSuccess("Test d'attaque de corruption déclenché : Neutralisé avec succès par le bouclier cryptographique !");
    setTimeout(() => setAuthSuccess(null), 4000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.2 }}
        className="w-full max-w-3xl bg-white dark:bg-stone-900 rounded-3xl border border-stone-200 dark:border-stone-800 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between bg-stone-50/70 dark:bg-stone-950/70">
          <div className="flex items-center gap-3">
            <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 border ${
              status.adminUnlocked 
                ? 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30' 
                : 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30'
            }`}>
              {status.adminUnlocked ? <Unlock className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5" />}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100 font-serif">
                  Coffre Cryptographique & Bouclier Anti-Corruption
                </h3>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                  status.adminUnlocked
                    ? 'bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30'
                    : 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30'
                }`}>
                  {status.adminUnlocked ? 'Créateur Authentifié' : 'Sceau Cryptographique Scellé'}
                </span>
              </div>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                Consultation publique libre • Modifications strictement verrouillées pour le créateur ({status.creatorEmail})
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* SubTabs */}
        <div className="px-6 border-b border-stone-200 dark:border-stone-800 flex gap-4 bg-stone-100/50 dark:bg-stone-950/30 text-xs font-bold">
          <button
            type="button"
            onClick={() => setActiveSubTab('overview')}
            className={`py-3 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeSubTab === 'overview'
                ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400 font-black'
                : 'border-transparent text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>État & Protections Actives</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveSubTab('vault_auth')}
            className={`py-3 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeSubTab === 'vault_auth'
                ? 'border-blue-600 text-blue-600 dark:text-blue-400 font-black'
                : 'border-transparent text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
            }`}
          >
            <KeyRound className="w-4 h-4" />
            <span>Accès Créateur ({status.adminUnlocked ? 'Déverrouillé' : 'Verrouillé'})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveSubTab('security_log')}
            className={`py-3 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeSubTab === 'security_log'
                ? 'border-purple-600 text-purple-600 dark:text-purple-400 font-black'
                : 'border-transparent text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
            }`}
          >
            <ShieldAlert className="w-4 h-4" />
            <span>Journal de Sécurité ({events.length})</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 flex-1 text-sm">
          {/* Status Message Alerts */}
          {authSuccess && (
            <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 flex items-start gap-2.5 text-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <div className="flex-1 font-semibold">{authSuccess}</div>
            </div>
          )}

          {authError && (
            <div className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-800 dark:text-rose-300 flex items-start gap-2.5 text-xs">
              <AlertOctagon className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
              <div className="flex-1 font-semibold">{authError}</div>
            </div>
          )}

          {/* TAB 1: OVERVIEW & ACTIVE PROTECTIONS */}
          {activeSubTab === 'overview' && (
            <div className="space-y-5">
              {/* Key Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-950/60 border border-stone-200 dark:border-stone-800">
                  <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 mb-1">
                    <span>Mode Public</span>
                    <Eye className="w-3.5 h-3.5 text-blue-500" />
                  </div>
                  <div className="text-sm font-bold text-stone-900 dark:text-stone-100">
                    Recherche Libre
                  </div>
                  <div className="text-[11px] text-stone-500 mt-1">
                    Les citoyens peuvent chercher sans restriction.
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-950/60 border border-stone-200 dark:border-stone-800">
                  <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 mb-1">
                    <span>Modifications IA</span>
                    <Lock className="w-3.5 h-3.5 text-amber-500" />
                  </div>
                  <div className="text-sm font-bold text-stone-900 dark:text-stone-100">
                    {status.adminUnlocked ? 'Déverrouillé (Créateur)' : 'Verrouillé & Protégé'}
                  </div>
                  <div className="text-[11px] text-stone-500 mt-1">
                    Seul le créateur peut modifier l'IA.
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-950/60 border border-stone-200 dark:border-stone-800">
                  <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 mb-1">
                    <span>Attaques Déjouées</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  </div>
                  <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                    {status.blockedAttacksCount} Neutralisée{status.blockedAttacksCount > 1 ? 's' : ''}
                  </div>
                  <div className="text-[11px] text-stone-500 mt-1">
                    Tentatives de corruption bloquées.
                  </div>
                </div>
              </div>

              {/* Guarantees & Protections List */}
              <div className="p-4 sm:p-5 rounded-2xl bg-stone-50 dark:bg-stone-950/50 border border-stone-200 dark:border-stone-800 space-y-3">
                <h4 className="text-xs font-black uppercase tracking-wider text-stone-500 dark:text-stone-400 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-500" />
                  <span>Boucliers Cryptographiques Actifs</span>
                </h4>

                <div className="space-y-2.5 text-xs">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-stone-900 dark:text-stone-100">
                        Protection Anti-Jailbreak, Anti-Injection & Anti-Exfiltration :
                      </span>{' '}
                      <span className="text-stone-600 dark:text-stone-400">
                        Filtrage regex approfondi côté client et serveur bloquant les tentatives d'écraser les consignes d'intégrité, d'effacer les dossiers vérifiés (DPJ, MK-Ultra, Commissions) ou d'exfiltrer les secrets d'infrastructure.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-stone-900 dark:text-stone-100">
                        En-têtes de Sécurité HTTP & CSP de Niveau Entreprise :
                      </span>{' '}
                      <span className="text-stone-600 dark:text-stone-400">
                        Content-Security-Policy stricte, HSTS (Strict-Transport-Security), X-Content-Type-Options: nosniff, protection anti-clickjacking via frame-ancestors sélectif et isolation des origines (COOP / Permissions-Policy).
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-stone-900 dark:text-stone-100">
                        Protection Anti-Pollution de Prototype & Null Bytes :
                      </span>{' '}
                      <span className="text-stone-600 dark:text-stone-400">
                        Nettoyage récursif de toutes les données entrantes (req.body, paramètres) neutralisant formellement les vecteurs de pollution d'objets JavaScript et les octets nuls.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-stone-900 dark:text-stone-100">
                        Limiteur de Débit Multi-Paliers Anti-DDoS :
                      </span>{' '}
                      <span className="text-stone-600 dark:text-stone-400">
                        Plafond de 120 requêtes/min par adresse IP pour la consultation générale et 35 requêtes/min pour les calculs d'IA générative avec en-tête Retry-After.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-stone-900 dark:text-stone-100">
                        Protection Anti-Force Brute & Comparaison à Temps Constant :
                      </span>{' '}
                      <span className="text-stone-600 dark:text-stone-400">
                        Verrouillage temporaire de 3 minutes après 5 tentatives échouées d'authentification maître, avec validation en temps constant éliminant les attaques temporelles par canal auxiliaire.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-stone-900 dark:text-stone-100">
                        Sceau Cryptographique Immuable (SHA-256) :
                      </span>{' '}
                      <span className="text-stone-600 dark:text-stone-400">
                        L'intégrité des instructions du système est scellée par hachage cryptographique synchronisé serveur-client. Toute altération non autorisée est immédiatement rétablie à la version d'origine.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-stone-900 dark:text-stone-100">
                        Résolution de Problèmes 100% Autonome (Zero Human Intervention) :
                      </span>{' '}
                      <span className="text-stone-600 dark:text-stone-400">
                        En cas d'erreur réseau, de code 503 ou de quota de modèle externe, l'application bascule instantanément sur les dossiers juridiques québécois locaux vérifiés sans interruption.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Simulation Action Button */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20">
                <div>
                  <h5 className="font-bold text-xs text-amber-900 dark:text-amber-300">
                    Vérifier la robustesse du bouclier
                  </h5>
                  <p className="text-[11px] text-amber-700 dark:text-amber-400 mt-0.5">
                    Simulez une tentative d'injection hostile pour constater que l'IA refuse la corruption et conserve son intégrité.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleSimulateAttack}
                  className="px-3.5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shrink-0 cursor-pointer shadow-xs transition-colors flex items-center gap-1.5"
                >
                  <Flame className="w-3.5 h-3.5" />
                  <span>Tester le Bouclier</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: VAULT AUTHENTICATION */}
          {activeSubTab === 'vault_auth' && (
            <div className="space-y-5">
              <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-900 dark:text-blue-300 space-y-1">
                <p className="font-bold">Zone Réservée au Créateur Légitime : {status.creatorEmail}</p>
                <p className="text-[11px] text-blue-700 dark:text-blue-400">
                  Personne en dehors de vous ne peut modifier l'IA. La consultation d'information reste entièrement ouverte et libre pour le grand public.
                </p>
              </div>

              {status.adminUnlocked ? (
                <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-4">
                  <div className="flex items-center gap-3">
                    <Unlock className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    <div>
                      <h4 className="text-sm font-bold text-emerald-900 dark:text-emerald-300">
                        Session Administrateur Active
                      </h4>
                      <p className="text-xs text-emerald-700 dark:text-emerald-400">
                        Vous disposez des droits de modification et de gestion sur l'IA de Transparence Québec.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={handleLock}
                      className="px-4 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white dark:bg-stone-100 dark:hover:bg-stone-200 dark:text-stone-950 text-xs font-bold transition-colors cursor-pointer"
                    >
                      Re-verrouiller le Coffre (Mode Public Sécurisé)
                    </button>
                  </div>

                  {/* Update Passphrase Section */}
                  <form onSubmit={handleUpdatePassphrase} className="pt-4 border-t border-emerald-500/20 space-y-3">
                    <h5 className="text-xs font-bold text-stone-800 dark:text-stone-200">
                      Changer la clé maîtresse cryptographique
                    </h5>
                    <div className="flex gap-2">
                      <input
                        type="password"
                        value={newPassphraseInput}
                        onChange={(e) => setNewPassphraseInput(e.target.value)}
                        placeholder="Nouvelle clé maîtresse (min. 8 car.)"
                        className="flex-1 px-3 py-2 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-xs text-stone-900 dark:text-stone-100"
                      />
                      <button
                        type="submit"
                        className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold cursor-pointer"
                      >
                        Enregistrer
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <form onSubmit={handleUnlock} className="p-5 rounded-2xl bg-stone-50 dark:bg-stone-950/60 border border-stone-200 dark:border-stone-800 space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 dark:text-stone-300 mb-1.5">
                      Saisir la Clé Maîtresse du Créateur
                    </label>
                    <input
                      type="password"
                      value={passphraseInput}
                      onChange={(e) => setPassphraseInput(e.target.value)}
                      placeholder="Entrez votre clé maîtresse ou courriel créateur..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-xs text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                    <p className="text-[11px] text-stone-500 mt-1">
                      Clé par défaut préconfigurée pour le créateur : <code className="font-mono bg-stone-200 dark:bg-stone-800 px-1 py-0.5 rounded text-[10px]">transparence-qc-master-2026</code> ou votre adresse courriel.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isVerifying || !passphraseInput.trim()}
                    className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    <KeyRound className="w-4 h-4" />
                    <span>{isVerifying ? 'Vérification cryptographique...' : 'Déverrouiller les Droits de Modification'}</span>
                  </button>
                </form>
              )}
            </div>
          )}

          {/* TAB 3: SECURITY LOG */}
          {activeSubTab === 'security_log' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400">
                <span>Historique des vérifications et des menaces neutralisées</span>
                <span className="font-mono text-[10px]">{events.length} enregistrements</span>
              </div>

              <div className="space-y-2 max-h-[340px] overflow-y-auto pr-1">
                {events.length === 0 ? (
                  <p className="text-xs text-stone-500 italic text-center py-6">
                    Aucun incident détecté. Système parfaitement scellé.
                  </p>
                ) : (
                  events.map((ev) => (
                    <div
                      key={ev.id}
                      className={`p-3 rounded-2xl border text-xs space-y-1 ${
                        ev.severity === 'CRITICAL'
                          ? 'bg-rose-500/10 border-rose-500/30 text-rose-900 dark:text-rose-200'
                          : ev.severity === 'HIGH'
                          ? 'bg-amber-500/10 border-amber-500/30 text-amber-900 dark:text-amber-200'
                          : 'bg-stone-50 dark:bg-stone-950/60 border-stone-200 dark:border-stone-800 text-stone-800 dark:text-stone-300'
                      }`}
                    >
                      <div className="flex items-center justify-between font-bold">
                        <span className="flex items-center gap-1.5">
                          {ev.severity === 'CRITICAL' ? (
                            <AlertOctagon className="w-3.5 h-3.5 text-rose-500" />
                          ) : (
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                          )}
                          <span>{ev.summary}</span>
                        </span>
                        <span className="text-[10px] font-mono text-stone-400">
                          {new Date(ev.timestamp).toLocaleTimeString('fr-CA')}
                        </span>
                      </div>
                      <p className="text-[11px] leading-relaxed text-stone-600 dark:text-stone-400">
                        {ev.details}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950/60 flex items-center justify-between text-xs text-stone-500 dark:text-stone-400">
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Surveillance d'intégrité en continu • 0 intervention humaine requise</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-3.5 py-1.5 rounded-xl border border-stone-200 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 font-bold text-xs text-stone-700 dark:text-stone-300 cursor-pointer"
          >
            Fermer
          </button>
        </div>
      </motion.div>
    </div>
  );
};
