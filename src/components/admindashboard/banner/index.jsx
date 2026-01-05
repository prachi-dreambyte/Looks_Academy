import React, { useEffect, useState } from "react";
import styles from "../../../style/homebanner/AllBlogs.module.css";
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

const AllBanner = () => {
  const navigate = useNavigate();
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const API_URL = `${API_BASE_URL}/api/banner`;

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await fetch(`${API_URL}/home`);
        const result = await res.json();
        if (res.ok && result.success) setBanners(result.data);
        else toast.error("Failed to fetch banners");
      } catch {
        toast.error("Failed to fetch banners");
      } finally {
        setLoading(false);
      }
    };

    fetchBanners();
  }, []);

  /* 🔥 Toast Confirm Delete */
  const confirmDelete = (id) => {
    toast(
      ({ closeToast }) => (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <strong>Delete this banner?</strong>
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
      {
        autoClose: false,
        closeOnClick: false,
      }
    );
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${API_URL}/delete/${id}`, {
        method: "DELETE",
      });
      const result = await res.json();

      if (!res.ok || !result.success) throw new Error();

      setBanners((prev) => prev.filter((b) => b._id !== id));
      toast.success("Banner deleted successfully");
    } catch {
      toast.error("Failed to delete banner");
    }
  };

  if (loading) return <p className={styles.loading}>Loading banners...</p>;

  return (
    <div className={styles.tableCard}>
      {/* Header */}
      <div className={styles.header}>
        <h2>All Banners</h2>
        <button
          className={styles.createBtn}
          onClick={() => navigate("add-new")}
        >
          + Add Banner
        </button>
      </div>

      <Table className={styles.table}>
        <Thead>
          <Tr>
            <Th>Preview</Th>
            <Th>Position</Th>
            <Th>Status</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>

        <Tbody>
          {banners.length === 0 ? (
            <Tr>
              <Td colSpan="4" className={styles.empty}>
                No banners found
              </Td>
            </Tr>
          ) : (
            banners.map((banner) => (
              <Tr key={banner._id}>
                <Td>
                  <img
                    src={`${API_BASE_URL}${banner.image}`}
                    alt="banner"
                    className={styles.bannerImg}
                  />
                </Td>
                <Td>{banner.position || "Homepage"}</Td>
                <Td>
                  <span className={styles.active}>Active</span>
                </Td>
                <Td>
                  <button
                    className={styles.deleteBtn}
                    onClick={() => confirmDelete(banner._id)}
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

export default AllBanner;
