import { HeroSectionContainer, BannerContainer, SearchSectionContainer } from '@/components/';
import { CrafterCounterContainer, VisionSection } from './components';

const HomePage = () => {
  return (
    <>
      <HeroSectionContainer />
      <CrafterCounterContainer />
      <VisionSection />
      <SearchSectionContainer />
      <BannerContainer />
    </>
  );
};

export { HomePage };
