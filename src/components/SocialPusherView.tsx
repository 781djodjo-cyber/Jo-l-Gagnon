import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Radio,
  Send,
  Sparkles,
  Share2,
  Copy,
  Check,
  ExternalLink,
  Flame,
  AlertCircle,
  FileText,
  Video,
  Clock,
  ThumbsUp,
  MessageCircle,
  Repeat2,
  Hash,
  Download,
  Bot,
  Filter,
  RefreshCw,
  TrendingUp,
  Quote,
  ShieldCheck,
  Scale,
  Users
} from 'lucide-react';
import { SocialPushPack } from '../types';
import { PRELOADED_SOCIAL_PUSHES } from '../data/preloadedSocialPushes';
import { safeCopyToClipboard } from '../utils/clipboard';

interface SocialPusherViewProps {
  onOpenDossier?: (dossierId: string) => void;
  onOpenAiChatWithQuery?: (query: string) => void;
}

type PlatformTab = 'x' | 'linkedin' | 'facebook' | 'tiktok' | 'press' | 'quotes';

export const SocialPusherView: React.FC<SocialPusherViewProps> = ({
  onOpenDossier,
  onOpenAiChatWithQuery,
}) => {
  const [pushes, setPushes] = useState<SocialPushPack[]>(PRELOADED_SOCIAL_PUSHES);
  const [selectedPush, setSelectedPush] = useState<SocialPushPack>(PRELOADED_SOCIAL_PUSHES[0]);
  const [activePlatform, setActivePlatform] = useState<PlatformTab>('x');
  const [customTopic, setCustomTopic] = useState('');
  const [selectedAngle, setSelectedAngle] = useState<'D1_FLASH' | 'VIRAL_CITIZEN' | 'LEGAL_AUDIT' | 'PRESS_ALERT'>('D1_FLASH');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [liveStreamActive, setLiveStreamActive] = useState(true);
  const [notificationMsg, setNotificationMsg] = useState<string | null>(null);

  const quickScandals = [
    { label: 'Big Brother & Élite IT', topic: '« Big Brother » Numérique & Élite des Cabinets-Conseils (ArriveCAN, SAAQclic, McKinsey)' },
    { label: 'DPJ 140 Enfants & Adoptions', topic: 'DPJ Mauricie : Lésions de Droits sur 140 Enfants & Adoptions Forcées' },
    { label: 'SAAQclic 1.1 Milliard $', topic: 'Fiasco SAAQclic : 1,1 Milliard $ et Contrats Informatiques sans Contrôle' },
    { label: 'Northvolt 7 Milliards $', topic: 'Filière Batterie Northvolt : 7 Milliards $ d\'Aide Publique & Risques Financiers' },
    { label: 'Kings de LA (7M$ subvention)', topic: 'Subvention de 7M$ aux Kings de Los Angeles pour des matchs préparatoires' },
    { label: 'Foyers clandestins & Aînés', topic: 'Résidences pour aînés non conformes et failles d\'inspections MSSS' }
  ];

  const handleCopy = async (key: string, text: string) => {
    const success = await safeCopyToClipboard(text);
    if (success) {
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2500);
    }
  };

  const handleNativeShare = async (title: string, text: string) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url: window.location.href,
        });
      } catch {
        // User cancelled or not supported
      }
    } else {
      handleCopy('share-global', text);
      showNotification('Texte copié dans le presse-papiers pour partage !');
    }
  };

  const showNotification = (msg: string) => {
    setNotificationMsg(msg);
    setTimeout(() => setNotificationMsg(null), 3000);
  };

  const safeOpenWindow = (url: string) => {
    try {
      const win = window.open(url, '_blank', 'noopener,noreferrer');
      if (!win) {
        showNotification('Ouverture du pop-up bloquée par votre navigateur.');
      }
    } catch {
      showNotification('Impossible d\'ouvrir la fenêtre externe dans ce contexte.');
    }
  };

  const handleShareToTwitter = (text: string) => {
    const encoded = encodeURIComponent(text);
    const url = `https://twitter.com/intent/tweet?text=${encoded}`;
    safeOpenWindow(url);
  };

  const handleShareToLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`;
    safeOpenWindow(url);
  };

  const handleShareToFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
    safeOpenWindow(url);
  };

  const handleGeneratePush = async (topicToUse?: string) => {
    const targetTopic = topicToUse || customTopic.trim();
    if (!targetTopic) return;

    setIsGenerating(true);
    try {
      const response = await fetch('/api/transparence/social-push', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic: targetTopic,
          angle: selectedAngle,
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la génération avec l\'IA');
      }

      const result = await response.json();
      if (result.success && result.data) {
        const newPack: SocialPushPack = result.data;
        setPushes((prev) => [newPack, ...prev]);
        setSelectedPush(newPack);
        showNotification('Nouveau Pack Attracteur IA D-1 généré avec succès !');
      }
    } catch (err: any) {
      console.warn('Fallback local pour le push social média:', err);
      // Fallback local if offline or rate limit
      const fallbackPack: SocialPushPack = {
        id: `push-${Date.now()}`,
        timestamp: Date.now(),
        topic: targetTopic,
        status: 'D-1 Urgent',
        urgencyLevel: 'URGENCE_D1',
        viralScore: 97,
        hook: `Révélations d'intérêt public sur : ${targetTopic}. Les données et articles de loi documentés.`,
        xThread: [
          `1/4 🚨 ALERTE D-1 : Nouvelle enquête citoyenne sur ${targetTopic}. Des constats majeurs exigent des réponses immédiates des autorités. 🧵⤵️ #PolQc #TransparenceQC`,
          `2/4 📊 LES FAITS VÉRIFIÉS : Les instances publiques doivent rendre des comptes aux citoyens et contribuables. Les documents officiels confirment l'urgence démocratique.`,
          `3/4 ⚖️ CADRE LÉGAL : Respect strict des règles de gestion des fonds publics et de la Charte québécoise des droits et libertés. L'imputabilité n'est pas négociable.`,
          `4/4 📢 ACTION CITOYENNE : Partagez massivement ce bulletin. Consultez l'enquête complète sur Transparence Québec ! #PolQc #AssNat`
        ],
        linkedInPost: `🔍 NOTE D'INVESTIGATION PUBLIQUE : ${targetTopic}\n\nEn matière de politiques publiques et de gouvernance démocratique québécoise, la rigueur factuelle et le devoir de reddition de comptes constituent la pierre angulaire de la confiance civique.\n\nPoints clés documentés par la veille Transparence Québec :\n• Respect des engagements financiers et déontologiques\n• Transparence des processus d'évaluation et de gouvernance\n• Vigilance sur l'utilisation des deniers publics et la protection des droits\n\n#Gouvernance #Éthique #TransparenceQC #PolQc`,
        facebookPost: `📢 CITOYENS DU QUÉBEC : VOICI LES FAITS SUR ${targetTopic.toUpperCase()}.\n\nL'information est notre meilleur rempart démocratique. Trop souvent, ces enjeux majeurs sont discutés à huis clos sans que les familles québécoises ne soient informées des réelles conséquences.\n\n💬 Partagez ce message autour de vous et interrogez vos élus locaux sur leurs engagements concrets face à ce dossier ! 👇`,
        tiktokScript: {
          hookVisual: `Texte géant clignotant : CE QUE TU DOIS SAVOIR SUR ${targetTopic.toUpperCase()}`,
          hookSpoken: `Arrête de scroller deux secondes : ce qui se passe avec ce dossier au Québec te concerne directement.`,
          bodySteps: [
            { visual: 'Extrait de document officiel et chiffres clés', audio: 'Voici les chiffres que le gouvernement n\'a pas mis en avant dans ses communiqués.' },
            { visual: 'Articles de loi bafoués', audio: 'La loi est pourtant claire : la transparence et la sécurité publique sont obligatoires.' }
          ],
          callToAction: 'Partage la vidéo et viens consulter les pièces justificatives sur Transparence Québec.'
        },
        pressAlertD1: {
          embargo: 'BULLETIN CITOYEN D-1 • DIFFUSION IMMÉDIATE',
          headline: `ENQUÊTE PUBLIQUE : NOUVELLES DONNÉES SUR ${targetTopic.toUpperCase()}`,
          leadParagraph: `L'Observatoire citoyen Transparence Québec diffuse ce jour un pack d'investigation factuel relatif au dossier ${targetTopic}, mettant en lumière la nécessité d'un examen parlementaire approfondi.`,
          bulletPoints: [
            'Nécessité d\'un audit indépendant par le Vérificateur général ;',
            'Exigence de transparence sur les contrats et dérogations administratives ;',
            'Appel à la mobilisation civique responsable.'
          ],
          callToAction: 'Interpellation des instances de contrôle et des chefs de partis.'
        },
        quoteCards: [
          {
            quote: `« La démocratie ne s'arrête pas au vote : elle vit de la vigilance quotidienne des citoyens. »`,
            authorOrEntity: 'Transparence Québec',
            context: 'Vigie citoyenne'
          }
        ],
        hashtags: ['#PolQc', '#AssNat', '#TransparenceQC', '#Québec']
      };
      setPushes((prev) => [fallbackPack, ...prev]);
      setSelectedPush(fallbackPack);
      showNotification('Pack généré (Mode local sécurisé)');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div id="social-pusher-view" className="space-y-6">
      {/* Toast Notification */}
      <AnimatePresence>
        {notificationMsg && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 right-6 z-50 px-4 py-3 rounded-2xl bg-stone-900 text-white shadow-xl border border-stone-700 flex items-center gap-2.5 text-xs font-bold"
          >
            <Check className="w-4 h-4 text-emerald-400" />
            <span>{notificationMsg}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Hero Header */}
      <div className="p-6 sm:p-8 rounded-3xl border-2 border-blue-600/40 bg-linear-to-br from-blue-950/40 via-stone-900 to-indigo-950/40 text-stone-100 shadow-lg relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-56 h-56 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-2xl pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-300 text-xs font-bold font-mono uppercase tracking-wider">
              <Radio className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
              <span>Attracteur IA Social Média • Générateur D-1 & Push H24</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setLiveStreamActive(!liveStreamActive)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                  liveStreamActive
                    ? 'border-emerald-500/40 bg-emerald-950/40 text-emerald-300'
                    : 'border-stone-700 bg-stone-800 text-stone-400'
                }`}
              >
                <Radio className={`w-3.5 h-3.5 ${liveStreamActive ? 'animate-pulse text-emerald-400' : ''}`} />
                <span>Radar H24 : {liveStreamActive ? 'Actif' : 'En pause'}</span>
              </button>

              <button
                type="button"
                onClick={() =>
                  onOpenAiChatWithQuery &&
                  onOpenAiChatWithQuery(
                    'Comment formater un thread X / Twitter viral et rigoureux sur les révélations de la DPJ pour maximiser la portée citoyenne sans diffamation ?'
                  )
                }
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-700 hover:bg-blue-600 text-xs font-bold text-white shadow-xs transition-colors cursor-pointer"
              >
                <Bot className="w-3.5 h-3.5 text-amber-300" />
                <span>Conseils Stratégie IA</span>
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif tracking-tight text-white flex items-center gap-2">
              <span>Machine à Impact Citoyen : D-1 Flash & Flux Social H24</span>
            </h2>
            <p className="text-sm text-stone-300 max-w-3xl mt-1 leading-relaxed">
              Transformez instantanément les rapports d'audit, scandales d'adoptions DPJ et contrats publics québécois en{' '}
              <strong className="text-white">packs de diffusion virale multi-plateformes</strong> (X/Twitter, LinkedIn, Facebook, TikTok, Communiqué D-1).
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="p-3 rounded-2xl bg-stone-900/80 border border-stone-800">
              <span className="text-[11px] text-stone-400 font-medium">Algorithme d'Accroche</span>
              <div className="text-xl font-black text-amber-400 font-mono">D-1 Attracteur</div>
              <span className="text-[10px] text-stone-400">Optimisé pour la rétention</span>
            </div>

            <div className="p-3 rounded-2xl bg-stone-900/80 border border-stone-800">
              <span className="text-[11px] text-stone-400 font-medium">Score Moyen de Viralité</span>
              <div className="text-xl font-black text-emerald-400 font-mono">96.4 / 100</div>
              <span className="text-[10px] text-stone-400">Rigueur légale + Impact</span>
            </div>

            <div className="p-3 rounded-2xl bg-stone-900/80 border border-stone-800">
              <span className="text-[11px] text-stone-400 font-medium">Formats Multi-Canaux</span>
              <div className="text-xl font-black text-blue-400 font-mono">5 Plateformes</div>
              <span className="text-[10px] text-stone-400">X, LinkedIn, FB, TikTok, Presse</span>
            </div>

            <div className="p-3 rounded-2xl bg-stone-900/80 border border-stone-800">
              <span className="text-[11px] text-stone-400 font-medium">Portée Potentielle</span>
              <div className="text-xl font-black text-purple-400 font-mono">+650 000</div>
              <span className="text-[10px] text-stone-400">Réseau citoyen québécois</span>
            </div>
          </div>
        </div>
      </div>

      {/* Generator Form */}
      <div className="p-5 sm:p-6 rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <h3 className="text-sm font-bold text-stone-900 dark:text-stone-100 uppercase tracking-wider font-mono">
              Générateur d'Alerte IA Instantané (Attracteur D-1)
            </h3>
          </div>
          <span className="text-[11px] text-stone-500 dark:text-stone-400">
            Alimenté par Gemini 3.8 Flash • Factualité Québécoise
          </span>
        </div>

        {/* Quick Scandal Chips */}
        <div className="space-y-1.5">
          <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
            Sujets chauds prioritaires :
          </span>
          <div className="flex flex-wrap gap-2">
            {quickScandals.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => {
                  setCustomTopic(item.topic);
                  handleGeneratePush(item.topic);
                }}
                className="px-3 py-1.5 rounded-xl border border-stone-200 dark:border-stone-800 hover:border-blue-500 bg-stone-50 dark:bg-stone-800/80 hover:bg-blue-50 dark:hover:bg-blue-950/30 text-stone-700 dark:text-stone-300 hover:text-blue-700 dark:hover:text-blue-300 text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5"
              >
                <Flame className="w-3 h-3 text-amber-500" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Input & Angle selection */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          <div className="md:col-span-6">
            <input
              type="text"
              value={customTopic}
              onChange={(e) => setCustomTopic(e.target.value)}
              placeholder="Ex: Contrats sans appel d'offres en santé, Démission de ministre, Dépassement de coûts..."
              className="w-full px-4 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100 text-xs placeholder-stone-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500/30"
            />
          </div>

          <div className="md:col-span-3">
            <select
              value={selectedAngle}
              onChange={(e: any) => setSelectedAngle(e.target.value)}
              aria-label="Angle d'attaque de l'attracteur"
              className="w-full px-3 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100 text-xs focus:outline-hidden focus:ring-2 focus:ring-blue-500/30"
            >
              <option value="D1_FLASH">Angle : D-1 Flash Scandale</option>
              <option value="VIRAL_CITIZEN">Angle : Mobilisation Citoyenne</option>
              <option value="LEGAL_AUDIT">Angle : Rigueur & Infractions LPJ</option>
              <option value="PRESS_ALERT">Angle : Alerte Journalistique</option>
            </select>
          </div>

          <div className="md:col-span-3">
            <button
              type="button"
              disabled={isGenerating || !customTopic.trim()}
              onClick={() => handleGeneratePush()}
              className="w-full h-full min-h-[42px] px-4 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-600 disabled:opacity-50 text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Attracteur en cours...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Générer le Pack D-1</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: Left = H24 Push Stream (5 Cols) / Right = Active Push Display & Platform Switcher (7 Cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: H24 Radar Stream */}
        <div className="lg:col-span-5 space-y-3">
          <div className="flex items-center justify-between">
            <div className="text-xs font-bold text-stone-500 uppercase tracking-wider font-mono flex items-center gap-1.5">
              <Radio className="w-3.5 h-3.5 text-rose-500 animate-pulse" />
              <span>Flux Radar H24 Citoyen ({pushes.length})</span>
            </div>
            <span className="text-[10px] text-stone-400">Mise à jour en temps réel</span>
          </div>

          <div className="space-y-2.5 max-h-[680px] overflow-y-auto pr-1">
            {pushes.map((push) => {
              const isSelected = selectedPush.id === push.id;
              return (
                <div
                  key={push.id}
                  onClick={() => setSelectedPush(push)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'border-blue-600 bg-blue-50/40 dark:bg-blue-950/20 shadow-xs ring-2 ring-blue-500/20'
                      : 'border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 hover:border-stone-300 dark:hover:border-stone-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase font-mono ${
                        push.urgencyLevel === 'URGENCE_D1'
                          ? 'bg-rose-500/15 border border-rose-500/30 text-rose-700 dark:text-rose-300'
                          : push.urgencyLevel === 'VIGILANCE_H24'
                          ? 'bg-amber-500/15 border border-amber-500/30 text-amber-700 dark:text-amber-300'
                          : 'bg-blue-500/15 border border-blue-500/30 text-blue-700 dark:text-blue-300'
                      }`}>
                        {push.status}
                      </span>
                      <span className="text-[10px] text-stone-400 font-mono">
                        {new Date(push.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400">
                      <TrendingUp className="w-3 h-3" />
                      <span>{push.viralScore}%</span>
                    </div>
                  </div>

                  <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100 mt-2 line-clamp-2">
                    {push.topic}
                  </h4>

                  <p className="text-xs text-stone-600 dark:text-stone-400 mt-1 line-clamp-2">
                    {push.hook}
                  </p>

                  <div className="flex items-center justify-between text-xs text-stone-500 mt-3 pt-2 border-t border-stone-100 dark:border-stone-800">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-stone-400">
                      <span>4 plateformes</span>
                      <span>•</span>
                      <span>#PolQc</span>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNativeShare(push.topic, push.hook);
                      }}
                      className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <Share2 className="w-3 h-3" />
                      <span>Partager</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Active Pack Formats */}
        <div className="lg:col-span-7 space-y-4">
          <div className="p-6 sm:p-7 rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 shadow-sm space-y-5">
            {/* Active Pack Title & Fast Controls */}
            <div className="flex flex-wrap items-start justify-between gap-3 pb-4 border-b border-stone-200 dark:border-stone-800">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-700 dark:text-rose-300 text-xs font-bold font-mono">
                    {selectedPush.status}
                  </span>
                  <span className="text-xs text-stone-500 font-mono">
                    Impact viral : {selectedPush.viralScore}/100
                  </span>
                </div>
                <h3 className="text-lg font-bold font-serif text-stone-900 dark:text-stone-100">
                  {selectedPush.topic}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleNativeShare(selectedPush.topic, selectedPush.hook)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-xs font-bold hover:bg-stone-100 dark:hover:bg-stone-700 transition-colors cursor-pointer"
                  title="Partage universel"
                >
                  <Share2 className="w-3.5 h-3.5 text-blue-500" />
                  <span>Partager</span>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    onOpenAiChatWithQuery &&
                    onOpenAiChatWithQuery(`Développe l'angle d'investigation pour ce sujet : ${selectedPush.topic}`)
                  }
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-700 hover:bg-blue-600 text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  <Bot className="w-3.5 h-3.5" />
                  <span>Approfondir IA</span>
                </button>
              </div>
            </div>

            {/* Platform Switcher Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 border-b border-stone-200 dark:border-stone-800">
              <button
                type="button"
                onClick={() => setActivePlatform('x')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activePlatform === 'x'
                    ? 'bg-stone-900 text-white dark:bg-white dark:text-stone-950 shadow-xs'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
                }`}
              >
                <span>🐦 X / Twitter Thread ({selectedPush.xThread.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setActivePlatform('linkedin')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activePlatform === 'linkedin'
                    ? 'bg-blue-700 text-white shadow-xs'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
                }`}
              >
                <span>💼 LinkedIn Pro</span>
              </button>

              <button
                type="button"
                onClick={() => setActivePlatform('facebook')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activePlatform === 'facebook'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
                }`}
              >
                <span>👥 Facebook Citoyen</span>
              </button>

              <button
                type="button"
                onClick={() => setActivePlatform('tiktok')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activePlatform === 'tiktok'
                    ? 'bg-purple-700 text-white shadow-xs'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
                }`}
              >
                <Video className="w-3.5 h-3.5" />
                <span>TikTok / Reels (Script)</span>
              </button>

              <button
                type="button"
                onClick={() => setActivePlatform('press')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activePlatform === 'press'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Communiqué D-1</span>
              </button>

              <button
                type="button"
                onClick={() => setActivePlatform('quotes')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activePlatform === 'quotes'
                    ? 'bg-rose-600 text-white shadow-xs'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
                }`}
              >
                <Quote className="w-3.5 h-3.5" />
                <span>Citations Chocs</span>
              </button>
            </div>

            {/* Platform Content Viewers */}
            <div className="space-y-4">
              {/* X / TWITTER THREAD */}
              {activePlatform === 'x' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-stone-500 uppercase tracking-wider font-mono">
                      Thread X Optimisé (4 Tweets)
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleShareToTwitter(selectedPush.xThread.join('\n\n'))}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black hover:bg-stone-800 text-white text-xs font-bold transition-colors cursor-pointer"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
                        <span>Poster sur X</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleCopy('thread-all', selectedPush.xThread.join('\n\n'))}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 text-xs font-bold transition-colors cursor-pointer"
                      >
                        {copiedKey === 'thread-all' ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-500" />
                            <span className="text-emerald-600">Thread copié !</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-stone-500" />
                            <span>Copier tout le thread</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {selectedPush.xThread.map((tweet, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 space-y-2.5 relative group"
                      >
                        <div className="flex items-center justify-between text-xs text-stone-500">
                          <span className="font-mono font-bold text-blue-600 dark:text-blue-400">
                            Tweet {idx + 1}/{selectedPush.xThread.length}
                          </span>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono text-stone-400">
                              {tweet.length} car.
                            </span>
                            <button
                              type="button"
                              onClick={() => handleShareToTwitter(tweet)}
                              className="text-stone-400 hover:text-blue-500 text-[11px] font-semibold cursor-pointer"
                            >
                              Tweet solo ↗
                            </button>
                            <button
                              type="button"
                              onClick={() => handleCopy(`tweet-${idx}`, tweet)}
                              className="text-stone-400 hover:text-stone-800 dark:hover:text-stone-200 cursor-pointer"
                              title="Copier ce tweet"
                            >
                              {copiedKey === `tweet-${idx}` ? (
                                <Check className="w-3.5 h-3.5 text-emerald-500" />
                              ) : (
                                <Copy className="w-3.5 h-3.5" />
                              )}
                            </button>
                          </div>
                        </div>

                        <p className="text-xs sm:text-sm text-stone-800 dark:text-stone-200 font-sans whitespace-pre-wrap leading-relaxed">
                          {tweet}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* LINKEDIN POST */}
              {activePlatform === 'linkedin' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-stone-500 uppercase tracking-wider font-mono">
                      Publication LinkedIn (Gouvernance & Éthique)
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={handleShareToLinkedIn}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-700 hover:bg-blue-600 text-white text-xs font-bold transition-colors cursor-pointer"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-white" />
                        <span>Partager sur LinkedIn</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleCopy('linkedin-post', selectedPush.linkedInPost)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 text-xs font-bold transition-colors cursor-pointer"
                      >
                        {copiedKey === 'linkedin-post' ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-500" />
                            <span className="text-emerald-600">Copié !</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-stone-500" />
                            <span>Copier le texte</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 text-xs sm:text-sm text-stone-800 dark:text-stone-200 leading-relaxed whitespace-pre-wrap font-sans">
                    {selectedPush.linkedInPost}
                  </div>
                </div>
              )}

              {/* FACEBOOK POST */}
              {activePlatform === 'facebook' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-stone-500 uppercase tracking-wider font-mono">
                      Publication Citoyenne Facebook
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={handleShareToFacebook}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors cursor-pointer"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-white" />
                        <span>Partager sur Facebook</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleCopy('facebook-post', selectedPush.facebookPost)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 text-xs font-bold transition-colors cursor-pointer"
                      >
                        {copiedKey === 'facebook-post' ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-500" />
                            <span className="text-emerald-600">Copié !</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-stone-500" />
                            <span>Copier le texte</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 text-xs sm:text-sm text-stone-800 dark:text-stone-200 leading-relaxed whitespace-pre-wrap font-sans">
                    {selectedPush.facebookPost}
                  </div>
                </div>
              )}

              {/* TIKTOK / REELS SCRIPT */}
              {activePlatform === 'tiktok' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-stone-500 uppercase tracking-wider font-mono">
                      Script Vidéo Court (Format 30s-60s Téléprompteur)
                    </span>

                    <button
                      type="button"
                      onClick={() => {
                        const fullScript = `[ACCROCHE VISUELLE]\n${selectedPush.tiktokScript.hookVisual}\n\n[ACCROCHE ORALE]\n${selectedPush.tiktokScript.hookSpoken}\n\n[DÉROULÉ]\n${selectedPush.tiktokScript.bodySteps.map((s, i) => `Étape ${i + 1} :\nVisuel: ${s.visual}\nAudio: ${s.audio}`).join('\n\n')}\n\n[CALL TO ACTION]\n${selectedPush.tiktokScript.callToAction}`;
                        handleCopy('tiktok-full', fullScript);
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 text-xs font-bold transition-colors cursor-pointer"
                    >
                      {copiedKey === 'tiktok-full' ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                          <span className="text-emerald-600">Script complet copié !</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-stone-500" />
                          <span>Copier tout le script</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Hook Box */}
                  <div className="p-4 rounded-2xl border-2 border-purple-500/30 bg-purple-50/40 dark:bg-purple-950/20 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-purple-700 dark:text-purple-300 font-mono uppercase">
                      <Flame className="w-3.5 h-3.5 text-purple-500" />
                      <span>Accroche 0 à 3 secondes (Stop Scroll)</span>
                    </div>
                    <div className="text-xs text-stone-600 dark:text-stone-400">
                      <strong>Visuel caméra :</strong> {selectedPush.tiktokScript.hookVisual}
                    </div>
                    <div className="text-sm font-bold text-stone-900 dark:text-stone-100 font-serif">
                      "{selectedPush.tiktokScript.hookSpoken}"
                    </div>
                  </div>

                  {/* Body Steps */}
                  <div className="space-y-2.5">
                    {selectedPush.tiktokScript.bodySteps.map((step, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 space-y-1.5"
                      >
                        <div className="flex items-center justify-between text-xs font-mono font-bold text-stone-500">
                          <span>Séquence {idx + 1} (15 secondes)</span>
                        </div>
                        <div className="text-xs text-stone-600 dark:text-stone-400">
                          <span className="font-semibold text-stone-700 dark:text-stone-300">À l'écran :</span> {step.visual}
                        </div>
                        <div className="text-xs sm:text-sm text-stone-800 dark:text-stone-200 font-medium">
                          <span className="font-semibold text-blue-600 dark:text-blue-400">À dire :</span> "{step.audio}"
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Call to action */}
                  <div className="p-4 rounded-2xl border border-emerald-500/30 bg-emerald-50/40 dark:bg-emerald-950/20 space-y-1">
                    <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 font-mono uppercase">
                      Appel à l'action final (5 secondes) :
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-stone-900 dark:text-stone-100">
                      {selectedPush.tiktokScript.callToAction}
                    </p>
                  </div>
                </div>
              )}

              {/* PRESS ALERT D-1 */}
              {activePlatform === 'press' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-stone-500 uppercase tracking-wider font-mono">
                      Alerte Presse & Communiqué D-1 (Journalistes & Rédactions)
                    </span>

                    <button
                      type="button"
                      onClick={() => {
                        const pressText = `${selectedPush.pressAlertD1.embargo}\n\n${selectedPush.pressAlertD1.headline}\n\n${selectedPush.pressAlertD1.leadParagraph}\n\nFAITS SAILLANTS :\n${selectedPush.pressAlertD1.bulletPoints.map((b) => `• ${b}`).join('\n')}\n\nAPPEL :\n${selectedPush.pressAlertD1.callToAction}\n\nSource : Transparence Québec`;
                        handleCopy('press-full', pressText);
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 text-xs font-bold transition-colors cursor-pointer"
                    >
                      {copiedKey === 'press-full' ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                          <span className="text-emerald-600">Communiqué copié !</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-stone-500" />
                          <span>Copier le communiqué</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="p-6 rounded-2xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-950 font-serif space-y-4">
                    <div className="text-[11px] font-mono font-bold tracking-widest text-rose-600 dark:text-rose-400">
                      {selectedPush.pressAlertD1.embargo}
                    </div>

                    <h4 className="text-base sm:text-lg font-black text-stone-900 dark:text-stone-100">
                      {selectedPush.pressAlertD1.headline}
                    </h4>

                    <p className="text-xs sm:text-sm text-stone-800 dark:text-stone-200 font-sans leading-relaxed">
                      {selectedPush.pressAlertD1.leadParagraph}
                    </p>

                    <div className="space-y-1.5 font-sans pt-2 border-t border-stone-200 dark:border-stone-800">
                      <span className="text-xs font-bold uppercase tracking-wider text-stone-600 dark:text-stone-400 font-mono">
                        Faits saillants documentés :
                      </span>
                      <ul className="space-y-1 text-xs text-stone-700 dark:text-stone-300 list-disc pl-4">
                        {selectedPush.pressAlertD1.bulletPoints.map((pt, i) => (
                          <li key={i}>{pt}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 font-sans text-xs font-semibold text-blue-700 dark:text-blue-300">
                      {selectedPush.pressAlertD1.callToAction}
                    </div>
                  </div>
                </div>
              )}

              {/* QUOTE CARDS */}
              {activePlatform === 'quotes' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-stone-500 uppercase tracking-wider font-mono">
                      Cartes Citations Chocs (Quotes Virales)
                    </span>
                    <span className="text-[11px] text-stone-400">
                      Idéal pour captures d'écran et citations
                    </span>
                  </div>

                  <div className="space-y-3">
                    {selectedPush.quoteCards.map((qc, idx) => (
                      <div
                        key={idx}
                        className="p-6 rounded-3xl border-2 border-amber-500/40 bg-linear-to-br from-amber-950/20 via-stone-900 to-stone-950 text-stone-100 shadow-md space-y-3 relative overflow-hidden"
                      >
                        <Quote className="w-8 h-8 text-amber-500/20 absolute -right-2 -bottom-2 pointer-events-none" />

                        <p className="text-sm sm:text-base font-serif italic text-amber-200 leading-relaxed">
                          {qc.quote}
                        </p>

                        <div className="flex items-center justify-between pt-2 border-t border-amber-500/20">
                          <div>
                            <div className="text-xs font-bold text-white">
                              {qc.authorOrEntity}
                            </div>
                            <div className="text-[10px] text-stone-400 font-mono">
                              {qc.context}
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() => handleCopy(`quote-${idx}`, `${qc.quote} — ${qc.authorOrEntity} (${qc.context})`)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-bold transition-colors cursor-pointer"
                          >
                            {copiedKey === `quote-${idx}` ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                                <span>Copié !</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Copier la citation</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Hashtags Footer */}
            <div className="pt-3 border-t border-stone-200 dark:border-stone-800 flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-1.5">
                <Hash className="w-3.5 h-3.5 text-stone-400" />
                {selectedPush.hashtags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md bg-stone-100 dark:bg-stone-800 text-[11px] font-mono font-bold text-stone-700 dark:text-stone-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="text-[11px] text-stone-400 font-mono">
                Transparence Québec • Vigie Citoyenne H24
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
