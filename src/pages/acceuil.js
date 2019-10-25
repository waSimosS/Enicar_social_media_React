import React, { Component } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
//components
import Scream from "../components/scream";

export class acceuil extends Component {
  state = {
    screams: null
  };

  componentDidMount() {
    axios
      .get(
        "https://europe-west1-enicar-social-media.cloudfunctions.net/api/screams"
      )
      .then(res => {
        console.log(res.data);
        this.setState({
          screams: res.data
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    let recentScreams = this.state.screams ? (
      this.state.screams.map(scream => <Scream scream={scream} />)
    ) : (
      <p>loading....</p>
    );
    return (
      <div>
        <Grid container>
          <Grid item sm={8} xs={12}>
            {recentScreams}
            <p>contentt ...</p>
          </Grid>
          <Grid item sm={4} xs={12}>
            <p>profile</p>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default acceuil;
