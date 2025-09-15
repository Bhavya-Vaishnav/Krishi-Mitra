import { createContext } from 'react';

export type Language = 'en' | 'hi';

export const LanguageContext = createContext<{
  language: Language;
  setLanguage: (lang: Language) => void;
}>({
  language: 'en',
  setLanguage: () => {},
});
