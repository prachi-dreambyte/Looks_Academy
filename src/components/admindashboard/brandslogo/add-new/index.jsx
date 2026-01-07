import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function BrandForm() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate(); // ✅ ADD THIS

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !image) {
      toast.error("Please enter brand title and image");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("title", title);
      formData.append("image", image);

      const res = await fetch(
        `${API_BASE_URL}/api/brands/add`,
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error();
      }

      toast.success("Brand added successfully");

      // ✅ REDIRECT AFTER SUCCESS
      navigate("/admin/brands");

      // reset form (optional because of redirect)
      setTitle("");
      setImage(null);
      setPreview(null);
    } catch {
      toast.error("Failed to add brand");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow border-0">
            <div className="card-body p-4">
              <h4 className="mb-4 text-center">Add Brand</h4>

              <form onSubmit={handleSubmit}>
                {/* Brand Title */}
                <div className="mb-3">
                  <label className="form-label">Brand Title</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter brand name"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                {/* Brand Image */}
                <div className="mb-3">
                  <label className="form-label">Brand Image</label>
                  <input
                    type="file"
                    className="form-control"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </div>

                {/* Preview */}
                {preview && (
                  <div className="text-center mb-3">
                    <img
                      src={preview}
                      alt="Preview"
                      className="img-fluid"
                      style={{
                        maxHeight: "120px",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                )}

                <button
                  className="btn btn-dark w-100"
                  disabled={loading}
                >
                  {loading ? "Adding..." : "Add Brand"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
