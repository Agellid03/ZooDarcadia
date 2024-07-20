import React from "react";
import { Card, CardBody, CardText, Col, Container, Row } from "reactstrap";
import "../styles/reviewsSection.css";

const ReviewsSection = () => {
  const reviews = [
    { author: "Alice", text: "Un lieu magnifique pour toute la famille !" },
    { author: "Bob", text: "Les enfants ont adoré les animaux et les jeux." },
    { author: "Charlie", text: "Une journée inoubliable, à refaire !" },
  ];

  return (
    <Container fluid className="reviews_section py-5">
      <Row>
        {reviews.map((review, index) => (
          <Col key={index} md="4" sm="6" className="mb-4">
            <Card className="h-100 review-card">
              <CardBody>
                <CardText className="review-text">"{review.text}"</CardText>
                <div className="text-right review-author">
                  <small>- {review.author}</small>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ReviewsSection;
