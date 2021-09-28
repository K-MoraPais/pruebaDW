import classes from "./Header.module.scss";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import CreateMeeting from "../Meetings/CreateMeeting/CreateMeeting";
import Home from "../Home/Home";

function Header() {
  return (
      <header className={classes.header}>
        <h2 className={classes.title}>Prueba</h2>
        <div>
          <NavLink to="/createMeeting">Create Meeting</NavLink>
          <NavLink to="/getMeetings">Get meetings</NavLink>
        </div>
      </header>
     
  );
}

export default Header;
