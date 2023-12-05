import "./Header.css";
import SiteLogo from "../assets/SiteLogo2.svg";
import ExternalLogo from "../assets/ExternalLogo2.svg";
import MobileNavIconOpen from "../assets/MobileNavIconOpen.svg";
import MobileNavBar from "./MobileNavBar";
import { useState } from "react";
// import MobileNavIcon1 from "../components/MobileNavIcon1";
// import MobileNavIcon2 from "../components/MobileNavIcon2";

const Header = () => {
  const [navBarState, SetNaBarState] = useState(false);

  const ToggleMobileNavBar = () => {
    SetNaBarState(!navBarState);
  };
  return (
    <>
      <div className="PageHeader">
        <div className="Logo">
          <img src={SiteLogo} className="SiteLogo" alt="SiteLogo" />
        </div>

        <div className="NavBar">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact Us</li>
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

      </div>

      <MobileNavBar
        ClassName={`MobileNavBar ${
          navBarState ? "MobileNavOpen" : "MobileNavClosed"
        }`}
        Logo={ExternalLogo}
      />

    
    </>
  );
};

export default Header;
