import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
// import { RouterProvider } from "react-router-dom";
// import { router } from "./router/router";
import { App } from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </React.StrictMode>
);
