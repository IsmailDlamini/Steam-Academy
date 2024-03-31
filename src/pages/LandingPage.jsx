import "./LandingPage.css";
import Header from "../components/Header";
import siteVisual from "../assets/siteVisual4.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

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
              <button>
                <Link
                  to={"/about"}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Learn More{" "}
                </Link>
              </button>

              <button>
                <Link
                  to={"/contact"}
                  style={{
                    textDecoration: "none",
                    color: "rgba(92, 123, 82, 1)",
                  }}
                >
                  Contact Us
                </Link>
              </button>
            </div>
          </div>

          <div className="water-mark">Home</div>
        </div>
        <div className="ImageContainer">
          <div className="Image">
            <img src={siteVisual} alt="" />
          </div>
        </div>
      </div>

      <Header />
      <Footer />
    </>
  );
};

export default LandingPage;
