const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const certDir = path.join(__dirname, '../certificates');
const opensslPath = 'C:\\Program Files\\OpenSSL-Win64\\bin\\openssl.exe';

async function generateCertificates() {
  try {
    if (!fs.existsSync(certDir)) {
      fs.mkdirSync(certDir, { recursive: true });
    }

    // Génération de la clé privée
    execSync(`"${opensslPath}" genrsa -out "${path.join(certDir, 'localhost.key')}" 2048`);

    // Génération du certificat auto-signé
    execSync(`"${opensslPath}" req -x509 -new -nodes -key "${path.join(certDir, 'localhost.key')}" -sha256 -days 365 -out "${path.join(certDir, 'localhost.crt')}" -subj "/CN=localhost"`);

    console.log('Certificats SSL générés avec succès');
  } catch (err) {
    console.error('Erreur lors de la génération des certificats:', err);
    process.exit(1);
  }
}

generateCertificates().catch(console.error);