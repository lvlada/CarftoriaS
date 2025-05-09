import { HomePage } from '@/pages';
import { BrowserRouter, Routes, Route } from 'react-router';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRouter };
