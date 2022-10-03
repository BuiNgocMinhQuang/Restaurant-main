import React from "react";
import Header from "../../components/Header/Header";
import { SubHeading } from "../../components";
import about1 from "../../assets/about-img1.jpg";
import about2 from "../../assets/about-img2.jpg";
import "./About.scss";
import { Intro, Chef, Customer, Gallery, Footer } from "../../container";
import { images } from "../../constants";
const About = () => {
  return (
    <div>
      <Header />
      <div className="app-about  section-padding">
        <section className="section-padding">
          <div className="app-specialMenu-title">
            <SubHeading title="Our History" />
            <h1 className="headtext-cormorant">
              serving customers for over a decade
            </h1>
          </div>
          <div className="app-about-content">
            <div className="app-about-item">
              <p className="p-opensans app-about-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor
                sit Lorem ipsum dolor sit amet, consectetur adipiscing elit
                auctor sit Lorem ipsum dolor sit amet, consectetur adipiscing
                elit auctor sit
              </p>
              <img src={about1} alt="quoteimage" className="about-img" />
            </div>
            <div className="app-about-item">
              <img src={about2} alt="quoteimage" className="about-img" />
              <p className="text-golden">Over the years</p>
              <div className="decs-option">
                <div className="">
                  <p className="gold-number">30+</p>
                  <img src={images.spoon} alt="" className="spoon-img" />
                  <h5 className="desc-details">Breakfast Options</h5>
                </div>

                <div className="">
                  <p className="gold-number">50+</p>
                  <img src={images.spoon} alt="" className="spoon-img" />
                  <h5 className="desc-details">Dinner Options</h5>
                </div>

                <div className="">
                  <p className="gold-number">8</p>
                  <img src={images.spoon} alt="" className="spoon-img" />
                  <h5 className="desc-details">New Locations</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-padding">
          <div className="app-specialMenu-title">
            <SubHeading title="About Us" />
            <h1 className="headtext-cormorant">Happy Hours with Us</h1>
            <p
              className="p-opensans"
              style={{ color: "rgb(170, 170, 170)", marginTop: "2rem" }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatibus impedit doloribus porro eligendi ea, sapiente illum,
              earum dolor est iure saepe quibusdam, expedita perferendis
              similique illo corrupti suscipit nemo quam?
            </p>
          </div>
          <Intro />
        </section>
        <section className=" section-padding">
          <Chef />
        </section>
        <section className="">
          <Customer />
        </section>
        <section>
          <Gallery />
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default About;
