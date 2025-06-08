import { Footer, HeaderContainer } from '@/components';
import { Outlet } from 'react-router';

const RegistarPageLayout = () => {
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

export { RegistarPageLayout };
