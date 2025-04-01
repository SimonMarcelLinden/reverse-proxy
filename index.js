// Reverse Proxy (Node.js, npm: express, http-proxy)

const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const readline = require("readline");

const app = express();
const port = 3000;

// IP-Adressen dynamisch beim Start abfragen
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const targets = [];

const askForIP = (count) => {
  if (count === 0) {
    rl.close();
    startProxy();
    return;
  }

  rl.question(
    `Ziel-IP ${targets.length + 1} eingeben (z.B. 192.168.1.183:80): `,
    (ip) => {
      if (ip) {
        targets.push(ip);
        askForIP(count - 1);
      } else {
        console.log("Ungültige Eingabe.");
        askForIP(count);
      }
    }
  );
};

const startProxy = () => {
  if (targets.length === 0) {
    console.error("Keine Ziel-IP angegeben, Abbruch.");
    process.exit(1);
  }

  console.log(`Starte Reverse-Proxy auf Port ${port}`);
  console.log(`Weiterleitungen zu:`, targets);

  // Proxy-Middleware
  app.use("/", (req, res, next) => {
    const target =
      targets.length > 1
        ? req.headers.host.startsWith("1.")
          ? targets[1]
          : targets[0]
        : targets[0];

    createProxyMiddleware({
      target: `http://${target}`,
      changeOrigin: true,
    })(req, res, next);
  });

  app.listen(port, () => {
    console.log(`Proxy läuft unter: http://localhost:${port}`);
  });
};

// Maximal zwei IP-Adressen abfragen
askForIP(2);
