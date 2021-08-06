import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { Routes } from "../routes";

// pages
import IndexWebPage from "./IndexWebPage";
import DashboardOverview from "./dashboard/DashboardOverview";
import Transactions from "./Transactions";
import Settings from "./Settings";
import BootstrapTables from "./other/BootstrapTables";
import Signin from "./users/Signin";
import Register_00 from "./users/Register-00";
import Register_2 from "./users/Register-2";
import Register_3 from "./users/Register-3";
import CarparkBooking from "./products/CarparkBooking";
import CarwashBooking from "./products/CarwashBooking";
import MembershipBooking from "./products/MembershipBooking";
import NotFoundPage from "./other/NotFound";
import ServerError from "./other/ServerError";


import MakeReservation from "./users/MakeReservation";
import MyReservations from "./users/MyReservations";
import MyProfile from "./users/MyProfile";


// components
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";


const RouteWithLoader = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Route {...rest} render={props => ( <> <Preloader show={loaded ? false : true} /> <Component {...props} /> </> ) } />
  );
};

const RouteWithSidebar = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const localStorageIsSettingsVisible = () => {
    return localStorage.getItem('settingsVisible') === 'false' ? false : true
  }

  const [showSettings, setShowSettings] = useState(localStorageIsSettingsVisible);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
    localStorage.setItem('settingsVisible', !showSettings);
  }

  return (
    <Route {...rest} render={props => (
      <>
        <Preloader show={loaded ? false : true} />
        <Sidebar />

        <main className="content">
          <Navbar />
          <Component {...props} />
          <Footer toggleSettings={toggleSettings} showSettings={showSettings} />
        </main>
      </>
    )}
    />
  );
};

export default () => (
  <Switch>
    <RouteWithLoader exact path={Routes.IndexWebPage.path} component={IndexWebPage} />
    <RouteWithLoader exact path={Routes.Signin.path} component={Signin} />
    <RouteWithLoader exact path={Routes.Register_00.path} component={Register_00} />
    <RouteWithLoader exact path={Routes.Register_2.path} component={Register_2} />
    <RouteWithLoader exact path={Routes.Register_3.path} component={Register_3} />
    <RouteWithLoader exact path={Routes.CarparkBooking.path} component={CarparkBooking} />
    <RouteWithLoader exact path={Routes.CarwashBooking.path} component={CarwashBooking} />
    <RouteWithLoader exact path={Routes.MembershipBooking.path} component={MembershipBooking} />
    <RouteWithLoader exact path={Routes.NotFound.path} component={NotFoundPage} />
    <RouteWithLoader exact path={Routes.ServerError.path} component={ServerError} />

    {/* pages */}
    <RouteWithSidebar exact path={Routes.DashboardOverview.path} component={DashboardOverview} />
    <RouteWithSidebar exact path={Routes.MakeReservation.path} component={MakeReservation} />
    <RouteWithSidebar exact path={Routes.MyReservations.path} component={MyReservations} />
    <RouteWithSidebar exact path={Routes.MyProfile.path} component={MyProfile} />
    <RouteWithSidebar exact path={Routes.Transactions.path} component={Transactions} />
    <RouteWithSidebar exact path={Routes.Settings.path} component={Settings} />
    <RouteWithSidebar exact path={Routes.BootstrapTables.path} component={BootstrapTables} />

    <Redirect to={Routes.NotFound.path} />
  </Switch>
);
