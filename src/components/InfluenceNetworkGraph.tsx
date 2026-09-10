import React, { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { Network, Info } from 'lucide-react';
import { InterestLink } from '../types';

interface InfluenceNetworkGraphProps {
  links: InterestLink[];
}

type RiskLevel = InterestLink['riskLevel'];

interface GraphNode {
  id: string;
  x: number;
  y: number;
  degree: number;
  maxRisk: RiskLevel;
}

interface GraphEdge {
  from: string;
  to: string;
  relationship: string;
  riskLevel: RiskLevel;
  legalStatus: string;
}

const RISK_ORDER: Record<RiskLevel, number> = {
  Critique: 3,
  Modéré: 2,
  Faible: 1,
};

const RISK_COLOR: Record<RiskLevel, string> = {
  Critique: '#e11d48', // rose-600
  Modéré: '#d97706', // amber-600
  Faible: '#059669', // emerald-600
};

const VIEW_W = 900;
const VIEW_H = 620;

/**
 * Builds a curved cubic path between two points, bowing the curve
 * outward from the graph center so overlapping edges stay readable.
 */
function curvedPath(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  // Perpendicular offset for a gentle arc.
  const dx = x2 - x1;
  const dy = y2 - y1;
  const norm = Math.hypot(dx, dy) || 1;
  const offset = Math.min(60, norm * 0.18);
  const cx = mx + (-dy / norm) * offset;
  const cy = my + (dx / norm) * offset;
  return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
}

export const InfluenceNetworkGraph: React.FC<InfluenceNetworkGraphProps> = ({ links }) => {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [hoverEdge, setHoverEdge] = useState<number | null>(null);

  const { nodes, edges } = useMemo(() => {
    const edgeList: GraphEdge[] = links.map((l) => ({
      from: l.actorFrom,
      to: l.actorTo,
      relationship: l.relationship,
      riskLevel: l.riskLevel,
      legalStatus: l.legalStatus,
    }));

    const nodeMap = new Map<string, { degree: number; maxRisk: RiskLevel }>();
    const bump = (id: string, risk: RiskLevel) => {
      const cur = nodeMap.get(id);
      if (!cur) {
        nodeMap.set(id, { degree: 1, maxRisk: risk });
      } else {
        cur.degree += 1;
        if (RISK_ORDER[risk] > RISK_ORDER[cur.maxRisk]) cur.maxRisk = risk;
      }
    };
    edgeList.forEach((e) => {
      bump(e.from, e.riskLevel);
      bump(e.to, e.riskLevel);
    });

    const ids = Array.from(nodeMap.keys());
    const cx = VIEW_W / 2;
    const cy = VIEW_H / 2;
    const radius = Math.min(VIEW_W, VIEW_H) / 2 - 120;

    const nodeList: GraphNode[] = ids.map((id, i) => {
      const meta = nodeMap.get(id)!;
      if (ids.length === 1) {
        return { id, x: cx, y: cy, degree: meta.degree, maxRisk: meta.maxRisk };
      }
      const angle = (i / ids.length) * Math.PI * 2 - Math.PI / 2;
      return {
        id,
        x: cx + Math.cos(angle) * radius,
        y: cy + Math.sin(angle) * radius,
        degree: meta.degree,
        maxRisk: meta.maxRisk,
      };
    });

    return { nodes: nodeList, edges: edgeList };
  }, [links]);

  const nodeById = useMemo(() => {
    const m = new Map<string, GraphNode>();
    nodes.forEach((n) => m.set(n.id, n));
    return m;
  }, [nodes]);

  const maxDegree = useMemo(() => Math.max(1, ...nodes.map((n) => n.degree)), [nodes]);

  const isEdgeActive = (e: GraphEdge) =>
    activeNode === null || e.from === activeNode || e.to === activeNode;

  const isNodeActive = (id: string) => {
    if (activeNode === null) return true;
    if (id === activeNode) return true;
    return edges.some(
      (e) =>
        (e.from === activeNode && e.to === id) ||
        (e.to === activeNode && e.from === id)
    );
  };

  const nodeRadius = (n: GraphNode) => 18 + (n.degree / maxDegree) * 18;

  const activeConnections = activeNode
    ? edges.filter((e) => e.from === activeNode || e.to === activeNode)
    : [];

  return (
    <div className="rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 sm:p-7 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-5 border-b border-stone-100 dark:border-stone-800">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-blue-900 text-white dark:bg-blue-800">
            <Network className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-stone-900 dark:text-stone-100 font-serif">
              Matrice des Connexions d'Influence
            </h3>
            <p className="text-xs text-stone-500 dark:text-stone-400">
              Cartographie interactive des acteurs, des flux d'influence et des niveaux de risque
            </p>
          </div>
        </div>

        {/* Risk legend */}
        <div className="flex items-center gap-3 flex-wrap">
          {(['Critique', 'Modéré', 'Faible'] as RiskLevel[]).map((r) => (
            <div key={r} className="flex items-center gap-1.5">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: RISK_COLOR[r] }}
              />
              <span className="text-[11px] font-semibold text-stone-600 dark:text-stone-400">
                {r}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Graph */}
        <div className="lg:col-span-2">
          <div className="relative rounded-2xl bg-stone-50 dark:bg-stone-950 border border-stone-200/70 dark:border-stone-800 overflow-hidden">
            <svg
              viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
              className="w-full h-auto"
              role="img"
              aria-label="Graphe des connexions d'influence entre les acteurs"
            >
              <defs>
                {(['Critique', 'Modéré', 'Faible'] as RiskLevel[]).map((r) => (
                  <marker
                    key={r}
                    id={`arrow-${r}`}
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
                const active = isEdgeActive(e) && (hoverEdge === null || hoverEdge === idx);
                const dimmed = !isEdgeActive(e);
                return (
                  <path
                    key={idx}
                    d={curvedPath(from.x, from.y, to.x, to.y)}
                    fill="none"
                    stroke={RISK_COLOR[e.riskLevel]}
                    strokeWidth={hoverEdge === idx ? 3.5 : e.riskLevel === 'Critique' ? 2.5 : 1.8}
                    strokeOpacity={dimmed ? 0.12 : active ? 0.9 : 0.5}
                    markerEnd={`url(#arrow-${e.riskLevel})`}
                    className="cursor-pointer transition-all"
                    onMouseEnter={() => setHoverEdge(idx)}
                    onMouseLeave={() => setHoverEdge(null)}
                  />
                );
              })}

              {/* Nodes */}
              {nodes.map((n) => {
                const r = nodeRadius(n);
                const active = isNodeActive(n.id);
                const selected = activeNode === n.id;
                return (
                  <g
                    key={n.id}
                    transform={`translate(${n.x}, ${n.y})`}
                    className="cursor-pointer"
                    onClick={() => setActiveNode((cur) => (cur === n.id ? null : n.id))}
                    opacity={active ? 1 : 0.25}
                  >
                    <circle
                      r={r}
                      fill={selected ? RISK_COLOR[n.maxRisk] : 'currentColor'}
                      className={selected ? '' : 'text-white dark:text-stone-900'}
                      stroke={RISK_COLOR[n.maxRisk]}
                      strokeWidth={selected ? 4 : 2.5}
                    />
                    <text
                      textAnchor="middle"
                      dy="0.35em"
                      className={`font-bold pointer-events-none ${
                        selected ? 'fill-white' : 'fill-stone-700 dark:fill-stone-200'
                      }`}
                      style={{ fontSize: 13 }}
                    >
                      {n.degree}
                    </text>
                    <text
                      textAnchor="middle"
                      y={r + 16}
                      className="fill-stone-700 dark:fill-stone-300 pointer-events-none"
                      style={{ fontSize: 13, fontWeight: 600 }}
                    >
                      {n.id.length > 26 ? `${n.id.slice(0, 24)}…` : n.id}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
          <p className="text-[11px] text-stone-400 dark:text-stone-500 mt-2 flex items-center gap-1.5">
            <Info className="w-3 h-3" />
            Cliquez sur un acteur pour isoler ses liens. Le chiffre indique le nombre de connexions.
          </p>
        </div>

        {/* Detail panel */}
        <div className="rounded-2xl bg-stone-50 dark:bg-stone-950 border border-stone-200/70 dark:border-stone-800 p-4">
          {activeNode ? (
            <div className="space-y-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">
                  Acteur sélectionné
                </span>
                <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100 font-serif leading-snug">
                  {activeNode}
                </h4>
                <span className="text-xs text-stone-500 dark:text-stone-400">
                  {activeConnections.length} lien
                  {activeConnections.length > 1 ? 's' : ''} répertorié
                  {activeConnections.length > 1 ? 's' : ''}
                </span>
              </div>
              <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
                {activeConnections.map((e, i) => {
                  const other = e.from === activeNode ? e.to : e.from;
                  const dir = e.from === activeNode ? '➔' : '⬅';
                  return (
                    <div
                      key={i}
                      className="p-2.5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-stone-800 dark:text-stone-200">
                          <span className="text-stone-400 font-normal">{dir}</span> {other}
                        </span>
                        <span
                          className="px-1.5 py-0.5 rounded-full text-[9px] font-bold text-white"
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
            <div className="h-full flex flex-col items-center justify-center text-center py-8 gap-2">
              <div className="p-3 rounded-2xl bg-stone-100 dark:bg-stone-900 text-stone-400">
                <Network className="w-6 h-6" />
              </div>
              <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed max-w-[200px]">
                Sélectionnez un acteur dans le graphe pour explorer son réseau d'influence et ses liens documentés.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
