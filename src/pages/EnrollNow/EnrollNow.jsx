import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const courses = [
    'ARTH Course',
    'Makeup Course (Basic)',
    'Makeup Master (Basic to Advanced)',
    'Beauty Course',
  ];

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(data);
    setIsSubmitting(false);
    setSubmitSuccess(true);
    reset();
    setTimeout(() => setSubmitSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen  EnrollSection">
        <div className="background-elements">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
          <div className="floating-shape shape-4"></div>
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
        </div>
        <h1 className='Enroll'>ENROLL NOW</h1>
      <style>{`
      .EnrollSection{
      padding-Top: 140px;
      position: relative;
      overflow: hidden;
      background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
      }
      
      .background-elements {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
      }
      
      .floating-shape {
        position: absolute;
        background: linear-gradient(135deg, rgba(218, 165, 32, 0.1) 0%, rgba(184, 134, 11, 0.05) 100%);
        border-radius: 50%;
        animation: float 20s ease-in-out infinite;
      }
      
      .shape-1 {
        width: 300px;
        height: 300px;
        top: 10%;
        left: -150px;
        animation-delay: 0s;
      }
      
      .shape-2 {
        width: 200px;
        height: 200px;
        top: 60%;
        right: -100px;
        animation-delay: -5s;
      }
      
      .shape-3 {
        width: 150px;
        height: 150px;
        top: 30%;
        right: 15%;
        animation-delay: -10s;
      }
      
      .shape-4 {
        width: 250px;
        height: 250px;
        bottom: 10%;
        left: 10%;
        animation-delay: -15s;
      }
      
      .gradient-orb {
        position: absolute;
        border-radius: 50%;
        filter: blur(80px);
        opacity: 0.3;
        animation: pulse 8s ease-in-out infinite;
      }
      
      .orb-1 {
        width: 400px;
        height: 400px;
        background: radial-gradient(circle, rgba(218, 165, 32, 0.4) 0%, transparent 70%);
        top: -200px;
        right: -200px;
        animation-delay: 0s;
      }
      
      .orb-2 {
        width: 500px;
        height: 500px;
        background: radial-gradient(circle, rgba(184, 134, 11, 0.3) 0%, transparent 70%);
        bottom: -250px;
        left: -250px;
        animation-delay: -4s;
      }
      
      @keyframes float {
        0%, 100% {
          transform: translate(0, 0) rotate(0deg);
        }
        25% {
          transform: translate(30px, -30px) rotate(90deg);
        }
        50% {
          transform: translate(-20px, 20px) rotate(180deg);
        }
        75% {
          transform: translate(40px, 30px) rotate(270deg);
        }
      }
      
      @keyframes pulse {
        0%, 100% {
          transform: scale(1);
          opacity: 0.3;
        }
        50% {
          transform: scale(1.1);
          opacity: 0.5;
        }
      }
           .Enroll{
              font-Size: 60px;
    color: #fff;
    text-align: center;
    padding-bottom: 40px;
    position: relative;
    z-index: 1;
    text-shadow: 0 0 30px rgba(218, 165, 32, 0.5), 0 0 60px rgba(218, 165, 32, 0.3);
    font-weight: 700;
    letter-spacing: 2px;
           }

        .wrapper {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 100vh;
          position: relative;
          z-index: 1;
        }

        .image-section {
          position: relative;
          overflow: hidden;
          border-radius: 24px;
          box-shadow: 0 20px 60px rgba(218, 165, 32, 0.2);
        }

        .image-section img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(218, 165, 32, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%);
          z-index: 1;
        }

        .image-text {
          position: absolute;
          bottom: 60px;
          left: 50px;
          z-index: 2;
          color: white;
        }

        .image-text h2 {
          font-size: 2.5rem;
          margin-bottom: 10px;
          font-weight: 700;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        .image-text p {
          font-size: 1.1rem;
          opacity: 0.95;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        }

        .form-section {
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
        }

        .form-content {
          width: 100%;
          max-width: 550px;
        }

        .header {
          margin-bottom: 40px;
        }

        .badge {
          display: inline-block;
          background: linear-gradient(135deg, #DAA520 0%, #B8860B 100%);
          color: #000;
          padding: 8px 20px;
          border-radius: 25px;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .header h1 {
          color: #fff;
          font-size: 2.8rem;
          margin-bottom: 15px;
          font-weight: 700;
          line-height: 1.2;
        }

        .subtitle {
          color: #999;
          font-size: 1rem;
          line-height: 1.6;
        }

        .success-message {
          background: linear-gradient(135deg, #DAA520 0%, #B8860B 100%);
          color: #000;
          padding: 15px 20px;
          border-radius: 12px;
          margin-bottom: 25px;
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 600;
          animation: slideIn 0.5s ease-out;
        }

        .success-message svg {
          width: 24px;
          height: 24px;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group input,
        .form-group select {
          width: 100%;
          padding: 16px 20px;
          background: #1a1a1a;
          border: 2px solid #333;
          border-radius: 8px;
          color: #fff;
          font-size: 1rem;
          transition: all 0.3s ease;
          outline: none;
        }

        .form-group input:focus,
        .form-group select:focus {
          border-color: #DAA520;
          background: #222;
          box-shadow: 0 0 0 3px rgba(218, 165, 32, 0.1);
        }

        .form-group input::placeholder {
          color: #666;
        }

        .form-group input.error,
        .form-group select.error {
          border-color: #ff4444;
        }

        .form-group select {
          cursor: pointer;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23DAA520' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 15px center;
          background-size: 20px;
          padding-right: 45px;
        }

        .form-group select option {
          background: #1a1a1a;
          color: #fff;
          padding: 10px;
        }

        .error-text {
          color: #ff4444;
          font-size: 0.875rem;
          margin-top: 4px;
        }

        .checkbox-group {
          flex-direction: row;
          align-items: center;
          gap: 12px;
        }

        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          color: #ccc;
          font-size: 0.95rem;
          user-select: none;
        }

        .checkbox-label input[type="checkbox"] {
          width: 22px;
          height: 22px;
          cursor: pointer;
          accent-color: #DAA520;
        }

        .submit-btn {
          background: linear-gradient(135deg, #DAA520 0%, #B8860B 100%);
          color: #000;
          padding: 18px 40px;
          border: none;
          border-radius: 50px;
          font-size: 1.05rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-top: 10px;
          box-shadow: 0 8px 25px rgba(218, 165, 32, 0.3);
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 12px 35px rgba(218, 165, 32, 0.4);
        }

        .submit-btn:active:not(:disabled) {
          transform: translateY(0);
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .submit-btn svg {
          width: 20px;
          height: 20px;
        }

        .footer-note {
          margin-top: 30px;
          text-align: center;
        }

        .footer-note p {
          color: #666;
          font-size: 0.85rem;
        }

        @media (max-width: 1024px) {
          .wrapper {
            grid-template-columns: 1fr;
          }

          .image-section {
            min-height: 400px;
          }

          .image-text {
            bottom: 40px;
            left: 30px;
          }

          .image-text h2 {
            font-size: 2rem;
          }
        }

        @media (max-width: 768px) {
          .form-section {
            padding: 30px 20px;
          }

          .header h1 {
            font-size: 2.2rem;
          }

          .image-section {
            min-height: 300px;
          }

          .image-text {
            bottom: 30px;
            left: 20px;
          }

          .image-text h2 {
            font-size: 1.6rem;
          }

          .image-text p {
            font-size: 0.95rem;
          }
        }

        @media (max-width: 480px) {
          .header h1 {
            font-size: 1.8rem;
          }

          .submit-btn {
            padding: 16px 30px;
            font-size: 0.95rem;
          }
        }
      `}</style>

      <div className="container">
        <div className="wrapper">
          <div className="image-section">
            <div className="overlay"></div>
              <img 
              src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=800&q=80" 
              alt="Beauty salon academy" 
            />
            <div className="image-text">
              <h2>Transform Your Future</h2>
              <p>Join thousands of learners achieving their dreams</p>
            </div>
          </div>

          <div className="form-section">
            <div className="form-content">
              <div className="header">
                <h1>Looks Academy</h1>
                <p className="subtitle">Looks Salon, one of India's fastest-growing pan-India salon chains, has set new benchmarks in the hairstyling industry. </p>
              </div>

              {submitSuccess && (
                <div className="success-message">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Form submitted successfully!
                </div>
              )}

              <div className="contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Name*"
                    className={errors.name ? 'error' : ''}
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && <span className="error-text">{errors.name.message}</span>}
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Email*"
                    className={errors.email ? 'error' : ''}
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                  />
                  {errors.email && <span className="error-text">{errors.email.message}</span>}
                </div>

                <div className="form-group">
                  <select
                    className={errors.course ? 'error' : ''}
                    {...register('course', { required: 'Please select a course' })}
                    defaultValue=""
                  >
                    <option value="" disabled>Select Course*</option>
                    {courses.map((course, index) => (
                      <option key={index} value={course}>{course}</option>
                    ))}
                  </select>
                  {errors.course && <span className="error-text">{errors.course.message}</span>}
                </div>

                <div className="form-group">
                  <input
                    type="tel"
                    placeholder="Phone*"
                    className={errors.phone ? 'error' : ''}
                    {...register('phone', {
                      required: 'Phone number is required',
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: 'Please enter a valid 10-digit phone number'
                      }
                    })}
                  />
                  {errors.phone && <span className="error-text">{errors.phone.message}</span>}
                </div>

                <div className="form-group">
                  <input
                    type="tel"
                    placeholder="Alternate Phone*"
                    className={errors.alternatePhone ? 'error' : ''}
                    {...register('alternatePhone', {
                      required: 'Alternate phone number is required',
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: 'Please enter a valid 10-digit phone number'
                      }
                    })}
                  />
                  {errors.alternatePhone && <span className="error-text">{errors.alternatePhone.message}</span>}
                </div>

                <div className="form-group checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      {...register('robot', { required: 'Please verify you are not a robot' })}
                    />
                    I'm not a robot
                  </label>
                  {errors.robot && <span className="error-text">{errors.robot.message}</span>}
                </div>

                <button 
                  type="button" 
                  className="submit-btn" 
                  disabled={isSubmitting}
                  onClick={handleSubmit(onSubmit)}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Form'}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>

              <div className="footer-note">
                <p>By submitting this form, you agree to our Terms & Conditions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;