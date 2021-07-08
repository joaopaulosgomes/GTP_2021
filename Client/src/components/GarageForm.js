
import React, { useState } from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup } from '@themesberg/react-bootstrap';


export const GarageForm = () => {
  const [checkIn, setCheckIn] = useState("");

  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Garage Request</h5>
        <Form>
          <Row className="align-items-center">
            <Col sm={8} className="mb-3">
                <Form.Group className="mb-2">
                  <Form.Label>Select the service</Form.Label>
                  <Form.Select id="garage" defaultValue="0">
                    <option value="0">Garage</option>
                    <option value="1">Service 1 (€ 8.00)</option>
                    <option value="2">Service 2 (€ 15.00)</option>
                    <option value="3">Service 3 (€ 17.00)</option>
                    <option value="4">Service 4 (€ 15.00)</option>
                    <option value="5">Service 5 (€ 28.00)</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            <Col md={4} className="mb-3">
            <Form.Group className="mb-2">
                  <Form.Label>Select the best time</Form.Label>
                  <Form.Select id="time" defaultValue="0">
                    <option value="0">Time</option>
                    <option value="1">8am</option>
                    <option value="2">9am</option>
                    <option value="3">10am</option>
                    <option value="4">11am</option>
                    <option value="5">12pm</option>
                    <option value="5">1pm</option>
                    <option value="5">2pm</option>
                    <option value="5">3pm</option>
                  </Form.Select>
                </Form.Group>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md={12} className="mb-3">
              <Form.Label>Add a note to the mechanic</Form.Label>
              <Form.Control as="textarea" rows="2" />
            </Col>
          </Row>
          <h6 className="mb-4">* VATs are already included</h6>

          <div className="mt-3">
            <Button variant="primary" type="submit">Save details</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};
