import React, { useEffect, useState } from "react";
import styles from "../../../assets/styles/faq/AllFaqs.module.css";
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

const AllFaqs = () => {
  const navigate = useNavigate();
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ ENV BASE URL
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const API_URL = `${API_BASE_URL}/api/faqs`;

  const fetchFaqs = async () => {
    try {
      const res = await fetch(`${API_URL}/get-all-faqs`);
      const result = await res.json();

      if (res.ok && result.success) {
        setFaqs(result.data);
      } else {
        toast.error("Failed to fetch FAQs");
      }
    } catch (error) {
      toast.error("Failed to fetch FAQs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFaqs();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(
        `${API_URL}/delete-faq/${id}`,
        { method: "DELETE" }
      );

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error("Delete failed");
      }

      setFaqs((prev) => prev.filter((faq) => faq._id !== id));
      toast.success("FAQ deleted successfully");
    } catch (error) {
      toast.error("Failed to delete FAQ");
    }
  };

  if (loading) return <p>Loading FAQs...</p>;

  return (
    <div className={styles.tableCard}>
      {/* Header */}
      <div className={styles.header}>
        <h2>All FAQs</h2>
        <button
          className={styles.createBtn}
          onClick={() => navigate("add-new")}
        >
          + Create FAQ
        </button>
      </div>

      {/* Responsive Table */}
      <Table className={styles.table}>
        <Thead>
          <Tr>
            <Th>Question</Th>
            <Th>Answer</Th>
            <Th>Date</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>

        <Tbody>
          {faqs.length === 0 ? (
            <Tr>
              <Td colSpan="4" style={{ textAlign: "center" }}>
                No FAQs found
              </Td>
            </Tr>
          ) : (
            faqs.map((faq) => (
              <Tr key={faq._id}>
                <Td>{faq.question}</Td>
                <Td>
                  {faq.answer.length > 50
                    ? faq.answer.slice(0, 50) + "..."
                    : faq.answer}
                </Td>
                <Td>
                  {new Date(faq.createdAt).toLocaleDateString()}
                </Td>
                <Td className={styles.actions}>
                  <button
                    className={styles.editBtn}
                    onClick={() =>
                      navigate(`/admin/faqs/edit/${faq._id}`)
                    }
                  >
                    Edit
                  </button>
                  <button
                    className={styles.deleteBtn}
                    onClick={() => handleDelete(faq._id)}
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

export default AllFaqs;
