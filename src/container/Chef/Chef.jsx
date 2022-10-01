import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.scss";

const Chef = () => (
  <div className="app-bg app-wrapper section-padding">
    <div className="app-wrapper-img app-wrapper-img-reverse">
      <img src={images.chef} alt="chefimage" />
    </div>
    <div className="app-wrapper-info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext-cormorant">What we believe in</h1>

      <div className="app-chef-content">
        <div className="app-chef-content-quote">
          <img src={images.quote} alt="quoteimage" />
          <p className="p-opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
          </p>
        </div>
        <p className="p-opensans">
          {" "}
          auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
          Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
          lectus eu. Congue iaculis integer curabitur semper sit nunc.{" "}
        </p>
      </div>

      <div className="app-chef-sign">
        <p>Kevin Luo</p>
        <p className="p-opensans">Chef & Founder</p>
        <img src={images.sign} alt="signimage" />
      </div>
    </div>
  </div>
);

export default Chef;
