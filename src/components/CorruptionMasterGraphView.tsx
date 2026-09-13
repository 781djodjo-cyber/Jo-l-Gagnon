import React, { useState, useMemo } from 'react';
import { 
  Network, 
  Search, 
  Filter, 
  ShieldAlert, 
  FileText, 
  Scale, 
  ExternalLink, 
  AlertOctagon, 
  X, 
  Building2, 
  Sparkles,
  ChevronRight,
  HardHat,
  Server,
  AlertTriangle,
  Brain,
  Plane,
  GraduationCap,
  Landmark,
  ArrowRight,
  CheckCircle2,
  Lock
} from 'lucide-react';
import { 
  NEXUS_NODES, 
  NEXUS_EDGES, 
  NEXUS_CATEGORIES_META, 
  NexusNode, 
  NexusEdge, 
  NexusCategory,
  getNexusEdgesForNode
} from '../data/corruptionNexusGraphData';

interface CorruptionMasterGraphViewProps {
  onOpenDossier: (dossierId: string) => void;
  onInvestigateQuery: (query: string) => void;
}

const SVG_WIDTH = 1040;
const SVG_HEIGHT = 740;

// Deterministic 2D position for each node on the circular & cluster map
const NODE_COORDINATES: Record<string, { x: number; y: number }> = {
  // Center / Core Executive
  'node-executif': { x: 520, y: 370 },
  'node-tresor': { x: 410, y: 280 },
  'node-invest-qc': { x: 630, y: 280 },
  'node-msss-direction': { x: 520, y: 490 },

  // Cluster 1: BTP & Collusion (Top-Left)
  'node-genie-conseil': { x: 230, y: 210 },
  'node-cartel-btp': { x: 130, y: 310 },

  // Cluster 2: Consultants & IT (Top-Right)
  'node-mckinsey-consultants': { x: 790, y: 190 },
  'node-fournisseurs-it': { x: 910, y: 290 },

  // Cluster 3: DPJ, Fugues & Motels (Bottom)
  'node-foyers-dpj': { x: 380, y: 590 },
  'node-motels-transit': { x: 520, y: 660 },
  'node-reseaux-traite': { x: 660, y: 590 },

  // Cluster 4: MK-Ultra / CIA / Secret (Bottom-Left)
  'node-allan-mcgill': { x: 240, y: 440 },
  'node-cia-mkultra': { x: 130, y: 530 },
  'node-sante-canada-federal': { x: 230, y: 630 },

  // Cluster 5: Réseau Mondain SDNY / Epstein (Far Right)
  'node-epstein-aviation': { x: 810, y: 430 },
  'node-brunel-agences': { x: 920, y: 520 },

  // Cluster 6: Pépinière Académique (Top)
  'node-facultes-droit-qc': { x: 360, y: 110 },
  'node-hec-affaires-qc': { x: 680, y: 110 }
};

function makeCurvedPath(x1: number, y1: number, x2: number, y2: number, offsetFactor = 0.18) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const norm = Math.hypot(dx, dy) || 1;
  const offset = Math.min(60, norm * offsetFactor);
  const cx = mx + (-dy / norm) * offset;
  const cy = my + (dx / norm) * offset;
  return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
}

