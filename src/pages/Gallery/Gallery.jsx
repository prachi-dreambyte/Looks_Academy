import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../style/SalonGallery.module.css";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const CATEGORY_OPTIONS = [
  "All",
  "Hair Treatment",
  "Makeup",
  "Hair Styling",
  "Skin Care",
  "Nails",
];

const SalonGallery = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [loading, setLoading] = useState(false);

  // 🔥 Banner state
  const [banner, setBanner] = useState(null);
  const [bannerLoading, setBannerLoading] = useState(true);

  /* 🔹 FETCH GALLERY */
  const fetchGallery = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${API_BASE_URL}/api/looksgallery/get-all`
      );
      setGalleryImages(res.data.data || []);
    } catch (error) {
      console.error("Gallery fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  /* 🔹 FETCH BANNER */
  const fetchBanner = async () => {
    try {
      const res = await axios.get(
        `${API_BASE_URL}/api/gallery-banner/get`
      );
      if (res.data.success && res.data.data) {
        setBanner(res.data.data);
      }
    } catch (error) {
      console.error("Banner fetch error:", error);
    } finally {
      setBannerLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery();
    fetchBanner();
  }, []);

  /* 🔹 FILTER LOGIC */
  const filteredImages =
    activeFilter === "All"
      ? galleryImages
      : galleryImages.filter(
          (img) =>
            img.category?.toLowerCase() ===
            activeFilter.toLowerCase()
        );

  return (
    <>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.topBarLine}></div>
      </div>

      {/* 🔥 DYNAMIC BANNER */}
      <section className={styles.topBanner}>
        {bannerLoading ? (
          <div className="text-center py-5">Loading banner...</div>
        ) : banner ? (
          <img
            src={`${API_BASE_URL}/${banner.image?.replace(/\\/g, "/")}`}
            alt="Gallery Banner"
          />
        ) : (
          <img src="/image/gallery.webp" alt="Gallery Banner" />
        )}
      </section>

      {/* Filters */}
      <div className={styles.filterWrapper}>
        <div className={styles.filterContainer}>
          {CATEGORY_OPTIONS.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterButton} ${
                activeFilter === cat ? styles.active : ""
              }`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <div className={styles.gallerySection}>
        <div className={styles.galleryGrid}>
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : filteredImages.length === 0 ? (
            <p className="text-center">No Images Found</p>
          ) : (
            filteredImages.map((image) => (
              <div
                key={image._id}
                className={styles.galleryItem}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={`${API_BASE_URL}/${image.image?.replace(
                    /\\/g,
                    "/"
                  )}`}
                  alt={image.title}
                  loading="lazy"
                />
                <div className={styles.goldAccent}></div>
                <div className={styles.imageCaption}>
                  {image.title}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Footer */}
      <div className={styles.footerAccent}>
        <div className={styles.footerLine}></div>
        <p className={styles.footerText}>
          Crafting Beauty Professionals
        </p>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedImage(null)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.modalClose}
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img
              src={`${API_BASE_URL}/${selectedImage.image?.replace(
                /\\/g,
                "/"
              )}`}
              alt={selectedImage.title}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SalonGallery;
