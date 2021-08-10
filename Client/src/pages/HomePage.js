import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { Routes } from "../routes";

// pages
import IndexWebPage from "./IndexWebPage";
import ScreenCarpark from "./ScreenCarpark";
import ScreenCarwash from "./ScreenCarwash";
import ScreenMembership from "./ScreenMembership";
import ScreenInvoice from "./ScreenInvoice";


import Signin from "./users/Signin";
import Register_00 from "./users/Register-00";
import Register_1 from "./users/Register-1";
import Register_2 from "./users/Register-2";
import Register_3 from "./users/Register-3";
import Register_4 from "./users/Register-4";

import NotFoundPage from "./other/NotFound";
import ServerError from "./other/ServerError";




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
    <RouteWithLoader exact path={Routes.Register_1.path} component={Register_1} />
    <RouteWithLoader exact path={Routes.Register_2.path} component={Register_2} />
    <RouteWithLoader exact path={Routes.Register_3.path} component={Register_3} />
    <RouteWithLoader exact path={Routes.Register_4.path} component={Register_4} />

    <RouteWithLoader exact path={Routes.NotFound.path} component={NotFoundPage} />
    <RouteWithLoader exact path={Routes.ServerError.path} component={ServerError} />

    {/* pages */}
    <RouteWithSidebar exact path={Routes.ScreenCarpark.path} component={ScreenCarpark} />
    <RouteWithSidebar exact path={Routes.ScreenCarwash.path} component={ScreenCarwash} />
    <RouteWithSidebar exact path={Routes.ScreenMembership.path} component={ScreenMembership} />
    <RouteWithSidebar exact path={Routes.ScreenInvoice.path} component={ScreenInvoice} />
    
 
    <Redirect to={Routes.NotFound.path} />
  </Switch>
);
