import React from "react";
import "./Service.scss";
import { Header, SubHeading, HappyHours } from "../../components";
import {
  MenuOptions,
  Booking,
  SpecialMenu,
  FindUs,
  Footer,
} from "../../container";

const Service = () => {
  return (
    <div>
      <Header />
      <div className="service flex-center section-padding">
        <div className="app-service-title">
          <SubHeading title="Serving Quality" />
          <h1 className="headtext-cormorant">
            We at Gericth are serving our customers for over a decade.
          </h1>
          <p
            className="p-opensans"
            style={{ color: "rgb(170, 170, 170)", margin: "2rem 0" }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus impedit doloribus porro eligendi ea, sapiente illum,
            earum dolor est iure saepe quibusdam, expedita perferendis similique
            illo corrupti suscipit nemo quam?
          </p>
          <div className="about-btn flex-center">
            <button className="custom-button ">Read More</button>
            <button className="custom-button">Contact Us</button>
          </div>
        </div>
      </div>
      <MenuOptions />
      <Booking />
      <HappyHours />
      <SpecialMenu />
      <FindUs />
      <Footer />
    </div>
  );
};

export default Service;
