import React from 'react';
import { 
  ShieldAlert, 
  Lock, 
  FileCheck2, 
  ExternalLink, 
  AlertTriangle, 
  HeartHandshake,
  Gavel,
  Building2,
  Users2
} from 'lucide-react';
import { WATCHDOG_AGENCIES } from '../data/whistleblowerGuide';

export const WhistleblowerGuideView: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Hero Banner */}
      <div className="rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-3.5 mb-3">
          <div className="p-3 rounded-2xl bg-blue-900 text-white dark:bg-blue-800 shadow-xs">
            <ShieldAlert className="w-6 h-6 text-amber-400" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black font-serif text-stone-900 dark:text-stone-100">
              Guide Citoyen de Dénonciation & Organismes de Recours au Québec
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400">
              Comment agir légalement, protéger son identité et faire incriminer la corruption ou les abus de fonds publics
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 text-xs sm:text-sm text-blue-900 dark:text-blue-200 leading-relaxed space-y-2 mt-4">
          <p className="font-semibold flex items-center gap-1.5">
            <Lock className="w-4 h-4 text-blue-700 dark:text-blue-400 shrink-0" />
            La primauté de la preuve et la protection des lanceurs d'alerte :
          </p>
          <p>
            Pour qu'un dossier de corruption, de malversation ou de conflit d'intérêts mène à des sanctions réelles et à des poursuites criminelles ou déontologiques au Québec, il doit impérativement reposer sur des <strong>faits vérifiables, des documents officiels, des courriels, des numéros de contrats SEAO ou des témoignages concordants</strong>. Les allégations sans preuve ne peuvent prospérer en droit.
          </p>
        </div>
      </div>

      {/* Directory of Watchdog Agencies */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {WATCHDOG_AGENCIES.map((agency, idx) => (
          <div
            key={idx}
            className="rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 flex flex-col justify-between space-y-4 shadow-xs"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-base sm:text-lg font-bold font-serif text-stone-900 dark:text-stone-100">
                  {agency.name}
                </h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 shrink-0">
                  {agency.confidentialityLevel}
                </span>
              </div>

              <span className="text-xs font-semibold text-blue-700 dark:text-blue-400 block">
                {agency.role}
              </span>

              <div className="space-y-1.5 text-xs text-stone-600 dark:text-stone-300">
                <span className="font-bold text-stone-900 dark:text-stone-100 block">
                  Champ de compétence :
                </span>
                <p className="leading-relaxed">{agency.scope}</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-stone-950 border border-stone-100 dark:border-stone-800/80 space-y-1.5 text-xs">
                <span className="font-bold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                  <FileCheck2 className="w-3.5 h-3.5 text-blue-700" />
                  Procédure de signalement :
                </span>
                <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                  {agency.reportingProcess}
                </p>
              </div>

              <div className="space-y-1 text-xs">
                <span className="font-semibold text-amber-700 dark:text-amber-400 block">
                  🛡️ Protection juridique :
                </span>
                <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                  {agency.legalProtection}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs">
              <span className="text-[11px] font-mono text-stone-400">
                {agency.lawReference}
              </span>

              <span className="inline-flex items-center gap-1 font-bold text-blue-700 dark:text-blue-400">
                <span>{agency.officialPortal}</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Advice for Building a Rock-Solid Case */}
      <div className="rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 sm:p-8 shadow-sm space-y-4">
        <h3 className="text-base sm:text-lg font-bold font-serif text-stone-900 dark:text-stone-100 flex items-center gap-2">
          <Gavel className="w-5 h-5 text-blue-900 dark:text-blue-400" />
          Les 4 Règles d'Or pour Révéler la Vérité sans Tomber dans le Piège de la Rumeur
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
          <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-950 border border-stone-200/80 dark:border-stone-800 space-y-1.5">
            <span className="font-bold text-stone-900 dark:text-stone-100 block">
              1. Privilégiez les numéros de dossiers et décrets
            </span>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
              Consultez le <strong>SEAO</strong> (Système électronique d'appel d'offres), la <strong>Gazette officielle du Québec</strong> et le <strong>Journal des débats de l'Assemblée nationale</strong> pour obtenir des références matérielles indiscutables.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-950 border border-stone-200/80 dark:border-stone-800 space-y-1.5">
            <span className="font-bold text-stone-900 dark:text-stone-100 block">
              2. Ne contournez jamais la voie légale
            </span>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
              La <em>Loi D-11.1</em> protège les lanceurs d'alerte à condition que la divulgation soit faite auprès du <strong>Protecteur du citoyen</strong> ou de l'<strong>UPAC</strong>. Une divulgation sauvage sur les réseaux sociaux peut annuler vos protections contre les poursuites en diffamation.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-950 border border-stone-200/80 dark:border-stone-800 space-y-1.5">
            <span className="font-bold text-stone-900 dark:text-stone-100 block">
              3. Distinguez décision politique contestable et infraction pénale
            </span>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
              Une mauvaise dépense publique (ex: subventions discrétionnaires) relève souvent de la reddition de comptes électorale et du blâme déontologique, alors que la corruption ou la collusion impliquent un pacte secret puni par le Code criminel.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-950 border border-stone-200/80 dark:border-stone-800 space-y-1.5">
            <span className="font-bold text-stone-900 dark:text-stone-100 block">
              4. Protégez l'intérêt supérieur des enfants et de l'État
            </span>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
              La recherche de la vérité a pour but de garantir que chaque dollar des contribuables québécois soit investi là où il compte : dans nos écoles, nos CPE, les soins pédiatriques et la justice sociale.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
