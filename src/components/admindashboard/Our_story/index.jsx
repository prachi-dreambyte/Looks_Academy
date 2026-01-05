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

const AllOurStory = () => {
  const navigate = useNavigate();
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const API_URL = `${API_BASE_URL}/api/our-story`;

  /* =========================
     FETCH ALL OUR STORIES
  ========================= */
  const fetchStories = async () => {
    try {
      const res = await fetch(API_URL);
      const result = await res.json();

      if (res.ok && result.success) {
        setStories(result.data);
      } else {
        toast.error("Failed to fetch Our Stories");
      }
    } catch {
      toast.error("Failed to fetch Our Stories");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStories();
  }, []);

  /* =========================
     DELETE STORY
  ========================= */
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this story?")) return;

    try {
      const res = await fetch(`${API_URL}/delete/${id}`, {
        method: "DELETE",
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error();
      }

      setStories((prev) => prev.filter((story) => story._id !== id));
      toast.success("Our Story deleted successfully");
    } catch {
      toast.error("Failed to delete Our Story");
    }
  };

  if (loading) return <p>Loading stories...</p>;

  return (
    <div className={styles.tableCard}>
      {/* Header */}
      <div className={styles.header}>
        <h2>All Our Stories</h2>
        <button
          className={styles.createBtn}
          onClick={() => navigate("add-new")}
        >
          + Create Story or Update Story
        </button>
      </div>

      {/* Table */}
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
          {stories.length === 0 ? (
            <Tr>
              <Td colSpan="5" style={{ textAlign: "center" }}>
                No Our Story found
              </Td>
            </Tr>
          ) : (
            stories.map((story) => (
              <Tr key={story._id}>
                <Td>{story.title}</Td>
                <Td>Admin</Td>
                <Td>
                  {new Date(story.createdAt).toLocaleDateString()}
                </Td>
                <Td>
                  <span className={styles.published}>Published</span>
                </Td>
                <Td className={styles.actions}>
                 
                  <button
                    className={styles.deleteBtn}
                    onClick={() => handleDelete(story._id)}
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

export default AllOurStory;
