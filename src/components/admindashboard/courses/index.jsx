import React, { useEffect, useState } from "react";
import styles from "../../../assets/styles/courses/AllCourses.module.css";
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

const AllCourses = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ ENV BASE URL
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const API_URL = `${API_BASE_URL}/api/courses`;

  // FETCH COURSES
  const fetchCourses = async () => {
    try {
      const res = await fetch(`${API_URL}/get-all-courses`);
      const result = await res.json();

      if (res.ok && result.success) {
        setCourses(result.data);
      } else {
        toast.error("Failed to fetch courses");
      }
    } catch (error) {
      toast.error("Failed to fetch courses");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  // DELETE COURSE
  const handleDelete = async (id) => {
    try {
      const res = await fetch(
        `${API_URL}/delete-course/${id}`,
        { method: "DELETE" }
      );

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error("Delete failed");
      }

      setCourses((prev) => prev.filter((course) => course._id !== id));
      toast.success("Course deleted successfully");
    } catch (error) {
      toast.error("Failed to delete course");
    }
  };

  if (loading) return <p>Loading courses...</p>;

  return (
    <div className={styles.tableCard}>
      {/* HEADER */}
      <div className={styles.header}>
        <h2>All Courses</h2>
        <button
          className={styles.createBtn}
          onClick={() => navigate("add-new")}
        >
          + Create Course
        </button>
      </div>

      {/* RESPONSIVE TABLE */}
      <Table className={styles.table}>
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Brand</Th>
            <Th>Price</Th>
            <Th>Level</Th>
            <Th>Status</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>

        <Tbody>
          {courses.length === 0 ? (
            <Tr>
              <Td colSpan="6" style={{ textAlign: "center" }}>
                No courses found
              </Td>
            </Tr>
          ) : (
            courses.map((course) => (
              <Tr key={course._id}>
                <Td>{course.title}</Td>
                <Td>{course.brand || "—"}</Td>
                <Td>₹{course.price}</Td>
                <Td>{course.level || "—"}</Td>
                <Td>
                  <span className={styles.published}>Published</span>
                </Td>
                <Td className={styles.actions}>
                  <button
                    className={styles.editBtn}
                    onClick={() =>
  navigate(`edit/${course._id}`)
}
                  >
                    Edit
                  </button>
                  <button
                    className={styles.deleteBtn}
                    onClick={() => handleDelete(course._id)}
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

export default AllCourses;
