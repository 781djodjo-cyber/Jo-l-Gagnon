import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Tv,
  Radio,
  FileText,
  AlertTriangle,
  Scale,
  Calendar,
  MapPin,
  Search,
  Check,
  Copy,
  ExternalLink,
  Bot,
  Info,
  Layers,
  Flame,
  Filter,
  UserCheck,
  ShieldAlert,
  ChevronRight,
  Quote,
  Users,
  Database,
  HeartCrack,
  Building2
} from 'lucide-react';
import {
  DPJ_MEDIA_INVESTIGATIONS_DATA,
  MEDIA_ARCHIVE_STATS,
  DpjMediaInvestigation
} from '../data/dpjMediaInvestigationsData';

interface DpjMediaArchiveSuperbaseViewProps {
  onOpenChatWithQuery?: (query: string) => void;
  onNavigateToSubTab?: (subTab: string) => void;
  onOpenInvestigationReport?: (dossierId: string) => void;
}

type PeriodFilter = 'all' | '1995-2004' | '2005-2015' | '2016-2026';

export const DpjMediaArchiveSuperbaseView: React.FC<DpjMediaArchiveSuperbaseViewProps> = ({
  onOpenChatWithQuery,
  onNavigateToSubTab,
  onOpenInvestigationReport
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodFilter>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedInvestigation, setSelectedInvestigation] = useState<DpjMediaInvestigation | null>(
    DPJ_MEDIA_INVESTIGATIONS_DATA[0]
  );
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const categories = [
    { key: 'all', label: 'Toutes les dérives' },
    { key: 'Viols & Agressions Sexuelles en Centres', label: 'Viols & Agressions Sexuelles' },
    { key: 'Proxénétisme & Fugues Massives', label: 'Proxénétisme & Fugues' },
    { key: 'Corruption & Faux Rapports', label: 'Corruption & Faux Rapports' },
    { key: 'Motels de Transit & Négligence Étatique', label: 'Motels & Négligence' },
    { key: 'Recours Collectifs & Condamnations', label: 'Recours Collectifs' },
    { key: 'Omerta, Représailles & Censure', label: 'Omerta & Censure' }
  ];

  const filteredData = DPJ_MEDIA_INVESTIGATIONS_DATA.filter((item) => {
    const matchesCategory =
      selectedCategory === 'all' || item.category === selectedCategory;
    const matchesPeriod =
      selectedPeriod === 'all' || item.period === selectedPeriod;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      q === '' ||
      item.title.toLowerCase().includes(q) ||
      item.mediaName.toLowerCase().includes(q) ||
      item.location.toLowerCase().includes(q) ||
      item.journalists.some((j) => j.toLowerCase().includes(q)) ||
      item.summary.toLowerCase().includes(q) ||
      item.documentedFacts.some((f) => f.toLowerCase().includes(q)) ||
      item.keyInterviewQuote.quote.toLowerCase().includes(q);

    return matchesCategory && matchesPeriod && matchesSearch;
  });

  return (
    <div id="superbase-media-investigations-module" className="space-y-8">
      {/* Hero Banner Superbase Archive */}
      <div className="rounded-3xl border-2 border-amber-600/40 bg-linear-to-br from-stone-950 via-stone-900 to-amber-950/40 p-6 sm:p-8 text-stone-100 shadow-xl relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-amber-600/10 blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-rose-600/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/50 text-amber-300 text-xs font-bold font-mono uppercase tracking-wider">
              <Tv className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>Superbase Archives & Reportages d'Enquêtes (1995–2026)</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {onNavigateToSubTab && (
                <>
                  <button
                    type="button"
                    onClick={() => onNavigateToSubTab('superbase_lesions')}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-700 bg-stone-800/80 hover:bg-stone-700 text-stone-300 text-xs font-bold transition-colors cursor-pointer"
                  >
                    <Database className="w-3.5 h-3.5 text-rose-400" />
                    <span>Superbase 140 Enfants (CDPDJ)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onNavigateToSubTab('graph_deces')}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-700 bg-stone-800/80 hover:bg-stone-700 text-stone-300 text-xs font-bold transition-colors cursor-pointer"
                  >
                    <HeartCrack className="w-3.5 h-3.5 text-rose-400" />
                    <span>Graphique Décès (Coroner)</span>
                  </button>
                </>
              )}

              <button
                type="button"
                onClick={() =>
                  onOpenChatWithQuery?.(
                    "Fais une analyse chronologique approfondie des dérives, agressions sexuelles, réseaux de proxénétisme et corruption administrative documentés dans les médias québécois depuis 1995 (Cité des Prairies, Shawbridge, Filles de Laval, Mauricie, Motels de transit)."
                  )
                }
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-black text-xs transition-colors cursor-pointer shadow-sm"
              >
                <Bot className="w-3.5 h-3.5 text-stone-950" />
                <span>Interroger l'Oracle AI (Archives 1995-2026)</span>
              </button>
            </div>
          </div>

          <div className="space-y-2 max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-black font-serif tracking-tight text-white leading-tight">
              Registre Documentaire des <span className="text-amber-400 underline decoration-amber-500/50 underline-offset-4">Dérives, Viols & Corruption DPJ</span>
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Consolidation exhaustive de 30 années d'enquêtes journalistiques d'impact (Radio-Canada Enquête, TVA J.E., Bureau d'enquête, La Presse, Le Devoir), d'entrevues de lanceurs d'alerte, de jugements criminels et de recours collectifs historiques certifiés par les tribunaux.
            </p>
          </div>

          {/* Metrics bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="p-4 rounded-2xl bg-stone-900/90 border border-amber-900/50 space-y-1">
              <div className="text-xs text-amber-300 flex items-center justify-between">
                <span>Période Archivée</span>
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
              </div>
              <div className="text-xl sm:text-2xl font-black text-amber-400 font-mono">
                {MEDIA_ARCHIVE_STATS.yearsCovered}
              </div>
              <div className="text-[11px] text-stone-400">
                1995 jusqu'à aujourd'hui
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-stone-900/90 border border-stone-800 space-y-1">
              <div className="text-xs text-stone-400 flex items-center justify-between">
                <span>Victimes en Recours</span>
                <Users className="w-3.5 h-3.5 text-rose-400" />
              </div>
              <div className="text-xl sm:text-2xl font-black text-rose-400 font-mono">
                {MEDIA_ARCHIVE_STATS.victimsRepresentedInLawsuits}
              </div>
              <div className="text-[11px] text-stone-400">
                Anciens pupilles en recours collectif
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-stone-900/90 border border-stone-800 space-y-1">
              <div className="text-xs text-stone-400 flex items-center justify-between">
                <span>Indemnités Réclamées</span>
                <Scale className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">
                {MEDIA_ARCHIVE_STATS.totalDamagesClaimed}
              </div>
              <div className="text-[11px] text-stone-400">
                Reclamations judiciaires cumulées
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-stone-900/90 border border-stone-800 space-y-1">
              <div className="text-xs text-stone-400 flex items-center justify-between">
                <span>Médias d'Enquête</span>
                <Radio className="w-3.5 h-3.5 text-blue-400" />
              </div>
              <div className="text-xl sm:text-2xl font-black text-white font-mono">
                6 Réseaux
              </div>
              <div className="text-[11px] text-stone-400">
                Radio-Canada, TVA, La Presse, JdM
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Controls */}
      <div className="rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-5 sm:p-6 shadow-sm space-y-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-4">
          <div className="flex items-center gap-2.5">
            <Filter className="w-4 h-4 text-amber-500" />
            <span className="text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 font-mono">
              Filtres Thématiques & Décennies
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Recherche (Laval, Huberdeau, viol, motel, proxénète...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 pr-3 py-1.5 rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-xs text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500/40 w-56 sm:w-72"
              />
            </div>

            {/* Period select */}
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value as PeriodFilter)}
              className="px-3 py-1.5 rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-xs text-stone-900 dark:text-stone-100 focus:outline-none cursor-pointer"
            >
              <option value="all">Toutes les décennies (1995–2026)</option>
              <option value="1995-2004">1995–2004 (Centres d'accueil fondateurs)</option>
              <option value="2005-2015">2005–2015 (Gangs de rue & proxénétisme)</option>
              <option value="2016-2026">2016–2026 (Granby, Mauricie & Motels)</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.key
                  ? 'bg-amber-500 text-stone-950 shadow-xs'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Master-Detail Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Side: Investigations List */}
        <div className="lg:col-span-5 space-y-3 max-h-[680px] overflow-y-auto pr-1">
          <div className="text-xs text-stone-500 dark:text-stone-400 flex items-center justify-between px-1">
            <span>Enquêtes recensées : {filteredData.length}</span>
            <span>Cliquez pour examiner le dossier</span>
          </div>

          {filteredData.map((inv) => {
            const isSelected = selectedInvestigation?.id === inv.id;
            return (
              <button
                key={inv.id}
                type="button"
                onClick={() => setSelectedInvestigation(inv)}
                className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer space-y-2.5 ${
                  isSelected
                    ? 'border-amber-500 bg-amber-500/10 dark:bg-amber-950/30 shadow-md ring-1 ring-amber-500/50'
                    : 'border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 hover:bg-stone-50 dark:hover:bg-stone-850'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-stone-100 dark:bg-stone-800 text-amber-600 dark:text-amber-400 font-bold border border-stone-200 dark:border-stone-700">
                      {inv.year}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-700 dark:text-blue-300 font-medium">
                      {inv.mediaName}
                    </span>
                  </div>
                  <span className="text-[10px] text-stone-400 font-mono">
                    {inv.period}
                  </span>
                </div>

                <h4 className="font-bold text-xs sm:text-sm text-stone-900 dark:text-stone-100 leading-snug">
                  {inv.title}
                </h4>

                <p className="text-xs text-stone-600 dark:text-stone-400 line-clamp-2 leading-relaxed">
                  {inv.summary}
                </p>

                <div className="flex items-center justify-between pt-1 border-t border-stone-100 dark:border-stone-800/80 text-[11px] text-stone-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-amber-500" />
                    {inv.location}
                  </span>
                  <span className="font-medium text-amber-600 dark:text-amber-400">
                    {inv.category}
                  </span>
                </div>
              </button>
            );
          })}

          {filteredData.length === 0 && (
            <div className="p-8 text-center text-xs text-stone-500 bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800">
              Aucun reportage ou entrevue ne correspond aux critères sélectionnés.
            </div>
          )}
        </div>

        {/* Right Side: Detailed Dossier & Interview Sheet */}
        <div className="lg:col-span-7">
          {selectedInvestigation ? (
            <div className="rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 sm:p-7 space-y-6 shadow-sm">
              {/* Header Details */}
              <div className="space-y-3 border-b border-stone-200 dark:border-stone-800 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-amber-500 text-stone-950">
                      {selectedInvestigation.dateStr}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-900">
                      {selectedInvestigation.mediaName} • {selectedInvestigation.programOrSeries}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        handleCopy(
                          selectedInvestigation.id,
                          `[ARCHIVE DPJ 1995-2026] ${selectedInvestigation.title}\nDate: ${selectedInvestigation.dateStr}\nMédia: ${selectedInvestigation.mediaName} (${selectedInvestigation.programOrSeries})\nJournalistes: ${selectedInvestigation.journalists.join(', ')}\nFaits documentés: ${selectedInvestigation.documentedFacts.join('; ')}\nTémoignage: "${selectedInvestigation.keyInterviewQuote.quote}" - ${selectedInvestigation.keyInterviewQuote.speaker} (${selectedInvestigation.keyInterviewQuote.role})\nRéférence judiciaire: ${selectedInvestigation.coronerOrJudicialRef}`
                        )
                      }
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-xs font-medium text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-700 transition-colors cursor-pointer"
                    >
                      {copiedId === selectedInvestigation.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                          <span>Copié</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copier la fiche</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        onOpenChatWithQuery?.(
                          `Analyse en profondeur le reportage et l'enquête suivante : "${selectedInvestigation.title}" (${selectedInvestigation.dateStr} par ${selectedInvestigation.mediaName}). Quelles sont les responsabilités de la DPJ, les failles LPJ et les suites judiciaires ?`
                        )
                      }
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors cursor-pointer"
                    >
                      <Bot className="w-3.5 h-3.5 text-amber-300" />
                      <span>Analyser avec l'IA</span>
                    </button>
                  </div>
                </div>

                <h3 className="text-xl font-bold font-serif text-stone-900 dark:text-stone-100 leading-snug">
                  {selectedInvestigation.title}
                </h3>

                <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-stone-500 dark:text-stone-400">
                  <span>
                    <strong>Journalistes d'enquête :</strong> {selectedInvestigation.journalists.join(', ')}
                  </span>
                  <span>•</span>
                  <span>
                    <strong>Lieu / Juridiction :</strong> {selectedInvestigation.location}
                  </span>
                  <span>•</span>
                  <span className="text-rose-600 dark:text-rose-400 font-semibold">
                    {selectedInvestigation.category}
                  </span>
                </div>
              </div>

              {/* Shocking Interview Quote */}
              <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 sm:p-5 space-y-2 relative">
                <Quote className="w-6 h-6 text-amber-500/40 absolute right-4 top-4" />
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-amber-500" />
                  <span>Extrait de Témoignage d'Entrevue</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-900 dark:text-stone-100 italic leading-relaxed">
                  {selectedInvestigation.keyInterviewQuote.quote}
                </p>
                <div className="text-[11px] text-stone-600 dark:text-stone-400 font-medium">
                  — <strong>{selectedInvestigation.keyInterviewQuote.speaker}</strong>, {selectedInvestigation.keyInterviewQuote.role}
                </div>
              </div>

              {/* Documented Facts Discovered */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100 flex items-center gap-1.5 font-mono">
                  <FileText className="w-3.5 h-3.5 text-blue-500" />
                  <span>Faits et Révélations Documentés par l'Enquête :</span>
                </span>
                <ul className="space-y-2 list-none text-xs">
                  {selectedInvestigation.documentedFacts.map((fact, idx) => (
                    <li
                      key={idx}
                      className="p-3 rounded-xl bg-stone-50 dark:bg-stone-850 border border-stone-200 dark:border-stone-800 flex items-start gap-2.5 text-stone-800 dark:text-stone-200 leading-relaxed"
                    >
                      <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-300 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Systemic Failures Under LPJ */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 flex items-center gap-1.5 font-mono">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Défaillances Institutionnelles & Légales (LPJ) :</span>
                </span>
                <ul className="space-y-1.5 list-none text-xs">
                  {selectedInvestigation.systemicFailures.map((failure, idx) => (
                    <li
                      key={idx}
                      className="p-2.5 rounded-xl bg-rose-500/5 dark:bg-rose-950/20 border border-rose-500/20 flex items-start gap-2 text-stone-800 dark:text-stone-200"
                    >
                      <span className="text-rose-500 font-bold">•</span>
                      <span>{failure}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcome and Reaction */}
              <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-850 border border-stone-200 dark:border-stone-800 space-y-1.5 text-xs">
                <span className="font-bold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                  <Scale className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Répercussions Politiques, Judiciaires & Administratives :</span>
                </span>
                <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                  {selectedInvestigation.officialReactionAndOutcome}
                </p>
              </div>

              {/* Legal Ref & Archive Citation */}
              <div className="pt-3 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-stone-500 dark:text-stone-400 font-mono">
                <div>
                  <strong>Référence Judiciaire :</strong> {selectedInvestigation.coronerOrJudicialRef}
                </div>
                <div>
                  <strong>Source d'Archive :</strong> {selectedInvestigation.archiveSource}
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center p-12 text-stone-400 text-xs border border-dashed border-stone-300 dark:border-stone-800 rounded-3xl">
              Sélectionnez une enquête ou un reportage dans la liste pour en consulter l'analyse détaillée.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
