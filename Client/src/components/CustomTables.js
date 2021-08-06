
import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Card, Table} from '@themesberg/react-bootstrap';
import axios from 'axios';

import transactions from "../data/transactions";


const ValueChange = ({ value, suffix }) => {
  const valueIcon = value < 0 ? faAngleDown : faAngleUp;
  const valueTxtColor = value < 0 ? "text-danger" : "text-success";

  return (
    value ? <span className={valueTxtColor}>
      <FontAwesomeIcon icon={valueIcon} />
      <span className="fw-bold ms-1">
        {Math.abs(value)}{suffix}
      </span>
    </span> : "--"
  );
};



export const UsersReservationTable = () => {
  const totalTransactions = transactions.length;

  const TableRow = (props) => {
    const { invoiceNumber, subscription, price, issueDate, dueDate, status } = props;
    const statusVariant = status === "Paid" ? "success"
      : status === "Due" ? "warning"
        : status === "Canceled" ? "danger" : "primary";

    return (
      <tr>
        <td>
          <span className="fw-normal">
          {invoiceNumber}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {subscription}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {dueDate}
          </span>
        </td>
        <td>
          <span className="fw-normal">
          {invoiceNumber}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            ${parseFloat(price).toFixed(2)}
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
              <th className="border-bottom">Type</th>
              <th className="border-bottom">From Date</th>
              <th className="border-bottom">Number of Days</th>
              <th className="border-bottom">Price</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(t => <TableRow key={`transaction-${t.invoiceNumber}`} {...t} />)}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};










export const AdmReservationTable = () => {

  const [record,setRecord] = useState([]);

  useEffect(() => {
    getReservation();
  });

  const getReservation = async () =>  
    {
      var response = fetch('http://localhost:7000/api/carpark/reservation')
         .then(function(response){
            return response.json();
          })
         .then(function(myJson) {
            setRecord(myJson);
          });
    }

  const totalData = record.length;

  const TableRow = (props) => {
    const { id, type, price, created_at, numb_days, from_date, status } = props;
    const statusVariant = status === "Paid" ? "success"
      : status === "Due" ? "warning"
        : status === "Canceled" ? "danger" : "primary";

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
            ${parseFloat(price).toFixed(2)}
          </span>
        </td>
        <td>
          <span className={`fw-normal text-${statusVariant}`}>
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
            {record.map(t => <TableRow key={`record-${t.id}`} {...t} />)}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

