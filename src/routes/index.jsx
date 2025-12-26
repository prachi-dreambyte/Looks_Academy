import { lazy } from "react";
import PublicLayout from "../components/layouts/PublicLayout.jsx";
import AdminLayout from "../components/layouts/AdminLayout.jsx";
import ProtectedRoute from "../components/ProtectedRoute.jsx";

import Login from "../pages/auth/Login.jsx";
import CreateAccount from "../pages/auth/CreateAccount.jsx";
import AdminDashboard from "../pages/auth/AdminDashboard.jsx";
import BlogDetail from "../pages/BlogDetails/BlogDetails.jsx";

const Home = lazy(() => import("../pages/Homepage/Home.jsx"));
const Blogs = lazy(() => import("../pages/Blogs/Blogs.jsx"));
const AboutUs = lazy(() => import("../pages/AboutUs/AboutUs.jsx"));

export const routes = [
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "blogs", element: <Blogs /> },
      { path: "blogs-detail", element: <BlogDetail /> },
      { path: "aboutus", element: <AboutUs /> },
      { path: "login", element: <Login /> },
      { path: "createaccount", element: <CreateAccount /> },
    ],
  },

  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          { path: "/admin-dashboard", element: <AdminDashboard /> },
        ],
      },
    ],
  },
];
