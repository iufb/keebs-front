import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../store/auth/auth.store";

export const ProtectedRoute = () => {
  const token = useAuth.getState().accessToken;

  if (!token) return <Navigate to="/account/login" />;
  return <Outlet />;
};
