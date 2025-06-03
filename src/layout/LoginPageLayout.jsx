import { Footer, HeaderContainer } from '@/components';
import { Outlet } from 'react-router';

const LoginPageLayout = () => {
  return (
    <>
      <HeaderContainer />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export { LoginPageLayout };
