import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css" 
import {SignupForm} from './componenets/SighnupForm';
import { LoginForm } from './componenets/LoginForm';
import { Dashboard } from './componenets/Dashboard';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProtectedRout } from './routs/ProtectedRout';


const routes = createBrowserRouter([{
  path: "/signup",
  element: <SignupForm />
},{
  path: "/login",
  element: <LoginForm />
},{
  path: "/dashboard",
  element: <ProtectedRout element={<Dashboard />} />,
},{
  path: "/",
  element: <LoginForm />
}]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <RouterProvider router={routes} />
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
