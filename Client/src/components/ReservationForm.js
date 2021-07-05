
import React, { useState } from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup } from '@themesberg/react-bootstrap';


export const ReservationForm = () => {
  const [checkIn, setCheckIn] = useState("");

  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Reservation</h5>
        <Form>
          <Row>
            <Col sm={12} className="mb-3">
                <Form.Group className="mb-2">
                  <Form.Label>Select a product</Form.Label>
                  <Form.Select id="reservation" defaultValue="0">
                    <option value="0">Products</option>
                    <option value="7to2">7am to 7pm (€ 20.00)</option>
                    <option value="8to10">8am to 10pm (€ 23.00)</option>
                    <option value="24h">24 hours from entry (€ 25.00)</option>
                  </Form.Select>
                </Form.Group>
              </Col>
          </Row>
          <Row className="align-items-center">
            <Col md={6} className="mb-3">
              <Form.Group id="checkIn">
                <Form.Label>Check in</Form.Label>
                <Datetime
                  timeFormat={false}
                  onChange={setCheckIn}
                  renderInput={(props, openCalendar) => (
                    <InputGroup>
                      <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
                      <Form.Control
                        required
                        type="text"
                        value={checkIn ? moment(checkIn).format("DD/MM/YYYY") : ""}
                        placeholder="dd/mm/yyyy"
                        onFocus={openCalendar}
                        onChange={() => { }} />
                    </InputGroup>
                  )} />
              </Form.Group>
            </Col>
           
            
            <Col sm={6} className="mb-3">
                <Form.Group className="mb-2">
                  <Form.Label>Select the numeber of days</Form.Label>
                  <Form.Select id="numbDays" defaultValue="0">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>

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
