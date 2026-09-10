# Transparence Québec

> Plateforme d'investigation citoyenne et d'analyse documentaire sur l'intégrité publique, la reddition de comptes de la DPJ, les contrats publics et les recours déontologiques au Québec.

---

## 🏛️ Présentation du Projet

**Transparence Québec** est une vigie citoyenne indépendante combinant analyse juridique rigoureuse, décryptage des rapports officiels (Commission Laurent, Protecteur du citoyen, Vérificateur général du Québec) et intelligence artificielle avancée via le **SDK Node.js Google GenAI**.

### Fonctionnalités Clés

- **Moteur d'Investigation Documentaire** : Diagnostic en temps réel sur les conflits d'intérêts, les contrats sans appel d'offres (SEAO) et les déclarations ministérielles.
- **Dialogue & Déclencheurs d'Imputabilité (Control Triggers)** :
  - **Pipeline DPJ & Protection de l'Enfance** : Suivi des goulots de signalements, délais de rétention et chaîne d'imputabilité politique.
  - **Chaos Administratif & Dilution** : Analyse des ruptures bureaucratiques et alertes de terrain ignorées.
  - **Contrats Publics & Gré à Gré** : Dépassements de coûts informatiques et flux budgétaires.
  - **Lobbyisme & Portes Tournantes** : Conformité au Code d'éthique de l'Assemblée nationale et à Carrefour Lobby.
  - **Canaux Légaux & Immunité** : Guide pratique de divulgation protégée (Loi D-11.1, Protecteur du citoyen, UPAC).
- **Vérificateur de Discours Politique** : Détection des éléments de langage, esquives et omissions dans les déclarations publiques.
- **Dossiers d'Enquête Pré-documentés** : Cas réels analysés (Fiasco SAAQclic, Rétention des signalements DPJ, Portes tournantes ministérielles, etc.).
- **Génération & Export de Rapports** : Exportation structurée de dossiers d'enquête avec niveaux d'alerte et sources vérifiables.

---

## 🛠️ Stack Technique

- **Frontend** : React 19, TypeScript, Tailwind CSS v4, Motion (animations), Lucide React.
- **Backend** : Node.js, Express, esbuild.
- **Intelligence Artificielle** : `@google/genai` (exécuté côté serveur pour garantir la sécurité de la clé API).
- **Outil de Build** : Vite 6.

---

## 🚀 Installation & Démarrage Local

### Prérequis
- Node.js version 20 ou supérieure
- Gestionnaire de paquets `npm`

### 1. Cloner ou télécharger le dépôt
```bash
git clone <URL_DU_DEPOT>
cd transparence-quebec
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Configurer les variables d'environnement
Copiez le fichier d'exemple `.env.example` en `.env` :
```bash
cp .env.example .env
```
Renseignez votre clé API Gemini dans le fichier `.env` :
```env
GEMINI_API_KEY="votre_cle_api_gemini"
```

### 4. Lancer en mode développement
```bash
npm run dev
```
L'application démarre sur [http://localhost:3000](http://localhost:3000).

---

## 📦 Build de Production & Déploiement

### Compiler le projet
```bash
npm run build
```
Cette commande génère :
1. Les fichiers statiques optimisés du frontend dans le dossier `dist/`.
2. Le serveur Express autonome compilé dans `dist/server.cjs`.

### Démarrer le serveur de production
```bash
npm start
```

### Vérifier le code (Linter)
```bash
npm run lint
```

---

## 📤 Déploiement / Export vers GitHub

### Via l'interface Google AI Studio :
1. Cliquez sur le menu déroulant en haut à droite de l'écran AI Studio (trois points ou icône d'export).
2. Choisissez **Export to GitHub** (ou **Download ZIP**).
3. Autorisez l'accès à votre compte GitHub et choisissez le nom du dépôt de destination.

### Déploiement manuel via Git CLI :
```bash
git init
git add .
git commit -m "feat: Déploiement initial de Transparence Québec"
git branch -M main
git remote add origin https://github.com/<votre-utilisateur>/<votre-depot>.git
git push -u origin main
```

---

## 📄 Licence & Transparence

Projet conçu à des fins d'intérêt public, de transparence démocratique et de protection du bien commun au Québec.
