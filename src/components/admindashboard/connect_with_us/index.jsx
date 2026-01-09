import React, { useEffect, useState } from "react";
import styles from "../../../assets/styles/connect-with-us/AllGallery.module.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const AllGallery = () => {
  const navigate = useNavigate();
  const [galleries, setGalleries] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const API_URL = `${API_BASE_URL}/api/gallery`;

  /* ================= FETCH GALLERIES ================= */
  useEffect(() => {
    const fetchGalleries = async () => {
      try {
        const res = await fetch(`${API_URL}/get-all-gallery`);
        const result = await res.json();

        if (res.ok && result.success) {
          setGalleries(result.data);
        } else {
          toast.error("Failed to fetch gallery");
        }
      } catch {
        toast.error("Failed to fetch gallery");
      } finally {
        setLoading(false);
      }
    };

    fetchGalleries();
  }, []);

  /* ================= DELETE CONFIRM ================= */
  const confirmDelete = (id) => {
    toast(
      ({ closeToast }) => (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <strong>Delete this gallery?</strong>
          <div style={{ display: "flex", gap: 10 }}>
            <button
              onClick={() => {
                handleDelete(id);
                closeToast();
              }}
              style={{
                background: "#000",
                color: "#fff",
                border: "none",
                padding: "6px 14px",
                borderRadius: 6,
                cursor: "pointer",
              }}
            >
              Yes
            </button>
            <button
              onClick={closeToast}
              style={{
                background: "#e0e0e0",
                border: "none",
                padding: "6px 14px",
                borderRadius: 6,
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      { autoClose: false, closeOnClick: false }
    );
  };

  /* ================= DELETE HANDLER ================= */
  const handleDelete = async (id) => {
    try {
      const res = await fetch(
        `${API_URL}/delete-gallery/${id}`,
        { method: "DELETE" }
      );
      const result = await res.json();

      if (!res.ok || !result.success) throw new Error();

      setGalleries((prev) => prev.filter((g) => g._id !== id));
      toast.success("Gallery deleted successfully");
    } catch {
      toast.error("Failed to delete gallery");
    }
  };

  if (loading) return <p className={styles.loading}>Loading gallery...</p>;

  return (
    <div className={styles.tableCard}>
      {/* HEADER */}
      <div className={styles.header}>
        <h2>All Galleries</h2>
        <button
          className={styles.createBtn}
          onClick={() => navigate("add-new")}
        >
          + Add Gallery
        </button>
      </div>

      {/* TABLE */}
      <Table className={styles.table}>
        <Thead>
          <Tr>
            <Th>Images</Th>
            <Th>Title</Th>
            <Th>Description</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>

        <Tbody>
          {galleries.length === 0 ? (
            <Tr>
              <Td colSpan="4" className={styles.empty}>
                No gallery found
              </Td>
            </Tr>
          ) : (
            galleries.map((gallery) => (
              <Tr key={gallery._id}>
                <Td>
                  <div className={styles.imageGrid}>
                    {gallery.images?.slice(0, 3).map((img, index) => (
                      <img
                        key={index}
                        src={`${API_BASE_URL}/${img}`}
                        alt="gallery"
                        className={styles.galleryImg}
                      />
                    ))}
                    {gallery.images?.length > 3 && (
                      <span className={styles.more}>
                        +{gallery.images.length - 3}
                      </span>
                    )}
                  </div>
                </Td>

                <Td>{gallery.title}</Td>
                <Td className={styles.desc}>
                  {gallery.description?.slice(0, 80)}...
                </Td>

                <Td>
                  <button
                    className={styles.deleteBtn}
                    onClick={() => confirmDelete(gallery._id)}
                  >
                    Delete
                  </button>
                </Td>
              </Tr>
            ))
          )}
        </Tbody>
      </Table>
    </div>
  );
};

export default AllGallery;
