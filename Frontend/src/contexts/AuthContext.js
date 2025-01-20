import { createContext, useState, useContext } from "react";
import { auth, db } from "../config/firebase";
import {
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  getDocs,
  setDoc,
  updateDoc,
  collection,
  doc,
} from "firebase/firestore";

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({});
  const [username, setUsername] = useState(null);
  const [userID, setUserID] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  async function signIn(email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password).then(
        async (userCredential) => {
          const userid = userCredential.user.uid;
          const userRef = collection(db, "users");
          const querySnapshot = await getDocs(userRef);
          const userDoc = querySnapshot.docs.find((doc) => doc.id === userid);
          const currentUser = userDoc.data();
          setUsername(currentUser.username);
          setCurrentUser(currentUser);
          setIsAuthenticated(true);
          setUserID(userid);
          console.log("current user is ", currentUser);
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

  async function register(details, password) {
    try {
      console.log("registering..", details);
      await createUserWithEmailAndPassword(auth, details.email, password).then(
        () => {
          console.log("register Success", details.email, password);
          auth.onAuthStateChanged(async (user) => {
            if (user) {
              console.log(user);
              const userRef = collection(db, "users");
              const userid = user.uid;
              await setDoc(doc(userRef, userid), details);
              setCurrentUser(user);
              setUsername(user.username);
              setIsAuthenticated(true);
            }
          });
        }
      );
      return true;
    } catch (error) {
      console.log("register Error", details.email, details.password);
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
      signOut(auth);
      return false;
    }
  }

  function logoutHandler() {
    setIsAuthenticated(false);
    signOut(auth);
    setUsername("");
    setCurrentUser(null);
  }

  const authContextValues = {
    currentUser,
    isAuthenticated,
    username,
    userID,
    signIn,
    logout: logoutHandler,
    register,
    setCurrentUser,
  };

  return (
    <AuthContext.Provider value={authContextValues}>
      {children}
    </AuthContext.Provider>
  );
}
