require('dotenv').config({ path: '.env.local' });

const requiredEnvVars = [
  'NEXTAUTH_URL',
  'NEXTAUTH_SECRET',
  'AUTH0_BASE_URL',
  'AUTH0_ISSUER_BASE_URL',
  'AUTH0_CLIENT_ID',
  'AUTH0_CLIENT_SECRET',
  'AUTH0_SECRET',
];

function checkEnvVars() {
  const missing = requiredEnvVars.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    console.error("❌ Variables d'environnement manquantes:");
    missing.forEach((key) => console.error(`   - ${key}`));
    process.exit(1);
  }

  console.log('✅ Configuration .env validée');
}

checkEnvVars();
