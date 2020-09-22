import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';



function Navbar(){
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

    return(
      <div>
      <Nav>
        <NavItem>
          <NavLink><Link to = "/">Home</Link></NavLink>
        </NavItem>
        <NavItem>
          <NavLink><Link to = "/projects">Projects</Link></NavLink>
        </NavItem>
        <NavItem>
          <NavLink><Link to = "/resume">Resume</Link></NavLink>
        </NavItem>
        <NavItem>
          <NavLink><Link to = "/contact">Contact</Link></NavLink>
        </NavItem>
      </Nav>
    </div>
    )
}

export default Navbar