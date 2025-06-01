import { HeroSectionContainer, BannerContainer, SearchSectionContainer } from '@/components/';
import { CrafterCounterContainer, VisionSection } from './components';
import { ProfilCardsContainer } from '@/components/ProfilCard/ProfilCardsContainer';

const HomePage = () => {
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
