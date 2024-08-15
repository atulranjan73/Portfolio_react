import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { Link as AnchorLink } from 'react-scroll';
import './navbar.css';
import underline from '../../assets/nav_underline.svg';

function Navbar() {
  const [menu, setMenu] = useState("home");

  return (
    <div className="Navbar">
      <img src={logo} alt="logo" />
      <ul className="nav-menu">
        <li>
          <AnchorLink
            className="anchor-link"
            to="home"
            smooth={true}
            duration={500}
            onClick={() => setMenu("home")}
          >
            Home {menu === "home" && <span className="active-menu"></span>}
            {menu === "home" && <img src={underline} alt="underline" />}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            to="about"
            smooth={true}
            offset={-50}
            duration={500}
            onClick={() => setMenu("about")}
          >
            About Me {menu === "about" && <span className="active-menu"></span>}
            {menu === "about" && <img src={underline} alt="underline" />}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            to="services"
            smooth={true}
            offset={-50}
            duration={500}
            onClick={() => setMenu("services")}
          >
            Services {menu === "services" && <span className="active-menu"></span>}
            {menu === "services" && <img src={underline} alt="underline" />}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            to="service"
            smooth={true}
            offset={-50}
            duration={500}
            onClick={() => setMenu("service")}
          >
            Service {menu === "service" && <span className="active-menu"></span>}
            {menu === "service" && <img src={underline} alt="underline" />}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            to="contact"
            smooth={true}
            offset={-50}
            duration={500}
            onClick={() => setMenu("contact")}
          >
            Contact {menu === "contact" && <span className="active-menu"></span>}
            {menu === "contact" && <img src={underline} alt="underline" />}
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
}

export default Navbar;
