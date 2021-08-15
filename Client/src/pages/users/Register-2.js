
import React, { useState, useEffect } from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon,  } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Form, Card, Button, Container, InputGroup } from '@themesberg/react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { Routes } from "../../routes";
import axios from 'axios';

export default () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [fromDate, setDate] = useState('');
  const [numberDays, setNumberDays] = useState('1');
  const [reservationType, setReservationType] = useState('');
  const [price, setPrice] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [type, setType] = useState('');
  const [numberPlate, setNumberPlate] = useState('');
  const [colour, setColour] = useState('');

  useEffect(() => {
    setPrices();
  });
  
  const history = useHistory();

  //this function picks the price up based on option selected
  const setPrices = () => {
    if(reservationType==="7amTo7pm"){
      setPrice("20.00");
    }else{
      if(reservationType==="8amTo10pm"){
        setPrice("23.00");
      }
      else{
        setPrice("25.00");
      }
    }
  }

  //This function posts a User register
  const registerUser = () => {
    const data = { first_name: fname, last_name: lname, email: email, phone_number: phone };
    axios.post("http://localhost:7000/api/carpark/users", data).then((response) => {
      if (response.data.error) {
        console.log(response.data.error);
      } else {
        postVehicle(response.data.id);
      }
    });
  };

  //This function posts a Vehicle register
  const postVehicle = (userID) => {
    const data = { make: make, model: model, type: type, number_plate:numberPlate,
      colour: colour, user_id: userID};
    axios.post("http://localhost:7000/api/carpark/vehicle", data).then((response) => {
      if (response.data.error) {
        console.log(response.data.error);
      } else {
        postCarpark(response.data.id, userID);
      }
    });
  };

  //This function posts a car park reservation
  const postCarpark = (vehicleID, userID) => {
  const data = { from_date: fromDate, numb_days: numberDays, type: reservationType,
    price: price, user_id: userID, vehicle_id: vehicleID};
  axios.post("http://localhost:7000/api/carpark/reservation", data).then((response) => {
    if (response.data.error) {
      console.log(response.data.error);
    } else {
      alert("Your reservation has been added successfully!!")
      history.push("/")
    }
  });
  };


  return (
    <main>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <p className="text-center">
            <Card.Link as={Link} to={Routes.IndexWebPage.path} className="text-gray-700">
              <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Cancel booking
            </Card.Link>
          </p>
          <Row className="justify-content-center form-bg-image">
            <Col xs={12} className="d-flex align-items-center justify-content-center">

              <div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Personal details</h3>
                </div>

                <Form className="mt-4">
                  <Form.Group id="firstName" className="mb-4">
                    <Form.Label>First name</Form.Label>
                    <InputGroup>
                      <Form.Control required type="text" placeholder="Enter your first name" onChange={(e)=> {setFname(e.target.value)}}/>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group id="lastName" className="mb-4">
                    <Form.Label>Last name</Form.Label>
                    <InputGroup>
                      <Form.Control required type="text" placeholder="Also your last name" onChange={(e)=> {setLname(e.target.value)}}/>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group id="email" className="mb-4">
                    <Form.Label>E-mail</Form.Label>
                    <InputGroup>
                      <Form.Control required type="email" placeholder="name@company.com" onChange={(e)=> {setEmail(e.target.value)}}/>
                    </InputGroup>
                  </Form.Group>
                  
                  <Form.Group id="phone" className="mb-4">
                    <Form.Label>Phone/Mobile</Form.Label>
                    <InputGroup>
                      <Form.Control required type="number" placeholder="(+353) 12 345 6789" onChange={(e)=> {setPhone(e.target.value)}}/>
                    </InputGroup>
                  </Form.Group>

                  <div className="text-center text-md-center mb-4 mt-md-0">
                    <h3 className="mb-0">Vehicle details</h3>
                  </div>

                  <Form.Group id="numberPlate" className="mb-4">
                    <Form.Label>Number plate</Form.Label>
                    <InputGroup>
                      <Form.Control required type="text" placeholder="Exemple 123D456789" onChange={(e)=> {setNumberPlate(e.target.value)}}/>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group id="type" className="mb-4">
                    <Form.Label>Select type</Form.Label>
                    <Form.Select defaultValue="0" onChange={(e)=> {setType(e.target.value)}}>
                      <option value="NONE">Type</option>
                      <option value="Motocycle">Motocycle</option>
                      <option value="Car">Car</option>
                      <option value="SUV">SUV</option>
                      <option value="Jipe">Jipe</option>
                      <option value="Van">Van</option>
                      <option value="Small bus">SmallBus</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Select make</Form.Label>
                    <Form.Select id="make" defaultValue="0" onChange={(e)=> {setMake(e.target.value)}}>
                      <option value="NONE">Make</option>
                      <option value="AlphaRomeo">AlphaRomeo</option>
                      <option value="Audi">Audi</option>
                      <option value="BMW">BMW</option>
                      <option value="Citroen">Citroen</option>
                      <option value="Fiat">Fiat</option>
                      <option value="Mazda">Mazda</option>
                      <option value="Mercedez">Mercedez</option>
                      <option value="Mini">Mini</option>
                      <option value="Nissan">Nissan</option>
                      <option value="Peugeot">Peugeot</option>
                      <option value="Volkswagen">Volkswagen</option>
                      <option value="Tesla">Tesla</option>
                      <option value="Toyota">Toyota</option>
                    </Form.Select>
                  </Form.Group>
                  
                  <Form.Group id="model" className="mb-4">
                    <Form.Label>Vehicle model</Form.Label>
                    <Form.Control required type="text" placeholder="Enter the model" onChange={(e)=> {setModel(e.target.value)}}/>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Select colour</Form.Label>
                    <Form.Select id="colour" defaultValue="0" onChange={(e)=> {setColour(e.target.value)}}>
                      <option value="NONE">Colour</option>
                      <option value="white">White</option>
                      <option value="blue">Blue</option>
                      <option value="black">Black</option>
                      <option value="green">Green</option>
                      <option value="marron">Marron</option>
                      <option value="red">Red</option>
                      <option value="silver">Silver</option>
                    </Form.Select>
                  </Form.Group>

                  <div className="text-center text-md-center mb-4 mt-md-0">
                    <h3 className="mb-0">Booking details</h3>
                    <h5 className="mb-0">Car park</h5>
                  </div>

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
                  <Form.Select id="reservation" defaultValue="0" onChange={(e)=> {setReservationType(e.target.value)}}>
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

                  <Button variant="primary" type="submit" className="w-100" onClick={registerUser}>
                    Book!
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
