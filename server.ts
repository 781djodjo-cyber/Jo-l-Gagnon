import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "5mb" }));

let aiClient: GoogleGenAI | null = null;

function getGenAI(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("La clé d'API GEMINI_API_KEY n'est pas configurée dans l'environnement.");
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

async function generateWithFallback(ai: GoogleGenAI, options: {
  contents: string;
  config: any;
}) {
  const models = ["gemini-3.1-flash-lite", "gemini-3.8-flash"];
  let lastError: any = null;

  for (const model of models) {
    try {
      const response = await ai.models.generateContent({
        model,
        contents: options.contents,
        config: options.config,
      });
      return response;
    } catch (err: any) {
      lastError = err;
      console.warn(`Modèle ${model} indisponible, tentative avec le modèle suivant...`, err?.message);
    }
  }

  throw lastError;
}

// Health check endpoint
app.get("/api/health", (_req, res) => {
  res.json({ 
    status: "ok", 
    service: "Transparence Québec - Vigie de l'Intégrité Publique & Conflits d'Intérêts" 
  });
});

// Endpoint: Investigation on public integrity, conflicts of interest, and assembly records in Quebec
app.post("/api/transparence/investigate", async (req, res) => {
  try {
    const { query, mode = "general" } = req.body;

    if (!query || typeof query !== "string" || query.trim().length === 0) {
      return res.status(400).json({ error: "La requête d'investigation est requise." });
    }

    const ai = getGenAI();

    const systemInstruction = `Tu es l'oracle d'investigation et d'analyse documentaire de "Transparence Québec", une vigie indépendante d'intégrité démocratique et de surveillance citoyenne des fonds publics.
Ta mission est d'examiner avec une rigueur absolue, une neutralité documentaire implacable et une exigence de VÉRITÉ TOTALE les actions de la classe politique, des ministères, des sociétés d'État québécoises (Hydro-Québec, SAAQ, Investissement Québec, etc.), des lobbyistes et des entreprises bénéficiaires de fonds publics.

RÈGLES D'INVESTIGATION ET D'INTÉGRITÉ :
1. RIGUEUR FACTUELLE ABSOLUE :
   - Établis les faits vérifiables sans complaisance ni diffamation. Distingue explicitement ce qui est PROUVÉ et JUGÉ (condamnations judiciaires, rapports du Vérificateur général du Québec - VGQ, conclusions de la Commission Charbonneau ou Laurent, décisions et blâmes du Commissaire à l'éthique de l'Assemblée nationale, enquêtes UPAC), de ce qui relève d'ENQUÊTES EN COURS, de CONTROVERSES DÉONTOLOGIQUES ou de SIMPLES RUMEURS NON ÉTAYÉES.
   - Si une allégation n'est pas appuyée par des preuves ou des sources fiables, déclare-le clairement (alerte 'SOUPÇON_NON_ÉTAYÉ') pour préserver la vérité.

2. CONFLITS D'INTÉRÊTS ET RÉSEAUX D'INFLUENCE (QUÉBEC) :
   - Cartographie avec précision les relations d'intérêts : portes tournantes entre la fonction publique et le privé, lobbyisme non déclaré au registre Carrefour Lobby Québec, contrats publics accordés de gré à gré sans appel d'offres concurrentiel (SEAO), financement politique sectoriel, nominations partisanes à des postes clés.

3. TRAVAUX DE L'ASSEMBLÉE NATIONALE DU QUÉBEC :
   - Examine les débats au Salon bleu (périodes des questions orales), les commissions parlementaires (ex: Commission de l'administration publique), les projets de loi et les déclarations ministérielles.

4. AVENIR DES ENFANTS ET DES CITOYENS :
   - Explique toujours l'impact concret du gaspillage, des conflits d'intérêts ou du manque de transparence sur l'avenir des enfants québécois (ressources pour les écoles publiques, services de garde éducatifs / CPE, protection de la jeunesse - DPJ, pérennité de la dette publique québécoise).

5. RECOURS LÉGAUX ET CANAUX OFFICIELS :
   - Cite précisément les organes de contrôle officiels québécois applicables (Protecteur du citoyen, UPAC, Commissaire à l'éthique et à la déontologie, Commissaire au lobbyisme, Autorité des marchés publics, VGQ) et les lois applicables (Loi D-11.1, Loi C-23.1, LCOP, etc.).

Tu dois répondre STRICTEMENT en français et retourner un objet JSON valide avec le schéma exact suivant :
{
  "subject": "Titre synthétique et précis du dossier analysé",
  "alertLevel": "INFRACTION_AVÉRÉE" | "ENQUÊTE_OFFICIELLE" | "ZONE_GRISE_DÉONTOLOGIQUE" | "SOUPÇON_NON_ÉTAYÉ" | "CONFORME_DOCUMENTÉ",
  "alertLevelLabel": "Intitulé percutant du statut d'intégrité (ex: Graves Failles Déontologiques Documentées, Infraction Avérée & Condamnation, Allégation Non Étayée)",
  "integrityScore": nombre entier de 0 à 100 (0 = corruption/infraction grave avérée, 100 = parfaite transparence et intégrité documentée),
  "executiveSummary": "Synthèse exécutive claire et directe en 2-4 phrases",
  "coreFinding": "La conclusion d'enquête principale formulée sans détour ni langue de bois",
  "verifiedFacts": ["Fait vérifié 1 avec dates/chiffres", "Fait vérifié 2", "Fait vérifié 3", "Fait vérifié 4"],
  "interestLinks": [
    {
      "actorFrom": "Nom de l'acteur politique, organisme ou ministère",
      "actorTo": "Nom de l'entreprise, lobby ou bénéficiaire",
      "relationship": "Description précise de la nature du lien ou du contrat",
      "riskLevel": "Critique" | "Modéré" | "Faible",
      "legalStatus": "Statut selon les lois québécoises (ex: Encadré par la LCOP, Dossier CED, etc.)"
    }
  ],
  "assemblyNationalEvents": [
    {
      "topic": "Sujet du débat ou de l'intervention parlementaire",
      "context": "ex: Salon bleu - Période des questions orales ou Commission parlementaire",
      "quoteOrSummary": "Résumé des échanges entre le gouvernement et l'opposition",
      "dateOrSession": "Législature ou période (ex: 43e législature)"
    }
  ],
  "officialReportsAndJudgments": ["Rapport VGQ...", "Avis Commissaire à l'éthique...", "Commission Charbonneau..."],
  "journalisticInvestigations": ["Enquête Radio-Canada...", "Dossier La Presse...", "Bureau d'enquête..."],
  "criticalVulnerabilities": ["Faille de transparence 1", "Faille 2"],
  "legalRecourses": [
    {
      "body": "Nom de l'organisme québécois de recours (ex: Protecteur du citoyen, UPAC, etc.)",
      "procedure": "Procédure concrète pour déposer une plainte ou divulguer",
      "applicableLaw": "Titre et référence de la loi québécoise applicable",
      "whistleblowerProtection": "Mesure de protection et d'anonymat pour les citoyens/lanceurs d'alerte"
    }
  ],
  "impactOnCitizensAndChildren": "Analyse rigoureuse de l'impact direct sur les générations futures, l'avenir des enfants, les services de garde, les écoles et les fonds publics du Québec",
  "sourcesGrounding": ["Journal des débats de l'Assemblée nationale", "Rapports officiels VGQ", "Registres des lobbyistes / SEAO", "Presse québécoise d'investigation"]
}`;

    const prompt = `Procède à une investigation d'intégrité publique approfondie et scrupuleuse sur le sujet suivant concernant le Québec :
---
${query.trim()}
---
Mode d'analyse : ${mode}
Assure-toi que chaque affirmation est vérifiable, que les liens d'intérêts sont explicités et que les instances de l'Assemblée nationale du Québec sont dûment mentionnées.`;

    const response = await generateWithFallback(ai, {
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.1, // très basse température pour garantir une fidélité factuelle maximale
        responseMimeType: "application/json",
      },
    });

    const responseText = response.text || "{}";
    let parsedData;
    try {
      parsedData = JSON.parse(responseText);
    } catch {
      const cleanJson = responseText.replace(/```json/gi, "").replace(/```/g, "").trim();
      parsedData = JSON.parse(cleanJson);
    }

    // Assign timestamp and ID if missing
    parsedData.timestamp = Date.now();
    parsedData.id = `inv-${Date.now()}`;

    return res.json({
      success: true,
      data: parsedData,
    });
  } catch (error: any) {
    console.error("Erreur lors de l'investigation Transparence Québec:", error);
    return res.status(500).json({
      error: error?.message || "Une erreur est survenue lors de l'investigation.",
    });
  }
});

