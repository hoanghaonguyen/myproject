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
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./header.css"; // Custom CSS for additional styling
import logo from "../../images/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const handleNavLinkClick = () => {
    if (isOpen) {
      toggle(); // Close the menu if it's open
    }
  };

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
              <NavLink tag={Link} to="/" onClick={handleNavLinkClick}>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/about" onClick={handleNavLinkClick}>
                About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/discovery" onClick={handleNavLinkClick}>
                Discovery
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/shop" onClick={handleNavLinkClick}>
                Souvernir
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/service" onClick={handleNavLinkClick}>
                Service
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/contact" onClick={handleNavLinkClick}>
                Contact
              </NavLink>
            </NavItem>
          </Nav>
          <div className="d-flex align-items-center" >
            <Link to='/cart' className="btn btn-outline-secondary me-2"
            onClick={handleNavLinkClick}>
              <BsCartPlus size={20} />
            </Link>
            <Link to='/book' className="btn btn-primary" onClick={handleNavLinkClick}>
              Buy Ticket
              <i className="fa fa-arrow-right ms-2"></i>
            </Link>
          </div>
        </Collapse>
      </Navbar>
    </>
  );
};

export default Header;
