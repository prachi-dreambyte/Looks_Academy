import React, { useState, useEffect } from 'react';
import '../../style/course.css';

const CoursesComponent = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState({});

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

    const cards = document.querySelectorAll('.course-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

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

  const selectedCourseData = courses.find(c => c.id === selectedCourse);
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


  return (
    <>
    <section className="TopBanner">
        <img src="/image/couses.webp" alt="image1"/>
      </section>
      <div className="courses-container" style={{ background: '#000', minHeight: '100vh' }}>
      <div className="courses-header fade-in">
        <div className="header-decoration"></div>
        <h1 className="courses-title">OUR COURSES</h1>
        <div className="title-underline"></div>
        <p className="courses-subtitle">TRANSFORM YOUR PASSION INTO PROFESSION</p>
      </div>

      <div className="courses-grid">
        {courses.map((course, index) => (
          <div
            key={course.id}
            data-index={index}
            className={`course-card ${hoveredCard === course.id ? 'hovered' : ''} ${
              selectedCourse === course.id ? 'selected' : ''
            } ${isVisible[index] ? 'visible' : ''}`}
            onMouseEnter={() => setHoveredCard(course.id)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="card-shine"></div>
            <div className="image-container">
              <img src={course.image} alt={course.name} className="course-image" />
              <div className="image-overlay"></div>
            </div>

            <div className="card-content">
              <h3 className="course-name">{course.name}</h3>
              <p className="course-trainer">BY {course.trainer.toUpperCase()}</p>
              <p className="course-description">{course.description}</p>

              <div className="details-row">
                <div className="detail-item">
                  <div className="detail-label">PRICE</div>
                  <div className="detail-value">₹{course.price}</div>
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

              <div className="highlights">
                {course.highlights.map((highlight, idx) => (
                  <div key={idx} className="highlight-item">
                    <div className="highlight-dot"></div>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <button
                className={`enquire-button ${selectedCourse === course.id ? 'selected' : ''}`}
                onClick={() => setSelectedCourse(course.id)}
              >
                <span>{selectedCourse === course.id ? 'SELECTED' : 'ENQUIRE NOW'}</span>
                <div className="button-shine"></div>
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
    </>
  );
};

export default CoursesComponent;