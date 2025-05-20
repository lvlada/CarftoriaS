import { HeroSectionContainer, BannerContainer } from '@/components/';
import { CrafterCounterContainer, VisionSection } from './components';
import { ProfilCardsContainer } from '@/components/ProfilCard/ProfilCardsContainer';

const HomePage = () => {
  return (
    <>
      <HeroSectionContainer />
      <CrafterCounterContainer />
      <VisionSection />
      <ProfilCardsContainer />
      <BannerContainer />
    </>
  );
};

export { HomePage };
