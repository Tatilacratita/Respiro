import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './en.json';
import roTranslations from './ro.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations
      },
      ro: {
        translation: roTranslations
      }
    },
    lng: 'ro',
    fallbackLng: 'ro',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
