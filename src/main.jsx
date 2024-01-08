import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { AppProvider } from './context/AppProvider'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

import './index.css'
import './css/libraries.css';
import './css/prime_components.css';
import './css/loading.css'
import "primereact/resources/themes/saga-green/theme.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </PrimeReactProvider>
  </React.StrictMode>,
)
