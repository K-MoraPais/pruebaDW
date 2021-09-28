import { Switch, Route } from "react-router-dom";
import Home from "../Components/Home/Home";
import CreateMeeting from "../Components/Meetings/CreateMeeting/CreateMeeting";

function Routes() {
  return (
    <Switch>
      <Route path="/createMeeting">
        <CreateMeeting />
      </Route>
      <Route path="/getMeetings"></Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default Routes;
