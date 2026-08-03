// Root-level entry point for Hostinger's Passenger-based Node.js runner.
//
// Hostinger's auto-generated .htaccess for this app (Phusion Passenger)
// hardcodes:
//   PassengerAppRoot   .../domains/tampdf.com/.builds/current/nodejs
//   PassengerStartupFile server.js
// Passenger support confirmed this is not user-editable ("Startup File"
// option isn't available) -- it always looks for a plain "server.js" at the
// root of the checked-out/built repo, never a nested path. Since this is an
// npm-workspaces monorepo and the actual Next.js + Payload app lives in
// apps/web (see apps/web/server.js, which does the same job for `next
// start`'s equivalent role there), this file exists purely to satisfy that
// fixed lookup and hand off to the real app in apps/web.
//
// Plain CommonJS (not ESM import/export) so it runs regardless of "type" in
// the nearest package.json -- the root package.json does not set "type":
// "module", unlike apps/web's.
const { createServer } = require("node:http");
const path = require("node:path");
const next = require("next");

const appDir = path.join(__dirname, "apps", "web");
const port = Number(process.env.PORT) || 3000;
const hostname = process.env.HOST || "0.0.0.0";

const app = next({ dev: false, dir: appDir });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    createServer((req, res) => {
      handle(req, res);
    }).listen(port, hostname, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to start server:", err);
    process.exit(1);
  });

