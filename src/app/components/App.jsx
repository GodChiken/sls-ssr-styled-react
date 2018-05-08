import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import Home from "./Home";
import LandingPage from "./LandingPage";
import { connect } from "react-redux";

const App = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return (
      <Switch>
        <Route exact path="/latest" component={Home} />
        <Redirect to="/latest" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route exact path="/latest" component={LandingPage} />
      <Redirect to="/latest" />
    </Switch>
  );
};

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({ isLoggedIn: state.isLoggedIn });

export default connect(mapStateToProps, null)(App);
