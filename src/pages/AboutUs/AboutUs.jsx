import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/aboutus.css';


const AboutSection = () => {
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
      <div className="about-section">
      <div className="container-fluid px-3 px-md-5">
        <div className="row align-items-center g-4">
          {/* Left Content Column */}
          <div className="col-lg-6 col-md-12">
            <div className="content-wrapper">
              <div className="decorative-circle circle-1"></div>
              <div className="decorative-circle circle-2"></div>
              
              <div className="badge-wrapper">
              </div>
              
              <h1 className="section-title">
                <span className="title-line">About Us</span>
              </h1>
              
              <div className="title-underline"></div>
              
              <p className="tagline">Nurture International Beauty Professionals with perfection</p>
              
              <div className="content-body">
                <div className="info-card">
                  <div className="card-icon">
                    <div className="icon-circle"></div>
                  </div>
                  <div className="card-content">
                    <h3>LOOKS BEAUTY ACADEMY</h3>
                    <p>
                      A comprehensive Beauty Academy offering courses in Makeup, 
                      <strong> Hair, Skin, Nails, Nutrition, Salon Management, Hair Extension, 
                      Eyelashes Extension</strong> and others. We are the finest and best 
                      International Beauty Academy in India with high-quality international 
                      standards and certified by many National and International certification 
                      organisations.
                    </p>
                  </div>
                </div>
                
                <div className="mission-statement">
                  <div className="quote-mark">"</div>
                  <p>
                    We craft and develop every student as an international PRO Beauty Professional. 
                    <strong> We Educate, Encourage, Evolve, Empower, Embrace, and Excel</strong> every 
                    aspiring beauty professional and nurture them with Perfection and every student 
                    gets Empowered to make their career and brand globally.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Images Column */}
          <div className="col-lg-6 col-md-12">
            <div className="images-container">
              <div className="decorative-circle circle-3"></div>
              <div className="decorative-circle circle-4"></div>
              
              <div className="image-stack">
                <div className="image-wrapper primary-image">
                  <div className="image-border"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80" 
                    alt="Beauty Professional 1" 
                    className="img-fluid"
                  />
                </div>
                
                <div className="image-wrapper secondary-image">
                  <div className="image-border"></div>
                 <img 
                    src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80" 
                    alt="Beauty Professional 1" 
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="background-pattern"></div>
    </div>
     <section className="mission-vision-section">
      <div className="container py-5">
        <div className="section-header text-center mb-5">
          <h2 className="sectionMission">
            <span className="title-word">Our Purpose</span></h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            <span className="subtitle-word">Empowering</span>{' '}
            <span className="subtitle-word">tomorrow</span>{' '}
            <span className="subtitle-word">through</span>{' '}
            <span className="subtitle-word">innovation</span>{' '}
            <span className="subtitle-word">today</span>
          </p>
        </div>

        <div className="row g-4">
          {/* Mission Card */}
          <div className="col-lg-6 col-md-12">
            <div className="card mission-card h-100">
              <div className="card-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop" 
                  alt="Mission" 
                  className="card-image"
                />
                <div className="image-overlay"></div>
              </div>
              <div className="card-body">
                <div className="icon-badge mission-badge">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <h3 className="card-title">
                  <span className="card-title-word">Our Mission</span>

                </h3>
                <p className="card-text">
                  <span className="text-line">To empower businesses with innovative solutions
                  that transform challenges into opportunities.
                  We deliver excellence through cutting-edge
                  technology and exceptional service.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="col-lg-6 col-md-12">
            <div className="card vision-card h-100">
              <div className="card-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop" 
                  alt="Vision" 
                  className="card-image"
                />
                <div className="image-overlay"></div>
              </div>
              <div className="card-body">
                <div className="icon-badge vision-badge">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
                <h3 className="card-title">
                  <span className="card-title-word">Our Vision</span>
                </h3>
                <p className="card-text">
                  <span className="text-line">To be the global leader recognized for
                  transforming how organizations achieve their
                  goals through innovation and creativity that
                  inspires positive change worldwide.</span>
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    <div className="salon-faq-wrapper">
        <div className="salon-faq-container">
          <div className="salon-faq-header">
            <h1 className="salon-faq-title">Frequently Asked</h1>
            <p className="salon-faq-subtitle">
              Everything you need to know about our salon services and policies
            </p>
          </div>

          <div className="salon-faq-list">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`salon-faq-item ${openIndex === index ? 'active' : ''}`}
              >
                <button
                  className="salon-faq-question-btn"
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="salon-faq-question-content">
                    <span className="salon-faq-number">0{index + 1}</span>
                    <span className="salon-faq-question-text">{faq.question}</span>
                  </div>
                  <svg
                    className={`salon-chevron-icon ${openIndex === index ? 'open' : ''}`}
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
                <div className={`salon-faq-answer ${openIndex === index ? 'open' : ''}`}>
                  <p className="salon-faq-answer-text">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutSection;