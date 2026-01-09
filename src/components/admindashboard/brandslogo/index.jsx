import React, { useEffect, useState } from "react";
import styles from "../../../assets/styles/brandlogo/BrandsLogo.module.css";
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

const AllBrands = () => {
  const navigate = useNavigate();

  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const API_URL = `${API_BASE_URL}/api/brands`;

  /* ================= FETCH ALL BRANDS ================= */
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const res = await fetch(`${API_URL}/get-all`);
        const result = await res.json();

        if (res.ok && result.success) {
          setBrands(result.data);
        } else {
          toast.error("Failed to fetch brands");
        }
      } catch {
        toast.error("Server error");
      } finally {
        setLoading(false);
      }
    };

    fetchBrands();
  }, []);

  /* ================= PAGINATION ================= */
  const pageCount = Math.ceil(brands.length / ITEMS_PER_PAGE);
  const offset = currentPage * ITEMS_PER_PAGE;
  const currentItems = brands.slice(offset, offset + ITEMS_PER_PAGE);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  /* ================= DELETE BRAND (DIRECT) ================= */
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${API_URL}/delete/${id}`, {
        method: "DELETE",
      });

      const result = await res.json();
      if (!res.ok || !result.success) throw new Error();

      setBrands((prev) => prev.filter((b) => b._id !== id));
      toast.success("Brand deleted successfully");
    } catch {
      toast.error("Failed to delete brand");
    }
  };

  if (loading) {
    return <p className={styles.loading}>Loading brands...</p>;
  }

  return (
    <div className={styles.tableCard}>
      {/* HEADER */}
      <div className={styles.header}>
        <h2>Brand Logos</h2>

        {/* ✅ ADD BRAND BUTTON (NOT REMOVED) */}
        <button
          className={styles.createBtn}
          onClick={() => navigate("add-new")}
        >
          + Add Brand
        </button>
      </div>

      {/* TABLE */}
      <Table className={styles.table}>
        <Thead>
          <Tr>
            <Th>S.No</Th>
            <Th>Logo</Th>
            <Th>Brand Title</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>

        <Tbody>
          {currentItems.length === 0 ? (
            <Tr>
              <Td colSpan="4" className={styles.empty}>
                No brands found
              </Td>
            </Tr>
          ) : (
            currentItems.map((brand, index) => (
              <Tr key={brand._id}>
                <Td>
                  {currentPage * ITEMS_PER_PAGE + index + 1}
                </Td>

                <Td>
                  <img
                    src={`${API_BASE_URL}/${brand.image}`}
                    alt={brand.title}
                    className={styles.galleryImg}
                  />
                </Td>

                <Td>{brand.title}</Td>

                <Td>
                  <button
                    className={styles.deleteBtn}
                    onClick={() => handleDelete(brand._id)}
                  >
                    Delete
                  </button>
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

export default AllBrands;
