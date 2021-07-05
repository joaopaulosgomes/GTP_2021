
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faUnlockAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { Routes } from "../../routes";


export default () => {
  return (
    <main>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <p className="text-center">
            <Card.Link as={Link} to={Routes.Presentation.path} className="text-gray-700">
              <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Cancel create user
            </Card.Link>
          </p>
          <Row className="justify-content-center form-bg-image">
            <Col xs={12} className="d-flex align-items-center justify-content-center">

              <div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h5 className="mb-0">Well done! This is the last screen to creat your account</h5>
                  <h3 className="mb-0">Your vehicle details</h3>
                </div>


                <Form className="mt-4">
                  <Form.Group id="numberPlate" className="mb-4">
                    <Form.Label>Number plate</Form.Label>
                    <InputGroup>
                      <Form.Control required type="number" placeholder="Exemple 123D456789" />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group id="type" className="mb-4">
                    <Form.Label>Select type</Form.Label>
                    <Form.Select defaultValue="0">
                      <option value="0">Type</option>
                      <option value="1">Motocycle</option>
                      <option value="2">Car</option>
                      <option value="3">Van</option>
                      <option value="4">SUV</option>
                      <option value="5">Jipe</option>
                      <option value="6">SmallBus</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Select make</Form.Label>
                    <Form.Select id="make" defaultValue="0">
                      <option value="0">Make</option>
                      <option value="AL">Toyota</option>
                      <option value="AK">Tesla</option>
                      <option value="AZ">Alpha</option>
                      <option value="AR">VW</option>
                    </Form.Select>
                  </Form.Group>
                  
                  <Form.Group id="model" className="mb-4">
                    <Form.Label>Vehicle model</Form.Label>
                    <Form.Control required type="text" placeholder="Enter the model" />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Select colour</Form.Label>
                    <Form.Select id="colour" defaultValue="0">
                      <option value="0">Colour</option>
                      <option value="WT">White</option>
                      <option value="BL">Blue</option>
                      <option value="BK">Black</option>
                      <option value="RD">Red</option>
                    </Form.Select>
                  </Form.Group>


                  <Button variant="primary" type="submit" as={Link} to={Routes.DashboardOverview.path} className="w-100">
                    Finish
                  </Button>

                </Form>

                
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
