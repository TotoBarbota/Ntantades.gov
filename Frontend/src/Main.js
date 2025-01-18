import App from "./Pages/WelcomePage/App";
import NavBar from "./Components/NavBar/NavBar";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
const router = createBrowserRouter([
  { path: Routes.Home, element: <App /> },
  {
    path: Routes.Ntantades,
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
  },
  { path: Routes.Login, element: <LoginPage /> },
  { path: Routes.LoginVerification, element: <LoginVerificationPage /> },
  { path: Routes.Register, element: <RegisterPage /> },
  {
    path: `${Routes.AitisiSimmetoxis}/${Routes.Application}`,
    element: (
      <ProtectedRoute>
        <ApplicationPage />
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
    path: `${Routes.AitisiSimmetoxis}/${Routes.Application}/${Routes.SearchProfessional}`,
    element: (
      <ProtectedRoute>
        <SearchProfessionalPage />
      </ProtectedRoute>
    ),
  },
  {
    path: `${Routes.Application}/${Routes.SearchProfessional}/${Routes.Professional}`,
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
  { path: "*", element: <PageNotFound /> },
]);

export default function Main() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />{" "}
    </AuthProvider>
  );
}
