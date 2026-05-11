import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * GitHub Pages (projet) : l’URL est https://<utilisateur>.github.io/<nom-du-repo>/
 * Ce `base` DOIT être exactement `/<nom-du-repo>/` (slash initial et final).
 * Si vous renommez le dépôt, mettez à jour cette valeur ET `homepage` dans package.json.
 */
export default defineConfig({
  plugins: [react()],
  base: "/picard/",
});
