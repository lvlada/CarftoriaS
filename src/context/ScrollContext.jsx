import { createContext, useContext, useRef } from 'react';

const ScrollContext = createContext(null);

const Y_OFFEST = -85;

function ScrollProvider({ children }) {
  const searchSectionRef = useRef(null);
  const profileCardsRef = useRef(null);

  const scrollToSearchSection = () => {
    if (searchSectionRef.current) {
      const yOffset = Y_OFFEST;
      const element = searchSectionRef.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  const scrollToProfileCards = () => {
    if (profileCardsRef.current) {
      const yOffset = Y_OFFEST;
      const element = profileCardsRef.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  return (
    <ScrollContext.Provider
      value={{
        searchSectionRef,
        profileCardsRef,
        scrollToSearchSection,
        scrollToProfileCards
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
}

function useScroll() {
  const context = useContext(ScrollContext);

  return context;
}

export { ScrollProvider, useScroll };
