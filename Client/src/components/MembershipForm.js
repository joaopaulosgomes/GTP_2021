
import React, { useState } from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup } from '@themesberg/react-bootstrap';


export const MembershipForm = () => {
  const [checkIn, setCheckIn] = useState("");

  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Membership</h5>
        <Form>
          <Row className="align-items-center">
            <Col sm={8} className="mb-3">
                <Form.Group className="mb-2">
                  <Form.Label>Select your membership</Form.Label>
                  <Form.Select id="reservation" defaultValue="0">
                    <option value="0">Membership</option>
                    <option value="1">Weekly (€ 80.00)</option>
                    <option value="2">Monthly (€ 275.00)</option>
                    <option value="3">Quartely (€ 780.00)</option>
                    <option value="3">Semester (€ 1500.00)</option>
                    <option value="3">Anually (€ 2800.00)</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            <Col md={4} className="mb-3">
              <Form.Group id="checkIn">
                <Form.Label>Select a day to start</Form.Label>
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
          </Row>

          <h6 className="mb-4">* Overnights and VATs are already included</h6>

          <div className="mt-3">
            <Button variant="primary" type="submit">Save details</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};
