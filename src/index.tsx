import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import NavBar from './features/NavBar/NavBar';
import ErrorPage from './pages/error-page';
import './index.scss';
import BandPage, { loader as bandPageLoader} from './pages/BandPage';
import CartPage from './pages/CartPage';
import { ShopContextProvider } from './features/context/ShopContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/bands/:bandId",
        element: <BandPage />,
        loader: bandPageLoader,
      },
      {
        path: "/cart",
        element: <CartPage />
      },
    ]
  }
])

const container = document.getElementById('root');
ReactDOM.createRoot(container as Element).render(
  <React.StrictMode>
    <ShopContextProvider>
      <RouterProvider router={router} />
    </ShopContextProvider>
  </React.StrictMode>
)