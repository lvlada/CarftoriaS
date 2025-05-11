import { Container, HeaderContainer } from '@/components';
import { AppRouter } from '@/router';

const HomePageLayout = () => {
  return (
    <>
      <HeaderContainer />
      <Container>
        <AppRouter />
      </Container>
    </>
  );
};

export { HomePageLayout };
