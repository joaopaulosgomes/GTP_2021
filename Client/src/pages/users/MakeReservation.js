
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBoxOpen, faCartArrowDown, faChartPie, faChevronDown, faClipboard, faCommentDots, faFileAlt, faPlus, faRocket, faStore, faCarCrash, faCloudRain, faHandshake, faCarAlt } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb, Dropdown } from '@themesberg/react-bootstrap';
import { Col, Row, Button } from '@themesberg/react-bootstrap';

import { ReservationForm } from "../../components/ReservationForm";
import { MembershipForm } from "../../components/MembershipForm";
import { CarwashForm } from "../../components/CarwashForm";
import { GarageForm } from "../../components/GarageForm";


export default () => {
  return (
    <>
      <div className="d-xl-flex justify-content-between flex-wrap flex-md-nowrap align-items-center">
        
        <div className="d-block mb-4 mb-xl-0">
          
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>Users</Breadcrumb.Item>
            <Breadcrumb.Item active>Make reservations</Breadcrumb.Item>
          </Breadcrumb>

          <h4>Make a reservation</h4>
          
        </div>
      </div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <Dropdown>
            <Dropdown.Toggle as={Button} variant="secondary" className="text-dark me-2">
              <FontAwesomeIcon icon={faPlus} className="me-2" />
              <span>New</span>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-2">
              <Dropdown.Item>
                <FontAwesomeIcon icon={faCarAlt} className="me-2" /> Reservation
              </Dropdown.Item>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faHandshake} className="me-2" /> Membership
              </Dropdown.Item>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faCloudRain} className="me-2" /> Carwash
              </Dropdown.Item>

              <Dropdown.Divider />

              <Dropdown.Item>
                <FontAwesomeIcon icon={faCarCrash} className="me-2" /> Garage request
                </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

      </div>
      

      <Row>
        <Col xs={12} xl={8}>
          <ReservationForm/>
        </Col>
      </Row>
      <Row>
        <Col xs={12} xl={8}>
          <MembershipForm/>
        </Col>
      </Row>
      <Row>
        <Col xs={12} xl={8}>
          <CarwashForm/>
        </Col>
      </Row>
      <Row>
        <Col xs={12} xl={8}>
          <GarageForm/>
        </Col>
      </Row>
      

    </>
  );
};
