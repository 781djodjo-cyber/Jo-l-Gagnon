import React, { useState, useMemo } from 'react';
import { 
  Plane, 
  ShieldAlert, 
  FileText, 
  Scale, 
  History, 
  BookOpen, 
  Search, 
  AlertTriangle, 
  CheckCircle2, 
  ExternalLink, 
  ChevronRight, 
  Building, 
  Users, 
  Lock, 
  Eye, 
  AlertOctagon, 
  MapPin, 
  Calendar,
  Sparkles,
  Info
} from 'lucide-react';
import { 
  EPSTEIN_MONTREAL_FLIGHT_LOGS, 
  EPSTEIN_BRUNEL_ENTITIES, 
  EPSTEIN_BLACK_BOOK_QUEBEC_AUDIT, 
  EPSTEIN_SDNY_DECLASSIFIED_ARCHIVES, 
  EPSTEIN_QUEBEC_CHRONOLOGY,
  EpsteinFlightLog,
  EpsteinBrunelEntity,
  EpsteinBlackBookEntry
} from '../data/epsteinQuebecData';

interface EpsteinQuebecSuperbaseViewProps {
  onInvestigateDossier: (dossierId: string) => void;
  onOpenChatWithQuery?: (query: string) => void;
}

type EpsteinSubTab = 'overview' | 'flights' | 'brunel_models' | 'black_book' | 'sdny_archives' | 'chronology';

