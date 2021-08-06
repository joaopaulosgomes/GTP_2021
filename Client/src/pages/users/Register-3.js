
import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faUnlockAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup } from '@themesberg/react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { Routes } from "../../routes";
import axios from 'axios';


export default () => {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [type, setType] = useState('');
  const [numberPlate, setNumberPlate] = useState('');
  const [colour, setColour] = useState('');
  const [service, setService] = useState('carpark-booking');

  const id = '1';
  
  const history = useHistory();

  const postVehicle = () => {
    const data = { make: make, model: model, type: type, number_plate:numberPlate, colour: colour, user_id:id};

    axios.post("http://localhost:7000/api/carpark/vehicle", data).then((response) => {
      if (response.data.error) {
        console.log(response.data.error);
      } else {
        alert("Your vehicle was added!")
        history.push(`/${service}`);
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
                  <h3 className="mb-0">Your vehicle details</h3>
                </div>


                <Form className="mt-4">
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

                  <Form.Group className="mb-4">
                    <Form.Label>Service desired</Form.Label>
                    <Form.Select id="service" defaultValue="carpark-booking" onChange={(e)=> {setService(e.target.value)}}>
                      <option value="carpark-booking">CAR PARK</option>
                      <option value="carwash-booking">CAR WASH</option>
                      <option value="membership-booking">MEMBERSHIP</option>
                    </Form.Select>
                  </Form.Group>


                  <Button variant="primary" type="submit" onClick={postVehicle} className="w-100">
                    Add Vehicle Details
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
