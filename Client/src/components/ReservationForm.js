
import React, { useState, useEffect } from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup } from '@themesberg/react-bootstrap';
import axios from 'axios';

export const ReservationForm = () => {
  
  const [fromDate, setDate] = useState('');
  const [numberDays, setNumberDays] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');

  const id = '22';
  const vehicleId = '8';
  
  //const history = useHistory();
  
  useEffect(() => {
    setPrices();
  });


  //this function picks the price up based on option selected
  const setPrices = () => {
    if(type==="7amTo7pm"){
      setPrice("20.00");
    }else{
      if(type==="8amTo10pm"){
        setPrice("23.00");
      }
      else{
        setPrice("25.00");
      }
    }
  }

  const postReservation = () => {
    const data = { from_date: fromDate, numb_days: numberDays, type: type, price: price, user_id:id, vehicle_id: vehicleId};
    axios.post("http://localhost:7000/api/carpark/reservation", data).then((response) => {
      if (response.data.error) {
        console.log(response.data.error);
      } else {
        alert("Your Reservation has been added successfully!!")
        //history.push("/dashboard/overview");
      }
    });
  };

  


  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Reservation</h5>
        <Form>
          <Row>
            <Col sm={12} className="mb-3">
                <Form.Group className="mb-2">
                  <Form.Label>Select a product</Form.Label>
                  <Form.Select id="reservation" defaultValue="0" onChange={(e)=> {setType(e.target.value)}}>
                    <option value="NONE">Products</option>
                    <option value="7amTo7pm">7am to 7pm (€ 20.00)</option>
                    <option value="8amTo10pm">8am to 10pm (€ 23.00)</option>
                    <option value="24hours">24 hours from entry (€ 25.00)</option>
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
                        onChange={(e)=> {setDate(e.target.value)}} 
                        />
                    </InputGroup>
                  )} />
              </Form.Group>
            </Col>
           
            
            <Col sm={6} className="mb-3">
                <Form.Group className="mb-2">
                  <Form.Label>Select the numeber of days</Form.Label>
                  <Form.Select id="numbDays" defaultValue="0" onChange={(e)=> {setNumberDays(e.target.value)}}>
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
            <Button variant="primary" type="submit" onClick={postReservation}>Save details</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};
