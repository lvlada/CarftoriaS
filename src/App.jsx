import { AppRouter } from './router';
import { useEffect } from 'react';
import { useCraftsmenStore } from '@/store/CraftsmenStore';

function App() {
  const fetchAllCraftsmen = useCraftsmenStore((state) => state.fetchAllCraftsmen);

  useEffect(() => {
    fetchAllCraftsmen();
  }, [fetchAllCraftsmen]);
  return <AppRouter />;
}

export default App;
