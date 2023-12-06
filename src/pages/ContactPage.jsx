import Header from "../components/Header";
import "./ContactPage.css";
import contactImageDesktop from "../assets/contactImage.svg";
import linkedin from "../assets/linkedin.svg";
import facebook from "../assets/facebook.svg";

const ContactPage = () => {
  return (
    <>
      <div className="contact-page-container">
        <div className="social-media-icons">
          <div>
            <img src={linkedin} alt="" />

            <img src={facebook} alt="" />

            <img src={linkedin} alt="" />

            <img src={facebook} alt="" />
          </div>
        </div>

        <div className="contact-section">
          <div className="form-container">
            <div>
              Please fill in this form and we will get back to you!
              <form action="" method="post">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  placeholder="Please enter your name and surname"
                />

                <label htmlFor="">Email</label>
                <input
                  type="email"
                  placeholder="Please enter your email address"
                />

                <label htmlFor="">Enquiry</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Please enter any questions you have"
                ></textarea>

                <button>Send Enquiry</button>
              </form>
            </div>
          </div>
          <div className="image">
            {/* <img src={contactImageDesktop} alt="" /> */}
          </div>
        </div>

        <div className="water-mark-1">Contact Us</div>
      </div>
      <Header 
        color='rgba(245, 245, 245, 1)'
      />
    </>
  );
};

export default ContactPage;
