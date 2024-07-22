import { getDownloadURL, getStorage, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { Card, CardImg, CardTitle, Col, Container, Row } from "reactstrap";
import BigTitle from "../components/BigTitle";
import "../styles/allHabitats.css";
import "../styles/bigTitle.css";

const AllHabitats = () => {
  const [habitats, setHabitats] = useState([]);

  useEffect(() => {
    const fetchHabitats = async () => {
      const habitatData = [
        {
          name: "Savane",
          imageUrl: "gs://zooarcadia-7c3cb.appspot.com/Savane.jpeg",
          link: "/savane",
        },
        {
          name: "Forêt",
          imageUrl: "gs://zooarcadia-7c3cb.appspot.com/Foret.jpeg",
          link: "/foret",
        },
        {
          name: "Volière",
          imageUrl: "gs://zooarcadia-7c3cb.appspot.com/Voliere.jpeg",
          link: "/voliere",
        },
        {
          name: "Aquarium",
          imageUrl: "gs://zooarcadia-7c3cb.appspot.com/Aquarium.jpeg",
          link: "/aquarium",
        },
        {
          name: "Ferme",
          imageUrl: "gs://zooarcadia-7c3cb.appspot.com/Ferme.jpeg",
          link: "/ferme",
        },
        {
          name: "Jungle",
          imageUrl: "gs://zooarcadia-7c3cb.appspot.com/Jungle.jpeg",
          link: "/jungle",
        },
        {
          name: "Désert",
          imageUrl: "gs://zooarcadia-7c3cb.appspot.com/Desert.jpeg",
          link: "/desert",
        },
        {
          name: "Montagne",
          imageUrl: "gs://zooarcadia-7c3cb.appspot.com/Montagne.jpeg",
          link: "/montagne",
        },
      ];

      const storage = getStorage();
      const habitatPromises = habitatData.map(async (habitat) => {
        const imageRef = ref(storage, habitat.imageUrl);
        const url = await getDownloadURL(imageRef);
        return { ...habitat, imageUrl: url };
      });

      const habitatsWithUrls = await Promise.all(habitatPromises);
      setHabitats(habitatsWithUrls);
    };

    fetchHabitats();
  }, []);

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
              <a
                href={`/habitats/${habitat.name.toLowerCase()}`}
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
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default AllHabitats;
