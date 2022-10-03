import React from "react";

import { images } from "../../constants";

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: "1rem" }}>
    <p className="p-cormorant">{title}</p>
    <img src={images.spoon} alt="spoonimage" className="spoon-img" />
  </div>
);

export default SubHeading;
