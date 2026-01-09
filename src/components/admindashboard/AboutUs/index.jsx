import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "../../../assets/styles/blogs/AllBlogs.module.css";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const AllAboutUs = () => {
  const navigate = useNavigate();
  const [aboutUsList, setAboutUsList] = useState([]);
  const [loading, setLoading] = useState(true);

  // ENV BASE URL
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const API_URL = `${API_BASE_URL}/api/AboutUs`;

  /* ================= FETCH ALL ================= */
  const fetchAboutUs = async () => {
    try {
      const res = await fetch(`${API_URL}/getAllAboutUs`);
      const result = await res.json();

      if (res.ok && result.success) {
        setAboutUsList(result.data);
      } else {
        toast.error("Failed to fetch AboutUs");
      }
    } catch (error) {
      toast.error("Failed to fetch AboutUs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAboutUs();
  }, []);

  /* ================= DELETE ================= */
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this AboutUs?")) return;

    try {
      const res = await fetch(
        `${API_URL}/deleteAboutUs/${id}`,
        { method: "DELETE" }
      );

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error("Delete failed");
      }

      setAboutUsList((prev) =>
        prev.filter((item) => item._id !== id)
      );

      toast.success("AboutUs deleted successfully");
    } catch (error) {
      toast.error("Failed to delete AboutUs");
    }
  };

  if (loading) return <p>Loading AboutUs...</p>;

  return (
    <div className={styles.tableCard}>
      {/* HEADER */}
      <div className={styles.header}>
        <h2>All About Us</h2>
        <button
          className={styles.createBtn}
          onClick={() => navigate("add-new")}
        >
          + Create AboutUs
        </button>
      </div>

      {/* TABLE */}
      <Table className={styles.table}>
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Created By</Th>
            <Th>Date</Th>
            <Th>Status</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>

        <Tbody>
          {aboutUsList.length === 0 ? (
            <Tr>
              <Td colSpan="5" style={{ textAlign: "center" }}>
                No AboutUs found
              </Td>
            </Tr>
          ) : (
            aboutUsList.map((item) => (
              <Tr key={item._id}>
                <Td>{item.title}</Td>
                <Td>Admin</Td>
                <Td>
                  {new Date(item.createdAt).toLocaleDateString()}
                </Td>
                <Td>
                  <span className={styles.published}>Published</span>
                </Td>
                <Td className={styles.actions}>
                  <button
                    className={styles.editBtn}
                    onClick={() =>
                      navigate(`/admin/AboutUs/edit/${item._id}`)
                    }
                  >
                    Edit
                  </button>
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

export default AllAboutUs;
