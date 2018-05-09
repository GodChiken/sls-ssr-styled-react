import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import Home from "./Home";
import LandingPage from "./LandingPage";
import { connect } from "react-redux";

const App = ({ isLoggedIn, match }) => {
  console.log(match, __dirname);
  if (isLoggedIn) {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Redirect to="/" />
    </Switch>
  );
};

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({ isLoggedIn: state.isLoggedIn });

export default withRouter(connect(mapStateToProps, null)(App));
