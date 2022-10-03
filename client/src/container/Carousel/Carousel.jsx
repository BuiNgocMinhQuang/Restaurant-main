import React from "react";
import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { SubHeading } from "../../components";

import "./Carousel.scss";

const Banner = () => (
  <div className="app-header app-wrapper section-padding" id="home">
    <div className="app-wrapper-info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app-header-h1">The Key To Fine Dining</h1>
      <p className="p-opensans" style={{ margin: "2rem 0" }}>
        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat
        morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
        tellus
      </p>
      <button type="button" className="custom-button">
        Explore Menu
      </button>
    </div>

    <div className="app-wrapper-img">
      {/* <img src={images.welcome} alt="header-img" /> */}
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        showArrows={false}
        showStatus={false}
      >
        <div>
          <img src={banner1} alt="banner1" />
        </div>
        <div>
          <img src={banner2} alt="banner2" />
        </div>
        <div>
          <img src={banner3} alt="banner3" />
        </div>
      </Carousel>
    </div>
  </div>
);

export default Banner;
