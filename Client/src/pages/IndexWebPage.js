import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarAlt, faSignInAlt, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Card, Image, Button, Container, Navbar, Nav } from '@themesberg/react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { Routes } from "../routes";
import pages from "../data/pages";


export default () => {

  const PagePreview = (props) => {
    const { name, image, link } = props;

    return (
      <Col xs={6} className="mb-5">
        <Card.Link as={Link} to={link} className="page-preview page-preview-lg scale-up-hover-2">
          <Image src={image} className="shadow-lg rounded scale" alt="Dashboard page preview" />

          <div className="text-center show-on-hover">
            <h6 className="m-0 text-center text-white">
              {name} <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-2" />
            </h6>
          </div>
        </Card.Link>
      </Col>
    );
  };


 
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

            <Button as={HashLink} to={Routes.Register_2.path} variant="outline-white" className="ms-3"><FontAwesomeIcon className="me-1" /> Make Reservation</Button>
            <Button as={HashLink} to={Routes.Signin.path} variant="outline-white" className="ms-3"><FontAwesomeIcon icon={faSignInAlt} className="me-1" /> Login</Button>
            <Button as={HashLink} to={Routes.DashboardOverview.path} variant="outline-dark" className="ms-3"><FontAwesomeIcon className="me-1" /> ByPass</Button>
          </div>
        </Container>
      </Navbar>

      <section className="section section-sm pt-0" id="pages">
        <Container>
          <Row className="justify-content-center mb-5 mb-lg-6">
            <Col xs={12} className="text-center">
            </Col>
          </Row>
          <Row className="mb-5">
            {pages.map(page => <PagePreview key={`${page.id}`} {...page} />)}
          </Row>
        </Container>
      </section>

      

    </>
  );
};
