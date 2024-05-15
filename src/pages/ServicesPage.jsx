import { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import "./ServicesPage.css";
import servicesImg from "../assets/services-img.png";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/LoadingSpinner";
import { Link } from "react-router-dom";

const ServicesPage = () => {
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
      <div className="service-page-container" ref={containerRef}>
        <div className="Left">
          <div className="content">
            <div>
              <span style={{ color: "#FF006E" }}>S</span>
              <span style={{ color: "#E63B2E" }}>T</span>
              <span style={{ color: "#F5B700" }}>E</span>
              <span style={{ color: "#4FEC90" }}>A</span>
              <span style={{ color: "#3A86FF" }}>M</span>
              {"  "}
              {"  "}
              <span style={{ color: "#571B5B" }}> Academy</span>
            </div>

            <div>
              <div>
                <span style={{ color: "#FF006E" }}>S</span>cience{" "}
                <span style={{ color: "#E63B2E" }}>T</span>echnology{" "}
                <span style={{ color: "#F5B700" }}>E</span>
                ngineering <span style={{ color: "#4FEC90" }}>A</span>rt{" "}
                <span style={{ color: "#3A86FF" }}>M</span>ath!!
              </div>

              <div className="paragraphs">
                <div className="paragraph">
                  <div className="title" style={{ color: "#04E762" }}>
                    Pre-primary and primary curriculum
                  </div>
                  <div className="text">
                    We provide a robust curriculum for our youngest learners,
                    laying a strong foundation for their future learning
                    journey.
                  </div>
                </div>

                <div className="paragraph">
                  <div className="title" style={{ color: "#FB5607" }}>
                    {" "}
                    Science, Technology, Engineering, and Mathematics (STEM)
                  </div>
                  <div className="text">
                    Our programme integrates these four disciplines, encouraging
                    students to think critically and solve problems.
                  </div>
                </div>

                <div className="paragraph">
                  <div className="title" style={{ color: "#FF006E" }}>
                    Art and Design
                  </div>
                  <div className="text">
                    We believe in the power of creativity and include art and
                    design in our curriculum to foster innovative thinking.
                  </div>
                </div>

                <div className="paragraph">
                  <div className="title" style={{ color: "#F5B700" }}>
                    Coding and Robotics
                  </div>
                  <div className="text">
                    Our students get hands-on experience with coding and
                    robotics, equipping them with valuable skills for the
                    digital age.
                  </div>
                </div>

                <div className="paragraph">
                  <div className="title" style={{ color: "#3A86FF" }}>
                    Virtual Camps
                  </div>
                  <div className="text">
                    We offer virtual camps to provide immersive learning
                    experiences from the comfort of home.
                  </div>
                </div>

                <div className="paragraph">
                  <div className="title" style={{ color: "#E63B2E" }}>
                    Community Curriculum E-learner Level 1-3 and K-53
                  </div>
                  <div className="text">
                    Our community curriculum is designed to be inclusive and
                    accessible, catering to a wide range of learning levels.
                  </div>
                </div>
              </div>
            </div>

            <Link
              to={"/contact"}
              style={{ textDecoration: "none", color: "rgba(92, 123, 82, 1)" }}
            >
              <button>Enquire</button>{" "}
            </Link>

            {/* <img src={servicesImg} alt="service-women" /> */}
          </div>
        </div>
        <div className="Right">
          <div className="content">
            <div>E-Waste Repurposing</div>

            <div>
              <div>
                <span>Collection and Repurposing</span>
                <br />
                We collect Type 2 and Type 3 electronic waste and repurpose it,
                giving these materials a new lease on life.
              </div>

              <div>
                <span>Distribution</span>
                <br />
                We distribute repurposed Type 2 and Type 3 electronic waste to
                other schools, expanding the reach of our initiative and
                providing resources for broader educational use.
              </div>

              <div>
                <span>Dismantling for Academic Use</span>
                <br /> We dismantle Type 2 and Type 3 electronic waste for
                academic use, providing hands-on learning materials for our
                students.
              </div>
            </div>

            <Link
              to={"/contact"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <button>Enquire</button>
            </Link>

            <img src={servicesImg} alt="service-women" />
          </div>
        </div>

        <div className="water-mark-1">Services</div>
      </div>

      <Header />
      <Footer />
    </>
  );
};

export default ServicesPage;
