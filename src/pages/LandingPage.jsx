import "./LandingPage.css";
import Header from "../components/Header";

const LandingPage = () => {


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
          <div className="Image"></div>
        </div>
      </div>

      <Header />
      <div className="water-mark">Home</div>
    </>
  );
};

export default LandingPage;
