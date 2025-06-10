import { BrowserProvider } from './BrowserProvider';
import { ScrollProvider } from '@/context/ScrollContext';
import { QueryProvider } from './QueryProvider';

const Provider = ({ children }) => {
  return (
    <BrowserProvider>
      <QueryProvider>
        <ScrollProvider>{children}</ScrollProvider>
      </QueryProvider>
    </BrowserProvider>
  );
};
export { Provider };
