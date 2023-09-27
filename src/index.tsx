import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import NavBar from './features/NavBar/NavBar';
import Band from './features/Bands/Band';
import ErrorPage from './pages/error-page';
import { Basket } from './features/Basket/Basket';
import './index.scss'

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
        element: <Band />
      },
      {
        path: "/basket",
        element: <Basket />
      },
    ]
  }
])

const container = document.getElementById('root');
ReactDOM.createRoot(container as Element).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)