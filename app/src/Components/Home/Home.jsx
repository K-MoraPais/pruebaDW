import classes from "./Home.module.scss";
import CreateMeeting from "../Meetings/CreateMeeting/postCreateMeeting";

function Home() {
  return (
    <div>
      <header>
        <div className={classes.homeWelcome}>
          <div>
            <h1>Kevin Mora Pais</h1>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
