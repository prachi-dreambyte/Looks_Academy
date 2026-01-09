import React, { useState } from "react";
import styles from "../../../../assets/styles/homebanner/AddBanner.module.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddBanner = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const handleImageChange = (e) => {
    setImages(Array.from(e.target.files));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (images.length === 0) {
      toast.error("Please select at least one banner image");
      return;
    }

    const formData = new FormData();
    images.forEach((img) => formData.append("banners", img));

    try {
      setLoading(true);

      const res = await fetch(`${API_BASE_URL}/api/banner/add`, {
        method: "POST",
        body: formData,
      });

      const result = await res.json();

      if (res.ok && result.success) {
        toast.success("Banner added successfully");
        setImages([]);
        navigate("/admin/banner");
      } else {
        toast.error(result.message || "Failed to add banner");
      }
    } catch {
      toast.error("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2>Add Home Page Banner</h2>
        <p>Upload high-quality banner images for homepage</p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.uploadBox}>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />
          <span>📤 Click or Drag images here</span>
        </label>

        {images.length > 0 && (
          <div className={styles.previewGrid}>
            {images.map((img, index) => (
              <div key={index} className={styles.previewCard}>
                <img src={URL.createObjectURL(img)} alt="preview" />
              </div>
            ))}
          </div>
        )}

        <button type="submit" className={styles.btn} disabled={loading}>
          {loading ? "Uploading..." : "Add Banner"}
        </button>
      </form>
    </div>
  );
};

export default AddBanner;
