
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb } from '@themesberg/react-bootstrap';
import { Col, Row } from '@themesberg/react-bootstrap';

import { UsersReservationTable } from "../../components/CustomTables";



export default () => {
  return (
    <>
      <div className="d-xl-flex justify-content-between flex-wrap flex-md-nowrap align-items-center">
        <div className="d-block mb-4 mb-xl-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>Users</Breadcrumb.Item>
            <Breadcrumb.Item active>My reservations</Breadcrumb.Item>
          </Breadcrumb>
          <h4>All my reservations</h4>
          <p className="mb-0">
            000000000
          </p>
        </div>
      </div>

      <UsersReservationTable />

    
      

    </>
  );
};
