import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Share2, Link2, Check, Mail } from 'lucide-react';
import { InvestigationReport } from '../types';
import { safeCopyToClipboard } from '../utils/clipboard';

interface ShareReportMenuProps {
  report: InvestigationReport;
}

type BrandIconProps = { className?: string };

const XIcon: React.FC<BrandIconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
  </svg>
);

const FacebookIcon: React.FC<BrandIconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073Z" />
  </svg>
);

const LinkedInIcon: React.FC<BrandIconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
  </svg>
);

const RedditIcon: React.FC<BrandIconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 3.314 1.343 6.314 3.515 8.485l-2.286 2.286C.775 23.225 1.097 24 1.738 24H12c6.627 0 12-5.373 12-12S18.627 0 12 0Zm4.868 12.706a1.457 1.457 0 0 1 .017.21c0 2.147-2.5 3.887-5.585 3.887-3.086 0-5.585-1.74-5.585-3.887 0-.07.006-.14.017-.21a1.318 1.318 0 1 1 1.453-2.164 6.494 6.494 0 0 1 3.428-1.083l.652-3.07a.283.283 0 0 1 .335-.216l2.164.46a.94.94 0 1 1-.107.457l-1.938-.412-.583 2.75a6.475 6.475 0 0 1 3.383 1.084 1.318 1.318 0 1 1 1.45 2.164l-.001-.06Zm-6.952.628a.94.94 0 1 0 0-1.88.94.94 0 0 0 0 1.88Zm4.336-.94a.94.94 0 1 0-1.88 0 .94.94 0 0 0 1.88 0Zm-.585 2.311a.283.283 0 0 0-.4 0 2.63 2.63 0 0 1-1.911.6h-.014a2.63 2.63 0 0 1-1.91-.6.283.283 0 1 0-.4.4 3.19 3.19 0 0 0 2.31.757h.014a3.19 3.19 0 0 0 2.31-.757.283.283 0 0 0 .001-.4Z" />
  </svg>
);

const WhatsAppIcon: React.FC<BrandIconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Zm-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884Zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

const BlueskyIcon: React.FC<BrandIconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.296 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z" />
  </svg>
);

const TelegramIcon: React.FC<BrandIconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0Zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635Z" />
  </svg>
);

export const ShareReportMenu: React.FC<ShareReportMenuProps> = ({ report }) => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const title = `Transparence Québec — ${report.subject}`;
  const summary = `${report.alertLevelLabel} • Indice de transparence ${report.integrityScore}/100. ${report.coreFinding}`;
  const shareText = `${title}\n${summary}`;

  useEffect(() => {
    if (!open) return;
    const onClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onEsc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onClickOutside);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
      document.removeEventListener('keydown', onEsc);
    };
  }, [open]);

  const openWindow = (url: string) => {
    try {
      window.open(url, '_blank', 'noopener,noreferrer,width=640,height=640');
    } catch {
      window.location.href = url;
    }
    setOpen(false);
  };

  const u = encodeURIComponent(shareUrl);
  const t = encodeURIComponent(title);
  const s = encodeURIComponent(summary);
  const full = encodeURIComponent(shareText);

  const targets = [
    { key: 'x', label: 'X (Twitter)', icon: XIcon, action: () => openWindow(`https://twitter.com/intent/tweet?url=${u}&text=${full}`) },
    { key: 'facebook', label: 'Facebook', icon: FacebookIcon, action: () => openWindow(`https://www.facebook.com/sharer/sharer.php?u=${u}&quote=${full}`) },
    { key: 'linkedin', label: 'LinkedIn', icon: LinkedInIcon, action: () => openWindow(`https://www.linkedin.com/sharing/share-offsite/?url=${u}`) },
    { key: 'reddit', label: 'Reddit', icon: RedditIcon, action: () => openWindow(`https://www.reddit.com/submit?url=${u}&title=${t}`) },
    { key: 'whatsapp', label: 'WhatsApp', icon: WhatsAppIcon, action: () => openWindow(`https://api.whatsapp.com/send?text=${full}%20${u}`) },
    { key: 'telegram', label: 'Telegram', icon: TelegramIcon, action: () => openWindow(`https://t.me/share/url?url=${u}&text=${full}`) },
    { key: 'bluesky', label: 'Bluesky', icon: BlueskyIcon, action: () => openWindow(`https://bsky.app/intent/compose?text=${full}%20${u}`) },
    { key: 'email', label: 'Courriel', icon: Mail, action: () => { window.location.href = `mailto:?subject=${t}&body=${s}%0A%0A${u}`; setOpen(false); } },
  ];

  const handleNativeShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({ title, text: summary, url: shareUrl });
        return;
      } catch {
        // user cancelled or unsupported — fall back to the menu
      }
    }
    setOpen((v) => !v);
  };

  const handleCopyLink = async () => {
    const success = await safeCopyToClipboard(shareUrl);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={handleNativeShare}
        aria-haspopup="menu"
        aria-expanded={open}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-blue-600 bg-blue-600 text-xs font-bold text-white hover:bg-blue-700 hover:border-blue-700 transition-colors cursor-pointer"
      >
        <Share2 className="w-3.5 h-3.5" />
        <span>Partager</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 z-30 mt-2 w-64 origin-top-right rounded-2xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 p-2 shadow-xl"
          >
            <p className="px-2.5 pt-1.5 pb-2 text-[11px] font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500">
              Diffuser ce dossier
            </p>
            <div className="grid grid-cols-1 gap-0.5">
              {targets.map((target) => {
                const Icon = target.icon;
                return (
                  <button
                    key={target.key}
                    type="button"
                    role="menuitem"
                    onClick={target.action}
                    className="flex items-center gap-3 rounded-xl px-2.5 py-2 text-sm font-semibold text-stone-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer text-left"
                  >
                    <Icon className="w-4 h-4 shrink-0 text-stone-600 dark:text-stone-300" />
                    <span>{target.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="my-1.5 h-px bg-stone-100 dark:bg-stone-800" />

            <button
              type="button"
              role="menuitem"
              onClick={handleCopyLink}
              className="flex w-full items-center gap-3 rounded-xl px-2.5 py-2 text-sm font-semibold text-stone-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer text-left"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 shrink-0 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400">Lien copié !</span>
                </>
              ) : (
                <>
                  <Link2 className="w-4 h-4 shrink-0 text-stone-600 dark:text-stone-300" />
                  <span>Copier le lien</span>
                </>
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
