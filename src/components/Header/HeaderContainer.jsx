import { useState } from 'react';
import { Header } from './Header';

const HeaderContainer = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default language is English

  const handleLanguageSelect = (selection) => {
    if (selection && selection.category && selection.category.code) {
      setSelectedLanguage(selection.category.code);
      // Here you could also trigger any other actions needed when language changes
      // such as updating translations, etc.
    }
  };

  return <Header selectedLanguage={selectedLanguage} onLanguageSelect={handleLanguageSelect} />;
};

export { HeaderContainer };
