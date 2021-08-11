
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Form, Card, Button, Container} from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { Routes } from "../../routes";


export default () => {

  return (
    <main>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <p className="text-center">
            <Card.Link as={Link} to={Routes.IndexWebPage.path} className="text-gray-700">
              <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Cancel booking
            </Card.Link>
          </p>
          <Row className="justify-content-center form-bg-image">
            <Col xs={12} className="d-flex align-items-center justify-content-center">

              <div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Select a service </h3>
                </div>

                
                <Form className="mt-4">
                  <Button variant="primary" type="submit" as={Link} to={Routes.Register_2.path} className="w-100">
                    Car Park
                  </Button>
                </Form>

                <Form className="mt-4">
                  <Button variant="primary" type="submit" as={Link} to={Routes.Register_3.path} className="w-100">
                    Car Wash
                  </Button>
                </Form>

                <Form className="mt-4">
                  <Button variant="primary" type="submit" as={Link} to={Routes.Register_4.path} className="w-100">
                    Membership
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
