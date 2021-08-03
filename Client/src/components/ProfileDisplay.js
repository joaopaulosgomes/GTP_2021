
import React, { useState } from "react";
import { Col, Row, Card, Form } from '@themesberg/react-bootstrap';


export const ProfileDisplay = () => {
 
  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">General information</h5>
        <Form>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>First Name:</Form.Label>
                <h6>data</h6>
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
            <Form.Group id="firstName">
                <Form.Label>Last Name:</Form.Label>
                <h6>data</h6>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>Phone Number:</Form.Label>
                <h6>data</h6>
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
            <Form.Group id="firstName">
                <Form.Label>E-mail:</Form.Label>
                <h6>data</h6>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>Username:</Form.Label>
                <h6>data</h6>
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
            <Form.Group id="firstName">
                <Form.Label>Created at:</Form.Label>
                <h6>data</h6>
              </Form.Group>
            </Col>
          </Row>




          <h5 className="my-4">Vehicle</h5>
          
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>ID:</Form.Label>
                <h6>data</h6>
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
            <Form.Group id="firstName">
                <Form.Label>Make:</Form.Label>
                <h6>data</h6>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>Type:</Form.Label>
                <h6>data</h6>
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
            <Form.Group id="firstName">
                <Form.Label>Number Plate:</Form.Label>
                <h6>data</h6>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>Colour:</Form.Label>
                <h6>data</h6>
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
            <Form.Group id="firstName">
                <Form.Label>Model:</Form.Label>
                <h6>data</h6>
              </Form.Group>
            </Col>
          </Row>

        </Form>
      </Card.Body>
    </Card>
  );
};
