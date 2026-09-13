import React, { useState } from 'react';
import { 
  FileText, 
  AlertTriangle, 
  ShieldAlert, 
  BookOpen, 
  History, 
  UserCheck, 
  Scale, 
  Skull, 
  Zap, 
  Volume2, 
  Search,
  ExternalLink,
  ChevronRight,
  Landmark,
  Building,
  Lock,
  Eye,
  CheckCircle2
} from 'lucide-react';
import { 
  MK_ULTRA_VICTIMS, 
  MK_ULTRA_CHRONOLOGY, 
  MK_ULTRA_PROTOCOLS, 
  MK_ULTRA_DECLASSIFIED_ARCHIVES 
} from '../data/mkUltraMontrealData';

interface MkUltraMontrealViewProps {
  onInvestigateDossier: (dossierId: string) => void;
}

export const MkUltraMontrealView: React.FC<MkUltraMontrealViewProps> = ({
  onInvestigateDossier
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'overview' | 'chronology' | 'victims' | 'protocols' | 'archives'>('overview');
  const [searchFilter, setSearchFilter] = useState('');

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header Banner with official provenance badge */}
      <div className="rounded-3xl bg-linear-to-r from-stone-950 via-red-950 to-neutral-950 p-6 sm:p-8 text-white shadow-xl border border-red-900/40 relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-red-900/50 text-red-300 border border-red-700/50">
            <ShieldAlert className="w-4 h-4 text-red-400" />
            <span>Base Historique Déclassifiée • Documents Officiels & Archives Judiciaires</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-serif font-black tracking-tight text-white">
            Projet MK-Ultra : Le Sous-Projet 68 à Montréal
          </h1>
          <p className="text-sm sm:text-base text-stone-300 font-sans leading-relaxed">
            Documentation intégrale et vérifiée des expérimentations psychiatriques et de contrôle mental 
            menées sur des citoyens québécois et canadiens à l'Institut Allan Memorial (Université McGill) 
            par le Dr Donald Ewen Cameron, co-financées secrètement par la CIA et le gouvernement fédéral du Canada.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onInvestigateDossier('mk-ultra-allan-memorial-mcgill')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-red-600 hover:bg-red-500 text-white transition-colors shadow-sm cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Ouvrir le Dossier d'Investigation Complet</span>
            </button>
            <span className="text-xs text-stone-400">
              Sources : Sénat américain (1977), Rapport Cooper (1986), Décret C.P. 1992-2342, Cour supérieure du Québec.
            </span>
          </div>
        </div>
      </div>

      {/* Internal Navigation Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-stone-100 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700">
        <button
          onClick={() => setActiveSubTab('overview')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeSubTab === 'overview'
              ? 'bg-white dark:bg-stone-900 text-red-900 dark:text-red-400 shadow-xs'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Vue d'Ensemble & Faits Vérifiés</span>
        </button>

        <button
          onClick={() => setActiveSubTab('victims')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeSubTab === 'victims'
              ? 'bg-white dark:bg-stone-900 text-red-900 dark:text-red-400 shadow-xs'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
          }`}
        >
          <UserCheck className="w-3.5 h-3.5" />
          <span>Registre des Victimes & Témoignages</span>
        </button>

        <button
          onClick={() => setActiveSubTab('protocols')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeSubTab === 'protocols'
              ? 'bg-white dark:bg-stone-900 text-red-900 dark:text-red-400 shadow-xs'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
          }`}
        >
          <Zap className="w-3.5 h-3.5 text-amber-500" />
          <span>Méthodes & Protocoles Expérimentaux</span>
        </button>

        <button
          onClick={() => setActiveSubTab('chronology')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeSubTab === 'chronology'
              ? 'bg-white dark:bg-stone-900 text-red-900 dark:text-red-400 shadow-xs'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
          }`}
        >
          <History className="w-3.5 h-3.5" />
          <span>Chronologie (1943 - 2026)</span>
        </button>

        <button
          onClick={() => setActiveSubTab('archives')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeSubTab === 'archives'
              ? 'bg-white dark:bg-stone-900 text-red-900 dark:text-red-400 shadow-xs'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
          }`}
        >
          <Lock className="w-3.5 h-3.5" />
          <span>Archives Déclassifiées & Jugements</span>
        </button>
      </div>

      {/* SUB-TAB: OVERVIEW */}
      {activeSubTab === 'overview' && (
        <div className="space-y-6">
          {/* Key Metric Facts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs">
              <div className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider mb-1">
                Financement Secret Établi
              </div>
              <div className="text-2xl font-black text-stone-900 dark:text-stone-100">
                CIA & Santé Canada
              </div>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-2">
                Plus de 60 000 $ US de la CIA (via la Society for the Investigation of Human Ecology) 
                et plus de 500 000 $ CA de subventions fédérales du ministère de la Santé nationale.
              </p>
            </div>

            <div className="p-5 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs">
              <div className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
                Lieu des Expériences
              </div>
              <div className="text-2xl font-black text-stone-900 dark:text-stone-100">
                Allan Memorial / McGill
              </div>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-2">
                Le manoir Ravenscrag sur le flanc du Mont-Royal, affilié à l'Hôpital Royal Victoria 
                et au Département de psychiatrie de l'Université McGill.
              </p>
            </div>

            <div className="p-5 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs">
              <div className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
                Statut Juridique Actuel
              </div>
              <div className="text-2xl font-black text-stone-900 dark:text-stone-100">
                Cour Supérieure du QC
              </div>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-2">
                Action collective en cours pour les victimes et leurs familles afin d'obtenir des excuses 
                officielles de McGill et l'ouverture intégrale des dossiers médicaux scellés.
              </p>
            </div>
          </div>

          {/* Triangulated Narrative of Facts */}
          <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 sm:p-8 border border-stone-200 dark:border-stone-800 shadow-xs space-y-4">
            <h2 className="text-xl font-bold font-serif text-stone-900 dark:text-stone-100 flex items-center gap-2">
              <Scale className="w-5 h-5 text-red-600" />
              Ce que les archives officielles prouvent de manière incontestable
            </h2>

            <div className="prose dark:prose-invert max-w-none text-stone-700 dark:text-stone-300 text-sm leading-relaxed space-y-3">
              <p>
                Entre 1957 et 1964, l'Institut Allan Memorial de Montréal est devenu le théâtre du <strong>Sous-projet 68</strong> du programme 
                MK-Ultra de la Central Intelligence Agency (CIA). Dirigé par le psychiatre Dr Donald Ewen Cameron — sommité internationale qui 
                fut président de l'American Psychiatric Association et de la World Psychiatric Association —, ce projet visait à développer des méthodes 
                scientifiques de lavage de cerveau et de reprogrammation du comportement humain.
              </p>
              <p>
                Des centaines de citoyens québécois et canadiens (dont une forte proportion de jeunes mères admises pour des dépressions post-partum, 
                des troubles anxieux ou de légères névroses) ont été soumis à leur insu à des protocoles de torture médicale : 
                <strong>électrochocs massifs à haute intensité</strong> (méthode Page-Russell appliquée jusqu'à 3 fois par jour, provoquant des convulsions continues), 
                <strong>sommeil induit chimiquement</strong> pendant 30 à 65 jours consécutifs, <strong>injections massives de drogues psychotropes</strong> (LSD-25, curare, barbituriques) 
                et <strong>« conduite psychique »</strong> (écoute continue au casque de bandes audio enregistrées répétées 500 000 fois).
              </p>
              <p>
                Les auditions publiques du Comité Church au Sénat des États-Unis en 1977, le rapport Cooper commandé par Ottawa en 1986, 
                le décret fédéral C.P. 1992-2342 indemnisant 77 victimes déstructurées, et les poursuites judiciaires devant la Cour supérieure du Québec 
                attestent de manière irréfutable de la réalité de ces actes commis sur le territoire montréalais.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* SUB-TAB: VICTIMS */}
      {activeSubTab === 'victims' && (
        <div className="space-y-6">
          <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-xs text-red-800 dark:text-red-300">
            <strong>Devoir de Mémoire :</strong> Les personnes ci-dessous sont des victimes réelles, dont les dossiers médicaux et les témoignages 
            ont été examinés et validés par des comités d'experts psychiatriques assermentés et déposés devant les tribunaux fédéraux et provinciaux.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {MK_ULTRA_VICTIMS.map((victim) => (
              <div 
                key={victim.id}
                className="bg-white dark:bg-stone-900 rounded-3xl p-6 border border-stone-200 dark:border-stone-800 shadow-xs space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100">
                        {victim.fullName}
                      </h2>
                      <span className="text-xs text-stone-400 font-medium">
                        Admise en : {victim.yearAdmitted} • Motif : {victim.reasonForAdmission}
                      </span>
                    </div>
                  </div>

                  {/* Treatments Endured */}
                  <div className="space-y-1">
                    <div className="text-[11px] font-bold text-red-600 dark:text-red-400 uppercase tracking-wider">
                      Traitements subis à l'Allan Memorial :
                    </div>
                    <ul className="space-y-1">
                      {victim.treatmentsEndured.map((t, idx) => (
                        <li key={idx} className="text-xs text-stone-700 dark:text-stone-300 flex items-start gap-1.5">
                          <span className="text-red-500 font-bold">•</span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Consequences */}
                  <div className="p-3 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/60 dark:border-stone-700/50 text-xs text-stone-600 dark:text-stone-400 space-y-1">
                    <span className="font-bold text-stone-800 dark:text-stone-200">Séquelles permanentes : </span>
                    <span>{victim.consequencesAndDamages}</span>
                  </div>

                  {/* Quote */}
                  <blockquote className="italic text-xs text-stone-600 dark:text-stone-400 border-l-2 border-red-500 pl-3 py-1">
                    {victim.keyTestimonyQuote}
                  </blockquote>
                </div>

                <div className="pt-3 border-t border-stone-100 dark:border-stone-800 text-[11px] space-y-1">
                  <div className="text-stone-500">
                    <strong>Poursuite :</strong> {victim.legalActionTaken}
                  </div>
                  <div className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{victim.settlementStatus}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-TAB: PROTOCOLS */}
      {activeSubTab === 'protocols' && (
        <div className="space-y-6">
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-800 dark:text-amber-300">
            <strong>Sources Scientifiques & Documents Déclassifiés :</strong> Les protocoles ci-dessous sont tirés directement des publications médicales signées par Donald Ewen Cameron lui-même dans les revues psychiatriques de l'époque et des rapports déclassifiés de la Division Technique de la CIA.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {MK_ULTRA_PROTOCOLS.map((protocol, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-stone-900 rounded-3xl p-6 border border-stone-200 dark:border-stone-800 shadow-xs space-y-4"
              >
                <div>
                  <div className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider">
                    {protocol.inventorOrPerpetrator}
                  </div>
                  <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 mt-1">
                    {protocol.protocolName}
                  </h3>
                </div>

                <div className="space-y-2 text-xs">
                  <div>
                    <span className="font-bold text-stone-400">Prétexte médical affiché :</span>
                    <p className="text-stone-700 dark:text-stone-300 mt-0.5">{protocol.medicalPretext}</p>
                  </div>

                  <div>
                    <span className="font-bold text-red-600 dark:text-red-400">Procédure réelle imposée aux patients :</span>
                    <p className="text-stone-700 dark:text-stone-300 mt-0.5 leading-relaxed">{protocol.actualProcedure}</p>
                  </div>

                  <div className="pt-2">
                    <span className="font-bold text-stone-400">Agents chimiques et physiques utilisés :</span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {protocol.chemicalOrPhysicalAgents.map((agent, aIdx) => (
                        <span key={aIdx} className="px-2 py-0.5 rounded-lg bg-red-100 dark:bg-red-950/60 text-red-800 dark:text-red-300 text-[11px] font-bold">
                          {agent}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/60 dark:border-stone-700/50 mt-2">
                    <span className="font-bold text-stone-800 dark:text-stone-200">Dégâts neurologiques observés :</span>
                    <p className="text-stone-600 dark:text-stone-400 mt-0.5">{protocol.neurologicalImpact}</p>
                  </div>

                  <div className="text-[10px] text-stone-400 pt-1 font-mono">
                    Réf : {protocol.scientificSource}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-TAB: CHRONOLOGY */}
      {activeSubTab === 'chronology' && (
        <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 sm:p-8 border border-stone-200 dark:border-stone-800 shadow-xs space-y-6">
          <h2 className="text-xl font-bold font-serif text-stone-900 dark:text-stone-100 flex items-center gap-2">
            <History className="w-5 h-5 text-red-600" />
            Ligne du Temps Documentée : De Ravenscrag aux Recours Actuels
          </h2>

          <div className="relative border-l-2 border-red-500/30 dark:border-red-500/20 ml-4 space-y-6 pl-6">
            {MK_ULTRA_CHRONOLOGY.map((event, idx) => (
              <div key={idx} className="relative group">
                {/* Dot */}
                <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-red-600 border-2 border-white dark:border-stone-900 shadow-xs" />

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-black text-red-600 dark:text-red-400">
                      {event.year}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-md font-bold bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400">
                      {event.institutionalInvolvement}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-stone-900 dark:text-stone-100">
                    {event.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="text-[10px] text-stone-400 font-mono pt-1">
                    Pièce officielle : {event.officialSourceDocument}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-TAB: ARCHIVES */}
      {activeSubTab === 'archives' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-5">
            {MK_ULTRA_DECLASSIFIED_ARCHIVES.map((archive) => (
              <div 
                key={archive.docId}
                className="bg-white dark:bg-stone-900 rounded-3xl p-6 border border-stone-200 dark:border-stone-800 shadow-xs space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-red-600 dark:text-red-400 uppercase tracking-wider">
                      {archive.classificationStatus}
                    </span>
                    <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100">
                      {archive.title}
                    </h2>
                  </div>
                  <span className="text-xs text-stone-400 font-mono shrink-0">
                    {archive.date} • {archive.issuingBody}
                  </span>
                </div>

                {/* Excerpts */}
                <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/70 border border-stone-200/80 dark:border-stone-700/60 space-y-2">
                  <div className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                    Extraits vérifiés du document officiel :
                  </div>
                  {archive.keyExcerpts.map((excerpt, eIdx) => (
                    <p key={eIdx} className="text-xs sm:text-sm italic text-stone-800 dark:text-stone-200 font-serif border-l-2 border-amber-500 pl-3">
                      {excerpt}
                    </p>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 text-xs text-stone-500">
                  <span><strong>Portée historique :</strong> {archive.historicalSignificance}</span>
                  <span className="font-mono text-[10px] text-stone-400 shrink-0">Réf : {archive.archiveReference}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
