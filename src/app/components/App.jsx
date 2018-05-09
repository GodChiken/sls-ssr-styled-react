import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import Home from "./Home";
import LandingPage from "./LandingPage";
import { connect } from "react-redux";

const SUB_ROOT = process.env.NODE_ENV === "development" ? "" : "/dev";

const App = props => {
  const {
    isLoggedIn,
    location: { pathname }
  } = props;
  if (isLoggedIn) {
    return (
      <Switch>
        <Route exact path={`${SUB_ROOT}/`} component={Home} />
        <Redirect to={`${SUB_ROOT}/`} />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route exact path={`${SUB_ROOT}/`} component={LandingPage} />
      <Redirect to={`${SUB_ROOT}/`} />
    </Switch>
  );
};

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({ isLoggedIn: state.isLoggedIn });

export default withRouter(connect(mapStateToProps, null)(App));
