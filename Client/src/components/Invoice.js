
import React, { useState } from "react";
import { Col, Row, Card, Form } from '@themesberg/react-bootstrap';


export const Invoice = () => {
 
  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Invoice</h5>
        <Form>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>ID:</Form.Label>
                <h6>id</h6>
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
                <Form.Label>Date:</Form.Label>
                <h6>data</h6>
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
            <Form.Group id="firstName">
                <Form.Label>Note:</Form.Label>
                <h6>data</h6>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>Total:</Form.Label>
                <h6>data</h6>
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
            <Form.Group id="firstName">
                <Form.Label>Services requested:</Form.Label>
                <h6>data</h6>
              </Form.Group>
            </Col>
          </Row>

        </Form>
      </Card.Body>
    </Card>
  );
};
