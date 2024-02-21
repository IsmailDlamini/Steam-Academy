import facebookIcon from "../assets/facebookIcon.svg";
import linkedinIcon from "../assets/linkedinIcon.svg";
import footerSiteLogo from "../assets/footerSiteLogo.svg";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <Link to={"/"}>
          <img src={footerSiteLogo} className="footer-logo" alt="" />
        </Link>
        <div className="information">
          <div className="nav">
            <ul>
              <Link to={"/"} style={{ textDecoration: "none" }}>
                <li>Home</li>
              </Link>
              <Link to={"/about"} style={{ textDecoration: "none" }}>
                <li>About Us</li>
              </Link>
              <Link to={"/services"} style={{ textDecoration: "none" }}>
                <li>Services</li>
              </Link>
              <Link to={"/contact"} style={{ textDecoration: "none" }}>
                <li>Contact</li>
              </Link>
            </ul>
          </div>
          <div className="credits">© STEAM Academy | A Plus Systems</div>
        </div>

        <div className="social-icons">
          <a href="https://www.facebook.com/people/Sibongile-Khabonina/100069573130153/?paipv=0&eav=AfYpBmAKpJOL5PC8ckgL_uJiaUKJPlaCKb5UTpTo64VIkQGALDqt7_fdezkQqZW7lpc&_rdr
">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="https://www.linkedin.com/in/gama-sibongile-9b785875/?originalSubdomain=za">
            <img src={linkedinIcon} alt="Linkedin" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
