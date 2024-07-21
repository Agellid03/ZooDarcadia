import React from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardTitle, Col, Container, Row } from "reactstrap";
import BigTitle from "../components/BigTitle";
import "../styles/allHabitats.css";
import "../styles/bigTitle.css";

const AllHabitats = () => {
  const habitats = [
    { name: "Savane", imageUrl: "./images/Savane2.jpeg" },
    { name: "Forêt", imageUrl: "./images/Foret.jpeg" },
    { name: "Volière", imageUrl: "./images/Voliere.jpeg" },
    { name: "Aquarium", imageUrl: "./images/Aquarium.jpeg" },
    { name: "Ferme", imageUrl: "./images/Ferme.jpeg" },
    { name: "Jungle", imageUrl: "./images/Jungle.jpeg" },
    { name: "Désert", imageUrl: "./images/Desert.jpeg" },
    { name: "Montagne", imageUrl: "./images/Montagne.jpeg" },
  ];

  return (
    <>
      <BigTitle
        title="Retrouvez tous nos habitats"
        imageUrl="./images/PandaRoux.jpeg"
      />
      <Container fluid className="all_habitats_page py-5">
        <Row>
          {habitats.map((habitat, index) => (
            <Col key={index} md="3" sm="6" className="mb-4">
              <Link
                to={`/habitats/${habitat.name.toLowerCase()}`}
                className="habitat_link"
              >
                <Card className="h-100 habitat_card">
                  <CardImg
                    top
                    width="100%"
                    src={habitat.imageUrl}
                    alt={habitat.name}
                    className="habitat_card_img"
                  />
                  <CardTitle className="habitat_card_title">
                    {habitat.name}
                  </CardTitle>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default AllHabitats;
