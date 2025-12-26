// routes.jsx
import ProtectedRoute from "../components/ProtectedRoute.jsx";
import Layout from "../components/layouts/layout.jsx";
import { lazy } from "react";
import React from "react";

const Home = lazy(() => import("../pages/Homepage/Home.jsx"));
const Blogs = lazy(() => import("../pages/Blogs/Blogs.jsx"));
const AboutUs = lazy(() => import("../pages/AboutUs/AboutUs.jsx"));
export const routes = [
  // Public routes
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
    //   { path: "contact-us", element: <Page /> },
    //   { path: "portfolio", element: <Portfolio /> },
      { path: "blogs", element: <Blogs /> },
      { path: "AboutUs", element: <AboutUs /> },
    ],
  },
  // ✅ Protected Admin routes PhotographyCourse
  {
    element: <ProtectedRoute />, // guard wrapper
    // children: [
    //   {
    //     path: "/dashboard",
    //     element: <AdminLayout />,
    //     children: [
    //       { index: true, element: <Dashboard /> },
    //       { path: "blogs", element: <AllBlogs /> },
    //       { path: "blogs/add", element: <AddBlog /> },
    //       { path: "blogs/edit/:slug", element: <EditBlog /> },
    //     ],
    //   },
    // ],
  },

  // Public login route
];
