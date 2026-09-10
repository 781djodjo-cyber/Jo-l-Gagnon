import React, { useMemo, useState } from 'react';
import { CalendarRange, Info, ExternalLink, Building2 } from 'lucide-react';
import { InterestLink, InvestigationReport } from '../types';
import { PRELOADED_DOSSIERS } from '../data/preloadedDossiers';

type RiskLevel = InterestLink['riskLevel'];

const RISK_COLOR: Record<RiskLevel, string> = {
  Critique: '#e11d48',
  Modéré: '#d97706',
  Faible: '#059669',
};

// Same accent order as the network view so a dossier reads the same in both.
const CLUSTER_PALETTE = ['#1d4ed8', '#7c3aed', '#0891b2', '#c2410c', '#be185d', '#4d7c0f', '#a16207', '#0f766e'];

const YEAR_START = 1995;
const YEAR_END = 2026;
const SPAN = YEAR_END - YEAR_START;
const AXIS_YEARS = [1995, 2000, 2005, 2010, 2015, 2020, 2025];

const ROW_H = 66;
const AXIS_H = 34;

interface TimelineEntry {
  id: string;
  party: string;
  affiliate: string;
  affiliation: string;
  start: number;
  end: number;
  risk: RiskLevel;
  legalStatus: string;
  dossierId: string;
}

