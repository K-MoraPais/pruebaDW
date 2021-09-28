import Header from "./Components/Header/Header";
import classes from "./app.module.scss";
import router from "./Router/Routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <div className={classes.content}>
        <router />
      </div>
    </Router>
  );
}
export default App;
