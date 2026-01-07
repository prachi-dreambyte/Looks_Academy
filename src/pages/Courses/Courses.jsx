import React, { useState, useEffect } from "react";
import "../../style/course.css";
import { Link } from "react-router-dom";
import { color } from "framer-motion";

const CoursesComponent = () => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState({});
  const [banner, setBanner] = useState(null);


  /* ================= HELPERS ================= */
  const stripHtml = (html = "") => html.replace(/<[^>]+>/g, "");

  const shortText = (html, limit = 120) => {
    const text = stripHtml(html);
    return text.length > limit ? text.slice(0, limit) + "..." : text;
  };

  /* ================= FETCH COURSES ================= */
  useEffect(() => {
    fetch(`${API_BASE_URL}/api/courses/get-all-courses`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setCourses(data.data);
        }
      })
      .catch(() => console.error("Failed to load courses"));
  }, [API_BASE_URL]);

  /* ================= INTERSECTION OBSERVER ================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.dataset.index]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll(".course-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [courses]);

useEffect(() => {
  fetch(`${API_BASE_URL}/api/courses-gallery-banner/get`)
    .then((res) => res.json())
    .then((data) => {
      if (data.success && data.data) {
        setBanner(data.data);
      }
    })
    .catch(() => console.error("Failed to load courses banner"));
}, [API_BASE_URL]);

  const selectedCourseData = courses.find((c) => c._id === selectedCourse);


  const formatPrice = (price) => {
  return new Intl.NumberFormat("en-IN").format(price);
};


  /* ================= MODAL STYLES (UNCHANGED) ================= */
  const modalOverlayStyle = {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.9)",
    display: selectedCourse ? "flex" : "none",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    padding: "20px",
  };

  const modalStyle = {
    background: "#1a1a1a",
    borderRadius: "12px",
    padding: "40px",
    maxWidth: "600px",
    width: "100%",
    border: "2px solid #FFD700",
  };

  const modalTitleStyle = {
    fontSize: "32px",
    fontWeight: "300",
    letterSpacing: "3px",
    marginBottom: "24px",
    textAlign: "center",
    fontFamily: "serif",
    color: "#ffff",
  };

  const modalTextStyle = {
    fontSize: "16px",
    lineHeight: "1.8",
    color: "#ccc",
    textAlign: "center",
    marginBottom: "32px",
  };

  const modalButtonStyle = {
    width: "100%",
    padding: "16px",
    background: "#FFD700",
    color: "#000",
    border: "none",
    borderRadius: "6px",
    fontSize: "14px",
    letterSpacing: "2px",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "5px",
  };

  return (
    <>
      {/* TOP BANNER */}
      <section className="TopBanner mt-5">
  {banner?.image && (
    <img
      src={`${API_BASE_URL}/${banner.image}`}
      alt="Courses Banner"
    />
  )}
</section>



      <div
        className="courses-container"
        style={{ background: "#fff", minHeight: "100vh" }}
      >
        <div className="courses-header fade-in">
          <div className="header-decoration"></div>
          <h1 className="courses-title">OUR COURSES</h1>
          <div className="title-underline"></div>
          <p className="courses-subtitle">
            TRANSFORM YOUR PASSION INTO PROFESSION
          </p>
        </div>

        {/* ================= CARDS ================= */}
        <div className="courses-grid">
          {courses.map((course, index) => (
            <div
              key={course._id}
              data-index={index}
              className={`course-card ${
                hoveredCard === course._id ? "hovered" : ""
              } ${selectedCourse === course._id ? "selected" : ""} ${
                isVisible[index] ? "visible" : ""
              }`}
              onMouseEnter={() => setHoveredCard(course._id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="card-shine"></div>

              <div className="image-container">
                <img
                  src={`${API_BASE_URL}/uploads/${course.image}`}
                  alt={course.title}
                  className="course-image"
                  onError={(e) =>
                    (e.target.src =
                      "https://via.placeholder.com/400x250?text=No+Image")
                  }
                />
                <div className="imageOverlay"></div>
              </div>

              <div className="card-content">
                <h3 className="course-name">{course.title}</h3>

                <p className="course-trainer">
                  BY {(course.brand || "").toUpperCase()}
                </p>

                {/* SHORT DESCRIPTION – CARD SAFE */}
                <p className="course-description">
                  {shortText(course.description)}
                </p>

                <div className="details-row">
                  <div className="detail-item">
  <div className="detail-label">PRICE</div>
  <div className="detail-value">
    ₹{formatPrice(course.price)}
  </div>
</div>

                  <div className="detail-item">
                    <div className="detail-label">DURATION</div>
                    <div className="detail-value">{course.duration}</div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-label">LEVEL</div>
                    <div className="detail-value">{course.level}</div>
                  </div>
                </div>

                {/* TAGS AS HIGHLIGHTS */}
                <div className="highlights">
                  {(course.tags || []).map((tag, idx) => (
                    <div key={idx} className="highlight-item">
                      <div className="highlight-dot"></div>
                      <span>{tag}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`enquire-button ${
                    selectedCourse === course._id ? "selected" : ""
                  }`}
                  onClick={() => setSelectedCourse(course._id)}
                >
                  <span>
                    {selectedCourse === course._id ? "SELECTED" : "ENQUIRE NOW"}
                  </span>
                  <div className="button-shine"></div>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ================= MODAL ================= */}
        <div style={modalOverlayStyle} onClick={() => setSelectedCourse(null)}>
          {selectedCourseData && (
            <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
              <h2 style={modalTitleStyle}>{selectedCourseData.title}</h2>

              <div style={modalTextStyle}>
                <div style={{ marginBottom: "20px" }}>
                  <div
                    style={{
                      color: "#FFD700",
                      fontSize: "12px",
                      letterSpacing: "2px",
                      marginBottom: "8px",
                    }}
                  >
                    TAUGHT BY
                  </div>
                  <div style={{ fontSize: "18px" }}>
                    {selectedCourseData.brand}
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginBottom: "24px",
                    padding: "20px 0",
                    borderTop: "1px solid #333",
                    borderBottom: "1px solid #333",
                  }}
                >
                  <div>
                    <div style={{ color: "#888", fontSize: "12px" }}>
                      DURATION
                    </div>
                    <div style={{ fontSize: "20px" }}>
                      {selectedCourseData.duration}
                    </div>
                  </div>
                  <div>
                    <div style={{ color: "#888", fontSize: "12px" }}>PRICE</div>
                    <div style={{ fontSize: "20px" }}>
                      ₹{selectedCourseData.price}
                    </div>
                  </div>
                  <div>
                    <div style={{ color: "#888", fontSize: "12px" }}>LEVEL</div>
                    <div style={{ fontSize: "20px" }}>
                      {selectedCourseData.level}
                    </div>
                  </div>
                </div>
                <div className="highlights">
                  {(selectedCourseData.tags || []).map((tag, idx) => (
                    <div key={idx} className="highlight-item">
                      <div className="highlight-dot"></div>
                      <span>{tag}</span>
                    </div>
                  ))}
                </div>
                <p>*Price is exclusive of applicable taxes</p>
              </div>

              <Link to="/EnrollNow">
                <button style={modalButtonStyle}>ENROLL NOW</button>
              </Link>

              <button
                style={modalButtonStyle}
                onClick={() => setSelectedCourse(null)}
              >
                CLOSE
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CoursesComponent;
