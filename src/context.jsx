import React, { useContext, useState } from 'react';
import { createContext } from 'react';

const translations = [
  {
    language: 'English',
    words: {
      home: 'Home',
      events: 'Events',
      aboutUs: 'About Us',
      contactUs: 'Contact Us',
      language: 'Language',
    },
  },
  {
    language: 'Persian',
    words: {
      home: 'خانه',
      events: 'رویداد ها',
      aboutUs: 'درباره ما',
      contactUs: 'تماس با ما',
      language: 'زبان',
    },
  },
];

const languageContext = createContext(undefined);

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(translations[0].language);
  const [words, setWords] = useState(translations[0].words);

  const changeLanguage = () => {
    const newLanguage =
      language === translations[0].language
        ? translations[1].language
        : translations[0].language;
    setLanguage(newLanguage);
    setWords(
      newLanguage === translations[0].language
        ? translations[1].words
        : translations[0].words
    );
  };

  return (
    <>
      <languageContext.Provider value={{ language, changeLanguage, words }}>
        {children}
      </languageContext.Provider>
    </>
  );
}

const useLanguage = () => { useContext(languageContext)}
export { LanguageProvider , useLanguage};
