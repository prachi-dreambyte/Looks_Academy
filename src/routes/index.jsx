// routes.jsx
import ProtectedRoute from "../components/ProtectedRoute.jsx";
import Layout from "../components/layouts/layout.jsx";
import { lazy } from "react";
import React from "react";
import BlogDetail from "../pages/BlogDetails/BlogDetails.jsx";

const Home = lazy(() => import("../pages/Homepage/Home.jsx"));
const Blogs = lazy(() => import("../pages/Blogs/Blogs.jsx"));
const AboutUs = lazy(() => import("../pages/AboutUs/AboutUs.jsx"));
const ContactUs = lazy(() => import("../pages/ContactUs/ContactUs.jsx"));
const Gallery = lazy(() => import("../pages/Gallery/Gallery.jsx"));
const Courses = lazy(() => import("../pages/Courses/Courses.jsx"));
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
       { path: "BlogsDetail", element: <BlogDetail /> },
      { path: "AboutUs", element: <AboutUs /> },
      {path: "ContactUs", element: <ContactUs/>},
       {path: "Gallery", element: <Gallery/>},
       {path: "Courses", element: <Courses/>},
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
