import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const LooksEditGallery = () => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const API_URL = `${API_BASE_URL}/api/looksgallery`;
  const navigate = useNavigate();
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [oldImage, setOldImage] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Category options
  const CATEGORY_OPTIONS = [
    "Hair Treatment",
    "Makeup",
    "Hair Styling",
    "Skin Care",
    "Nails",
  ];

  // 🔹 Fetch existing gallery
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await fetch(`${API_URL}/get-all`);
        const result = await res.json();

        if (!res.ok || !result.success) {
          toast.error("Failed to fetch gallery");
          return;
        }

        const gallery = result.data.find((item) => item._id === id);

        if (!gallery) {
          toast.error("Gallery not found");
          navigate("/admin/gallery");
          return;
        }

        setTitle(gallery.title);
        setCategory(gallery.category);
        setOldImage(gallery.image);
      } catch (error) {
        toast.error("Server error");
      }
    };

    fetchGallery();
  }, [id, API_URL, navigate]);

  // 🔹 Update handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !category) {
      toast.error("Title aur Category required hain");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    if (image) {
      formData.append("image", image);
    }

    try {
      setLoading(true);

      const res = await fetch(`${API_URL}/update/${id}`, {
        method: "PUT",
        body: formData,
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        toast.error(result.message || "Update failed");
        return;
      }

      toast.success("Gallery updated successfully");
      navigate("/admin/gallery");
    } catch (error) {
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
                Edit Looks Gallery
              </h4>

              <form onSubmit={handleSubmit}>
                {/* Category */}
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
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                {/* Image */}
                <div className="mb-3">
                  <label className="form-label">Change Image (optional)</label>
                  <input
                    type="file"
                    className="form-control"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </div>

                {/* Preview */}
                <div className="mb-3 text-center">
                  {image ? (
                    <img
                      src={URL.createObjectURL(image)}
                      alt="preview"
                      className="img-fluid rounded"
                      style={{ maxHeight: "180px" }}
                    />
                  ) : (
                    oldImage && (
                      <img
                        src={`${API_BASE_URL}/${oldImage.replace(/\\/g, "/")}`}
                        alt="old"
                        className="img-fluid rounded"
                        style={{ maxHeight: "180px" }}
                      />
                    )
                  )}
                </div>

                <button
                  className="btn btn-dark w-100"
                  disabled={loading}
                >
                  {loading ? "Updating..." : "Update Gallery"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LooksEditGallery;
