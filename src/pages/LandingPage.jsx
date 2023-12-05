import "./LandingPage.css";
import SiteLogo from "../assets/SiteLogo2.svg";
import ExternalLogo from "../assets/ExternalLogo2.svg";
import { useState } from "react";
// import MobileNavIcon1 from "../components/MobileNavIcon1";
// import MobileNavIcon2 from "../components/MobileNavIcon2";
import MobileNavIconOpen from '../assets/MobileNavIconOpen.svg'
import MobileNavBar from "../components/MobileNavBar";
import Header from "../components/Header";

const LandingPage = () => {

    const [navBarState, SetNaBarState] = useState(false)

    const ToggleMobileNavBar = () => {
        SetNaBarState(!navBarState)
    }   

  return (
    <>
      <div className="LandingPageContainer">
        <div className="InformationContainer">
          <div className="SiteInfo">
            <div>
              We Transform <span>E</span>-Waste Into <span>E</span>nnovation
            </div>
            <div>
              Welcome to STEAM Academy, where creativity meets sustainability!
              Our E-Waste Repurposing Program empowers students to explore the
              fascinating world of technology while making a positive impact on
              the environment.
            </div>

            <div className="buttons">
                <button>Learn More</button>
                <button>Contact Us</button>
            </div>

          </div>
        </div>
        <div className="ImageContainer">
            <div className="Image">

            </div>
        </div>

        
        
      </div>

      {/* <div className="PageHeader">
        <div className="Logo">
          <img src={SiteLogo} className="SiteLogo" alt="" />
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
          <img src={ExternalLogo} className="ExternalLogo" alt="" />
        </div>

        <div className="MobileNav">
          
            <img src={MobileNavIconOpen} className='icon' onClick={ToggleMobileNavBar} alt="" />
            {/* <MobileNavIcon1 
              ClassName={`icon ${navBarState ? 'shift-mobile-nav' : ''}` }
              onClick={ToggleMobileNavBar}
            />
            <MobileNavIcon2 
              ClassName={`icon ${navBarState ? '' : 'shift-mobile-nav'}` }
              onClick={ToggleMobileNavBar} */}
            {/* /> */}
        {/* </div> */}

        
      {/* </div> */} */}

      <Header 
        Logo= {SiteLogo}
        ExternalLogo={ExternalLogo}
        MobileNavIcon={MobileNavIconOpen}
        onClick={ToggleMobileNavBar}
      
      />

      <MobileNavBar
        ClassName = {`MobileNavBar ${navBarState ? 'MobileNavOpen' : 'MobileNavClosed'}`}
        Logo = {ExternalLogo}
      />

      <div className="water-mark">
        Home
      </div>
      

      

    </>
  );
};

export default LandingPage;
