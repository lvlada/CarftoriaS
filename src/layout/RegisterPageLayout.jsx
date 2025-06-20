import { FooterContainer, HeaderContainer } from '@/components';
import { Outlet } from 'react-router';

const RegistarPageLayout = () => {
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

export { RegistarPageLayout };
