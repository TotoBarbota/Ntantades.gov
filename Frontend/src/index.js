import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import 'primereact/resources/themes/lara-light-indigo/theme.css'; // or any other theme you prefer
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import App from './Pages/WelcomePage/App';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Routes } from './routes';
import LoginPage from './Pages/Login/LoginPage';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import LoginVerificationPage from './Pages/Login/LoginVerificationPage';
import Option1Page1 from './Pages/Option1Page1/Option1Page1';
import Option1Page2 from './Pages/Option1Page2/Option1Page2';
import Option1Page3 from './Pages/Option1Page3/Option1Page3';
import Option1Page4 from './Pages/Option1Page4/Option1Page4';
import Option1Page5 from './Pages/Option1Page5/Option1Page5';
import CV from './Pages/CV/CV';
import Details from './Pages/Details/Details';

const router = createBrowserRouter([
    { path: Routes.Home, element: <App /> },
    { path: Routes.Ntantades, element: <App /> },
    { path: Routes.Login, element: <LoginPage /> },
    { path: Routes.LoginVerification, element: <LoginVerificationPage /> },
    { path: Routes.Option1Page1, element: <Option1Page1 /> },
    { path: Routes.Option1Page2, element: <Option1Page2 /> },
    { path: Routes.Option1Page3, element: <Option1Page3 /> },
    { path: Routes.Option1Page4, element: <Option1Page4 /> },
    { path: Routes.Option1Page5, element: <Option1Page5 /> },
    { path: Routes.CV, element: <CV /> },
    { path: Routes.Details, element: <Details /> },
    { path: "*", element: <PageNotFound /> }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}>
        </RouterProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
