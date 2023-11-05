import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../store/auth/auth.store";

export const ProtectedRoute = () => {
  const token = useAuth.use.accessToken();
  if (!token) return <Navigate to="/account/login" />;
  return <Outlet />;
};
