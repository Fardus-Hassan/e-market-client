import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import './index.css'
import Route from './Route/Route';
import GlobalContext from './Global/GlobalContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalContext>
      <RouterProvider router={Route} />
    </GlobalContext>
  </StrictMode>,
)
