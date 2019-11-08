import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import AuthRoute from "./util/AuthRoute";
import "./App.css";
//Redux
import { Provider } from "react-redux";
import store from "./redux/store";
import { SET_AUTHENTICATED } from "./redux/types";
import { logoutUser, getUserData } from "./redux/actions/userActions";

//components
import Navbar from "./components/Navbar";
import theme from "./components/theme";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
//pages
import acceuil from "./pages/acceuil";
import login from "./pages/login";
import about from "./pages/about";

import signup from "./pages/signup";
import jwtDecode from "jwt-decode";

axios.defaults.baseURL =
  "https://europe-west1-enicar-social-media.cloudfunctions.net/api";

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common["Authorization"] = token;
    store.dispatch(getUserData());
  }
}

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Navbar />
          <div className="container" spacing={16}>
            <Switch>
              <Route exact path="/" component={acceuil} />
              <AuthRoute exact path="/login" component={login} />
              <AuthRoute exact path="/signup" component={signup} />
            </Switch>
          </div>
        </Router>
      </Provider>
    </MuiThemeProvider>
  );
}

export default App;
