import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Base publique GitHub Pages : `https://<user>.github.io/<repo>/`
 * Une page blanche arrive très souvent quand ce `base` ne correspond pas au nom réel du dépôt
 * (fichiers JS/CSS en 404 sous un autre préfixe).
 *
 * Priorité :
 * 1. VITE_BASE_PATH (ex. VITE_BASE_PATH=/mon-repo/ npm run build)
 * 2. GITHUB_REPOSITORY en CI (ex. owner/mon-repo → /mon-repo/)
 * 3. champ "homepage" dans package.json (…github.io/<repo>/)
 * 4. repli /picard/
 */
function resolveBase(): string {
  const fromEnv = process.env.VITE_BASE_PATH?.trim();
  if (fromEnv) {
    let b = fromEnv.startsWith("/") ? fromEnv : `/${fromEnv}`;
    if (!b.endsWith("/")) b = `${b}/`;
    return b;
  }

  const ghRepo = process.env.GITHUB_REPOSITORY?.split("/")[1]?.trim();
  if (ghRepo) return `/${ghRepo.toLowerCase()}/`;

  try {
    const pkgPath = resolve(__dirname, "package.json");
    const pkg = JSON.parse(readFileSync(pkgPath, "utf-8")) as { homepage?: string };
    const h = pkg.homepage?.trim();
    if (h) {
      const m = h.match(/https?:\/\/[^/]+\.github\.io\/([^/?#]+)/i);
      if (m?.[1]) return `/${m[1].toLowerCase()}/`;
    }
  } catch {
    /* ignore */
  }

  return "/picard/";
}

const base = resolveBase();

export default defineConfig({
  plugins: [react()],
  base,
});
