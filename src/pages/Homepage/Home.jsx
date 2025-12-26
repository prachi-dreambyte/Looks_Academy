import React, { useEffect, useMemo,  useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../../style/home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Footer from '../../components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { FaCamera, FaVideo, FaPhotoVideo } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Clock, Users, Award, ArrowRight } from "lucide-react";


function Home() {
  
  // slider===============
   const [currentIndex, setCurrentIndex] = useState(0);
     const [isMobile, setIsMobile] = useState(false);
   
     // Sample slides - replace with your actual images
     const slides = [
       {
         desktop: '/image/HomeBanners/1.webp',
         mobile: '/13.webp',
         alt: 'Slide 1'
       },
       {
         desktop: '/image/HomeBanners/2.webp',
         mobile: '/slide2-mobile.jpg',
         alt: 'Slide 2'
       },
       {
         desktop: '/image/HomeBanners/3.webp',
         mobile: '/slide3-mobile.jpg',
         alt: 'Slide 3'
       },
       {
         desktop: '/image/HomeBanners/4.webp',
         mobile: '/slide4-mobile.jpg',
         alt: 'Slide 4'
       }
     ];
   
     // Check if mobile on mount and resize
     useEffect(() => {
       const checkMobile = () => {
         setIsMobile(window.innerWidth < 768);
       };
       
       checkMobile();
       window.addEventListener('resize', checkMobile);
       
       return () => window.removeEventListener('resize', checkMobile);
     }, []);
   
     const goToPrevious = () => {
       setCurrentIndex((prevIndex) => 
         prevIndex === 0 ? slides.length - 1 : prevIndex - 1
       );
     };
   
     const goToNext = () => {
       setCurrentIndex((prevIndex) => 
         prevIndex === slides.length - 1 ? 0 : prevIndex + 1
       );
     };
   
     const goToSlide = (index) => {
       setCurrentIndex(index);
     };
   
     // Auto-play functionality - continuous, no hover pause
     useEffect(() => {
       const interval = setInterval(() => {
         goToNext();
       }, 5000); // Change slide every 5 seconds
   
       return () => clearInterval(interval);
     }, []); // Empty dependency array means it runs once on mount
   
     // Styles
     const styles = {
       container: {
         position: 'relative',
         width: '100%',
         height: isMobile ? '400px' : '600px',
         overflow: 'hidden',
         backgroundColor: '#111827',
         margin: '80px 0px 0px 0px',
       },
       slidesContainer: {
         position: 'relative',
         width: '100%',
         height: '100%'
       },
       slide: (index) => ({
         position: 'absolute',
         top: 0,
         left: 0,
         width: '100%',
         height: '100%',
         transition: 'opacity 700ms',
         opacity: index === currentIndex ? 1 : 0
       }),
       image: {
         width: '100%',
         height: '100%',
         objectFit: 'cover'
       },
       button: {
         position: 'absolute',
         top: '50%',
         transform: 'translateY(-50%)',
         backgroundColor: 'rgba(255, 255, 255, 0.8)',
         color: '#1f2937',
         border: 'none',
         borderRadius: '50%',
         boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
         cursor: 'pointer',
         transition: 'all 200ms',
         zIndex: 10,
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
         padding: isMobile ? '8px' : '12px'
       },
       prevButton: {
         left: '16px'
       },
       nextButton: {
         right: '16px'
       },
       buttonHover: {
         backgroundColor: 'white',
         transform: 'translateY(-50%) scale(1.1)'
       },
       dotsContainer: {
         position: 'absolute',
         bottom: '16px',
         left: '50%',
         transform: 'translateX(-50%)',
         display: 'flex',
         gap: isMobile ? '8px' : '12px',
         zIndex: 10
       },
       dot: (isActive) => ({
         width: isActive ? (isMobile ? '24px' : '32px') : (isMobile ? '8px' : '12px'),
         height: isMobile ? '8px' : '12px',
         borderRadius: '9999px',
         backgroundColor: isActive ? 'white' : 'rgba(255, 255, 255, 0.5)',
         border: 'none',
         cursor: 'pointer',
         transition: 'all 300ms',
         padding: 0
       }),
       dotHover: {
         backgroundColor: 'rgba(255, 255, 255, 0.75)'
       }
     };
  const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      setIsVisible(true);
    }, []);

     const sections = [
    {
      letter: 'H',
      title: 'SALON',
      description: 'We are happy to be offering our full range of services in the salon, wash and blow drys!',
      bgColor: '#f5f5f5',
      textColor: '#000',
      hasImage: true
    },
    {
      letter: 'A',
      title: 'SERVICES',
      description: 'Specializing in: precision cutting, balayage, creative hair color and keratin smoothing.',
      bgColor: '#000',
      textColor: '#fff',
      hasImage: true
    },
    {
      letter: 'I',
      title: 'TEAM',
      description: 'We are looking forward to providing you with a fun, relaxing and safe appointment.',
      bgColor: '#f5f5f5',
      textColor: '#000',
      hasImage: true
    },
    {
      letter: 'R',
      title: 'SHOP',
      description: 'From barely there pink to balayage blonde, our color experts will nail any tone color.',
      bgColor: '#000',
      textColor: '#fff',
      hasImage: true
    }
  ];
   const courses = [
    {
      id: 1,
      title: "Professional Makeup Artistry",
      description: "Master the art of makeup application with hands-on training in bridal, editorial, and special effects makeup techniques.",
      duration: "6 Months",
      students: "150+",
      level: "Beginner to Advanced",
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=500&h=300&fit=crop",
      category: "Makeup"
    },
    {
      id: 2,
      title: "Hair Styling & Design",
      description: "Learn cutting-edge hair styling techniques including cuts, colors, treatments, and modern styling methods.",
      duration: "4 Months",
      students: "120+",
      level: "All Levels",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500&h=300&fit=crop",
      category: "Hair"
    },
    {
      id: 3,
      title: "Skin Care & Aesthetics",
      description: "Comprehensive training in skincare treatments, facial therapies, and advanced aesthetic procedures.",
      duration: "5 Months",
      students: "100+",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&h=300&fit=crop",
      category: "Skincare"
    },
    {
      id: 4,
      title: "Nail Art & Technology",
      description: "Expert training in nail care, nail art designs, gel extensions, and the latest nail technology trends.",
      duration: "3 Months",
      students: "90+",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&h=300&fit=crop",
      category: "Nails"
    },
    {
      id: 5,
      title: "Bridal Makeup Specialist",
      description: "Specialize in bridal makeup with traditional and contemporary techniques for Indian and international styles.",
      duration: "3 Months",
      students: "200+",
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=500&h=300&fit=crop",
      category: "Bridal"
    },
    {
      id: 6,
      title: "Salon Management & Entrepreneurship",
      description: "Learn business skills to start and manage your own beauty salon, including marketing and client management.",
      duration: "2 Months",
      students: "80+",
      level: "All Levels",
      image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=500&h=300&fit=crop",
      category: "Business"
    }
  ];
  const handleReadMore = () => {
    // Navigate to courses page or show more courses
    window.location.href = "/Courses";
  };
  
  return (
    <>
      {/*===============SLIDER====================*/}
       <div style={styles.container}>
             {/* Slides */}
             <div style={styles.slidesContainer}>
               {slides.map((slide, index) => (
                 <div key={index} style={styles.slide(index)}>
                   <img
                     src={isMobile ? slide.mobile : slide.desktop}
                     alt={slide.alt}
                     style={styles.image}
                   />
                 </div>
               ))}
             </div>
       
             {/* Previous Button */}
             <button
               onClick={goToPrevious}
               style={{ ...styles.button, ...styles.prevButton }}
               onMouseEnter={(e) => {
                 Object.assign(e.currentTarget.style, styles.buttonHover);
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
                 e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
               }}
               aria-label="Previous slide"
             >
               <ChevronLeft size={isMobile ? 24 : 28} />
             </button>
       
             {/* Next Button */}
             <button
               onClick={goToNext}
               style={{ ...styles.button, ...styles.nextButton }}
               onMouseEnter={(e) => {
                 Object.assign(e.currentTarget.style, styles.buttonHover);
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
                 e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
               }}
               aria-label="Next slide"
             >
               <ChevronRight size={isMobile ? 24 : 28} />
             </button>
       
             {/* Dot Indicators */}
             <div style={styles.dotsContainer}>
               {slides.map((_, index) => (
                 <button
                   key={index}
                   onClick={() => goToSlide(index)}
                   style={styles.dot(index === currentIndex)}
                   onMouseEnter={(e) => {
                     if (index !== currentIndex) {
                       e.currentTarget.style.backgroundColor = styles.dotHover.backgroundColor;
                     }
                   }}
                   onMouseLeave={(e) => {
                     if (index !== currentIndex) {
                       e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
                     }
                   }}
                   aria-label={`Go to slide ${index + 1}`}
                 />
               ))}
             </div>
           </div>
        {/**********HAIR**********/}
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className=''>
          <h1 className='LooksStory'>OUR STORY</h1>
          <p className='LooksParagraph'>Looks Salon is one of the most powerful and fastest growing salon chain brand PanIndia,
             that has given the hairstyling industry a new horizon. Emerging as the largest single salon chain in the country.</p>
        </div>
          </div>
          <div className="col-md-3"></div>
        </div>
        
      <div className="row g-0">
  {sections.map((section, index) => (
    <div key={index} className="col-12 col-md-6 col-lg-3">
      <div 
        className="hair-card"
        style={{ 
          backgroundColor: section.bgColor,
          color: section.textColor
        }}
      >
        {section.hasImage && (
          <div className="team-image-container">
            <div className="image-overlay"></div>
          </div>
        )}
        <div className="content-wrapper">
          <div className="letter">{section.letter}</div>
          <div className="hair-title">{section.title}</div>
          <p className="hair-description">{section.description}</p>
          <button 
            className="view-more-btn"
            style={{ 
              borderColor: section.textColor,
              color: section.textColor
            }}
          >
            View more
          </button>
        </div>
      </div>
    </div>
  ))}
</div>
     {/*========================ABOUTUS=======================================*/}      
    <section className="Aboutsection">
      <div className='container'>
          <div className='AboutBackground'>
             <div className='row'>
            <div className='col-md-6'>
            <div className='LooksAbout'>
              <h1 className='AboutHead'>ABOUT US (WHO WE ARE)</h1>
              <p className='AboutPara'>UK International, one of the top makeup academy and beauty school, is where your journey towards a successful beauty career begins. 
              Our Beauty School is known to offer the best education and professional training across a variety of beauty disciplines.</p>
              <p className='AboutPara'>Whether you are interested in learning cosmetology, the art of makeup, hairdressing, nail art, or more, our programs are designed to teach you top-notch knowledge 
                that helps you excel in the beauty industry. The cosmetology program we offer is an exploration of beauty techniques. From advanced skincare and makeup applications to 
                hair cutting and styling, we have everything that will ensure you a secured career. 
              </p>
              <button className='btn AboutButton'>READ MORE</button>
            </div>
          </div>
          <div className='col-md-6'>
           <div className='AboutImage'>
            <img src="/image/A.jpeg" alt="IMAGE"/>
           </div>
          </div>
          </div>
        </div>
      </div>
    </section>
    {/* **********COURSES**************** */}
    <section className="courses-section">
      <div className="container-fluid">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Our Popular Courses</h2>
          <p className="section-subtitle">
            Explore our comprehensive beauty and wellness courses designed to transform your passion into a professional career
          </p>
        </div>

        {/* Courses Grid */}
        <div className="row">
          {courses.map((course) => (
            <div key={course.id} className="col-lg-4 col-md-6 col-sm-12">
              <div className="course-card">
                <div className="course-image-wrapper">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="course-image"
                  />
                  <div className="course-category">{course.category}</div>
                </div>
                
                <div className="course-content">
                  <h3 className="course-title">{course.title}</h3>
                  <p className="course-description">{course.description}</p>
                  
                  <div className="course-meta">
                    <div className="meta-item">
                      <Clock size={16} />
                      <span>{course.duration}</span>
                    </div>
                    <div className="meta-item">
                      <Users size={16} />
                      <span>{course.students}</span>
                    </div>
                  </div>
                  
                  <div className="course-footer">
                    <div className="course-level">
                      <Award size={16} />
                      <span>{course.level}</span>
                    </div>
                    <button className="enroll-btn">
                      Enroll Now
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Read More Button */}
        <div className="text-center mt-5">
          <button onClick={handleReadMore} className="read-more-btn">
            <BookOpen size={20} />
            View All Courses
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

    </section>

      {/* new section */}
       <div className="SectionWrapper">
       <div className="container hero-content">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="salon-logo">LOOKS ACADEMY</div>
              <h1 className="premium-title">LEARN FROM PROFESSIONAL</h1>
              <h2 className="premium-subtitle">HAIR</h2>
              <button className="contact-btn">Contact us</button>
            </div>

            <div className="col-lg-6 col-md-12">
            </div>
          </div>
        </div>
      </div>
       {/* ***************teacher********************** */}
      <section className='Aboutsection'>
  <div className='container'>
    <h1 className="Connect">Connect With Us</h1>
    <p className="ConnectPara">Follow us on social media for updates and exclusive content</p>
    <div className='row'>
      <div className='col-md-4'>
        <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop" alt="Salon interior"/>
      </div>
      <div className='col-md-4'>
        <img src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&h=600&fit=crop" alt="Hair styling"/>
      </div>
      <div className='col-md-4'>
        <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop" alt="Hair treatment"/>
      </div>
      <div className='col-md-4'>
        <img src="https://images.unsplash.com/photo-1595475884562-073c30d45670?w=800&h=600&fit=crop" alt="Salon services"/>
      </div>
      <div className='col-md-4'>
        <img src="/image/Wlooks.png" alt="Salon logo" className="logo-center"/>
      </div>
      <div className='col-md-4'>
        <img src="https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=800&h=600&fit=crop" alt="Hair coloring"/>
      </div>
      <div className='col-md-4'>
        <img src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&h=600&fit=crop" alt="Manicure service"/>
      </div>
      <div className='col-md-4'>
        <img src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&h=600&fit=crop" alt="Makeup services"/>
      </div>
      <div className='col-md-4'>
        <img src="https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=800&h=600&fit=crop" alt="Salon chairs"/>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Home