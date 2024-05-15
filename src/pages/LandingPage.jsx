import { useEffect, useRef, useState } from "react";
import "./LandingPage.css";
import Header from "../components/Header";
import siteVisual from "../assets/siteVisual4.png";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/LoadingSpinner";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const containerRef = useRef(null);

  const [doneLoading, setDoneLoading] = useState(false);
 
  useEffect(() => {

    const timeoutId = setTimeout(() => {
      setDoneLoading(true);
    }, 1800)

    if(doneLoading){
      const nodes = containerRef.current.querySelectorAll("*");
      nodes.forEach((node) => {
        node.classList.add("fade-in");
      });
      const elements = containerRef.current.querySelectorAll(".fade-in");
  
      const AppearOptions = {
        threshold: 0,
        rootMargin: "0px 0px -10px 0px",
      };
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains("fade-in")) {
              entry.target.classList.add("appear");
            }
          }
        });
      }, AppearOptions);
  
      elements.forEach((element) => {
        observer.observe(element);
      });

      return () => {
        elements.forEach((element) => {
          observer.unobserve(element);
        });
        clearTimeout(timeoutId);
      };
    }

    else {
      const nodes = containerRef.current.querySelectorAll("*");
      nodes.forEach((node) => {
        node.classList.add("fade-in");
      });


      
    }
   
  }, [doneLoading]);

  

  return (
    <>
    <LoadingSpinner />
      <div className="LandingPageContainer" ref={containerRef}>
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
