import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

//components
import Navbar from "./components/Navbar";
import theme from "./components/theme";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
//pages
import acceuil from "./pages/acceuil";
import login from "./pages/login";
import about from "./pages/about";
import signup from "./pages/signup";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Navbar />
          <div className="container" spacing={16}>
            <Switch>
              <Route exact path="/" component={acceuil} />
              <Route exact path="/login" component={login} />
              <Route exact path="/signup" component={signup} />
            </Switch>
          </div>
        </Router>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
