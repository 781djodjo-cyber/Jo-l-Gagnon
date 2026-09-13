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
  ChevronRight,
  UserX,
  Compass,
  Building2,
  Clock,
  Radio
} from 'lucide-react';
import {
  DPJ_YEARLY_FUGUES_STATS,
  DPJ_FUGUES_RISK_FACTORS,
  DPJ_FUGUES_REGIONAL_DISTRIBUTION,
  DPJ_DOCUMENTED_FUGUES_INCIDENTS,
  TOTAL_ANNUAL_FUGUES_ESTIMATE,
  PERCENT_REPETITIVE_FUGUEURS,
  PERCENT_TRAFFICKING_RECRUITMENT,
  DOCUMENTED_FUGUE_HOTEL_PLACEMENTS,
  CRITICAL_POLICE_ALERTS_PER_YEAR,
  DpjDocumentedFugueIncident,
  DPJ_FUGUES_EMERGENCY_PROTOCOL
} from '../data/dpjFuguesData';
import { safeCopyToClipboard } from '../utils/clipboard';

interface DpjFuguesGraphProps {
  onOpenChatWithQuery?: (query: string) => void;
  onSelectDossier?: (dossierId: string) => void;
}

type ChartViewMode = 'timeline' | 'risks' | 'regions';

export const DpjFuguesGraph: React.FC<DpjFuguesGraphProps> = ({
  onOpenChatWithQuery,
  onSelectDossier
}) => {
  const [chartMode, setChartMode] = useState<ChartViewMode>('timeline');
  const [selectedSeverityFilter, setSelectedSeverityFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedIncident, setSelectedIncident] = useState<DpjDocumentedFugueIncident | null>(
    DPJ_DOCUMENTED_FUGUES_INCIDENTS[0]
  );
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (id: string, text: string) => {
    const success = await safeCopyToClipboard(text);
    if (success) {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  // Filter documented incidents
  const filteredIncidents = DPJ_DOCUMENTED_FUGUES_INCIDENTS.filter((item) => {
    const matchesSeverity =
      selectedSeverityFilter === 'all' || item.riskSeverity === selectedSeverityFilter;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.targetFacility.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.circumstances.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSeverity && matchesSearch;
  });

  return (
    <div id="dpj-fugues-graph-module" className="space-y-8">
      {/* Alert Banner: Observatoire des Fugues & Exploitation */}
      <div className="rounded-3xl border-2 border-amber-600/40 bg-linear-to-br from-amber-950/40 via-stone-950 to-stone-900 p-6 sm:p-8 text-stone-100 shadow-xl relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-amber-600/10 blur-3xl pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full bg-rose-600/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/50 text-amber-300 text-xs font-bold font-mono uppercase tracking-wider">
              <Compass className="w-4 h-4 text-amber-400 animate-spin-slow" />
              <span>Observatoire Spécial • Fugues & Traite des Enfants de la DPJ</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {onSelectDossier && (
                <button
                  type="button"
                  onClick={() => onSelectDossier('dpj-fugues-traite-exploitation')}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs transition-all shadow-xs cursor-pointer active:scale-95"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Dossier National d'Enquête</span>
                </button>
              )}

              <button
                type="button"
                onClick={() =>
                  onOpenChatWithQuery?.(
                    "Fais une analyse approfondie et sans concession sur le scandale des fugues massives des enfants placés à la DPJ au Québec, la responsabilité des centres jeunesse comme Laval et Batshaw, et les réseaux de proxénétisme qui recrutent ces mineures."
                  )
                }
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-white font-bold text-xs transition-colors shadow-xs cursor-pointer border border-stone-700"
              >
                <Bot className="w-3.5 h-3.5 text-amber-400" />
                <span>Interroger le Bot sur les Fugues</span>
              </button>
            </div>
          </div>

          <div className="space-y-2 max-w-3xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-serif tracking-tight text-white leading-tight">
              Graphique & Registre des <span className="text-amber-400 underline decoration-amber-500/60">Fugues & Disparitions</span> d'Enfants sous la Garde de la DPJ
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
              Plus de <strong>10 000 épisodes de fugues</strong> sont recensés chaque année au Québec chez des mineurs confiés à la DPJ, en centres de réadaptation et foyers de groupe. Entre portes ouvertes non sécurisées, placements improvisés en chambres de motel et réseaux de proxénétisme gravitant autour des établissements, ce graphique retrace l'ampleur d'une défaillance institutionnelle majeure documentée par la Commission Laurent et la CDPDJ.
            </p>
          </div>

          {/* Key Metric Counters */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="p-4 rounded-2xl bg-stone-900/90 border border-amber-500/30">
              <div className="flex items-center justify-between text-amber-300 text-xs font-semibold mb-1">
                <span>Fugues recensées / an</span>
                <Compass className="w-4 h-4 text-amber-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-black font-mono text-white">
                {TOTAL_ANNUAL_FUGUES_ESTIMATE.toLocaleString('fr-CA')}+
              </div>
              <p className="text-[11px] text-stone-400 mt-1">Épisodes signalés aux corps de police (SPVM/SQ)</p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-900/90 border border-rose-500/30">
              <div className="flex items-center justify-between text-rose-300 text-xs font-semibold mb-1">
                <span>Récidive récurrente</span>
                <AlertTriangle className="w-4 h-4 text-rose-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-black font-mono text-rose-400">
                {PERCENT_REPETITIVE_FUGUEURS}%
              </div>
              <p className="text-[11px] text-stone-400 mt-1">Jeunes ayant fait 3 fugues ou plus par an</p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-900/90 border border-purple-500/30">
              <div className="flex items-center justify-between text-purple-300 text-xs font-semibold mb-1">
                <span>Risque Proxénétisme</span>
                <ShieldAlert className="w-4 h-4 text-purple-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-black font-mono text-purple-300">
                {PERCENT_TRAFFICKING_RECRUITMENT}%
              </div>
              <p className="text-[11px] text-stone-400 mt-1">Adolescentes ciblées par des réseaux criminels</p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-900/90 border border-orange-500/30">
              <div className="flex items-center justify-between text-orange-300 text-xs font-semibold mb-1">
                <span>Alertes de Police Haute Urgence</span>
                <Radio className="w-4 h-4 text-orange-400 animate-pulse" />
              </div>
              <div className="text-2xl sm:text-3xl font-black font-mono text-orange-400">
                {CRITICAL_POLICE_ALERTS_PER_YEAR.toLocaleString('fr-CA')}
              </div>
              <p className="text-[11px] text-stone-400 mt-1">Recherches d'urgence (danger grave ou mortel)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Controls & Chart View Switcher */}
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 space-y-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-4">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              <span>Données Officielles & Évolution Historique des Fugues DPJ</span>
            </h3>
            <p className="text-xs text-stone-500 dark:text-stone-400">
              Sources officielles : Rapports du SPVM, Sûreté du Québec, Enquêtes de la CDPDJ et Commission Laurent (2018-2025).
            </p>
          </div>

          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
            <button
              type="button"
              onClick={() => setChartMode('timeline')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                chartMode === 'timeline'
                  ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 shadow-xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Chronologie Annuelle</span>
            </button>
            <button
              type="button"
              onClick={() => setChartMode('risks')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                chartMode === 'risks'
                  ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 shadow-xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
              }`}
            >
              <PieIcon className="w-3.5 h-3.5" />
              <span>Facteurs de Risque & Causes</span>
            </button>
            <button
              type="button"
              onClick={() => setChartMode('regions')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                chartMode === 'regions'
                  ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 shadow-xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
              }`}
            >
              <Map className="w-3.5 h-3.5" />
              <span>Distribution Régionale</span>
            </button>
          </div>
        </div>

        {/* Dynamic Chart Display Area */}
        <div className="w-full">
          {chartMode === 'timeline' && (
            <div className="space-y-4">
              <div className="h-80 sm:h-96 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart
                    data={DPJ_YEARLY_FUGUES_STATS}
                    margin={{ top: 20, right: 20, bottom: 20, left: 10 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                    <XAxis
                      dataKey="year"
                      tick={{ fill: 'currentColor', fontSize: 11 }}
                      className="text-stone-600 dark:text-stone-400"
                    />
                    <YAxis
                      tick={{ fill: 'currentColor', fontSize: 11 }}
                      className="text-stone-600 dark:text-stone-400"
                    />
                    <Tooltip
                      content={({ active, payload, label }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return (
                            <div className="bg-stone-900 text-stone-100 p-3.5 rounded-xl shadow-xl border border-stone-700 text-xs space-y-1.5 max-w-xs">
                              <div className="font-bold text-amber-400 text-sm border-b border-stone-800 pb-1">
                                Année {label}
                              </div>
                              <div className="flex justify-between gap-4">
                                <span className="text-stone-400">Total épisodes fugues :</span>
                                <span className="font-mono font-bold text-amber-300">
                                  {data.totalFugueEpisodes.toLocaleString('fr-CA')}
                                </span>
                              </div>
                              <div className="flex justify-between gap-4">
                                <span className="text-stone-400">Enfants distincts :</span>
                                <span className="font-mono font-bold text-blue-300">
                                  {data.uniqueChildrenFugueurs.toLocaleString('fr-CA')}
                                </span>
                              </div>
                              <div className="flex justify-between gap-4">
                                <span className="text-stone-400">Fugues de foyers de groupe :</span>
                                <span className="font-mono font-bold text-rose-300">
                                  {data.fuguesFromGroupHomes.toLocaleString('fr-CA')}
                                </span>
                              </div>
                              <div className="flex justify-between gap-4">
                                <span className="text-stone-400">Fugues de chambres de motels :</span>
                                <span className="font-mono font-bold text-orange-300">
                                  {data.fuguesFromHotelRooms.toLocaleString('fr-CA')}
                                </span>
                              </div>
                              <div className="flex justify-between gap-4">
                                <span className="text-stone-400">Alertes police haute urgence :</span>
                                <span className="font-mono font-bold text-purple-300">
                                  {data.policeAlertsHighRisk.toLocaleString('fr-CA')}
                                </span>
                              </div>
                              <p className="text-[11px] text-stone-300 italic pt-1 border-t border-stone-800">
                                {data.keyContext}
                              </p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                    <Bar
                      dataKey="fuguesFromGroupHomes"
                      name="Foyers de groupe & réadaptation"
                      stackId="a"
                      fill="#e11d48"
                      radius={[0, 0, 0, 0]}
                    />
                    <Bar
                      dataKey="fuguesFromFosterCare"
                      name="Familles d'accueil"
                      stackId="a"
                      fill="#d97706"
                      radius={[0, 0, 0, 0]}
                    />
                    <Bar
                      dataKey="fuguesFromHotelRooms"
                      name="Hébergements d'urgence / motels"
                      stackId="a"
                      fill="#ea580c"
                      radius={[4, 4, 0, 0]}
                    />
                    <Line
                      type="monotone"
                      dataKey="totalFugueEpisodes"
                      name="Total épisodes signalés à la police"
                      stroke="#fbbf24"
                      strokeWidth={3}
                      dot={{ r: 4, fill: '#fbbf24' }}
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>

              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200 text-xs flex items-start gap-3">
                <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="font-bold">Constat d'audit de la Commission Laurent & CDPDJ :</div>
                  <p>
                    Plus de <strong>65% des fugues</strong> proviennent des centres de réadaptation et foyers de groupe du réseau public. Les intervenants sont soumis à une directive interdisant le verrouillage et la rétention physique sans ordonnance judiciaire d'encadrement intensif, laissant les mineures sans défense face aux rabatteurs qui stationnent devant les bâtiments.
                  </p>
                </div>
              </div>
            </div>
          )}

          {chartMode === 'risks' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-5 h-72 sm:h-80 w-full flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={DPJ_FUGUES_RISK_FACTORS}
                      cx="50%"
                      cy="50%"
                      innerRadius={65}
                      outerRadius={95}
                      paddingAngle={4}
                      dataKey="count"
                    >
                      {DPJ_FUGUES_RISK_FACTORS.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload as any;
                          return (
                            <div className="bg-stone-900 text-stone-100 p-3 rounded-xl shadow-xl border border-stone-700 text-xs space-y-1 max-w-xs">
                              <div className="font-bold" style={{ color: data.color }}>
                                {data.factor}
                              </div>
                              <div className="text-stone-300">
                                Cas documentés : <strong>{data.count.toLocaleString('fr-CA')}</strong> ({data.percentage}%)
                              </div>
                              <p className="text-[11px] text-stone-400">{data.description}</p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="lg:col-span-7 space-y-3">
                {DPJ_FUGUES_RISK_FACTORS.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/60 space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-3 h-3 rounded-full shrink-0"
                          style={{ backgroundColor: item.color }}
                        />
                        <h4 className="text-xs sm:text-sm font-bold text-stone-900 dark:text-stone-100">
                          {item.factor}
                        </h4>
                      </div>
                      <span className="text-xs font-mono font-black text-amber-600 dark:text-amber-400">
                        {item.percentage}% ({item.count.toLocaleString('fr-CA')})
                      </span>
                    </div>
                    <p className="text-xs text-stone-600 dark:text-stone-400 pl-5">
                      {item.description}
                    </p>
                    <div className="text-[11px] text-rose-700 dark:text-rose-400 font-medium pl-5 flex items-center gap-1.5">
                      <AlertTriangle className="w-3 h-3 shrink-0" />
                      <span>Faille systémique : {item.systemicVulnerability}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {chartMode === 'regions' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {DPJ_FUGUES_REGIONAL_DISTRIBUTION.map((reg, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/60 space-y-3"
                  >
                    <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-700 pb-2">
                      <div className="font-bold text-sm text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-amber-500" />
                        <span>{reg.region}</span>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-800 dark:text-amber-300 font-mono text-xs font-bold">
                        {reg.episodesCount} épisodes/an
                      </span>
                    </div>

                    <div className="text-xs text-stone-500 dark:text-stone-400">
                      <strong>Établissements :</strong> {reg.cisssOrCiusss}
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2 rounded-xl bg-stone-100 dark:bg-stone-900/60">
                        <div className="text-stone-400 text-[10px]">Jeunes uniques</div>
                        <div className="font-bold font-mono text-stone-900 dark:text-stone-100">
                          {reg.uniqueYouths}
                        </div>
                      </div>
                      <div className="p-2 rounded-xl bg-stone-100 dark:bg-stone-900/60">
                        <div className="text-stone-400 text-[10px]">Foyers saturés</div>
                        <div className="font-bold font-mono text-rose-600 dark:text-rose-400">
                          {reg.groupHomesSaturatedCount}
                        </div>
                      </div>
                    </div>

                    <div className="p-2 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-900 dark:text-rose-300 text-[11px] leading-snug">
                      <strong>Point critique :</strong> {reg.criticalAlarm}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Documented Incident Registry & Investigation File Explorer */}
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 space-y-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-rose-600 dark:text-rose-400" />
              <span>Dossiers Documentés & Alertes d'Enquêtes Publiques (CDPDJ / Police)</span>
            </h3>
            <p className="text-xs text-stone-500 dark:text-stone-400">
              Cas de fugues systémiques avérées, scandales en foyers de groupe et jugements de la Chambre de la jeunesse.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher foyer, ville, mot-clé..."
                className="pl-8 pr-3 py-1.5 rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-xs text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-hidden focus:ring-2 focus:ring-amber-500 w-48 sm:w-64"
              />
            </div>

            <select
              value={selectedSeverityFilter}
              onChange={(e) => setSelectedSeverityFilter(e.target.value)}
              className="px-3 py-1.5 rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-xs text-stone-900 dark:text-stone-100 focus:outline-hidden focus:ring-2 focus:ring-amber-500 cursor-pointer"
            >
              <option value="all">Tous les niveaux de risque</option>
              <option value="Extrême - Risque de proxénétisme & traite">Extrême - Risque de proxénétisme</option>
              <option value="Critique - Errance sans ressources">Critique - Errance sans ressources</option>
              <option value="Élevé - Dérive médicamenteuse">Élevé - Dérive médicamenteuse</option>
            </select>
          </div>
        </div>

        {/* Master-Detail Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* List column */}
          <div className="lg:col-span-5 space-y-2.5 max-h-[580px] overflow-y-auto pr-1">
            {filteredIncidents.map((incident) => {
              const isSelected = selectedIncident?.id === incident.id;
              return (
                <button
                  key={incident.id}
                  type="button"
                  onClick={() => setSelectedIncident(incident)}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all cursor-pointer space-y-1.5 ${
                    isSelected
                      ? 'border-amber-500 bg-amber-500/10 dark:bg-amber-950/30 ring-1 ring-amber-500/40 shadow-xs'
                      : 'border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/50 hover:bg-stone-100 dark:hover:bg-stone-800'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-stone-200">
                      {incident.region} • {incident.year}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        incident.riskSeverity.includes('Extrême')
                          ? 'bg-rose-500/20 text-rose-700 dark:text-rose-300'
                          : 'bg-amber-500/20 text-amber-800 dark:text-amber-300'
                      }`}
                    >
                      {incident.riskSeverity.split(' - ')[0]}
                    </span>
                  </div>

                  <h4 className="text-xs sm:text-sm font-bold text-stone-900 dark:text-stone-100 leading-snug">
                    {incident.title}
                  </h4>

                  <div className="text-[11px] text-stone-500 dark:text-stone-400 flex items-center gap-1.5">
                    <Building2 className="w-3 h-3 text-amber-600 shrink-0" />
                    <span className="truncate">{incident.targetFacility}</span>
                  </div>
                </button>
              );
            })}

            {filteredIncidents.length === 0 && (
              <div className="p-8 text-center text-stone-500 text-xs">
                Aucun dossier ne correspond à votre filtre de recherche.
              </div>
            )}
          </div>

          {/* Details column */}
          <div className="lg:col-span-7">
            {selectedIncident ? (
              <div className="p-5 sm:p-6 rounded-3xl border border-stone-200 dark:border-stone-700 bg-stone-50/50 dark:bg-stone-800/40 space-y-5">
                <div className="space-y-2 border-b border-stone-200 dark:border-stone-700 pb-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold font-mono bg-rose-500/20 text-rose-700 dark:text-rose-300">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      <span>{selectedIncident.riskSeverity}</span>
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          handleCopy(
                            selectedIncident.id,
                            `${selectedIncident.title}\nÉtablissement: ${selectedIncident.targetFacility} (${selectedIncident.region})\nCirconstances: ${selectedIncident.circumstances}\nSources: ${selectedIncident.officialSourceCitations.join(', ')}`
                          )
                        }
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-xl bg-stone-200 dark:bg-stone-700 hover:bg-stone-300 dark:hover:bg-stone-600 text-stone-800 dark:text-stone-200 text-xs font-semibold cursor-pointer"
                      >
                        {copiedId === selectedIncident.id ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-500" />
                            <span>Copié</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3 text-stone-400" />
                            <span>Copier Références</span>
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          onOpenChatWithQuery?.(
                            `Analyse en détail le cas suivant de fugues de la DPJ : "${selectedIncident.title}" (${selectedIncident.targetFacility}). Quelles infractions à la LPJ sont en cause et que dit la Commission Laurent ?`
                          )
                        }
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-xl bg-blue-700 hover:bg-blue-600 text-white text-xs font-semibold cursor-pointer shadow-xs"
                      >
                        <Bot className="w-3 h-3 text-amber-300" />
                        <span>Analyser avec l'IA</span>
                      </button>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100">
                    {selectedIncident.title}
                  </h3>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1 text-xs">
                    <div className="p-2 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
                      <div className="text-stone-400 text-[10px]">Établissement & Région</div>
                      <div className="font-semibold text-stone-900 dark:text-stone-100 truncate">
                        {selectedIncident.targetFacility}
                      </div>
                    </div>
                    <div className="p-2 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
                      <div className="text-stone-400 text-[10px]">Profil des mineurs</div>
                      <div className="font-semibold text-stone-900 dark:text-stone-100 truncate">
                        {selectedIncident.youthProfile}
                      </div>
                    </div>
                    <div className="p-2 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 col-span-2 sm:col-span-1">
                      <div className="text-stone-400 text-[10px]">Durée des fugues</div>
                      <div className="font-semibold text-amber-600 dark:text-amber-400 truncate">
                        {selectedIncident.durationDays}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Narrative Circumstances */}
                <div className="space-y-1.5 text-xs sm:text-sm">
                  <h4 className="font-bold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                    <Info className="w-4 h-4 text-amber-500" />
                    <span>Faits Vérifiés & Circonstances du Dossier</span>
                  </h4>
                  <p className="text-stone-600 dark:text-stone-300 leading-relaxed bg-white dark:bg-stone-900 p-3.5 rounded-2xl border border-stone-200 dark:border-stone-800">
                    {selectedIncident.circumstances}
                  </p>
                </div>

                {/* Institutional Failures */}
                <div className="space-y-2">
                  <h4 className="font-bold text-xs sm:text-sm text-rose-700 dark:text-rose-400 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Manquements Institutionnels & Lésions de Droits LPJ</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-stone-700 dark:text-stone-300">
                    {selectedIncident.institutionalFailures.map((fail, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 bg-rose-500/5 p-2 rounded-xl border border-rose-500/20"
                      >
                        <span className="text-rose-500 font-bold shrink-0">•</span>
                        <span>{fail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Police Findings & Laurent Recommendations */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-2xl bg-blue-500/5 border border-blue-500/20 space-y-1">
                    <div className="font-bold text-blue-900 dark:text-blue-300 flex items-center gap-1.5">
                      <Scale className="w-3.5 h-3.5" />
                      <span>Conclusions Policières & Judiciaires</span>
                    </div>
                    <p className="text-stone-600 dark:text-stone-400 leading-snug">
                      {selectedIncident.policeAndJudicialFindings}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-1">
                    <div className="font-bold text-emerald-900 dark:text-emerald-300 flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Recommandations Commission Laurent</span>
                    </div>
                    <p className="text-stone-600 dark:text-stone-400 leading-snug">
                      {selectedIncident.recommendationsLaurentEtCDPDJ}
                    </p>
                  </div>
                </div>

                {/* Official Sources */}
                <div className="space-y-1.5 pt-1 border-t border-stone-200 dark:border-stone-700 text-xs">
                  <div className="font-bold text-stone-500 dark:text-stone-400 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-amber-500" />
                    <span>Pièces Justificatives & Rapports d'Enquêtes Officiels :</span>
                  </div>
                  <ul className="space-y-1 text-[11px] text-stone-600 dark:text-stone-400">
                    {selectedIncident.officialSourceCitations.map((cite, idx) => (
                      <li key={idx} className="flex items-center gap-1.5 font-mono">
                        <ChevronRight className="w-3 h-3 text-amber-500 shrink-0" />
                        <span>{cite}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="p-12 text-center text-stone-400 text-xs">
                Sélectionnez un dossier de fugue documenté à gauche pour afficher l'analyse détaillée.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Section: Protocole d'Urgence Immédiat en Cas de Fugue d'un Enfant sous LPJ */}
      <div className="rounded-3xl border-2 border-rose-500/40 bg-stone-900 text-white p-6 sm:p-8 space-y-6 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-800 pb-5">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4 text-rose-400" />
              <span>Protocole d'Urgence & Droits Immédiats des Familles</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black font-serif text-white">
              Que Faire Dès la Première Heure de Disparition d'un Enfant sous Garde DPJ ?
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 max-w-3xl">
              La règle des 24h ou 48h est un <strong>mythe illégal</strong>. La LPJ et le Code criminel imposent une intervention policière sans délai pour tout mineur en rupture de garde étatique.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => handleCopy('protocol-all', DPJ_FUGUES_EMERGENCY_PROTOCOL.map(s => `${s.step}. ${s.title}\n${s.actionRequired}\nBase légale: ${s.legalBasis}\nAutorité: ${s.authorityToContact}`).join('\n\n'))}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-bold transition-all border border-stone-700"
            >
              {copiedId === 'protocol-all' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Protocole Copié !</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-stone-400" />
                  <span>Copier les 5 Étapes</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {DPJ_FUGUES_EMERGENCY_PROTOCOL.map((step) => (
            <div
              key={step.step}
              className="rounded-2xl border border-stone-800 bg-stone-950/80 p-5 space-y-3 flex flex-col justify-between hover:border-amber-500/40 transition-colors"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="w-7 h-7 rounded-full bg-rose-500/20 text-rose-400 font-mono font-bold text-xs flex items-center justify-center border border-rose-500/30">
                    0{step.step}
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded-full bg-stone-800 text-stone-400">
                    Obligation Légale
                  </span>
                </div>
                <h4 className="font-bold text-sm text-white leading-snug">
                  {step.title}
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {step.actionRequired}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-800 space-y-1.5 text-[11px]">
                <div className="text-amber-400 font-medium">
                  ⚖️ {step.legalBasis}
                </div>
                <div className="text-stone-400 flex items-center gap-1">
                  <span className="font-bold text-stone-300">Contact :</span>
                  <span>{step.authorityToContact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
