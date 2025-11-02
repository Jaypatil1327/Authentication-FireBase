import { createContext, useEffect, useState } from "react";
import { auth } from "./firebaseConfig";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { Navigate } from "react-router";

export const GlobalContext = createContext();

export default function GlobalFunc({ children }) {
  const [user, setUser] = useState(null);

  const [login, setLogin] = useState({
    mail: "",
    password: "",
  });

  const [register, SaveInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(function () {
    const AuthState = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      AuthState();
    };
  }, []);

  function registerUser() {
    return createUserWithEmailAndPassword(
      auth,
      register.email,
      register.password
    );
  }

  function validateUser() {
    return signInWithEmailAndPassword(auth, login.mail, login.password);
  }

  function handleLogOut() {
    return signOut(auth);
  }
  if (user) <Navigate to={"/profile"}></Navigate>;

  return (
    <GlobalContext.Provider
      value={{
        register,
        SaveInfo,
        registerUser,
        user,
        setUser,
        login,
        setLogin,
        validateUser,
        handleLogOut,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
