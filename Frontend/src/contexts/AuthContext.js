import { createContext, useState, useEffect, useContext } from "react";
import { auth } from "../config/firebase";
import {
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Routes } from "react-router-dom";

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [username, setUsername] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  async function signIn(email, password) {
    try {
      console.log("signIn", email, password);
      await signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          console.log("signIn Success", email, password);

          setCurrentUser(userCredential.user);
          setUsername(userCredential.user.email);
          setIsAuthenticated(true);
          console.log(userCredential.user);
        }
      );
      return true;
    } catch (error) {
      console.log("signIn Error", email, password);
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
      signOut(auth);
      return false;
    }
  }

  async function register(email, password) {
    try {
      console.log("register", email, password);
      await createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          console.log("register Success", email, password);

          setCurrentUser(userCredential.user);
          setUsername(userCredential.user.email);
          setIsAuthenticated(true);
          console.log(userCredential.user);
        }
      );
      return true;
    } catch (error) {
      console.log("register Error", email, password);
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
      signOut(auth);
      return false;
    }
  }

  function logoutHandler() {
    signOut(auth);
    setUsername(null);
    setIsAuthenticated(false);
  }

  const authContextValues = {
    currentUser,
    isAuthenticated,
    username,
    signIn,
    logout: logoutHandler,
    register,
  };

  return (
    <AuthContext.Provider value={authContextValues}>
      {children}
    </AuthContext.Provider>
  );
}
