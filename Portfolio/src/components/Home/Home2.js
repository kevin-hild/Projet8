import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  // AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            LAISSEZ-MOI <span className="purple"> ME </span> PRÉSENTER
            </h1>
            <p className="home-about-body">
            La programmation m'a beaucoup attiré et j'aime apprendre de nouvelles choses.
              <br />
              <br />Au cours de ma formation, j'ai acquis les bases de <b className="purple"> HTML et CSS</b>, fait mes débuts en programmation avec <b className="purple"> JavaScript</b>.
              {/* <i>
                <b className="purple"> C++, Javascript and Go. </b>
              </i> */}
              <br />
              <br />
              Mes domaines d'intérêt incluent la découverte de nouvelles
              <i>
                <b className="purple">Technologies et de produits Web </b>
                ainsi que les domaines liés à la{" "}
                <b className="purple">
                Programmation de jeux vidéo.
                </b>
              </i>
              <br />
              <br />
              Je suis également très intéressé par la programmation en <b className="purple">React</b>,
              qui a été le projet que j'ai le plus apprécié à apprendre et réaliser pendant ma formation.
              J'aimerais continuer à développer mes compétences dans ce domaine.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>RETROUVEZ-MOI SUR </h1>
            <p>
            N'hésitez pas à me <span className="purple">contacter </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/kevin-hild"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kevin-h-1640222a1/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>            
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
