import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Main from "./screens/main";
import List from "./screens/list";
import Profile from "./screens/profile";
import Service from "./screens/service";
import ServReg from "./screens/servreg";
import Login from "./screens/login";
import Regist from "./screens/regist";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/list">
            <List />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/servreg">
            <ServReg />
          </Route>
          <Route path="/regist">
            <Regist />
          </Route>
          <Route path="/login">
            <Login />
          </Route> 
          <Route path="/service">
            <Service />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>

    );
  }
}

export default App;