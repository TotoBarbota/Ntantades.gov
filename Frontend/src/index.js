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
import AitisiSimmetoxisPage from './Pages/aitisiSimmetoxis/aitisiSimmetoxisPage';
import ApplicationPage from './Pages/ApplicationPage/ApplicationPage';
import SearchProfessionalPage from './Pages/SearchProfessionalPage/SearchProfessionalPage';

const router = createBrowserRouter([
    { path: Routes.Home, element: <App /> },
    { path: Routes.Ntantades, element: <App /> },
    { path: Routes.Login, element: <LoginPage /> },
    { path: Routes.LoginVerification, element: <LoginVerificationPage /> },
    { path: Routes.AitisiSimmetoxis, element: <AitisiSimmetoxisPage /> },
    { path: Routes.Application, element: <ApplicationPage /> },
    { path: `${Routes.Application}/${Routes.SearchProfessional}`, element: <SearchProfessionalPage /> },
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
