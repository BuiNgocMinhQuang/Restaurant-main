import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app-navbar">
      <div className="app-navbar-logo">
        <img src={images.gericht} alt="app-logo" />
      </div>
      <ul className="app-navbar-links">
        <li>
          <Link to="/" className="p-opensans">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="p-opensans">
            About
          </Link>
        </li>
        <li>
          <Link to="/menu" className="p-opensans">
            Menu
          </Link>
        </li>
        <li>
          <Link to="/service" className="p-opensans">
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact" className="p-opensans">
            Contact
          </Link>
        </li>
      </ul>
      <div className="app-navbar-login">
        <Link to="/signin" className="p-opensans">
          Log In / Registration
        </Link>
        <div />
        <Link to="/booking" className="p-opensans">
          Book Table
        </Link>
      </div>
      <div className="mobile-menu">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="mobile-menu-overlay flex-center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay-close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="mobile-menu-links">
              <li>
                <a href="#home" onClick={() => setToggleMenu(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#menu" onClick={() => setToggleMenu(false)}>
                  Menu
                </a>
              </li>
              <li>
                <a href="#awards" onClick={() => setToggleMenu(false)}>
                  Awards
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setToggleMenu(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
