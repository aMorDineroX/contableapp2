<div align="center">
  <h1>🌍 SYSCOHADA</h1>
  <p><strong>Système de Comptabilité Moderne pour l'Afrique</strong></p>
  <p>
    <a href="#-fonctionnalités">Fonctionnalités</a> •
    <a href="#-démarrage-rapide">Démarrage</a> •
    <a href="#-documentation">Documentation</a> •
    <a href="#-support">Support</a>
  </p>
  <p align="center">
    <img src="public/dashboard-preview.png" alt="Dashboard Preview" width="800">
  </p>
</div>

## ✨ Fonctionnalités Principales

<div align="center">
  <table>
    <tr>
      <td align="center">📊</td>
      <td><strong>Tableau de Bord Interactif</strong><br/>Visualisation en temps réel des données financières</td>
      <td align="center">📜</td>
      <td><strong>Normes SYSCOHADA</strong><br/>Conformité totale avec la réglementation</td>
    </tr>
    <tr>
      <td align="center">🔒</td>
      <td><strong>Sécurité Avancée</strong><br/>Authentification Auth0 et chiffrement SSL</td>
      <td align="center">📱</td>
      <td><strong>Design Responsive</strong><br/>Interface adaptative sur tous les appareils</td>
    </tr>
  </table>
</div>

## 🚀 Démarrage Rapide

## 📋 Prérequis

- Node.js 18+
- NPM ou Yarn
- Certificats SSL locaux pour HTTPS

## 🛠 Installation

1. Cloner le repository

```bash
git clone [url-du-repo]
cd contableapp2
```

2. Installer les dépendances

```bash
npm install
```

3. Configurer les variables d'environnement

```bash
cp .env.example .env.local
```

4. Lancer le serveur de développement

```bash
npm run dev
```

## 🔒 Configuration de la Sécurité

### Variables d'environnement requises:

- NEXTAUTH_URL
- NEXTAUTH_SECRET
- AUTH0_BASE_URL
- AUTH0_ISSUER_BASE_URL
- AUTH0_CLIENT_ID
- AUTH0_CLIENT_SECRET
- AUTH0_SECRET

## 📚 Documentation Technique

### Stack Technique

- Next.js 14
- TypeScript
- Tailwind CSS
- Auth0
- Zustand
- React Query
- Jest pour les tests

### Architecture

```
/app           - Pages et routes Next.js
/components    - Composants réutilisables
/hooks         - Custom hooks React
/lib          - Utilitaires et configurations
/public        - Assets statiques
/styles        - Styles globaux
```

## 🧪 Tests

```bash
npm run test
```

## 📝 License

[Votre licence]

## 🤝 Contribution

[Instructions pour contribuer au projet]

## 👥 Auteurs

[Vos informations]
