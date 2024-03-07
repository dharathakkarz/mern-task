
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

function Navbar1(args) {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
    <Navbar {...args}>
      <NavbarBrand href="/">Notebook</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink href="/home/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about/">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact/">Contact</NavLink>
          </NavItem>
        
        </Nav>
       
      </Collapse>
    </Navbar>
  </div>
  )
}

export default Navbar1



