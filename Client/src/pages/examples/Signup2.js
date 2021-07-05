
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
                  <h5 className="mb-0">Your user was created successfully!</h5>
                  <h3 className="mb-0">Your personal details</h3>
                </div>


                <Form className="mt-4">
                  <Form.Group id="firsName" className="mb-4">
                    <Form.Label>First name</Form.Label>
                    <InputGroup>
                      <Form.Control required type="text" placeholder="Enter your first name" />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group id="lastName" className="mb-4">
                    <Form.Label>Last name</Form.Label>
                    <InputGroup>
                      <Form.Control required type="text" placeholder="Also your last name" />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group id="email" className="mb-4">
                    <Form.Label>E-mail</Form.Label>
                    <InputGroup>
                      <Form.Control required type="email" placeholder="name@company.com" />
                    </InputGroup>
                  </Form.Group>
                  
                  <Form.Group id="phone" className="mb-4">
                    <Form.Label>Phone/Mobile</Form.Label>
                    <InputGroup>
                      <Form.Control required type="number" placeholder="(+353) 12 345 6789" />
                    </InputGroup>
                  </Form.Group>


                  <Button variant="primary" type="submit" as={Link} to={Routes.Presentation.path} className="w-100">
                    Next
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
