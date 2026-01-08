import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AllAboutBanner = () => {
  const navigate = useNavigate();

  const [banner, setBanner] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const API_URL = `${API_BASE_URL}/api/about-banner`;

  /* ================= FETCH ================= */
  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await fetch(`${API_URL}/get`);
        const result = await res.json();

        if (res.ok && result.success && result.data) {
          setBanner(result.data);
        }
      } catch {
        toast.error("Failed to load About Us banner");
      } finally {
        setLoading(false);
      }
    };

    fetchBanner();
  }, []);

  /* ================= DELETE ================= */
  const deleteBanner = async () => {
    if (deleting || !banner) return;

    setDeleting(true);

    try {
      const res = await fetch(`${API_URL}/delete/${banner._id}`, {
        method: "DELETE",
      });

      const result = await res.json();
      if (!res.ok || !result.success) throw new Error();

      setBanner(null);
      toast.success("About Us banner deleted successfully");
    } catch {
      toast.error("Delete failed");
    } finally {
      setDeleting(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-dark" />
      </div>
    );
  }

  return (
    <div className="container py-4">
      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <h4 className="fw-semibold mb-0">About Us Banner</h4>

        <button
          className="btn btn-dark"
          onClick={() => navigate("add-new")}
        >
          Update Banner
        </button>
      </div>

      {/* EMPTY */}
      {!banner && (
        <div className="card text-center p-4 shadow-sm border-0">
          <p className="text-muted mb-0">
            No About Us banner uploaded
          </p>
        </div>
      )}

      {/* CARD */}
      {banner && (
        <div className="card shadow-lg border-0 overflow-hidden">
          <div
            className="bg-light d-flex justify-content-center align-items-center"
            style={{ height: "260px", overflow: "hidden" }}
          >
            <img
              src={`${API_BASE_URL}/${banner.image}`}
              alt="About Banner"
              className="w-100 h-100"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="card-body d-flex justify-content-between align-items-center">
            <span className="badge bg-success px-3 py-2 rounded-pill">
              Active
            </span>

            <button
              className="btn btn-outline-danger btn-sm"
              onClick={deleteBanner}
              disabled={deleting}
            >
              {deleting ? "Deleting..." : "Delete Banner"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllAboutBanner;
