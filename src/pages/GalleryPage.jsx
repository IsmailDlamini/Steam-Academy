import "./GalleryPage.css";
import linkedin from "../assets/linkedin.svg";
import facebook from "../assets/facebook.svg";
import Footer from "../components/Footer";
import Header from "../components/Header";
import slide_show_image_1 from "../assets/slide-show-image-1.svg";
import extra_image_1 from "../assets/extra-image-1.svg";
import extra_image_2 from "../assets/slide-show-image-2.svg";
import test_image_1 from "../assets/test-image-1.svg";
import test_image_2 from "../assets/test-image-2.svg";
import test_image_3 from "../assets/test-image-3.svg";
import { useEffect } from "react";
import { useState } from "react";

const GalleryPage = () => {
  const slides = [
    slide_show_image_1,
    extra_image_1,
    extra_image_2,
    test_image_1,
    test_image_2,
    test_image_3,
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 6000);

    return () => clearInterval(intervalId);
  }, [slides.length, currentSlide]);

  const slide_nav = slides.map((slide, index) => {
    return (
      <li
        className={`slide ${currentSlide === index ? "active-nav" : ""}`}
        key={index}
        onClick={() => {
          HandleSlideNav(index);
        }}
      ></li>
    );
  });

  const HandleSlideNav = (number) => {
    setCurrentSlide(number);
  };

  return (
    <>
      <div className="gallery-page-container">
        <div className="social-media-icons">
          <div>
            <img src={linkedin} alt="linkedin" />
            <img src={facebook} alt="facebook" />
            <img src={linkedin} alt="linkedin" />
            <img src={facebook} alt="facebook" />
          </div>
        </div>
        <div className="last-two">
          <div className="green-background"></div>

          <div className="image-background"></div>
        </div>

        <div className="water-mark-1">Gallery</div>

        <div className="image-slide-show-container">
          <div className="slide-show-image">
            <div className="image-container">
              <img
                src={slides[0]}
                alt="slide-show-image-1"
                className={`${currentSlide == 0 ? "showing" : ""}`}
              />
              <img
                src={slides[1]}
                alt="slide-show-image-2"
                className={`${currentSlide == 1 ? "showing" : ""}`}
              />
              <img
                src={slides[2]}
                alt="slide-show-image-3"
                className={`${currentSlide == 2 ? "showing" : ""}`}
              />
              <img
                src={slides[3]}
                alt="slide-show-image-4"
                className={`${currentSlide == 3 ? "showing" : ""}`}
              />
              <img
                src={slides[4]}
                alt="slide-show-image-5"
                className={`${currentSlide == 4 ? "showing" : ""}`}
              />
              <img
                src={slides[5]}
                alt="slide-show-image-6"
                className={`${currentSlide == 5 ? "showing" : ""}`}
              />
            </div>
            <div className="slide-nav">
              <ul>{slide_nav}</ul>
            </div>
          </div>

          <div className="extra-images first">
            <div className="extra-image">
              <img src={extra_image_1} alt="extra-image-1" />
            </div>
            <div className="extra-image">
              <img src={extra_image_2} alt="extra-image-2" />
            </div>
            <div className="extra-image">
              <img src={slide_show_image_1} alt="extra-image-3" />
            </div>
          </div>

          <div className="extra-images second">
            <div className="extra-image">
              <img src={slide_show_image_1} alt="extra-image-3" />
            </div>
            <div className="extra-image">
              <img src={extra_image_1} alt="extra-image-1" />
            </div>

            <div className="extra-image">
              <img src={extra_image_2} alt="extra-image-2" />
            </div>
          </div>
        </div>
      </div>
      <Header color="rgba(245, 245, 245, 1)" />
      <Footer />
    </>
  );
};

export default GalleryPage;
