import { BrowserRouter as Switch, Route } from "react-router-dom";
import Header from "../Components/Header/Header";
import Home from "../Components/Home/Home";
import CreateMeeting from "../Components/Meetings/CreateMeeting/CreateMeeting";

function router() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/createMeeting">
        <CreateMeeting />
      </Route>
      <Route path="/getMeetings"></Route>
    </Switch>
  );
}

export default router;
