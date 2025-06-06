import { FooterContainer } from '@/components';
import { HeaderBooking } from '@/components/Header/HeaderBooking';
import { Outlet } from 'react-router';

const BookingPageLayout = () => {
  return (
    <>
      <HeaderBooking />
      <main>
        <Outlet />
      </main>
      <FooterContainer />
    </>
  );
};

export { BookingPageLayout };
