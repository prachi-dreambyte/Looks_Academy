import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../../style/AdminDashboard.module.css";

const AdminDashboard = () => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const [stats, setStats] = useState({
    blogs: 0,
    homeBanners: 0,
    courses: 0,
    courseGalleryBanners: 0,
    galleryBanners: 0,
    gallery: 0,
    looksGallery: 0,
    ourStory: 0,
    whyJoinUs: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  /* ✅ SAFE COUNT HANDLER (FIXED FOR ALL APIs) */
  const safeCount = (res) => {
    if (!res || !res.data) return 0;

    // Case 1: { count: number, data: [] }
    if (typeof res.data.count === "number") {
      return res.data.count;
    }

    // Case 2: { data: [] }
    if (Array.isArray(res.data.data)) {
      return res.data.data.length;
    }

    // Case 3: direct array []
    if (Array.isArray(res.data)) {
      return res.data.length;
    }

    return 0;
  };

  const fetchDashboardStats = async () => {
    try {
      setLoading(true);

      const [
        blogs,
        homeBanners,
        courses,
        courseGalleryBanners,
        galleryBanners,
        gallery,
        looksGallery,
        ourStory,
        whyJoinUs,
      ] = await Promise.all([
        axios.get(`${API_BASE_URL}/api/blogs/get-all-blogs`),
        axios.get(`${API_BASE_URL}/api/banner/home`),
        axios.get(`${API_BASE_URL}/api/courses/get-all-courses`),
        axios.get(`${API_BASE_URL}/api/courses-gallery-banner/get`),
        axios.get(`${API_BASE_URL}/api/gallery-banner/get`),
        axios.get(`${API_BASE_URL}/api/gallery/get-all-gallery`),
        axios.get(`${API_BASE_URL}/api/looksgallery/get-all`),
        axios.get(`${API_BASE_URL}/api/our-story`),
        axios.get(`${API_BASE_URL}/api/why-join-us`),
      ]);

      setStats({
        blogs: safeCount(blogs),
        homeBanners: safeCount(homeBanners),
        courses: safeCount(courses),
        courseGalleryBanners: safeCount(courseGalleryBanners),
        galleryBanners: safeCount(galleryBanners),
        gallery: safeCount(gallery),
        looksGallery: safeCount(looksGallery),
        ourStory: safeCount(ourStory),
        whyJoinUs: safeCount(whyJoinUs),
      });
    } catch (error) {
      console.error("Dashboard API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h3 className={styles.loading}>Loading Dashboard...</h3>;
  }

  return (
    <>
      {/* HEADER */}
      <div className={styles.header}>
        <div>
          <h1>Salon Admin Dashboard</h1>
          <span className={styles.subText}>
            Live Website Content Overview
          </span>
        </div>

        <div className={styles.todayBox}>
          {new Date().toDateString()}
        </div>
      </div>

      {/* DASHBOARD CARDS */}
      <div className={styles.cards}>
        <Card title="Home Banners" value={stats.homeBanners} />
         <Card title="Our Story Sections" value={stats.ourStory} />
        <Card title="Why Join Us" value={stats.whyJoinUs} />
        <Card title="Gallery Images Banner" value={stats.gallery} />
        <Card title="Looks Gallery" value={stats.looksGallery} />
        <Card title="Courses" value={stats.courses} />
         <Card title="Blogs" value={stats.blogs} />
       
      </div>

      {/* EXTRA INFO */}
      <div className={styles.extraSection}>
        <div className={styles.infoCard}>
          <h4>System Status</h4>
          <p className={styles.active}>All APIs Running</p>
        </div>

        <div className={styles.infoCard}>
          <h4>Admin Login</h4>
          <p>{new Date().toLocaleString()}</p>
        </div>
      </div>
    </>
  );
};

/* 🔹 REUSABLE CARD COMPONENT */
const Card = ({ title, value }) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{value}</p>
      <small>Total Records</small>
    </div>
  );
};

export default AdminDashboard;
