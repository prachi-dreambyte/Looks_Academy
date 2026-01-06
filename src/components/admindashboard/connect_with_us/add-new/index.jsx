import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddGallery = () => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [galleryId, setGalleryId] = useState(null);
  const [galleryImages, setGalleryImages] = useState(Array(9).fill(null));
  const [loading, setLoading] = useState(false);

  /* ================= FETCH EXISTING GALLERY ================= */
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/gallery/get-all-gallery`);
        const result = await res.json();

        if (res.ok && result.success && result.data.length > 0) {
          const gallery = result.data[0];
          setGalleryId(gallery._id);
          setTitle(gallery.title);
          setDescription(gallery.description);

          const filled = Array(9).fill(null);
          gallery.images.forEach((img, i) => (filled[i] = img));
          setGalleryImages(filled);
        }
      } catch {
        toast.error("Failed to load gallery");
      }
    };

    fetchGallery();
  }, [API_BASE_URL]);

  /* ================= IMAGE CHANGE ================= */
  const handleImageChange = (index, file) => {
    const updated = [...galleryImages];
    updated[index] = file;
    setGalleryImages(updated);
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      toast.error("Title & Description required");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);

    galleryImages.forEach((img, index) => {
      if (img instanceof File) {
        formData.append("images", img);
        formData.append("imageIndexes", index);
      }
    });

    try {
      setLoading(true);

      const url = galleryId
        ? `${API_BASE_URL}/api/gallery/update-gallery/${galleryId}`
        : `${API_BASE_URL}/api/gallery/create-gallery`;

      const method = galleryId ? "PUT" : "POST";

      const res = await fetch(url, { method, body: formData });
      const result = await res.json();

      if (!res.ok || !result.success) {
        toast.error(result.message || "Failed");
        return;
      }

      toast.success(
        galleryId ? "Gallery updated successfully" : "Gallery created successfully"
      );
      navigate("/admin/connect-with-us");
    } catch {
      toast.error("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-xl-8 col-lg-9 col-md-10">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-4 p-md-5">
              <h3 className="text-center fw-bold mb-4">
                {galleryId ? "Edit Gallery" : "Create Gallery"}
              </h3>

              <form onSubmit={handleSubmit}>
                {/* Title */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Gallery Title</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter gallery title"
                  />
                </div>

                {/* Description */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">Description</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>

                {/* Preview */}
                <h6 className="fw-semibold mb-2">Image Preview</h6>
                <div className="row g-3 mb-4">
                  {galleryImages.map((img, i) => (
                    <div key={i} className="col-4 col-sm-3 col-md-2">
                      <div className="preview-box">
                        {img ? (
                          <img
                            src={
                              img instanceof File
                                ? URL.createObjectURL(img)
                                : `${API_BASE_URL}/${img}`
                            }
                            alt=""
                          />
                        ) : (
                          <span>+</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Upload Inputs */}
                <h6 className="fw-semibold mb-2">Upload Images</h6>
                <div className="row g-3 mb-4">
                  {galleryImages.map((_, i) => (
                    <div key={i} className="col-12 col-sm-6 col-md-4">
                      <input
                        type="file"
                        className="form-control"
                        accept="image/*"
                        onChange={(e) =>
                          handleImageChange(i, e.target.files[0])
                        }
                      />
                    </div>
                  ))}
                </div>

                <button
                  className="btn btn-dark btn-lg w-100"
                  disabled={loading}
                >
                  {loading
                    ? "Saving..."
                    : galleryId
                    ? "Update Gallery"
                    : "Create Gallery"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Inline minimal styles */}
      <style>{`
        .preview-box {
          width: 100%;
          aspect-ratio: 1;
          border: 1px dashed #ccc;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #f8f9fa;
          font-size: 24px;
          color: #aaa;
        }
        .preview-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
};

export default AddGallery;
