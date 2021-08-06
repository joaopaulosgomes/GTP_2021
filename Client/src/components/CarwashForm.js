
import React, { useState, useEffect } from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup } from '@themesberg/react-bootstrap';
import axios from 'axios';

export const CarwashForm = () => {
  const [date, setDate] = useState('');
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
    if(type==="Silver"){
      setPrice("20.00");
    }else{
      if(type==="Golden"){
        setPrice("40.00");
      }
      else{
        setPrice("55.00");
      }
    }
  }

  const postCarwash = () => {
    const data = { date: date, type: type, price: price, user_id:id, vehicle_id: vehicleId};
    axios.post("http://localhost:7000/api/carpark/carwash", data).then((response) => {
      if (response.data.error) {
        console.log(response.data.error);
      } else {
        alert("Your carwash reservation has been added successfully!!")
        //history.push("/dashboard/overview");
      }
    });
  };







  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Carwash</h5>
        <Form>
          <Row className="align-items-center">
            <Col sm={8} className="mb-3">
                <Form.Group className="mb-2">
                  <Form.Label>Select a product</Form.Label>
                  <Form.Select id="reservation" defaultValue="0" onChange={(e)=> {setType(e.target.value)}}>
                    <option value="NONE">Products</option>
                    <option value="Silver">Silver Wash (€ 20.00)</option>
                    <option value="Golden">Golden Wash (€ 40.00)</option>
                    <option value="Diamond">Diamond Wash (€ 55.00)</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            <Col md={4} className="mb-3">
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
                        value={date ? moment(date).format("YYYY/MM/DD") : ""}
                        placeholder="dd/mm/yyyy"
                        onFocus={openCalendar}
                        onChange={(e)=> {setDate(e.target.value)}}  />
                    </InputGroup>
                  )} />
              </Form.Group>
            </Col>
           
            
          
          </Row>


          <div className="mt-3">
            <Button variant="primary" type="submit" onClick={postCarwash}>Save details</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};
