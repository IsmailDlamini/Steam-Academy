import "./GalleryPage.css";
import linkedin from "../assets/linkedin.svg";
import facebook from "../assets/facebook.svg";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Gallery_Image_1 from "../assets/Gallery-Image-1.jpg";
import Gallery_Image_2 from "../assets/Gallery-Image-2.jpg";
import Gallery_Image_3 from "../assets/Gallery-Image-3.jpg";
import Gallery_Image_4 from "../assets/Gallery-Image-4.jpg";
import Gallery_Image_5 from "../assets/Gallery-Image-5.jpg";
import Gallery_Image_6 from "../assets/Gallery-Image-6.jpg";
import Gallery_Image_7 from "../assets/Gallery-Image-7.jpg";
import Gallery_Image_8 from "../assets/Gallery-Image-8.jpg";
import Gallery_Image_9 from "../assets/Gallery-Image-9.jpg";
import Gallery_Image_10 from "../assets/Gallery-Image-10.jpg";
import Gallery_Image_11 from "../assets/Gallery-Image-11.jpg";
import Gallery_Image_12 from "../assets/Gallery-Image-12.jpg";
import Gallery_Image_13 from "../assets/Gallery-Image-13.jpg";
import Gallery_Image_14 from "../assets/Gallery-Image-14.jpg";
import { useEffect } from "react";
import { useState } from "react";

const GalleryPage = () => {
  const slides = [
    Gallery_Image_1,
    Gallery_Image_2,
    Gallery_Image_3,
    Gallery_Image_4,
    Gallery_Image_5,
    Gallery_Image_6,
    Gallery_Image_7,
    Gallery_Image_8,
    Gallery_Image_9,
    Gallery_Image_10,
    Gallery_Image_11,
    Gallery_Image_12,
    Gallery_Image_13,
    Gallery_Image_14,
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

  const facebook_link =
    "https://www.facebook.com/people/Sibongile-Khabonina/100069573130153/?paipv=0&eav=AfYpBmAKpJOL5PC8ckgL_uJiaUKJPlaCKb5UTpTo64VIkQGALDqt7_fdezkQqZW7lpc&_rdr";

  const linkedin_link =
    "https://www.linkedin.com/in/gama-sibongile-9b785875/?originalSubdomain=za";

    const LoadImages = () => {
      return [...Array(14)].map((_, index) => (
        <img
          src={slides[index]}
          alt={`slide-show-image-${index + 1}`}
          className={`${currentSlide === index ? "showing" : ""}`}
          key={index}
        />
      ));
    }; 

  return (
    <>
      <div className="gallery-page-container">
        <div className="social-media-icons">
          <div>
            <a href={linkedin_link}>
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href={facebook_link}>
              <img src={facebook} alt="facebook" />
            </a>
            <a href={linkedin_link}>
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href={facebook_link}>
              <img src={facebook} alt="facebook" />
            </a>
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

              <LoadImages />
              {LoadImages}
              {/* <img
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
              <img
                src={slides[6]}
                alt="slide-show-image-7"
                className={`${currentSlide == 6 ? "showing" : ""}`}
              />
              <img
                src={slides[7]}
                alt="slide-show-image-8"
                className={`${currentSlide == 7 ? "showing" : ""}`}
              />
              <img
                src={slides[8]}
                alt="slide-show-image-9"
                className={`${currentSlide == 8 ? "showing" : ""}`}
              />
              <img
                src={slides[9]}
                alt="slide-show-image-10"
                className={`${currentSlide == 9 ? "showing" : ""}`}
              />
              <img
                src={slides[10]}
                alt="slide-show-image-11"
                className={`${currentSlide == 10 ? "showing" : ""}`}
              />
              <img
                src={slides[11]}
                alt="slide-show-image-12"
                className={`${currentSlide == 11 ? "showing" : ""}`}
              />
              <img
                src={slides[12]}
                alt="slide-show-image-13"
                className={`${currentSlide == 12 ? "showing" : ""}`}
              />
              <img
                src={slides[13]}
                alt="slide-show-image-14"
                className={`${currentSlide == 13 ? "showing" : ""}`}
              /> */}
            </div>
            <div className="slide-nav">
              <ul>{slide_nav}</ul>
            </div>
          </div>

          <div className="extra-images first">
            <div className="extra-image">
              <img src={slides[13]} alt="extra-image-1" />
            </div>
            <div className="extra-image">
              <img src={slides[12]} alt="extra-image-2" />
            </div>
            <div className="extra-image">
              <img src={slides[11]} alt="extra-image-3" />
            </div>
          </div>

          <div className="extra-images second">
            <div className="extra-image">
              <img src={slides[12]} alt="extra-image-3" />
            </div>
            <div className="extra-image">
              <img src={slides[11]} alt="extra-image-1" />
            </div>

            <div className="extra-image">
              <img src={slides[10]} alt="extra-image-2" />
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
