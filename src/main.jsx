import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/styles.scss';
import App from './App.jsx';
import { Provider } from './providers';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>
);
