import React from "react";
import { Card, CardImg, CardTitle, Col, Container, Row } from "reactstrap";
import "../styles/habitatsSection.css";

const HabitatSection = () => {
  const habitats = [
    { name: "Savane", imageUrl: "./images/Savane2.jpeg", link: "/savane" },
    { name: "Forêt", imageUrl: "./images/Foret.jpeg", link: "/foret" },
    { name: "Volière", imageUrl: "./images/Voliere.jpeg", link: "/voliere" },
    { name: "Aquarium", imageUrl: "./images/Aquarium.jpeg", link: "/aquarium" },
  ];

  return (
    <Container fluid className="habitats_section py-5">
      <Row>
        {habitats.map((habitat, index) => (
          <Col key={index} md="3" sm="6" className="mb-4">
            <a href={habitat.link} className="habitat-link">
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
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HabitatSection;
