const { createServer } = require('https');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');
const path = require('path');
const { generateCertificates } = require('./generate-certificates');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

async function ensureCertificates() {
  const certDir = path.join(__dirname, '../certificates');
  const keyPath = path.join(certDir, 'localhost.key');
  const certPath = path.join(certDir, 'localhost.crt');

  if (!fs.existsSync(keyPath) || !fs.existsSync(certPath)) {
    console.log('Certificats SSL manquants. Génération en cours...');
    await generateCertificates();
  }

  return {
    key: fs.readFileSync(keyPath),
    cert: fs.readFileSync(certPath)
  };
}

async function startServer() {
  try {
    const httpsOptions = await ensureCertificates();
    await app.prepare();

    createServer(httpsOptions, (req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    }).listen(3000, (err) => {
      if (err) throw err;
      console.log('> Ready on https://localhost:3000');
    });
  } catch (err) {
    console.error('Erreur lors du démarrage du serveur:', err);
    process.exit(1);
  }
}

startServer();
