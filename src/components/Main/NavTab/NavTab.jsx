import React from "react";
import "./NavTab.css";
import { Link } from "react-scroll";

const NavTab = () => {
  return (
    <div>
      <nav className="navtab">
        <Link
          to="about-project"
          duration={800}
          smooth={true}
          className="navtab__link"
        >
          О проекте
        </Link>
        <Link to="techs" duration={800} smooth={true} className="navtab__link">
          Технологии
        </Link>
        <Link
          to="about-me"
          duration={800}
          smooth={true}
          className="navtab__link"
        >
          Студент
        </Link>
      </nav>
    </div>
  );
};

export default NavTab;
