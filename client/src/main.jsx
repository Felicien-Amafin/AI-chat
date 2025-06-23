import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App.jsx';
import './global.css';

const queryClient = new QueryClient();

createRoot(
  document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
  </QueryClientProvider>

);
