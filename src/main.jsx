import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import './index.css'
import Route from './Route/Route';
import GlobalContext from './Global/GlobalContext';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalContext>
      <RouterProvider router={Route} />
      <Toaster position="top-center" reverseOrder={false} />
    </GlobalContext>
  </StrictMode>,
)
