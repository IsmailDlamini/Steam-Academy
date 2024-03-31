import Header from "../components/Header";
import "./AboutPage.css";
import aboutPageImage from "../assets/aboutPageImage.svg";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import r from '../assets/r.png'

import i from '../assets/i.png'
import p from '../assets/p.png'
import e from '../assets/e.png'
import s from '../assets/s.png'
import a from '../assets/a.png'
import r_mobile from '../assets/R-mobile.jpg'
import i_mobile from '../assets/I-mobile.jpg'
import p_mobile from '../assets/P-mobile.jpg'
import e_mobile from '../assets/E-mobile.jpg'
import s_mobile from '../assets/S-mobile.jpg'
import a_mobile from '../assets/A-mobile.jpg'

const AboutPage = () => {
  return (
    <>
      <div className="about-page-container">
        <div className="first-half">
          <div className="information-container">
            <div className="page-content">
              <div>
                What is the <span>e</span>ssence of STEAM Academy?
              </div>

              <div>
                <div>
                  STEAM Academy is driven by the will to ignite positive change
                  within South African communities, foster eco-friendly
                  practices, in order to empower individuals for a sustainable
                  future.
                </div>

                <div>
                  Our mission extends beyond transforming e-waste; it{`'`}s about
                  uplifting communities in Mpumalanga by equipping them with
                  valuable tech skills.
                </div>

                <div>
                  Through our initiatives, we{`'`}re not just repurposing
                  electronics; we{`'`}re creating opportunities, bolstering the
                  local economy, and paving the way for a brighter, more skilled
                  workforce in the heart of Mpumalanga.
                </div>
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
                    Contact Us{" "}
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="image-container">
            <img src={aboutPageImage} alt="main site image" />
          </div>

          <div className="water-mark-1">About Us</div>
          <div className="water-mark-2">Values</div>
        </div>

        <div className="second-half">
          <div className="left">
            <div className="project-container">
              <div className="project-title">Resilience</div>
              <div className="image-description-container">
                <div className="project-image">
                  <img src={r} alt="project image" className="desktop-letter"/>
                  <img src={r_mobile} alt="project image" className="mobile-letter"/>
                </div>
                <div className="project-description">
                Develop leadership that is resilient and self-aware.
                </div>
              </div>
            </div>

            <div className="project-container">
              <div className="project-title">Innovate</div>
              <div className="image-description-container">
                <div className="project-image">
                  <img src={i} alt="project image" className="desktop-letter"/>
                  <img src={i_mobile} alt="project image" className="mobile-letter"/>
                </div>
                <div className="project-description">
                Create a space where children can be curious, creative, and innovative.

                </div>
              </div>
            </div>


            <div className="project-container">
              <div className="project-title">Partnership</div>
              <div className="image-description-container">
                <div className="project-image">
                  <img src={p} alt="project image" className="desktop-letter"/>
                  <img src={p_mobile} alt="project image" className="mobile-letter"/>
                </div>
                <div className="project-description">
                Promote collaboration, diversity, and respect.
                </div>
              </div>
            </div>


          </div>

          <div className="right">
            <div className="project-container">
              <div className="project-title">Excellence</div>
              <div className="image-description-container">
                <div className="project-image">
                  <img src={e} alt="project image" className="desktop-letter"/>
                  <img src={e_mobile} alt="project image" className="mobile-letter"/>
                </div>
                <div className="project-description">
                Nurture a culture of excellence and continuous improvement.
                </div>
              </div>
            </div>

            <div className="project-container">
              <div className="project-title">Sustainable</div>
              <div className="image-description-container">
                <div className="project-image">
                  <img src={s} alt="project image" className="desktop-letter"/>
                  <img src={s_mobile} alt="project image" className="mobile-letter"/>
                </div>
                <div className="project-description">
                Apply sustainable solutions in our innovative projects.
                </div>
              </div>
            </div>


            <div className="project-container">
              <div className="project-title">Autonomy</div>
              <div className="image-description-container">
                <div className="project-image">
                  <img src={a} alt="project image" className="desktop-letter"/>
                  <img src={a_mobile} alt="project image" className="mobile-letter"/>
                </div>
                <div className="project-description">
                Develop learners that are independent yet aware of the VUCA world.
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>

      <Header />
      <Footer />
    </>
  );
};

export default AboutPage;
