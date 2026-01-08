import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const EditOurValues = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [previewImage, setPreviewImage] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  /* ================= FETCH VALUE ================= */
  useEffect(() => {
    const fetchValue = async () => {
      try {
        const res = await axios.get(
          `${API_BASE_URL}/api/our-values/get/${id}`
        );

        if (res.data.success) {
          const value = res.data.data;

          setValue("title", value.title);
          setValue("icon", value.icon);
          setValue("description", value.description);
          setPreviewImage(`${API_BASE_URL}/${value.image}`);
        } else {
          toast.error("Value not found");
        }
      } catch (error) {
        toast.error("Failed to load value");
      } finally {
        setLoading(false);
      }
    };

    fetchValue();
  }, [id, setValue]);

  /* ================= UPDATE ================= */
  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("icon", data.icon);
      formData.append("description", data.description);

      // image is optional on edit
      if (data.image?.length > 0) {
        formData.append("image", data.image[0]);
      }

      const res = await axios.put(
        `${API_BASE_URL}/api/our-values/update/${id}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (res.data.success) {
        toast.success("Our Value updated successfully");
        navigate("/admin/our-values");
      } else {
        toast.error("Update failed");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow">
        <h4 className="mb-3">Edit Our Value</h4>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Image */}
          <div className="mb-3">
            <label className="form-label">Image</label>
            <input
              type="file"
              className="form-control"
              accept="image/*"
              {...register("image")}
            />

            {previewImage && (
              <div className="mt-2">
                <img
                  src={previewImage}
                  alt="Preview"
                  style={{
                    width: "120px",
                    borderRadius: "6px",
                    border: "1px solid #ddd",
                  }}
                />
              </div>
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

          {/* Description */}
          <div className="mb-3">
            <label className="form-label">Description</label>
            <CKEditor
              editor={ClassicEditor}
              data=""
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

          <button type="submit" className="btn btn-success me-2">
            Update Value
          </button>

          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate("/admin/our-values")}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditOurValues;
