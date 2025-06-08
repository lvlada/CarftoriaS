import {
  HeroSectionContainer,
  BannerContainer,
  SearchSectionContainer,
  ProfilCardsContainer
} from '@/components/';
import { CrafterCounterContainer, VisionSection } from './components';

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
