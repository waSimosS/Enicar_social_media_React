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
import CircularProgress from "@material-ui/core/CircularProgress";
import styles from "../components/styles";
import validateSignupData from "../Validators/validators";

export class signup extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      lastName: "",
      email: "",
      confirmEmail: "",
      errors: {}
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      loading: true
    });
    const newUser = {
      confirmEmail: this.state.confirmEmail,
      email: this.state.email,
      name: this.state.name,
      lastName: this.state.lastName
    };
    const { valid, errors } = validateSignupData(newUser);
    if (!valid) {
      this.setState({
        errors: errors,
        loading: false
      });
      return console.log(errors);
    }

    axios
      .post(
        "https://europe-west1-enicar-social-media.cloudfunctions.net/api/signupReq",
        newUser
      )
      .then(res => {
        console.log(res.data);
        this.setState({
          loading: false
        });
        this.props.history.push("/");
      })
      .catch(err => {
        this.setState({
          errors: err.response.data,
          loading: false
        });
      });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;
    const { errors, loading } = this.state;
    return (
      <Grid container className={classes.form}>
        <Grid item sm />
        <Grid item sm />
        <Grid item sm>
          <img src={ENICAR} alt="Enicar logo" className={classes.Enicar} />
          <Typography variant="h3" className={classes.pageTitle}>
            Sign up
          </Typography>
          <form noValidate onSubmit={this.handleSubmit}>
            <TextField
              id="name"
              name="name"
              type="text"
              label="Name"
              className={classes.textField}
              error={errors.name ? true : false}
              helperText={errors.name}
              value={this.state.name}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id="lastName"
              name="lastName"
              type="text"
              label="Last Name"
              className={classes.textField}
              helperText={errors.lastName}
              error={errors.lastName ? true : false}
              value={this.state.lastName}
              onChange={this.handleChange}
              fullWidth
            />
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
              id="confirmEmail"
              name="confirmEmail"
              type="email"
              label="Confirm Email"
              className={classes.textField}
              helperText={errors.confirmEmail}
              error={errors.confirmEmail ? true : false}
              value={this.state.confirmEmail}
              onChange={this.handleChange}
              fullWidth
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              disabeled={loading ? "true" : "false"}
            >
              Signup
              {loading && (
                <CircularProgress size={30} className={classes.progress} />
              )}
            </Button>
            <Grid item sm>
              <small className={classes.sign}>
                Already have an account ? login <Link to="/login">here</Link>
              </small>
            </Grid>
          </form>
        </Grid>
        <Grid item sm />
        <Grid item sm />
      </Grid>
    );
  }
}

signup.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(signup);