export const EpsteinQuebecSuperbaseView: React.FC<EpsteinQuebecSuperbaseViewProps> = ({
  onInvestigateDossier,
  onOpenChatWithQuery
}) => {
  const [activeSubTab, setActiveSubTab] = useState<EpsteinSubTab>('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [flightFilter, setFlightFilter] = useState<'ALL' | 'Dorval (YUL)' | 'Mirabel (YMX)'>('ALL');

  // Filtered Flights
  const filteredFlights = useMemo(() => {
    return EPSTEIN_MONTREAL_FLIGHT_LOGS.filter((flight) => {
      const matchAirport = flightFilter === 'ALL' || flight.montrealAirport === flightFilter;
      if (!matchAirport) return false;
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        flight.flightDate.includes(q) ||
        flight.aircraftTail.toLowerCase().includes(q) ||
        flight.aircraftModel.toLowerCase().includes(q) ||
        flight.departureAirport.toLowerCase().includes(q) ||
        flight.arrivalAirport.toLowerCase().includes(q) ||
        flight.pilotInCommand.toLowerCase().includes(q) ||
        flight.passengersRecorded.toLowerCase().includes(q) ||
        flight.faaCertifiedNotes.toLowerCase().includes(q)
      );
    });
  }, [flightFilter, searchQuery]);

  // Filtered Brunel Entities
  const filteredBrunel = useMemo(() => {
    if (!searchQuery.trim()) return EPSTEIN_BRUNEL_ENTITIES;
    const q = searchQuery.toLowerCase();
    return EPSTEIN_BRUNEL_ENTITIES.filter((item) => (
      item.entityName.toLowerCase().includes(q) ||
      item.roleInNetwork.toLowerCase().includes(q) ||
      item.montrealConnection.toLowerCase().includes(q) ||
      item.documentedFacts.some(f => f.toLowerCase().includes(q)) ||
      item.officialSource.toLowerCase().includes(q)
    ));
  }, [searchQuery]);

  // Filtered Black Book
  const filteredBlackBook = useMemo(() => {
    if (!searchQuery.trim()) return EPSTEIN_BLACK_BOOK_QUEBEC_AUDIT;
    const q = searchQuery.toLowerCase();
    return EPSTEIN_BLACK_BOOK_QUEBEC_AUDIT.filter((item) => (
      item.nameOrEntity.toLowerCase().includes(q) ||
      item.addressBookContext.toLowerCase().includes(q) ||
      item.officialStatementOrFact.toLowerCase().includes(q) ||
      item.sourceReference.toLowerCase().includes(q) ||
      item.ethicalSeparationNotice.toLowerCase().includes(q)
    ));
  }, [searchQuery]);

  // Filtered Chronology
  const filteredChronology = useMemo(() => {
    if (!searchQuery.trim()) return EPSTEIN_QUEBEC_CHRONOLOGY;
    const q = searchQuery.toLowerCase();
    return EPSTEIN_QUEBEC_CHRONOLOGY.filter((event) => (
      event.yearOrDate.toLowerCase().includes(q) ||
      event.title.toLowerCase().includes(q) ||
      event.description.toLowerCase().includes(q) ||
      event.officialSource.toLowerCase().includes(q)
    ));
  }, [searchQuery]);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Top Banner with official SDNY & FAA Badge */}
      <div className="rounded-3xl bg-linear-to-r from-stone-950 via-purple-950 to-neutral-950 p-6 sm:p-8 text-white shadow-xl border border-purple-900/40 relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-purple-900/50 text-purple-300 border border-purple-700/50">
            <ShieldAlert className="w-4 h-4 text-purple-400" />
            <span>Base Documentaire Déclassifiée • Décachetage SDNY & Registres FAA</span>
          </div>
          
          <h1 className="text-2xl sm:text-4xl font-serif font-black tracking-tight text-white">
            Réseau Epstein : Escales à Montréal & Connexions au Québec
          </h1>
          
          <p className="text-sm sm:text-base text-stone-300 font-sans leading-relaxed">
            Cartographie factuelle certifiée des ramifications québécoises du dossier Jeffrey Epstein : 
            plans de vol officiels de la FAA aux aéroports de Dorval et Mirabel, filière d'agences de mannequins 
            Jean-Luc Brunel (MC2 / Karin Models), examen rigoureux du carnet mondain saisi par le FBI (« Black Book »), 
            et pièces judiciaires décachetées par la juge fédérale Loretta Preska (SDNY).
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              id="btn-open-epstein-full-dossier"
              type="button"
              onClick={() => onInvestigateDossier('reseau-epstein-elites-quebec')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-purple-600 hover:bg-purple-500 text-white transition-colors shadow-sm cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Consulter le Dossier d'Investigation Intégral</span>
            </button>

            {onOpenChatWithQuery && (
              <button
                id="btn-chat-epstein-inquiry"
                type="button"
                onClick={() => onOpenChatWithQuery("Explique-moi les faits vérifiés sur les escales de l'avion d'Epstein à Montréal et les démarches de Brunel dans les agences de mannequins")}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-stone-800/80 hover:bg-stone-700 text-purple-200 border border-purple-700/40 transition-colors cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Interroger l'Assistant Documentaire IA</span>
              </button>
            )}

            <span className="text-xs text-stone-400">
              Sources : SDNY 15-cv-07433 • Registres FAA • Parquet de Paris • Radio-Canada Enquête
            </span>
          </div>
        </div>
      </div>

      {/* Internal Navigation Sub-Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-stone-100 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700">
        <button
          id="subtab-epstein-overview"
          type="button"
          onClick={() => setActiveSubTab('overview')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeSubTab === 'overview'
              ? 'bg-white dark:bg-stone-900 text-purple-900 dark:text-purple-400 shadow-xs'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Vue d'Ensemble & Faits Vérifiés</span>
        </button>

        <button
          id="subtab-epstein-flights"
          type="button"
          onClick={() => setActiveSubTab('flights')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeSubTab === 'flights'
              ? 'bg-white dark:bg-stone-900 text-purple-900 dark:text-purple-400 shadow-xs'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
          }`}
        >
          <Plane className="w-3.5 h-3.5 text-blue-500" />
          <span>Registre des Vols (Dorval & Mirabel)</span>
          <span className="ml-1 px-1.5 py-0.5 rounded-full text-[10px] bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 font-bold">
            {EPSTEIN_MONTREAL_FLIGHT_LOGS.length}
          </span>
        </button>

        <button
          id="subtab-epstein-brunel"
          type="button"
          onClick={() => setActiveSubTab('brunel_models')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeSubTab === 'brunel_models'
              ? 'bg-white dark:bg-stone-900 text-purple-900 dark:text-purple-400 shadow-xs'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
          }`}
        >
          <Users className="w-3.5 h-3.5 text-rose-500" />
          <span>Filière Mannequins & Brunel</span>
        </button>

        <button
          id="subtab-epstein-blackbook"
          type="button"
          onClick={() => setActiveSubTab('black_book')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeSubTab === 'black_book'
              ? 'bg-white dark:bg-stone-900 text-purple-900 dark:text-purple-400 shadow-xs'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
          }`}
        >
          <Building className="w-3.5 h-3.5 text-amber-500" />
          <span>Carnet Saisi (« Black Book ») & Élites</span>
        </button>

        <button
          id="subtab-epstein-sdny"
          type="button"
          onClick={() => setActiveSubTab('sdny_archives')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeSubTab === 'sdny_archives'
              ? 'bg-white dark:bg-stone-900 text-purple-900 dark:text-purple-400 shadow-xs'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
          }`}
        >
          <Scale className="w-3.5 h-3.5 text-emerald-500" />
          <span>Archives SDNY Décachetées</span>
        </button>

        <button
          id="subtab-epstein-chronology"
          type="button"
          onClick={() => setActiveSubTab('chronology')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeSubTab === 'chronology'
              ? 'bg-white dark:bg-stone-900 text-purple-900 dark:text-purple-400 shadow-xs'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
          }`}
        >
          <History className="w-3.5 h-3.5" />
          <span>Chronologie (1998 - 2026)</span>
        </button>
      </div>

      {/* Global Search Bar for this Superbase */}
      <div className="relative">
        <Search className="w-4 h-4 text-stone-400 absolute left-4 top-3.5" />
        <input
          id="input-epstein-search"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Rechercher par date, ville, nom d'avion (N908JE, N212JE), personnalité, agence ou document SDNY..."
          className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 dark:text-stone-100 placeholder:text-stone-400"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-4 top-3 text-xs text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 cursor-pointer"
          >
            Effacer
          </button>
        )}
      </div>

      {/* SUB-TAB 1: OVERVIEW */}
      {activeSubTab === 'overview' && (
        <div className="space-y-6">
          {/* Key Metric Facts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs">
              <div className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-1">
                Escales Enregistrées
              </div>
              <div className="text-2xl font-black text-stone-900 dark:text-stone-100 flex items-center gap-2">
                <Plane className="w-6 h-6 text-purple-500" />
                Dorval & Mirabel
              </div>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-2">
                Atterrissages certifiés par la FAA entre 1998 et 2005 (Gulfstream II N908JE et Boeing 727 N212JE).
              </p>
            </div>

            <div className="p-5 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs">
              <div className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider mb-1">
                Filière Mannequins
              </div>
              <div className="text-2xl font-black text-stone-900 dark:text-stone-100 flex items-center gap-2">
                <Users className="w-6 h-6 text-rose-500" />
                Jean-Luc Brunel
              </div>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-2">
                Prospection à Montréal pour MC2 (financée par Epstein). Inculpation criminelle par le Parquet de Paris.
              </p>
            </div>

            <div className="p-5 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs">
              <div className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
                Carnet Mondain Saisi
              </div>
              <div className="text-2xl font-black text-stone-900 dark:text-stone-100 flex items-center gap-2">
                <Building className="w-6 h-6 text-amber-500" />
                Audit Citoyen
              </div>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-2">
                Distinction nette entre simples contacts caritatifs répertoriés et infractions criminelles réelles.
              </p>
            </div>

            <div className="p-5 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs">
              <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">
                Universités QC
              </div>
              <div className="text-2xl font-black text-stone-900 dark:text-stone-100 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                Zéro Don Reçu
              </div>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-2">
                McGill et les Fonds de recherche du Québec (FRQ) ont formellement vérifié et confirmé n'avoir accepté aucun argent d'Epstein.
              </p>
            </div>
          </div>

          {/* Triangulated Narrative of Facts */}
          <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 sm:p-8 border border-stone-200 dark:border-stone-800 shadow-xs space-y-4">
            <h2 className="text-xl font-bold font-serif text-stone-900 dark:text-stone-100 flex items-center gap-2">
              <Scale className="w-5 h-5 text-purple-600" />
              Ce que les archives officielles prouvent de manière incontestable
            </h2>

            <div className="prose dark:prose-invert max-w-none text-stone-700 dark:text-stone-300 text-sm leading-relaxed space-y-4">
              <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-900 dark:text-purple-300 space-y-1">
                <div className="font-bold flex items-center gap-2 text-xs uppercase tracking-wider">
                  <AlertOctagon className="w-4 h-4 text-purple-600 shrink-0" />
                  Règle d'or de Transparence Québec : Séparation Déontologique Absolue
                </div>
                <p className="text-xs">
                  Dans ce dossier international sensible, la rigueur civique exige de séparer hermétiquement : 
                  <strong>1)</strong> Les crimes de traite sexuelle et viols sur mineures formellement condamnés par la justice américaine et française ; 
                  <strong>2)</strong> Les manœuvres de rabattage d'adolescentes québécoises par Jean-Luc Brunel via l'industrie de la mode ; et 
                  <strong>3)</strong> La simple présence de numéros de téléphone dans un carnet mondain saisi, qui ne constitue en rien une complicité sans allégation judiciaire étayée.
                </p>
              </div>

              <p>
                À la suite de la levée des scellés ordonnée en janvier 2024 par la juge fédérale Loretta Preska (Cour du district sud de New York - SDNY) 
                dans le dossier <em>Giuffre v. Maxwell</em> (15-cv-07433), plus de 4 500 pages de dépositions sous serment et registres certifiés de vol de la 
                Federal Aviation Administration (FAA) ont été rendues publiques.
              </p>

              <p>
                Ces documents confirment que le Gulfstream II (N908JE) et le Boeing 727 (N212JE) de Jeffrey Epstein ont atterri à plusieurs reprises aux 
                aéroports de <strong>Montréal-Dorval (YUL)</strong> et <strong>Montréal-Mirabel (YMX)</strong> entre 1998 et 2005, souvent pilotés par 
                David Rodgers et Larry Visoski. Plusieurs de ces vols coïncidaient avec les déplacements de son rabatteur Jean-Luc Brunel, dirigeant de 
                Karin Models puis fondateur de MC2 Model Management (financée par Epstein).
              </p>

              <p>
                Au Québec, l'enquête journalistique télévisée de Radio-Canada (<em>Enquête</em>) a recueilli les témoignages d'anciennes aspirantes mannequins 
                québécoises approchées dès l'adolescence à Montréal, exposant les méthodes prédatrices de Brunel sous couvert de contrats internationaux de haute couture.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* SUB-TAB 2: FLIGHTS TO MONTREAL */}
      {activeSubTab === 'flights' && (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold text-stone-700 dark:text-stone-300">
              <Plane className="w-4 h-4 text-blue-500" />
              <span>Filtrer par aéroport d'escale :</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setFlightFilter('ALL')}
                className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  flightFilter === 'ALL'
                    ? 'bg-blue-600 text-white'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400'
                }`}
              >
                Tous ({EPSTEIN_MONTREAL_FLIGHT_LOGS.length})
              </button>
              <button
                onClick={() => setFlightFilter('Dorval (YUL)')}
                className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  flightFilter === 'Dorval (YUL)'
                    ? 'bg-blue-600 text-white'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400'
                }`}
              >
                Dorval YUL
              </button>
              <button
                onClick={() => setFlightFilter('Mirabel (YMX)')}
                className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  flightFilter === 'Mirabel (YMX)'
                    ? 'bg-blue-600 text-white'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400'
                }`}
              >
                Mirabel YMX
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {filteredFlights.map((flight) => (
              <div
                key={flight.id}
                className="bg-white dark:bg-stone-900 rounded-3xl p-6 border border-stone-200 dark:border-stone-800 shadow-xs space-y-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-stone-100 dark:border-stone-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-black text-xs shrink-0">
                      <Plane className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-black text-base text-stone-900 dark:text-stone-100">
                          {flight.aircraftTail}
                        </span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-100 dark:bg-purple-950/80 text-purple-800 dark:text-purple-300">
                          {flight.aircraftModel}
                        </span>
                      </div>
                      <span className="text-xs text-stone-500 dark:text-stone-400 flex items-center gap-1.5 mt-0.5">
                        <Calendar className="w-3 h-3" /> Date : {flight.flightDate} • Pilote : {flight.pilotInCommand}
                      </span>
                    </div>
                  </div>

                  <div className="px-3 py-1 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-xs font-bold flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-rose-500" />
                    Escale : {flight.montrealAirport}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-stone-800/50 space-y-1">
                    <span className="font-bold text-stone-500 dark:text-stone-400 uppercase text-[10px]">
                      Trajet documenté :
                    </span>
                    <div className="font-bold text-stone-900 dark:text-stone-100">
                      {flight.departureAirport} ➔ {flight.arrivalAirport}
                    </div>
                    <div className="text-stone-600 dark:text-stone-400 text-[11px] pt-1">
                      <strong>Passagers inscrits :</strong> {flight.passengersRecorded}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-stone-800/50 space-y-1">
                    <span className="font-bold text-stone-500 dark:text-stone-400 uppercase text-[10px]">
                      Pièce à conviction SDNY / FAA :
                    </span>
                    <div className="font-bold text-purple-700 dark:text-purple-300">
                      {flight.officialCourtExhibitRef}
                    </div>
                    <div className="text-stone-600 dark:text-stone-400 text-[11px] pt-1">
                      {flight.faaCertifiedNotes}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-TAB 3: BRUNEL & MODELING NETWORK IN MONTREAL */}
      {activeSubTab === 'brunel_models' && (
        <div className="space-y-6">
          <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-900 dark:text-rose-300 text-xs leading-relaxed space-y-1">
            <strong className="block font-bold">Alerte Protection de la Jeunesse & Milieu de la Mode :</strong>
            Les agences Karin Models et MC2 ont été formellement identifiées par le Parquet de Paris et les cours fédérales américaines comme des paravents de rabattage international de très jeunes filles. La vigilance citoyenne rappelle la nécessité de réglementer de façon stricte les permis d'agences artistiques et de protéger les mineures québécoises.
          </div>

          <div className="grid grid-cols-1 gap-6">
            {filteredBrunel.map((entity) => (
              <div
                key={entity.id}
                className="bg-white dark:bg-stone-900 rounded-3xl p-6 sm:p-8 border border-stone-200 dark:border-stone-800 shadow-xs space-y-4"
              >
                <div className="flex flex-wrap items-start justify-between gap-3 pb-3 border-b border-stone-100 dark:border-stone-800">
                  <div>
                    <h3 className="text-xl font-bold font-serif text-stone-900 dark:text-stone-100">
                      {entity.entityName}
                    </h3>
                    <p className="text-xs text-purple-700 dark:text-purple-400 font-semibold mt-0.5">
                      Rôle : {entity.roleInNetwork}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-rose-100 dark:bg-rose-950/80 text-rose-800 dark:text-rose-300 border border-rose-300 dark:border-rose-800">
                    {entity.legalStatus}
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/60 text-xs text-stone-700 dark:text-stone-300 space-y-1">
                  <strong className="text-stone-900 dark:text-stone-100 block">
                    Connexion Montréalaise Documentée :
                  </strong>
                  <p>{entity.montrealConnection}</p>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-bold text-stone-900 dark:text-stone-100 uppercase tracking-wider">
                    Faits Vérifiés & Témoignages Enquête :
                  </div>
                  <ul className="space-y-1.5">
                    {entity.documentedFacts.map((fact, idx) => (
                      <li key={idx} className="text-xs text-stone-600 dark:text-stone-300 flex items-start gap-2">
                        <span className="text-rose-500 font-bold shrink-0">•</span>
                        <span>{fact}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-stone-100 dark:border-stone-800 text-[11px] text-stone-500 dark:text-stone-400 flex items-center justify-between">
                  <span><strong>Source officielle :</strong> {entity.officialSource}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-TAB 4: BLACK BOOK & QUEBEC ELITES AUDIT */}
      {activeSubTab === 'black_book' && (
        <div className="space-y-6">
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-300 text-xs leading-relaxed space-y-1">
            <strong className="block font-bold">Rappel Juridique de Déontologie :</strong>
            L'annuaire privé d'Epstein contenait des milliers de numéros collectés lors de galas, réceptions mondaines et réunions d'affaires. Une inscription n'équivaut à aucune culpabilité sans déposition, plainte ou élément matériel corroborant. Transparence Québec refuse tant la complaisance que la diffamation sans preuve.
          </div>

          <div className="grid grid-cols-1 gap-6">
            {filteredBlackBook.map((entry) => (
              <div
                key={entry.id}
                className="bg-white dark:bg-stone-900 rounded-3xl p-6 sm:p-8 border border-stone-200 dark:border-stone-800 shadow-xs space-y-4"
              >
                <div className="flex flex-wrap items-start justify-between gap-2 pb-3 border-b border-stone-100 dark:border-stone-800">
                  <div>
                    <h3 className="text-lg font-bold font-serif text-stone-900 dark:text-stone-100">
                      {entry.nameOrEntity}
                    </h3>
                    <span className="text-xs text-stone-400">
                      {entry.blackBookPageNumber}
                    </span>
                  </div>

                  <span className={`px-3 py-1 rounded-full text-[11px] font-bold ${
                    entry.verifiedFactualStatus === 'CONDAMNATION_CONNEXE_SDNY'
                      ? 'bg-rose-100 text-rose-800 dark:bg-rose-950/80 dark:text-rose-300 border border-rose-300'
                      : entry.verifiedFactualStatus === 'AUDIT_REFUS_DONS'
                      ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-300'
                      : 'bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300 border border-blue-300'
                  }`}>
                    {entry.verifiedFactualStatus.replace(/_/g, ' ')}
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-stone-800/60 space-y-1">
                    <strong className="text-stone-900 dark:text-stone-100 block">
                      Contexte de la mention :
                    </strong>
                    <p className="text-stone-600 dark:text-stone-300">{entry.addressBookContext}</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-purple-500/5 dark:bg-purple-950/20 border border-purple-200/50 dark:border-purple-800/40 space-y-1">
                    <strong className="text-purple-900 dark:text-purple-300 block">
                      Fait Vérifié & Précision Officielle :
                    </strong>
                    <p className="text-stone-700 dark:text-stone-300">{entry.officialStatementOrFact}</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-stone-100 dark:bg-stone-800 text-[11px] text-stone-600 dark:text-stone-400 space-y-1">
                  <strong>Avis Déontologique :</strong>
                  <p>{entry.ethicalSeparationNotice}</p>
                  <div className="pt-1 text-[10px] text-stone-500">
                    Source : {entry.sourceReference}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-TAB 5: SDNY ARCHIVES */}
      {activeSubTab === 'sdny_archives' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            {EPSTEIN_SDNY_DECLASSIFIED_ARCHIVES.map((archive) => (
              <div
                key={archive.id}
                className="bg-white dark:bg-stone-900 rounded-3xl p-6 sm:p-8 border border-stone-200 dark:border-stone-800 shadow-xs space-y-4"
              >
                <div className="flex flex-wrap items-start justify-between gap-3 pb-3 border-b border-stone-100 dark:border-stone-800">
                  <div>
                    <h3 className="text-lg font-bold font-serif text-stone-900 dark:text-stone-100">
                      {archive.documentTitle}
                    </h3>
                    <p className="text-xs text-purple-700 dark:text-purple-400 font-mono mt-0.5">
                      Dossier : {archive.docketNumber} • {archive.judgeOrAuthority}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300">
                    Décacheté : {archive.dateUnsealed}
                  </span>
                </div>

                <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                  {archive.summary}
                </p>

                <div className="space-y-2">
                  <div className="text-xs font-bold text-stone-900 dark:text-stone-100 uppercase tracking-wider">
                    Conclusions Clés Déclassifiées :
                  </div>
                  <ul className="space-y-1.5">
                    {archive.keyUnsealedFindings.map((finding, idx) => (
                      <li key={idx} className="text-xs text-stone-600 dark:text-stone-300 flex items-start gap-2">
                        <span className="text-emerald-500 font-bold shrink-0">•</span>
                        <span>{finding}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3.5 rounded-2xl bg-purple-500/10 text-xs text-purple-900 dark:text-purple-300 space-y-1">
                  <strong>Portée pour le Québec :</strong>
                  <p>{archive.relevanceToQuebec}</p>
                </div>

                <div className="text-[11px] text-stone-400">
                  Référence d'archive : {archive.sourceUrlOrRef}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-TAB 6: CHRONOLOGY */}
      {activeSubTab === 'chronology' && (
        <div className="space-y-6">
          <div className="relative pl-6 border-l-2 border-purple-500/30 dark:border-purple-800/40 space-y-6">
            {filteredChronology.map((event) => (
              <div key={event.id} className="relative group">
                {/* Timeline dot */}
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-purple-600 border-4 border-white dark:border-stone-950 shadow-xs" />
                
                <div className="bg-white dark:bg-stone-900 rounded-3xl p-5 border border-stone-200 dark:border-stone-800 shadow-xs space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-100 dark:bg-purple-950/80 text-purple-800 dark:text-purple-300">
                      {event.yearOrDate}
                    </span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${
                      event.impactLevel === 'CRITIQUE'
                        ? 'text-rose-600 dark:text-rose-400'
                        : event.impactLevel === 'MAJEUR'
                        ? 'text-amber-600 dark:text-amber-400'
                        : 'text-blue-600 dark:text-blue-400'
                    }`}>
                      Impact : {event.impactLevel}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-stone-900 dark:text-stone-100">
                    {event.title}
                  </h3>

                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="pt-2 text-[10px] text-stone-400">
                    Source vérifiée : {event.officialSource}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
