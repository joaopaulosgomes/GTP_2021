
import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Card, Table} from '@themesberg/react-bootstrap';


export const AdmReservationTable = () => {

  const [record,setRecord] = useState([]);
  
  useEffect(() => {
    getReservation();
  });

  const getReservation = async () =>  {
    fetch('http://localhost:7000/api/carpark/reservation')
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        setRecord(myJson);
      });
  }

  const TableRow = (props) => {
    const { id, type, price, numb_days, from_date, status } = props;

    return (
      <tr>
        <td>
          <span className="fw-normal">
            {id}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {type}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {from_date}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {numb_days}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            €{parseFloat(price).toFixed(2)}
          </span>
        </td>
        <td>
          <span className={"fw-normal"}>
            {status}
          </span>
        </td>
        <td>
          <Card.Link className="fw-normal">
            <FontAwesomeIcon icon={faTrashAlt} className="text-danger" />
            <h7> Cancel</h7>
          </Card.Link>
        </td>
        
      </tr>
    );
  };

  return (
    <Card border="light" className="table-wrapper table-responsive shadow-sm">
      <Card.Body className="pt-0">
        <Table hover className="user-table align-items-center">
          <thead>
          <tr>
              <th className="border-bottom">#id</th>
              <th className="border-bottom">Type</th>
              <th className="border-bottom">From Date</th>
              <th className="border-bottom">Number of Days</th>
              <th className="border-bottom">Price</th>
              <th className="border-bottom">Status</th>
              <th className="border-bottom">Action</th>
              
            </tr>
          </thead>
          <tbody>
            {record.map(t => <TableRow key={t.id} {...t} />)}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export const AdmCarwashTable = () => {

  const [record,setRecord] = useState([]);
  
  useEffect(() => {
    getReservation();
  });

  const getReservation = async () => {
    fetch('http://localhost:7000/api/carpark/carwash')
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        setRecord(myJson);
      });
  }

  const TableRow = (props) => {
    
    const { id, type,  date, status, price, user_id} = props;
    return (
      <tr>
        <td>
          <span className="fw-normal">
            {id}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {type}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {date}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {status}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {user_id}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            €{parseFloat(price).toFixed(2)}
          </span>
        </td>
        <td>
          <Card.Link className="fw-normal">
            <FontAwesomeIcon icon={faTrashAlt} className="text-danger" />
            <h7> Cancel</h7>
          </Card.Link>
        </td>
        
      </tr>
    );
  };

  return (
    <Card border="light" className="table-wrapper table-responsive shadow-sm">
      <Card.Body className="pt-0">
        <Table hover className="user-table align-items-center">
          <thead>
          <tr>
              <th className="border-bottom">#id</th>
              <th className="border-bottom">Type</th>
              <th className="border-bottom">Date</th>
              <th className="border-bottom">Status</th>
              <th className="border-bottom">User</th>
              <th className="border-bottom">Price</th>
              <th className="border-bottom">Action</th>
              
            </tr>
          </thead>
          <tbody>
            {record.map(t => <TableRow key={t.id} {...t} />)}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};


export const AdmMembershipTable = () => {

  const [record,setRecord] = useState([]);
  
  useEffect(() => {
    getReservation();
  });

  const getReservation = async () => {
    fetch('http://localhost:7000/api/carpark/membership')
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        setRecord(myJson);
      });
  }

  const TableRow = (props) => {
    const { id, period, from_date, status, price } = props;

    return (
      <tr>
        <td>
          <span className="fw-normal">
            {id}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {period}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {from_date}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {status}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            €{parseFloat(price).toFixed(2)}
          </span>
        </td>
        <td>
          <Card.Link className="fw-normal">
            <FontAwesomeIcon icon={faTrashAlt} className="text-danger" />
            <h7> Cancel</h7>
          </Card.Link>
        </td>
        
      </tr>
    );
  };

  return (
    <Card border="light" className="table-wrapper table-responsive shadow-sm">
      <Card.Body className="pt-0">
        <Table hover className="user-table align-items-center">
          <thead>
          <tr>
              <th className="border-bottom">#id</th>
              <th className="border-bottom">Period</th>
              <th className="border-bottom">From Date</th>
              <th className="border-bottom">Status</th>
              <th className="border-bottom">Price</th>
              <th className="border-bottom">Action</th>
              
            </tr>
          </thead>
          <tbody>
            {record.map(t => <TableRow key={`record-${t.id}`} {...t} />)}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};





export const AdmUsersTable = () => {

  const [record,setRecord] = useState([]);
  
  useEffect(() => {
    getReservation();
  });

  const getReservation = async () => {
    fetch('http://localhost:7000/api/carpark/users')
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        setRecord(myJson);
      });
  }

  const TableRow = (props) => {
    const { id, first_name, last_name, phone_number, email, create_at } = props;
    return (
      <tr>
        <td>
          <span className="fw-normal">
            {id}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {first_name}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {last_name}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {phone_number}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {email}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {create_at}
          </span>
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="table-wrapper table-responsive shadow-sm">
      <Card.Body className="pt-0">
        <Table hover className="user-table align-items-center">
          <thead>
          <tr>
              <th className="border-bottom">#id</th>
              <th className="border-bottom">First Name</th>
              <th className="border-bottom">Last Name</th>
              <th className="border-bottom">Phone</th>
              <th className="border-bottom">E-mail</th>
              <th className="border-bottom">Created at</th>
            </tr>
          </thead>
          <tbody>
            {record.map(t => <TableRow key={t.id}{...t} />)}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};