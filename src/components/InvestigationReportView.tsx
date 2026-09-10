import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldAlert, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  FileText, 
  Scale, 
  Building2, 
  Share2, 
  Printer, 
  Copy, 
  Check, 
  ArrowLeft, 
  HeartHandshake, 
  Gavel, 
  ExternalLink,
  Users2,
  Calendar,
  AlertOctagon,
  HelpCircle
} from 'lucide-react';
import { InvestigationReport, InvestigationAlertLevel } from '../types';
import { InfluenceNetworkGraph } from './InfluenceNetworkGraph';

interface InvestigationReportViewProps {
  report: InvestigationReport;
  onReset: () => void;
}

export const InvestigationReportView: React.FC<InvestigationReportViewProps> = ({
  report,
  onReset,
}) => {
  const [copied, setCopied] = useState(false);

  const getAlertBadge = (level: InvestigationAlertLevel) => {
    switch (level) {
      case 'INFRACTION_AVÉRÉE':
        return {
          bg: 'bg-rose-500/15 dark:bg-rose-950/40 border-rose-500/30 text-rose-700 dark:text-rose-300',
          icon: <Gavel className="w-5 h-5 text-rose-600 dark:text-rose-400" />,
          label: 'Infraction Avérée & Condamnation / Blâme Officiel',
          description: 'Des jugements judiciaires, des condamnations pénales ou des blâmes formels du Commissaire à l\'éthique ont été prononcés.'
        };
      case 'ENQUÊTE_OFFICIELLE':
        return {
          bg: 'bg-amber-500/15 dark:bg-amber-950/40 border-amber-500/30 text-amber-800 dark:text-amber-300',
          icon: <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
          label: 'Enquête Officielle en Cours',
          description: 'Le dossier fait l\'objet d\'un mandat d\'enquête actif de l\'UPAC, du VGQ, du Commissaire au lobbyisme ou d\'une commission.'
        };
      case 'ZONE_GRISE_DÉONTOLOGIQUE':
        return {
          bg: 'bg-purple-500/15 dark:bg-purple-950/40 border-purple-500/30 text-purple-800 dark:text-purple-300',
          icon: <AlertOctagon className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
          label: 'Zone Grise Déontologique & Failles Contractuelles',
          description: 'Contrats de gré à gré excessifs, manque de transparence, conflits d\'intérêts d\'apparence ou portes tournantes constatées.'
        };
      case 'SOUPÇON_NON_ÉTAYÉ':
        return {
          bg: 'bg-stone-500/15 dark:bg-stone-800 border-stone-500/30 text-stone-700 dark:text-stone-300',
          icon: <HelpCircle className="w-5 h-5 text-stone-500 dark:text-stone-400" />,
          label: 'Allégation Non Étayée / Absence de Preuves Vérifiables',
          description: 'La rumeur ou allégation politique ne repose à ce jour sur aucun document, rapport d\'enquête officiel ou preuve matérielle.'
        };
      case 'CONFORME_DOCUMENTÉ':
      default:
        return {
          bg: 'bg-emerald-500/15 dark:bg-emerald-950/40 border-emerald-500/30 text-emerald-800 dark:text-emerald-300',
          icon: <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
          label: 'Conforme aux Lois & Registres Documentés',
          description: 'Le dossier a respecté les processus d\'appels d\'offres publics, les déclarations de lobbyisme et les règles du code d\'éthique.'
        };
    }
  };

  const alertBadge = getAlertBadge(report.alertLevel);

  const handleCopyReport = () => {
    const text = `[RAPPORT OFFICIEL - TRANSPARENCE QUÉBEC]
Dossier : ${report.subject}
Statut : ${report.alertLevel} - ${report.alertLevelLabel}
Indice d'Intégrité : ${report.integrityScore}/100

1. CONCLUSION PRINCIPALE :
${report.coreFinding}

2. SYNTHÈSE EXÉCUTIVE :
${report.executiveSummary}

3. IMPACT SUR LES CITOYENS ET L'AVENIR DES ENFANTS :
${report.impactOnCitizensAndChildren}

4. FAITS VÉRIFIÉS :
${report.verifiedFacts.map((f) => `- ${f}`).join('\n')}

5. LIENS D'INTÉRÊTS & RÉSEAUX :
${report.interestLinks.map((l) => `- ${l.actorFrom} -> ${l.actorTo} : ${l.relationship} (Risque: ${l.riskLevel})`).join('\n')}

6. SCRUTIN DE L'ASSEMBLÉE NATIONALE :
${report.assemblyNationalEvents.map((a) => `- ${a.topic} [${a.context}] : ${a.quoteOrSummary}`).join('\n')}

7. RAPPORTS OFFICIELS & JUGEMENTS :
${report.officialReportsAndJudgments.map((r) => `- ${r}`).join('\n')}

8. RECOURS LÉGAUX ET CANAUX OFFICIELS :
${report.legalRecourses.map((rec) => `- ${rec.body} (${rec.applicableLaw}) : ${rec.procedure}`).join('\n')}

Document généré par Transparence Québec - Vigie de l'intégrité et de la démocratie.`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Top Action Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-2 border-b border-stone-200 dark:border-stone-800">
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-xs font-bold text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Nouvelle Recherche</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopyReport}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-xs font-semibold text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">Rapport Copié !</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copier le Rapport</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-xs font-semibold text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Imprimer</span>
          </button>
        </div>
      </div>

      {/* Main Dossier Header Card */}
      <div className="rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-stone-100 dark:border-stone-800">
          <div className="space-y-2 flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold border border-blue-200 dark:border-blue-900/60 bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-300">
              <Building2 className="w-3.5 h-3.5" />
              <span>Dossier d'Intégrité Publique • Québec</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-stone-950 dark:text-stone-50 font-serif leading-tight">
              {report.subject}
            </h1>
            <p className="text-stone-600 dark:text-stone-400 text-sm sm:text-base leading-relaxed">
              {report.executiveSummary}
            </p>
          </div>

          {/* Integrity Score Badge */}
          <div className="flex flex-col items-center justify-center p-5 rounded-2xl bg-stone-50 dark:bg-stone-950/70 border border-stone-200 dark:border-stone-800 shrink-0 w-full sm:w-auto text-center">
            <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
              Indice de Transparence
            </span>
            <div className="flex items-baseline gap-1 my-1">
              <span className={`text-4xl font-black font-serif ${
                report.integrityScore >= 75
                  ? 'text-emerald-600 dark:text-emerald-400'
                  : report.integrityScore >= 45
                  ? 'text-amber-600 dark:text-amber-400'
                  : 'text-rose-600 dark:text-rose-400'
              }`}>
                {report.integrityScore}
              </span>
              <span className="text-sm font-bold text-stone-400">/100</span>
            </div>
            <span className="text-xs font-semibold text-stone-600 dark:text-stone-400">
              {report.integrityScore >= 75 ? 'Haut Niveau de Conformité' : report.integrityScore >= 45 ? 'Transparence Mitigée' : 'Critique / Failles Majeures'}
            </span>
          </div>
        </div>

        {/* Status Alert Banner */}
        <div className={`mt-6 p-4 sm:p-5 rounded-2xl border ${alertBadge.bg} flex items-start gap-3.5`}>
          <div className="shrink-0 mt-0.5">{alertBadge.icon}</div>
          <div className="space-y-1">
            <h3 className="font-bold text-sm sm:text-base">
              {report.alertLevelLabel || alertBadge.label}
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed opacity-90">
              {alertBadge.description}
            </p>
          </div>
        </div>
      </div>

      {/* Impact on Children and the Future of Quebec */}
      <div 
        id="section-future-children"
        className="rounded-3xl border border-amber-500/30 bg-amber-500/5 dark:bg-amber-950/20 p-6 sm:p-7 shadow-xs"
      >
        <div className="flex items-start gap-3.5">
          <div className="p-3 rounded-2xl bg-amber-600 text-white shadow-xs shrink-0">
            <HeartHandshake className="w-6 h-6" />
          </div>
          <div className="space-y-2 flex-1">
            <div className="flex items-center gap-2">
              <h3 className="text-base sm:text-lg font-bold text-amber-950 dark:text-amber-200 font-serif">
                Pour l'Avenir des Enfants & l'Intérêt Public des Québécois
              </h3>
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400">
              Conséquences humaines, budgétaires et intergénérationnelles
            </p>
            <p className="text-stone-800 dark:text-stone-200 text-sm sm:text-base leading-relaxed">
              {report.impactOnCitizensAndChildren}
            </p>
          </div>
        </div>
      </div>

      {/* Core Finding / Incontestable Truth */}
      <div className="rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 sm:p-7 shadow-sm">
        <div className="flex items-center gap-3 pb-3 mb-4 border-b border-stone-100 dark:border-stone-800">
          <div className="p-2 rounded-xl bg-blue-900 text-white dark:bg-blue-800">
            <Scale className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-stone-900 dark:text-stone-100 font-serif">
              La Vérité Factuelle Établie (Sans Complaisance)
            </h3>
            <p className="text-xs text-stone-500 dark:text-stone-400">
              Démantèlement des faux-fuyants et des discours de relations publiques
            </p>
          </div>
        </div>

        <p className="text-stone-800 dark:text-stone-200 text-sm sm:text-base leading-relaxed bg-stone-50 dark:bg-stone-950 p-4 rounded-2xl border border-stone-200/70 dark:border-stone-800 font-medium">
          « {report.coreFinding} »
        </p>
      </div>

      {/* Influence Network Graph (Connect Matrix) */}
      {report.interestLinks?.length > 0 && (
        <InfluenceNetworkGraph links={report.interestLinks} />
      )}

      {/* Two Column Grid: Verified Facts & Mapped Conflicts of Interest */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Verified Facts */}
        <div className="rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 pb-4 border-b border-stone-100 dark:border-stone-800 mb-4">
              <CheckCircle2 className="w-5 h-5 text-blue-700 dark:text-blue-400" />
              <h3 className="font-bold text-stone-900 dark:text-stone-100 text-base font-serif">
                Faits Établis & Données Vérifiées
              </h3>
            </div>
            <ul className="space-y-3.5">
              {report.verifiedFacts.map((fact, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                  <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    {idx + 1}
                  </div>
                  <span className="leading-relaxed">{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Network & Conflicts of Interest */}
        <div className="rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 shadow-sm">
          <div className="flex items-center gap-2.5 pb-4 border-b border-stone-100 dark:border-stone-800 mb-4">
            <Users2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            <h3 className="font-bold text-stone-900 dark:text-stone-100 text-base font-serif">
              Cartographie des Liens d'Intérêts & Portes Tournantes
            </h3>
          </div>

          <div className="space-y-3">
            {report.interestLinks?.length > 0 ? (
              report.interestLinks.map((link, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 rounded-2xl bg-stone-50 dark:bg-stone-950 border border-stone-200/80 dark:border-stone-800 space-y-2"
                >
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="text-xs font-bold text-stone-900 dark:text-stone-100">
                      {link.actorFrom} <span className="text-stone-400 font-normal">➔</span> {link.actorTo}
                    </span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      link.riskLevel === 'Critique'
                        ? 'bg-rose-500/10 text-rose-700 dark:text-rose-300 border border-rose-500/30'
                        : link.riskLevel === 'Modéré'
                        ? 'bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-500/30'
                        : 'bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30'
                    }`}>
                      Risque {link.riskLevel}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    {link.relationship}
                  </p>
                  {link.legalStatus && (
                    <span className="inline-block text-[11px] font-medium text-stone-500 dark:text-stone-400">
                      ⚖️ {link.legalStatus}
                    </span>
                  )}
                </div>
              ))
            ) : (
              <p className="text-xs text-stone-500 italic p-3">
                Aucun conflit d'intérêts direct ou lien de collusion n'a été répertorié dans ce dossier à la lumière des registres publics.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Assembly Nationale Events & Hansard */}
      {report.assemblyNationalEvents?.length > 0 && (
        <div className="rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 sm:p-7 shadow-sm">
          <div className="flex items-center gap-3 pb-3 mb-4 border-b border-stone-100 dark:border-stone-800">
            <div className="p-2 rounded-xl bg-blue-900/10 text-blue-900 dark:text-blue-300">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-stone-900 dark:text-stone-100 font-serif">
                Débats & Événements à l'Assemblée Nationale du Québec
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                Période des questions orales au Salon bleu, commissions parlementaires et dépôts de documents
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {report.assemblyNationalEvents.map((event, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-2xl bg-stone-50/80 dark:bg-stone-950/80 border border-stone-200/80 dark:border-stone-800 space-y-2"
              >
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-xs sm:text-sm font-bold text-blue-900 dark:text-blue-300">
                    {event.topic}
                  </h4>
                  {event.dateOrSession && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-400">
                      {event.dateOrSession}
                    </span>
                  )}
                </div>
                <span className="text-[11px] font-semibold text-stone-500 dark:text-stone-400 block">
                  📍 {event.context}
                </span>
                <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                  {event.quoteOrSummary}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Official Reports, Judgments & Journalistic Investigations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Official Reports & Inquiries */}
        <div className="rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 shadow-sm">
          <div className="flex items-center gap-2.5 pb-4 border-b border-stone-100 dark:border-stone-800 mb-4">
            <FileText className="w-5 h-5 text-blue-900 dark:text-blue-400" />
            <h3 className="font-bold text-stone-900 dark:text-stone-100 text-base font-serif">
              Rapports Officiels & Décisions
            </h3>
          </div>
          <ul className="space-y-2.5">
            {report.officialReportsAndJudgments?.map((rep, idx) => (
              <li key={idx} className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 flex items-start gap-2.5">
                <span className="text-blue-700 dark:text-blue-400 mt-0.5 font-bold">•</span>
                <span>{rep}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Media Investigations */}
        <div className="rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 shadow-sm">
          <div className="flex items-center gap-2.5 pb-4 border-b border-stone-100 dark:border-stone-800 mb-4">
            <Share2 className="w-5 h-5 text-blue-900 dark:text-blue-400" />
            <h3 className="font-bold text-stone-900 dark:text-stone-100 text-base font-serif">
              Enquêtes Journalistiques Sourcées
            </h3>
          </div>
          <ul className="space-y-2.5">
            {report.journalisticInvestigations?.map((med, idx) => (
              <li key={idx} className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 flex items-start gap-2.5">
                <span className="text-blue-700 dark:text-blue-400 mt-0.5 font-bold">•</span>
                <span>{med}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Whistleblower & Legal Recourses for this Case */}
      {report.legalRecourses?.length > 0 && (
        <div 
          id="section-legal-recourses"
          className="rounded-3xl border border-stone-200 dark:border-stone-800 bg-stone-900 text-stone-100 p-6 sm:p-8 shadow-sm"
        >
          <div className="flex items-center gap-3 pb-4 mb-5 border-b border-stone-800">
            <div className="p-2.5 rounded-xl bg-blue-600 text-white">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold font-serif text-white">
                Recours Citoyens & Canaux de Dénonciation Protégés
              </h3>
              <p className="text-xs text-stone-400">
                Comment agir en toute légalité pour faire valoir la transparence selon les lois du Québec
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {report.legalRecourses.map((recourse, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-2xl bg-stone-800/80 border border-stone-700/80 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-blue-400">
                    {recourse.body}
                  </h4>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-950 text-blue-300 border border-blue-800">
                    Loi Applicable
                  </span>
                </div>
                <p className="text-[11px] text-stone-400 font-mono">
                  {recourse.applicableLaw}
                </p>
                <p className="text-xs text-stone-200 leading-relaxed">
                  {recourse.procedure}
                </p>
                <div className="pt-2 border-t border-stone-700/50">
                  <span className="text-[11px] text-amber-400 font-medium">
                    🛡️ Protection : {recourse.whistleblowerProtection}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};
