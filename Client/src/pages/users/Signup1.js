
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faUnlockAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup } from '@themesberg/react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { Routes } from "../../routes";

import Axios from 'axios';


export default () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confPassword, setConfPassword] = useState('')
  const [response, setResponse] = useState([])

  useEffect(() => {
    Axios.get('http://localhost:3001/users/get').then((response)=>{
      setResponse(response.data)
    })
    
  },[]);

  const history = useHistory();

  const handleClick = () => {
      history.push("/path/to/push");
  }

  const doPasswordsMatch = () => {
    if (password === confPassword){
      checkUser();
    } else{
      alert("Your Password doesn match. Try a dif one")
    }
  }

  const checkUser = () => {
    Axios.get('http://localhost:3001/users/check-user', {
      username: username
    })
    // .then(response => console.log(response.data))
    // .then(function(response) {
    //   if(response.data.username === username) {
    //     alert("This user is being used for another user")
    //    }else(
    //      addUsername()
    //     );
    //  })
  }

  const addUsername = () => {
    Axios.post('http://localhost:3001/users/insert', {
      username: username, 
      password: password
    })
    
    setResponse([...response, {username: username, password:password}])
    
  };

  return (
    <main>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <p className="text-center">
            <Card.Link as={Link} to={Routes.IndexWebPage.path} className="text-gray-700">
              <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to homepage
            </Card.Link>
          </p>
          <Row className="justify-content-center form-bg-image">
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              <div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Create an account</h3>
                </div>
                <Form className="mt-4">
                  <Form.Group id="username" className="mb-4">
                    <Form.Label>Username</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUser} />
                      </InputGroup.Text>
                      <Form.Control autoFocus required type="text" placeholder="Username" onChange={(e)=> {setUsername(e.target.value)}}/>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="password" className="mb-4">
                    <Form.Label>Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control required type="password" placeholder="Password" onChange={(e)=> {setPassword(e.target.value)}}/>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="confirmPassword" className="mb-4">
                    <Form.Label>Confirm Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control required type="password" placeholder="Confirm Password" onChange={(e)=> {setConfPassword(e.target.value)}}/>
                    </InputGroup>
                  </Form.Group>
                  <FormCheck type="checkbox" className="d-flex mb-4">
                    <FormCheck.Input required id="terms" className="me-2" />
                    <FormCheck.Label htmlFor="terms">
                      I agree to the <Card.Link>terms and conditions</Card.Link>
                    </FormCheck.Label>
                  </FormCheck>

                  <Button variant="primary" type="submit" onClick={doPasswordsMatch} className="w-100">
                    Sign up
                  </Button>
                </Form>

                <div className="d-flex justify-content-center align-items-center mt-4">
                  <span className="fw-normal">
                    Already have an account?
                    <Card.Link as={Link} to={Routes.Signin.path} className="fw-bold">
                      {` Login here `}
                    </Card.Link>
                  </span>
                </div>
                {response.map((val) => {
                return <h5>username: {val.username} | password: {val.password}</h5>
              })}
              </div>
              
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
