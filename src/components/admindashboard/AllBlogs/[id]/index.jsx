import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import styles from "../../../../style/blogs/CreateBlog.module.css";

const EditBlog = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [content1, setContent1] = useState("");
  const [content2, setContent2] = useState("");
  const [loading, setLoading] = useState(true);

  // ✅ CHANGE HERE (ENV BASE URL)
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  /* ---------------- FETCH BLOG ---------------- */
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(
          `${API_BASE_URL}/api/blogs/get-blog/${id}`
        );

        const blog = res.data.data;

        reset({
          title: blog.title,
          shortPara: blog.shortPara,
        });

        setContent1(blog.content1 || "");
        setContent2(blog.content2 || "");
      } catch (error) {
        console.error(error);
        toast.error("Failed to load blog");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id, reset, API_BASE_URL]);

  /* ---------------- UPDATE BLOG ---------------- */
  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      formData.append("title", data.title);
      formData.append("shortPara", data.shortPara);
      formData.append("content1", content1);
      formData.append("content2", content2);

      if (data.mainImage?.[0]) {
        formData.append("mainImage", data.mainImage[0]);
      }

      if (data.gallery?.length > 0) {
        Array.from(data.gallery).forEach((file) => {
          formData.append("gallery", file);
        });
      }

      await axios.put(
        `${API_BASE_URL}/api/blogs/update-blog/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // ✅ Success toast
      toast.success("Blog updated successfully!");

      // NAVIGATE
      setTimeout(() => {
        navigate("/admin/blogs");
      }, 1500);

    } catch (error) {
      console.error(error);
      toast.error("Failed to update blog");
    }
  };

  if (loading) return <p style={{ padding: 20 }}>Loading...</p>;

  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
      >
        <h2 className={styles.heading}>Edit Blog</h2>

        {/* TITLE */}
        <div className={styles.field}>
          <label>Blog Title</label>
          <input
            type="text"
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && (
            <p className={styles.error}>{errors.title.message}</p>
          )}
        </div>

        {/* SHORT PARA */}
        <div className={styles.field}>
          <label>Short Paragraph</label>
          <textarea
            {...register("shortPara", {
              required: "Short paragraph is required",
            })}
          />
          {errors.shortPara && (
            <p className={styles.error}>
              {errors.shortPara.message}
            </p>
          )}
        </div>

        {/* MAIN IMAGE */}
        <div className={styles.field}>
          <label>Main Image (optional)</label>
          <input
            type="file"
            accept="image/*"
            {...register("mainImage")}
          />
        </div>

        {/* CONTENT 1 */}
        <div className={styles.field}>
          <label>Blog Content</label>
          <CKEditor
            editor={ClassicEditor}
            data={content1}
            onChange={(e, editor) =>
              setContent1(editor.getData())
            }
          />
        </div>

        {/* GALLERY */}
        <div className={styles.field}>
          <label>Gallery Images (optional)</label>
          <input
            type="file"
            accept="image/*"
            multiple
            {...register("gallery")}
          />
        </div>

        {/* CONTENT 2 */}
        <div className={styles.field}>
          <label>Additional Content</label>
          <CKEditor
            editor={ClassicEditor}
            data={content2}
            onChange={(e, editor) =>
              setContent2(editor.getData())
            }
          />
        </div>

        <button className={styles.btn} type="submit">
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
