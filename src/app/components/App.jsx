import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import Home from "./Home";
import LandingPage from "./LandingPage";
import { connect } from "react-redux";

console.log(process.env.NODE_ENV);

const App = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return (
      <Switch>
        <Route exact path="/dev" component={Home} />
        <Redirect to="/dev" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route exact path="/dev" component={LandingPage} />
      <Redirect to="/dev" />
    </Switch>
  );
};

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({ isLoggedIn: state.isLoggedIn });

export default connect(mapStateToProps, null)(App);
