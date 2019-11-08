import React, { Component } from "react";
import ENICAR from "../images/téléchargement.png";
import axios from "axios";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
//Components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

//Redux
import { connect } from "react-redux";
import { loginUser } from "../redux/actions/userActions";

import CircularProgress from "@material-ui/core/CircularProgress";
import styles from "../components/styles";

class login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      loading: "",
      errors: {}
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      loading: true
    });
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData, this.props.history);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const {
      classes,
      UI: { loading }
    } = this.props;
    const { errors } = this.props.UI;
    return (
      <Grid container className={classes.form}>
        <Grid item sm />
        <Grid item sm />
        <Grid item sm>
          <img src={ENICAR} alt="Enicar logo" className={classes.Enicar} />
          <Typography variant="h3" className={classes.pageTitle}>
            Login
          </Typography>
          <form noValidate onSubmit={this.handleSubmit}>
            <TextField
              id="email"
              name="email"
              type="email"
              label="Email"
              className={classes.textField}
              helperText={errors.email}
              error={errors.email ? true : false}
              value={this.state.email}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id="password"
              name="password"
              type="password"
              label="Password"
              className={classes.textField}
              helperText={errors.password}
              error={errors.password ? true : false}
              value={this.state.password}
              onChange={this.handleChange}
              fullWidth
            />
            {errors.general && (
              <Typography variant="body2" className={classes.generalErr}>
                {errors.general}
              </Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              disabeled={loading ? "true" : "false"}
            >
              LOGIN
              {loading && (
                <CircularProgress size={30} className={classes.progress} />
              )}
            </Button>
            <br />
            <br />
            <small className={classes.sign}>
              Don't have an account ? signup <Link to="/signup">here</Link>
            </small>
          </form>
        </Grid>
        <Grid item sm />
        <Grid item sm />
      </Grid>
    );
  }
}

login.propTypes = {
  classes: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user,
  UI: state.UI
});

const mapActionsToProps = {
  loginUser
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(login));
