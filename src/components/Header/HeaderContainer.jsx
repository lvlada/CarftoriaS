import { useState } from 'react';
import { Header } from './Header';
import { useAuthStore } from '@/store';

const HeaderContainer = ({ links }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const { isAuthenticated } = useAuthStore();
  const handleLanguageSelect = (selection) => {
    if (selection && selection.category && selection.category.code) {
      setSelectedLanguage(selection.category.code);
    }
  };

  return (
    <Header
      selectedLanguage={selectedLanguage}
      onLanguageSelect={handleLanguageSelect}
      links={links}
      isLoggedIn={isAuthenticated}
    />
  );
};

export { HeaderContainer };
