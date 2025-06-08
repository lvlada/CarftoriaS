import { FooterContainer, HeaderContainer } from '@/components';

import { Outlet } from 'react-router';

const BookingPageLayout = () => {
  return (
    <>
      <HeaderContainer links />
      <main>
        <Outlet />
      </main>
      <FooterContainer />
    </>
  );
};

export { BookingPageLayout };
