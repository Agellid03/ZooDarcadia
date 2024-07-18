import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
} from "reactstrap";
import "../../styles/clientNavbar.css";

const ClientNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="container_navbar" expand="md">
      <NavbarBrand className="nav-brand" href="/">
        Zoo D'Arcadia
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto" navbar>
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
      </Collapse>
    </Navbar>
  );
};

export default ClientNavbar;
