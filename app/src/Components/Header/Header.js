
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
          
          </Route>
          <Route path="/createMeeting">
          
          </Route>
          <Route path="/getMeetings">
           
          </Route>
        </Switch>
    </Router>
  );
}



export default Header;
