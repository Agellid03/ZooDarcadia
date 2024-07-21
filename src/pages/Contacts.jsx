// src/components/Contact.jsx
import emailjs from "emailjs-com";
import React, { useState } from "react";
import {
  Alert,
  Button,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import "../styles/contact.css";

const Contact = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      title,
      description,
      email,
    };

    emailjs
      .send(
        "service_vnpgrmt",
        "template_1wnv9ra",
        templateParams,
        "G2bUtn6phHA5tfmMg"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccessMessage("Votre demande a été envoyée avec succès.");
          setTitle("");
          setDescription("");
          setEmail("");
        },
        (error) => {
          console.error("FAILED...", error);
          setErrorMessage(
            "Une erreur est survenue lors de l'envoi de votre demande."
          );
        }
      );
  };

  return (
    <Container className="contact-container">
      <h2>Contactez-nous</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="title">Titre</Label>
          <Input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Titre"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            type="textarea"
            name="description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </FormGroup>
        <Button type="submit">Envoyer</Button>
      </Form>
      {successMessage && (
        <Alert color="success" className="mt-3">
          {successMessage}
        </Alert>
      )}
      {errorMessage && (
        <Alert color="danger" className="mt-3">
          {errorMessage}
        </Alert>
      )}
    </Container>
  );
};

export default Contact;
