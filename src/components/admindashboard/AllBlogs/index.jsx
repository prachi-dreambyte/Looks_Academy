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

const AllBlogs = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ CHANGE HERE (ENV BASE URL)
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const API_URL = `${API_BASE_URL}/api/blogs`;

  const fetchBlogs = async () => {
    try {
      const res = await fetch(`${API_URL}/get-all-blogs`);
      const result = await res.json();

      if (res.ok && result.success) {
        setBlogs(result.data);
      } else {
        toast.error("Failed to fetch blogs");
      }
    } catch (error) {
      toast.error("Failed to fetch blogs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(
        `${API_URL}/delete-blog/${id}`,
        { method: "DELETE" }
      );

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error("Delete failed");
      }

      setBlogs((prev) => prev.filter((blog) => blog._id !== id));
      toast.success("Blog deleted successfully");
    } catch (error) {
      toast.error("Failed to delete blog");
    }
  };

  if (loading) return <p>Loading blogs...</p>;

  return (
    <div className={styles.tableCard}>
      {/* Header */}
      <div className={styles.header}>
        <h2>All Blogs</h2>
        <button
          className={styles.createBtn}
          onClick={() => navigate("/admin/add-new")}
        >
          + Create Blog
        </button>
      </div>

      {/* Responsive Table */}
      <Table className={styles.table}>
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Author</Th>
            <Th>Date</Th>
            <Th>Status</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>

        <Tbody>
          {blogs.length === 0 ? (
            <Tr>
              <Td colSpan="5" style={{ textAlign: "center" }}>
                No blogs found
              </Td>
            </Tr>
          ) : (
            blogs.map((blog) => (
              <Tr key={blog._id}>
                <Td>{blog.title}</Td>
                <Td>Admin</Td>
                <Td>
                  {new Date(blog.createdAt).toLocaleDateString()}
                </Td>
                <Td>
                  <span className={styles.published}>Published</span>
                </Td>
                <Td className={styles.actions}>
                  <button
                    className={styles.editBtn}
                    onClick={() =>
                      navigate(`/admin/blogs/edit/${blog._id}`)
                    }
                  >
                    Edit
                  </button>
                  <button
                    className={styles.deleteBtn}
                    onClick={() => handleDelete(blog._id)}
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

export default AllBlogs;
