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
   const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      setIsVisible(true);
    }, []);
  
    const experts = [
      {
        id: 1,
        name: "Emma Rodriguez",
        title: "Hair Styling Master",
        specialty: "Advanced Cutting & Color",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
        experience: "15+ Years"
      },
      {
        id: 2,
        name: "Marcus Chen",
        title: "Makeup Artist Expert",
        specialty: "Bridal & Fashion Makeup",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        experience: "12+ Years"
      },
      {
        id: 3,
        name: "Sophia Bennett",
        title: "Nail Art Specialist",
        specialty: "Manicure & Pedicure",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
        experience: "10+ Years"
      },
      {
        id: 4,
        name: "James Wilson",
        title: "Barbering Expert",
        specialty: "Classic & Modern Cuts",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
        experience: "18+ Years"
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
  // Array of Instagram reel URLs
  const { pathname, hash } = useLocation();
  useEffect(() => {
  // Small delay to ensure Bootstrap is loaded
  const timer = setTimeout(() => {
    const carouselElement = document.getElementById('carouselExampleSlidesOnly');
    if (carouselElement && window.bootstrap && window.bootstrap.Carousel) {
      // Dispose of any existing carousel instance
      const existingCarousel = window.bootstrap.Carousel.getInstance(carouselElement);
      if (existingCarousel) {
        existingCarousel.dispose();
      }
      
      // Create new carousel instance
      new window.bootstrap.Carousel(carouselElement, {
        interval: 1000,
         ride: 'carousel',
          pause: false,
           wrap: true});

    }
  }, 100);
  
  return () => clearTimeout(timer);
}, []);


  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return (
    <>
      {/* <Header /> */}

 <section>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block zoom" src="/image/3.jpg" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block zoom" src="/image/1.jpg" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block zoom" src="/image/3.jpg" alt="Third slide" />
          </div>
        </div>
      </div>
    </section>
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
    {/* ***************teacher********************** */}
    <div className='pageContainer'>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .expert-card {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .expert-card:hover {
          transform: translateY(-15px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0,0,0,0.2) !important;
        }

        .expert-image-wrapper {
          position: relative;
          overflow: hidden;
          border-radius: 15px 15px 0 0;
        }

        .expert-image {
          transition: all 0.5s ease;
          width: 100%;
          height: 300px;
          object-fit: cover;
        }

        .expert-card:hover .expert-image {
          transform: scale(1.15);
          filter: brightness(0.8);
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(216, 135, 206, 0.8), rgba(106, 90, 205, 0.8));
          opacity: 0;
          transition: opacity 0.4s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 18px;
          font-weight: 600;
        }

        .expert-card:hover .overlay {
          opacity: 1;
        }

        .badge-custom {
          background: linear-gradient(135deg, #d887ce, #6a5acd);
          color: white;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          display: inline-block;
          animation: float 3s ease-in-out infinite;
        }

        .section-title {
          position: relative;
          display: inline-block;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #d887ce, #6a5acd);
          border-radius: 2px;
        }

        .card-animate {
          animation: fadeInUp 0.6s ease-out backwards;
        }

        .card-animate:nth-child(1) { animation-delay: 0.1s; }
        .card-animate:nth-child(2) { animation-delay: 0.2s; }
        .card-animate:nth-child(3) { animation-delay: 0.3s; }
        .card-animate:nth-child(4) { animation-delay: 0.4s; }

        .social-icons {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 15px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .expert-card:hover .social-icons {
          opacity: 1;
        }

        .social-icon {
          width: 35px;
          height: 35px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          background: linear-gradient(135deg, #d887ce, #6a5acd);
          color: white;
          transform: translateY(-3px);
        }
      `}</style>

      <section className='section'>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">
              Meet Our Expert Teachers
            </h2>
            <p p>
              Learn from industry professionals with decades of combined experience
            </p>
          </div>

          <div className="row">
            {experts.map((expert, index) => (
              <div key={expert.id} className="col-lg-3 col-md-6 col-sm-12">
                <div className={`card expert-card card-animate ${isVisible ? 'visible' : ''}`}>
                  <div className="expert-image-wrapper">
                    <img 
                      src={expert.image} 
                      alt={expert.name}
                      className="expert-image"
                    />
                    <div className="overlay">
                      View Profile
                    </div>
                    <div className="social-icons">
                      <div className="social-icon">
                        <span>📘</span>
                      </div>
                      <div className="social-icon">
                        <span>📷</span>
                      </div>
                      <div className="social-icon">
                        <span>🐦</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-body text-center cardBody">
                    <span className="badge-custom mb-2">{expert.experience}</span>
                    <h5 className='expertName'>{expert.name}</h5>
                    <p className='expertTitle'>{expert.title}</p>
                    <p className='specialty'>
                      <strong>Specialty:</strong> {expert.specialty}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

export default Home