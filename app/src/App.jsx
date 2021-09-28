import Header from "./Components/Header/Header";
import classes from "./app.module.scss";
import Routes from "./Router/Routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className={classes.content}>
        <Routes />
      </div>
    </BrowserRouter>
  );
}
export default App;
