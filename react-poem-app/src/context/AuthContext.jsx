import { createContext, useContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../config/firebase-config";
import Path from "../utils/paths";
import { login, logout, register } from "../services/authServices";

const AuthContext = createContext();
export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [err, setErr] = useState("");

  const navigate = useNavigate();

  const registerSubmitHandler = async ({ email, password, repeatPassword }) => {
    try {
      await register(email, password, repeatPassword);
      navigate(Path.Home);
    } catch (err) {
      setErr(err);
      navigate(Path.Register);
    }
  };

  const loginSubmitHandler = async ({ email, password }) => {
    try {
      await login(email, password);
      navigate(Path.Home);
    } catch (err) {
      console.log(err);
      navigate(Path.Login);
    }
  };
  const logoutHandler = async () => {
    try {
      await logout();
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => setUser(user));
    return unsubscribe;
  }, []);

  const values = {
    err,
    user,
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    isAuthenticated: !!user?.accessToken,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}
