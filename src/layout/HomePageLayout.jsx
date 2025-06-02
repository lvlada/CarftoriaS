import { FooterContainer, HeaderContainer } from '@/components';
import { Outlet } from 'react-router';

const HomePageLayout = () => {
  return (
    <>
      <HeaderContainer />
      <main>
        <Outlet />
      </main>
      <FooterContainer />
    </>
  );
};

export { HomePageLayout };
