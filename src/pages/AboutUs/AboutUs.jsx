import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../style/AboutSection.module.css';

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
    <section className="TopBanner">
        <img src="/image/aboutUs.webp" alt="image1"/>
      </section>
      <div className={styles.aboutSection}>
        <div className="container-fluid px-3 px-md-5">
          <div className="row align-items-center g-4">
            {/* Left Content Column */}
            <div className="col-lg-6 col-md-12">
              <div className={styles.contentWrapper}>
                <div className={`${styles.decorativeCircle} ${styles.circle1}`}></div>
                <div className={`${styles.decorativeCircle} ${styles.circle2}`}></div>
                
                <h1 className={styles.sectionTitle}>
                  <span className={styles.titleLine}>About Us</span>
                </h1>
                
                <div className={styles.titleUnderline}></div>
                
                <p className={styles.tagline}>Nurture International Beauty Professionals with perfection</p>
                
                <div className={styles.contentBody}>
                  <div className={styles.infoCard}>
                    <div className={styles.cardIcon}>
                      <div className={styles.iconCircle}></div>
                    </div>
                    <div className={styles.cardContent}>
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
                  
                  <div className={styles.missionStatement}>
                    <div className={styles.quoteMark}>"</div>
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
              <div className={styles.imagesContainer}>
                <div className={`${styles.decorativeCircle} ${styles.circle3}`}></div>
                <div className={`${styles.decorativeCircle} ${styles.circle4}`}></div>
                
                <div className={styles.imageStack}>
                  <div className={`${styles.imageWrapper} ${styles.primaryImage}`}>
                    <div className={styles.imageBorder}></div>
                    <img 
                      src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80" 
                      alt="Beauty Professional 1" 
                      className="img-fluid"
                    />
                  </div>
                  
                  <div className={`${styles.imageWrapper} ${styles.secondaryImage}`}>
                    <div className={styles.imageBorder}></div>
                    <img 
                      src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80" 
                      alt="Beauty Professional 2" 
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.backgroundPattern}></div>
      </div>

      {/* Mission Vision Section */}
      <section className={styles.missionVisionSection}>
        <div className="container py-5">
          <div className={`${styles.sectionHeader} text-center mb-5`}>
            <h2 className={styles.sectionMission}>
              <span className={styles.titleWord}>Our Purpose</span>
            </h2>
            <div className={styles.titleUnderline}></div>
            <p className={styles.sectionSubtitle}>
              <span className={styles.subtitleWord}>Empowering</span>{' '}
              <span className={styles.subtitleWord}>tomorrow</span>{' '}
              <span className={styles.subtitleWord}>through</span>{' '}
              <span className={styles.subtitleWord}>innovation</span>{' '}
              <span className={styles.subtitleWord}>today</span>
            </p>
          </div>

          <div className="row g-4">
            {/* Mission Card */}
            <div className="col-lg-6 col-md-12">
              <div className={`${styles.missionCard} h-100`}>
                <div className={styles.cardImageWrapper}>
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop" 
                    alt="Mission" 
                    className={styles.cardImage}
                  />
                  <div className={styles.imageOverlay}></div>
                </div>
                <div className={styles.cardBody}>
                  <div className={`${styles.iconBadge} ${styles.missionBadge}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                      <path d="M2 17l10 5 10-5"></path>
                      <path d="M2 12l10 5 10-5"></path>
                    </svg>
                  </div>
                  <h3 className={styles.cardTitle}>
                    <span className={styles.cardTitleWord}>Our Mission</span>
                  </h3>
                  <p className={styles.cardText}>
                    <span className={styles.textLine}>To empower businesses with innovative solutions
                    that transform challenges into opportunities.
                    We deliver excellence through cutting-edge
                    technology and exceptional service.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="col-lg-6 col-md-12">
              <div className={`${styles.visionCard} h-100`}>
                <div className={styles.cardImageWrapper}>
                  <img 
                    src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop" 
                    alt="Vision" 
                    className={styles.cardImage}
                  />
                  <div className={styles.imageOverlay}></div>
                </div>
                <div className={styles.cardBody}>
                  <div className={`${styles.iconBadge} ${styles.visionBadge}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </div>
                  <h3 className={styles.cardTitle}>
                    <span className={styles.cardTitleWord}>Our Vision</span>
                  </h3>
                  <p className={styles.cardText}>
                    <span className={styles.textLine}>To be the global leader recognized for
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

      {/* FAQ Section */}
      <div className={styles.salonFaqWrapper}>
        <div className={styles.salonFaqContainer}>
          <div className={styles.salonFaqHeader}>
            <h1 className={styles.salonFaqTitle}>Frequently Asked</h1>
            <p className={styles.salonFaqSubtitle}>
              Everything you need to know about our salon services and policies
            </p>
          </div>

          <div className={styles.salonFaqList}>
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`${styles.salonFaqItem} ${openIndex === index ? styles.active : ''}`}
              >
                <button
                  className={styles.salonFaqQuestionBtn}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className={styles.salonFaqQuestionContent}>
                    <span className={styles.salonFaqNumber}>0{index + 1}</span>
                    <span className={styles.salonFaqQuestionText}>{faq.question}</span>
                  </div>
                  <svg
                    className={`${styles.salonChevronIcon} ${openIndex === index ? styles.open : ''}`}
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
                <div className={`${styles.salonFaqAnswer} ${openIndex === index ? styles.open : ''}`}>
                  <p className={styles.salonFaqAnswerText}>{faq.answer}</p>
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