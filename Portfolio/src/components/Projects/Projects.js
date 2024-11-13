import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import kasa from "../../Assets/Projects/Kasa.webp";
import nina from "../../Assets/Projects/NinaCarducci.webp";
import booki from "../../Assets/Projects/booki.webp";
import grimoire from "../../Assets/Projects/MonVieuxGrimoire.webp";
import SophieBluel from "../../Assets/Projects/SophieBluel.webp";
// import emotion from "../../Assets/Projects/emotion.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes récents <strong className="purple">Projets </strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici les projets sur lesquels j'ai travaillé récemment.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={booki}
              isBlog={false}
              title="Booki"
              description="Développement de la page d'accueil d'une agence de voyage en HTML et CSS pour offrir aux utilisateurs une plateforme intuitive.
              Ce site permet de rechercher facilement des hébergements et des activités par ville, avec une mise en page attrayante et optimisée pour une expérience utilisateur fluide et agréable."
              ghLink="https://github.com/kevin-hild/OCR-Projet-2-Booki"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SophieBluel}
              isBlog={false}
              title="Sophie Bluel"
              description="Développement d'un portfolio interactif pour Sophie Bluel, conçu en JavaScript pour une expérience utilisateur dynamique.
              Ce projet met en valeur les compétences et réalisations de Sophie à travers une interface moderne et réactive, permettant une navigation fluide et des interactions engageantes avec le contenu."
              ghLink="https://github.com/kevin-hild/Projet3"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nina}
              isBlog={false}
              title="Nina Carducci"
              description="Débogage et optimisation du site web d'une photographe, Nina Carducci, en utilisant l'outil Lighthouse.
              Ce projet vise à améliorer les performances, l'accessibilité, et le référencement du site, pour garantir une expérience utilisateur rapide et fluide tout en renforçant la visibilité en ligne"
              ghLink="https://github.com/kevin-hild/Projet4"
              // demoLink="https://editor.soumya-jit.tech/"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kasa}
              isBlog={false}
              title="Kasa"
              description="Développement d'une application web de location immobilière, nommée Kasa, en utilisant React.
              Cette application permet aux utilisateurs de rechercher et de consulter des offres de location, avec une interface moderne, réactive et optimisée pour une expérience utilisateur immersive et intuitive."
              ghLink="https://github.com/kevin-hild/Projet5"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={grimoire}
              isBlog={false}
              title="Mon Vieux Grimoire"
              description="Développement du back-end du site de notation de livres Mon Vieux Grimoire en utilisant Node.js et Express pour la création de l'API, et MongoDB pour le stockage des données.
              Ce projet permet aux utilisateurs d'ajouter, consulter et évaluer des livres via une API sécurisée et performante, avec une gestion efficace des données et une architecture robuste pour une expérience utilisateur fluide et fiable."
              ghLink="https://github.com/kevin-hild/Projet6"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
