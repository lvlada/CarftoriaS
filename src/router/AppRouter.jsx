import { LoginPageLayout } from '@/layout';
import { HomePage } from '@/pages';
import { Routes, Route } from 'react-router';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPageLayout />} />
    </Routes>
  );
};

export { AppRouter };
