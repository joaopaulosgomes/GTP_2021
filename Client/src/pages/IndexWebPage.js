import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarAlt, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { Button, Container, Navbar, Nav} from '@themesberg/react-bootstrap';
import { HashLink } from 'react-router-hash-link';

import { Routes } from "../routes";


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
                <Nav.Link as={HashLink} to="#our-services">Car Park</Nav.Link>
                <Nav.Link as={HashLink} to="#carwash" className="d-sm-none d-xl-inline">Carwash</Nav.Link>
                <Nav.Link as={HashLink} to="#prices">Prices</Nav.Link>
                <Nav.Link as={HashLink} to="#our-team">Our Team</Nav.Link>
              </Nav>
            </Navbar.Collapse>

            <Button as={HashLink} to={Routes.DashboardOverview.path} variant="outline-dark" className="ms-3"><FontAwesomeIcon icon={faSignInAlt} className="me-1" /> Login</Button>
            <Button as={HashLink} to={Routes.Signin.path} variant="outline-white" className="ms-3"><FontAwesomeIcon icon={faSignInAlt} className="me-1" /> Login [*]</Button>
          </div>
        </Container>
      </Navbar>

      

    </>
  );
};
