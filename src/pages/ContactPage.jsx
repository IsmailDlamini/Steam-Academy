import Header from "../components/Header";
import "./ContactPage.css";
import linkedin from "../assets/linkedin.svg";
import facebook from "../assets/facebook.svg";
import Footer from "../components/Footer";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    enquiry: "",
  });

  const handleSubmit = async (e) => {

    // https://emasa.cibs.tech/send-mail.php --> external use
    // /send-mail.php --> use on server

    e.preventDefault();
    try {
      const response = await fetch("/send-mail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // const data = await response.text();
      alert("Email sent successfully!");
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      alert(
        "An error occurred while sending the email. Please try again later."
      );
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              <div className="contact-prompt">
                Please fill in this form and we will get back to you!
              </div>
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Please enter your name and surname"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />

                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Please enter your email address"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />

                <label htmlFor="enquiry">Enquiry</label>
                <textarea
                  name="enquiry"
                  id="enquiry"
                  cols="30"
                  rows="10"
                  placeholder="Please enter any questions you have"
                  required
                  value={formData.enquiry}
                  onChange={handleChange}
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
