import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './global.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { NextUIProvider } from '@nextui-org/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </NextUIProvider>
  </React.StrictMode>
);
