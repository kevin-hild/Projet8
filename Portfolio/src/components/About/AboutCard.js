import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p className="p2" style={{ textAlign: "justify" }}>
            Bonjour à tous, je suis <span className="purple">Kevin Hild </span>
            de <span className="purple"> Strasbourg, en Alsace.</span>
            <br />
            Je viens de finaliser ma formation de développeur web avec OpenClassrooms.
            <br />
            Je voudrais continuer à me former pour acquérir plus d'expérience,
            continuer à apprendre de nouvelles choses qui me seront utiles pour les entreprises qui m'engageront.
            <br />
            <br />
            En plus du codage, j'aime aussi pratiquer d'autres activités !
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jouer à des jeux vidéo
            </li>
            <li className="about-activity">
              <ImPointRight /> M'informer sur les nouvelles technologies, les tendances du web et de l'univers gaming
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
