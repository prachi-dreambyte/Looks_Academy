import React, { useEffect, useState } from "react";
import styles from "../../../assets/styles/blogs/AllBlogs.module.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const WhyJoinUs = () => {
  const navigate = useNavigate();
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const API_URL = `${API_BASE_URL}/api/why-join-us`;

  /* =========================
     FETCH WHY JOIN US
  ========================= */
  const fetchWhyJoinUs = async () => {
    try {
      const res = await fetch(API_URL);
      const result = await res.json();

      if (res.ok && result.success) {
        setRecords(result.data);
      } else {
        toast.error("Failed to fetch data");
      }
    } catch {
      toast.error("Server error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWhyJoinUs();
  }, []);

  /* =========================
     DELETE
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

    setRecords((prev) => prev.filter((item) => item._id !== id));
    toast.success("Deleted successfully");
  } catch {
    toast.error("Delete failed");
  }
};


  if (loading) return <p>Loading...</p>;

  return (
    <div className={styles.tableCard}>
      {/* Header */}
      <div className={styles.header}>
        <h2>Why Join Us</h2>
        <button
          className={styles.createBtn}
          onClick={() => navigate("add-new")}
        >
          + Create or Update
        </button>
      </div>

      {/* Table */}
      <Table className={styles.table}>
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Content</Th>
            <Th>Author</Th>
            <Th>Date</Th>
            <Th>Status</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>

        <Tbody>
          {records.length === 0 ? (
            <Tr>
              <Td colSpan="5" style={{ textAlign: "center" }}>
                No data found
              </Td>
            </Tr>
          ) : (
            records.map((item) => (
              <Tr key={item._id}>
                <Td>{item.title}</Td>

                <Td>
                  <div
                    style={{
                      maxWidth: "300px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                </Td>

                <Td>Admin</Td>
                <Td>{new Date(item.createdAt).toLocaleDateString()}</Td>

                <Td>
                  <span className={styles.published}>Published</span>
                </Td>

                <Td className={styles.actions}>
                  <button
                    className={styles.deleteBtn}
                    onClick={() => handleDelete(item._id)}
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

export default WhyJoinUs;