// Chronology of compromised parties and their affiliation with "Québec Inc."
// — the establishment of large Québec firms and state-backed ventures. Each
// entry is anchored to a documented dossier so a citizen can drill down.
const TIMELINE: TimelineEntry[] = [
  {
    id: 'genie-conseil-financement',
    party: 'Firmes de génie-conseil (SNC-Lavalin, Dessau, Genivar, Roche)',
    affiliate: 'Partis politiques (PLQ, PQ, Union Montréal)',
    affiliation:
      'Financement politique illégal via prête-noms : des employés remboursés en argent comptant ou en bonus contournent les plafonds légaux de contributions.',
    start: 1996,
    end: 2012,
    risk: 'Critique',
    legalStatus: 'Infractions criminelles de complot, fraude et infractions électorales documentées',
    dossierId: 'charbonneau-collusion-upac',
  },
  {
    id: 'cartel-construction',
    party: 'Cartel d\u2019entrepreneurs en construction',
    affiliate: 'Donneurs d\u2019ordres municipaux & ministère des Transports (MTQ)',
    affiliation:
      'Trucage des soumissions publiques pour alterner les gagnants désignés et maintenir des prix artificiellement gonflés de 20 à 30 %.',
    start: 1998,
    end: 2011,
    risk: 'Critique',
    legalStatus: 'Condamnations judiciaires multiples; Programme de remboursement volontaire (150 M$+)',
    dossierId: 'charbonneau-collusion-upac',
  },
  {
    id: 'creation-ceic',
    party: 'Gouvernement Charest',
    affiliate: 'Pression citoyenne & opposition',
    affiliation:
      'Résistance prolongée avant d\u2019instituer une commission d\u2019enquête publique dotée de pouvoirs de contrainte sur l\u2019industrie de la construction.',
    start: 2009,
    end: 2011,
    risk: 'Modéré',
    legalStatus: '39e législature — débats sur la création de la CEIC',
    dossierId: 'charbonneau-collusion-upac',
  },
  {
    id: 'commission-charbonneau',
    party: 'Commission Charbonneau (CEIC)',
    affiliate: 'Industrie de la construction & du génie-conseil',
    affiliation:
      'La commission siège et entend près de 300 témoins sous serment, exposant un système généralisé de collusion et de financement occulte.',
    start: 2011,
    end: 2015,
    risk: 'Critique',
    legalStatus: 'Rapport final déposé en novembre 2015 (60 recommandations)',
    dossierId: 'charbonneau-collusion-upac',
  },
  {
    id: 'loi-integrite',
    party: 'Assemblée nationale',
    affiliate: 'Autorité des marchés publics (AMP)',
    affiliation:
      'Adoption de la Loi sur l\u2019intégrité, création de l\u2019AMP, plafonnement des dons à 100 $ et exclusion des entreprises condamnées des contrats publics.',
    start: 2015,
    end: 2017,
    risk: 'Faible',
    legalStatus: '41e législature — assainissement de l\u2019octroi des contrats publics',
    dossierId: 'charbonneau-collusion-upac',
  },
  {
    id: 'saaq-it-oligopole',
    party: 'Direction SAAQ & ministère des Transports',
    affiliate: 'Oligopole de firmes IT (CGI, IBM/LGS)',
    affiliation:
      'Octroi de multiples avenants et contrats de services-conseils sans mise en concurrence ouverte; dépassements de plus de 500 M$ et fiasco SAAQclic.',
    start: 2018,
    end: 2023,
    risk: 'Critique',
    legalStatus: 'Sous la loupe de la Commission de l\u2019administration publique (LCOP)',
    dossierId: 'saaqclic-it-contracts',
  },
  {
    id: 'portes-tournantes',
    party: 'Ex-cadres de la fonction publique',
    affiliate: 'Cabinets de consultants privés',
    affiliation:
      'Phénomène de portes tournantes entre les gestionnaires de projets publics et les fournisseurs de solutions privées.',
    start: 2018,
    end: 2026,
    risk: 'Modéré',
    legalStatus: 'Soumis au délai de carence déontologique et à la Loi sur le lobbyisme',
    dossierId: 'saaqclic-it-contracts',
  },
  {
    id: 'granby-laurent',
    party: 'État québécois (DPJ / MSSS)',
    affiliate: 'Commission Laurent',
    affiliation:
      'La mort de la fillette de Granby (2019) déclenche la Commission spéciale sur les droits des enfants; rapport de 550 pages en mai 2021.',
    start: 2019,
    end: 2021,
    risk: 'Critique',
    legalStatus: 'Responsabilité de l\u2019État en vertu de la Loi sur la protection de la jeunesse',
    dossierId: 'protection-jeunesse-dpj-laurent',
  },
  {
    id: 'garderies-privees',
    party: 'Promoteurs de garderies privées à but lucratif',
    affiliate: 'Ministère de la Famille',
    affiliation:
      'Lobbyisme actif pour obtenir l\u2019autorisation de places et des crédits d\u2019impôt remboursables pendant la pénurie de places en CPE.',
    start: 2020,
    end: 2026,
    risk: 'Modéré',
    legalStatus: 'Encadré par la Loi sur les services de garde éducatifs à l\u2019enfance',
    dossierId: 'protection-jeunesse-dpj-laurent',
  },
  {
    id: 'iq-northvolt',
    party: 'Investissement Québec (IQ)',
    affiliate: 'Projet Northvolt Six',
    affiliation:
      'Prise de participation en capital et prêts de ~2,9 G$ avec garanties partielles, sans débat public préalable à l\u2019Assemblée nationale.',
    start: 2023,
    end: 2024,
    risk: 'Critique',
    legalStatus: 'Soumis aux règles de reddition de comptes d\u2019IQ et à la Loi sur l\u2019accès à l\u2019information',
    dossierId: 'northvolt-battery-transparency',
  },
  {
    id: 'meie-northvolt',
    party: 'Ministère de l\u2019Économie (MEIE)',
    affiliate: 'Dirigeants & lobbyistes de Northvolt',
    affiliation:
      'Négociations directes d\u2019aides financières massives et d\u2019attribution de mégawatts d\u2019Hydro-Québec; modification réglementaire évitant le BAPE.',
    start: 2023,
    end: 2024,
    risk: 'Modéré',
    legalStatus: 'Inscriptions au Registre des lobbyistes du Québec',
    dossierId: 'northvolt-battery-transparency',
  },
  {
    id: 'kings-quebecor',
    party: 'Cabinet du ministre des Finances',
    affiliate: 'Kings de Los Angeles & Québecor (Centre Vidéotron)',
    affiliation:
      'Subvention discrétionnaire de 5 à 7 M$ pour deux matchs hors-concours de la LNH, en pleine austérité budgétaire et négociations salariales.',
    start: 2023,
    end: 2023,
    risk: 'Modéré',
    legalStatus: 'Pouvoir discrétionnaire ministériel; plaintes au Commissaire à l\u2019éthique',
    dossierId: 'subvention-kings-los-angeles',
  },
  {
    id: 'northvolt-crise',
    party: 'Northvolt AB (maison-mère)',
    affiliate: 'Trésor public québécois',
    affiliation:
      'Crise de liquidités, restructuration majeure et mises à pied mettant en péril les fonds publics engagés par le Québec.',
    start: 2024,
    end: 2026,
    risk: 'Critique',
    legalStatus: 'Absence de clause de remboursement prioritaire garantie en cas d\u2019insolvabilité',
    dossierId: 'northvolt-battery-transparency',
  },
];

