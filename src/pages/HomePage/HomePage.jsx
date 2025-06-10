import {
  HeroSectionContainer,
  BannerContainer,
  SearchSectionContainer,
  ProfilCardsContainer
} from '@/components/';
import { CrafterCounterContainer, VisionSection } from './components';
import { useEffect } from 'react';
import { useCraftsmenStore } from '@/store/';

const HomePage = () => {
  const fetchAllCraftsmen = useCraftsmenStore((state) => state.fetchAllCraftsmen);

  useEffect(() => {
    fetchAllCraftsmen();
  }, [fetchAllCraftsmen]);
  return (
    <>
      <HeroSectionContainer />
      <CrafterCounterContainer />
      <VisionSection />
      <SearchSectionContainer />
      <ProfilCardsContainer />
      <BannerContainer />
    </>
  );
};

export { HomePage };
