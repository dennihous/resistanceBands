import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './features/Home';
import TopBar from './features/TopBar';
import Test from './features/Test';
import ErrorPage from './error-page';
import './index.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element: <TopBar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <Home />
      },
      {
        path: "test",
        element: <Test />
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