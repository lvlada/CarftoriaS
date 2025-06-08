import { BrowserProvider } from './BrowserProvider';
import { ScrollProvider } from '@/context/ScrollContext';

const Provider = ({ children }) => {
  return (
    <BrowserProvider>
      <ScrollProvider>{children}</ScrollProvider>
    </BrowserProvider>
  );
};
export { Provider };
