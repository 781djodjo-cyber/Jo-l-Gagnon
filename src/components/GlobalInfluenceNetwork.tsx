import React, { useMemo, useState } from 'react';
import { Network, Info, Search, X, AlertOctagon } from 'lucide-react';
import { InterestLink, InvestigationReport, SavedDossier } from '../types';
import { PRELOADED_DOSSIERS } from '../data/preloadedDossiers';
import { CorruptionTimeline } from './CorruptionTimeline';

type RiskLevel = InterestLink['riskLevel'];

interface SourceRef {
  id: string;
  title: string;
  color: string;
}

interface GNode {
  id: string;
  x: number;
  y: number;
  degree: number;
  maxRisk: RiskLevel;
  cluster: string;
  clusterColor: string;
  sources: SourceRef[];
}

interface GEdge {
  from: string;
  to: string;
  relationship: string;
  riskLevel: RiskLevel;
  legalStatus: string;
  source: SourceRef;
}

const RISK_ORDER: Record<RiskLevel, number> = { Critique: 3, Modéré: 2, Faible: 1 };
const RISK_COLOR: Record<RiskLevel, string> = {
  Critique: '#e11d48',
  Modéré: '#d97706',
  Faible: '#059669',
};

// Distinct accent per source dossier so each corruption cluster reads apart.
const CLUSTER_PALETTE = [
  '#1d4ed8', // blue
  '#7c3aed', // violet
  '#0891b2', // cyan
  '#c2410c', // orange
  '#be185d', // pink
  '#4d7c0f', // lime
  '#a16207', // yellow-brown
  '#0f766e', // teal
];

const VIEW_W = 960;
const VIEW_H = 680;

function curvedPath(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const norm = Math.hypot(dx, dy) || 1;
  const offset = Math.min(50, norm * 0.16);
  const cx = mx + (-dy / norm) * offset;
  const cy = my + (dx / norm) * offset;
  return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
}

interface GlobalInfluenceNetworkProps {
  history: SavedDossier[];
  onOpenReport: (report: InvestigationReport) => void;
}

