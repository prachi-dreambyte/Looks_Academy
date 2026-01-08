import React from "react";
import { useForm } from "react-hook-form";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const CreateOurValues = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  /* ================= SUBMIT ================= */
  const onSubmit = async (data) => {
  try {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("icon", data.icon);
    formData.append("description", data.description);
    formData.append("image", data.image[0]);

    await axios.post(
      `${API_BASE_URL}/api/our-values/create`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    toast.success("Our Value created successfully");
    navigate("/admin/our-values");
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Something went wrong";
    toast.error(message);
  }
};


  return (
    <div className="container mt-4">
      <div className="card p-4 shadow">
        <h4 className="mb-3">Create Our Value</h4>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Image */}
          <div className="mb-3">
            <label className="form-label">Image</label>
            <input
              type="file"
              className="form-control"
              accept="image/*"
              {...register("image", {
                required: "Image is required",
              })}
            />
            {errors.image && (
              <small className="text-danger">
                {errors.image.message}
              </small>
            )}
          </div>

          {/* Icon */}
          <div className="mb-3">
            <label className="form-label">
              Icon (emoji or class name)
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="✨ or fa-solid fa-star"
              {...register("icon", {
                required: "Icon is required",
              })}
            />
            {errors.icon && (
              <small className="text-danger">
                {errors.icon.message}
              </small>
            )}
          </div>

          {/* Title */}
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter title"
              {...register("title", {
                required: "Title is required",
              })}
            />
            {errors.title && (
              <small className="text-danger">
                {errors.title.message}
              </small>
            )}
          </div>

          {/* Description (CKEditor) */}
          <div className="mb-3">
            <label className="form-label">Description</label>
            <CKEditor
              editor={ClassicEditor}
              onChange={(event, editor) => {
                const data = editor.getData();
                setValue("description", data, {
                  shouldValidate: true,
                });
              }}
            />
            {errors.description && (
              <small className="text-danger">
                Description is required
              </small>
            )}
          </div>

          <button type="submit" className="btn btn-primary">
            Save Value
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateOurValues;
