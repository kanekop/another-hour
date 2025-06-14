import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import i18n_pkg from "astro-i18n";
const i18n = "default" in i18n_pkg ? i18n_pkg.default : i18n_pkg;

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), i18n({
    defaultLang: "ja",
    supportedLangs: ["en"],
    translationFileNames: {
      common: "common",
      pages: "pages"
    },
    translations: {
      ja: {
        common: "./src/i18n/ja/common.json",
        pages: "./src/i18n/ja/pages.json"
      },
      en: {
        common: "./src/i18n/en/common.json",
        pages: "./src/i18n/en/pages.json"
      }
    },
    routeTranslations: {}
  })]
});
