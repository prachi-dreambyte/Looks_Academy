import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const EditOurFacilities = () => {
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

  /* ================= FETCH FACILITY ================= */
  useEffect(() => {
    const fetchFacility = async () => {
      try {
        const res = await axios.get(
          `${API_BASE_URL}/api/our-facilities/get/${id}`
        );

        if (res.data.success) {
          const facility = res.data.data;

          setValue("title", facility.title);
          setPreviewImage(
            `${API_BASE_URL}/${facility.image.replace(/\\/g, "/")}`
          );
        } else {
          toast.error("Facility not found");
        }
      } catch (error) {
        toast.error("Failed to load facility");
      } finally {
        setLoading(false);
      }
    };

    fetchFacility();
  }, [id, setValue]);

  /* ================= UPDATE FACILITY ================= */
  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);

      // image optional
      if (data.image?.length > 0) {
        formData.append("image", data.image[0]);
      }

      const res = await axios.put(
        `${API_BASE_URL}/api/our-facilities/update/${id}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (res.data.success) {
        toast.success("Facility updated successfully");
        navigate("/admin/our-facilities");
      } else {
        toast.error("Update failed");
      }
    } catch (error) {
      const message =
        error.response?.data?.message ||
        "Something went wrong";
      toast.error(message);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow">
        <h4 className="mb-3">Edit Our Facility</h4>

        <form onSubmit={handleSubmit(onSubmit)}>
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

          <button type="submit" className="btn btn-success me-2">
            Update Facility
          </button>

          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate("/admin/our-facilities")}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditOurFacilities;
