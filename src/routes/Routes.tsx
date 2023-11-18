import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { Layout } from "../layout/Layout";
import { lazy } from "react";
import { Loadable } from "../components/Loadable/Loadable";
import { ErrorPage } from "@/pages/ErrorPage";
import { CollectionLayout } from "@/layout/CollectionLayout";

const HomePage = Loadable(lazy(() => import("../pages/HomePage")));
const AccountPage = Loadable(lazy(() => import("../pages/AccountPage")));
const RegisterPage = Loadable(lazy(() => import("../pages/RegisterPage")));
const LoginPage = Loadable(lazy(() => import("../pages/LoginPage")));
const KeyboardsCatalogPage = Loadable(
  lazy(() => import("../pages/keyboards/KeyboardsCatalogPage")),
);
const KeycapsCatalogPage = Loadable(
  lazy(() => import("../pages/keycaps/KeycapsCatalogPage")),
);
const SwitchesCatalogPage = Loadable(
  lazy(() => import("../pages/switches/SwitchesCatalogPage")),
);
const KeyboardPage = Loadable(
  lazy(() => import("../pages/keyboards/[id]/KeyboardPage")),
);
const KeycapPage = Loadable(
  lazy(() => import("../pages/keycaps/[id]/KeycapPage")),
);
const SwitchesPage = Loadable(
  lazy(() => import("../pages/switches/[id]/SwitchesPage")),
);

export const Routes = () => {
  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />,
      errorElement: <ErrorPage />,
      children: [{ path: "/account", element: <AccountPage /> }],
    },
  ];
  const routesForNotAuthenticated = [
    {
      path: "/home",
      element: <HomePage />,
    },

    {
      path: "/account/login",
      element: <LoginPage />,
    },
    {
      path: "/account/register",
      element: <RegisterPage />,
    },
    {
      path: "/collections",
      element: <CollectionLayout />,
      children: [
        {
          path: "keyboards",
          element: <KeyboardsCatalogPage />,
          children: [],
        },
        { path: "keycaps", element: <KeycapsCatalogPage /> },
        { path: "switches", element: <SwitchesCatalogPage /> },
      ],
    },
    { path: "/collections/keyboards/:id", element: <KeyboardPage /> },
    { path: "/collections/keycaps/:id", element: <KeycapPage /> },
    { path: "/collections/switches/:id", element: <SwitchesPage /> },
  ];
  const routes = {
    path: "/",
    element: <Layout />,
    children: [...routesForNotAuthenticated, ...routesForAuthenticatedOnly],
  };

  const router = createBrowserRouter([routes]);
  return <RouterProvider router={router} />;
};
