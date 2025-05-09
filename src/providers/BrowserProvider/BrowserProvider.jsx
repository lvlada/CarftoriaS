import { BrowserRouter } from 'react-router';

const BrowserProvider = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export { BrowserProvider };
