import "./Header.css";
import SiteLogo from "../assets/SiteLogo2.svg";
import ExternalLogo from "../assets/ExternalLogo2.svg";
import MobileNavIconOpen from "../assets/MobileNavIconOpen.svg";
import MobileNavBar from "./MobileNavBar";
import { useState } from "react";
// import MobileNavIcon1 from "../components/MobileNavIcon1";
// import MobileNavIcon2 from "../components/MobileNavIcon2";

const Header = (prop) => {
  const [navBarState, SetNaBarState] = useState(false);

  const ToggleMobileNavBar = () => {
    SetNaBarState(!navBarState);
    console.log("hello")
  };
  return (
    <>
      <div className="PageHeader">
        <div className="Logo">
          <img src={SiteLogo} className="SiteLogo" alt="SiteLogo" />
        </div>

        <div className="NavBar">
          <ul>
            <li style={{ color: prop.color}}>Home</li>
            <li style={{ color: prop.color}}>About Us</li>
            <li style={{ color: prop.color}}>Services</li>
            <li style={{ color: prop.color}}>Contact Us</li>
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
          {/* <MobileNavIcon1 
              ClassName={`icon ${navBarState ? 'shift-mobile-nav' : ''}` }
              onClick={ToggleMobileNavBar}
            />
            <MobileNavIcon2 
              ClassName={`icon ${navBarState ? '' : 'shift-mobile-nav'}` }
              onClick={ToggleMobileNavBar} */}
          {/* /> */}
        </div>

        {/* <MobileNavBar
        ClassName={`MobileNavBar ${
          navBarState ? "MobileNavOpen" : "MobileNavClosed"
        }`}
        Logo={ExternalLogo}
      /> */}

{/* <div className={`MobileNavBar ${
          navBarState ? "MobileNavOpen" : "MobileNavClosed"
        }`}>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Contact Us</li>
          <li>
            <img src={ExternalLogo} alt="sisters in science" />
          </li>
        </ul>
      </div> */}

      </div>

      {/* <MobileNavBar
        ClassName={`MobileNavBar ${
          navBarState ? "MobileNavOpen" : "MobileNavClosed"
        }`}
        Logo={ExternalLogo}
      /> */}


<div className={`MobileNavBar ${
          navBarState ? "MobileNavOpen" : "MobileNavClosed"
        }`}>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Contact Us</li>
          <li>
            <img src={ExternalLogo} alt="sisters in science" />
          </li>
        </ul>
      </div>

    
    </>
  );
};

export default Header;
