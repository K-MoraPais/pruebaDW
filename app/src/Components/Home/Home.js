import classes from "./Home.module.scss";
import Header from '../Header/Header'

function Home() {
  return (
    <div className="App">
       <Header />
      <header className="App-header">
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
