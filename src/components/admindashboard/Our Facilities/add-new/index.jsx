import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const CreateOurFacilities = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  /* ================= LIMIT CHECK (MAX 3) ================= */
  useEffect(() => {
    const checkLimit = async () => {
      try {
        const res = await axios.get(
          `${API_BASE_URL}/api/our-facilities/get-all`
        );

        if (res.data.success && res.data.data.length >= 3) {
          toast.error(
            "You can only add up to 3 Our Facilities. Please edit or delete an existing facility."
          );
          navigate("/admin/our-facilities");
        }
      } catch (error) {
        console.error("Limit check failed");
      }
    };

    checkLimit();
  }, [API_BASE_URL, navigate]);

  /* ================= SUBMIT ================= */
  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("image", data.image[0]);

      await axios.post(
        `${API_BASE_URL}/api/our-facilities/create`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      toast.success("Facility created successfully");
      navigate("/admin/our-facilities");
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
        <h4 className="mb-3">Create Our Facility</h4>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Title */}
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter facility title"
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

          <button type="submit" className="btn btn-primary">
            Save Facility
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateOurFacilities;
