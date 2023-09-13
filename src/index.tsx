import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import TopBar from './features/TopBar/TopBar';
import Band1 from './features/Band1';
import ErrorPage from './pages/error-page';
import './index.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element: <TopBar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "band1",
        element: <Band1 />
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