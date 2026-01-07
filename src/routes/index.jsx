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
import AllBanner from "../components/admindashboard/banner/index.jsx";
import AddBanner from "../components/admindashboard/banner/add-new/index.jsx";
import AllOurStory from "../components/admindashboard/Our_story/index.jsx";
import AddOurStory from "../components/admindashboard/Our_story/add-new/index.jsx";
import WhyJoinUs from "../components/admindashboard/why_join_us/index.jsx";
import AddWhyJoinUs from "../components/admindashboard/why_join_us/add-new/index.jsx";
import AllGallery from "../components/admindashboard/connect_with_us/index.jsx";
import AddGallery from "../components/admindashboard/connect_with_us/add-new/index.jsx";
import LooksAllGallery from "../components/admindashboard/gallery/index.jsx";
import LooksAddGallery from "../components/admindashboard/gallery/add-new/index.jsx";
import LooksEditGallery from "../components/admindashboard/gallery/[id]/index.jsx";
import AllGalleryBanner from "../components/admindashboard/gallery-banner/index.jsx";
import GalleryBannerForm from "../components/admindashboard/gallery-banner/add-new/index.jsx";
import AllCourses from "../components/admindashboard/courses/index.jsx";
import CreateCourse from "../components/admindashboard/courses/add-new/index.jsx";
import EditCourse from "../components/admindashboard/courses/[id]/index.jsx";
import CoursesGalleryBanner from "../components/admindashboard/courses-banner/index.jsx";
import CoursesGalleryBannerForm from "../components/admindashboard/courses-banner/add-new/index.jsx";
import AllBrands from "../components/admindashboard/brandslogo/index.jsx";
import BrandForm from "../components/admindashboard/brandslogo/add-new/index.jsx";

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

          // BLOG ROUTES
          { path: "blogs", element: <AllBlogs /> },
          { path: "blogs/add-new", element: <CreateBlog /> },
          { path: "blogs/edit/:id", element: <EditBlog /> },

          // BANNER ROUTES
          { path: "banner", element: <AllBanner /> },
          { path: "banner/add-new", element: <AddBanner /> },

          /* OUR STORY ROUTES */
          { path: "our-story", element: <AllOurStory /> },
          { path: "our-story/add-new", element: <AddOurStory /> },

          /* WHY JOIN US ROUTES */
          { path: "why-join-us", element: <WhyJoinUs /> },
          {
            path: "why-join-us/add-new",
            element: <AddWhyJoinUs />, // ✅ CREATE FORM
          },

          // Connect with us

          { path: "connect-with-us", element: <AllGallery /> },
          { path: "connect-with-us/add-new", element: <AddGallery /> },

          //looks gallery 
          { path: "gallery", element: <LooksAllGallery /> },
          { path: "gallery/add-new", element: <LooksAddGallery /> },
          { path: "gallery/edit/:id", element: <LooksEditGallery /> }, 
          { path: "gallerybanner", element: <AllGalleryBanner /> },
          { path: "gallerybanner/add-new", element: <GalleryBannerForm /> },

          // Courses routes
          { path: "courses", element: <AllCourses /> },
          { path: "courses/add-new", element: <CreateCourse /> },
          { path: "courses/edit/:id", element: <EditCourse /> },
          { path: "coursesbanner", element: <CoursesGalleryBanner /> },
          { path: "coursesbanner/add-new", element: <CoursesGalleryBannerForm /> },

          //brand routes
          { path: "brands", element: <AllBrands /> },
          { path: "brands/add-new", element: <BrandForm /> },

        ],
      },
    ],
  },
];
