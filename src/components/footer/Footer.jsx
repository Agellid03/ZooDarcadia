import React from "react";
import { Col, Container, Row } from "reactstrap";
import "../footer/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col xs="12" md="6">
            <h5>Nos horaires</h5>
            <p>
              Du Lundi au Vendredi :<br />
              10:00-19:00
            </p>
            <p>
              Le samedi :<br />
              10:00-17:30
            </p>
          </Col>
          <Col xs="12" md="6">
            <h5>Zoo D’Arcadia</h5>
            <p>
              5 rue de la vielle mer
              <br />
              37150 Brocéliande
            </p>
            <p>
              04 01 01 01 01
              <br />
              contact@zoodarcadia.com
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
