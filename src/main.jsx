import { StrictMode, Suspense, lazy } from 'react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes/index.jsx';
import Loader from './components/loader.jsx';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const router = createBrowserRouter(routes);
import { Provider } from "react-redux";
import store from "./redux/store.js";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Suspense fallback={<Loader/>}>
          <RouterProvider router={router} />
          <ToastContainer />
      </Suspense>
    </Provider>
  </StrictMode>
);
