import React, { useState, useMemo } from 'react';
import { 
  GraduationCap, 
  Building2, 
  Search, 
  Filter, 
  Award, 
  Landmark, 
  Scale, 
  Stethoscope, 
  Briefcase, 
  Sparkles,
  ChevronRight,
  ShieldAlert,
  ArrowUpDown
} from 'lucide-react';
import { 
  QUEBEC_MINISTERS_SINCE_1995, 
  QuebecMinisterProfile,
  calculateUniversityBreakdown,
  calculateDisciplineBreakdown
} from '../data/ministersUniversitiesData';

interface MinistersUniversitiesViewProps {
  onInvestigateMinister: (ministerName: string) => void;
}

export const MinistersUniversitiesView: React.FC<MinistersUniversitiesViewProps> = ({
  onInvestigateMinister
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSchool, setSelectedSchool] = useState<string>('TOUTES');
  const [selectedParty, setSelectedParty] = useState<string>('TOUS');
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('TOUTES');
  const [sortBy, setSortBy] = useState<'nom' | 'annee'>('nom');

  const universityStats = useMemo(() => calculateUniversityBreakdown(), []);
  const disciplineStats = useMemo(() => calculateDisciplineBreakdown(), []);

  const filteredMinisters = useMemo(() => {
    return QUEBEC_MINISTERS_SINCE_1995.filter(minister => {
      // Text search
      const q = searchQuery.toLowerCase().trim();
      const matchText = !q || 
        minister.fullName.toLowerCase().includes(q) ||
        minister.almaMaterSummary.toLowerCase().includes(q) ||
        minister.keyPortfolios.some(p => p.toLowerCase().includes(q)) ||
        minister.premiersServedUnder.some(p => p.toLowerCase().includes(q)) ||
        (minister.notableActionsOrScandals && minister.notableActionsOrScandals.toLowerCase().includes(q));

      // Party filter
      const matchParty = selectedParty === 'TOUS' || minister.party === selectedParty;

      // School filter
      const matchSchool = selectedSchool === 'TOUTES' || 
        minister.education.some(edu => edu.shortName === selectedSchool);

      // Discipline filter
      const matchDiscipline = selectedDiscipline === 'TOUTES' ||
        minister.education.some(edu => edu.discipline === selectedDiscipline);

      return matchText && matchParty && matchSchool && matchDiscipline;
    }).sort((a, b) => {
      if (sortBy === 'nom') {
        return a.fullName.localeCompare(b.fullName);
      } else {
        return b.yearsInOffice.localeCompare(a.yearsInOffice);
      }
    });
  }, [searchQuery, selectedSchool, selectedParty, selectedDiscipline, sortBy]);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="rounded-3xl bg-linear-to-r from-blue-950 via-slate-900 to-indigo-950 p-6 sm:p-8 text-white shadow-xl border border-blue-800/40 relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30">
            <GraduationCap className="w-4 h-4 text-blue-400" />
            <span>Registre Institutionnel 1995-2026 • Assemblée Nationale & Exécutif</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-serif font-black tracking-tight text-white">
            Grille des Ministres du Québec & Leurs Universités
          </h1>
          <p className="text-sm sm:text-base text-stone-300 font-sans leading-relaxed">
            Cartographie systématique des parcours académiques, facultés de diplomation, 
            écoles de gestion et filières de formation des ministres et premiers ministres québécois 
            depuis le référendum de 1995 jusqu'aux gouvernements contemporains.
          </p>
        </div>
      </div>

      {/* Analytics & Statistical Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {universityStats.slice(0, 4).map((stat) => (
          <div 
            key={stat.shortName}
            onClick={() => setSelectedSchool(selectedSchool === stat.shortName ? 'TOUTES' : stat.shortName)}
            className={`p-4 rounded-2xl border transition-all cursor-pointer ${
              selectedSchool === stat.shortName
                ? 'bg-blue-900/20 border-blue-500 dark:border-blue-400 shadow-md ring-2 ring-blue-500/20'
                : 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 hover:border-blue-300 dark:hover:border-blue-700'
            }`}
          >
            <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 font-semibold mb-1">
              <span className="flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                {stat.shortName}
              </span>
              <span className="text-blue-600 dark:text-blue-400 font-black">{stat.percentage}% du Conseil</span>
            </div>
            <div className="text-xl font-bold text-stone-900 dark:text-stone-100 line-clamp-1">
              {stat.fullName}
            </div>
            <p className="text-xs text-stone-500 dark:text-stone-400 mt-2 line-clamp-1">
              {stat.count} ministres répertoriés
            </p>
          </div>
        ))}
      </div>

      {/* Discipline Pipeline Insight */}
      <div className="rounded-2xl p-5 bg-amber-500/10 dark:bg-amber-950/20 border border-amber-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Filières de Pouvoir à l'Exécutif</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300">
            <strong>Droit</strong> (Facultés UdeM, ULaval, Sherbrooke) et <strong>Sciences Économiques / MBA</strong> (HEC Montréal, LSE, Harvard) 
            constituent plus de <strong>70% des parcours académiques</strong> des membres du Conseil des ministres depuis 1995.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 shrink-0">
          {disciplineStats.slice(0, 4).map(d => (
            <span 
              key={d.discipline}
              onClick={() => setSelectedDiscipline(selectedDiscipline === d.discipline ? 'TOUTES' : d.discipline)}
              className={`px-2.5 py-1 rounded-full text-xs font-bold cursor-pointer transition-all ${
                selectedDiscipline === d.discipline
                  ? 'bg-amber-500 text-stone-950 font-black'
                  : 'bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 border border-amber-300 dark:border-amber-700'
              }`}
            >
              {d.discipline} ({d.count})
            </span>
          ))}
        </div>
      </div>

      {/* Filters and Search Bar */}
      <div className="bg-white dark:bg-stone-900 rounded-3xl p-5 sm:p-6 border border-stone-200 dark:border-stone-800 shadow-xs space-y-4">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher par nom de ministre, université, diplôme, ministère ou mot-clé..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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

          {/* Sort Switcher */}
          <button
            onClick={() => setSortBy(sortBy === 'nom' ? 'annee' : 'nom')}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-xs font-bold text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-700 cursor-pointer"
          >
            <ArrowUpDown className="w-3.5 h-3.5 text-blue-500" />
            <span>Tri: {sortBy === 'nom' ? 'Alphabétique (Nom)' : 'Période en poste'}</span>
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-stone-100 dark:border-stone-800 text-xs">
          <span className="text-stone-400 font-semibold flex items-center gap-1 mr-1">
            <Filter className="w-3.5 h-3.5" />
            Parti :
          </span>
          {['TOUS', 'CAQ', 'PLQ', 'PQ'].map(party => (
            <button
              key={party}
              onClick={() => setSelectedParty(party)}
              className={`px-3 py-1 rounded-xl font-bold cursor-pointer transition-all ${
                selectedParty === party
                  ? party === 'CAQ' ? 'bg-cyan-600 text-white' : party === 'PLQ' ? 'bg-red-600 text-white' : party === 'PQ' ? 'bg-blue-600 text-white' : 'bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700'
              }`}
            >
              {party}
            </button>
          ))}

          <span className="text-stone-400 font-semibold flex items-center gap-1 ml-3 mr-1">
            <Building2 className="w-3.5 h-3.5" />
            École / Université :
          </span>
          {['TOUTES', 'UdeM', 'ULaval', 'HEC', 'Sherbrooke', 'McGill', 'UQAM', 'Harvard', 'LSE', 'Sciences Po'].map(school => (
            <button
              key={school}
              onClick={() => setSelectedSchool(school)}
              className={`px-3 py-1 rounded-xl font-bold cursor-pointer transition-all ${
                selectedSchool === school
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700'
              }`}
            >
              {school}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 px-1">
        <span>Affichage de <strong>{filteredMinisters.length}</strong> ministres répertoriés</span>
        {(selectedSchool !== 'TOUTES' || selectedParty !== 'TOUS' || selectedDiscipline !== 'TOUTES' || searchQuery) && (
          <button
            onClick={() => {
              setSelectedSchool('TOUTES');
              setSelectedParty('TOUS');
              setSelectedDiscipline('TOUTES');
              setSearchQuery('');
            }}
            className="text-blue-600 dark:text-blue-400 hover:underline font-semibold cursor-pointer"
          >
            Réinitialiser tous les filtres
          </button>
        )}
      </div>

      {/* Ministers Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredMinisters.map((minister) => {
          const partyBadgeColor = 
            minister.party === 'CAQ' ? 'bg-cyan-100 text-cyan-800 dark:bg-cyan-950/80 dark:text-cyan-300 border-cyan-300 dark:border-cyan-700' :
            minister.party === 'PLQ' ? 'bg-red-100 text-red-800 dark:bg-red-950/80 dark:text-red-300 border-red-300 dark:border-red-700' :
            'bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300 border-blue-300 dark:border-blue-700';

          return (
            <div 
              key={minister.id}
              className="bg-white dark:bg-stone-900 rounded-3xl p-5 border border-stone-200 dark:border-stone-800 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Top Row: Name, Party & Office Period */}
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-black border uppercase tracking-wider ${partyBadgeColor}`}>
                        {minister.party}
                      </span>
                      <span className="text-xs text-stone-400 font-medium">
                        {minister.yearsInOffice}
                      </span>
                    </div>
                    <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {minister.fullName}
                    </h2>
                  </div>
                </div>

                {/* Portfolios */}
                <div className="space-y-1">
                  <div className="text-[11px] font-bold text-stone-400 uppercase tracking-wider flex items-center gap-1">
                    <Briefcase className="w-3 h-3 text-stone-400" />
                    Portefeuilles Ministériels Clés
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {minister.keyPortfolios.map((pf, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-0.5 rounded-lg text-xs bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 font-medium"
                      >
                        {pf}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Academic Degrees & Universities */}
                <div className="space-y-2 pt-2 border-t border-stone-100 dark:border-stone-800">
                  <div className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider flex items-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5 text-blue-500" />
                    Diplômes Universitaires & Facultés
                  </div>

                  <div className="space-y-1.5">
                    {minister.education.map((edu, idx) => (
                      <div 
                        key={idx}
                        className="p-2 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/60 dark:border-stone-700/50 space-y-0.5 text-xs"
                      >
                        <div className="flex items-center justify-between font-bold text-stone-900 dark:text-stone-100">
                          <span className="flex items-center gap-1 text-blue-700 dark:text-blue-300">
                            {edu.shortName === 'Harvard' || edu.shortName === 'LSE' || edu.shortName === 'Sciences Po' ? (
                              <Award className="w-3 h-3 text-amber-500" />
                            ) : (
                              <Building2 className="w-3 h-3 text-blue-500" />
                            )}
                            {edu.institution}
                          </span>
                          {edu.graduationYear && (
                            <span className="text-[10px] text-stone-400 font-mono">
                              {edu.graduationYear}
                            </span>
                          )}
                        </div>
                        <div className="text-stone-600 dark:text-stone-300 font-medium line-clamp-1">
                          {edu.degree}
                        </div>
                        <div className="text-[10px] text-stone-400 flex items-center justify-between">
                          <span>Discipline : {edu.discipline}</span>
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions, Controversies or Commissions */}
                {minister.notableActionsOrScandals && (
                  <div className="p-2.5 rounded-xl bg-stone-100/70 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-700 text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    <span className="font-bold text-stone-800 dark:text-stone-200">Faits & Dossiers marquants : </span>
                    {minister.notableActionsOrScandals}
                  </div>
                )}
              </div>

              {/* Card Footer: Status & Investigate Button */}
              <div className="pt-4 mt-4 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between gap-2">
                <span className="text-[11px] text-stone-400 font-medium line-clamp-1">
                  {minister.currentRoleOrStatus}
                </span>

                <button
                  type="button"
                  onClick={() => onInvestigateMinister(minister.fullName)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-950/50 transition-colors shrink-0 cursor-pointer"
                >
                  <span>Scrutin Déontologique</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
