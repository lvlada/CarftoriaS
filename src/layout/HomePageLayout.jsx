import { FooterContainer, HeaderContainer } from '@/components';
import { AppRouter } from '@/router';

const HomePageLayout = () => {
  return (
    <>
      <HeaderContainer />
      <AppRouter />
      <FooterContainer />
    </>
  );
};

export { HomePageLayout };
