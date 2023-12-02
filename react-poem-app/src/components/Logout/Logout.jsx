import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import Path from "../../lib/paths";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();
  const { logoutHandler } = useAuth();
  useEffect(() => {
    logoutHandler();
    navigate(Path.Home);
  }, []);
}