export const CorruptionMasterGraphView: React.FC<CorruptionMasterGraphViewProps> = ({
  onOpenDossier,
  onInvestigateQuery
}) => {
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>('node-executif');
  const [selectedEdgeId, setSelectedEdgeId] = useState<string | null>(null);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('TOUS');
  const [searchQuery, setSearchQuery] = useState('');

  const selectedNode = useMemo(() => {
    return selectedNodeId ? NEXUS_NODES.find(n => n.id === selectedNodeId) : null;
  }, [selectedNodeId]);

  const selectedEdge = useMemo(() => {
    return selectedEdgeId ? NEXUS_EDGES.find(e => e.id === selectedEdgeId) : null;
  }, [selectedEdgeId]);

  const connectedEdges = useMemo(() => {
    if (!selectedNodeId) return [];
    return getNexusEdgesForNode(selectedNodeId);
  }, [selectedNodeId]);

  // Filter nodes based on query & category
  const filteredNodes = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return NEXUS_NODES.filter(n => {
      const matchCat = filterCategory === 'TOUS' || n.category === filterCategory;
      const matchText = !q || 
        n.label.toLowerCase().includes(q) ||
        n.roleSummary.toLowerCase().includes(q) ||
        n.tags.some(t => t.toLowerCase().includes(q));
      return matchCat && matchText;
    });
  }, [searchQuery, filterCategory]);

  const highlightedNodeIds = useMemo(() => {
    if (!selectedNodeId && !hoveredNodeId && !searchQuery && filterCategory === 'TOUS') {
      return new Set(NEXUS_NODES.map(n => n.id));
    }
    const target = hoveredNodeId || selectedNodeId;
    if (!target) {
      return new Set(filteredNodes.map(n => n.id));
    }
    const set = new Set<string>([target]);
    NEXUS_EDGES.forEach(e => {
      if (e.source === target) set.add(e.target);
      if (e.target === target) set.add(e.source);
    });
    return set;
  }, [selectedNodeId, hoveredNodeId, searchQuery, filterCategory, filteredNodes]);

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Sovereign Header Banner */}
      <div className="rounded-3xl bg-linear-to-r from-stone-950 via-slate-950 to-neutral-950 p-6 sm:p-8 text-white shadow-xl border border-stone-800 relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-blue-500/20 text-blue-300 border border-blue-400/30">
              <Network className="w-4 h-4 text-blue-400" />
              <span>Graphique Intégral des Passerelles de Corruption</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% de Vérité Documentée & Sources Légales</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-purple-500/20 text-purple-300 border border-purple-400/30">
              <Lock className="w-3.5 h-3.5 text-purple-400" />
              <span>Plateforme Souveraine Inaltérable</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-serif font-black tracking-tight text-white">
            Cartographie Systémique : Comment Tous Ces Scandales S'Interconnectent
          </h1>

          <p className="text-sm sm:text-base text-stone-300 font-sans leading-relaxed">
            Ce graphique relie les 7 piliers majeurs de la collusion et des abus de pouvoir documentés au Québec : 
            l'Exécutif et les décrets secrets, la collusion BTP (Charbonneau), les firmes de conseil et monopoles IT (SAAQclic), 
            la crise et le trafic des fugueuses de la DPJ en motels, la psychiatrie clandestine de la CIA (MK-Ultra à McGill), 
            les ramifications mondaines décachetées (SDNY) et la pépinière académique des élites.
          </p>
        </div>
      </div>

      {/* Interactive Controls & Filters */}
      <div className="bg-white dark:bg-stone-900 rounded-3xl p-5 border border-stone-200 dark:border-stone-800 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filtrer un acteur, scandale, ministère, firme (ex: McKinsey, Charbonneau, MK-Ultra, DPJ)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
              >
                Effacer
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 text-xs text-stone-500">
            <span><strong>{NEXUS_NODES.length}</strong> Pôles</span>
            <span>•</span>
            <span><strong>{NEXUS_EDGES.length}</strong> Liens Systémiques</span>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-stone-100 dark:border-stone-800 text-xs">
          <button
            onClick={() => setFilterCategory('TOUS')}
            className={`px-3 py-1.5 rounded-xl font-bold cursor-pointer transition-all ${
              filterCategory === 'TOUS'
                ? 'bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400'
            }`}
          >
            Tous les 7 Pôles
          </button>

          {(Object.keys(NEXUS_CATEGORIES_META) as NexusCategory[]).map((cat) => {
            const meta = NEXUS_CATEGORIES_META[cat];
            return (
              <button
                key={cat}
                onClick={() => setFilterCategory(filterCategory === cat ? 'TOUS' : cat)}
                className={`px-3 py-1.5 rounded-xl font-bold cursor-pointer transition-all border ${
                  filterCategory === cat
                    ? 'bg-blue-600 text-white border-blue-500 shadow-xs'
                    : 'bg-stone-50 dark:bg-stone-800/80 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-700 hover:border-blue-400'
                }`}
              >
                {meta.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Grid: Interactive Canvas + Inspector Drawer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: SVG Canvas */}
        <div className="lg:col-span-8 bg-stone-950 rounded-3xl p-4 sm:p-6 border border-stone-800 shadow-2xl relative overflow-hidden flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs text-stone-400 mb-2">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              Cliquez sur un nœud ou une passerelle pour inspecter les preuves officielles
            </span>
            <span className="font-mono text-[11px] text-stone-500">Représentation vectorielle force-centrée</span>
          </div>

          <div className="w-full overflow-x-auto">
            <svg 
              viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`} 
              className="w-full h-auto min-w-[720px] select-none"
            >
              {/* Grid Background Pattern */}
              <defs>
                <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
                </pattern>
                {/* Arrowhead marker */}
                <marker
                  id="arrow"
                  viewBox="0 0 10 10"
                  refX="22"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="#60a5fa" />
                </marker>
                <marker
                  id="arrow-critical"
                  viewBox="0 0 10 10"
                  refX="22"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="#f43f5e" />
                </marker>
              </defs>

              <rect width={SVG_WIDTH} height={SVG_HEIGHT} fill="url(#grid-pattern)" />

              {/* Cluster Hull Circles / Backdrops */}
              <circle cx="520" cy="370" r="160" fill="#2563eb" fillOpacity="0.04" stroke="#2563eb" strokeOpacity="0.1" strokeDasharray="4 4" />
              <circle cx="180" cy="260" r="130" fill="#d97706" fillOpacity="0.04" stroke="#d97706" strokeOpacity="0.1" strokeDasharray="4 4" />
              <circle cx="850" cy="240" r="130" fill="#0891b2" fillOpacity="0.04" stroke="#0891b2" strokeOpacity="0.1" strokeDasharray="4 4" />
              <circle cx="520" cy="620" r="150" fill="#dc2626" fillOpacity="0.04" stroke="#dc2626" strokeOpacity="0.1" strokeDasharray="4 4" />
              <circle cx="200" cy="530" r="130" fill="#7c3aed" fillOpacity="0.04" stroke="#7c3aed" strokeOpacity="0.1" strokeDasharray="4 4" />
              <circle cx="860" cy="480" r="120" fill="#be185d" fillOpacity="0.04" stroke="#be185d" strokeOpacity="0.1" strokeDasharray="4 4" />
              <circle cx="520" cy="110" r="180" fill="#059669" fillOpacity="0.04" stroke="#059669" strokeOpacity="0.1" strokeDasharray="4 4" />

              {/* EDGES / PASSAGEWAYS */}
              {NEXUS_EDGES.map((edge) => {
                const sPos = NODE_COORDINATES[edge.source];
                const tPos = NODE_COORDINATES[edge.target];
                if (!sPos || !tPos) return null;

                const isConnectedToSelected = selectedNodeId === edge.source || selectedNodeId === edge.target;
                const isSelected = selectedEdgeId === edge.id;
                const strokeColor = edge.severity === 'Critique' ? '#f43f5e' : '#38bdf8';
                const opacity = isSelected ? 1 : isConnectedToSelected ? 0.9 : 0.25;
                const strokeWidth = isSelected ? 3.5 : isConnectedToSelected ? 2.5 : 1.2;

                const pathD = makeCurvedPath(sPos.x, sPos.y, tPos.x, tPos.y);

                return (
                  <g 
                    key={edge.id}
                    onClick={() => {
                      setSelectedEdgeId(edge.id);
                      setSelectedNodeId(null);
                    }}
                    className="cursor-pointer group"
                  >
                    <path
                      d={pathD}
                      fill="none"
                      stroke={strokeColor}
                      strokeWidth={strokeWidth}
                      strokeOpacity={opacity}
                      strokeDasharray={edge.relationType === 'FINANCEMENT_OCCULTE' || edge.relationType === 'EXPERIMENTATION_CLANDESTINE' ? '4 4' : undefined}
                      markerEnd={edge.severity === 'Critique' ? 'url(#arrow-critical)' : 'url(#arrow)'}
                      className="transition-all duration-300"
                    />
                    {/* Hover hotspot */}
                    <path
                      d={pathD}
                      fill="none"
                      stroke="transparent"
                      strokeWidth="14"
                    />
                  </g>
                );
              })}

              {/* NODES */}
              {NEXUS_NODES.map((node) => {
                const pos = NODE_COORDINATES[node.id];
                if (!pos) return null;

                const isSelected = selectedNodeId === node.id;
                const isHovered = hoveredNodeId === node.id;
                const isHighlighted = highlightedNodeIds.has(node.id);
                const categoryMeta = NEXUS_CATEGORIES_META[node.category];

                const radius = node.documentedPowerLevel === 'Stratégique' ? 24 : 19;
                const fillOpacity = isSelected ? 1 : isHighlighted ? 0.9 : 0.2;

                return (
                  <g
                    key={node.id}
                    transform={`translate(${pos.x}, ${pos.y})`}
                    onClick={() => {
                      setSelectedNodeId(node.id);
                      setSelectedEdgeId(null);
                    }}
                    onMouseEnter={() => setHoveredNodeId(node.id)}
                    onMouseLeave={() => setHoveredNodeId(null)}
                    className="cursor-pointer transition-transform duration-200 hover:scale-110"
                  >
                    {/* Outer Glow on Selected */}
                    {isSelected && (
                      <circle
                        r={radius + 8}
                        fill="none"
                        stroke={categoryMeta.color}
                        strokeWidth="2"
                        strokeDasharray="3 3"
                        className="animate-spin-slow"
                      />
                    )}

                    {/* Node Body */}
                    <circle
                      r={radius}
                      fill={categoryMeta.color}
                      fillOpacity={fillOpacity}
                      stroke="#ffffff"
                      strokeWidth={isSelected ? 3 : 1.5}
                      strokeOpacity={isHighlighted ? 0.9 : 0.3}
                      className="shadow-lg"
                    />

                    {/* Node Core Indicator */}
                    <circle
                      r={4}
                      fill="#ffffff"
                      fillOpacity={isHighlighted ? 1 : 0.4}
                    />

                    {/* Label */}
                    <text
                      y={radius + 14}
                      textAnchor="middle"
                      fill="#e2e8f0"
                      fontSize="10"
                      fontWeight={isSelected ? 'bold' : '500'}
                      opacity={isHighlighted ? 1 : 0.3}
                      className="pointer-events-none drop-shadow-md select-none"
                    >
                      {node.label.length > 28 ? `${node.label.slice(0, 26)}...` : node.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Bottom Canvas Legend */}
          <div className="pt-4 border-t border-stone-800 flex flex-wrap items-center justify-between gap-3 text-[11px] text-stone-400">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                Lien Critique / Violations Avérées
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-400 inline-block" />
                Passerelle Documentée
              </span>
            </div>
            <span className="text-stone-500 font-mono">
              Données croisées : CEIC • VGQ • Coroner • Sénat USA • SDNY
            </span>
          </div>
        </div>

        {/* Right: Deep Evidence Inspector Drawer */}
        <div className="lg:col-span-4 space-y-4">
          {/* NODE INSPECTOR */}
          {selectedNode && (
            <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 border border-stone-200 dark:border-stone-800 shadow-xl space-y-5 animate-in fade-in">
              {/* Header */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black border uppercase tracking-wider ${NEXUS_CATEGORIES_META[selectedNode.category].bgBadge}`}>
                    {selectedNode.categoryLabel}
                  </span>
                  <span className="text-[11px] text-stone-400 font-semibold">
                    Niveau : {selectedNode.documentedPowerLevel}
                  </span>
                </div>
                <h2 className="text-lg font-bold font-serif text-stone-900 dark:text-stone-100">
                  {selectedNode.label}
                </h2>
              </div>

              {/* Role Summary */}
              <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/60 dark:border-stone-700/50 text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                <span className="font-bold text-stone-900 dark:text-stone-100">Fonction dans le système : </span>
                {selectedNode.roleSummary}
              </div>

              {/* Official Proof */}
              <div className="space-y-1.5 text-xs">
                <div className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider flex items-center gap-1">
                  <Scale className="w-3.5 h-3.5" />
                  Preuve & Document Officiel Incontestable :
                </div>
                <p className="font-medium text-stone-800 dark:text-stone-200 italic border-l-2 border-blue-500 pl-3 py-0.5">
                  {selectedNode.officialProofSource}
                </p>
                <div className="text-[10px] text-stone-400 font-mono">
                  Réf : {selectedNode.officialRef}
                </div>
              </div>

              {/* Connected Passageways */}
              <div className="space-y-2 pt-2 border-t border-stone-100 dark:border-stone-800">
                <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider flex items-center justify-between">
                  <span>Passerelles & Liens avec ce Pôle ({connectedEdges.length}) :</span>
                </div>

                <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                  {connectedEdges.map((edge) => {
                    const otherNodeId = edge.source === selectedNode.id ? edge.target : edge.source;
                    const otherNode = NEXUS_NODES.find(n => n.id === otherNodeId);
                    return (
                      <div
                        key={edge.id}
                        onClick={() => {
                          setSelectedEdgeId(edge.id);
                          setSelectedNodeId(null);
                        }}
                        className="p-2.5 rounded-xl bg-stone-50 dark:bg-stone-800/80 border border-stone-200/80 dark:border-stone-700/60 hover:border-blue-400 transition-colors cursor-pointer space-y-1"
                      >
                        <div className="flex items-center justify-between text-xs font-bold text-stone-900 dark:text-stone-100">
                          <span className="line-clamp-1">{otherNode?.label}</span>
                          <span className="text-[10px] text-rose-600 dark:text-rose-400 shrink-0 ml-2">
                            {edge.severity}
                          </span>
                        </div>
                        <p className="text-[11px] text-stone-600 dark:text-stone-400 line-clamp-2">
                          {edge.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-stone-100 dark:border-stone-800 space-y-2">
                {selectedNode.associatedDossierId && (
                  <button
                    onClick={() => onOpenDossier(selectedNode.associatedDossierId!)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white transition-colors cursor-pointer shadow-xs"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Consulter le Dossier Documentaire Lié</span>
                  </button>
                )}

                <button
                  onClick={() => onInvestigateQuery(`Investigation intégrale sur les liens d'intérêts et responsabilités de ${selectedNode.label}`)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>Lancer une Enquête d'Intégrité IA</span>
                </button>
              </div>
            </div>
          )}

          {/* EDGE INSPECTOR */}
          {selectedEdge && (
            <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 border border-stone-200 dark:border-stone-800 shadow-xl space-y-5 animate-in fade-in">
              <div>
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-rose-100 text-rose-900 dark:bg-rose-950/80 dark:text-rose-300 border border-rose-400 uppercase tracking-wider">
                    {selectedEdge.relationType.replace(/_/g, ' ')}
                  </span>
                  <span className="text-xs font-bold text-rose-600 dark:text-rose-400">
                    {selectedEdge.severity}
                  </span>
                </div>
                <h3 className="text-base font-bold font-serif text-stone-900 dark:text-stone-100">
                  {selectedEdge.label}
                </h3>
              </div>

              {/* Connected Pair */}
              <div className="p-3 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/60 dark:border-stone-700/50 space-y-2 text-xs">
                <div className="text-stone-500 font-bold uppercase text-[10px]">Axe d'influence :</div>
                <div className="flex items-center gap-2 text-stone-900 dark:text-stone-100 font-bold">
                  <span>{NEXUS_NODES.find(n => n.id === selectedEdge.source)?.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  <span>{NEXUS_NODES.find(n => n.id === selectedEdge.target)?.label}</span>
                </div>
              </div>

              {/* Documented Proof */}
              <div className="space-y-1.5 text-xs">
                <div className="text-[11px] font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider">
                  Démonstration et Faits Établis :
                </div>
                <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                  {selectedEdge.documentedProof}
                </p>
              </div>

              {/* Official Record */}
              <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-300 dark:border-amber-800/50 text-xs text-amber-900 dark:text-amber-300 space-y-1">
                <div className="font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                  Pièce d'Archive Officielle :
                </div>
                <div className="font-mono text-[11px]">{selectedEdge.officialRecord}</div>
                {selectedEdge.financialVolumeOrDamage && (
                  <div className="pt-1 text-[11px] font-bold text-rose-700 dark:text-rose-300">
                    Ampleur / Dommage : {selectedEdge.financialVolumeOrDamage}
                  </div>
                )}
              </div>

              {/* Back to Node button */}
              <button
                onClick={() => {
                  setSelectedNodeId(selectedEdge.source);
                  setSelectedEdgeId(null);
                }}
                className="w-full py-2 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer text-center"
              >
                Inspecter le pôle source ({NEXUS_NODES.find(n => n.id === selectedEdge.source)?.label})
              </button>
            </div>
          )}

          {/* Quick Pillars Overview Card */}
          <div className="p-5 rounded-3xl bg-stone-100 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-800 text-xs space-y-2">
            <div className="font-bold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-blue-600" />
              <span>Garantie de Souveraineté & Rigueur</span>
            </div>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
              Aucune rumeur non étayée n'est admise dans ce graphique. Chaque lien relève exclusivement 
              de <strong>conclusions de commissions royales ou provinciales</strong>, de <strong>jugements des cours supérieures</strong>, 
              de <strong>rapports du Vérificateur général</strong> ou de <strong>décrets publiés à la Gazette officielle</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
