
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
                  <h3 className="mb-0">CARWASH BOOKING</h3>
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
                        value={date ? moment(date).format("YYYY/MM/DD") : ""}
                        placeholder="dd/mm/yyyy"
                        onFocus={openCalendar}
                        onChange={(e)=> {setDate(e.target.value)}}  />
                    </InputGroup>
                    )} />
                </Form.Group>

                <Form.Group className="mb-4 mt-4">
                  <Form.Label>Select a product</Form.Label>
                  <Form.Select id="reservation" defaultValue="0" onChange={(e)=> {setType(e.target.value)}}>
                    <option value="NONE">Products</option>
                    <option value="Silver">Silver Wash (€ 20.00)</option>
                    <option value="Golden">Golden Wash (€ 40.00)</option>
                    <option value="Diamond">Diamond Wash (€ 55.00)</option>
                  </Form.Select>
                </Form.Group>

                
                  

                <Button variant="primary" type="submit" onClick={postCarwash} className="w-100">
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
