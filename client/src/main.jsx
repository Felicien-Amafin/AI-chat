import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import App from './App.jsx';
import './global.css';
import { setUpAxiosInterceptors } from './services/api/axios.config.js';

const queryClient = new QueryClient();
setUpAxiosInterceptors(store);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App/>
        
      </BrowserRouter>
    </QueryClientProvider>
  </Provider>
);
