import { HomePage } from '@/pages';
import { Routes, Route } from 'react-router';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export { AppRouter };
