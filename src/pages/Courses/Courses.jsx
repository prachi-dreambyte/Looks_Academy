import React, { useState } from 'react';

const CoursesComponent = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const courses = [
    {
      id: 1,
      name: 'ARTH Course',
      trainer: 'L\'Oréal Trainers',
      price: '1,50,000',
      duration: '6 months',
      level: 'Professional',
      description: 'Elite professional training by L\'Oréal certified trainers',
      highlights: ['International Certification', 'Hands-on Training', 'Industry Standards', 'Advanced Techniques'],
      image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600'
    },
    {
      id: 2,
      name: 'Makeup Course',
      trainer: 'Professional Artists',
      price: '50,000',
      duration: '2 months',
      level: 'Basic',
      description: 'Foundation course in professional makeup artistry',
      highlights: ['Skin Preparation', 'Color Theory', 'Basic Techniques', 'Product Knowledge'],
      image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600'
    },
    {
      id: 3,
      name: 'Makeup Mastery',
      trainer: 'Master Trainers',
      price: '1,50,000',
      duration: '6 months',
      level: 'Basic to Advanced',
      description: 'Complete journey from basics to advanced makeup artistry',
      highlights: ['Bridal Makeup', 'Fashion Makeup', 'Special Effects', 'Portfolio Building'],
      image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600'
    },
    {
      id: 4,
      name: 'Beauty Course',
      trainer: 'Beauty Specialists',
      price: '70,000',
      duration: '3 months',
      level: 'Comprehensive',
      description: 'Complete beauty therapy and cosmetology program',
      highlights: ['Skin Care', 'Hair Styling', 'Nail Art', 'Spa Treatments'],
      image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600'
    }
  ];

  const containerStyle = {
    background: '#000',
    minHeight: '100vh',
    padding: '80px 40px',
    color: '#fff',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '80px',
  };

  const titleStyle = {
    fontSize: '56px',
    fontWeight: '300',
    letterSpacing: '8px',
    marginBottom: '16px',
    fontFamily: 'serif',
  };

  const subtitleStyle = {
    fontSize: '16px',
    letterSpacing: '3px',
    color: '#999',
    fontWeight: '300',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '32px',
    maxWidth: '1400px',
    margin: '0 auto',
  };

  const cardStyle = (id) => ({
    background: hoveredCard === id ? '#1a1a1a' : '#0a0a0a',
    borderRadius: '12px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'all 0.4s ease',
    transform: hoveredCard === id ? 'translateY(-12px)' : 'translateY(0)',
    boxShadow: hoveredCard === id 
      ? '0 20px 60px rgba(255,215,0,0.2)' 
      : '0 4px 20px rgba(0,0,0,0.5)',
    border: selectedCourse === id ? '2px solid #FFD700' : '2px solid transparent',
  });

  const imageContainerStyle = {
    width: '100%',
    height: '240px',
    overflow: 'hidden',
    position: 'relative',
  };

  const imageStyle = (id) => ({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.4s ease',
    transform: hoveredCard === id ? 'scale(1.1)' : 'scale(1)',
  });

  const overlayStyle = (id) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: hoveredCard === id 
      ? 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))' 
      : 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.8))',
    transition: 'all 0.4s ease',
  });

  const contentStyle = {
    padding: '28px',
  };

  const courseNameStyle = {
    fontSize: '28px',
    fontWeight: '400',
    letterSpacing: '2px',
    marginBottom: '8px',
    fontFamily: 'serif',
  };

  const trainerStyle = {
    fontSize: '13px',
    color: '#FFD700',
    letterSpacing: '2px',
    marginBottom: '16px',
    fontWeight: '300',
  };

  const descriptionStyle = {
    fontSize: '14px',
    color: '#bbb',
    lineHeight: '1.6',
    marginBottom: '20px',
  };

  const detailsRowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    padding: '16px 0',
    borderTop: '1px solid #333',
    borderBottom: '1px solid #333',
  };

  const detailItemStyle = {
    textAlign: 'center',
  };

  const detailLabelStyle = {
    fontSize: '11px',
    color: '#888',
    letterSpacing: '1px',
    marginBottom: '6px',
  };

  const detailValueStyle = {
    fontSize: '16px',
    fontWeight: '500',
    letterSpacing: '1px',
  };

  const highlightsStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '8px',
    marginBottom: '24px',
  };

  const highlightItemStyle = {
    fontSize: '12px',
    color: '#aaa',
    padding: '6px 0',
    display: 'flex',
    alignItems: 'center',
  };

  const dotStyle = {
    width: '4px',
    height: '4px',
    background: '#FFD700',
    borderRadius: '50%',
    marginRight: '8px',
  };

  const buttonStyle = (id) => ({
    width: '100%',
    padding: '14px',
    background: selectedCourse === id ? '#FFD700' : 'transparent',
    color: selectedCourse === id ? '#000' : '#FFD700',
    border: '2px solid #FFD700',
    borderRadius: '6px',
    fontSize: '14px',
    letterSpacing: '2px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  });

  const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.9)',
    display: selectedCourse ? 'flex' : 'none',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    padding: '20px',
  };

  const modalStyle = {
    background: '#1a1a1a',
    borderRadius: '12px',
    padding: '40px',
    maxWidth: '600px',
    width: '100%',
    border: '2px solid #FFD700',
  };

  const modalTitleStyle = {
    fontSize: '32px',
    fontWeight: '300',
    letterSpacing: '3px',
    marginBottom: '24px',
    textAlign: 'center',
    fontFamily: 'serif',
  };

  const modalTextStyle = {
    fontSize: '16px',
    lineHeight: '1.8',
    color: '#ccc',
    textAlign: 'center',
    marginBottom: '32px',
  };

  const modalButtonStyle = {
    width: '100%',
    padding: '16px',
    background: '#FFD700',
    color: '#000',
    border: 'none',
    borderRadius: '6px',
    fontSize: '14px',
    letterSpacing: '2px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  const selectedCourseData = courses.find(c => c.id === selectedCourse);

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1 style={titleStyle}>OUR COURSES</h1>
        <p style={subtitleStyle}>TRANSFORM YOUR PASSION INTO PROFESSION</p>
      </div>

      <div style={gridStyle}>
        {courses.map((course) => (
          <div
            key={course.id}
            style={cardStyle(course.id)}
            onMouseEnter={() => setHoveredCard(course.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={imageContainerStyle}>
              <img src={course.image} alt={course.name} style={imageStyle(course.id)} />
              <div style={overlayStyle(course.id)}></div>
            </div>

            <div style={contentStyle}>
              <h3 style={courseNameStyle}>{course.name}</h3>
              <p style={trainerStyle}>BY {course.trainer.toUpperCase()}</p>
              <p style={descriptionStyle}>{course.description}</p>

              <div style={detailsRowStyle}>
                <div style={detailItemStyle}>
                  <div style={detailLabelStyle}>PRICE</div>
                  <div style={detailValueStyle}>₹{course.price}</div>
                </div>
                <div style={detailItemStyle}>
                  <div style={detailLabelStyle}>DURATION</div>
                  <div style={detailValueStyle}>{course.duration}</div>
                </div>
                <div style={detailItemStyle}>
                  <div style={detailLabelStyle}>LEVEL</div>
                  <div style={detailValueStyle}>{course.level}</div>
                </div>
              </div>

              <div style={highlightsStyle}>
                {course.highlights.map((highlight, idx) => (
                  <div key={idx} style={highlightItemStyle}>
                    <div style={dotStyle}></div>
                    {highlight}
                  </div>
                ))}
              </div>

              <button
                style={buttonStyle(course.id)}
                onClick={() => setSelectedCourse(course.id)}
                onMouseEnter={(e) => {
                  if (selectedCourse !== course.id) {
                    e.target.style.background = '#FFD700';
                    e.target.style.color = '#000';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCourse !== course.id) {
                    e.target.style.background = 'transparent';
                    e.target.style.color = '#FFD700';
                  }
                }}
              >
                {selectedCourse === course.id ? 'SELECTED' : 'ENQUIRE NOW'}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={modalOverlayStyle} onClick={() => setSelectedCourse(null)}>
        {selectedCourseData && (
          <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
            <h2 style={modalTitleStyle}>{selectedCourseData.name}</h2>
            
            <div style={modalTextStyle}>
              <div style={{marginBottom: '20px'}}>
                <div style={{color: '#FFD700', fontSize: '12px', letterSpacing: '2px', marginBottom: '8px'}}>TAUGHT BY</div>
                <div style={{fontSize: '18px'}}>{selectedCourseData.trainer}</div>
              </div>
              
              <div style={{display: 'flex', justifyContent: 'space-around', marginBottom: '24px', padding: '20px 0', borderTop: '1px solid #333', borderBottom: '1px solid #333'}}>
                <div>
                  <div style={{color: '#888', fontSize: '12px', letterSpacing: '1px', marginBottom: '8px'}}>DURATION</div>
                  <div style={{fontSize: '20px', fontWeight: '500'}}>{selectedCourseData.duration}</div>
                </div>
                <div>
                  <div style={{color: '#888', fontSize: '12px', letterSpacing: '1px', marginBottom: '8px'}}>PRICE</div>
                  <div style={{fontSize: '20px', fontWeight: '500'}}>₹{selectedCourseData.price}</div>
                </div>
                <div>
                  <div style={{color: '#888', fontSize: '12px', letterSpacing: '1px', marginBottom: '8px'}}>LEVEL</div>
                  <div style={{fontSize: '20px', fontWeight: '500'}}>{selectedCourseData.level}</div>
                </div>
              </div>
              
              <div style={{marginBottom: '24px', textAlign: 'left'}}>
                <div style={{color: '#FFD700', fontSize: '12px', letterSpacing: '2px', marginBottom: '12px'}}>COURSE HIGHLIGHTS</div>
                {selectedCourseData.highlights.map((highlight, idx) => (
                  <div key={idx} style={{display: 'flex', alignItems: 'center', marginBottom: '8px'}}>
                    <div style={{width: '6px', height: '6px', background: '#FFD700', borderRadius: '50%', marginRight: '12px'}}></div>
                    <span style={{fontSize: '14px', color: '#ddd'}}>{highlight}</span>
                  </div>
                ))}
              </div>
              
              <div style={{fontSize: '13px', color: '#888', fontStyle: 'italic'}}>
                *Price is exclusive of applicable taxes
              </div>
            </div>
            
            <button
              style={modalButtonStyle}
              onClick={() => setSelectedCourse(null)}
              onMouseEnter={(e) => {
                e.target.style.background = '#FFC700';
                e.target.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#FFD700';
                e.target.style.transform = 'scale(1)';
              }}
            >
              CLOSE
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesComponent;