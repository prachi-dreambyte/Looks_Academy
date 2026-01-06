import React, { useEffect, useMemo, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../../style/home.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from '../../components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { FaCamera, FaVideo, FaPhotoVideo } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Clock, Users, Award, ArrowRight } from "lucide-react";


function Home() {
  const [banners, setBanners] = useState([]);
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [whyJoinUs, setWhyJoinUs] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  /* ================= BANNERS ================= */
  useEffect(() => {
    fetch(`${API_BASE_URL}/api/banner/home`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setBanners(data.data);
        }
      });
  }, [API_BASE_URL]);

  /* ================= OUR STORY ================= */
  useEffect(() => {
    const fetchStory = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/our-story`);
        const result = await res.json();

        if (res.ok && result.success && result.data.length > 0) {
          setStory(result.data[0]);
        }
      } catch {
        console.error("Failed to load Our Story");
      } finally {
        setLoading(false);
      }
    };

    fetchStory();
  }, [API_BASE_URL]);
/* ================= WHY JOIN US ================= */
useEffect(() => {
  const fetchWhyJoinUs = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/why-join-us`);
      const result = await res.json();

      if (res.ok && result.success && result.data.length > 0) {
        // CMS allows only ONE record
        setWhyJoinUs(result.data[0]);
      }
    } catch {
      console.error("Failed to load Why Join Us");
    }
  };

  fetchWhyJoinUs();
}, [API_BASE_URL]);

  /* ================= VISIBILITY ================= */
  useEffect(() => {
    setIsVisible(true);
  }, []);


    
  const sections = [
  {
    letter: 'H',
    title: 'Hair',
    description: 'Expert styling and cuts',
    bgColor: '#1a1a1a',
    textColor: '#ffffff',
    hasImage: true,
    imagePath:'/image/HAIR/1.webp' // Add your hair image path
  },
  {
    letter: 'A',
    title: 'Academy',
    description: 'Professional training programs',
    bgColor: '#ffffff',
    textColor: '#000000',
    hasImage: true,
    imagePath: '/image/HAIR/2.webp' // Add your academy image path
  },
  {
    letter: 'I',
    title: 'Team',
    description: 'Latest trends and techniques',
    bgColor: '#000000',
    textColor: '#FFF',
    hasImage: true,
    imagePath: '/image/HAIR/3.webp' // Add your innovation image path
  },
  {
    letter: 'R',
    title: 'Shop',
    description: 'Transform your look',
    bgColor: '#FFF',
    textColor: '#000000',
    hasImage: true,
    imagePath: '/image/HAIR/4.webp' // Add your results image path
  }
];
 const courses = [
    {
      id: 1,
      title: "ARTH Courses",
      description: "Master the art of makeup application with hands-on training in bridal, editorial, and special effects makeup techniques.",
      duration: "6 Months",
      students: "150+",
      level: "Professional",
      image: "/image/Our Popular Courses/1.webp",
      category: "Makeup"
    },
    {
      id: 2,
      title: "Makeup Courses",
      description: "Learn cutting-edge hair styling techniques including cuts, colors, treatments, and modern styling methods.",
      duration: "2 Months",
      students: "120+",
      level: "Basic",
      image: "/image/Our Popular Courses/2.webp",
      category: "Makeup"
    },
    {
      id: 3,
      title: "Beauty Courses",
      description: "Comprehensive training in skincare treatments, facial therapies, and advanced aesthetic procedures.",
      duration: "3 Months",
      students: "100+",
      level: "Comprehensive",
      image: "/image/Our Popular Courses/3.webp",
      category: "Skincare"
    },
    // {
    //   id: 4,
    //   title: "Nail Art & Technology",
    //   description: "Expert training in nail care, nail art designs, gel extensions, and the latest nail technology trends.",
    //   duration: "3 Months",
    //   students: "90+",
    //   level: "Beginner",
    //   image: "/image/Our Popular Courses/4.webp",
    //   category: "Nails"
    // },
    // {
    //   id: 5,
    //   title: "Bridal Makeup Specialist",
    //   description: "Specialize in bridal makeup with traditional and contemporary techniques for Indian and international styles.",
    //   duration: "3 Months",
    //   students: "200+",
    //   level: "Advanced",
    //   image: "/image/Our Popular Courses/5.webp",
    //   category: "Bridal"
    // },
    // {
    //   id: 6,
    //   title: "Salon Management & Entrepreneurship",
    //   description: "Learn business skills to start and manage your own beauty salon, including marketing and client management.",
    //   duration: "2 Months",
    //   students: "80+",
    //   level: "All Levels",
    //   image: "/image/Our Popular Courses/6.webp",
    //   category: "Business"
    // }
  ];
  return (
    <>
      {/*===============SLIDER (DYNAMIC)====================*/}
{banners.length > 0 && (
  <div className="container-fluid my-5">
    <div
      id="imageSlider"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        {banners.map((_, index) => (
          <button
            key={index}
            data-bs-target="#imageSlider"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
          ></button>
        ))}
      </div>

      {/* Slides */}
      <div className="carousel-inner rounded">
        {banners.map((banner, index) => (
          <div
            key={banner._id}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              src={`${API_BASE_URL}${banner.image}`}
              className="d-block w-100 slider-img"
              alt={`banner-${index}`}
            />
          </div>
        ))}
      </div>

      {/* Controls */}
      {banners.length > 1 && (
        <>
          <button
            className="carousel-control-prev"
            data-bs-target="#imageSlider"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button
            className="carousel-control-next"
            data-bs-target="#imageSlider"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </>
      )}
    </div>
  </div>
)}



        {/**********HAIR**********/}
        {loading ? null : story && (
  <div className="conatiner">
    <div className="row">
      <div className="col-md-3"></div>
      <div className="col-md-6">
        <div>
          <h1 className="LooksStory">{story.title}</h1>
          <div
            className="LooksParagraph"
            dangerouslySetInnerHTML={{ __html: story.content }}
          />
        </div>
      </div>
      <div className="col-md-3"></div>
    </div>
  </div>
)}

        <div className='conatainer'>
           <div className="row g-0">
  {sections.map((section, index) => (
    <div key={index} className="col-6 col-md-6 col-lg-3">
      <div 
        className="hair-card"
        style={{ 
          backgroundColor: section.bgColor,
          color: section.textColor
        }}
      >
        {section.hasImage && (
          <div className="team-image-container" style={{ backgroundImage: `url(${section.imagePath})` }}>
            <div className="image-overlay"></div>
          </div>
        )}
        <div className="content-wrapper">
          <div className="letter">{section.letter}</div>
          <div className="hair-title">{section.title}</div>
          <p className="hair-description">{section.description}</p>
          {/* <button 
            className="view-more-btn"
            style={{ 
              borderColor: section.textColor,
              color: section.textColor
            }}
          >
            View more
          </button> */}
        </div>
      </div>
    </div>
  ))}
</div></div>        
     
     {/*========================ABOUTUS=======================================*/}      
    {whyJoinUs && (
  <section className="Aboutsection">
    <div className="container">
      <div className="AboutBackground">
        <div className="row">

          {/* LEFT CONTENT */}
          <div className="col-md-6">
            <div className="LooksAbout">
              <h1 className="AboutHead">
                {whyJoinUs.title}
              </h1>

              <p
  className="AboutPara"
  dangerouslySetInnerHTML={{ __html: whyJoinUs.content }}
/>


              <div className="text-center mt-5">
                <Link to="/AboutUs" className="nav-link">
                  <button className="AboutButton">
                    View More <ArrowRight size={20} />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-md-6">
            <div className="AboutImage">
              <img src="/image/B.png" alt="IMAGE" />
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
)}

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
                      <Link to="/EnrollNow" className="nav-link"><button className="enroll-btn">
                         Enroll Now
                         <ArrowRight size={16} />
                       </button></Link> 
                     </div>
                   </div>
                 </div>
               </div>
             ))}
           </div>
   
           {/* Read More Button */}
           <div className="text-center mt-5">
             <Link to="/Courses" className="nav-link"><button className="read-more-btn">
               <BookOpen size={20} />
               View All Courses
               <ArrowRight size={20} />
             </button></Link>
           </div>
         </div>
   
       </section>
      {/* new section */}
       <div className="SectionWrapper">
       <div className="container hero-content">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="salon-logo">LOOKS ACADEMY</div>
              <h1 className="premium-title">LEARN FROM PROFESSIONAlS</h1>
              <h2 className="premium-subtitle"></h2>
              <Link to="/ContactUs" className="nav-link"><button className="contact-btn">Contact us</button></Link>
            </div>

            <div className="col-lg-6 col-md-12">
            </div>
          </div>
        </div>
      </div>
       {/* ***************teacher********************** */}
      <section className='ConnectSection'>
  <div className='container'>
    <h1 className="Connect">Connect With Us</h1>
    <p className="ConnectPara">Follow us on social media for updates and exclusive content</p>
    <div className='row'>
      <div className='col-md-4 col-6'>
        <img src="/image/Connect With Us/6.webp" alt="Salon interior"/>
      </div>
      <div className='col-md-4 col-6'>
        <img src="/image/Connect With Us/8.webp" alt="Hair styling"/>
      </div>
      <div className='col-md-4 col-6'>
        <img src="/image/Connect With Us/2.webp" alt="Hair treatment"/>
      </div>
      <div className='col-md-4 col-6'>
        <img src="/image/Connect With Us/3.webp" alt="Salon services"/>
      </div>
      <div className='col-md-4'>
        <img src="/image/looks.jpeg" alt="Salon logo" className="logo-center"/>
      </div>
      <div className='col-md-4 col-6'>
        <img src="/image/Connect With Us/4.webp" alt="Hair coloring"/>
      </div>
      <div className='col-md-4 col-6'>
        <img src="/image/Connect With Us/5.webp" alt="Manicure service"/>
      </div>
      <div className='col-md-4 col-6'>
        <img src="/image/Connect With Us/1.webp" alt="Makeup services"/>
      </div>
      <div className='col-md-4 col-6'>
        <img src="/image/Connect With Us/7.webp" alt="Salon chairs"/>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Home