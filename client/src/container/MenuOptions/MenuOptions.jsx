import React from "react";

import logoIcon from "../../assets/smIcon.png";
import "./MenuOptions.scss";
const MenuOptions = () => {
  return (
    <div className="app-menuoptions app-menuoptions-bg section-padding flex-center ">
      <div className="app-menuoptions-list ">
        <img src={logoIcon} alt="" className="logoILeft" />
        <ul className="app-menuoptions-list">
          <li className="headtext-cormorant">Bar Menu</li>
          <li className="headtext-cormorant">Food Menu</li>
          <li className="headtext-cormorant">Deserts Menu</li>
        </ul>
      </div>
    </div>
  );
};

export default MenuOptions;
