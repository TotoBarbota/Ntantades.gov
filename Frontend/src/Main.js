import App from "./Pages/WelcomePage/App";
import NavBar from "./Components/NavBar/NavBar";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Routes } from "./routes";
import LoginPage from "./Pages/Login/LoginPage";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import LoginVerificationPage from "./Pages/Login/LoginVerificationPage";
import ProtectedRoute from "./contexts/ProtectedRoute";
import AuthProvider from "./contexts/AuthContext";
import RegisterPage from "./Pages/Login/RegisterPage";

const router = createBrowserRouter([
  { path: Routes.Home, element: <App /> },
  { path: Routes.Login, element: <LoginPage /> },
  { path: Routes.LoginVerification, element: <LoginVerificationPage /> },
  {
    path: Routes.Ntantades,
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
  },
  { path: Routes.Register, element: <RegisterPage /> },
  { path: "*", element: <PageNotFound /> },
]);

export default function Main() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />{" "}
    </AuthProvider>
  );
}
