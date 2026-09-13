import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Scale,
  ShieldAlert,
  AlertTriangle,
  FileText,
  Search,
  Check,
  Copy,
  Bot,
  ExternalLink,
  BookOpen,
  Filter,
  Flame,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Gavel,
  Clock,
  Users,
  ChevronRight,
  Printer,
  Sparkles,
  Layers,
  HeartHandshake,
  ArrowRight
} from 'lucide-react';
import {
  LPJ_CODEX_DATA,
  PARENT_FILE_VULNERABILITIES,
  LpjArticle,
  ParentFileVulnerability
} from '../data/lpjLawsAndCodexData';
import {
  DPJ_JURISPRUDENCE_DATABASE,
  DpjJurisprudence,
  getJurisprudencesForVulnerability,
  getJurisprudencesForArticle
} from '../data/dpjJurisprudenceData';
import { safeCopyToClipboard } from '../utils/clipboard';

interface DpjCaseFileAuditToolProps {
  onOpenChatWithQuery?: (query: string) => void;
  onSelectDossier?: (dossierId: string) => void;
}

type ToolTab =
  | 'detecteur_failles'
  | 'analyseur_texte'
  | 'generateur_requetes'
  | 'codex_lois'
  | 'jurisprudence_defense';

export const DpjCaseFileAuditTool: React.FC<DpjCaseFileAuditToolProps> = ({
  onOpenChatWithQuery,
  onSelectDossier
}) => {
  const [activeTab, setActiveTab] = useState<ToolTab>('detecteur_failles');

  // State for Detecteur de failles
  const [checkedVulnerabilities, setCheckedVulnerabilities] = useState<string[]>([]);
  const [selectedCategoryVuln, setSelectedCategoryVuln] = useState<string>('all');
  const [copiedStrategy, setCopiedStrategy] = useState(false);

  // State for Jurisprudence tab
  const [jurisprudenceSearchQuery, setJurisprudenceSearchQuery] = useState('');
  const [selectedJurisprudenceInAudit, setSelectedJurisprudenceInAudit] = useState<DpjJurisprudence>(
    DPJ_JURISPRUDENCE_DATABASE[0]
  );
  const [copiedJurisId, setCopiedJurisId] = useState<string | null>(null);

  // State for Analyseur de texte
  const [inputTextToAudit, setInputTextToAudit] = useState<string>(
    'La mère semble dépassée par la gestion du quotidien. Selon des informations reçues de voisins, les enfants seraient laissés sans surveillance pendant plusieurs heures. Le père refuse de collaborer avec l\'intervenante et présente une attitude hostile lors des visites supervisées.'
  );
  const [detectedClues, setDetectedClues] = useState<
    { keyword: string; alert: string; counterQuestion: string; lawArticle: string }[]
  >([]);

  // State for Générateur de requêtes
  const [selectedPetitionType, setSelectedPetitionType] = useState<'art95' | 'communication' | 'avocat_enfant' | 'famille_elargie' | 'cdpdj'>('art95');
  const [parentName, setParentName] = useState('Parent Demandeur');
  const [childName, setChildName] = useState('Enfant Mineur');
  const [district, setDistrict] = useState('Montréal');
  const [dossierNumber, setDossierNumber] = useState('500-06-XXXXXX-XXX');
  const [customFailures, setCustomFailures] = useState('Faits erronés non corroborés dans le rapport de la DPJ et refus de confier l\'enfant à ses grands-parents maternels disponibles.');
  const [copiedPetition, setCopiedPetition] = useState(false);

  // State for Codex Lois
  const [codexSearch, setCodexSearch] = useState<string>('');
  const [selectedCodexCategory, setSelectedCodexCategory] = useState<string>('all');
  const [selectedArticle, setSelectedArticle] = useState<LpjArticle | null>(LPJ_CODEX_DATA[0]);
  const [copiedArticleId, setCopiedArticleId] = useState<string | null>(null);

  // Toggle vulnerability in checklist
  const toggleVulnerability = (id: string) => {
    setCheckedVulnerabilities((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Run text audit for suspicious keywords
  const handleAnalyzeText = () => {
    const text = inputTextToAudit.toLowerCase();
    const clues: { keyword: string; alert: string; counterQuestion: string; lawArticle: string }[] = [];

    if (text.includes('semble') || text.includes('semblerait') || text.includes('apparaît')) {
      clues.push({
        keyword: '« Semble / Semblerait »',
        alert: 'Hypothèse subjective non corroborée. La compromission ne peut reposer sur des suppositions.',
        counterQuestion: '« Avez-vous une preuve matérielle directe ou est-ce une simple impression personnelle ? »',
        lawArticle: 'Art. 53 LPJ (Rigueur factuelle obligatoire)'
      });
    }

    if (text.includes('selon des informations') || text.includes('des tiers rapportent') || text.includes('selon des voisins') || text.includes('on rapporte')) {
      clues.push({
        keyword: '« Selon des informations / voisins »',
        alert: 'Preuve par ouï-dire non vérifiée. L\'auteur de la dénonciation n\'est pas assermenté.',
        counterQuestion: '« Qui est la source exacte et pourquoi cette personne n\'a-t-elle pas été assignée sous serment ? »',
        lawArticle: 'Art. 23 Charte québécoise (Preuve loyale et exclusion du ouï-dire)'
      });
    }

    if (text.includes('refuse de collaborer') || text.includes('attitude hostile') || text.includes('peu coopératif') || text.includes('opposant')) {
      clues.push({
        keyword: '« Refuse de collaborer / Attitude hostile »',
        alert: 'Terminologie piège pour criminaliser l\'exercice légitime de vos droits de contestation.',
        counterQuestion: '« Le refus de signer un document sans avis juridique constitue-t-il une compromission de l\'enfant ? »',
        lawArticle: 'Art. 8 & 54 LPJ (Liberté de consentement et droit d\'être entendu)'
      });
    }

    if (text.includes('attachement') || text.includes('lien compromis') || text.includes('lien précaire')) {
      clues.push({
        keyword: '« Lien d\'attachement précaire »',
        alert: 'Souvent invoqué artificiellement pour justifier le passage à l\'adoption permanente (Art. 91.1).',
        counterQuestion: '« Quelle expertise clinique psychiatrique ou neuropsychologique indépendante a mesuré cet attachement ? »',
        lawArticle: 'Art. 91.1 LPJ (Délais de stabilité et rigueur d\'expertise)'
      });
    }

    if (text.includes('sans surveillance') || text.includes('négligence') || text.includes('logement')) {
      clues.push({
        keyword: '« Négligence / Surveillance »',
        alert: 'Vérifiez si la DPJ a préalablement proposé des services de répit ou d\'aide matérielle selon l\'art. 2.2 LPJ.',
        counterQuestion: '« Pourquoi des services à domicile n\'ont-ils pas été déployés avant d\'envisager un retrait ? »',
        lawArticle: 'Art. 2.2 LPJ (Primauté du milieu familial)'
      });
    }

    setDetectedClues(clues);
  };

  // Generate Consolidated Defense Strategy Text
  const generateDefenseStrategyText = () => {
    const selected = PARENT_FILE_VULNERABILITIES.filter((v) =>
      checkedVulnerabilities.includes(v.id)
    );
    if (selected.length === 0) return 'Veuillez cocher au moins une faille dans la liste pour générer votre feuille de route.';

    let output = `=== STRATÉGIE DE DÉFENSE & CONTRE-ATTAQUE JURIDIQUE PARENTALE (LPJ) ===\n`;
    output += `Date d'analyse : ${new Date().toLocaleDateString('fr-CA')}\n`;
    output += `Failles critiques identifiées dans le dossier : ${selected.length}\n\n`;

    selected.forEach((v, idx) => {
      output += `[FAILLE #${idx + 1}] : ${v.title} (${v.code})\n`;
      output += `• Article de loi transgressé : ${v.lawArticle}\n`;
      output += `• Action recommandée : ${v.recommendedLegalAction}\n`;
      output += `• Requête type à déposer : ${v.counterPetitionType}\n`;
      output += `• Questions pour le contre-interrogatoire de l'intervenant :\n`;
      v.crossExaminationQuestions.forEach((q) => {
        output += `    - ${q}\n`;
      });
      output += `\n`;
    });

    output += `=== INSTRUCTIONS POUR VOTRE AVOCAT ===\n`;
    output += `1. Demander immédiatement la communication intégrale des notes d'évolution non caviardées (Art. 76.1 LPJ).\n`;
    output += `2. Déposer les requêtes en exclusion de preuve par ouï-dire avant l'audition sur le fond.\n`;
    output += `3. Convoquer en assignation de témoins les proches et grands-parents écartés (Art. 2.4 LPJ).\n`;

    return output;
  };

  // Build Formal Legal Petition Templates
  const getGeneratedPetitionText = () => {
    switch (selectedPetitionType) {
      case 'art95':
        return `CANADA\nPROVINCE DE QUÉBEC\nDISTRICT DE ${district.toUpperCase()}\nCHAMBRE DE LA JEUNESSE (COUR DU QUÉBEC)\n\nDOSSIER N° : ${dossierNumber}\n\nDANS L'AFFAIRE DE : ${childName.toUpperCase()} (Enfant mineur)\n\nET : ${parentName.toUpperCase()} (Parent Demandeur)\nCONTRE : LE DIRECTEUR DE LA PROTECTION DE LA JEUNESSE DU CIUSSS\n\n=== REQUÊTE EN RÉVISION D'ORDONNANCE ET RÉTRACTATION (ART. 95 LPJ) ===\n\nAU SOUTIEN DE SA REQUÊTE, LE PARENT DEMANDEUR EXPOSE CE QUI SUIT :\n\n1. En date du [Date de l'ordonnance antérieure], le Tribunal a rendu une ordonnance plaçant l'enfant sous le contrôle de la DPJ ;\n2. Depuis ce jugement, des faits nouveaux déterminants sont survenus, et des irrégularités factuelles majeures ont été constatées dans l'évaluation de la DPJ, à savoir :\n   ${customFailures}\n3. En application expresse de l'article 53 et de l'article 95 de la Loi sur la protection de la jeunesse (LPJ), le Tribunal a le devoir de réviser toute ordonnance dès lors que la situation factuelle réelle le commande ;\n4. Le maintien du milieu familial naturel constitue la priorité légale fondamentale prescrite à l'art. 2.2 LPJ ;\n5. La présente requête est bien fondée en fait et en droit.\n\nPOUR CES MOTIFS, PLAISE AU TRIBUNAL DE :\n- ACCUEILLIR la présente requête en révision ;\n- RÉVOQUER ou MODIFIER l'ordonnance de garde rendue antérieurement ;\n- ORDONNER le retour progressif ou immédiat de l'enfant auprès de son parent avec soutien à domicile ;\n- LE TOUT avec dépens contre qui de droit.\n\nSigné à ${district}, le ${new Date().toLocaleDateString('fr-CA')}\n_______________________________\n${parentName} (Parent Demandeur)`;

      case 'communication':
        return `MISE EN DEMEURE FORMELLE & DEMANDE DE COMMUNICATION DE PREUVE (ART. 76.1 LPJ)\n\nÀ L'ATTENTION DE : Me [Nom de l'avocat de la DPJ] & Direction de la protection de la jeunesse\nDistrict judiciaire de : ${district}\nDossier : ${dossierNumber}\nEnfant concerné : ${childName}\nParent : ${parentName}\n\nMAÎTRE,\n\nPar la présente, nous vous sommons formellement de nous transmettre l'intégralité des pièces suivantes sans caviardage indu :\n\n1. L'entièreté des notes d'évolution et d'évaluation cliniques colligées depuis l'ouverture du dossier ;\n2. L'ensemble des rapports d'experts, bilans médicaux, scolaires ou psychologiques mentionnés dans vos conclusions ;\n3. Les enregistrements audio, transcriptions et procès-verbaux des rencontres d'évaluation.\n\nNous vous rappelons que l'article 76.1 de la LPJ et les enseignements de l'arrêt R. c. Stinchcombe garantissent aux parents le droit à une défense pleine et entière sans procès par embuscade.\n\nÀ défaut de transmission dans un délai de 5 jours ouvrables, nous solliciterons du Tribunal un ajournement d'office aux frais de la DPJ et une ordonnance judiciaire de communication contraignante.\n\nVeuillez agréer nos salutations distinguées.\n\n${parentName}`;

      case 'avocat_enfant':
        return `CHAMBRE DE LA JEUNESSE - DISTRICT DE ${district.toUpperCase()}\nDOSSIER : ${dossierNumber}\n\nREQUÊTE POUR LA DÉSIGNATION D'UN AVOCAT INDÉPENDANT POUR L'ENFANT (ART. 80 LPJ)\n\n1. L'enfant mineur ${childName} est au centre des présentes procédures d'évaluation ;\n2. L'enfant est doté d'un discernement suffisant pour exprimer ses désirs et volontés propres ;\n3. Les positions défendues par la DPJ ne reflètent pas les souhaits exprimés de l'enfant ;\n4. En vertu de l'article 80 de la LPJ, il est impératif que l'enfant soit représenté par un avocat indépendant, Distinct de la DPJ et des parents, financé par l'aide juridique de l'État.\n\nPOUR CES MOTIFS, PLAISE AU TRIBUNAL DE :\n- DÉSIGNER d'office un procureur indépendant pour représenter les droits et intérêts propres de l'enfant ${childName}.`;

      case 'famille_elargie':
        return `REQUÊTE EN INTERVENTION VOLONTAIRE DE LA FAMILLE ÉLARGIE (ART. 2.4 & 73 LPJ)\n\nDISTRICT DE ${district.toUpperCase()} - DOSSIER : ${dossierNumber}\n\nREQUÉRANTS : [Noms des grands-parents ou proches]\nENFANT : ${childName}\n\n1. Les requérants sont les grands-parents / proches significatifs de l'enfant mineur ;\n2. Ils ont toujours maintenu un lien affectif étroit et sécurisant avec l'enfant ;\n3. En vertu de l'art. 2.4 de la LPJ, la loi commande formellement de confier prioritairement l'enfant à sa famille élargie ;\n4. La DPJ a omis d'évaluer convenablement la candidature des requérants ;\n5. Les requérants disposent d'un milieu de vie stable, sain et sécuritaire.\n\nPOUR CES MOTIFS, PLAISE AU TRIBUNAL D'ORDONNER que l'enfant ${childName} leur soit confié prioritairement.`;

      case 'cdpdj':
        return `COMMISSION DES DROITS DE LA PERSONNE ET DES DROITS DE LA JEUNESSE (CDPDJ)\nPLAINTE OFFICIELLE POUR LÉSION DE DROITS FONDAMENTAUX (ART. 23 & 48 CHARTE)\n\nPLAIGNANT : ${parentName}\nENFANT VICTIME : ${childName}\nORGANISME MIS EN CAUSE : DPJ / CIUSSS de ${district}\n\nFAITS DÉNONCÉS :\nPar la présente, nous dénonçons formellement les violations structurelles suivantes commises à l'endroit de l'enfant mineur et de ses parents :\n- ${customFailures}\n- Violation de l'article 2.2 LPJ (refus de fournir les services d'aide préalables au milieu familial) ;\n- Falsification ou inclusion de faits non vérifiés dans les rapports d'évaluation (Art. 53 LPJ) ;\n- Entrave délibérée aux droits de visite et de contact garantis par l'art. 8 LPJ.\n\nNous requérons l'ouverture d'une enquête systémique d'office conformément aux pouvoirs de la CDPDJ.`;

      default:
        return '';
    }
  };

  // Filtered Codex Articles
  const filteredCodexArticles = LPJ_CODEX_DATA.filter((art) => {
    const matchesCat =
      selectedCodexCategory === 'all' || art.category === selectedCodexCategory;
    const q = codexSearch.toLowerCase().trim();
    const matchesSearch =
      q === '' ||
      art.articleNumber.toLowerCase().includes(q) ||
      art.title.toLowerCase().includes(q) ||
      art.fullLegalText.toLowerCase().includes(q) ||
      art.plainLanguageExplanation.toLowerCase().includes(q) ||
      art.defenseStrategy.toLowerCase().includes(q);

    return matchesCat && matchesSearch;
  });

  return (
    <div id="dpj-case-file-audit-tool" className="space-y-8">
      {/* Top Banner */}
      <div className="rounded-3xl border-2 border-emerald-600/40 bg-linear-to-br from-stone-950 via-stone-900 to-emerald-950/40 p-6 sm:p-8 text-stone-100 shadow-xl relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-emerald-600/10 blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-amber-600/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 text-xs font-bold font-mono uppercase tracking-wider">
              <Scale className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span>Défense Citoyenne • Codex LPJ & Détecteur de Failles</span>
            </div>

            <button
              type="button"
              onClick={() =>
                onOpenChatWithQuery?.(
                  "Je suis un parent faisant face à la DPJ. Explique-moi comment identifier les failles légales dans le rapport d'évaluation (Art. 53), comment invoquer l'art. 2.2 et l'art. 2.4 sur la famille élargie, et quelles questions poser à l'intervenant lors du contre-interrogatoire à la Chambre de la jeunesse."
                )
              }
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-black text-xs transition-colors cursor-pointer shadow-sm"
            >
              <Bot className="w-3.5 h-3.5 text-stone-950" />
              <span>Conseiller IA : Stratégie d'Audience</span>
            </button>
          </div>

          <div className="space-y-2 max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-black font-serif tracking-tight text-white leading-tight">
              Outil d'Étude du Dossier & <span className="text-emerald-400 underline decoration-emerald-500/50 underline-offset-4">Grand Codex des Lois de la LPJ</span>
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Armez-vous des articles de la Loi sur la protection de la jeunesse pour déceler les irrégularités procédurales, les faits falsifiés, les dépassements de délais et faire valoir la primauté de votre milieu familial devant le juge.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-stone-800">
            <button
              type="button"
              onClick={() => setActiveTab('detecteur_failles')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'detecteur_failles'
                  ? 'bg-emerald-500 text-stone-950 shadow-md font-black'
                  : 'bg-stone-800/80 hover:bg-stone-700 text-stone-300'
              }`}
            >
              <ShieldAlert className="w-4 h-4" />
              <span>1. Détecteur de Failles du Dossier</span>
              {checkedVulnerabilities.length > 0 && (
                <span className="w-5 h-5 rounded-full bg-stone-950 text-emerald-400 text-[10px] font-bold flex items-center justify-center">
                  {checkedVulnerabilities.length}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('analyseur_texte')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'analyseur_texte'
                  ? 'bg-emerald-500 text-stone-950 shadow-md font-black'
                  : 'bg-stone-800/80 hover:bg-stone-700 text-stone-300'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>2. Testeur de Rapport DPJ (Mots Pièges)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('generateur_requetes')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'generateur_requetes'
                  ? 'bg-emerald-500 text-stone-950 shadow-md font-black'
                  : 'bg-stone-800/80 hover:bg-stone-700 text-stone-300'
              }`}
            >
              <Gavel className="w-4 h-4" />
              <span>3. Générateur de Requêtes & Mises en Demeure</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('codex_lois')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'codex_lois'
                  ? 'bg-emerald-500 text-stone-950 shadow-md font-black'
                  : 'bg-stone-800/80 hover:bg-stone-700 text-stone-300'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>4. Grand Codex des Lois LPJ</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('jurisprudence_defense')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'jurisprudence_defense'
                  ? 'bg-emerald-500 text-stone-950 shadow-md font-black'
                  : 'bg-stone-800/80 hover:bg-stone-700 text-stone-300'
              }`}
            >
              <Scale className="w-4 h-4" />
              <span>5. Jurisprudences & Précédents Gagneurs</span>
              <span className="px-1.5 py-0.2 rounded-full bg-stone-950 text-emerald-400 text-[10px] font-mono font-bold">
                {DPJ_JURISPRUDENCE_DATABASE.length}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* TAB 1 : DÉTECTEUR DE FAILLES INTERACTIF */}
      {activeTab === 'detecteur_failles' && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 sm:p-7 space-y-6 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-5">
              <div>
                <h3 className="text-lg font-bold font-serif text-stone-900 dark:text-stone-100 flex items-center gap-2">
                  <span>Grille d'Audit Forensique des Failles Fréquentes</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300 font-bold border border-rose-200 dark:border-rose-900">
                    Basé sur les arrêts de cour & CDPDJ
                  </span>
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                  Cochez les situations qui s'appliquent à votre dossier. L'outil formulera automatiquement la stratégie de contestation et les questions de contre-interrogatoire.
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={async () => {
                    const text = generateDefenseStrategyText();
                    const success = await safeCopyToClipboard(text);
                    if (success) {
                      setCopiedStrategy(true);
                      setTimeout(() => setCopiedStrategy(false), 2500);
                    }
                  }}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors cursor-pointer shadow-xs"
                >
                  {copiedStrategy ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Feuille de route copiée !</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copier la stratégie consolidée</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Checklist items */}
            <div className="space-y-4">
              {PARENT_FILE_VULNERABILITIES.map((vuln) => {
                const isChecked = checkedVulnerabilities.includes(vuln.id);
                return (
                  <div
                    key={vuln.id}
                    className={`rounded-2xl border transition-all p-5 space-y-4 ${
                      isChecked
                        ? 'border-emerald-500 bg-emerald-50/20 dark:bg-emerald-950/20 ring-1 ring-emerald-500/40'
                        : 'border-stone-200 dark:border-stone-800 bg-stone-50/60 dark:bg-stone-850/50'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <button
                          type="button"
                          onClick={() => toggleVulnerability(vuln.id)}
                          className={`w-6 h-6 rounded-lg flex items-center justify-center transition-colors shrink-0 mt-0.5 cursor-pointer ${
                            isChecked
                              ? 'bg-emerald-600 text-white'
                              : 'border-2 border-stone-300 dark:border-stone-600 hover:border-emerald-500'
                          }`}
                        >
                          {isChecked && <Check className="w-4 h-4 stroke-[3]" />}
                        </button>

                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-md bg-stone-200 dark:bg-stone-800 text-stone-800 dark:text-stone-200">
                              {vuln.code}
                            </span>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                              vuln.severity === 'Critique'
                                ? 'bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-500/30'
                                : 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/30'
                            }`}>
                              Gravité : {vuln.severity}
                            </span>
                            <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-semibold">
                              {vuln.lawArticle}
                            </span>
                          </div>

                          <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100 mt-1">
                            {vuln.title}
                          </h4>

                          <p className="text-xs text-stone-700 dark:text-stone-300 font-medium italic mt-1">
                            « {vuln.diagnosticCheckQuestion} »
                          </p>
                        </div>
                      </div>

                      <span className="text-xs font-semibold px-2 py-1 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 shrink-0">
                        {vuln.category}
                      </span>
                    </div>

                    {/* Clues and Cross-Exam Questions */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-stone-200/60 dark:border-stone-800 text-xs">
                      <div className="space-y-1.5">
                        <span className="font-bold text-stone-900 dark:text-stone-100 flex items-center gap-1.5 font-mono">
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                          <span>Indices de détection dans votre dossier :</span>
                        </span>
                        <ul className="space-y-1 text-stone-600 dark:text-stone-400">
                          {vuln.detectionClues.map((clue, cIdx) => (
                            <li key={cIdx} className="flex items-start gap-1.5">
                              <span className="text-amber-500 font-bold">•</span>
                              <span>{clue}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-1.5">
                        <span className="font-bold text-stone-900 dark:text-stone-100 flex items-center gap-1.5 font-mono">
                          <Gavel className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Questions chocs pour l'intervenant à la cour :</span>
                        </span>
                        <ul className="space-y-1 text-stone-600 dark:text-stone-400">
                          {vuln.crossExaminationQuestions.map((q, qIdx) => (
                            <li key={qIdx} className="flex items-start gap-1.5">
                              <span className="text-emerald-500 font-bold">→</span>
                              <span className="italic">{q}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Jurisprudence Applicable à cette Faille */}
                    {(() => {
                      const linkedJuris = getJurisprudencesForVulnerability(vuln.id);
                      if (linkedJuris.length === 0) return null;
                      return (
                        <div className="p-3.5 rounded-xl bg-emerald-50/40 dark:bg-emerald-950/20 border border-emerald-500/30 space-y-2 text-xs">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider">
                              <Scale className="w-3.5 h-3.5 text-emerald-600" />
                              <span>Jurisprudence Applicable ({linkedJuris.length})</span>
                            </span>
                            <span className="text-[10px] text-stone-500 font-mono">
                              Précédent judiciaire opposable
                            </span>
                          </div>
                          {linkedJuris.map((j) => (
                            <div key={j.id} className="space-y-1 pt-1.5 border-t border-emerald-500/20 first:border-t-0 first:pt-0">
                              <div className="flex flex-wrap items-center justify-between gap-1">
                                <span className="font-bold font-serif text-stone-900 dark:text-stone-100">
                                  {j.title}
                                </span>
                                <span className="font-mono text-[10px] text-emerald-700 dark:text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded">
                                  {j.citation} ({j.court})
                                </span>
                              </div>
                              <p className="text-stone-700 dark:text-stone-300 italic text-[11px] leading-relaxed border-l-2 border-emerald-500/60 pl-2">
                                « {j.keyJudgeQuote} »
                              </p>
                              <div className="flex items-center justify-end gap-2 pt-0.5">
                                <button
                                  type="button"
                                  onClick={async () => {
                                    const success = await safeCopyToClipboard(`${j.title} (${j.citation}) : ${j.keyJudgeQuote}`);
                                    if (success) {
                                      setCopiedJurisId(j.id);
                                      setTimeout(() => setCopiedJurisId(null), 2000);
                                    }
                                  }}
                                  className="text-[10px] font-bold text-stone-600 dark:text-stone-300 hover:text-emerald-600 flex items-center gap-1 cursor-pointer"
                                >
                                  {copiedJurisId === j.id ? (
                                    <>
                                      <Check className="w-3 h-3 text-emerald-500" />
                                      <span className="text-emerald-500">Copié</span>
                                    </>
                                  ) : (
                                    <>
                                      <Copy className="w-3 h-3" />
                                      <span>Copier citation juge</span>
                                    </>
                                  )}
                                </button>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setSelectedJurisprudenceInAudit(j);
                                    setActiveTab('jurisprudence_defense');
                                  }}
                                  className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-0.5 cursor-pointer"
                                >
                                  <span>Détails & plaidoirie</span>
                                  <ArrowRight className="w-3 h-3" />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      );
                    })()}

                    {/* Action and Petition Link */}
                    <div className="p-3 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                      <span className="text-stone-700 dark:text-stone-300">
                        <strong>Action recommandée :</strong> {vuln.recommendedLegalAction}
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          setActiveTab('generateur_requetes');
                          setCustomFailures(vuln.title + ' (Violation de ' + vuln.lawArticle + ')');
                        }}
                        className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold hover:underline shrink-0 cursor-pointer"
                      >
                        <span>Préparer la requête</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2 : ANALYSEUR DE TEXTE & DÉTECTEUR DE MOTS PIÈGES */}
      {activeTab === 'analyseur_texte' && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 sm:p-7 space-y-6 shadow-sm">
            <div>
              <h3 className="text-lg font-bold font-serif text-stone-900 dark:text-stone-100 flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-600" />
                <span>Testeur Textuel de Rapport DPJ (Détecteur d'Insinuations & Mots Pièges)</span>
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                Collez un paragraphe d'un rapport d'évaluation, d'une note d'évolution ou d'un courriel de votre intervenante pour en extraire les expressions attaquables devant le juge.
              </p>
            </div>

            <div className="space-y-3">
              <textarea
                rows={5}
                value={inputTextToAudit}
                onChange={(e) => setInputTextToAudit(e.target.value)}
                placeholder="Collez ici l'extrait du rapport de la DPJ à soumettre à l'analyse..."
                className="w-full p-4 rounded-2xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-xs text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 leading-relaxed font-mono"
              />

              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-[11px] text-stone-500">
                  Astuce : L'outil détecte les expressions subjectives (« semble », « ouï-dire », « refus de collaborer », etc.).
                </span>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleAnalyzeText}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors cursor-pointer shadow-xs"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Lancer la détection des failles</span>
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      onOpenChatWithQuery?.(
                        `Analyse de façon critique et juridique cet extrait de rapport de la DPJ :\n\n"${inputTextToAudit}"\n\nQuels sont les vices probatoires, les biais d'évaluation et les questions de contre-interrogatoire pour démolir ces allégations devant le juge de la Chambre de la jeunesse ?`
                      )
                    }
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    <Bot className="w-4 h-4" />
                    <span>Audit IA Approfondi</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Results of Analysis */}
            {detectedClues.length > 0 && (
              <div className="space-y-4 pt-4 border-t border-stone-200 dark:border-stone-800">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 font-mono flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4" />
                    <span>{detectedClues.length} Insinuations ou Termes Problématiques Détectés :</span>
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {detectedClues.map((clue, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-rose-50/30 dark:bg-rose-950/20 border border-rose-500/20 space-y-2.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-rose-800 dark:text-rose-300 font-mono">
                          {clue.keyword}
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-700 dark:text-rose-300">
                          {clue.lawArticle}
                        </span>
                      </div>

                      <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                        <strong>Danger légal :</strong> {clue.alert}
                      </p>

                      <div className="p-2.5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-xs">
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold block mb-1">
                          Question de riposte au tribunal :
                        </span>
                        <span className="italic text-stone-600 dark:text-stone-300">
                          {clue.counterQuestion}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 3 : GÉNÉRATEUR DE REQUÊTES & MISES EN DEMEURE */}
      {activeTab === 'generateur_requetes' && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 sm:p-7 space-y-6 shadow-sm">
            <div>
              <h3 className="text-lg font-bold font-serif text-stone-900 dark:text-stone-100 flex items-center gap-2">
                <Gavel className="w-5 h-5 text-emerald-600" />
                <span>Générateur de Requêtes Formelles & Mises en Demeure (Chambre de la Jeunesse)</span>
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                Remplissez les paramètres de votre dossier pour obtenir un document juridique prêt à déposer au greffe ou à soumettre à votre avocat.
              </p>
            </div>

            {/* Selector of Petition Type */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              <button
                type="button"
                onClick={() => setSelectedPetitionType('art95')}
                className={`p-3 rounded-xl text-xs font-bold transition-all text-center cursor-pointer ${
                  selectedPetitionType === 'art95'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400'
                }`}
              >
                Révision Art. 95 LPJ
              </button>

              <button
                type="button"
                onClick={() => setSelectedPetitionType('communication')}
                className={`p-3 rounded-xl text-xs font-bold transition-all text-center cursor-pointer ${
                  selectedPetitionType === 'communication'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400'
                }`}
              >
                Communication Preuve
              </button>

              <button
                type="button"
                onClick={() => setSelectedPetitionType('avocat_enfant')}
                className={`p-3 rounded-xl text-xs font-bold transition-all text-center cursor-pointer ${
                  selectedPetitionType === 'avocat_enfant'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400'
                }`}
              >
                Avocat Enfant (Art. 80)
              </button>

              <button
                type="button"
                onClick={() => setSelectedPetitionType('famille_elargie')}
                className={`p-3 rounded-xl text-xs font-bold transition-all text-center cursor-pointer ${
                  selectedPetitionType === 'famille_elargie'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400'
                }`}
              >
                Famille Élargie (Art. 2.4)
              </button>

              <button
                type="button"
                onClick={() => setSelectedPetitionType('cdpdj')}
                className={`p-3 rounded-xl text-xs font-bold transition-all text-center cursor-pointer ${
                  selectedPetitionType === 'cdpdj'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400'
                }`}
              >
                Plainte CDPDJ (Lésion)
              </button>
            </div>

            {/* Input Variables Form */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 p-4 rounded-2xl bg-stone-50 dark:bg-stone-850 border border-stone-200 dark:border-stone-800 text-xs">
              <div className="space-y-1">
                <label className="font-bold text-stone-700 dark:text-stone-300">Votre Nom (Parent)</label>
                <input
                  type="text"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  className="w-full p-2 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-stone-700 dark:text-stone-300">Prénom de l'Enfant</label>
                <input
                  type="text"
                  value={childName}
                  onChange={(e) => setChildName(e.target.value)}
                  className="w-full p-2 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-stone-700 dark:text-stone-300">District Judiciaire</label>
                <input
                  type="text"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="w-full p-2 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-stone-700 dark:text-stone-300">Numéro de Greffe (Dossier)</label>
                <input
                  type="text"
                  value={dossierNumber}
                  onChange={(e) => setDossierNumber(e.target.value)}
                  className="w-full p-2 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900"
                />
              </div>
            </div>

            {/* Generated Document Preview */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                  Aperçu du Document Juridique :
                </span>

                <button
                  type="button"
                  onClick={async () => {
                    const success = await safeCopyToClipboard(getGeneratedPetitionText());
                    if (success) {
                      setCopiedPetition(true);
                      setTimeout(() => setCopiedPetition(false), 2500);
                    }
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors cursor-pointer"
                >
                  {copiedPetition ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copié dans le presse-papier !</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copier le texte intégral</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="p-5 rounded-2xl bg-stone-900 text-emerald-300 font-mono text-xs whitespace-pre-wrap leading-relaxed max-h-[420px] overflow-y-auto border border-stone-800">
                {getGeneratedPetitionText()}
              </pre>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4 : GRAND CODEX DES LOIS LPJ */}
      {activeTab === 'codex_lois' && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 sm:p-7 space-y-6 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-5">
              <div>
                <h3 className="text-lg font-bold font-serif text-stone-900 dark:text-stone-100 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-emerald-600" />
                  <span>Grand Codex Commenté de la Loi sur la Protection de la Jeunesse (RLRQ c. P-34.1)</span>
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                  Tous les articles clés de la LPJ décryptés : texte officiel, explications simples, pièges d'intervention et stratégies de riposte.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Rechercher un article (Art. 2.2, 38, 95...)"
                    value={codexSearch}
                    onChange={(e) => setCodexSearch(e.target.value)}
                    className="pl-8 pr-3 py-1.5 rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-xs text-stone-900 dark:text-stone-100 focus:outline-none w-56 sm:w-64"
                  />
                </div>

                <select
                  value={selectedCodexCategory}
                  onChange={(e) => setSelectedCodexCategory(e.target.value)}
                  className="px-3 py-1.5 rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-xs text-stone-900 dark:text-stone-100 focus:outline-none cursor-pointer"
                >
                  <option value="all">Toutes les sections LPJ</option>
                  <option value="Droits Fondamentaux & Principes">Droits & Principes (2.2, 2.4, 3, 8)</option>
                  <option value="Motifs de Compromission (Art. 38)">Motifs de Compromission (38, 38.1)</option>
                  <option value="Signalement & Urgence (48h)">Signalement & Urgence 48h (44, 47)</option>
                  <option value="Évaluation & Mesures Volontaires">Évaluation & Volontaire (53, 54)</option>
                  <option value="Tribunal & Procédures Légales">Tribunal & Preuve (76.1, 80)</option>
                  <option value="Ordonnances & Délais Maximaux (91.1)">Délais Maximaux de Placement (91.1)</option>
                  <option value="Révision & Rétractation (Art. 95)">Révision d'Ordonnance (95)</option>
                  <option value="Recours, Plaintes & Lésions">Plaintes & Lésions de Droits (132)</option>
                </select>
              </div>
            </div>

            {/* Master-Detail Layout for Codex */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Column: Article Pills */}
              <div className="lg:col-span-5 space-y-2.5 max-h-[620px] overflow-y-auto pr-1">
                {filteredCodexArticles.map((art) => {
                  const isSelected = selectedArticle?.id === art.id;
                  return (
                    <button
                      key={art.id}
                      type="button"
                      onClick={() => setSelectedArticle(art)}
                      className={`w-full text-left p-3.5 rounded-2xl border transition-all cursor-pointer space-y-1.5 ${
                        isSelected
                          ? 'border-emerald-600 bg-emerald-500/10 dark:bg-emerald-950/30 shadow-xs ring-1 ring-emerald-500/50'
                          : 'border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 hover:bg-stone-50 dark:hover:bg-stone-850'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-stone-100 dark:bg-stone-800 text-emerald-700 dark:text-emerald-400">
                          {art.articleNumber}
                        </span>
                        <span className="text-[10px] text-stone-400 font-mono">
                          {art.category}
                        </span>
                      </div>

                      <h4 className="text-xs font-bold text-stone-900 dark:text-stone-100">
                        {art.title}
                      </h4>

                      <p className="text-[11px] text-stone-500 line-clamp-2">
                        {art.plainLanguageExplanation}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Right Column: Detailed Article Dossier */}
              <div className="lg:col-span-7">
                {selectedArticle ? (
                  <div className="p-6 rounded-3xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 space-y-5">
                    <div className="space-y-2 border-b border-stone-200 dark:border-stone-800 pb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-mono font-bold px-2.5 py-1 rounded-lg bg-emerald-600 text-white">
                          {selectedArticle.articleNumber}
                        </span>

                        <button
                          type="button"
                          onClick={async () => {
                            const success = await safeCopyToClipboard(
                              `[LPJ CODEX] ${selectedArticle.articleNumber} : ${selectedArticle.title}\nTexte : ${selectedArticle.fullLegalText}\nExplication : ${selectedArticle.plainLanguageExplanation}\nStratégie de défense : ${selectedArticle.defenseStrategy}`
                            );
                            if (success) {
                              setCopiedArticleId(selectedArticle.id);
                              setTimeout(() => setCopiedArticleId(null), 2500);
                            }
                          }}
                          className="inline-flex items-center gap-1 text-xs text-stone-500 hover:text-emerald-600 cursor-pointer font-mono"
                        >
                          {copiedArticleId === selectedArticle.id ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-500" />
                              <span>Copié</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copier l'article</span>
                            </>
                          )}
                        </button>
                      </div>

                      <h3 className="text-base font-bold font-serif text-stone-900 dark:text-stone-100">
                        {selectedArticle.title}
                      </h3>
                      <p className="text-xs text-stone-500">
                        Section : {selectedArticle.sectionTitle}
                      </p>
                    </div>

                    {/* Official Legal Text */}
                    <div className="p-4 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-1.5">
                      <span className="text-xs font-mono font-bold text-stone-500 uppercase tracking-wider">
                        Texte de Loi Officiel :
                      </span>
                      <p className="text-xs text-stone-900 dark:text-stone-100 italic leading-relaxed font-serif">
                        « {selectedArticle.fullLegalText} »
                      </p>
                    </div>

                    {/* Plain Language Explanation */}
                    <div className="p-4 rounded-2xl bg-emerald-50/30 dark:bg-emerald-950/20 border border-emerald-500/20 space-y-1.5">
                      <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                        Explication Claire pour les Parents :
                      </span>
                      <p className="text-xs text-stone-800 dark:text-stone-200 leading-relaxed font-medium">
                        {selectedArticle.plainLanguageExplanation}
                      </p>
                    </div>

                    {/* Common Violations */}
                    <div className="space-y-1.5">
                      <span className="text-xs font-mono font-bold text-rose-700 dark:text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        <span>Violations courantes constatées par la DPJ :</span>
                      </span>
                      <ul className="space-y-1 text-xs text-stone-600 dark:text-stone-300">
                        {selectedArticle.commonDpjViolations.map((violation, vIdx) => (
                          <li key={vIdx} className="flex items-start gap-1.5">
                            <span className="text-rose-500 font-bold">•</span>
                            <span>{violation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Defense Strategy & Jurisprudence */}
                    <div className="p-4 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-2 text-xs">
                      <div>
                        <strong className="text-emerald-700 dark:text-emerald-400 block font-mono uppercase tracking-wider">
                          Comment utiliser cet article pour votre défense :
                        </strong>
                        <p className="text-stone-700 dark:text-stone-300 mt-0.5 leading-relaxed">
                          {selectedArticle.defenseStrategy}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-stone-100 dark:border-stone-800 text-[11px] text-stone-500 dark:text-stone-400">
                        <strong>Principe jurisprudentiel :</strong> {selectedArticle.jurisprudenceKey}
                      </div>

                      {/* Detailed Jurisprudences matching this Article */}
                      {(() => {
                        const linkedDecisions = getJurisprudencesForArticle(selectedArticle.articleNumber);
                        if (linkedDecisions.length === 0) return null;
                        return (
                          <div className="pt-2 border-t border-stone-100 dark:border-stone-800 space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider">
                                <Scale className="w-3.5 h-3.5 text-emerald-600" />
                                <span>Arrêts de principe sur l'{selectedArticle.articleNumber} ({linkedDecisions.length})</span>
                              </span>
                              <button
                                type="button"
                                onClick={() => setActiveTab('jurisprudence_defense')}
                                className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline cursor-pointer text-[11px] font-mono"
                              >
                                Explorer dans l'onglet Jurisprudence →
                              </button>
                            </div>
                            <div className="space-y-1.5">
                              {linkedDecisions.map((jd) => (
                                <div
                                  key={jd.id}
                                  className="p-2.5 rounded-xl bg-emerald-50/40 dark:bg-emerald-950/20 border border-emerald-500/20 space-y-1 text-xs"
                                >
                                  <div className="flex items-center justify-between gap-1">
                                    <span className="font-bold font-serif text-stone-900 dark:text-stone-100">
                                      {jd.title} ({jd.citation})
                                    </span>
                                    <span className="text-[10px] font-mono text-stone-500">
                                      {jd.court}
                                    </span>
                                  </div>
                                  <p className="italic text-stone-700 dark:text-stone-300 text-[11px]">
                                    « {jd.keyJudgeQuote} »
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  </div>
                ) : (
                  <div className="p-12 text-center text-xs text-stone-400 border border-dashed border-stone-300 dark:border-stone-800 rounded-3xl">
                    Sélectionnez un article dans la liste pour en afficher l'analyse juridique.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5 : GRAND RÉPERTOIRE JURISPRUDENCES & PRÉCÉDENTS POUR LA DÉFENSE DES PARENTS */}
      {activeTab === 'jurisprudence_defense' && (
        <div className="space-y-6">
          {/* Header Banner */}
          <div className="p-6 rounded-3xl border border-emerald-500/40 bg-stone-900 text-stone-100 space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-mono font-bold">
                Arsenal de Contestation • Jugements Historiques CanLII / SOQUIJ
              </span>
              <span className="text-xs text-stone-400">
                {DPJ_JURISPRUDENCE_DATABASE.length} arrêts contraignants opposables à la DPJ
              </span>
            </div>

            <h3 className="text-xl font-bold font-serif text-white">
              Jurisprudences Qui Ont Condamné la DPJ et Protégé les Droits des Familles
            </h3>

            <p className="text-xs sm:text-sm text-stone-300 max-w-4xl leading-relaxed">
              Consultez les décisions de la Cour suprême du Canada, de la Cour d'appel du Québec et de la Chambre de la jeunesse. Chaque fiche contient la citation exacte, la portée contre la DPJ, le texte du juge à citer en audience et un extrait de conclusions prêt à coller dans vos actes judiciaires.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={jurisprudenceSearchQuery}
              onChange={(e) => setJurisprudenceSearchQuery(e.target.value)}
              placeholder="Rechercher par mot-clé (ex: ouï-dire, avocat payé, Stinchcombe, 48h, grands-parents, aliénation)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 placeholder-stone-400 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
            />
          </div>

          {/* Master-Detail Explorer */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left list */}
            <div className="lg:col-span-5 space-y-2.5 max-h-[720px] overflow-y-auto pr-1">
              {DPJ_JURISPRUDENCE_DATABASE.filter((item) => {
                const q = jurisprudenceSearchQuery.toLowerCase().trim();
                if (!q) return true;
                return (
                  item.title.toLowerCase().includes(q) ||
                  item.citation.toLowerCase().includes(q) ||
                  item.summary.toLowerCase().includes(q) ||
                  item.category.toLowerCase().includes(q) ||
                  item.howToPlead.toLowerCase().includes(q) ||
                  item.applicableLpjArticles.some((art) => art.toLowerCase().includes(q))
                );
              }).map((item) => {
                const isSelected = selectedJurisprudenceInAudit.id === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedJurisprudenceInAudit(item)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-2 ${
                      isSelected
                        ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-500/60 ring-2 ring-emerald-500/30 shadow-xs'
                        : 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 hover:border-stone-300'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300">
                        {item.court}
                      </span>
                      <span className="text-[10px] font-mono text-stone-400">
                        {item.decisionYear}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold font-serif text-stone-900 dark:text-stone-100">
                        {item.title}
                      </h4>
                      <div className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-semibold mt-0.5">
                        {item.citation}
                      </div>
                      <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 line-clamp-2">
                        {item.category}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 flex-wrap pt-1 border-t border-stone-100 dark:border-stone-800 text-[10px] font-mono">
                      {item.applicableLpjArticles.slice(0, 2).map((art, aIdx) => (
                        <span key={aIdx} className="px-1.5 py-0.5 rounded bg-stone-100 dark:bg-stone-800">
                          {art}
                        </span>
                      ))}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right detailed sheet */}
            <div className="lg:col-span-7">
              <div className="sticky top-6 rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 sm:p-7 shadow-sm space-y-5">
                {/* Header */}
                <div className="space-y-2 pb-4 border-b border-stone-200 dark:border-stone-800">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-lg bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 text-xs font-mono font-bold">
                      {selectedJurisprudenceInAudit.citation}
                    </span>
                    <button
                      type="button"
                      onClick={async () => {
                        const success = await safeCopyToClipboard(
                          `${selectedJurisprudenceInAudit.title} (${selectedJurisprudenceInAudit.citation})`
                        );
                        if (success) {
                          setCopiedJurisId('header');
                          setTimeout(() => setCopiedJurisId(null), 2000);
                        }
                      }}
                      className="inline-flex items-center gap-1 text-xs font-bold text-stone-600 dark:text-stone-300 hover:text-emerald-600 cursor-pointer"
                    >
                      {copiedJurisId === 'header' ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                          <span className="text-emerald-500">Copié</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copier la référence</span>
                        </>
                      )}
                    </button>
                  </div>

                  <h3 className="text-xl font-bold font-serif text-stone-900 dark:text-stone-100">
                    {selectedJurisprudenceInAudit.title}
                  </h3>
                  <div className="text-xs text-stone-500">
                    {selectedJurisprudenceInAudit.court} ({selectedJurisprudenceInAudit.decisionYear}) • SOQUIJ / CanLII : {selectedJurisprudenceInAudit.soquijOrCanliiRef}
                  </div>
                </div>

                {/* Legal impact against DPJ */}
                <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/25 border border-emerald-500/30 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900 dark:text-emerald-300 font-mono uppercase tracking-wider">
                    <Scale className="w-3.5 h-3.5" />
                    <span>Impact Contre la DPJ :</span>
                  </div>
                  <p className="text-xs text-emerald-950 dark:text-emerald-100 font-medium leading-relaxed">
                    {selectedJurisprudenceInAudit.legalImpactAgainstDpj}
                  </p>
                </div>

                {/* Case Summary */}
                <div className="space-y-1.5">
                  <span className="text-xs font-bold font-mono text-stone-500 uppercase tracking-wider">
                    Résumé des faits & Jugement :
                  </span>
                  <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-xs text-stone-800 dark:text-stone-200 leading-relaxed">
                    {selectedJurisprudenceInAudit.summary}
                  </div>
                </div>

                {/* Judge quote */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold font-mono text-stone-500 uppercase tracking-wider flex items-center gap-1.5">
                      <Gavel className="w-3.5 h-3.5 text-amber-500" />
                      <span>Citation textuelle du juge (Ratio Decidendi) :</span>
                    </span>
                    <button
                      type="button"
                      onClick={async () => {
                        const success = await safeCopyToClipboard(
                          `${selectedJurisprudenceInAudit.title} (${selectedJurisprudenceInAudit.citation}) :\n« ${selectedJurisprudenceInAudit.keyJudgeQuote} »`
                        );
                        if (success) {
                          setCopiedJurisId('quote');
                          setTimeout(() => setCopiedJurisId(null), 2000);
                        }
                      }}
                      className="text-[11px] font-bold text-amber-600 dark:text-amber-400 hover:underline cursor-pointer"
                    >
                      {copiedJurisId === 'quote' ? 'Citation copiée !' : 'Copier pour l\'audience'}
                    </button>
                  </div>
                  <div className="p-4 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-500/30 text-xs text-stone-900 dark:text-stone-100 italic border-l-4 border-amber-500 leading-relaxed">
                    « {selectedJurisprudenceInAudit.keyJudgeQuote} »
                  </div>
                </div>

                {/* How to plead */}
                <div className="space-y-1.5">
                  <span className="text-xs font-bold font-mono text-stone-500 uppercase tracking-wider">
                    Comment plaider cet arrêt devant le juge :
                  </span>
                  <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                    {selectedJurisprudenceInAudit.howToPlead}
                  </div>
                </div>

                {/* Pleading extract */}
                <div className="space-y-2 pt-2 border-t border-stone-200 dark:border-stone-800">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-stone-700 dark:text-stone-300 font-mono">
                      Extrait de conclusions à copier dans vos procédures :
                    </span>
                    <button
                      type="button"
                      onClick={async () => {
                        const success = await safeCopyToClipboard(selectedJurisprudenceInAudit.pleadingExtract);
                        if (success) {
                          setCopiedJurisId('pleading');
                          setTimeout(() => setCopiedJurisId(null), 2000);
                        }
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 text-xs font-bold text-stone-800 dark:text-stone-200 cursor-pointer"
                    >
                      {copiedJurisId === 'pleading' ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                          <span className="text-emerald-500">Extrait copié !</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-stone-500" />
                          <span>Copier l'extrait</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="p-4 rounded-2xl bg-stone-900 text-stone-100 text-[11px] font-mono whitespace-pre-wrap leading-relaxed border border-stone-800 max-h-40 overflow-y-auto">
                    {selectedJurisprudenceInAudit.pleadingExtract}
                  </pre>
                </div>

                {/* Ask AI button */}
                <div className="pt-2 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between">
                  <span className="text-[11px] text-stone-500">
                    Articles LPJ : {selectedJurisprudenceInAudit.applicableLpjArticles.join(', ')}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      onOpenChatWithQuery?.(
                        `Comment puis-je utiliser concrètement la jurisprudence "${selectedJurisprudenceInAudit.title}" (${selectedJurisprudenceInAudit.citation}) contre la DPJ dans mon dossier ? Donne-moi les arguments juridiques précis.`
                      )
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    <Bot className="w-3.5 h-3.5" />
                    <span>Stratégie IA pour cet arrêt</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
