import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en.json';
import deTranslation from './locales/de.json';
import {personalInfo} from '../config_option';

// the translations
const resources = {
  en: {
    translation: {
      ...enTranslation,
      personalInfo
    }
  },
  de: {
    translation: {
      ...deTranslation,
      personalInfo
    }
  }
};

i18n
// detect user language
.use(LanguageDetector)
// pass the i18n instance to react-i18next
.use(initReactI18next)
// init i18next
.init({
  resources,
  fallbackLng: 'en',
  debug: process.env.NODE_ENV === 'development',
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  detection: {
    order: ['navigator', 'localStorage', 'htmlTag'],
    caches: ['localStorage'],
  }
});

export default i18n;
