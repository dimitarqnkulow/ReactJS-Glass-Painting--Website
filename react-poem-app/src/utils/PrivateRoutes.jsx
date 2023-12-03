import { Outlet, Navigate } from "react-router-dom";
import Path from "./paths";
import { useAuth } from "../context/AuthContext";
const PrivateRoute = () => {
  const { user } = useAuth();
  return user.accessToken ? <Outlet /> : <Navigate to={Path.Login} />;
};

export default PrivateRoute;
