import React from "react";

import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.scss";

const Newsletter = () => (
  <div className="app-newsletter">
    <div className="app-newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext-cormorant">Subscribe To Our Newsletter</h1>
      <p className="p-opensans">And never miss latest Updates!</p>
    </div>
    <div className="app-newsletter-input flex-center">
      <input type="email" placeholder="Enter your email address" />
      <button type="button" className="custom-button">
        Subscribe
      </button>
    </div>
  </div>
);

export default Newsletter;
