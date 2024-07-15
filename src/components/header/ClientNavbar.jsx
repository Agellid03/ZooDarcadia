import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "reactstrap";

const CustomNavbar = () => {
  return (
    <Navbar color="light" light expand="md">
      <Nav className="mr-auto" navbar>
        <NavItem>
          <Link className="nav-link" to="/">
            Accueil
          </Link>
        </NavItem>
        <NavItem>
          <Link className="nav-link" to="/services">
            Services
          </Link>
        </NavItem>
        <NavItem>
          <Link className="nav-link" to="/habitats">
            Habitats
          </Link>
        </NavItem>
        <NavItem>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default CustomNavbar;
