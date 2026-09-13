import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import {
  HeartCrack,
  AlertTriangle,
  Scale,
  Calendar,
  MapPin,
  FileText,
  Search,
  Check,
  Copy,
  ExternalLink,
  Bot,
  Info,
  Layers,
  Flame,
  Filter,
  BarChart3,
  PieChart as PieIcon,
  Map,
  Eye,
  ShieldAlert,
  ChevronRight
} from 'lucide-react';
import {
  DPJ_YEARLY_DECEASED_STATS,
  DPJ_CAUSES_BREAKDOWN,
  DPJ_REGIONAL_DISTRIBUTION,
  DPJ_DOCUMENTED_TRAGEDIES,
  TOTAL_DOCUMENTED_DEATHS_RECENT,
  PERCENT_PRIOR_REPORTS_IGNORED,
  AVG_WAIT_MONTHS_BEFORE_TRAGEDY,
  OFFICIAL_CORONER_INQUIRIES_COUNT,
  DpjDocumentedTragedy
} from '../data/dpjDeceasedChildrenData';
import { safeCopyToClipboard } from '../utils/clipboard';

interface DpjDeceasedChildrenGraphProps {
  onOpenChatWithQuery?: (query: string) => void;
  onSelectDossier?: (dossierId: string) => void;
}

type ChartViewMode = 'timeline' | 'causes' | 'regions';

