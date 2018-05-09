import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import Home from "./Home";
import LandingPage from "./LandingPage";
import { connect } from "react-redux";

// When you deploy to lambda, it gives you endpoint URL.
// But It has sub-path (/dev) instead of root path(/).
// Therefore you have to insert sub-path in front of all paths in React-Router-DOM.
const SUB_PATH = process.env.NODE_ENV === "development" ? "" : "/dev";

const App = props => {
  const {
    isLoggedIn,
    location: { pathname }
  } = props;
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

export default withRouter(connect(mapStateToProps, null)(App));
