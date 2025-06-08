import { BrowserProvider } from './BrowserProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ScrollProvider } from '@/context/ScrollContext';

const Provider = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <BrowserProvider>
      <QueryClientProvider client={queryClient}>
        <ScrollProvider>{children}</ScrollProvider>
      </QueryClientProvider>
    </BrowserProvider>
  );
};
export { Provider };
