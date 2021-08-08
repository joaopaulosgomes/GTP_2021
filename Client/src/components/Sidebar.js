
import React, { useState } from "react";
import SimpleBar from 'simplebar-react';
import { useLocation } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarAlt, faCarSide, faChartPie, faCloudRain, faFileAlt, faHandshake, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { Nav, Badge, Image, Button, Dropdown, Accordion, Navbar } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../routes";



export default (props = {}) => {
  const location = useLocation();
  const { pathname } = location;
  const [show, setShow] = useState(false);
  const showClass = show ? "show" : "";

  const onCollapse = () => setShow(!show);

  const CollapsableNavItem = (props) => {
    const { eventKey, title, icon, children = null } = props;
    const defaultKey = pathname.indexOf(eventKey) !== -1 ? eventKey : "";

    return (
      <Accordion as={Nav.Item} defaultActiveKey={defaultKey}>
        <Accordion.Item eventKey={eventKey}>
          <Accordion.Button as={Nav.Link} className="d-flex justify-content-between align-items-center">
            <span>
              <span className="sidebar-icon"><FontAwesomeIcon icon={icon} /> </span>
              <span className="sidebar-text">{title}</span>
            </span>
          </Accordion.Button>
          <Accordion.Body className="multi-level">
            <Nav className="flex-column">
              {children}
            </Nav>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  };

  const NavItem = (props) => {
    const { title, link, external, target, icon, image, badgeText, badgeBg = "secondary", badgeColor = "primary" } = props;
    const classNames = badgeText ? "d-flex justify-content-start align-items-center justify-content-between" : "";
    const navItemClassName = link === pathname ? "active" : "";
    const linkProps = external ? { href: link } : { as: Link, to: link };

    return (
      <Nav.Item className={navItemClassName} onClick={() => setShow(false)}>
        <Nav.Link {...linkProps} target={target} className={classNames}>
          <span>
            {icon ? <span className="sidebar-icon"><FontAwesomeIcon icon={icon} /> </span> : null}
            {image ? <Image src={image} width={20} height={20} className="sidebar-icon svg-icon" /> : null}

            <span className="sidebar-text">{title}</span>
          </span>
          {badgeText ? (
            <Badge pill bg={badgeBg} text={badgeColor} className="badge-md notification-count ms-2">{badgeText}</Badge>
          ) : null}
        </Nav.Link>
      </Nav.Item>
    );
  };

  return (
    <>
      <CSSTransition timeout={300} in={show} classNames="sidebar-transition">
        <SimpleBar className={`collapse ${showClass} sidebar d-md-block bg-primary text-white`}>
          <div className="sidebar-inner px-4 pt-3">
            
            <Nav className="flex-column pt-3 pt-md-0">
              <NavItem title="ADMIN DASHBOARD" icon={faCarAlt} link={Routes.IndexWebPage.path} />

              <Dropdown.Divider className="my-3 border-indigo" />

              <NavItem title="Overview" link={Routes.DashboardOverview.path} icon={faChartPie} />


              <CollapsableNavItem eventKey="carpark/" title="Car park" icon={faCarSide}>
                <NavItem title="Reservations" link={Routes.ScreenCarpark.path} />
                <NavItem title="Staffs" link={Routes.BootstrapTables.path} />
              </CollapsableNavItem>

              <CollapsableNavItem eventKey="carwash/" title="Carwash" icon={faCloudRain}>
                <NavItem title="Sevice Status" link={Routes.ScreenCarwash.path} />
                <NavItem title="Stock" link={Routes.Settings.path} />
                <NavItem title="Staffs" link={Routes.Settings.path} />
              </CollapsableNavItem>

              <CollapsableNavItem eventKey="membership/" title="Membership" icon={faHandshake}>
              <NavItem title="Membership Status" link={Routes.ScreenMembership.path} />
                <NavItem title="Customers" link={Routes.Settings.path} />
              </CollapsableNavItem>

              <CollapsableNavItem eventKey="invoice/" title="Invoice" icon={faHandshake}>
              <NavItem title="Generate Invoice" link={Routes.ScreenInvoice.path} />
              </CollapsableNavItem>

            </Nav>
          </div>
        </SimpleBar>
      </CSSTransition>
    </>
  );
};
