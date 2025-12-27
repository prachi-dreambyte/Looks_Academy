import React from 'react';

const GalleryGrid = () => {
  const images = [
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500',
    'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500',
    'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=500',
    'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=500',
    'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=500',
    'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=500',
    'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=500',
    'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=500',
    'https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=500',
    'https://images.unsplash.com/photo-1595475884562-073c30d45670?w=500',
    'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=500',
    'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=500',
  ];

  const bannerStyle = {
    position: 'relative',
    height: '450px',
    background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1521336575822-6da63fb45455?w=1200) center/cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '0 80px',
    color: 'white',
    marginBottom: '60px',
  };

  const titleStyle = {
    fontSize: '64px',
    fontWeight: '300',
    letterSpacing: '6px',
    marginBottom: '24px',
    fontFamily: 'serif',
  };

  const breadcrumbStyle = {
    fontSize: '13px',
    letterSpacing: '3px',
    fontWeight: '300',
    opacity: '0.9',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '24px',
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 40px 60px',
  };

  const imageStyle = {
    width: '100%',
    height: '320px',
    objectFit: 'cover',
    display: 'block',
    borderRadius: '4px',
  };

  const containerStyle = {
    background: '#000',
    minHeight: '100vh',
  };

  return (
    <>
    <section className="TopBanner">
        <img src="/image/couses.webp" alt="image1"/>
      </section>
      <div style={containerStyle}>      
      <div style={gridStyle}>
        {images.map((img, index) => (
          <img 
            key={index} 
            src={img} 
            alt={`Gallery ${index + 1}`}
            style={imageStyle}
          />
        ))}
      </div>
    </div>
    </>
    
  );
};

export default GalleryGrid;