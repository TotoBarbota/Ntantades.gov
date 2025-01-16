import { useContext } from "react";
import { AuthContext, useAuth } from "./AuthContext"; // Adjust the path as necessary
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const authContext = useAuth();
  if (!authContext.isAuthenticated) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
}
