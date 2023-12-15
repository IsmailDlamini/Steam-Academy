import Header from "../components/Header";
import "./ServicesPage.css";
import servicesImg from "../assets/services-img.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  return (
    <>
      <div className="service-page-container">
        <div className="Left">
          <div className="content">
            <div>STEAM Academy</div>

            <div>
              <div>
                <span>S</span>cience <span>T</span>echnology <span>E</span>
                nglish <span>A</span>rt <span>M</span>usic!!
              </div>

              <div>
                Empower yourself and transform your career trajectory with STEAM
                Academy, where we lay the foundation for success through
                fundamental <span>computer skills</span>.
              </div>

              <div>
                In today{`'`}s job market, proficiency in IT basics isn{`'`}t just an
                asset; it{`'`}s a <span>necessity</span>. Our courses are designed
                to equip you with all the essential IT skills that will uplift
                your career prospects and modernize your business operations.
              </div>

              <div>
                Whether you{`'`}re an entrepreneur seeking to optimize your workflow
                or an employee aiming to contribute more effectively to your
                organization, our courses ensure you{`'`}re equipped with the
                necessary technological <span>expertise</span>.
              </div>
            </div>

            <Link
              to={"/contact"}
              style={{ textDecoration: "none", color: "rgba(92, 123, 82, 1)" }}
            >
              <button>Enquire</button>{" "}
            </Link>

            <img src={servicesImg} alt="" />
          </div>
        </div>
        <div className="Right">
          <div className="content">
            <div>E-Waste Repurposing</div>

            <div>
              <div>
                Is your company seeking a sustainable and socially responsible
                method to dispose of e-waste? Look no further than{" "}
                <span>STEAM Academy{`'`}s E-Waste Repurposing Program</span>. We
                understand the critical need for businesses to responsibly
                manage electronic waste while contributing to a greener, more
                sustainable future.
              </div>

              <div>
                By partnering with us, your company not only ensures the
                environmentally conscious management of electronic waste but
                also actively participates in a socially impactful initiative,
                fostering job creation and skill development within Mpumalanga
                communities.
              </div>

              <div>
                Furthermore, our initiative places a special emphasis on
                empowering black females in the tech industry. We{`'`}re dedicated
                to breaking barriers and providing a platform for skill
                development and career advancement specifically tailored to
                empower black women in Mpumalanga.
              </div>
            </div>

            <Link
              to={"/contact"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <button>Enquire</button>
            </Link>
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
