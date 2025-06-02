import { HomePageLayout, LoginPageLayout } from '@/layout';
import { HomePage, LoginPageContainer } from '@/pages';
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
    </Routes>
  );
};

export { AppRouter };
