import React, { useEffect, useState } from "react";
import styles from "../../../assets/styles/blogs/AllBlogs.module.css";
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

const AllOurValues = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const API_URL = `${API_BASE_URL}/api/our-values`;

  /* =========================
     FETCH ALL OUR VALUES
  ========================= */
  const fetchValues = async () => {
    try {
      const res = await fetch(`${API_URL}/get-all`);
      const result = await res.json();

      if (res.ok && result.success) {
        setValues(result.data);
      } else {
        toast.error("Failed to fetch Our Values");
      }
    } catch {
      toast.error("Failed to fetch Our Values");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchValues();
  }, []);

  /* =========================
     DELETE VALUE
  ========================= */
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${API_URL}/delete/${id}`, {
        method: "DELETE",
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error();
      }

      setValues((prev) =>
        prev.filter((val) => val._id !== id)
      );
      toast.success("Our Value deleted successfully");
    } catch {
      toast.error("Failed to delete Our Value");
    }
  };

  if (loading) return <p>Loading values...</p>;

  // 🔴 LIMIT CHECK
  const isLimitReached = values.length >= 3;

  return (
    <div className={styles.tableCard}>
      {/* Header */}
      <div className={styles.header}>
        <h2>All Our Values</h2>

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
          + Create Value
        </button>
      </div>

      {/* Warning */}
      {isLimitReached && (
        <p style={{ color: "red", marginBottom: "10px" }}>
          You can only add up to 3 Our Values. Delete one to
          add a new value.
        </p>
      )}

      {/* Table */}
      <Table className={styles.table}>
        <Thead>
          <Tr>
            <Th>Image</Th>
            <Th>Icon</Th>
            <Th>Title</Th>
            <Th>Date</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>

        <Tbody>
          {values.length === 0 ? (
            <Tr>
              <Td colSpan="5" style={{ textAlign: "center" }}>
                No Our Values found
              </Td>
            </Tr>
          ) : (
            values.map((value) => (
              <Tr key={value._id}>
                <Td>
                  <img
                    src={`${API_BASE_URL}/${value.image.replace(
                      /\\/g,
                      "/"
                    )}`}
                    alt={value.title}
                    style={{
                      width: "60px",
                      height: "40px",
                      objectFit: "cover",
                      borderRadius: "4px",
                    }}
                    onError={(e) => {
                      e.target.src =
                        "/image/placeholder.webp";
                    }}
                  />
                </Td>

                <Td>{value.icon}</Td>

                <Td>{value.title}</Td>

                <Td>
                  {new Date(
                    value.createdAt
                  ).toLocaleDateString()}
                </Td>

                <Td className={styles.actions}>
                  <button
                    className={styles.editBtn}
                    onClick={() =>
                      navigate(
                        `/admin/our-values/edit/${value._id}`
                      )
                    }
                  >
                    Edit
                  </button>

                  <button
                    className={styles.deleteBtn}
                    onClick={() =>
                      handleDelete(value._id)
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

export default AllOurValues;
