import "./Header.css";
import SiteLogo from "../assets/SiteLogo2.svg";
import ExternalLogo from "../assets/ExternalLogo2.svg";
import MobileNavIconOpen from "../assets/MobileNavIconOpen.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import MobileNavIconClose from "../assets/MobileNavIconClose.png";

const Header = (prop) => {
  const [navBarState, SetNaBarState] = useState(false);

  const ToggleMobileNavBar = () => {
    SetNaBarState(!navBarState);
  };
  return (
    <>
      <div className="PageHeader">
        <div className="Logo">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <img src={SiteLogo} className="SiteLogo" alt="SiteLogo" />
          </Link>
        </div>

        <div className="NavBar">
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
              <li>Contact Us</li>
            </Link>
            <Link to={"/gallery"} style={{ textDecoration: "none" }}>
              <li>Gallery</li>
            </Link>
          </ul>
        </div>

        <div className="ExternalLink">
          <Link to={"https://sis4teens.co.za"}>
            <img
              src={ExternalLogo}
              className="ExternalLogo"
              alt="sisters in science"
            />
          </Link>
        </div>

        <div className="MobileNav">
          <img
            src={navBarState ? MobileNavIconClose : MobileNavIconOpen}
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
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <li onClick={ToggleMobileNavBar}>Home</li>
          </Link>
          <Link to={"/about"} style={{ textDecoration: "none" }}>
            <li onClick={ToggleMobileNavBar}>About Us</li>
          </Link>
          <Link to={"/services"} style={{ textDecoration: "none" }}>
            <li onClick={ToggleMobileNavBar}>Services</li>
          </Link>
          <Link to={"/contact"} style={{ textDecoration: "none" }}>
            <li onClick={ToggleMobileNavBar}>Contact Us</li>
          </Link>
          <Link to={"/gallery"} style={{ textDecoration: "none" }}>
            <li onClick={ToggleMobileNavBar}>Gallery</li>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            to={"https://sis4teens.co.za"}
          >
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
