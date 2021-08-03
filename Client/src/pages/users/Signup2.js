
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Form, Card, Button, Container, InputGroup } from '@themesberg/react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { Routes } from "../../routes";
import axios from 'axios';


export default () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const id = '22';
  
  const history = useHistory();

  const updateUser = () => {
    const data = { first_name: fname, last_name: lname, email: email, phone_number: phone };

    axios.put(`http://localhost:7000/api/carpark/user/${id}`, data).then((response) => {
      if (response.data.error) {
        console.log(response.data.error);
      } else {
        history.push("/sign-up/3");
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
                  <h3 className="mb-0">Your personal details</h3>
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


                  <Button variant="primary" type="submit" className="w-100" onClick={updateUser}>
                    Next
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
