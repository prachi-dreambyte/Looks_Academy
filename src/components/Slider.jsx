import React, { useState, useEffect, useRef } from "react";

export default function Slider() {
  const [isPaused, setIsPaused] = useState(false);
  const [brands, setBrands] = useState([]);
  const scrollRef = useRef(null);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  /* ================= FETCH BRANDS ================= */
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const res = await fetch(
          `${API_BASE_URL}/api/brands/get-all`
        );
        const result = await res.json();

        if (res.ok && result.success) {
          setBrands(result.data);
        }
      } catch (error) {
        console.error("Failed to load brands");
      }
    };

    fetchBrands();
  }, []);

  /* ================= AUTO SCROLL ================= */
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused || brands.length === 0)
      return;

    let scrollPosition = 0;
    const scrollSpeed = 1;

    const animate = () => {
      scrollPosition += scrollSpeed;

      if (
        scrollPosition >=
        scrollContainer.scrollWidth / 2
      ) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;

      if (!isPaused) {
        requestAnimationFrame(animate);
      }
    };

    const frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isPaused, brands]);

  /* ================= DUPLICATE FOR LOOP ================= */
  const allBrands = [...brands, ...brands, ...brands];

  if (brands.length === 0) return null;

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />

      <style>{`
        .marquee-container {
          overflow: hidden;
          position: relative;
          background: #fff;
          padding: 60px 0;
        }

        .marquee-scroll {
          display: flex;
          overflow-x: hidden;
          gap: 2rem;
          padding: 0 2rem;
        }

        .Brands {
          font-size: 40px;
          font-weight: 500;
          letter-spacing: 10px;
          margin-bottom: 30px;
          text-transform: uppercase;
        }

        .marquee-scroll::-webkit-scrollbar {
          display: none;
        }

        .brand-card {
          flex: 0 0 auto;
          width: 250px;
          transition: transform 0.3s ease;
        }

        .brand-card:hover {
          transform: scale(1.05);
        }

        .fade-edge-left,
        .fade-edge-right {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 150px;
          z-index: 10;
          pointer-events: none;
        }

        .fade-edge-left {
          left: 0;
          background: linear-gradient(
            to right,
            #fff,
            transparent
          );
        }

        .fade-edge-right {
          right: 0;
          background: linear-gradient(
            to left,
            #fff,
            transparent
          );
        }
      `}</style>

      <div className="marquee-container">
        <div className="container text-center mb-5">
          <h2 className="Brands">Our Partner Brands</h2>
          <p className="lead text-muted">
            Trusted by industry leaders worldwide
          </p>
        </div>

        <div className="position-relative">
          <div className="fade-edge-left" />
          <div className="fade-edge-right" />

          <div
            ref={scrollRef}
            className="marquee-scroll"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {allBrands.map((brand, index) => (
              <div
                key={`${brand._id}-${index}`}
                className="brand-card"
              >
                <div className="card shadow-sm border-0">
                  <div
                    className="card-body d-flex align-items-center justify-content-center p-4"
                    style={{ minHeight: "180px" }}
                  >
                    <img
                      src={`${API_BASE_URL}/${brand.image}`}
                      alt={brand.title}
                      className="img-fluid"
                      style={{
                        maxHeight: "120px",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
