import { HeroSectionContainer, BannerContainer, Container } from '@/components/';
import { CrafterCounterContainer, VisionSection } from './components';

const HomePage = () => {
  return (
    <>
      <HeroSectionContainer />
      <CrafterCounterContainer />
      <VisionSection />
      <Container>
        <BannerContainer />
      </Container>
    </>
  );
};

export { HomePage };
