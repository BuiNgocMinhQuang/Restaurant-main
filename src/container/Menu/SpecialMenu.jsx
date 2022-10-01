import React from "react";

import { SubHeading, MenuItem } from "../../components";
import { data, images } from "../../constants";
import "./SpecialMenu.scss";

const SpecialMenu = () => (
  <div className="app-specialMenu flex-center section-padding" id="menu">
    <div className="app-specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext-cormorant">Today&apos;s Special</h1>
    </div>

    <div className="app-specialMenu-menu">
      <div className="app-specialMenu-menu-wine  flex-center">
        <p className="app-specialMenu-menu-heading">Wine & Beer</p>
        <div className="app-specialMenu-menu-items">
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>

      <div className="app-specialMenu-menu-img">
        <img src={images.menu} alt="menu-img" />
      </div>

      <div className="app-specialMenu-menu-cocktails  flex-center">
        <p className="app-specialMenu-menu-heading">Cocktails</p>
        <div className="app-specialMenu-menu-items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem
              key={cocktail.title + index}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom-button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
