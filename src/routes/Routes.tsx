import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./../pages/LoginPage";
import { HomePage } from "./../pages/HomePage";
import { ProtectedRoute } from "./ProtectedRoute";
import { AccountPage } from "../pages/AccountPage";

export const Routes = () => {
  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [{ path: "/account", element: <AccountPage /> }],
    },
  ];
  const routesForNotAuthenticatedOnly = [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/account/login",
      element: <LoginPage />,
    },
  ];
  const router = createBrowserRouter([
    ...routesForNotAuthenticatedOnly,
    ...routesForAuthenticatedOnly,
  ]);
  return <RouterProvider router={router} />;
};
