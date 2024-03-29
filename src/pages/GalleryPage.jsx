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
import Gallery_Image_15 from "../assets/Gallery-Image-15.jpg";
import Gallery_Image_16 from "../assets/Gallery-Image-16.jpg";
import Gallery_Image_17 from "../assets/Gallery-Image-17.jpg";
import Gallery_Image_18 from "../assets/Gallery-Image-18.jpg";
import Gallery_Image_19 from "../assets/Gallery-Image-19.jpg";
import Gallery_Image_20 from "../assets/Gallery-Image-20.jpg";
import Gallery_Image_21 from "../assets/Gallery-Image-21.jpg";
import Gallery_Image_22 from "../assets/Gallery-Image-22.jpg";
import Gallery_Image_23 from "../assets/Gallery-Image-23.jpg";
import Gallery_Image_24 from "../assets/Gallery-Image-24.jpg";
import Gallery_Image_25 from "../assets/Gallery-Image-25.jpg";
import Gallery_Image_26 from "../assets/Gallery-Image-26.jpg";
import Gallery_Image_27 from "../assets/Gallery-Image-27.jpg";
import Gallery_Image_28 from "../assets/Gallery-Image-28.jpg";

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
    Gallery_Image_15,
    Gallery_Image_16,
    Gallery_Image_17,
    Gallery_Image_18,
    Gallery_Image_19,
    Gallery_Image_20,
    Gallery_Image_21,
    Gallery_Image_22,
    Gallery_Image_23,
    Gallery_Image_24,
    Gallery_Image_25,
    Gallery_Image_26,
    Gallery_Image_27,
    Gallery_Image_28,
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
    return [...Array(28)].map((_, index) => (
      <img
        src={slides[index]}
        alt={`slide-show-image-${index + 1}`}
        className={`${currentSlide === index ? "showing" : ""}`}
        key={index}
      />
    ));
  };

  const Linkedin = <img src={linkedin} alt="linkedin" />;
  const Facebook = <img src={facebook} alt="facebook" />;

  return (
    <>
      <div className="gallery-page-container">
        <div className="social-media-icons">
          <div>
            <a href={linkedin_link}>{Linkedin}</a>
            <a href={facebook_link}>{Facebook}</a>
            <a href={linkedin_link}>{Linkedin}</a>
            <a href={facebook_link}>{Facebook}</a>
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
