# 🌐 Dynamischer Reverse Proxy für Node.js (macOS-kompatibel)

Ein einfacher, flexibler Reverse Proxy basierend auf **Express** und **http-proxy-middleware**.

🔁 **Besonderheit:** Beim Start können **eine oder zwei Ziel-IP-Adressen** interaktiv angegeben werden. Damit eignet sich dieses Tool perfekt für die Entwicklung mit Geräten wie **ESP32**, die im lokalen Netzwerk dynamische IP-Adressen erhalten.

---

## 🚀 Features

-   Dynamische Abfrage der Ziel-IPs beim Start
-   Unterstützung von bis zu **zwei unterschiedlichen IPs**
-   Lokaler Zugriff über `http://localhost:3000`
-   Optional: Routing zwischen zwei IPs via Subdomain-Präfix (z. B. `1.localhost`)
-   Eigenständig ausführbar unter macOS (via [`pkg`](https://www.npmjs.com/package/pkg))

---

## 🛠️ Installation & Ausführung

### 1. Repository klonen

```bash
git clone https://github.com/dein-benutzername/dynamischer-reverse-proxy.git
cd dynamischer-reverse-proxy
```

### 2. Abhängigkeiten installieren

```bash
npm install
```

### 3. Proxy starten

```bash
node proxy.js
```

Du wirst nun zur Eingabe von bis zu **zwei IP-Adressen (inkl. Port)** aufgefordert:

```
Ziel-IP 1 eingeben (z.B. 192.168.1.183:80):
Ziel-IP 2 eingeben (optional, Enter überspringt):
```

---

## 💻 Zugriff

-   Standard-IP:

    ```
    http://localhost:3000
    ```

-   Zweite IP (optional):
    ```
    http://1.localhost:3000
    ```

---

## 📦 Als ausführbare Datei (macOS)

Mit `pkg` kannst du eine standalone-Datei erstellen:

```bash
npm install -g pkg
pkg proxy.js --targets node20-macos-x64 --output ReverseProxy
chmod +x ReverseProxy
./ReverseProxy
```

---

## 📎 Lizenz

MIT License © 2025 Simon Marcel Linden
