import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import Home from "./Home";
import LandingPage from "./LandingPage";
import { connect } from "react-redux";

console.log(__dirname);

const App = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return (
      <Switch>
        <Route exact path={__dirname} component={Home} />
        <Redirect to={__dirname} />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route exact path={__dirname} component={LandingPage} />
      <Redirect to={__dirname} />
    </Switch>
  );
};

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({ isLoggedIn: state.isLoggedIn });

export default connect(mapStateToProps, null)(App);
