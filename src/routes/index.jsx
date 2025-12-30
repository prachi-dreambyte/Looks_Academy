import { lazy } from "react";
import PublicLayout from "../components/layouts/PublicLayout.jsx";
import AdminLayout from "../components/layouts/AdminLayout.jsx";
import ProtectedRoute from "../components/ProtectedRoute.jsx";

import Login from "../pages/auth/Login.jsx";
import CreateAccount from "../pages/auth/CreateAccount.jsx";
import AdminDashboard from "../pages/auth/AdminDashboard.jsx";
import BlogDetail from "../pages/BlogDetails/BlogDetails.jsx";
import ContactUs from "../pages/ContactUs/ContactUs.jsx";
import Gallery from "../pages/Gallery/Gallery.jsx";
import Courses from "../pages/Courses/Courses.jsx";
import AllBlogs from "../components/admindashboard/AllBlogs/index.jsx";
import CreateBlog from "../components/admindashboard/AllBlogs/add-new/index.jsx";
import EditBlog from "../components/admindashboard/AllBlogs/[id]/index.jsx";
import SalonBlog from "../pages/Blogs/Blogs.jsx";
import EnrollNow from "../pages/EnrollNow/EnrollNow.jsx";

const Home = lazy(() => import("../pages/Homepage/Home.jsx"));
const Blogs = lazy(() => import("../pages/Blogs/Blogs.jsx"));
const AboutUs = lazy(() => import("../pages/AboutUs/AboutUs.jsx"));
export const routes = [
  /* ---------------- PUBLIC ROUTES ---------------- */
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "Blogs", element: <SalonBlog /> },
      { path: "blogs/:id", element: <BlogDetail /> }, // ✅ FIXED
      { path: "login", element: <Login /> },
      { path: "createaccount", element: <CreateAccount /> },
      { path: "BlogsDetail", element: <BlogDetail /> },
      { path: "AboutUs", element: <AboutUs /> },
      { path: "ContactUs", element: <ContactUs /> },
      { path: "Gallery", element: <Gallery /> },
      { path: "Courses", element: <Courses /> },
      { path: "EnrollNow", element: <EnrollNow /> },
    ],
  },

  /* ---------------- ADMIN ROUTES ---------------- */
  {
    path: "/admin",
    element: <ProtectedRoute />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          { index: true, element: <AdminDashboard /> },
          { path: "dashboard", element: <AdminDashboard /> },
          { path: "blogs", element: <AllBlogs /> },
          { path: "add-new", element: <CreateBlog /> },
          { path: "blogs/edit/:id", element: <EditBlog /> }, // ✅ FIXED
        ],
      },
    ],
  },
];
