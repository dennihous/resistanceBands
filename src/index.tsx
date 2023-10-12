import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import ErrorPage from './pages/error-page';
import './index.scss';
import BandPage, { loader as bandPageLoader} from './pages/BandPage';
import CartPage from './pages/CartPage';
import { ShopContextProvider } from './features/context/ShopContext';
import TestNavBar from './features/NavBar/TestNavBar';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <BrowserRouter>
          <TestNavBar />
          <Routes>
            <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
            <Route path="/bands/:bandId" element={<BandPage />} loader={bandPageLoader} errorElement={<ErrorPage />} />
            <Route path="/cart" element={<CartPage />} errorElement={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);