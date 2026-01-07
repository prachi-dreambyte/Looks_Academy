import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";

const CreateCourse = () => {
  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const {
    register,
    handleSubmit,
    setValue,
    setError,      // ✅ added
    clearErrors,   // ✅ added
    reset,
    formState: { errors },
  } = useForm();

  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [preview, setPreview] = useState(null);

  /* ================= TAG HANDLER ================= */
  const handleTagAdd = (e) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      if (!tags.includes(tagInput)) {
        setTags([...tags, tagInput]);
        clearErrors("tags"); // ✅ clear error
      }
      setTagInput("");
    }
  };

  const removeTag = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };

  /* ================= IMAGE PREVIEW ================= */
  const handleImagePreview = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  /* ================= SUBMIT ================= */
  const onSubmit = async (data) => {

    // ✅ TAGS VALIDATION
    if (tags.length === 0) {
      setError("tags", { message: "At least one tag is required" });
      return;
    }

    // ✅ DESCRIPTION VALIDATION
    if (!data.description || data.description.trim() === "") {
      setError("description", { message: "Description is required" });
      return;
    }

    try {
      const formData = new FormData();

      formData.append("title", data.title);
      formData.append("brand", data.brand);
      formData.append("price", data.price);
      formData.append("duration", data.duration);
      formData.append("level", data.level);
      formData.append("description", data.description);
      formData.append("tags", JSON.stringify(tags));

      if (data.image && data.image[0]) {
        formData.append("image", data.image[0]);
      }

      await axios.post(
        `${API_BASE_URL}/api/courses/create`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      toast.success("Course created successfully!");
      reset();
      setTags([]);
      setPreview(null);

      setTimeout(() => navigate("/admin/courses"), 1500);

    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to create course");
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <div className="card shadow border-0">
            <div className="card-body p-4">
              <h4 className="text-center mb-4">Create Course</h4>

              <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">

                {/* IMAGE */}
                <div className="mb-3">
                  <label className="form-label">Course Image</label>
                  <input
                    type="file"
                    className="form-control"
                    accept="image/*"
                    {...register("image", { required: "Image is required" })}
                    onChange={handleImagePreview}
                  />
                  {errors.image && (
                    <small className="text-danger">{errors.image.message}</small>
                  )}
                </div>

                {/* TITLE */}
                <div className="mb-3">
                  <label className="form-label">Course Title</label>
                  <input
                    className="form-control"
                    {...register("title", { required: "Title is required" })}
                  />
                  {errors.title && (
                    <small className="text-danger">{errors.title.message}</small>
                  )}
                </div>

                {/* BRAND */}
                <div className="mb-3">
                  <label className="form-label">Brand</label>
                  <input
                    className="form-control"
                    {...register("brand", { required: "Brand is required" })}
                  />
                  {errors.brand && (
                    <small className="text-danger">{errors.brand.message}</small>
                  )}
                </div>

                {/* PRICE & DURATION */}
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Price</label>
                    <input
                      type="number"
                      className="form-control"
                      {...register("price", { required: "Price is required" })}
                    />
                    {errors.price && (
                      <small className="text-danger">{errors.price.message}</small>
                    )}
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Duration</label>
                    <input
                      className="form-control"
                      {...register("duration", { required: "Duration is required" })}
                      placeholder="e.g. 3 Months"
                    />
                    {errors.duration && (
                      <small className="text-danger">{errors.duration.message}</small>
                    )}
                  </div>
                </div>

                {/* LEVEL */}
                <div className="mb-3">
                  <label className="form-label">Level</label>
                  <select
                    className="form-select"
                    {...register("level", { required: "Level is required" })}
                  >
                    <option value="">Select Level</option>
                    <option>Basic</option>
                    <option>Basic to Advanced</option>
                    <option>Comprehensive</option>
                    <option>Professional</option>
                  </select>
                  {errors.level && (
                    <small className="text-danger">{errors.level.message}</small>
                  )}
                </div>

                {/* DESCRIPTION */}
                <div className="mb-4">
                  <label className="form-label">Course Description</label>
                  <CKEditor
                    editor={ClassicEditor}
                    onChange={(event, editor) => {
                      setValue("description", editor.getData());
                      clearErrors("description");
                    }}
                  />
                  {errors.description && (
                    <small className="text-danger">{errors.description.message}</small>
                  )}
                </div>

                {/* TAGS */}
                <div className="mb-4">
                  <label className="form-label">Tags</label>
                  <input
                    className="form-control"
                    placeholder="Press Enter to add tag"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={handleTagAdd}
                  />
                  {errors.tags && (
                    <small className="text-danger">{errors.tags.message}</small>
                  )}

                  <div className="mt-2 d-flex flex-wrap gap-2">
                    {tags.map((tag, i) => (
                      <span key={i} className="badge bg-primary">
                        {tag}
                        <span
                          className="ms-2"
                          style={{ cursor: "pointer" }}
                          onClick={() => removeTag(tag)}
                        >
                          ×
                        </span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* SUBMIT */}
                <button className="btn btn-dark w-100" type="submit">
                  Create Course
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
