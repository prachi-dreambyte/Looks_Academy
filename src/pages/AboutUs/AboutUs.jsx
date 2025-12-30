import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/AboutSection.css';
import { Link, useLocation } from 'react-router-dom';

const AboutSection = () => {
 const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
   const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a comprehensive range of beauty services including haircuts, styling, coloring, highlights, balayage, keratin treatments, manicures, pedicures, facials, waxing, makeup, and bridal packages. Our expert stylists are trained in the latest trends and techniques."
    },
    {
      question: "Do I need to book an appointment?",
      answer: "While walk-ins are welcome based on availability, we highly recommend booking an appointment to ensure you get your preferred time slot and stylist. You can book online through our website or call us directly."
    },
    {
      question: "What are your salon's hours?",
      answer: "We're open Monday through Saturday from 9:00 AM to 8:00 PM, and Sunday from 10:00 AM to 6:00 PM. Extended hours are available for special events and bridal services with advance booking."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We require at least 24 hours notice for cancellations or rescheduling. Late cancellations or no-shows may be subject to a fee. We understand emergencies happen, so please contact us as soon as possible."
    },
    {
      question: "Do you offer bridal packages?",
      answer: "Yes! We specialize in bridal hair and makeup services. Our packages include trial sessions, day-of services for the bride and bridal party, and can be customized to your specific needs. Contact us to schedule a consultation."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
     <section className="TopBanner">
        <img src="/image/aboutUs.webp" alt="image1"/>
      </section>
       <div className="salon-about-page">
      {/* Animated Background Elements */}
      <div className="bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>

      {/* Floating Background Icons */}
      <div className="floating-icons">
        <div className="float-icon icon-1">✨</div>
        <div className="float-icon icon-2">✨</div>
        <div className="float-icon icon-3">✨</div>
        <div className="float-icon icon-4">✨</div>
        <div className="float-icon icon-5">✨</div>
        <div className="float-icon icon-6">✨</div>
        <div className="float-icon icon-7">✨</div>
        <div className="float-icon icon-8">✨</div>
      </div>

      {/* Hero Section */}
      <section className={`hero-section ${isLoaded ? 'loaded' : ''}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <h1 className="hero-title">About Our Academy</h1>
              <p className="hero-subtitle">Looks Academy is a premier professional training institute dedicated to shaping the next generation of beauty and hairstyling experts. Backed by the legacy of Looks Salon—India’s largest and fastest-growing pan-India salon chain—the academy brings industry knowledge, global techniques, and real-world salon experience under one roof. With a strong focus on practical learning, expert mentorship, and career-oriented education, Looks Academy equips students with the skills, confidence, and professionalism required to succeed in the ever-evolving beauty and wellness industry. Located in Dehradun, 
                the academy stands as a center of excellence where creativity is nurtured, talent is refined, and passion is transformed into a rewarding career.</p>
              <div className="golden-line"></div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="hero-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=600&fit=crop" 
                  alt="Salon Academy" 
                  className="hero-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      
      <section className="story-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title">Our Story</h2>
              <div className="title-underline"></div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 mb-4">
              <div className="story-image-grid">
                <img 
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop" 
                  alt="Training Session" 
                  className="story-img story-img-1"
                />
                <img 
                  src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=300&fit=crop" 
                  alt="Students Learning" 
                  className="story-img story-img-2"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="story-card">
                <p className="story-text">
                  Founded with a vision to revolutionize beauty education, our Salon Academy has been nurturing talent and shaping careers for over a decade. We believe that every artist deserves world-class training and the opportunity to excel in the beauty industry.
                </p>
                <p className="story-text">
                  Our state-of-the-art facilities combined with industry-leading instructors provide students with an unparalleled learning experience. We don't just teach techniques; we inspire creativity and build confidence.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12">
              <div className="stats-grid">
                <div className="stat-card">
                  <h3 className="stat-number">5000+</h3>
                  <p className="stat-label">Graduates</p>
                </div>
                <div className="stat-card">
                  <h3 className="stat-number">50+</h3>
                  <p className="stat-label">Expert Trainers</p>
                </div>
                <div className="stat-card">
                  <h3 className="stat-number">15+</h3>
                  <p className="stat-label">Years Excellence</p>
                </div>
                <div className="stat-card">
                  <h3 className="stat-number">98%</h3>
                  <p className="stat-label">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4">
              <div className="mv-card mission-card">
                <div className="mv-image-wrapper">
                  <img 
                    src="https://images.unsplash.com/photo-1559599101-f09722fb4948?w=600&h=400&fit=crop" 
                    alt="Our Mission" 
                    className="mv-image"
                  />
                  <div className="mv-overlay">
                    <h3 className="mv-title">Our Mission</h3>
                  </div>
                </div>
                <div className="mv-content">
                  <p className="mv-text">
                    To empower aspiring beauty professionals with cutting-edge skills, industry knowledge, and the confidence to succeed. We are committed to providing accessible, comprehensive training that transforms passion into profitable careers while maintaining the highest standards of excellence in beauty education.
                  </p>
                  <ul className="mv-list">
                    <li>Deliver world-class education and training</li>
                    <li>Foster creativity and innovation</li>
                    <li>Build industry-ready professionals</li>
                    <li>Create opportunities for success</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 mb-4">
              <div className="mv-card vision-card">
                <div className="mv-image-wrapper">
                  <img 
                    src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&h=400&fit=crop" 
                    alt="Our Vision" 
                    className="mv-image"
                  />
                  <div className="mv-overlay">
                    <h3 className="mv-title">Our Vision</h3>
                  </div>
                </div>
                <div className="mv-content">
                  <p className="mv-text">
                    To become the leading beauty academy globally, recognized for excellence in education and for producing the most sought-after beauty professionals in the industry. We envision a future where our graduates set trends, lead innovations, and elevate the standards of beauty artistry worldwide.
                  </p>
                  <ul className="mv-list">
                    <li>Lead the beauty education industry</li>
                    <li>Set global standards for excellence</li>
                    <li>Inspire the next generation of artists</li>
                    <li>Shape the future of beauty</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title">Our Values</h2>
              <div className="title-underline"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="value-card">
                <div className="value-image-wrapper">
                  <img 
                    src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&h=300&fit=crop" 
                    alt="Excellence" 
                    className="value-image"
                  />
                </div>
                <div className="value-icon">✨</div>
                <h4 className="value-title">Excellence</h4>
                <p className="value-text">We strive for perfection in every aspect of beauty education and skill development.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="value-card">
                <div className="value-image-wrapper">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop" 
                    alt="Innovation" 
                    className="value-image"
                  />
                </div>
                <div className="value-icon">💡</div>
                <h4 className="value-title">Innovation</h4>
                <p className="value-text">Embracing cutting-edge techniques and trends to keep our students ahead of the curve.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="value-card">
                <div className="value-image-wrapper">
                  <img 
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop" 
                    alt="Community" 
                    className="value-image"
                  />
                </div>
                <div className="value-icon">🤝</div>
                <h4 className="value-title">Community</h4>
                <p className="value-text">Building a supportive network of professionals who grow together and inspire each other.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="sectionTitle">Our Facilities</h2>
              <div className="title-underline"></div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="gallery-item">
                <img 
                  src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=400&h=500&fit=crop" 
                  alt="Modern Classroom" 
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <p>Modern Classrooms</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="gallery-item">
                <img 
                  src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=400&h=500&fit=crop" 
                  alt="Practice Stations" 
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <p>Professional Stations</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="gallery-item">
                <img 
                  src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=400&h=500&fit=crop" 
                  alt="State-of-art Equipment" 
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <p>Advanced Equipment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       {/* FAQ Section */}
      <div className="salonFaqWrapper">
  <div className="salonFaqContainer">
    <div className="salonFaqHeader">
      <h1 className="salonFaqTitle">Frequently Asked</h1>
      <p className="salonFaqSubtitle">
        Everything you need to know about our salon services and policies
      </p>
    </div>

    <div className="salonFaqList">
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className={`salonFaqItem ${openIndex === index ? 'active' : ''}`}
        >
          <button
            className="salonFaqQuestionBtn"
            onClick={() => toggleAccordion(index)}
          >
            <div className="salonFaqQuestionContent">
              <span className="salonFaqNumber">0{index + 1}</span>
              <span className="salonFaqQuestionText">{faq.question}</span>
            </div>
            <svg
              className={`salonChevronIcon ${openIndex === index ? 'open' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div className={`salonFaqAnswer ${openIndex === index ? 'open' : ''}`}>
            <p className="salonFaqAnswerText">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
    </div>
     {/* CTA Section */}
     {/* Parallax CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="cta-title">Want To Become A Perfect Beauty Professional?</h2>
              <p className="cta-text">Are you ready to take the next step towards your career?</p>
              <Link to="/EnrollNow"><button className="cta-button">Enroll Now</button></Link>
            </div>
          </div>
        </div>
      </section>
      </>
   
  );
}

export default AboutSection;