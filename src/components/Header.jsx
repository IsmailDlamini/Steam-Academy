import "./Header.css";
import SiteLogo from "../assets/SiteLogo2.svg";
import ExternalLogo from "../assets/ExternalLogo2.svg";
import MobileNavIconOpen from "../assets/MobileNavIconOpen.svg";
import MobileNavBar from "./MobileNavBar";
import { useState } from "react";
import {Link} from 'react-router-dom'
// import MobileNavIcon1 from "../components/MobileNavIcon1";
// import MobileNavIcon2 from "../components/MobileNavIcon2";

const Header = (prop) => {
  const [navBarState, SetNaBarState] = useState(false);

  const ToggleMobileNavBar = () => {
    SetNaBarState(!navBarState);
    console.log(navBarState);
  };
  return (
    <>
      <div className="PageHeader">
        <div className="Logo">
          <img src={SiteLogo} className="SiteLogo" alt="SiteLogo" />
        </div>

        <div className="NavBar">
          <ul>
            <li style={{ color: prop.color }}>Home</li>
            <li style={{ color: prop.color }}>About Us</li>
            <li style={{ color: prop.color }}>Services</li>
            <li style={{ color: prop.color }}>Contact Us</li>
          </ul>
        </div>

        <div className="ExternalLink">
          <img
            src={ExternalLogo}
            className="ExternalLogo"
            alt="sisters in science"
          />
        </div>

        <div className="MobileNav">
          <img
            src={MobileNavIconOpen}
            className="icon"
            onClick={ToggleMobileNavBar}
            alt=""
          />
        </div>
      </div>

      <div
        className={`MobileNavBar ${
          navBarState ? "MobileNavOpen" : "MobileNavClosed"
        }`}
      >
        <ul>
          <Link to={'/'} style={{ textDecoration: 'none' }}><li>Home</li></Link> 
          <Link to={'/about'} style={{ textDecoration: 'none' }}><li>About Us</li></Link>
          <Link to={'/services'} style={{ textDecoration: 'none' }}><li>Services</li></Link>
          <Link to={'/contact'} style={{ textDecoration: 'none' }}><li>Contact Us</li></Link>
          <Link style={{ textDecoration: 'none' }}>
          <li>
            <img src={ExternalLogo} alt="sisters in science" />
          </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Header;
