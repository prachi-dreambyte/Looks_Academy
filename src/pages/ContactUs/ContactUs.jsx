import React from "react";
import { useForm } from "react-hook-form";
import '../../style/contactUs.css';
import { Link, useLocation } from 'react-router-dom';
function ContactUs() {
   const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    const { fullName, email, phone, message } = data;
    const whatsappMessage = `Hello, I am ${fullName}.%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;
    window.open(`https://wa.me/9910460497?text=${whatsappMessage}`, "_blank");
    reset();
  };

  return (
    <div style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap');
      `}</style>

      {/* Top Banner */}
      <section className="top-banner">
        <img src="/image/contactus.webp" alt="Contact Us Banner" />
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="gold-accent-top"></div>
        <div className="contact-container">
          <div className="contact-row">
            {/* Left: Contact Form */}
            <div className="contact-col">
              <div className="contact-wrapper">
                <div className="corner-accent top-left"></div>
                <div className="corner-accent top-right"></div>
                <div className="corner-accent bottom-left"></div>
                <div className="corner-accent bottom-right"></div>
                
                <h2 className="front-head-section">Contact Us</h2>
                <div className="contact-form">
                  {/* Full Name */}
                  <div className="form-group">
                    <label className="contact-label">Full Name*</label>
                    <input
                      type="text"
                      {...register("fullName", {
                        required: "Full Name is required*",
                        minLength: {
                          value: 3,
                          message: "Full Name must be at least 3 characters",
                        },
                      })}
                      className="contact-input"
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && (
                      <span className="error-message">{errors.fullName.message}</span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="form-group">
                    <label className="contact-label">Email*</label>
                    <input
                      type="email"
                      {...register("email", {
                        required: "Email is required*",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Invalid email address",
                        },
                      })}
                      className="contact-input"
                      placeholder="Enter your email address"
                    />
                    {errors.email && (
                      <span className="error-message">{errors.email.message}</span>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="form-group">
                    <label className="contact-label">Phone Number*</label>
                    <input
                      type="tel"
                      {...register("phone", {
                        required: "Phone number is required*",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Phone number must be 10 digits",
                        },
                      })}
                      className="contact-input"
                      placeholder="Enter 10-digit phone number"
                    />
                    {errors.phone && (
                      <span className="error-message">{errors.phone.message}</span>
                    )}
                  </div>

                  {/* Message */}
                  <div className="form-group">
                    <label className="contact-label">Message*</label>
                    <textarea
                      {...register("message", {
                        required: "Message is required*",
                        minLength: {
                          value: 10,
                          message: "Message must be at least 10 characters*",
                        },
                      })}
                      className="contact-textarea"
                      rows="4"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                    {errors.message && (
                      <span className="error-message">{errors.message.message}</span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button onClick={handleSubmit(onSubmit)} className="contact-button">
                    <span>Submit</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Contact Details */}
            <div className="contact-col">
              <div className="contact-wrapper">
                <div className="corner-accent top-left"></div>
                <div className="corner-accent top-right"></div>
                <div className="corner-accent bottom-left"></div>
                <div className="corner-accent bottom-right"></div>
                
                <h2 className="front-head-section">Contact Info</h2>
                <div className="contact-form">
                  <div className="contact-info-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58z" />
                    </svg>
                    <p className="contact-info-text">9910460497</p>
                  </div>

                  <div className="contact-info-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v.217l-8 4.8-8-4.8V4zm0 1.383 5.803 3.482L0 12.267V5.383zM6.761 9.674l.239.144.239-.144L16 5.383v6.884l-5.803-3.482L16 12.267V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-1.733l5.803-3.482z" />
                    </svg>
                    <p className="contact-info-text">info@gmail.com</p>
                  </div>

                  <div className="contact-info-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M12.166 8.94c-.27.639-.576 1.25-.91 1.83l-.707 1.254c-.397.702-.828 1.378-1.286 2.024C8.567 14.88 8.293 15 8 15s-.567-.12-.263-.952a27.01 27.01 0 0 1-1.286-2.024l-.707-1.254a18.585 18.585 0 0 1-.91-1.83A5.986 5.986 0 1 1 12.166 8.94zM8 9.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                    </svg>
                    <p className="contact-info-text">Looks Academy, GMS Road, Dehradun</p>
                  </div>

                  <div className="map-container">
                    <iframe
                      src="https://www.google.com/maps?q=3rd+Floor,+Sahastradhara+Rd,+above+Bank+of+India,+near+IT+Park,+Doon+IT+Park,+Govind+Vihar,+Dehradun,+Danda+Dhoran,+Uttarakhand+248001&output=embed"
                      width="100%"
                      height="350"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gold-accent-bottom"></div>
      </section>

      {/* Enroll Section */}
      <section className="enroll-section">
        <div className="enroll-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        <div className="enroll-content">
          <div>
            <h5 className="enroll-title">Enroll Now</h5>
          </div>
          <p className="course-paragraph">Turn your passion into a professional skill and your skill into art.</p>
          <p className="course-paragraph"></p>
          <Link to="mailto:pantprachi58@gmail.com" className="hire-btn">
            ENROLL NOW
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
