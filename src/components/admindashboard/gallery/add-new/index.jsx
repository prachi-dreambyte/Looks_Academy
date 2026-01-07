import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LooksAddGallery = () => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const API_URL = `${API_BASE_URL}/api/looksgallery`;
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  // ✅ Category options
  const CATEGORY_OPTIONS = [
    "Hair Treatment",
    "Makeup",
    "Hair Styling",
    "Skin Care",
    "Nails",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !category || !image) {
      toast.error("Title, Category aur Image required hain");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("image", image);

    try {
      setLoading(true);

      const res = await fetch(
        `${API_URL}/create`,
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await res.json();

      if (!res.ok || !result.success) {
        toast.error(result.message || "Gallery create nahi hui");
        return;
      }

      toast.success("Gallery successfully created");
      navigate("/admin/gallery");
    } catch (err) {
      toast.error("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow border-0 rounded-4">
            <div className="card-body p-4">
              <h4 className="text-center fw-bold mb-4">
                Add Looks Gallery
              </h4>

              <form onSubmit={handleSubmit}>
                 {/* Category Dropdown */}
                <div className="mb-3">
                  <label className="form-label">Category</label>
                  <select
                    className="form-select"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="">Select Category</option>
                    {CATEGORY_OPTIONS.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
                {/* Title */}
                <div className="mb-3">
                  <label className="form-label">Gallery Title</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

               

                {/* Image */}
                <div className="mb-3">
                  <label className="form-label">Gallery Image</label>
                  <input
                    type="file"
                    className="form-control"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </div>

                {/* Preview */}
                {image && (
                  <div className="mb-3 text-center">
                    <img
                      src={URL.createObjectURL(image)}
                      alt="preview"
                      className="img-fluid rounded"
                      style={{ maxHeight: "180px" }}
                    />
                  </div>
                )}

                <button
                  className="btn btn-dark w-100"
                  disabled={loading}
                >
                  {loading ? "Saving..." : "Create Gallery"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LooksAddGallery;