export const DpjDeceasedChildrenGraph: React.FC<DpjDeceasedChildrenGraphProps> = ({
  onOpenChatWithQuery,
  onSelectDossier
}) => {
  const [chartMode, setChartMode] = useState<ChartViewMode>('timeline');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCase, setSelectedCase] = useState<DpjDocumentedTragedy | null>(
    DPJ_DOCUMENTED_TRAGEDIES[0]
  );
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (id: string, text: string) => {
    const success = await safeCopyToClipboard(text);
    if (success) {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  // Filter documented tragedies
  const filteredCases = DPJ_DOCUMENTED_TRAGEDIES.filter((item) => {
    const matchesStatus =
      selectedStatusFilter === 'all' || item.statusAtDeath === selectedStatusFilter;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.victimOrCase.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.circumstances.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.coronerName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div id="dpj-deceased-children-graph-module" className="space-y-8">
      {/* Memorial Banner */}
      <div className="rounded-3xl border-2 border-rose-600/40 bg-linear-to-br from-rose-950/40 via-stone-950 to-stone-900 p-6 sm:p-8 text-stone-100 shadow-xl relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-rose-600/10 blur-3xl pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/20 border border-rose-500/50 text-rose-300 text-xs font-bold font-mono uppercase tracking-wider">
              <HeartCrack className="w-4 h-4 text-rose-400 animate-pulse" />
              <span>Mémorial & Données Officielles du Bureau du Coroner</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() =>
                  onOpenChatWithQuery?.(
                    "Dresse un bilan complet des enfants décédés sous la DPJ au Québec : le nombre de décès par an, les causes principales établies par le coroner, les signalements ignorés et les responsabilités étatiques."
                  )
                }
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-rose-700 hover:bg-rose-600 text-white text-xs font-bold transition-colors cursor-pointer shadow-sm"
              >
                <Bot className="w-3.5 h-3.5 text-amber-300" />
                <span>Interroger l'Oracle AI sur les Décès</span>
              </button>
            </div>
          </div>

          <div className="space-y-2 max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-black font-serif tracking-tight text-white leading-tight">
              Graphique & Registre des <span className="text-rose-400 underline decoration-rose-500/50 underline-offset-4">Enfants Décédés sous la DPJ</span>
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Consolidation rigoureuse des rapports du Bureau du coroner du Québec, des bilans de la Commission des droits de la personne et de la jeunesse (CDPDJ) et des travaux de la Commission Laurent. Plus de 375 enfants suivis ou signalés à la DPJ ont perdu la vie entre 2018 et 2024.
            </p>
          </div>

          {/* Key Crisis Numbers */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="p-4 rounded-2xl bg-stone-900/90 border border-rose-900/50 space-y-1">
              <div className="text-xs text-rose-300 flex items-center justify-between">
                <span>Décès documentés</span>
                <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-rose-400 font-mono">
                {TOTAL_DOCUMENTED_DEATHS_RECENT}+
              </div>
              <div className="text-[11px] text-stone-400">
                Période 2018-2024 (Coroner & CDPDJ)
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-stone-900/90 border border-stone-800 space-y-1">
              <div className="text-xs text-stone-400 flex items-center justify-between">
                <span>Signalements ignorés</span>
                <Flame className="w-3.5 h-3.5 text-amber-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-amber-400 font-mono">
                {PERCENT_PRIOR_REPORTS_IGNORED}%
              </div>
              <div className="text-[11px] text-stone-400">
                Avaient fait l'objet d'alertes préalables
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-stone-900/90 border border-stone-800 space-y-1">
              <div className="text-xs text-stone-400 flex items-center justify-between">
                <span>Attente moyenne</span>
                <Calendar className="w-3.5 h-3.5 text-blue-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white font-mono">
                {AVG_WAIT_MONTHS_BEFORE_TRAGEDY} mois
              </div>
              <div className="text-[11px] text-stone-400">
                En liste d'attente avant la tragédie
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-stone-900/90 border border-stone-800 space-y-1">
              <div className="text-xs text-stone-400 flex items-center justify-between">
                <span>Enquêtes Coroner</span>
                <Scale className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">
                {OFFICIAL_CORONER_INQUIRIES_COUNT}
              </div>
              <div className="text-[11px] text-stone-400">
                Audits formels sur manquements LPJ
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Interactive Chart Section */}
      <div className="rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-5 sm:p-7 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-5">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-rose-600 dark:text-rose-400" />
              <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">
                Visualisation Analytique des Décès d'Enfants (LPJ)
              </h3>
            </div>
            <p className="text-xs text-stone-500 dark:text-stone-400">
              Sélectionnez le mode d'affichage pour explorer la chronologie annuelle, les causes médicales/légales ou la géographie des défaillances.
            </p>
          </div>

          {/* Chart Mode Switcher */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 shrink-0 self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setChartMode('timeline')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                chartMode === 'timeline'
                  ? 'bg-white dark:bg-stone-700 text-rose-600 dark:text-rose-300 shadow-xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Chronologie Annuelle</span>
            </button>

            <button
              type="button"
              onClick={() => setChartMode('causes')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                chartMode === 'causes'
                  ? 'bg-white dark:bg-stone-700 text-rose-600 dark:text-rose-300 shadow-xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
              }`}
            >
              <PieIcon className="w-3.5 h-3.5" />
              <span>Causes & Circonstances</span>
            </button>

            <button
              type="button"
              onClick={() => setChartMode('regions')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                chartMode === 'regions'
                  ? 'bg-white dark:bg-stone-700 text-rose-600 dark:text-rose-300 shadow-xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
              }`}
            >
              <Map className="w-3.5 h-3.5" />
              <span>Répartition Régionale</span>
            </button>
          </div>
        </div>

        {/* Dynamic Chart Container */}
        <div className="w-full">
          {chartMode === 'timeline' && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between text-xs text-stone-500 dark:text-stone-400 gap-2">
                <span>Évolution du nombre de décès d'enfants connus de la DPJ par année financière et statut administratif au moment de la mort :</span>
                <span className="font-mono text-rose-600 dark:text-rose-400 font-bold">Total : 375 décès recensés</span>
              </div>

              <div className="h-[340px] sm:h-[380px] w-full pt-2">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart
                    data={DPJ_YEARLY_DECEASED_STATS}
                    margin={{ top: 20, right: 20, bottom: 20, left: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#88888820" />
                    <XAxis
                      dataKey="year"
                      stroke="#888888"
                      fontSize={11}
                      tickLine={false}
                    />
                    <YAxis
                      stroke="#888888"
                      fontSize={11}
                      tickLine={false}
                      domain={[0, 80]}
                    />
                    <Tooltip
                      content={({ active, payload, label }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return (
                            <div className="rounded-xl border border-stone-700 bg-stone-950 p-3.5 shadow-xl text-xs text-stone-200 space-y-2 max-w-xs">
                              <div className="font-bold text-sm text-white font-mono flex items-center justify-between border-b border-stone-800 pb-1.5">
                                <span>Année {label}</span>
                                <span className="text-rose-400">{data.totalDeaths} décès</span>
                              </div>
                              <div className="space-y-1 text-[11px]">
                                <div className="flex justify-between text-rose-300">
                                  <span>En attente d'évaluation :</span>
                                  <span className="font-mono font-bold">{data.enAttenteEvaluation}</span>
                                </div>
                                <div className="flex justify-between text-amber-300">
                                  <span>En suivi à domicile :</span>
                                  <span className="font-mono font-bold">{data.enMilieuFamilialSuivi}</span>
                                </div>
                                <div className="flex justify-between text-purple-300">
                                  <span>En placement / foyer :</span>
                                  <span className="font-mono font-bold">{data.enPlacementSubstitut}</span>
                                </div>
                                <div className="flex justify-between text-blue-300">
                                  <span>Dossier fermé précipité :</span>
                                  <span className="font-mono font-bold">{data.dossierFermePrecipite}</span>
                                </div>
                                <div className="flex justify-between text-emerald-400 pt-1 border-t border-stone-800">
                                  <span>Enquêtes Coroner :</span>
                                  <span className="font-mono font-bold">{data.officialCoronerAudits}</span>
                                </div>
                              </div>
                              <div className="text-[10px] text-stone-400 italic pt-1 border-t border-stone-800/80">
                                {data.keyContext}
                              </div>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Legend
                      verticalAlign="top"
                      wrapperStyle={{ paddingBottom: '12px', fontSize: '11px' }}
                    />
                    <Bar
                      dataKey="enAttenteEvaluation"
                      name="En attente d'évaluation"
                      stackId="status"
                      fill="#e11d48"
                      radius={[0, 0, 0, 0]}
                    />
                    <Bar
                      dataKey="enMilieuFamilialSuivi"
                      name="En suivi à domicile"
                      stackId="status"
                      fill="#ea580c"
                      radius={[0, 0, 0, 0]}
                    />
                    <Bar
                      dataKey="enPlacementSubstitut"
                      name="En foyer / hébergement"
                      stackId="status"
                      fill="#9333ea"
                      radius={[0, 0, 0, 0]}
                    />
                    <Bar
                      dataKey="dossierFermePrecipite"
                      name="Dossier fermé prématuré"
                      stackId="status"
                      fill="#0284c7"
                      radius={[4, 4, 0, 0]}
                    />
                    <Line
                      type="monotone"
                      dataKey="officialCoronerAudits"
                      name="Enquêtes Coroner ordonnées"
                      stroke="#10b981"
                      strokeWidth={3}
                      dot={{ r: 4, fill: '#10b981' }}
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>

              <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700/60 flex items-start gap-2.5 text-xs text-stone-600 dark:text-stone-300">
                <Info className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <strong>Constat clé des données :</strong> Le nombre d'enfants décédés alors qu'ils étaient <em>en attente d'évaluation</em> (signalement retenu mais sans travailleur social assigné) a bondi de <strong>16 en 2018-2019</strong> à <strong>26 en 2022-2023</strong> (+62%), corrélé directement avec l'allongement des listes d'attente (3 800+ enfants).
                </div>
              </div>
            </div>
          )}

          {chartMode === 'causes' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Pie Chart */}
                <div className="lg:col-span-6 h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={DPJ_CAUSES_BREAKDOWN}
                        dataKey="count"
                        nameKey="cause"
                        cx="50%"
                        cy="50%"
                        outerRadius={105}
                        innerRadius={55}
                        paddingAngle={3}
                      >
                        {DPJ_CAUSES_BREAKDOWN.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            const data = payload[0].payload as (typeof DPJ_CAUSES_BREAKDOWN)[0];
                            return (
                              <div className="rounded-xl border border-stone-700 bg-stone-950 p-3 shadow-xl text-xs text-stone-200 space-y-1.5 max-w-xs">
                                <div className="font-bold text-white" style={{ color: data.color }}>
                                  {data.cause}
                                </div>
                                <div className="text-stone-300">
                                  <strong>{data.count} décès</strong> ({data.percentage}% des cas recensés)
                                </div>
                                <div className="text-[10px] text-stone-400">
                                  {data.description}
                                </div>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                {/* Legend & Explanations */}
                <div className="lg:col-span-6 space-y-2.5">
                  {DPJ_CAUSES_BREAKDOWN.map((cause) => (
                    <div
                      key={cause.cause}
                      className="p-3 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/50 space-y-1 text-xs"
                    >
                      <div className="flex items-center justify-between font-bold">
                        <div className="flex items-center gap-2">
                          <span
                            className="w-3 h-3 rounded-full shrink-0"
                            style={{ backgroundColor: cause.color }}
                          />
                          <span className="text-stone-900 dark:text-stone-100">
                            {cause.cause}
                          </span>
                        </div>
                        <span className="font-mono text-stone-700 dark:text-stone-300">
                          {cause.count} ({cause.percentage}%)
                        </span>
                      </div>
                      <p className="text-[11px] text-stone-600 dark:text-stone-400">
                        {cause.description}
                      </p>
                      <div className="text-[10px] text-rose-600 dark:text-rose-400 font-medium">
                        Faille DPJ documentée : {cause.failurePoint}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {chartMode === 'regions' && (
            <div className="space-y-4">
              <div className="text-xs text-stone-500 dark:text-stone-400 flex items-center justify-between">
                <span>Distribution des décès et délai moyen d'attente par région administrative :</span>
                <span className="font-mono text-amber-500">Moyenne provinciale : 5.6 mois</span>
              </div>

              <div className="h-[340px] sm:h-[380px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart
                    data={DPJ_REGIONAL_DISTRIBUTION}
                    margin={{ top: 20, right: 20, bottom: 40, left: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#88888820" />
                    <XAxis
                      dataKey="region"
                      stroke="#888888"
                      fontSize={10}
                      tickLine={false}
                      angle={-20}
                      textAnchor="end"
                      height={50}
                    />
                    <YAxis
                      yAxisId="left"
                      stroke="#888888"
                      fontSize={11}
                      tickLine={false}
                      domain={[0, 70]}
                    />
                    <YAxis
                      yAxisId="right"
                      orientation="right"
                      stroke="#f59e0b"
                      fontSize={11}
                      tickLine={false}
                      domain={[0, 10]}
                    />
                    <Tooltip
                      content={({ active, payload, label }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload as (typeof DPJ_REGIONAL_DISTRIBUTION)[0];
                          return (
                            <div className="rounded-xl border border-stone-700 bg-stone-950 p-3 shadow-xl text-xs text-stone-200 space-y-1.5 max-w-xs">
                              <div className="font-bold text-white font-mono border-b border-stone-800 pb-1">
                                {label}
                              </div>
                              <div className="text-rose-400 font-bold">
                                {data.count} enfants décédés
                              </div>
                              <div className="text-amber-400 font-medium">
                                Attente moyenne : {data.waitlistAvgMonths} mois
                              </div>
                              <div className="text-[10px] text-stone-400 italic pt-1 border-t border-stone-800">
                                {data.criticalNote}
                              </div>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Legend
                      verticalAlign="top"
                      wrapperStyle={{ paddingBottom: '12px', fontSize: '11px' }}
                    />
                    <Bar
                      yAxisId="left"
                      dataKey="count"
                      name="Nombre de décès recensés"
                      fill="#e11d48"
                      radius={[4, 4, 0, 0]}
                    />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="waitlistAvgMonths"
                      name="Délai d'attente moyen (mois)"
                      stroke="#f59e0b"
                      strokeWidth={3}
                      dot={{ r: 4, fill: '#f59e0b' }}
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-2.5 text-xs text-stone-800 dark:text-stone-200">
                <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <strong>Corrélats territoriaux :</strong> La Montérégie, Montréal et l'Estrie concentrent le plus haut volume de tragédies, tandis que la Mauricie-Centre-du-Québec affiche le plus long délai moyen d'attente (7.5 mois), ce qui a conduit à la tutelle partielle du CIUSSS MCQ par la CDPDJ.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Case Explorer & Memorial Dossiers */}
      <div className="rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-5 sm:p-7 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-5">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-amber-500" />
              <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">
                Registre des Tragédies Emblématiques & Rapports du Coroner
              </h3>
            </div>
            <p className="text-xs text-stone-500 dark:text-stone-400">
              Dossiers rendus publics ayant fait l'objet d'enquêtes judiciaires ou de coroners, identifiant précisément les défaillances de la LPJ.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Rechercher un dossier, coroner, ville..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 pr-3 py-1.5 rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-xs text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-rose-500/40 w-48 sm:w-64"
              />
            </div>

            <select
              value={selectedStatusFilter}
              onChange={(e) => setSelectedStatusFilter(e.target.value)}
              className="px-3 py-1.5 rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-xs text-stone-900 dark:text-stone-100 focus:outline-none cursor-pointer"
            >
              <option value="all">Tous les statuts administratifs</option>
              <option value="En attente d'évaluation">En attente d'évaluation</option>
              <option value="En suivi à domicile">En suivi à domicile</option>
              <option value="En foyer de groupe / placement">En foyer / placement</option>
              <option value="Dossier fermé prématurément">Dossier fermé prématurément</option>
            </select>
          </div>
        </div>

        {/* Master-Detail Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* List of cases */}
          <div className="lg:col-span-5 space-y-2.5 max-h-[560px] overflow-y-auto pr-1">
            {filteredCases.map((c) => {
              const isSelected = selectedCase?.id === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setSelectedCase(c)}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all cursor-pointer space-y-2 ${
                    isSelected
                      ? 'border-rose-500 bg-rose-500/10 dark:bg-rose-950/30 shadow-xs'
                      : 'border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/40 hover:bg-stone-100 dark:hover:bg-stone-800/70'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-xs text-stone-900 dark:text-stone-100">
                      {c.victimOrCase}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-stone-200 dark:bg-stone-700 text-stone-700 dark:text-stone-300 shrink-0">
                      {c.year}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-[11px] text-stone-500 dark:text-stone-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-rose-500" />
                      {c.region}
                    </span>
                    <span>•</span>
                    <span className="font-medium text-stone-700 dark:text-stone-300">
                      Âge : {c.age}
                    </span>
                  </div>

                  <div className="inline-block px-2 py-0.5 rounded-md text-[10px] font-medium font-mono bg-rose-500/10 text-rose-700 dark:text-rose-300 border border-rose-500/20">
                    {c.statusAtDeath}
                  </div>
                </button>
              );
            })}

            {filteredCases.length === 0 && (
              <div className="p-6 text-center text-xs text-stone-500">
                Aucun dossier ne correspond à votre recherche.
              </div>
            )}
          </div>

          {/* Detailed case sheet */}
          <div className="lg:col-span-7">
            {selectedCase ? (
              <div className="rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950/60 p-5 space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 dark:border-stone-800 pb-3.5">
                  <div>
                    <h4 className="text-base font-bold text-stone-900 dark:text-stone-100">
                      {selectedCase.victimOrCase}
                    </h4>
                    <div className="text-xs text-stone-500 dark:text-stone-400 flex items-center gap-2 mt-0.5">
                      <span>{selectedCase.dateStr}</span>
                      <span>•</span>
                      <span>{selectedCase.region}</span>
                      <span>•</span>
                      <span className="text-rose-600 dark:text-rose-400 font-semibold font-mono">
                        {selectedCase.statusAtDeath}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        handleCopy(
                          selectedCase.id,
                          `[MÉMORIAL DPJ] ${selectedCase.victimOrCase} (${selectedCase.year}) - ${selectedCase.region}\nStatut : ${selectedCase.statusAtDeath}\nRapport coroner : ${selectedCase.coronerReportRef}\nCirconstances : ${selectedCase.circumstances}\nFailles DPJ : ${selectedCase.dpjFailuresIdentified.join('; ')}`
                        )
                      }
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-[11px] font-medium text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-700 transition-colors cursor-pointer"
                    >
                      {copiedId === selectedCase.id ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-500" />
                          <span>Copié</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copier la fiche</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        onOpenChatWithQuery?.(
                          `Explique-moi en détail le cas de ${selectedCase.victimOrCase} (${selectedCase.year}) : quelles ont été les failles de la DPJ et les conclusions du coroner ?`
                        )
                      }
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-bold transition-colors cursor-pointer"
                    >
                      <Bot className="w-3 h-3 text-amber-300" />
                      <span>Analyser avec l'IA</span>
                    </button>
                  </div>
                </div>

                {/* Coroner Ref & Inquirer */}
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-900 dark:text-blue-200 space-y-1">
                  <div className="font-bold flex items-center gap-1.5">
                    <Scale className="w-3.5 h-3.5 text-blue-500" />
                    <span>Enquête Légale du Bureau du Coroner :</span>
                  </div>
                  <div>{selectedCase.coronerReportRef}</div>
                  <div className="text-[11px] text-blue-800 dark:text-blue-300 italic">
                    Présidée par : {selectedCase.coronerName}
                  </div>
                </div>

                {/* Circumstances */}
                <div className="space-y-1.5 text-xs text-stone-700 dark:text-stone-300">
                  <span className="font-bold text-stone-900 dark:text-stone-100">
                    Circonstances documentées :
                  </span>
                  <p className="leading-relaxed bg-white dark:bg-stone-900 p-3 rounded-xl border border-stone-200 dark:border-stone-800">
                    {selectedCase.circumstances}
                  </p>
                </div>

                {/* Identified DPJ Failures */}
                <div className="space-y-2 text-xs">
                  <span className="font-bold text-rose-700 dark:text-rose-400 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Défaillances systémiques de la DPJ constatées par le coroner :</span>
                  </span>
                  <ul className="space-y-1.5 list-none">
                    {selectedCase.dpjFailuresIdentified.map((failure, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 p-2 rounded-lg bg-rose-500/5 dark:bg-rose-950/20 border border-rose-500/20 text-stone-800 dark:text-stone-200"
                      >
                        <span className="text-rose-500 font-bold">•</span>
                        <span>{failure}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact on Commission Laurent */}
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-900 dark:text-amber-200 space-y-1">
                  <span className="font-bold">Conséquence sur la Commission Laurent :</span>
                  <p className="text-[11px] leading-relaxed">
                    {selectedCase.recommendationsCommissionLaurent}
                  </p>
                </div>

                {/* Legal & Judicial Status */}
                <div className="text-xs space-y-1">
                  <span className="font-bold text-stone-900 dark:text-stone-100">
                    Suite judiciaire & administrative :
                  </span>
                  <div className="text-stone-600 dark:text-stone-400">
                    {selectedCase.legalStatus}
                  </div>
                </div>

                {/* Official Sources Grounding */}
                <div className="text-[11px] text-stone-500 dark:text-stone-400 border-t border-stone-200 dark:border-stone-800 pt-3 space-y-1">
                  <span className="font-semibold">Sources vérifiées :</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {selectedCase.sourceCitations.map((src, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md bg-stone-200/80 dark:bg-stone-800 text-[10px] font-mono"
                      >
                        {src}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center p-8 text-stone-400 text-xs border border-dashed border-stone-300 dark:border-stone-800 rounded-2xl">
                Sélectionnez un dossier dans la liste de gauche pour en afficher les détails.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Recourse & Whistleblower Actions for Children in Immediate Danger */}
      <div className="rounded-3xl border border-amber-500/40 bg-amber-500/5 p-6 space-y-4">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-amber-600 dark:text-amber-400" />
          <h4 className="text-base font-bold text-stone-900 dark:text-stone-100">
            Protocole Citoyen : Comment Signaler et Protéger un Enfant en Péril ?
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div className="p-3.5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-1.5">
            <span className="font-bold text-rose-600 dark:text-rose-400">
              1. Danger Imminent (Urgence)
            </span>
            <p className="text-stone-600 dark:text-stone-400">
              Composer immédiatement le <strong>911</strong> et la ligne d'urgence 24/7 de votre DPJ régionale. Exigez la consignation écrite du numéro de signalement en vertu de l'art. 38 LPJ.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-1.5">
            <span className="font-bold text-blue-600 dark:text-blue-400">
              2. Retard d'Évaluation (+30 jours)
            </span>
            <p className="text-stone-600 dark:text-stone-400">
              Saisir d'urgence le <strong>Protecteur du citoyen</strong> (Loi D-11.1) et le Commissaire aux plaintes du CIUSSS pour manquement grave à l'obligation de prise en charge diligente.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-1.5">
            <span className="font-bold text-emerald-600 dark:text-emerald-400">
              3. Défaillances Systémiques
            </span>
            <p className="text-stone-600 dark:text-stone-400">
              Transmettre les preuves documentées à la <strong>CDPDJ</strong> (Commission des droits de la jeunesse) ou au <strong>Bureau du coroner</strong> lorsqu'une situation critique menace la vie.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
