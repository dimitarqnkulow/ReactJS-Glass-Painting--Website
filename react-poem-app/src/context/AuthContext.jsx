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
  const registerSubmitHandler = ({ email, password, repeatPassword }) => {
    if (password !== repeatPassword) {
      setErr("Passwords must match!");
      throw new Error("Passwords must match!");
    }
    register(email, password, repeatPassword)
      .then((result) => {
        console.log(result);
        navigate(Path.Home);
      })
      .catch((err) => {
        console.log(err.code);
        if (err.code === "auth/email-already-in-use") {
          setErr("Email already exists!");
        } else if (err.code === "auth/weak-password") {
          setErr("Password should be at least 6 characters!");
        }
      });
  };

  const loginSubmitHandler = async ({ email, password }) => {
    try {
      await login(email, password);
      navigate(Path.Home);
    } catch (err) {
      setErr(`Email or password doesn't match!`);
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
    setErr("");
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
