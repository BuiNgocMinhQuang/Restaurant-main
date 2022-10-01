import React from "react";
import { Header, SubHeading, HappyHours } from "../../components";
import {
  MenuOptions,
  Booking,
  SpecialMenu,
  FindUs,
  Footer,
} from "../../container";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { images } from "../../constants";
import "./Contact.scss";
const Contact = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  return (
    <div className="contact">
      <Header />
      <FindUs />
      <div className="app-bg app-wrapper section-padding" id="awards">
        <div className="app-wrapper-info">
          <form
            onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
            style={{ width: "100%" }}
          >
            <input {...register("firstName")} placeholder="Full Name" />
            <input {...register("firstName")} placeholder="Email Address " />
            <textarea
              {...register("aboutYou")}
              placeholder="Message"
              rows="8"
            />
            <p>{data}</p>
            <button type="submit" className="custom-button">
              Subscribe
            </button>
          </form>
        </div>

        <div className="app-wrapper-img">
          <img src={images.laurels} alt="laurelsimg" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
