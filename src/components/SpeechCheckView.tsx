import React, { useState } from 'react';
import { 
  MessageSquareQuote, 
  Search, 
  Scale, 
  Building2, 
  ArrowRight,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

interface SpeechCheckViewProps {
  onAnalyzeSpeech: (speech: string) => void;
  isLoading: boolean;
}

const SAMPLE_SPEECHES = [
  {
    author: 'Intervention ministérielle au Salon bleu (SAAQ)',
    context: 'Période des questions orales - Assemblée nationale',
    text: '« Nous avons fait le virage numérique nécessaire que le Québec attendait depuis 40 ans. Les coûts supplémentaires sont normaux dans un projet de cette envergure et tout a été fait selon les règles contractuelles les plus strictes. Les citoyens bénéficieront d\'un service exemplaire. »'
  },
  {
    author: 'Déclaration sur les investissements Northvolt',
    context: 'Point de presse de l\'exécutif',
    text: '« Le projet Northvolt est la plus grande transaction économique de l\'histoire moderne du Québec. Les fonds d\'Investissement Québec sont parfaitement protégés par des actifs tangibles et ce partenariat garantit la prospérité verte pour nos enfants sans aucun risque pour les finances de l\'État. »'
  },
  {
    author: 'Réponse ministérielle sur les places en garderie et la DPJ',
    context: 'Commission parlementaire des relations avec les citoyens',
    text: '« Notre gouvernement a investi des sommes historiques dans le réseau des CPE et dans la protection de la jeunesse. Toutes les recommandations de la Commission Laurent sont en voie d\'application et aucun enfant n\'est laissé pour compte par manque de moyens financiers de l\'État. »'
  }
];

export const SpeechCheckView: React.FC<SpeechCheckViewProps> = ({
  onAnalyzeSpeech,
  isLoading,
}) => {
  const [speechText, setSpeechText] = useState('');

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    if (!speechText.trim() || isLoading) return;
    onAnalyzeSpeech(`Vérifier cette déclaration de l'Assemblée nationale ou d'un représentant public sous la loupe des faits et des registres contractuels : "${speechText.trim()}"`);
  };

  return (
    <div className="space-y-6">
      {/* Intro Header */}
      <div className="rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-blue-900 text-white dark:bg-blue-800">
            <MessageSquareQuote className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold font-serif text-stone-900 dark:text-stone-100">
              Scrutateur du Salon Bleu & Déclarations Politiques
            </h2>
            <p className="text-xs text-stone-500 dark:text-stone-400">
              Confrontez les discours parlementaires, promesses ministérielles et réponses au Hansard avec les contrats réels, rapports du VGQ et registres du lobbyisme
            </p>
          </div>
        </div>

        <form onSubmit={handleAnalyze} className="space-y-4">
          <textarea
            rows={5}
            value={speechText}
            onChange={(e) => setSpeechText(e.target.value)}
            placeholder="Collez ici une déclaration d'un ministre, d'un député au Salon bleu, une promesse électorale ou un discours officiel sur les fonds publics..."
            className="w-full rounded-2xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-950 p-4 text-sm text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-blue-600 resize-none"
            disabled={isLoading}
          />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Confrontation aux comptes publics, décisions de l'éthique et données du SEAO.</span>
            </div>

            <button
              type="submit"
              disabled={!speechText.trim() || isLoading}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold shadow-sm transition-all cursor-pointer ${
                !speechText.trim() || isLoading
                  ? 'bg-stone-200 dark:bg-stone-800 text-stone-400 cursor-not-allowed'
                  : 'bg-blue-900 hover:bg-blue-800 dark:bg-blue-700 dark:hover:bg-blue-600 text-white'
              }`}
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Examen en cours...</span>
                </>
              ) : (
                <>
                  <Search className="w-4 h-4" />
                  <span>Passer la Déclaration au Crible</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Samples from National Assembly */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-stone-600 dark:text-stone-300">
          Exemples de déclarations et réponses ministérielles à vérifier :
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SAMPLE_SPEECHES.map((sample, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300">
                  {sample.context}
                </span>
                <h4 className="text-xs font-bold text-stone-900 dark:text-stone-100">
                  {sample.author}
                </h4>
                <p className="text-xs text-stone-600 dark:text-stone-400 italic leading-relaxed">
                  {sample.text}
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setSpeechText(sample.text);
                  onAnalyzeSpeech(`Vérifier cette déclaration de l'Assemblée nationale ou d'un représentant public sous la loupe des faits et des registres contractuels : "${sample.text}"`);
                }}
                disabled={isLoading}
                className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-stone-100 hover:bg-blue-50 dark:bg-stone-800 dark:hover:bg-blue-950 text-stone-800 dark:text-stone-200 hover:text-blue-700 transition-colors cursor-pointer"
              >
                <span>Vérifier les Faits</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
