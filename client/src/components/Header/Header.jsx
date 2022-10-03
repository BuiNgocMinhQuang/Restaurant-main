import React from "react";
import Navbar from "../Navbar/Navbar";
import BgHeader from "../../assets/bg-header.jpg";
import { FaChevronRight } from "react-icons/fa";
import "./Header.scss";
const Header = () => {
  return (
    <div>
      <Navbar />
      <div className="banner">
        <div className="overplay-bg"></div>
        <img src={BgHeader} alt="" className="bg-header" />
        <div className="banner-title">
          <h2>Welcome To Gerícht</h2>
          <p className="nav-location">
            Home <FaChevronRight className="chev-icon" /> About
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
