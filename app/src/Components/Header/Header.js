import React from "react";
import Home from '../Home/Home'
import CreateMeeting from "../Meetings/CreateMeeting/CreateMeeting";
import classes from "./Header.module.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Header() {
  return (
    <Router>
      <header className={classes.header}>
        <h2 className={classes.title}>Prueba</h2>
        <div>
          <Link to="/createMeeting">Create meeting</Link>
          <Link to="/getMeetings">Get meetings</Link>
        </div>
      </header>

      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/createMeeting">
            <CreateMeeting />
          </Route>
          <Route path="/getMeetings">
            <Test />
          </Route>
        </Switch>
    </Router>
  );
}

function Test() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

export default Header;
