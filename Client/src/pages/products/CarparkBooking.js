
import React, {useState, useEffect} from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup } from '@themesberg/react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { Routes } from "../../routes";
import axios from 'axios';


export default () => {
    
  const [fromDate, setDate] = useState('');
  const [numberDays, setNumberDays] = useState('1');
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');

  const id = '1';
  const vehicleId = '11';
  
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

  const postCarpark = () => {
    const data = { from_date: fromDate, numb_days: numberDays, type: type, price: price, user_id:id, vehicle_id: vehicleId};
    axios.post("http://localhost:7000/api/carpark/reservation", data).then((response) => {
      if (response.data.error) {
        console.log(response.data.error);
      } else {
        alert("Your Reservation has been added successfully!!")
        //
      }
    });
  };


  return (
    <main>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <p className="text-center">
            <Card.Link as={Link} to={Routes.IndexWebPage.path} className="text-gray-700">
              <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Cancel
            </Card.Link>
          </p>
          <Row className="justify-content-center form-bg-image">
            <Col xs={12} className="d-flex align-items-center justify-content-center">

              <div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">CAR PARK BOOKING</h3>
                </div>

                <Form className="mt-4">

                <Form.Group id="checkIn" className="mt-4">
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
                        onChange={(e)=> {setDate(e.target.value)}}  />
                    </InputGroup>
                    )} />
                </Form.Group>
                
                <Form.Group className="mt-4">
                  <Form.Label>Select a product</Form.Label>
                  <Form.Select id="reservation" defaultValue="0" onChange={(e)=> {setType(e.target.value)}}>
                    <option value="NONE">Products</option>
                    <option value="7amTo7pm">7am to 7pm (€ 20.00)</option>
                    <option value="8amTo10pm">8am to 10pm (€ 23.00)</option>
                    <option value="24hours">24 hours from entry (€ 25.00)</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-4 mt-4">
                  <Form.Label>Select the number of days</Form.Label>
                  <Form.Select id="numbDays" defaultValue="1" onChange={(e)=> {setNumberDays(e.target.value)}}>
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
                  

                <Button variant="primary" type="submit" onClick={postCarpark} className="w-100">
                    Finish
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
