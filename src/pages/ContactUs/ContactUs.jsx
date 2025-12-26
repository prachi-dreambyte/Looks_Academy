import React from "react";
import { useForm } from "react-hook-form";
import '../../style/contactUs.css';
function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // ✅ When form is submitted, redirect to WhatsApp with prefilled message
  const onSubmit = (data) => {
    const { fullName, email, phone, message } = data;
    const whatsappMessage = `Hello, I am ${fullName}.%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;
    window.open(`https://wa.me/9910460497?text=${whatsappMessage}`, "_blank");
  };

  return (
    <>
      {/* <Header/> */}
      <section className="TopBanner">
        <img src="/image/contactus.webp" alt="image1"/>
      </section>

      <section className="ContactSection services-sections">
        <div className="container">
          <div className="ConatctusDiv">
            <div className="row">
              {/* Left: Contact Form */}
              <div className="col-md-6">
                <div className="ContactWrapper">
                  <h2 className="FrontHeadSection">Contact Us</h2>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                    {/* Full Name */}
                    <div className="ContactForm">
                      <label className="block mb-1 font-medium ContactFormlabel">Full Name*</label>
                      <input
                        type="text"
                        {...register("fullName", {
                          required: "Full Name is required*",
                          minLength: {
                            value: 3,
                            message: "Full Name must be at least 3 characters",
                          },
                        })}
                        className="w-full border contactInput"
                      />
                      {errors.fullName && (
                        <p className="text-danger text-sm">{errors.fullName.message}</p>
                      )}

                      {/* Email */}
                      <div>
                        <label className="block mb-1 ContactFormlabel">Email*</label>
                        <input
                          type="email"
                          {...register("email", {
                            required: "Email is required*",
                            pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: "Invalid email address",
                            },
                          })}
                          className="w-full border contactInput"
                        />
                        {errors.email && (
                          <p className="text-danger text-sm">{errors.email.message}</p>
                        )}
                      </div>

                      {/* Phone Number */}
                      <div>
                        <label className="block mb-1 ContactFormlabel">Phone Number*</label>
                        <input
                          type="tel"
                          {...register("phone", {
                            required: "Phone number is required*",
                            pattern: {
                              value: /^[0-9]{10}$/,
                              message: "Phone number must be 10 digits",
                            },
                          })}
                          className="w-full border contactInput"
                        />
                        {errors.phone && (
                          <p className="text-danger text-sm">{errors.phone.message}</p>
                        )}
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block mb-1 ContactFormlabel">Message*</label>
                        <textarea
                          {...register("message", {
                            required: "Message is required*",
                            minLength: {
                              value: 10,
                              message: "Message must be at least 10 characters*",
                            },
                          })}
                          className="w-full border contactInput"
                          rows="4"
                        ></textarea>
                        {errors.message && (
                          <p className="text-danger text-sm">{errors.message.message}</p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="ContactButton"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* Right: Contact Details */}
              <div className="col-md-6">
                <div className="ContactWrapper">
                  <h2 className="FrontHeadSection ">Contact Us Details</h2>
                  <div className="ContactForm">
                    <div className="contactWrapDisplay">
                      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58z" />
                      </svg>
                      <p className="ContactFormlabel">9910460497</p>
                    </div>

                    <div className="contactWrapDisplay">
                      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v.217l-8 4.8-8-4.8V4zm0 1.383 5.803 3.482L0 12.267V5.383zM6.761 9.674l.239.144.239-.144L16 5.383v6.884l-5.803-3.482L16 12.267V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-1.733l5.803-3.482z" />
                      </svg>
                      <p className="ContactFormlabel">info@gmail.com</p>
                    </div>

                    <div className="contactWrapDisplay">
                      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                        <path d="M12.166 8.94c-.27.639-.576 1.25-.91 1.83l-.707 1.254c-.397.702-.828 1.378-1.286 2.024C8.567 14.88 8.293 15 8 15s-.567-.12-.263-.952a27.01 27.01 0 0 1-1.286-2.024l-.707-1.254a18.585 18.585 0 0 1-.91-1.83A5.986 5.986 0 1 1 12.166 8.94zM8 9.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                      </svg>
                      <p className="ContactFormlabel">Looks Academy, GMS Road, Dehradun</p>
                    </div>

                    <div className="contactWrapDisplay">
                      <iframe
                        src="https://www.google.com/maps?q=3rd+Floor,+Sahastradhara+Rd,+above+Bank+of+India,+near+IT+Park,+Doon+IT+Park,+Govind+Vihar,+Dehradun,+Danda+Dhoran,+Uttarakhand+248001&output=embed"
                        width="100%"
                        height="250"
                        style={{ border: 0 }}
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
        </div>
      </section>

      {/* Hire Us Section */}
       <section className="ContactUsLooking">
        <div className="ContactOverlay"></div>
        <div className="container">
          <div className="ContactWork">
            <div className="contactBlock">
              <h5 className="FrontHeadSection">Enroll Now</h5>
            </div>
           <p className="courseParagraph"> Turn your passion into a professional skill and your skill into art.</p>
              <p className="courseParagraph"> Get in touch with us with any query.</p>
            {/* ✅ Hire Us Button opens mail */}
            <a href="mailto:pantprachi58@gmail.com" className="btn ContactBtn">
              Hire Us
            </a>
          </div>
        </div>
      </section>

      {/* <Footer/> */}
    </>
  );
}

export default ContactUs;
