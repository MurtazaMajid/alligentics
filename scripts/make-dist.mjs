// Copies the static client build from .output/public to ./dist and exposes the SPA shell as index.html,
// which is what wrangler.jsonc ("assets.directory": "./dist") serves.
import { cpSync, existsSync, renameSync, rmSync } from "node:fs";

const src = ".output/public";
if (!existsSync(`${src}/_shell.html`)) {
  console.error("Missing .output/public/_shell.html - did `vite build` run with spa enabled?");
  process.exit(1);
}
// Nitro drops a redirect that would make wrangler ignore wrangler.jsonc - remove it.
rmSync(".wrangler/deploy", { recursive: true, force: true });
rmSync("dist", { recursive: true, force: true });
cpSync(src, "dist", { recursive: true });
renameSync("dist/_shell.html", "dist/index.html");
console.log("dist/ ready");
