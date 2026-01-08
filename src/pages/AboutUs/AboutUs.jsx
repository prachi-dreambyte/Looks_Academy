import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style/AboutSection.css";
import { Link, useLocation } from "react-router-dom";

const AboutSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [aboutBanner, setAboutBanner] = useState(null);
  const [aboutData, setAboutData] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);
  const [ourValues, setOurValues] = useState([]);
  const [ourFacilities, setOurFacilities] = useState([]);


  const [faqs, setFaqs] = useState([]);


  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
useEffect(() => {
  const fetchAboutBanner = async () => {
    try {
      const res = await axios.get(
        `${API_BASE_URL}/api/about-banner/get`
      );

      if (res.data.success && res.data.data) {
        setAboutBanner(res.data.data);
      }
    } catch (error) {
      console.error("Failed to load About Banner");
    }
  };

  fetchAboutBanner();
}, []);


useEffect(() => {
  const fetchOurFacilities = async () => {
    try {
      const res = await axios.get(
        `${API_BASE_URL}/api/our-facilities/get-all`
      );

      if (res.data.success) {
        setOurFacilities(res.data.data);
      }
    } catch (error) {
      console.error("Failed to load Our Facilities");
    }
  };

  fetchOurFacilities();
}, []);


  useEffect(() => {
  const fetchOurValues = async () => {
    try {
      const res = await axios.get(
        `${API_BASE_URL}/api/our-values/get-all`
      );

      if (res.data.success) {
        setOurValues(res.data.data);
      }
    } catch (error) {
      console.error("Failed to load Our Values");
    }
  };

  fetchOurValues();
}, []);


  useEffect(() => {
  const fetchFaqs = async () => {
    try {
      const res = await axios.get(
        `${API_BASE_URL}/api/faqs/get-all-faqs`
      );

      if (res.data.success) {
        setFaqs(res.data.data);
      }
    } catch (error) {
      console.error("Failed to load FAQs");
    }
  };

  fetchFaqs();
}, []);


  useEffect(() => {
    const fetchAboutUs = async () => {
      try {
        const res = await axios.get(
          `${API_BASE_URL}/api/AboutUs/getAllAboutUs`
        );
        setAboutData(res.data.data[0]);
      } catch (error) {
        console.error("Failed to load About Us");
      }
    };

    fetchAboutUs();
  }, []);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!aboutData) {
    return <p style={{ padding: 20 }}>Loading...</p>;
  }
  

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {aboutBanner && (
  <section className="TopBanner">
    <img
      src={`${API_BASE_URL}/${aboutBanner.image.replace(/\\/g, "/")}`}
      alt="About Us Banner"
    />
  </section>
)}

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
        <section className={`hero-section ${isLoaded ? "loaded" : ""}`}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <h1 className="hero-title">{aboutData.title}</h1>
                <div
                  className="hero-subtitle"
                  dangerouslySetInnerHTML={{
                    __html: aboutData.shortPara,
                  }}
                />
                <div className="golden-line"></div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="hero-image-wrapper">
                  <img
                    src={`${API_BASE_URL}/${aboutData.mainImage.replace(
                      /\\/g,
                      "/"
                    )}`}
                    className="hero-image"
                    alt="About"
                    onError={(e) => {
                      e.target.src = "/image/placeholder.webp";
                    }}
                  />{" "}
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
                  {aboutData.ourStory?.images?.[0] && (
                    <img
                      src={`${API_BASE_URL}/${aboutData.ourStory.images[0].replace(
                        /\\/g,
                        "/"
                      )}`}
                      className="story-img story-img-1"
                    />
                  )}

                  {aboutData.ourStory?.images?.[1] && (
                    <img
                      src={`${API_BASE_URL}/${aboutData.ourStory.images[1].replace(
                        /\\/g,
                        "/"
                      )}`}
                      className="story-img story-img-2"
                    />
                  )}
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="story-card">
                  <div
                    className="story-text"
                    dangerouslySetInnerHTML={{
                      __html: aboutData.ourStory.description,
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-12">
                <div className="stats-grid">
                  <div className="stat-card">
                    <h3 className="stat-number">
                      {aboutData.numbers.graduates}+
                    </h3>

                    <p className="stat-label">Graduates</p>
                  </div>
                  <div className="stat-card">
                    <h3 className="stat-number">
                      {aboutData.numbers.trainers}+
                    </h3>
                    <p className="stat-label">Expert Trainers</p>
                  </div>
                  <div className="stat-card">
                    <h3 className="stat-number">{aboutData.numbers.years}+</h3>
                    <p className="stat-label">Years Excellence</p>
                  </div>
                  <div className="stat-card">
                    <h3 className="stat-number">{aboutData.numbers.rate}%</h3>
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
                    {aboutData.mission?.image && (
                      <img
                        src={`${API_BASE_URL}/${aboutData.mission.image.replace(
                          /\\/g,
                          "/"
                        )}`}
                        className="mv-image"
                      />
                    )}

                    <div className="mv-overlay">
                      <h3 className="mv-title">{aboutData.mission.title}</h3>
                    </div>
                  </div>
                  <div className="mv-content">
                    <div
                      className="mv-text"
                      dangerouslySetInnerHTML={{
                        __html: aboutData.mission.description,
                      }}
                    />
                    <ul className="mv-list">
                      {aboutData.mission.tags.map((tag, i) => (
                        <li key={i}>{tag}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mb-4">
                <div className="mv-card vision-card">
                  <div className="mv-image-wrapper">
                    {aboutData.vision?.image && (
                      <img
                        src={`${API_BASE_URL}/${aboutData.vision.image.replace(
                          /\\/g,
                          "/"
                        )}`}
                        className="mv-image"
                      />
                    )}
                    <div className="mv-overlay">
                      <h3 className="mv-title">{aboutData.vision.title}</h3>
                    </div>
                  </div>
                  <div className="mv-content">
                    <div
                      className="mv-text"
                      dangerouslySetInnerHTML={{
                        __html: aboutData.vision.description,
                      }}
                    />
                    <ul className="mv-list">
                      {aboutData.vision.tags.map((tag, i) => (
                        <li key={i}>{tag}</li>
                      ))}
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
  {ourValues.map((value) => (
    <div
      className="col-lg-4 col-md-6 mb-4"
      key={value._id}
    >
      <div className="value-card">
        <div className="value-image-wrapper">
          <img
            src={`${API_BASE_URL}/${value.image.replace(/\\/g, "/")}`}
            alt={value.title}
            className="value-image"
            onError={(e) => {
              e.target.src = "/image/placeholder.webp";
            }}
          />
        </div>

        <div className="value-icon">
          {value.icon}
        </div>

        <h4 className="value-title">
          {value.title}
        </h4>

        <div
          className="value-text"
          dangerouslySetInnerHTML={{
            __html: value.description,
          }}
        />
      </div>
    </div>
  ))}
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
      {ourFacilities.map((facility) => (
        <div
          className="col-lg-4 col-md-6"
          key={facility._id}
        >
          <div className="gallery-item">
            <img
              src={`${API_BASE_URL}/${facility.image.replace(
                /\\/g,
                "/"
              )}`}
              alt={facility.title}
              className="gallery-image"
              onError={(e) => {
                e.target.src = "/image/placeholder.webp";
              }}
            />
            <div className="gallery-overlay">
              <p>{facility.title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* FAQ Section */}
        <div className="salonFaqWrapper">
          <div className="salonFaqContainer">
            <div className="salonFaqHeader">
              <h1 className="salonFaqTitle">Frequently Asked</h1>
              <p className="salonFaqSubtitle">
                Everything you need to know about our salon services and
                policies
              </p>
            </div>

            <div className="salonFaqList">
  {faqs.map((faq, index) => (
    <div
      key={faq._id}
      className={`salonFaqItem ${
        openIndex === index ? "active" : ""
      }`}
    >
      <button
        className="salonFaqQuestionBtn"
        onClick={() => toggleAccordion(index)}
      >
        <div className="salonFaqQuestionContent">
          <span className="salonFaqNumber">
            {index + 1 < 10 ? `0${index + 1}` : index + 1}
          </span>
          <span className="salonFaqQuestionText">
            {faq.question}
          </span>
        </div>

        <svg
          className={`salonChevronIcon ${
            openIndex === index ? "open" : ""
          }`}
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

      <div
        className={`salonFaqAnswer ${
          openIndex === index ? "open" : ""
        }`}
      >
        <p className="salonFaqAnswerText">
          {faq.answer}
        </p>
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
              <h2 className="cta-title">
                Want To Become A Perfect Beauty Professional?
              </h2>
              <p className="cta-text">
                Are you ready to take the next step towards your career?
              </p>
              <Link to="/EnrollNow">
                <button className="cta-button">Enroll Now</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
