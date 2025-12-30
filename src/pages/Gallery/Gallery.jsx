import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SalonGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryImages = [
    { id: 1, category: 'hairstyling', url: '/image/Gallery/1.webp', alt: 'Hair Styling Training' },
    { id: 2, category: 'makeup', url: '/image/Gallery/6.webp', alt: 'Makeup Artistry' },
    { id: 3, category: 'hairstyling', url: '/image/Gallery/2.webp', alt: 'Coloring Techniques' },
    { id: 4, category: 'nails', url: '/image/Gallery/11.webp', alt: 'Nail Art Course' },
    { id: 5, category: 'hairstyling', url: '/image/Gallery/3.webp', alt: 'Modern Cuts' },
    { id: 6, category: 'makeup', url: '/image/Gallery/7.webp', alt: 'Bridal Makeup' },
    { id: 7, category: 'hairstyling', url: '/image/Gallery/4.webp', alt: 'Styling Session' },
    { id: 8, category: 'skincare', url: '/image/Gallery/16.webp', alt: 'Skincare Treatment' },
    { id: 9, category: 'makeup', url: '/image/Gallery/8.webp', alt: 'Professional Makeup' },
    { id: 10, category: 'nails', url: '/image/Gallery/12.webp', alt: 'Manicure Training' },
    { id: 11, category: 'hairstyling', url: '/image/Gallery/5.webp', alt: 'Hair Treatment' },
    { id: 12, category: 'skincare', url: '/image/Gallery/17.webp', alt: 'Facial Treatment' },
    { id: 13, category: 'makeup', url: '/image/Gallery/9.webp', alt: 'Eye Makeup Artistry' },
    { id: 15, category: 'nails', url: '/image/Gallery/13.webp', alt: 'Gel Nails Design' },
    { id: 16, category: 'makeup', url: '/image/Gallery/10.webp', alt: 'Eye Makeup Artistry'},
    { id: 17, category: 'nails', url: '/image/Gallery/14.webp', alt: 'Gel Nails Design' },
     { id: 18, category: 'skincare', url: '/image/Gallery/18.webp', alt: 'Facial Treatment' },
  ];

  const filters = [
    { id: 'all', name: 'All' },
    { id: 'hairstyling', name: 'Hair Styling' },
    { id: 'makeup', name: 'Makeup' },
    { id: 'nails', name: 'Nails' },
    { id: 'skincare', name: 'Skincare' }
  ];

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <>
      <style>{`
        .top-bar {
          background: #000000;
          // padding: 3px 0;
          text-align: center;
        }

        .top-bar-line {
          height: 2px;
          background: linear-gradient(90deg, transparent, #d4af37, transparent);
        }

        .header-section {
          background: #ffffff;
          padding: 80px 20px;
          text-align: center;
          position: relative;
          border-bottom: 3px solid #d4af37;
        }

        .header-decoration {
          width: 120px;
          height: 3px;
          background: #d4af37;
          margin: 0 auto 30px;
        }

        .main-title {
          font-size: 4.5rem;
          font-weight: 700;
          color: #000000;
          letter-spacing: 8px;
          text-transform: uppercase;
          margin-bottom: 20px;
          position: relative;
        }

        .title-accent {
          color: #d4af37;
        }

        .subtitle {
          font-size: 1.3rem;
          color: #666666;
          letter-spacing: 3px;
          text-transform: uppercase;
          font-weight: 300;
        }

        .filter-wrapper {
          background: #000000;
          padding: 40px 20px;
          text-align: center;
        }

        .filter-container {
          display: inline-flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
          align-items: center;
        }

        .filter-button {
          background: transparent;
          border: 2px solid #d4af37;
          color: #d4af37;
          padding: 15px 40px;
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }

        .filter-button.active {
          background: #d4af37;
          color: #000000;
        }

        .gallery-section {
          background: #ffffff;
          padding: 0;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 0;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          aspect-ratio: 1;
          cursor: pointer;
          border: 1px solid #d4af37;
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: all 0.4s ease;
        }

        .image-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
          color: #d4af37;
          padding: 25px 15px 15px;
          font-size: 0.95rem;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          text-align: center;
        }

        .gold-accent {
          position: absolute;
          top: 15px;
          right: 15px;
          width: 8px;
          height: 8px;
          background: #d4af37;
          transform: rotate(45deg);
          box-shadow: 0 0 10px rgba(212, 175, 55, 0.6);
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-content {
          position: relative;
          max-width: 90%;
          max-height: 90vh;
          animation: zoomIn 0.4s ease;
        }

        @keyframes zoomIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .modal-content img {
          max-width: 100%;
          max-height: 85vh;
          object-fit: contain;
          border: 5px solid #d4af37;
          box-shadow: 0 0 50px rgba(212, 175, 55, 0.5);
        }

        .modal-close {
          position: absolute;
          top: -60px;
          right: 0;
          background: #d4af37;
          border: 2px solid #000000;
          color: #000000;
          width: 50px;
          height: 50px;
          font-size: 28px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-close:hover {
          background: #000000;
          color: #d4af37;
        }

        .footer-accent {
          background: #000000;
          padding: 50px 20px;
          text-align: center;
        }

        .footer-line {
          width: 200px;
          height: 2px;
          background: #d4af37;
          margin: 0 auto 20px;
        }

        .footer-text {
          color: #d4af37;
          font-size: 1rem;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        @media (max-width: 1400px) {
          .gallery-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        @media (max-width: 1200px) {
          .main-title {
            font-size: 3.5rem;
            letter-spacing: 6px;
          }

          .gallery-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 992px) {
          .main-title {
            font-size: 3rem;
            letter-spacing: 5px;
          }

          .subtitle {
            font-size: 1.1rem;
          }

          .gallery-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .filter-button {
            padding: 12px 30px;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 768px) {
          .header-section {
            padding: 60px 20px;
          }

          .main-title {
            font-size: 2.5rem;
            letter-spacing: 4px;
          }

          .subtitle {
            font-size: 1rem;
            letter-spacing: 2px;
          }

          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .filter-wrapper {
            padding: 30px 15px;
          }

          .filter-button {
            padding: 10px 25px;
            font-size: 0.85rem;
            letter-spacing: 1.5px;
          }

          .image-caption {
            font-size: 0.8rem;
            padding: 20px 10px 10px;
          }
        }

        @media (max-width: 576px) {
          .main-title {
            font-size: 2rem;
            letter-spacing: 3px;
          }

          .subtitle {
            font-size: 0.9rem;
            letter-spacing: 1.5px;
          }

          .header-decoration {
            width: 80px;
          }

          .filter-container {
            gap: 12px;
          }

          .filter-button {
            padding: 10px 20px;
            font-size: 0.8rem;
          }

          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 340px) {
          .main-title {
            font-size: 1.6rem;
            letter-spacing: 2px;
          }

          .subtitle {
            font-size: 0.8rem;
            letter-spacing: 1px;
          }

          .filter-button {
            padding: 8px 15px;
            font-size: 0.75rem;
            letter-spacing: 1px;
          }

          .image-caption {
            font-size: 0.7rem;
            letter-spacing: 1px;
          }
        }
      `}</style>

      <div className="top-bar">
        <div className="top-bar-line"></div>
      </div>
<section className="TopBanner">
        <img src="/image/couses.webp" alt="image1"/>
      </section>

      <div className="filter-wrapper">
        <div className="filter-container">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-button ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.name}
            </button>
          ))}
        </div>
      </div>

      <div className="gallery-section">
        <div className="gallery-grid">
          {filteredImages.map((image, index) => (
            <div 
              key={image.id} 
              className="gallery-item"
              onClick={() => setSelectedImage(image)}
            >
              <img src={image.url} alt={image.alt} loading="lazy" />
              <div className="gold-accent"></div>
              <div className="image-caption">{image.alt}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-accent">
        <div className="footer-line"></div>
        <p className="footer-text">Crafting Beauty Professionals</p>
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedImage(null)}>
              ×
            </button>
            <img src={selectedImage.url} alt={selectedImage.alt} />
          </div>
        </div>
      )}
    </>
  );
};

export default SalonGallery;