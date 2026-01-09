import React, { useState } from "react";
import styles from "../../../../assets/styles/blogs/BlogBannerForm.module.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const BlogBannerForm = () => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      toast.error("Please select a banner image");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    try {
      setLoading(true);

      const res = await fetch(
        `${API_BASE_URL}/api/blog-banner/create`,
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.message);
      }

      toast.success("Blog banner created successfully");

      navigate("/admin/blogs-banner");
    } catch {
      toast.error("Failed to create blog banner");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h2 className={styles.title}>Create Blog Banner</h2>
        <p className={styles.subtitle}>
          Upload a banner image for the blog section
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          {preview && (
            <div className={styles.previewBox}>
              <img src={preview} alt="Blog Banner Preview" />
            </div>
          )}

          <label className={styles.uploadBox}>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                setImage(file);
                setPreview(URL.createObjectURL(file));
              }}
            />
            <span>
              {image ? image.name : "Click or drag image here"}
            </span>
          </label>

          <button
            type="submit"
            className={styles.submitBtn}
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Banner"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogBannerForm;
