import Header from "../components/Header";
import "./ContactPage.css";
import linkedin from "../assets/linkedin.svg";
import facebook from "../assets/facebook.svg";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <>
      <div className="contact-page-container">
        <div className="social-media-icons">
          <div>
            <img src={linkedin} alt="linkedin" />
            <img src={facebook} alt="facebook" />
            <img src={linkedin} alt="linkedin" />
            <img src={facebook} alt="facebook" />
          </div>
        </div>

        <div className="contact-section">
          <div className="form-container">
            <div>
             <div className="contact-prompt">Please fill in this form and we will get back to you!</div> 
              <form action="" method="post">
                <label htmlFor="name">Name</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Please enter your name and surname"
                  required
                />

                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Please enter your email address"
                  required
                />

                <label htmlFor="enquiry">Enquiry</label>
                <textarea
                  name="enquiry"
                  id="enquiry"
                  cols="30"
                  rows="10"
                  placeholder="Please enter any questions you have"
                  required
                ></textarea>

                <button>Send Enquiry</button>
              </form>
            </div>
          </div>
          <div className="image"></div>
        </div>

        <div className="water-mark-1">Contact Us</div>
      </div>
      <Header color="rgba(245, 245, 245, 1)" />
      <Footer />
    </>
  );
};

export default ContactPage;
