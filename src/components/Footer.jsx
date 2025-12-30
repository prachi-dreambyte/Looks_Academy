import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, Send, CheckCircle, AlertCircle } from "lucide-react";
import "../style/footer.css";
import logo from "/public/image/looks.jpeg";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus({ type: "error", message: "Please enter a valid email address" });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      // Create mailto link with subject and body
      const subject = encodeURIComponent("New Newsletter Subscription");
      const body = encodeURIComponent(`New newsletter subscription from: ${email}\n\nDate: ${new Date().toLocaleString()}`);
      const mailtoLink = `mailto:pantprachi58@gmail.com?subject=${subject}&body=${body}`;
      
      // Open default email client
      window.location.href = mailtoLink;
      
      // Show success message
      setStatus({ 
        type: "success", 
        message: "Thank you! Your email client will open to complete the subscription." 
      });
      setEmail("");
    } catch (error) {
      setStatus({ 
        type: "error", 
        message: "Something went wrong. Please try again." 
      });
    } finally {
      setIsSubmitting(false);
      // Clear status message after 5 seconds
      setTimeout(() => setStatus({ type: "", message: "" }), 5000);
    }
  };

  return (
    <footer className="MainFooter bg-black border-top">
      <div className="container-fluid">
        {/* Main Content Grid */}
        <div className="row footer-main-content justify-content-center">
          {/* Logo Section */}
          <div className="col-lg-2 col-md-6 col-sm-6 mb-4 footer-column">
           <Link to="/" className="nav-link"><img
              src={logo} 
              alt="Logo" 
              className="Logo"
            /></Link>
            <ul className="list-unstyled footer-links mt-4">
              <li className="footerParagraph">
                <a href="tel:+918279720490" className="d-flex align-items-center gap-2">
                  <Phone size={18} className="flex-shrink-0" />
                  <span>+91 8279720490</span>
                </a>
              </li>
              <li className="footerParagraph">
                <a href="mailto:info@looks.com" className="d-flex align-items-center gap-2">
                  <Mail size={18} className="flex-shrink-0" />
                  <span>info@looks.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="col-lg-3 col-md-6 col-sm-6 mb-4 footer-column">
            <h3 className="footerName">Get in Touch</h3>
            <p className="footerPara">
              Looks Salon & Academy,Next to Raymond Showroom, G.M.S Road ,
              Dehradun, Uttarakhand 248171
            </p>
          </div>

          {/* Home Links */}
          <div className="col-lg-2 col-md-6 col-sm-6 mb-4 footer-column">
            <h3 className="footerName">Home</h3>
            <ul className="list-unstyled footer-links">
              <li className="footerParagraph">
                <Link to="/AboutUs">About Us</Link>
              </li>
              <li className="footerParagraph">
                <Link to="/Courses">Courses</Link>
              </li>
              <li className="footerParagraph">
                <Link to="/Blogs">Blogs</Link>
              </li>
              <li className="footerParagraph">
                <Link to="/Gallery">Gallery</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="col-lg-3 col-md-6 col-sm-6 mb-4 footer-column">
            <h3 className="footerName">Say Hello</h3>
             <p><Link to="/TermsAndCondition" className="footer-link-small">
              Terms & Conditions
            </Link>
            </p>
            <p><Link to="/privacy-policy" className="footer-link-small">
              Privacy Policy
            </Link>
            </p>
            
            {/* <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                  style={{
                    backgroundColor: "#1a1a1a",
                    border: "1px solid #333",
                    color: "#fff",
                    padding: "12px 15px",
                    borderRadius: "4px 0 0 4px",
                    fontSize: "14px"
                  }}
                />
                <button
                  type="submit"
                  className="btn"
                  disabled={isSubmitting}
                  style={{
                    backgroundColor: "#fff",
                    color: "#000",
                    border: "1px solid #fff",
                    padding: "12px 20px",
                    borderRadius: "0 4px 4px 0",
                    transition: "all 0.3s ease",
                    fontWeight: "500"
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#f0f0f0";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "#fff";
                  }}
                >
                  {isSubmitting ? (
                    <span className="spinner-border spinner-border-sm" />
                  ) : (
                    <Send size={18} />
                  )}
                </button>
              </div>
              
              {status.message && (
                <div 
                  className={`alert ${status.type === "success" ? "alert-success" : "alert-danger"} d-flex align-items-center p-2`}
                  style={{
                    fontSize: "12px",
                    backgroundColor: status.type === "success" ? "rgba(40, 167, 69, 0.1)" : "rgba(220, 53, 69, 0.1)",
                    border: `1px solid ${status.type === "success" ? "#28a745" : "#dc3545"}`,
                    color: status.type === "success" ? "#28a745" : "#dc3545",
                    borderRadius: "4px"
                  }}
                >
                  {status.type === "success" ? (
                    <CheckCircle size={16} className="me-2" />
                  ) : (
                    <AlertCircle size={16} className="me-2" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}
            </form> */}
          </div>
        </div>
        

        {/* <hr className="footer-divider" /> */}

        {/* Bottom Footer */}
        {/* <div className="footer-bottom">
          <div className="footer-links-bottom">
            <Link to="/TermsAndCondition" className="footer-link-small">
              Terms & Conditions
            </Link>
            <span className="separator">|</span>
            <Link to="/privacy-policy" className="footer-link-small">
              Privacy Policy
            </Link>
          </div>
          <div className="footer-copyright">
            Design by <b>LOOKS</b> © {new Date().getFullYear()}. All rights reserved.
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;