import { HomePageLayout, LoginPageLayout, BookingPageLayout, RegistarPageLayout } from '@/layout';
import { HomePage, LoginPageContainer, BookingPageContainer, RegisterPageContainer } from '@/pages';

import { Routes, Route } from 'react-router';

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<HomePageLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route element={<LoginPageLayout />}>
        <Route path="/login" element={<LoginPageContainer />} />
      </Route>
      <Route element={<RegistarPageLayout />}>
        <Route path="/signup" element={<RegisterPageContainer />} />
      </Route>
      <Route element={<BookingPageLayout />}>
        <Route path="/booking/:id" element={<BookingPageContainer />} />
      </Route>
    </Routes>
  );
};

export { AppRouter };
