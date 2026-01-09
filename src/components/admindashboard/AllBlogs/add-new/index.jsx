import React from "react";
import { useForm } from "react-hook-form";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import styles from "../../../../assets/styles/blogs/CreateBlog.module.css";

const CreateBlog = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  // ✅ CHANGE HERE (ENV BASE URL)
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      // TEXT FIELDS
      formData.append("title", data.title);
      formData.append("shortPara", data.shortPara);
      formData.append("content1", data.content1 || "");
      formData.append("content2", data.content2 || "");

      // MAIN IMAGE
      if (data.mainImage && data.mainImage[0]) {
        formData.append("mainImage", data.mainImage[0]);
      }

      // GALLERY IMAGES
      if (data.gallery && data.gallery.length > 0) {
        Array.from(data.gallery).forEach((file) => {
          formData.append("gallery", file);
        });
      }

      // 🔥 API CALL (FIXED)
      await axios.post(
        `${API_BASE_URL}/api/blogs/create-blog`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            // Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      // ✅ Success toast
      toast.success("Blog published successfully!");

      // RESET FORM
      reset();

      // NAVIGATE
      setTimeout(() => {
        navigate("/admin/blogs");
      }, 1500);

    } catch (error) {
      console.error(error);

      // ❌ Error toast
      toast.error(
        error.response?.data?.message || "Failed to create blog"
      );
    }
  };

  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
      >
        <h2 className={styles.heading}>Create Blog</h2>

        {/* BLOG TITLE */}
        <div className={styles.field}>
          <label>Blog Title</label>
          <input
            type="text"
            placeholder="Enter blog title"
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && (
            <p className={styles.error}>{errors.title.message}</p>
          )}
        </div>

        {/* SHORT PARAGRAPH */}
        <div className={styles.field}>
          <label>Short Paragraph</label>
          <textarea
            placeholder="Short description"
            {...register("shortPara", {
              required: "Paragraph is required",
            })}
          />
          {errors.shortPara && (
            <p className={styles.error}>{errors.shortPara.message}</p>
          )}
        </div>

        {/* MAIN IMAGE */}
        <div className={styles.field}>
          <label>Main Image</label>
          <input
            type="file"
            accept="image/*"
            {...register("mainImage")}
          />
        </div>

        {/* BLOG CONTENT */}
        <div className={styles.field}>
          <label>Blog Content</label>
          <CKEditor
            editor={ClassicEditor}
            onChange={(event, editor) => {
              setValue("content1", editor.getData());
            }}
          />
        </div>

        {/* GALLERY IMAGES */}
        <div className={styles.field}>
          <label>Gallery Images</label>
          <input
            type="file"
            accept="image/*"
            multiple
            {...register("gallery")}
          />
        </div>

        {/* ADDITIONAL CONTENT */}
        <div className={styles.field}>
          <label>Additional Content</label>
          <CKEditor
            editor={ClassicEditor}
            onChange={(event, editor) => {
              setValue("content2", editor.getData());
            }}
          />
        </div>

        {/* SUBMIT */}
        <button className={styles.btn} type="submit">
          Publish Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
