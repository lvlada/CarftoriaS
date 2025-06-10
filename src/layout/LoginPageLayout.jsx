import { FooterContainer, HeaderContainer } from '@/components';
import { Outlet } from 'react-router';

const LoginPageLayout = () => {
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

export { LoginPageLayout };
