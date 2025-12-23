// routes.jsx
import ProtectedRoute from "../components/ProtectedRoute.jsx";
import Layout from "../components/layouts/layout.jsx";
import { lazy } from "react";
import React from "react";

const Home = lazy(() => import("../pages/Homepage/Home.jsx"));
// const Page = lazy(() => import("../pages/contactUs/Page.jsx"));
// const Portfolio = lazy(() => import("../pages/Portfolio/Portfolio.jsx"));
// const Blogs = lazy(() => import("../pages/Blogs/Blogs.jsx"));
// const Services = lazy(() => import("../pages/Services/Services.jsx"));
// const BlogDetail = lazy(() => import("../pages/BlogDetail/BlogDetail.jsx"));
// const BlogDetail2 = lazy(() => import("../pages/BlogDetail2/BlogDetail2.jsx"));
// const ProductShoot = lazy(() => import("../pages/ProductShoot/ProductShoot.jsx"));
// const StudioForRent = lazy(() => import("../pages/StudioForRent/StudioForRent.jsx"));
// const ContentCreation = lazy(() => import("../pages/ContentCreation/ContentCreation.jsx"));
//   const EventShoot = lazy(() => import("../pages/EventShoot/EventShoot.jsx"));
//   const ECommerceShoot = lazy(() => import("../pages/ECommerceShoot/ECommerceShoot.jsx"));
//   const FashionAndModel = lazy(() => import("../pages/FashionAndModel/FashionAndModel.jsx"));
//   const AdFlimsAndCommercialShoots = lazy(() => import("../pages/AdFlimsAndCommercialShoots/AdFlimsAndCommercialShoots.jsx"));
//   const PodcastShoot = lazy(() => import("../pages/PodcastShoot/PodcastShoot.jsx"));
//   const ShortFlimProduction = lazy(() => import("../pages/ShortFlimProduction/ShortFlimProduction.jsx"));
//   const RealEstateProduction = lazy(() => import("../pages/RealEstateProduction/RealEstateProduction.jsx"));
// const LoginPage = lazy(() => import("../pages/Auth/login.jsx"));
// const ComingSoon = lazy(() => import("../pages/ComingSoon/ComingSoon.jsx"));
// const ServiceAreaDehradun = lazy(() => import("../pages/ServiceAreaDehradun/ServiceAreaDehradun.jsx"));
// const ServiceAreaDelhi = lazy(() => import("../pages/ServiceAreaDelhi/ServiceAreaDelhi.jsx"));
// const ServiceAreaNoida = lazy(() => import("../pages/ServiceAreaNodia/ServiceAreaNodia.jsx"));
// const ServiceAreaRishikesh = lazy(() => import("../pages/ServiceAreaRishikesh/ServiceAreaRishikesh.jsx"));
// const ServiceAreaRishi = lazy(() => import("../pages/ServiceAreaRishi/ServiceAreaRishi.jsx"));
// const ServiceAreaGurgaon = lazy(() => import("../pages/ServiceAreaGurgaon/ServiceAreaGurgaon.jsx"));
// const PhotographyCourse = lazy(() => import("../pages/PhotographyCourse/PhotographyCourse.jsx"));
// const PhotographyCourses= lazy(() => import("../../src/pages/PhotographyCourses/PhotographyCourses.jsx"));
// const TermsAndCondition= lazy(() => import("../../src/pages/TermsAndCondition/TermsAndCondition.jsx"));
export const routes = [
  // Public routes
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
    //   { path: "contact-us", element: <Page /> },
    //   { path: "portfolio", element: <Portfolio /> },
    //   { path: "blogs", element: <Blogs /> },
    //   { path: "services", element: <Services /> },
    //   { path: "blogs/BlogDetail", element: <BlogDetail /> },
    //   { path: "blogs/BlogDetail2", element: <BlogDetail2 /> },
      // { path: "portfolio/ProductShoot", element:<ProductShoot /> },
      // { path: "portfolio/ECommerceShoot", element: <ECommerceShoot /> },
      // { path: "portfolio/FashionAndModel", element: <FashionAndModel /> },
      // { path: "portfolio/EventShoot", element: <EventShoot /> },
      // { path: "portfolio/AdFlimsAndCommercialShoots", element: <AdFlimsAndCommercialShoots /> },
      // { path: "portfolio/PodcastShoot", element: <PodcastShoot /> },
      // { path: "portfolio/ShortFlimProduction", element: <ShortFlimProduction /> },
      // { path: "portfolio/RealEstateProduction", element: <RealEstateProduction /> }, 
      // { path: "portfolio/ContentCreation", element: <ContentCreation /> },
      // { path: "portfolio/StudioForRent", element:<StudioForRent/> },
    //   { path: "ComingSoon", element: <ComingSoon/> },
    //                 { path: "ServiceAreaDehradun", element: <ServiceAreaDehradun/> },
    //                 { path: "ServiceAreaDelhi", element: <ServiceAreaDelhi/> },                     
    //                 { path: "ServiceAreaNodia", element: <ServiceAreaNoida/> },
    //                 { path: "ServiceAreaRishikesh", element: <ServiceAreaRishikesh/> },
    //                 { path: "ServiceAreaRishi", element: <ServiceAreaRishi/> },
    //                  { path: "ServiceAreaGurgaon", element: <ServiceAreaGurgaon/> },
    //                  { path: "PhotographyCourse", element: <PhotographyCourse/> },
    //                  { path: "PhotographyCourses", element: <PhotographyCourses/> },
    //                  { path: "TermsAndCondition", element: <TermsAndCondition/> },
                     
                     // In your App.js or main router file
// {path:"/portfolio", element: <Portfolio />},
// { path:"/portfolio/:portfolioId", element:<Portfolio/>},
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
