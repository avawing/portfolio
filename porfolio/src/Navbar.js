import React from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

function Navbar() {

  return (
    <div>
      <Nav>
        <NavItem>
          <NavLink>
            <Link to="/">Home</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link to="/projects">Projects</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link to="/resume">Resume</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link to="/contact">Contact</Link>
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Navbar;
