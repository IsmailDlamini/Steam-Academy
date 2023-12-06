import Header from "../components/Header";
import "./AboutPage.css";
import aboutPageImage from "../assets/aboutPageImage.svg";
import projectImage from "../assets/projectImage.png";

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
                  Our mission extends beyond transforming e-waste; it's about
                  uplifting communities in Mpumalanga by equipping them with
                  valuable tech skills.
                </div>

                <div>
                  Through our initiatives, we're not just repurposing
                  electronics; we're creating opportunities, bolstering the
                  local economy, and paving the way for a brighter, more skilled
                  workforce in the heart of Mpumalanga.
                </div>
              </div>

              <div className="buttons">
                <button>Learn More</button>
                <button>Contact Us</button>
              </div>
            </div>
          </div>
          <div className="image-container">
            <img src={aboutPageImage} alt="main site image" />
          </div>

          <div className="water-mark-1">About Us</div>
          <div className="water-mark-2">Projects</div>
        </div>

        <div className="second-half">
          <div className="left">
            <div className="project-container">
              <div className="project-title">2022 - Project Name</div>
              <div className="image-description-container">
                <div className="project-image">
                  <img src={projectImage} alt="project image" />
                </div>
                <div className="project-description">
                  For this project, we managed to achieve remarkable milestones
                  by harnessing innovative technologies and fostering
                  collaborative partnerships.
                </div>
              </div>
            </div>


            <div className="project-container">
              <div className="project-title">2022 - Project Name</div>
              <div className="image-description-container">
                <div className="project-image">
                  <img src={projectImage} alt="project image" />
                </div>
                <div className="project-description">
                  For this project, we managed to achieve remarkable milestones
                  by harnessing innovative technologies and fostering
                  collaborative partnerships.
                </div>
              </div>
            </div>



          </div>

          <div className="right">

          <div className="project-container">
              <div className="project-title">2022 - Project Name</div>
              <div className="image-description-container">
                <div className="project-image">
                  <img src={projectImage} alt="project image" />
                </div>
                <div className="project-description">
                  For this project, we managed to achieve remarkable milestones
                  by harnessing innovative technologies and fostering
                  collaborative partnerships.
                </div>
              </div>
            </div>


            <div className="project-container">
              <div className="project-title">2022 - Project Name</div>
              <div className="image-description-container">
                <div className="project-image">
                  <img src={projectImage} alt="project image" />
                </div>
                <div className="project-description">
                  For this project, we managed to achieve remarkable milestones
                  by harnessing innovative technologies and fostering
                  collaborative partnerships.
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Header />
    </>
  );
};

export default AboutPage;
