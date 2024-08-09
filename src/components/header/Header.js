// src/components/Header.js
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./header.css"; // Custom CSS for additional styling
import logo from "../../images/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="marquee">
        <p>
          WE STAND FOR WILDLIFE, I STAND FOR WILDLIFE, and STAND FOR WILDLIFE
          are service marks of Wildlife Conservation Society. We will continue
          to set the bar for science, conservation action, and education.
        </p>
      </div>
      <Navbar color="light" light expand="md" fixed-top>
        <NavbarBrand href="/">
          <img
            alt="logo"
            src={logo}
            style={{
              height: 40,
              width: 75,
            }}
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/about">
                About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/discovery">
                Discovery
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/event">
                Event
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/service">
                Service
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/contact">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
          <Link to='/book' className="btn btn-primary">
            Buy Ticket
            <i className="fa fa-arrow-right ms-3"></i>
          </Link>
        </Collapse>
      </Navbar>
    </>
  );
};

export default Header;