// Endpoint: Interactive Investigation Chat with Control Triggers (DPJ pipeline, administrative chaos, etc.)
app.post("/api/transparence/chat", async (req, res) => {
  try {
    const { message, history = [], controlTrigger = "DPJ_PIPELINE" } = req.body;

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return res.status(400).json({ error: "Le message est requis." });
    }

    const ai = getGenAI();

    const triggerDirectives: Record<string, string> = {
      DPJ_PIPELINE: `
TRIGGER ACTIF: [PIPELINE DE LA DPJ & PROTECTION DE LA JEUNESSE]
Priorité absolue :
- Examine le circuit critique de réception, d'évaluation et d'orientation des signalements d'enfants en danger au Québec (le "pipeline" DPJ).
- Décortique les goulots d'étranglement : rétention des dossiers, enfants en attente d'attribution d'un travailleur social, pénurie criante d'effectifs sur le terrain, démissions massives.
- Confronte la situation actuelle aux 138 recommandations de la Commission Laurent (présidée par Régine Laurent).
- Évalue l'imputabilité politique et administrative : ministre responsable des Services sociaux (Lionel Carmant), sous-ministres, présidents-directeurs généraux des CIUSSS/CISSS.
- Précise la différence entre défaillance systémique et faute individuelle. Ne masque aucune vérité.`,

      CHAOS_ADMIN: `
TRIGGER ACTIF: [CHAOS ADMINISTRATIF & DÉRESPONSABILISATION]
Priorité absolue :
- Analyse la bureaucratie opaque, la dilution des responsabilités et les ruptures dans la transmission d'informations vitales au sein de l'État québécois.
- Décortique comment les alertes de première ligne sont étouffées ou filtrées avant d'atteindre le ministre ou l'Assemblée nationale.
- Examine les réformes administratives (ex: création de Santé Québec / agence unique) et leur impact réel sur le terrain.`,

      PUBLIC_FUNDS_CONTRACTS: `
TRIGGER ACTIF: [FLUX DE FONDS PUBLICS & CONTRATS DE GRÉ À GRÉ]
Priorité absolue :
- Analyse le recours aux firmes de consultants privées, les dépassements de coûts informatiques et contractuels (SEAO).
- Démontre comment l'argent englouti dans des contrats sans appel d'offres concurrentiel manque directement aux services pédiatriques, aux garderies (CPE) et aux écoles publiques.`,

      LOBBY_ETHICS: `
TRIGGER ACTIF: [LOBBYISME, PORTES TOURNANTES & COMMISSAIRE À L'ÉTHIQUE]
Priorité absolue :
- Scrutin des transferts entre cabinets ministériels et cabinets de lobbying ou grandes firmes privées.
- Vérification du respect de la Loi sur la transparence et l'éthique en matière de lobbyisme et du Code d'éthique de l'Assemblée nationale.`,

      CITIZEN_RECOURSE: `
TRIGGER ACTIF: [RECOURS CITOYENS & SIGNALEMENT PROTÉGÉ]
Priorité absolue :
- Guide le citoyen ou l'employé public de manière concrète sur les canaux protégés de dénonciation (Protecteur du citoyen - Loi D-11.1, UPAC, Tribunal administratif du travail).
- Détaille les protections légales contre les représailles, le maintien de l'anonymat et les précautions documentaires.`
    };

    const selectedTriggerDirective = triggerDirectives[controlTrigger] || triggerDirectives.DPJ_PIPELINE;

    const systemInstruction = `Tu es l'analyste principal et oracle d'investigation en temps réel de "Transparence Québec".
Tu t'adresses directement aux citoyens, aux parents, aux professionnels du réseau public et aux lanceurs d'alerte avec une exigence de VÉRITÉ ABSOLUE, sans complaisance politique ni langue de bois.

${selectedTriggerDirective}

DIRECTIVES DE DIALOGUE :
1. Rigueur factuelle et juridique : Appuie-toi sur les textes réels (Loi sur la protection de la jeunesse - LPJ, Commission Laurent, rapports du Protecteur du citoyen, commissions de l'Assemblée nationale, vérifications du VGQ).
2. Clarté chirurgicale : Sois précis, donne des dates, des chiffres et des responsabilités claires.
3. Empathie citoyenne : Garde toujours au centre le bien-être supérieur des enfants québécois et la justice pour les familles.
4. Structuration : Utilise des intertitres clairs, des puces concrètes et termine par des pistes d'action ou de vérification documentaire.
5. Format de sortie : Réponds en format JSON pour alimenter l'interface dynamique.

Schéma JSON attendu :
{
  "content": "Texte principal de la réponse bien structuré en markdown avec paragraphes clairs",
  "alertLevel": "INFRACTION_AVÉRÉE" | "ENQUÊTE_OFFICIELLE" | "ZONE_GRISE_DÉONTOLOGIQUE" | "SOUPÇON_NON_ÉTAYÉ" | "CONFORME_DOCUMENTÉ",
  "alertLevelLabel": "Intitulé concis du diagnostic (ex: Goulot Critique Documenté, Défaillance Systémique Avérée, Examen Déontologique Requis)",
  "keyTakeaways": ["Point clé 1", "Point clé 2", "Point clé 3"],
  "actionableSteps": ["Action citoyenne ou recours 1", "Action 2"],
  "sourcesGrounding": ["Rapport Commission Laurent (2021)", "Protecteur du citoyen - Rapport d'enquête DPJ", "Journal des débats Assemblée nationale"]
}`;

    // Format conversation history
    const conversationContents = [];

    for (const h of history.slice(-6)) {
      conversationContents.push(`${h.role === 'user' ? 'Citoyen' : 'Transparence Québec'}: ${h.content}`);
    }

    conversationContents.push(`Citoyen: ${message.trim()}`);

    const prompt = `Voici la demande du citoyen à traiter sous l'angle du trigger d'investigation :
---
${conversationContents.join("\n\n")}
---
Réponds avec un diagnostic rigoureux, sans détour, adossé aux faits réels vérifiables du Québec.`;

    const response = await generateWithFallback(ai, {
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.2,
        responseMimeType: "application/json",
      },
    });

    const responseText = response.text || "{}";
    let parsedData;
    try {
      parsedData = JSON.parse(responseText);
    } catch {
      const cleanJson = responseText.replace(/```json/gi, "").replace(/```/g, "").trim();
      parsedData = JSON.parse(cleanJson);
    }

    parsedData.timestamp = Date.now();
    parsedData.id = `chat-resp-${Date.now()}`;

    return res.json({
      success: true,
      data: parsedData,
    });
  } catch (error: any) {
    console.error("Erreur lors du chat d'investigation:", error);
    return res.status(500).json({
      error: error?.message || "Une erreur est survenue lors de l'échange avec l'oracle d'investigation.",
    });
  }
});

// Setup Vite middleware or static serving
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Transparence Québec active sur http://localhost:${PORT}`);
  });
}

startServer();
