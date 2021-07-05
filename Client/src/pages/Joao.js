import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faCartArrowDown, faChartPie, faChevronDown, faClipboard, faCommentDots, faFileAlt, faPlus, faRocket, faStore } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown } from '@themesberg/react-bootstrap';
import { ChoosePhotoWidget, ProfileCardWidget } from "../components/Widgets";
import { UsersForm } from "../components/UsersForm";
import { VehicleForm } from "../components/VehicleForm";
import { ReservationForm } from "../components/ReservationForm";
import { CarwashForm } from "../components/CarwashForm"
import { MembershipForm } from "../components/MembershipForm"



export default () => {
  return (
    <>
      <Row>
        <Col xs={12} xl={8}>
          <ReservationForm/>
        </Col>
      </Row>
      <Row>
        <Col xs={12} xl={8}>
          <CarwashForm/>
        </Col>
      </Row>
      <Row>
        <Col xs={12} xl={8}>
          <MembershipForm/>
        </Col>
      </Row>
    </>
  );
};
