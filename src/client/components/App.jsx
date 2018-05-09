import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./Home";
import LandingPage from "./LandingPage";

// When you deploy to lambda, it gives you endpoint URL.
// But It has sub-path (/dev) instead of root path(/).
// Therefore you have to insert sub-path in front of all paths in React-Router-DOM.
// `dev` is the stage value in serverless.yml.
const SUB_PATH = process.env.NODE_ENV === "development" ? "" : "/dev";

const App = props => {
  const { isLoggedIn } = props;

  if (isLoggedIn) {
    return (
      <Switch>
        <Route exact path={`${SUB_PATH}/`} component={Home} />
        <Redirect to={`${SUB_PATH}/`} />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route exact path={`${SUB_PATH}/`} component={LandingPage} />
      <Redirect to={`${SUB_PATH}/`} />
    </Switch>
  );
};

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({ isLoggedIn: state.isLoggedIn });

export default connect(mapStateToProps, null)(App);
