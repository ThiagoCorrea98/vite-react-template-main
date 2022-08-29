import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import AppReactQuery from './AppReactQuery';
import App from './App';
import Appnew from './Appnew';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppReactQuery />
      {/* <App /> */}
      {/* <Appnew /> */}
    </QueryClientProvider>
  </React.StrictMode>
);
