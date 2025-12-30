import React, { useState, useEffect, useRef } from 'react';

export default function Slider() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);

  // Brand images - replace these URLs with your actual brand images
  const brands = [
    { id: 1, name: 'Brand 1', url: '/image/Brands/1.webp' },
    { id: 2, name: 'Brand 2', url: '/image/Brands/14.webp' },
    { id: 3, name: 'Brand 3', url: '/image/Brands/2.webp' },
    { id: 4, name: 'Brand 4', url: '/image/Brands/3.webp' },
    { id: 5, name: 'Brand 5', url: '/image/Brands/4.webp' },
    { id: 6, name: 'Brand 6', url: '/image/Brands/5.webp' },
    { id: 7, name: 'Brand 7', url: '/image/Brands/6.webp' },
    { id: 8, name: 'Brand 8', url: '/image/Brands/7.webp' },
    { id: 9, name: 'Brand 9', url: '/image/Brands/8.webp' },
    { id: 10, name: 'Brand 10', url: '/image/Brands/9.webp' },
    { id: 11, name: 'Brand 11', url: '/image/Brands/10.webp' },
    { id: 12, name: 'Brand 12', url: '/image/Brands/11.webp' },
    { id: 13, name: 'Brand 13', url: '/image/Brands/12.webp' },
    { id: 14, name: 'Brand 14', url: '/image/Brands/13.webp' },
    { id: 15, name: 'Brand 15', url: '/image/Brands/15.webp' },
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused) return;

    let scrollPosition = 0;
    const scrollSpeed = 1; // pixels per frame

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Reset when we've scrolled through half the content (one set of brands)
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      
      if (!isPaused) {
        requestAnimationFrame(animate);
      }
    };

    const animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  // Triple the brands for smooth infinite scroll
  const allBrands = [...brands, ...brands, ...brands];

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
          .Brands{
           font-size: 40px;
          font-weight: 500;
          letter-spacing: 10px;
          color: Black;
          margin-bottom: 30px;
          text-transform: uppercase;
          }
        
        .marquee-scroll::-webkit-scrollbar {
          display: none;
        }
        
        .brand-card {
          flex: 0 0 auto;
          width: 250px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .brand-card:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 30px rgba(0,0,0,0.15) !important;
        }
        
        .fade-edge-left {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 150px;
          background: linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0));
          z-index: 10;
          pointer-events: none;
        }
        
        .fade-edge-right {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 150px;
          background: linear-gradient(to left, rgba(255,255,255,1), rgba(255,255,255,0));
          z-index: 10;
          pointer-events: none;
        }
      `}</style>

      <div className="marquee-container">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="Brands">Our Partner Brands</h2>
            <p className="lead text-muted">Trusted by industry leaders worldwide</p>
          </div>
        </div>

        <div className="position-relative">
          <div className="fade-edge-left"></div>
          <div className="fade-edge-right"></div>
          
          <div 
            ref={scrollRef}
            className="marquee-scroll"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {allBrands.map((brand, index) => (
              <div key={`${brand.id}-${index}`} className="brand-card">
                <div className="card shadow-sm h-100 border-0">
                  <div className="card-body d-flex align-items-center justify-content-center p-4" style={{minHeight: '180px'}}>
                    <img
                      src={brand.url}
                      alt={brand.name}
                      className="img-fluid"
                      style={{maxWidth: '100%', maxHeight: '120px', objectFit: 'contain'}}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="container">
          <div className="text-center mt-4">
            <small className="text-muted fst-italic">Hover over the brands to pause scrolling</small>
          </div>
        </div> */}
      </div>
    </>
  );
}