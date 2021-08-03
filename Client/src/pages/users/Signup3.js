
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

  const id = '22';
  
  const history = useHistory();

  const postVehicle = () => {
    const data = { make: make, model: model, type: type, number_plate:numberPlate, colour: colour, user_id:id};

    axios.post("http://localhost:7000/api/carpark/vehicle", data).then((response) => {
      if (response.data.error) {
        console.log(response.data.error);
      } else {
        alert("Your vehicle has been added successfully!!")
        history.push("/dashboard/overview");
      }
    });
  };




  return (
    <main>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <p className="text-center">
            <Card.Link as={Link} to={Routes.IndexWebPage.path} className="text-gray-700">
              <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Cancel create user
            </Card.Link>
          </p>
          <Row className="justify-content-center form-bg-image">
            <Col xs={12} className="d-flex align-items-center justify-content-center">

              <div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h5 className="mb-0">Well done!</h5>
                  <h6 className="mb-0">This is the last screen to creat your account</h6>
                  <h5 className="mb-0">.  .  .</h5>
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
                      <option value="0">Type</option>
                      <option value="1">Motocycle</option>
                      <option value="2">Car</option>
                      <option value="3">Van</option>
                      <option value="4">SUV</option>
                      <option value="5">Jipe</option>
                      <option value="6">SmallBus</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Select make</Form.Label>
                    <Form.Select id="make" defaultValue="0" onChange={(e)=> {setMake(e.target.value)}}>
                      <option value="0">Make</option>
                      <option value="AL">Toyota</option>
                      <option value="AK">Tesla</option>
                      <option value="AZ">Alpha</option>
                      <option value="AR">VW</option>
                    </Form.Select>
                  </Form.Group>
                  
                  <Form.Group id="model" className="mb-4">
                    <Form.Label>Vehicle model</Form.Label>
                    <Form.Control required type="text" placeholder="Enter the model" onChange={(e)=> {setModel(e.target.value)}}/>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Select colour</Form.Label>
                    <Form.Select id="colour" defaultValue="0" onChange={(e)=> {setColour(e.target.value)}}>
                      <option value="0">Colour</option>
                      <option value="WT">White</option>
                      <option value="BL">Blue</option>
                      <option value="BK">Black</option>
                      <option value="RD">Red</option>
                    </Form.Select>
                  </Form.Group>


                  <Button variant="primary" type="submit" onClick={postVehicle} className="w-100">
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
