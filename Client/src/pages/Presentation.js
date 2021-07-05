import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faExternalLinkAlt, faTimesCircle, faCheckCircle, faCalendarAlt, faCodeBranch, faShoppingCart, faFolder, faMapMarkedAlt, faPager, faFileCode, faDownload, faPersonBooth, faDoorClosed, faDoorOpen, faCarAlt, faCarBattery, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { faBootstrap, faGithub, faJs, faReact, faSass } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Card, Image, Button, Container, ListGroup, Tooltip, OverlayTrigger, Form, Navbar, Nav, Badge } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { Routes } from "../routes";

import ReactHero from "../assets/img/technologies/GTP_LogoCarpark.svg";

export default () => {
 
  return (
    <>
      <Navbar variant="dark" expand="lg" bg="dark" className="navbar-transparent navbar-theme-primary sticky-top">
        <Container className="position-relative justify-content-between px-3">
          <Navbar.Brand as={HashLink} to="#home" className="me-lg-3 d-flex align-items-center">
            <FontAwesomeIcon icon={faCarAlt} />
            <span className="ms-2 brand-text d-none d-md-inline">CAR PARK</span>
          </Navbar.Brand>

          <div className="d-flex align-items-center">
            <Navbar.Collapse id="navbar-default-primary">
              <Nav className="navbar-nav-hover align-items-lg-center">
                <Nav.Link as={HashLink} to="#home">Home</Nav.Link>
                <Nav.Link as={HashLink} to="#our-services">Our Services</Nav.Link>
                <Nav.Link as={HashLink} to="#carwash" className="d-sm-none d-xl-inline">Carwash</Nav.Link>
                <Nav.Link as={HashLink} to="#prices">Prices</Nav.Link>
                <Nav.Link as={HashLink} to="#our-team">Our Team</Nav.Link>
              </Nav>
            </Navbar.Collapse>

            <Button as={HashLink} to={Routes.DashboardOverview.path} variant="outline-white" className="ms-3"><FontAwesomeIcon icon={faSignInAlt} className="me-1" /> Login</Button>
          </div>
        </Container>
      </Navbar>

      <Button as={HashLink} to={Routes.Signin.path} variant="outline-black" className="ms-3"><FontAwesomeIcon icon={faSignInAlt} className="me-1" /> Alternative</Button>

    </>
  );
};
