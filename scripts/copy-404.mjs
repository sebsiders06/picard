/**
 * GitHub Pages : pour les chemins inconnus, sert 404.html.
 * Copier index.html évite une page blanche si une URL profonde est demandée
 * (peu utile sans React Router, coût négligeable).
 */
import { copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const dist = resolve(process.cwd(), "dist");
const indexHtml = resolve(dist, "index.html");
const notFoundHtml = resolve(dist, "404.html");

if (!existsSync(indexHtml)) {
  process.exit(0);
}

copyFileSync(indexHtml, notFoundHtml);
