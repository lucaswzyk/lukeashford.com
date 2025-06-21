import React from 'react';
import {useTranslation} from 'react-i18next';
import './style.css';

const LanguageSwitcher = () => {
  const {t, i18n} = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
  };

  return (
      <div className="language-switcher">
        <span className="language-label">{t('language_switcher.language')}:</span>
        <button
            className={`language-btn ${i18n.language === 'en' ? 'active' : ''}`}
            onClick={() => changeLanguage('en')}
        >
          {t('language_switcher.en')}
        </button>
        <button
            className={`language-btn ${i18n.language === 'de' ? 'active' : ''}`}
            onClick={() => changeLanguage('de')}
        >
          {t('language_switcher.de')}
        </button>
      </div>
  );
};

export default LanguageSwitcher;