
import React, { useState, useEffect } from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup } from '@themesberg/react-bootstrap';
import axios from 'axios';


export const MembershipForm = () => {
  
  const [fromDate, setDate] = useState('');
  const [period, setPeriod] = useState('');
  const [price, setPrice] = useState('');

  const id = '22';
  
  //const history = useHistory();
  useEffect(() => {
    setPrices();
  });


  //this function picks the price up based on option selected
  const setPrices = () => {
    if(period==="weekly"){
      setPrice("80.00");
    }else{
      if(period==="monthly"){
        setPrice("275.00");
      }
      else{
        if(period==="quartely"){
          setPrice("780.00");
        }else{
          if(period==="semiannually"){
            setPrice("1500.00");
          }
          else{
            setPrice("2800.00");
          }
        }
      }
    }
  }

  const postMembership = () => {
    const data = { from_date: fromDate, period: period, price: price, user_id:id};
    axios.post("http://localhost:7000/api/carpark/membership", data).then((response) => {
      if (response.data.error) {
        console.log(response.data.error);
      } else {
        alert("Your Membership has been added successfully!!")
        //history.push("/dashboard/overview");
      }
    });
  };

  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Membership</h5>
        <Form>
          <Row className="align-items-center">
            <Col sm={8} className="mb-3">
                <Form.Group className="mb-2">
                  <Form.Label>Select your membership</Form.Label>
                  <Form.Select id="reservation" defaultValue="0" onChange={(e)=> {setPeriod(e.target.value)}}>
                    <option value="NONE">Membership</option>
                    <option value="weekly">Weekly (€ 80.00)</option>
                    <option value="monthly">Monthly (€ 275.00)</option>
                    <option value="quartely">Quartely (€ 780.00)</option>
                    <option value="semiannually">Semiannually (€ 1500.00)</option>
                    <option value="annually">Anually (€ 2800.00)</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            <Col md={4} className="mb-3">
              <Form.Group id="checkIn">
                <Form.Label>Select a day to start</Form.Label>
                <Datetime
                  timeFormat={false}
                  onChange={setDate}
                  renderInput={(props, openCalendar) => (
                    <InputGroup>
                      <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
                      <Form.Control
                        required
                        type="text"
                        value={fromDate ? moment(fromDate).format("YYYY/MM/DD") : ""}
                        placeholder="dd/mm/yyyy"
                        onFocus={openCalendar}
                        onChange={(e)=> {setDate(e.target.value)}}  />
                    </InputGroup>
                  )} />
              </Form.Group>
            </Col>
          </Row>

          <h6 className="mb-4">* Overnights and VATs are already included</h6>

          <div className="mt-3">
            <Button variant="primary" type="submit" onClick={postMembership}>Save details</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};
