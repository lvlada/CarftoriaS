import { BrowserProvider } from './BrowserProvider';

const Provider = ({ children }) => {
  return <BrowserProvider>{children}</BrowserProvider>;
};
export { Provider };
