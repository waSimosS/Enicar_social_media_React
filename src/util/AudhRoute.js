import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const AudhRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authenticated === false ? (
        <Redirect to="/aboutus" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = state => ({
  authenticated: state.user.authenticated
});

AudhRoute.propTypes = {
  user: PropTypes.object
};

export default connect(mapStateToProps)(AudhRoute);
