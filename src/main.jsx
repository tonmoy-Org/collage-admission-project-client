import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/routes.jsx';
import { QueryClient, QueryClientProvider } from 'react-query';
import AuthProvider from './Provider/AuthProvider';
import { HelmetProvider } from 'react-helmet-async';

// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
