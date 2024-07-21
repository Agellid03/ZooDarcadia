import React from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardTitle, Col, Container, Row } from "reactstrap";
import "../styles/habitatsSection.css";

const HabitatSection = () => {
  const habitats = [
    { name: "Savane", imageUrl: "./images/Savane2.jpeg" },
    { name: "Forêt", imageUrl: "./images/Foret.jpeg" },
    { name: "Volière", imageUrl: "./images/Voliere.jpeg" },
    { name: "Aquarium", imageUrl: "./images/Aquarium.jpeg" },
  ];

  return (
    <Container fluid className="habitats_section py-5">
      <Row>
        {habitats.map((habitat, index) => (
          <Col key={index} md="3" sm="6" className="mb-4">
            <Link
              to={`/habitats/${habitat.name.toLowerCase()}`}
              className="habitat-link"
            >
              <Card className="h-100 habitat-card">
                <CardImg
                  top
                  width="100%"
                  src={habitat.imageUrl}
                  alt={habitat.name}
                  className="habitat-card-img"
                />
                <CardTitle tag="h5" className="habitat-card-title">
                  {habitat.name}
                </CardTitle>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HabitatSection;