function pct(year: number) {
  return ((year - YEAR_START) / SPAN) * 100;
}

interface CorruptionTimelineProps {
  onOpenReport: (report: InvestigationReport) => void;
}

export const CorruptionTimeline: React.FC<CorruptionTimelineProps> = ({ onOpenReport }) => {
  const [selected, setSelected] = useState<string | null>(null);

  const dossierMeta = useMemo(() => {
    const m = new Map<string, { color: string; title: string; report: InvestigationReport }>();
    PRELOADED_DOSSIERS.forEach((d, i) => {
      m.set(d.id, { color: CLUSTER_PALETTE[i % CLUSTER_PALETTE.length], title: d.title, report: d.report });
    });
    return m;
  }, []);

  const rows = useMemo(() => [...TIMELINE].sort((a, b) => a.start - b.start || b.end - a.end), []);

  const stats = useMemo(() => {
    const critical = rows.filter((r) => r.risk === 'Critique').length;
    const parties = new Set(rows.map((r) => r.party)).size;
    return { affiliations: rows.length, critical, parties };
  }, [rows]);

  const selectedEntry = selected ? rows.find((r) => r.id === selected) ?? null : null;
  const chartHeight = AXIS_H + rows.length * ROW_H;

  return (
    <div className="space-y-5">
      {/* Explainer of what "Québec Inc." means here */}
      <div className="rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 p-4 flex items-start gap-3">
        <div className="p-2 rounded-xl bg-blue-900 text-white dark:bg-blue-800 shrink-0">
          <Building2 className="w-4 h-4" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-stone-900 dark:text-stone-100 font-serif">
            « Québec Inc. » — l&apos;établissement des grandes firmes et de l&apos;État entrepreneur
          </h3>
          <p className="text-[11px] text-stone-500 dark:text-stone-400 leading-relaxed mt-0.5">
            Chronologie des parties compromises et de leur affiliation à ce réseau : firmes de génie-conseil,
            cartel de la construction, oligopole des consultants IT, Investissement Québec et Québecor.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/70 dark:border-stone-800 p-3 text-center">
          <div className="text-2xl font-black font-serif text-stone-900 dark:text-stone-100">{stats.affiliations}</div>
          <div className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Affiliations</div>
        </div>
        <div className="rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/70 dark:border-stone-800 p-3 text-center">
          <div className="text-2xl font-black font-serif text-stone-900 dark:text-stone-100">{`${YEAR_START}\u2013${YEAR_END}`}</div>
          <div className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Période couverte</div>
        </div>
        <div className="rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200/70 dark:border-rose-900 p-3 text-center">
          <div className="text-2xl font-black font-serif text-rose-700 dark:text-rose-300">{stats.critical}</div>
          <div className="text-[10px] font-bold uppercase tracking-wider text-rose-500/80 dark:text-rose-400/80">Liens critiques</div>
        </div>
      </div>

      {/* Timeline chart */}
      <div className="rounded-3xl bg-white dark:bg-stone-900 border border-stone-200/70 dark:border-stone-800 p-3 sm:p-5 overflow-hidden">
        <div className="flex">
          {/* Label column */}
          <div className="w-[46%] md:w-[300px] shrink-0 pr-2 sm:pr-4">
            <div style={{ height: AXIS_H }} />
            {rows.map((r) => {
              const meta = dossierMeta.get(r.dossierId);
              const isSel = selected === r.id;
              return (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setSelected((cur) => (cur === r.id ? null : r.id))}
                  style={{ height: ROW_H }}
                  className={`w-full text-left flex flex-col justify-center gap-0.5 pr-1 border-l-2 pl-2 sm:pl-3 transition-colors cursor-pointer ${
                    isSel ? 'bg-stone-50 dark:bg-stone-950' : 'hover:bg-stone-50/70 dark:hover:bg-stone-950/50'
                  }`}
                  title={r.party}
                >
                  <span className="text-[11px] sm:text-xs font-bold text-stone-900 dark:text-stone-100 leading-tight line-clamp-2">
                    {r.party}
                  </span>
                  <span className="flex items-center gap-1 text-[9px] sm:text-[10px] text-stone-500 dark:text-stone-400 leading-tight">
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: meta?.color ?? '#78716c' }}
                    />
                    <span className="truncate">{r.affiliate}</span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Track column */}
          <div className="flex-1 relative" style={{ height: chartHeight }}>
            {/* Gridlines + year labels */}
            {AXIS_YEARS.map((y) => (
              <div
                key={y}
                className="absolute top-0 bottom-0 border-l border-dashed border-stone-200 dark:border-stone-800"
                style={{ left: `${pct(y)}%` }}
              >
                <span className="absolute -top-0.5 -translate-x-1/2 text-[9px] sm:text-[10px] font-bold text-stone-400 dark:text-stone-500">
                  {y}
                </span>
              </div>
            ))}
            {/* End marker */}
            <div className="absolute top-0 bottom-0 right-0 border-l border-dashed border-stone-200 dark:border-stone-800">
              <span className="absolute -top-0.5 -translate-x-full pr-0.5 text-[9px] sm:text-[10px] font-bold text-stone-400 dark:text-stone-500">
                {YEAR_END}
              </span>
            </div>

            {/* Bars */}
            {rows.map((r, i) => {
              const meta = dossierMeta.get(r.dossierId);
              const left = pct(r.start);
              const width = Math.max(2, pct(r.end) - pct(r.start));
              const isSel = selected === r.id;
              const dimmed = selected !== null && !isSel;
              const top = AXIS_H + i * ROW_H + ROW_H / 2 - 11;
              return (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setSelected((cur) => (cur === r.id ? null : r.id))}
                  className="absolute rounded-full flex items-center cursor-pointer transition-all"
                  style={{
                    left: `${left}%`,
                    width: `${width}%`,
                    top,
                    height: 22,
                    backgroundColor: RISK_COLOR[r.risk],
                    opacity: dimmed ? 0.25 : 1,
                    boxShadow: isSel ? `0 0 0 3px ${meta?.color ?? '#1d4ed8'}55` : 'none',
                  }}
                  title={`${r.party} · ${r.start}\u2013${r.end} · ${r.risk}`}
                >
                  <span className="absolute inset-y-0 left-0 w-1.5 rounded-l-full" style={{ backgroundColor: meta?.color ?? '#1d4ed8' }} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 flex-wrap mt-4 pt-3 border-t border-stone-200/70 dark:border-stone-800">
          {(['Critique', 'Modéré', 'Faible'] as RiskLevel[]).map((r) => (
            <div key={r} className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: RISK_COLOR[r] }} />
              <span className="text-[10px] font-semibold text-stone-600 dark:text-stone-400">{r}</span>
            </div>
          ))}
          <span className="text-[10px] text-stone-400 dark:text-stone-500 flex items-center gap-1">
            <Info className="w-3 h-3" /> La barre couvre les années du lien; le liseré coloré = dossier source.
          </span>
        </div>
      </div>

      {/* Detail of the selected affiliation */}
      {selectedEntry && (
        <div className="rounded-3xl bg-stone-50 dark:bg-stone-950 border border-stone-200/70 dark:border-stone-800 p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 flex items-center gap-1.5">
                <CalendarRange className="w-3.5 h-3.5" /> {selectedEntry.start}
                {selectedEntry.end !== selectedEntry.start ? `\u2013${selectedEntry.end}` : ''}
              </span>
              <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100 font-serif leading-snug mt-1">
                {selectedEntry.party}
              </h4>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                Affiliation : <span className="font-semibold text-stone-700 dark:text-stone-300">{selectedEntry.affiliate}</span>
              </p>
            </div>
            <span
              className="px-2 py-0.5 rounded-full text-[10px] font-bold text-white shrink-0"
              style={{ backgroundColor: RISK_COLOR[selectedEntry.risk] }}
            >
              {selectedEntry.risk}
            </span>
          </div>
          <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed mt-3">{selectedEntry.affiliation}</p>
          <p className="text-[11px] text-stone-500 dark:text-stone-400 leading-relaxed mt-2 italic">
            {selectedEntry.legalStatus}
          </p>
          {(() => {
            const meta = dossierMeta.get(selectedEntry.dossierId);
            if (!meta) return null;
            return (
              <button
                type="button"
                onClick={() => onOpenReport(meta.report)}
                className="mt-4 inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-white hover:opacity-90 cursor-pointer"
                style={{ backgroundColor: meta.color }}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Ouvrir le dossier : {meta.title}
              </button>
            );
          })()}
        </div>
      )}
    </div>
  );
};
