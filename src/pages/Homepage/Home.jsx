import React, { useEffect, useMemo,  useState } from 'react'
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
  
  // slider===============//
  const images = [
    '/image/HomeBanners/1.webp',
    '/image/HomeBanners/2.webp',
    '/image/HomeBanners/3.webp',
    '/image/HomeBanners/4.webp',
  ];
  const [isVisible, setIsVisible] = useState(false);
  
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
    imagePath:'/image/1.jpg' // Add your hair image path
  },
  {
    letter: 'A',
    title: 'Academy',
    description: 'Professional training programs',
    bgColor: '#ffffff',
    textColor: '#000000',
    hasImage: true,
    imagePath: '/image/Our Popular Courses/3.webp' // Add your academy image path
  },
  {
    letter: 'I',
    title: 'Team',
    description: 'Latest trends and techniques',
    bgColor: '#000000',
    textColor: '#FFF',
    hasImage: true,
    imagePath: '/image/Our Popular Courses/6.webp' // Add your innovation image path
  },
  {
    letter: 'R',
    title: 'Shop',
    description: 'Transform your look',
    bgColor: '#FFF',
    textColor: '#000000',
    hasImage: true,
    imagePath: '/image/A.jpeg' // Add your results image path
  }
];

  const handleReadMore = () => {
    // Navigate to courses page or show more courses
    window.location.href = "/Courses";
  };
  
  return (
    <>
      {/*===============SLIDER====================*/}
      <div className="container my-5">
      <div
        id="imageSlider"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        {/* Indicators */}
        <div className="carousel-indicators">
          <button data-bs-target="#imageSlider" data-bs-slide-to="0" className="active"></button>
          <button data-bs-target="#imageSlider" data-bs-slide-to="1"></button>
          <button data-bs-target="#imageSlider" data-bs-slide-to="2"></button>
          <button data-bs-target="#imageSlider" data-bs-slide-to="3"></button>
        </div>

        {/* Slides */}
        <div className="carousel-inner rounded">
          <div className="carousel-item active">
            <img
              src="/image/HomeBanners/1.webp"
              className="d-block w-100 slider-img"
              alt="Slide 1"
            />
          </div>

          <div className="carousel-item">
            <img
              src="/image/HomeBanners/2.webp"
              className="d-block w-100 slider-img"
              alt="Slide 2"
            />
          </div>

          <div className="carousel-item">
            <img
              src="/image/HomeBanners/3.webp"
              className="d-block w-100 slider-img"
              alt="Slide 3"
            />
          </div>

          <div className="carousel-item">
            <img
              src="/image/HomeBanners/4.webp"
              className="d-block w-100 slider-img"
              alt="Slide 4"
            />
          </div>
        </div>

        {/* Controls */}
        <button className="carousel-control-prev" data-bs-target="#imageSlider" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button className="carousel-control-next" data-bs-target="#imageSlider" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>


        {/**********HAIR**********/}
        <div className='conatiner'>
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
        </div>
        <div className='conatainer'>
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
    <section className="Aboutsection">
      <div className='container'>
          <div className='AboutBackground'>
             <div className='row'>
            <div className='col-md-6'>
            <div className='LooksAbout'>
              <h1 className='AboutHead'>ABOUT US (WHO WE ARE)</h1>
              <p className='AboutPara'>LOOKS Academy, one of the top makeup academy and beauty school, is where your journey towards a successful beauty career begins. 
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
            <img src="/image/B.png" alt="IMAGE"/>
           </div>
          </div>
          </div>
        </div>
      </div>
    </section>
    {/* **********COURSES**************** */}
       {/* ***************teacher********************** */}
      <section className='Aboutsection'>
  <div className='container'>
    <h1 className="Connect">Connect With Us</h1>
    <p className="ConnectPara">Follow us on social media for updates and exclusive content</p>
    <div className='row'>
      <div className='col-md-4'>
        <img src="/image/Connect With Us/1.webp" alt="Salon interior"/>
      </div>
      <div className='col-md-4'>
        <img src="/image/Connect With Us/8.webp" alt="Hair styling"/>
      </div>
      <div className='col-md-4'>
        <img src="/image/Connect With Us/2.webp" alt="Hair treatment"/>
      </div>
      <div className='col-md-4'>
        <img src="/image/Connect With Us/3.webp" alt="Salon services"/>
      </div>
      <div className='col-md-4'>
        <img src="/image/Wlooks.png" alt="Salon logo" className="logo-center"/>
      </div>
      <div className='col-md-4'>
        <img src="/image/Connect With Us/4.webp" alt="Hair coloring"/>
      </div>
      <div className='col-md-4'>
        <img src="/image/Connect With Us/5.webp" alt="Manicure service"/>
      </div>
      <div className='col-md-4'>
        <img src="/image/Connect With Us/6.webp" alt="Makeup services"/>
      </div>
      <div className='col-md-4'>
        <img src="/image/Connect With Us/7.webp" alt="Salon chairs"/>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Home