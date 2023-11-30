import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({ children }) {
  const [user, setUser] = useState();

  const registerSubmitHandler = (values) => {
    console.log(values);
  };

  const loginSubmitHandler = (values) => {
    console.log(values);
  };

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}
