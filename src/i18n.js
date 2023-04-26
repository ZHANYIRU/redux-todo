import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import zh from "./locales/zh.json";
import en from "./locales/en.json";
i18n
  // 檢測使用者當前使用的语言
  .use(LanguageDetector)
  .use(initReactI18next)
  // 初始化 i18next
  .init({
    debug: false,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      zh: {
        translation: zh,
      },
      en: {
        translation: en,
      },
    },
  });

export default i18n;
