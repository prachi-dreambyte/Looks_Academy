import React, { useEffect, useState } from "react";
import styles from "../../../assets/styles/connect-with-us/AllGallery.module.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ReactPaginate from "react-paginate";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const ITEMS_PER_PAGE = 10;

const LooksAllGallery = () => {
  const navigate = useNavigate();

  const [galleries, setGalleries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const API_URL = `${API_BASE_URL}/api/looksgallery`;

  /* ================= FETCH ALL LOOKS GALLERY ================= */
  useEffect(() => {
    const fetchGalleries = async () => {
      try {
        const res = await fetch(`${API_URL}/get-all`);
        const result = await res.json();

        if (res.ok && result.success) {
          setGalleries(result.data);
        } else {
          toast.error("Failed to fetch gallery");
        }
      } catch (error) {
        toast.error("Server error");
      } finally {
        setLoading(false);
      }
    };

    fetchGalleries();
  }, []);

  /* ================= PAGINATION LOGIC ================= */
  const pageCount = Math.ceil(galleries.length / ITEMS_PER_PAGE);
  const offset = currentPage * ITEMS_PER_PAGE;

  const currentItems = galleries.slice(
    offset,
    offset + ITEMS_PER_PAGE
  );

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

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
      const res = await fetch(`${API_URL}/delete/${id}`, {
        method: "DELETE",
      });

      const result = await res.json();
      if (!res.ok || !result.success) throw new Error();

      setGalleries((prev) => prev.filter((g) => g._id !== id));
      toast.success("Gallery deleted successfully");
    } catch {
      toast.error("Failed to delete gallery");
    }
  };

  /* ================= EDIT HANDLER ================= */
  const handleEdit = (id) => {
    navigate(`edit/${id}`);
  };

  if (loading) {
    return <p className={styles.loading}>Loading gallery...</p>;
  }

  return (
    <div className={styles.tableCard}>
      {/* HEADER */}
      <div className={styles.header}>
        <h2>Looks Gallery</h2>

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
            <Th>S.No</Th>
            <Th>Image</Th>
            <Th>Title</Th>
            <Th>Category</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>

        <Tbody>
          {currentItems.length === 0 ? (
            <Tr>
              <Td colSpan="5" className={styles.empty}>
                No gallery found
              </Td>
            </Tr>
          ) : (
            currentItems.map((gallery, index) => (
              <Tr key={gallery._id}>
                {/* SERIAL NUMBER */}
                <Td>
                  {currentPage * ITEMS_PER_PAGE + index + 1}
                </Td>

                <Td>
                  <img
                    src={`${API_BASE_URL}/${gallery.image}`}
                    alt={gallery.title}
                    className={styles.galleryImg}
                  />
                </Td>

                <Td>{gallery.title}</Td>
                <Td>{gallery.category}</Td>

                <Td>
                  <div className={styles.actionBtns}>
                    <button
                      className={styles.editBtn}
                      onClick={() => handleEdit(gallery._id)}
                    >
                      Edit
                    </button>

                    <button
                      className={styles.deleteBtn}
                      onClick={() => confirmDelete(gallery._id)}
                    >
                      Delete
                    </button>
                  </div>
                </Td>
              </Tr>
            ))
          )}
        </Tbody>
      </Table>

      {/* PAGINATION */}
      {pageCount > 1 && (
        <ReactPaginate
          previousLabel="← Prev"
          nextLabel="Next →"
          breakLabel="..."
          pageCount={pageCount}
          onPageChange={handlePageChange}
          containerClassName={styles.pagination}
          activeClassName={styles.activePage}
          pageClassName={styles.pageItem}
          previousClassName={styles.pageItem}
          nextClassName={styles.pageItem}
          disabledClassName={styles.disabled}
        />
      )}
    </div>
  );
};

export default LooksAllGallery;
