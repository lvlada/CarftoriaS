import { HomePageLayout, LoginPageLayout, BookingPageLayout } from '@/layout';
import { HomePage, LoginPageContainer, BookingPageContainer } from '@/pages';
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
      <Route>
        <Route element={<BookingPageLayout />}>
          <Route path="/booking/:id" element={<BookingPageContainer />} />
        </Route>
      </Route>
    </Routes>
  );
};

export { AppRouter };
