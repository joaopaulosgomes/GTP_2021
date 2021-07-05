
import React, { useState } from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup } from '@themesberg/react-bootstrap';


export const VehicleForm = () => {
  const [birthday, setBirthday] = useState("");

  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Vehicle information</h5>
        <Form>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>Number plate</Form.Label>
                <Form.Control required type="text" placeholder="Exemple 123D456789" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="gender">
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
            </Col>
          
            <Col sm={4} className="mb-3">
              <Form.Group className="mb-2">
                <Form.Label>Select make</Form.Label>
                <Form.Select id="state" defaultValue="0">
                  <option value="0">Make</option>
                  <option value="AL">Toyota</option>
                  <option value="AK">Tesla</option>
                  <option value="AZ">Alpha</option>
                  <option value="AR">VW</option>
                </Form.Select>
              </Form.Group>
            </Col>
            
            <Col md={4} className="mb-3">
              <Form.Group id="model">
                <Form.Label>Vehicle model</Form.Label>
                <Form.Control required type="text" placeholder="Enter the model" />
              </Form.Group>
            </Col>

            <Col sm={4} className="mb-3">
              <Form.Group className="mb-2">
                <Form.Label>Select colour</Form.Label>
                <Form.Select id="state" defaultValue="0">
                  <option value="0">Colour</option>
                  <option value="WT">White</option>
                  <option value="BL">Blue</option>
                  <option value="BK">Black</option>
                  <option value="RD">Red</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <div className="mt-3">
            <Button variant="primary" type="submit">Save details</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};
