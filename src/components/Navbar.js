import React, { Component } from "react";
import { Link } from "react-router-dom/";
import withStyles from "@material-ui/core/styles/withStyles";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import ToolBar from "@material-ui/core/ToolBar";
import Typography from "@material-ui/core/Typography";

const styles = {
  logo: {
    height: 70,
    width: 200,
    margin: "5px auto auto auto"
  },
  menuButton: {
    marginRight: 15,
    marginLeft: 360
  }
};

export class Navbar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="fixed">
        <ToolBar>
          <Typography>
            <Link to="/">
              <img className={classes.logo} src="../../logo.png" alt="enicar" />
            </Link>
          </Typography>
          <span className={classes.menuButton}>
            <Button color="inherit" component={Link} to="/login">
              login
            </Button>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/signup">
              Signup
            </Button>
          </span>
        </ToolBar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Navbar);
