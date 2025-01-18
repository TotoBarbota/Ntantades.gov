import App from "./Pages/WelcomePage/App";
import NavBar from "./Components/NavBar/NavBar";

import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import { Routes } from "./routes.js";
import LoginPage from "./Pages/Login/LoginPage.js";
import LoginVerificationPage from "./Pages/Login/LoginVerificationPage.js";
import RegisterPage from "./Pages/Login/RegisterPage.js";
import ProtectedRoute from "./contexts/ProtectedRoute.js";
import MeetingsPage from "./Pages/MeetingsPage/MeetingsPage.js";
import AuthProvider from "./contexts/AuthContext.js";
import ApplicationPage from "./Pages/ApplicationPage/ApplicationPage.js";
import SearchProfessionalPage from "./Pages/SearchProfessionalPage/SearchProfessionalPage.js";
import ProfessionalPage from "./Pages/ProfessionalPage/ProfessionalPage.js";
import PageNotFound from "./Pages/PageNotFound/PageNotFound.js";
import AitisiSimmetoxisPage from "./Pages/AitisiSimmetoxis/AitisiSimmetoxisPage.js";
import Introduction from "./Pages/Introduction/Introduction.js";
import Option1Page1 from "./Pages/Option1Page1/Option1Page1.js";
import Option1Page2 from "./Pages/Option1Page2/Option1Page2.js";
import Option1Page3 from "./Pages/Option1Page3/Option1Page3.js";
import Option1Page4 from "./Pages/Option1Page4/Option1Page4.js";
import Option1Page5 from "./Pages/Option1Page5/Option1Page5.js";
import CV from "./Pages/CV/CV.js";
import Details from "./Pages/Details/Details.js";
import ApplicationsWithProsPage from "./Pages/ApplicationsWithProsPage/ApplicationsWithProsPage.js";
import AgreementPage from "./Pages/AgreementPage/AgreementPage.js";
import WorkCertificationPage from "./Pages/WorkCertificationPage/WorkCertificationPage.js";
import CheckNtantaisValid from "./Pages/CheckNtantaisValid.js";
import { OptionProvider } from "./contexts/OptionContext.js";

const router = createBrowserRouter([
  { path: Routes.Home, element: <App /> },
  // { path: Routes.First, element: <Introduction /> },
  { path: Routes.Ntantades, element: <App /> },
  { path: Routes.Login, element: <LoginPage /> },
  { path: Routes.LoginVerification, element: <LoginVerificationPage /> },
  {
    path: Routes.Option1Page1,
    element: (
      <OptionProvider>
        <ProtectedRoute>
          <Option1Page1 />
        </ProtectedRoute>
      </OptionProvider>
    ),
  },
  {
    path: `${Routes.Option1Page3}/${Routes.CV}`,
    element: (
      <OptionProvider>
        <ProtectedRoute>
          <CV />
        </ProtectedRoute>
      </OptionProvider>
    ),
  },
  {
    path: Routes.Option1Page2,
    element: (
      <OptionProvider>
        <ProtectedRoute>
          <Option1Page2 />
        </ProtectedRoute>
      </OptionProvider>
    ),
  },
  {
    path: Routes.Option1Page3,
    element: (
      <OptionProvider>
        <ProtectedRoute>
          <Option1Page3 />
        </ProtectedRoute>
      </OptionProvider>
    ),
  },
  {
    path: Routes.Option1Page4,
    element: (
      <OptionProvider>
        <ProtectedRoute>
          <Option1Page4 />
        </ProtectedRoute>
      </OptionProvider>
    ),
  },
  {
    path: Routes.Option1Page5,
    element: (
      <OptionProvider>
        <ProtectedRoute>
          <Option1Page5 />
        </ProtectedRoute>
      </OptionProvider>
    ),
  },
  {
    path: Routes.CV,
    element: (
      <ProtectedRoute>
        <CV />
      </ProtectedRoute>
    ),
  },
  {
    path: Routes.Details,
    element: (
      <ProtectedRoute>
        <Details />
      </ProtectedRoute>
    ),
  },
  {
    path: Routes.AitisiSimmetoxis,
    element: (
      <ProtectedRoute>
        <AitisiSimmetoxisPage />
      </ProtectedRoute>
    ),
  },
  {
    path: Routes.CheckNtantaisValid,
    element: (
      <ProtectedRoute>
        <CheckNtantaisValid />
      </ProtectedRoute>
    ),
  },
  {
    path: `${Routes.AitisiSimmetoxis}/${Routes.Application}`,
    element: (
      <ProtectedRoute>
        <ApplicationPage />
      </ProtectedRoute>
    ),
  },
  {
    path: `${Routes.AitisiSimmetoxis}/${Routes.Application}/${Routes.SearchProfessional}`,
    element: (
      <ProtectedRoute>
        <SearchProfessionalPage />
      </ProtectedRoute>
    ),
  },
  {
    path: `${Routes.AitisiSimmetoxis}/${Routes.Application}/${Routes.SearchProfessional}/${Routes.Professional}`,
    element: (
      <ProtectedRoute>
        <ProfessionalPage />
      </ProtectedRoute>
    ),
  },
  {
    path: `${Routes.AitisiSimmetoxis}/${Routes.Application}/${Routes.Meeting}`,
    element: (
      <ProtectedRoute>
        <MeetingsPage />
      </ProtectedRoute>
    ),
  },
  {
    path: `${Routes.AitisiSimmetoxis}/${Routes.Application}/${Routes.ApplicationsWithProfessionals}`,
    element: (
      <ProtectedRoute>
        <ApplicationsWithProsPage />
      </ProtectedRoute>
    ),
  },
  {
    path: `${Routes.AitisiSimmetoxis}/${Routes.Application}/${Routes.Agreement}`,
    element: (
      <ProtectedRoute>
        <AgreementPage />
      </ProtectedRoute>
    ),
  },
  {
    path: `${Routes.AitisiSimmetoxis}/${Routes.Application}/${Routes.WorkCertification}`,
    element: (
      <ProtectedRoute>
        <WorkCertificationPage />
      </ProtectedRoute>
    ),
  },
  { path: "*", element: <PageNotFound /> },
]);

export default function Main() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