export const GlobalInfluenceNetwork: React.FC<GlobalInfluenceNetworkProps> = ({
  history,
  onOpenReport,
}) => {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [hoverEdge, setHoverEdge] = useState<number | null>(null);
  const [clusterFilter, setClusterFilter] = useState<string>('Tous');
  const [query, setQuery] = useState('');
  const [viewMode, setViewMode] = useState<'network' | 'timeline'>('network');

  // Every report we can map: the emblematic dossiers plus anything the
  // citizen has investigated this session.
  const sources = useMemo(() => {
    const base = PRELOADED_DOSSIERS.map((d, i) => ({
      id: d.id,
      title: d.title,
      color: CLUSTER_PALETTE[i % CLUSTER_PALETTE.length],
      report: d.report,
    }));
    const historyEntries = history.map((h, i) => ({
      id: h.id,
      title: h.subject,
      color: CLUSTER_PALETTE[(base.length + i) % CLUSTER_PALETTE.length],
      report: h.report,
    }));
    // De-dupe by id so re-opened dossiers don't stack.
    const seen = new Set<string>();
    return [...base, ...historyEntries].filter((s) => {
      if (seen.has(s.id)) return false;
      seen.add(s.id);
      return true;
    });
  }, [history]);

  const { nodes, edges, sourceRefs } = useMemo(() => {
    const sourceRefs: SourceRef[] = sources.map((s) => ({
      id: s.id,
      title: s.title,
      color: s.color,
    }));

    const nodeMap = new Map<
      string,
      { degree: number; maxRisk: RiskLevel; cluster: string; clusterColor: string; sources: Map<string, SourceRef> }
    >();
    const edgeList: GEdge[] = [];

    sources.forEach((s) => {
      const ref: SourceRef = { id: s.id, title: s.title, color: s.color };
      (s.report.interestLinks || []).forEach((l) => {
        edgeList.push({
          from: l.actorFrom,
          to: l.actorTo,
          relationship: l.relationship,
          riskLevel: l.riskLevel,
          legalStatus: l.legalStatus,
          source: ref,
        });
        [l.actorFrom, l.actorTo].forEach((actor) => {
          const cur = nodeMap.get(actor);
          if (!cur) {
            nodeMap.set(actor, {
              degree: 1,
              maxRisk: l.riskLevel,
              cluster: s.id,
              clusterColor: s.color,
              sources: new Map([[s.id, ref]]),
            });
          } else {
            cur.degree += 1;
            if (RISK_ORDER[l.riskLevel] > RISK_ORDER[cur.maxRisk]) cur.maxRisk = l.riskLevel;
            if (!cur.sources.has(s.id)) cur.sources.set(s.id, ref);
          }
        });
      });
    });

    // Deterministic force-directed layout. Seed each node near its cluster
    // centroid (clusters arranged on a ring), then relax with repulsion +
    // edge springs + cluster gravity. Deterministic = stable across renders.
    const clusterIds = sources.map((s) => s.id);
    const clusterCount = Math.max(1, clusterIds.length);
    const clusterCentroid = new Map<string, { x: number; y: number }>();
    clusterIds.forEach((id, i) => {
      const angle = (i / clusterCount) * Math.PI * 2 - Math.PI / 2;
      const ringR = clusterCount === 1 ? 0 : Math.min(VIEW_W, VIEW_H) / 2 - 170;
      clusterCentroid.set(id, {
        x: VIEW_W / 2 + Math.cos(angle) * ringR,
        y: VIEW_H / 2 + Math.sin(angle) * ringR,
      });
    });

    const ids = Array.from(nodeMap.keys());
    const pos = new Map<string, { x: number; y: number; vx: number; vy: number }>();
    ids.forEach((id, i) => {
      const meta = nodeMap.get(id)!;
      const c = clusterCentroid.get(meta.cluster)!;
      // Small deterministic spiral offset around the centroid.
      const a = i * 2.399963; // golden angle
      const rr = 40 + (i % 5) * 12;
      pos.set(id, { x: c.x + Math.cos(a) * rr, y: c.y + Math.sin(a) * rr, vx: 0, vy: 0 });
    });

    const adjacency = edgeList.map((e) => [e.from, e.to] as const);
    const ITER = 320;
    const REPULSION = 24000;
    const SPRING = 0.02;
    const SPRING_LEN = 120;
    const CLUSTER_PULL = 0.015;
    const CENTER_PULL = 0.004;

    for (let step = 0; step < ITER; step++) {
      // Repulsion (O(n^2) — fine for a few dozen nodes).
      for (let i = 0; i < ids.length; i++) {
        const a = pos.get(ids[i])!;
        for (let j = i + 1; j < ids.length; j++) {
          const b = pos.get(ids[j])!;
          let dx = a.x - b.x;
          let dy = a.y - b.y;
          let dist2 = dx * dx + dy * dy;
          if (dist2 < 0.01) {
            dx = (i - j) * 0.1 + 0.1;
            dy = 0.1;
            dist2 = dx * dx + dy * dy;
          }
          const dist = Math.sqrt(dist2);
          const force = REPULSION / dist2;
          const fx = (dx / dist) * force;
          const fy = (dy / dist) * force;
          a.vx += fx;
          a.vy += fy;
          b.vx -= fx;
          b.vy -= fy;
        }
      }
      // Edge springs.
      adjacency.forEach(([from, to]) => {
        const a = pos.get(from);
        const b = pos.get(to);
        if (!a || !b) return;
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const dist = Math.hypot(dx, dy) || 1;
        const force = SPRING * (dist - SPRING_LEN);
        const fx = (dx / dist) * force;
        const fy = (dy / dist) * force;
        a.vx += fx;
        a.vy += fy;
        b.vx -= fx;
        b.vy -= fy;
      });
      // Cluster + center gravity.
      ids.forEach((id) => {
        const p = pos.get(id)!;
        const meta = nodeMap.get(id)!;
        const c = clusterCentroid.get(meta.cluster)!;
        p.vx += (c.x - p.x) * CLUSTER_PULL;
        p.vy += (c.y - p.y) * CLUSTER_PULL;
        p.vx += (VIEW_W / 2 - p.x) * CENTER_PULL;
        p.vy += (VIEW_H / 2 - p.y) * CENTER_PULL;
      });
      // Integrate with damping.
      const damping = 0.82;
      ids.forEach((id) => {
        const p = pos.get(id)!;
        p.vx *= damping;
        p.vy *= damping;
        p.x += Math.max(-30, Math.min(30, p.vx));
        p.y += Math.max(-30, Math.min(30, p.vy));
        p.x = Math.max(60, Math.min(VIEW_W - 60, p.x));
        p.y = Math.max(50, Math.min(VIEW_H - 50, p.y));
      });
    }

    const nodeList: GNode[] = ids.map((id) => {
      const meta = nodeMap.get(id)!;
      const p = pos.get(id)!;
      return {
        id,
        x: p.x,
        y: p.y,
        degree: meta.degree,
        maxRisk: meta.maxRisk,
        cluster: meta.cluster,
        clusterColor: meta.clusterColor,
        sources: Array.from(meta.sources.values()),
      };
    });

    return { nodes: nodeList, edges: edgeList, sourceRefs };
  }, [sources]);

  const nodeById = useMemo(() => {
    const m = new Map<string, GNode>();
    nodes.forEach((n) => m.set(n.id, n));
    return m;
  }, [nodes]);

  const maxDegree = useMemo(() => Math.max(1, ...nodes.map((n) => n.degree)), [nodes]);
  const nodeRadius = (n: GNode) => 14 + (n.degree / maxDegree) * 20;

  const normalizedQuery = query.trim().toLowerCase();

  const passesCluster = (clusterId: string) =>
    clusterFilter === 'Tous' || clusterId === clusterFilter;

  const isEdgeVisible = (e: GEdge) => passesCluster(e.source.id);

  const isEdgeActive = (e: GEdge) => {
    if (!isEdgeVisible(e)) return false;
    if (activeNode) return e.from === activeNode || e.to === activeNode;
    return true;
  };

  const isNodeVisible = (n: GNode) =>
    clusterFilter === 'Tous' || n.sources.some((s) => s.id === clusterFilter);

  const isNodeHighlighted = (n: GNode) => {
    if (normalizedQuery && !n.id.toLowerCase().includes(normalizedQuery)) return false;
    if (activeNode === null) return true;
    if (n.id === activeNode) return true;
    return edges.some(
      (e) =>
        isEdgeVisible(e) &&
        ((e.from === activeNode && e.to === n.id) || (e.to === activeNode && e.from === n.id))
    );
  };

  const activeConnections = activeNode
    ? edges.filter((e) => isEdgeVisible(e) && (e.from === activeNode || e.to === activeNode))
    : [];

  const activeNodeData = activeNode ? nodeById.get(activeNode) : null;

  const stats = useMemo(() => {
    const visibleEdges = edges.filter(isEdgeVisible);
    const visibleActors = new Set<string>();
    visibleEdges.forEach((e) => {
      visibleActors.add(e.from);
      visibleActors.add(e.to);
    });
    const critical = visibleEdges.filter((e) => e.riskLevel === 'Critique').length;
    return { actors: visibleActors.size, links: visibleEdges.length, critical };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [edges, clusterFilter]);

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-blue-900 text-white dark:bg-blue-800">
            <Network className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold font-serif text-stone-900 dark:text-stone-100">
              Le Grand Réseau : Toutes les Connexions
            </h2>
            <p className="text-xs text-stone-500 dark:text-stone-400">
              Cartographie globale reliant tous les acteurs et parties compromises à travers l'ensemble des dossiers documentés
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-2xl bg-stone-50 dark:bg-stone-950 border border-stone-200/70 dark:border-stone-800 p-3 text-center">
            <div className="text-2xl font-black font-serif text-stone-900 dark:text-stone-100">{stats.actors}</div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Acteurs</div>
          </div>
          <div className="rounded-2xl bg-stone-50 dark:bg-stone-950 border border-stone-200/70 dark:border-stone-800 p-3 text-center">
            <div className="text-2xl font-black font-serif text-stone-900 dark:text-stone-100">{stats.links}</div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Liens d'influence</div>
          </div>
          <div className="rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200/70 dark:border-rose-900 p-3 text-center">
            <div className="text-2xl font-black font-serif text-rose-700 dark:text-rose-300">{stats.critical}</div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-rose-500/80 dark:text-rose-400/80">Liens critiques</div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un acteur (ministère, firme, cabinet…)"
            className="w-full pl-10 pr-9 py-2.5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-sm text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 cursor-pointer"
              aria-label="Effacer la recherche"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Cluster filter chips */}
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setClusterFilter('Tous')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              clusterFilter === 'Tous'
                ? 'bg-blue-900 text-white dark:bg-blue-700'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
            }`}
          >
            Tous les dossiers
          </button>
          {sourceRefs.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setClusterFilter(s.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                clusterFilter === s.id
                  ? 'text-white'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
              }`}
              style={clusterFilter === s.id ? { backgroundColor: s.color } : undefined}
            >
              <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: s.color }} />
              <span className="max-w-[180px] truncate">{s.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Graph + panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <div className="relative rounded-3xl bg-stone-50 dark:bg-stone-950 border border-stone-200/70 dark:border-stone-800 overflow-hidden">
            <svg
              viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
              className="w-full h-auto"
              role="img"
              aria-label="Graphe global des connexions d'influence entre tous les acteurs des dossiers"
            >
              <defs>
                {(['Critique', 'Modéré', 'Faible'] as RiskLevel[]).map((r) => (
                  <marker
                    key={r}
                    id={`g-arrow-${r}`}
                    viewBox="0 0 10 10"
                    refX="9"
                    refY="5"
                    markerWidth="7"
                    markerHeight="7"
                    orient="auto-start-reverse"
                  >
                    <path d="M 0 0 L 10 5 L 0 10 z" fill={RISK_COLOR[r]} />
                  </marker>
                ))}
              </defs>

              {/* Edges */}
              {edges.map((e, idx) => {
                const from = nodeById.get(e.from);
                const to = nodeById.get(e.to);
                if (!from || !to) return null;
                if (!isEdgeVisible(e)) return null;
                const active = isEdgeActive(e) && (hoverEdge === null || hoverEdge === idx);
                const dimmed = activeNode !== null && !isEdgeActive(e);
                return (
                  <path
                    key={idx}
                    d={curvedPath(from.x, from.y, to.x, to.y)}
                    fill="none"
                    stroke={RISK_COLOR[e.riskLevel]}
                    strokeWidth={hoverEdge === idx ? 3.5 : e.riskLevel === 'Critique' ? 2.4 : 1.6}
                    strokeOpacity={dimmed ? 0.08 : active ? 0.85 : 0.4}
                    markerEnd={`url(#g-arrow-${e.riskLevel})`}
                    className="cursor-pointer transition-all"
                    onMouseEnter={() => setHoverEdge(idx)}
                    onMouseLeave={() => setHoverEdge(null)}
                  />
                );
              })}

              {/* Nodes */}
              {nodes.map((n) => {
                if (!isNodeVisible(n)) return null;
                const r = nodeRadius(n);
                const highlighted = isNodeHighlighted(n);
                const selected = activeNode === n.id;
                return (
                  <g
                    key={n.id}
                    transform={`translate(${n.x}, ${n.y})`}
                    className="cursor-pointer"
                    onClick={() => setActiveNode((cur) => (cur === n.id ? null : n.id))}
                    opacity={highlighted ? 1 : 0.18}
                  >
                    {selected && (
                      <circle r={r + 7} fill="none" stroke={n.clusterColor} strokeWidth={2} strokeOpacity={0.5} />
                    )}
                    <circle
                      r={r}
                      fill={selected ? n.clusterColor : 'currentColor'}
                      className={selected ? '' : 'text-white dark:text-stone-900'}
                      stroke={n.clusterColor}
                      strokeWidth={selected ? 4 : 2.5}
                    />
                    {/* Risk indicator ring dot */}
                    <circle cx={r * 0.62} cy={-r * 0.62} r={4.5} fill={RISK_COLOR[n.maxRisk]} stroke="white" strokeWidth={1} />
                    <text
                      textAnchor="middle"
                      dy="0.35em"
                      className={`font-bold pointer-events-none ${selected ? 'fill-white' : 'fill-stone-700 dark:fill-stone-200'}`}
                      style={{ fontSize: 12 }}
                    >
                      {n.degree}
                    </text>
                    <text
                      textAnchor="middle"
                      y={r + 15}
                      className="fill-stone-700 dark:fill-stone-300 pointer-events-none"
                      style={{ fontSize: 12, fontWeight: 600 }}
                    >
                      {n.id.length > 22 ? `${n.id.slice(0, 20)}…` : n.id}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Risk legend overlay */}
            <div className="absolute bottom-3 left-3 flex items-center gap-3 flex-wrap rounded-xl bg-white/85 dark:bg-stone-900/85 backdrop-blur px-3 py-1.5 border border-stone-200/70 dark:border-stone-800">
              {(['Critique', 'Modéré', 'Faible'] as RiskLevel[]).map((r) => (
                <div key={r} className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: RISK_COLOR[r] }} />
                  <span className="text-[10px] font-semibold text-stone-600 dark:text-stone-400">{r}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-[11px] text-stone-400 dark:text-stone-500 mt-2 flex items-center gap-1.5">
            <Info className="w-3 h-3" />
            Chaque couleur de contour = un dossier. Le chiffre = nombre de liens. Cliquez un acteur pour isoler son réseau.
          </p>
        </div>

        {/* Detail panel */}
        <div className="rounded-3xl bg-stone-50 dark:bg-stone-950 border border-stone-200/70 dark:border-stone-800 p-4">
          {activeNodeData ? (
            <div className="space-y-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Acteur sélectionné</span>
                <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100 font-serif leading-snug">
                  {activeNodeData.id}
                </h4>
                <span className="text-xs text-stone-500 dark:text-stone-400">
                  {activeConnections.length} lien{activeConnections.length > 1 ? 's' : ''} · présent dans{' '}
                  {activeNodeData.sources.length} dossier{activeNodeData.sources.length > 1 ? 's' : ''}
                </span>
              </div>

              {/* Source dossiers */}
              <div className="flex flex-wrap gap-1.5">
                {activeNodeData.sources.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => {
                      const src = sources.find((x) => x.id === s.id);
                      if (src) onOpenReport(src.report);
                    }}
                    className="inline-flex items-center gap-1.5 px-2 py-1 rounded-lg text-[10px] font-bold text-white hover:opacity-90 cursor-pointer"
                    style={{ backgroundColor: s.color }}
                    title="Ouvrir le dossier complet"
                  >
                    <span className="max-w-[150px] truncate">{s.title}</span>
                  </button>
                ))}
              </div>

              <div className="space-y-2.5 max-h-80 overflow-y-auto pr-1">
                {activeConnections.map((e, i) => {
                  const other = e.from === activeNode ? e.to : e.from;
                  const dir = e.from === activeNode ? '➔' : '⬅';
                  return (
                    <div key={i} className="p-2.5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-stone-800 dark:text-stone-200">
                          <span className="text-stone-400 font-normal">{dir}</span> {other}
                        </span>
                        <span
                          className="px-1.5 py-0.5 rounded-full text-[9px] font-bold text-white shrink-0"
                          style={{ backgroundColor: RISK_COLOR[e.riskLevel] }}
                        >
                          {e.riskLevel}
                        </span>
                      </div>
                      <p className="text-[11px] text-stone-600 dark:text-stone-400 leading-relaxed mt-1">
                        {e.relationship}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center py-10 gap-3">
              <div className="p-3 rounded-2xl bg-stone-100 dark:bg-stone-900 text-stone-400">
                <AlertOctagon className="w-6 h-6" />
              </div>
              <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed max-w-[220px]">
                Ce graphe relie <strong className="text-stone-700 dark:text-stone-300">{stats.actors} acteurs</strong> par{' '}
                <strong className="text-stone-700 dark:text-stone-300">{stats.links} liens</strong> documentés. Sélectionnez un acteur pour explorer ses connexions et remonter aux dossiers sources.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
