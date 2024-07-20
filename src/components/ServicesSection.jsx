import React from "react";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import "../styles/servicesSection.css";

const ServicesSection = () => {
  const services = [
    {
      name: "Restauration",
      description: "Des restaurants variés pour toutes les envies et bio!",
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
  ];

  return (
    <Container fluid className="services_section py-5">
      <Row>
        {services.map((service, index) => (
          <Col key={index} md="4" sm="6" className="mb-4">
            <a href={service.link} className="service-link">
              <Card className="h-100 service-card">
                <CardBody className="d-flex flex-column align-items-center">
                  <div className="service-icon">{service.icon}</div>
                  <CardTitle
                    tag="h5"
                    className="text-center service-card-title"
                  >
                    {service.name}
                  </CardTitle>
                  <CardText className="text-center service-card-text">
                    {service.description}
                  </CardText>
                </CardBody>
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServicesSection;

// import React from "react";
// import {
//   Card,
//   CardBody,
//   CardText,
//   CardTitle,
//   Col,
//   Container,
//   Row,
// } from "reactstrap";
// import "../styles/servicesSection.css";

// const ServicesSection = () => {
//   const services = [
//     {
//       name: "Restauration",
//       description: "Des restaurants variés pour toutes les envies et bio!",
//       icon: "🍽️",
//     },
//     { name: "Guide", description: "Avec guide", icon: "📖" },
//     {
//       name: "Souvenirs",
//       description: "Boutiques de souvenirs pour tous les âges",
//       icon: "🎁",
//     },
//   ];

//   return (
//     <Container fluid className="services_section py-5">
//       <Row>
//         {services.map((service, index) => (
//           <Col key={index} md="4" sm="6" className="mb-4">
//             <Card className="h-60 service-card">
//               <CardBody className="d-flex flex-column align-items-center">
//                 <div className="service-icon">{service.icon}</div>
//                 <CardTitle tag="h5" className="text-center service-card-title">
//                   {service.name}
//                 </CardTitle>
//                 <CardText className="text-center service-card-text">
//                   {service.description}
//                 </CardText>
//               </CardBody>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default ServicesSection;
