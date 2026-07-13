// Custom Node.js entry point.
//
// `next start` is a CLI command, not a plain file Node can run directly.
// Some hosts (e.g. Hostinger's Node.js Web Apps, when a project isn't
// auto-detected as a known framework) run a single "Entry file" via
// `node <file>` instead of an npm script — they need something requireable/
// runnable, not a command. This file is functionally equivalent to
// `next start`: it boots the already-built `.next` production output
// programmatically via Next.js's own server API, on process.env.PORT
// (falling back to 3000, matching `next start`'s default).
import { createServer } from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import next from "next";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT) || 3000;
const hostname = process.env.HOST || "0.0.0.0";

const app = next({ dev: false, dir: dirname });
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
