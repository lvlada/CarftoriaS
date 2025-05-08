import { BrowserRouter, Routes, Route } from 'react-router';
import { HomePage } from '../pages/HomePage/HomePage';
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
