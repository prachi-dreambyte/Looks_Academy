import React, { useEffect, useState } from "react";
import styles from "../../../style/blogs/AllBlogs.module.css";
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

const AllOurFacilities = () => {
  const navigate = useNavigate();
  const [facilities, setFacilities] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const API_URL = `${API_BASE_URL}/api/our-facilities`;

  /* ================= FETCH ALL FACILITIES ================= */
  const fetchFacilities = async () => {
    try {
      const res = await fetch(`${API_URL}/get-all`);
      const result = await res.json();

      if (res.ok && result.success) {
        setFacilities(result.data);
      } else {
        toast.error("Failed to fetch facilities");
      }
    } catch {
      toast.error("Failed to fetch facilities");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFacilities();
  }, []);

  /* ================= DELETE FACILITY ================= */
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${API_URL}/delete/${id}`, {
        method: "DELETE",
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error();
      }

      setFacilities((prev) =>
        prev.filter((item) => item._id !== id)
      );
      toast.success("Facility deleted successfully");
    } catch {
      toast.error("Failed to delete facility");
    }
  };

  if (loading) return <p>Loading facilities...</p>;

  // 🔴 LIMIT CHECK (MAX 3)
  const isLimitReached = facilities.length >= 3;

  return (
    <div className={styles.tableCard}>
      {/* Header */}
      <div className={styles.header}>
        <h2>All Our Facilities</h2>

        <button
          className={styles.createBtn}
          disabled={isLimitReached}
          onClick={() => navigate("add-new")}
          style={{
            opacity: isLimitReached ? 0.6 : 1,
            cursor: isLimitReached
              ? "not-allowed"
              : "pointer",
          }}
        >
          + Create Facility
        </button>
      </div>

      {/* Warning Message */}
      {isLimitReached && (
        <p style={{ color: "red", marginBottom: "10px" }}>
          You can only add up to 3 Our Facilities. Delete one
          to add a new facility.
        </p>
      )}

      {/* Table */}
      <Table className={styles.table}>
        <Thead>
          <Tr>
            <Th>Image</Th>
            <Th>Title</Th>
            <Th>Date</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>

        <Tbody>
          {facilities.length === 0 ? (
            <Tr>
              <Td colSpan="4" style={{ textAlign: "center" }}>
                No facilities found
              </Td>
            </Tr>
          ) : (
            facilities.map((facility) => (
              <Tr key={facility._id}>
                <Td>
                  <img
                    src={`${API_BASE_URL}/${facility.image.replace(
                      /\\/g,
                      "/"
                    )}`}
                    alt={facility.title}
                    style={{
                      width: "70px",
                      height: "45px",
                      objectFit: "cover",
                      borderRadius: "4px",
                    }}
                    onError={(e) => {
                      e.target.src =
                        "/image/placeholder.webp";
                    }}
                  />
                </Td>

                <Td>{facility.title}</Td>

                <Td>
                  {new Date(
                    facility.createdAt
                  ).toLocaleDateString()}
                </Td>

                <Td className={styles.actions}>
                  <button
                    className={styles.editBtn}
                    onClick={() =>
                      navigate(
                        `/admin/our-facilities/edit/${facility._id}`
                      )
                    }
                  >
                    Edit
                  </button>

                  <button
                    className={styles.deleteBtn}
                    onClick={() =>
                      handleDelete(facility._id)
                    }
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

export default AllOurFacilities;
