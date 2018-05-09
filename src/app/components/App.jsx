import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import Home from "./Home";
import LandingPage from "./LandingPage";
import { connect } from "react-redux";

const App = props => {
  const {
    isLoggedIn,
    location: { pathname }
  } = props;
  if (isLoggedIn) {
    return (
      <Switch>
        <Route exact path={`${pathname}/`} component={Home} />
        <Redirect to={`${pathname}/`} />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route exact path={`${pathname}/`} component={LandingPage} />
      <Redirect to={`${pathname}/`} />
    </Switch>
  );
};

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({ isLoggedIn: state.isLoggedIn });

export default withRouter(connect(mapStateToProps, null)(App));
