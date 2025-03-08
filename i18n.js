import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './locales/en/translation.json';
import translationAR from './locales/ar/translation.json';
import translationES from './locales/es/translation.json';
import translationZH from './locales/zh/translation.json';
import translationFR from './locales/fr/translation.json';
import translationDE from './locales/de/translation.json';
import translationRU from './locales/ru/translation.json';
import translationPT from './locales/pt/translation.json';
import translationJA from './locales/ja/translation.json';
import translationKO from './locales/ko/translation.json';
import translationHI from './locales/hi/translation.json';

const resources = {
  en: { translation: translationEN },
  ar: { translation: translationAR },
  es: { translation: translationES },
  zh: { translation: translationZH },
  fr: { translation: translationFR },
  de: { translation: translationDE },
  ru: { translation: translationRU },
  pt: { translation: translationPT },
  ja: { translation: translationJA },
  ko: { translation: translationKO },
  hi: { translation: translationHI }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;