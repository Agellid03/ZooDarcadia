import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import BigTitle from "../components/BigTitle";
import "../styles/allServices.css";
import "../styles/bigTitle.css";

const AllServices = () => {
  const services = [
    {
      name: "Restauration",
      description: "Des restaurants variés pour toutes les envies et bio",
      icon: "🍽️",
      link: "/restauration",
    },
    { name: "Guide", description: "Avec guide", icon: "📖", link: "/guide" },
    {
      name: "Souvenirs",
      description: "Boutiques de souvenirs pour tous les âges",
      icon: "🎁",
      link: "/souvenirs",
    },
    {
      name: "Visite en petit train",
      description:
        "Une visite à travers l'ensemble du parc en petit train pour profiter de l'endroit avec toute la famille",
      icon: "🚂",
      link: "/visite",
    },
    {
      name: "Découverte de la ferme",
      description:
        "En immersion dans notre ferme pour être au plus proche des animaux et connaître un peu plus le métier de nos soignants",
      icon: "🐄",
      link: "/visiteFerme",
    },
    {
      name: "Dégustation",
      description:
        "Une dégustation de nos produits bio fabriqués dans la belle région de Brocéliande",
      icon: "🍷",
      link: "/degustation",
    },
  ];

  return (
    <>
      <BigTitle
        title="Les services que nous vous proposons !"
        imageUrl="./images/PandaRoux.jpeg"
      />
      <Container fluid className="all_services_page ">
        <Row>
          {services.map((service, index) => (
            <Col key={index} md="4" sm="6" className="mb-4">
              <Link to={service.link} className="service_link">
                <Card className="h-100 service_card">
                  <CardBody className="d-flex flex-column align-items-center">
                    <div className="service_icon">{service.icon}</div>
                    <CardTitle
                      tag="h5"
                      className="text-center service_card_title"
                    >
                      {service.name}
                    </CardTitle>
                    <CardText className="text-center service_card_text">
                      {service.description}
                    </CardText>
                  </CardBody>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default AllServices;
