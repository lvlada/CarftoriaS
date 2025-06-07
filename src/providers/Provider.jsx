import { BrowserProvider } from './BrowserProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const Provider = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <BrowserProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </BrowserProvider>
  );
};
export { Provider };
