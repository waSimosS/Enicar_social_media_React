import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import ENICAR from "../images/logo.png";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import ToolBar from "@material-ui/core/ToolBar";
import MyButton from "../util/MyButton";
// Icons
import HomeIcon from "@material-ui/icons/Home";
import Typography from "@material-ui/core/Typography";
import PostScream from "./scream/PostScream";
import Notifications from "./Notifications";
import { logoutUser } from "../redux/actions/userActions";

const styles = {
  logo: {
    height: 70,
    width: 200,
    margin: "5px auto auto auto",
    float: "left"
  }
};

export class Navbar extends Component {
  handleLogout = () => {
    this.props.logoutUser();
  };
  render() {
    const { authenticated } = this.props;
    const { classes } = this.props;
    return (
      <AppBar position="fixed">
        <ToolBar>
          {authenticated ? (
            <Grid container alignItems="center">
              <Grid item xs={2}>
                <Typography>
                  <Link to="/">
                    <img className={classes.logo} src={ENICAR} alt="enicar" />
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs={3}></Grid>
              <Grid item xs={2}>
                <PostScream />
                <Link to="/">
                  <MyButton tip="Home">
                    <HomeIcon />
                  </MyButton>
                </Link>
                <Notifications />
              </Grid>
              <Grid item xs={3}></Grid>
              <Grid item xs={1}>
                <Button color="inherit" onClick={this.handleLogout}>
                  Logout
                </Button>
              </Grid>
            </Grid>
          ) : (
            <Grid container alignItems="center">
              <Grid item xs={2}>
                <Typography>
                  <Link to="/">
                    <img className={classes.logo} src={ENICAR} alt="enicar" />
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs={3}></Grid>
              <Grid item xs={4}>
                <Button color="inherit" component={Link} to="/login">
                  Login
                </Button>
                <Button color="inherit" component={Link} to="/aboutus">
                  About us
                </Button>
                <Button color="inherit" component={Link} to="/signup">
                  Signup
                </Button>
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>
          )}
        </ToolBar>
      </AppBar>
    );
  }
}

Navbar.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  logoutUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  authenticated: state.user.authenticated
});

const mapActionsToProps = { logoutUser };

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(Navbar));
