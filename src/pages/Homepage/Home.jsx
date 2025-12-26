import React, { useEffect, useMemo,  useState } from 'react'
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
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    fade: false,
    cssEase: 'ease-in-out'
  };

  const slides = [
    {
      id: 1,
      title: 'Slide 1',
      description: 'Welcome to the first slide of this beautiful carousel',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 2,
      title: 'Slide 2',
      description: 'Explore amazing features with smooth transitions',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      id: 3,
      title: 'Slide 3',
      description: 'Interactive and responsive design for all devices',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      id: 4,
      title: 'Slide 4',
      description: 'Easy to customize and extend as you need',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    }
  ];

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
    window.location.href = "/courses";
  };
  
  return (
    <>
      {/* <Header /> */}
      {/* <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            <div className="bg-white rounded-4 shadow-lg p-4 p-md-5">
              <h1 className="text-center text-dark mb-4 fs-2 fw-bold">
                My Slick Carousel
              </h1>
              
              <Slider {...settings}>
                {slides.map((slide) => (
                  <div key={slide.id} className="px-2">
                    <div
                      className="rounded-3 p-5 text-center text-white d-flex flex-column align-items-center justify-content-center"
                      style={{
                        background: slide.gradient,
                        minHeight: '300px',
                        transition: 'transform 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                      <h2 className="display-4 fw-bold mb-3">{slide.title}</h2>
                      <p className="fs-5 mb-0" style={{ opacity: 0.95 }}>
                        {slide.description}
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div> */}
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
      
       {/**********HAIR**********/}
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
      {/* new section */}
       <div className="SectionWrapper">
       <div className="container hero-content">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="salon-logo">LOOKS ACADEMY</div>
              <h1 className="premium-title">PREMIUM HAIR</h1>
              <h2 className="premium-subtitle">SERVICES</h2>
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
        <img src="/image/looks.jpg" alt="Salon logo" className="logo-center"/>
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