import React from "react";
import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Banner,
  Intro,
  Laurels,
  SpecialMenu,
  Booking,
  MenuOptions,
  Customer,
  Blog,
} from "../../container";
import { Navbar } from "../../components";
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <AboutUs />
      <Booking />
      <MenuOptions />
      <SpecialMenu />
      <Chef />
      <Customer />
      <Intro />
      <Laurels />
      <Blog />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
};

export default HomePage;
