import { HomePageLayout, LoginPageLayout } from '@/layout';
import { RegistarPageLayout } from '@/layout/RegisterPageLayout';
import { HomePage, LoginPageContainer } from '@/pages';
import { RegisterPageContainer } from '@/pages/RegistarPage/RegisterPageContainer';
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
        <Route path="/register" element={<RegisterPageContainer />} />
      </Route>
    </Routes>
  );
};

export { AppRouter };
