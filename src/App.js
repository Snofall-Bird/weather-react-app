import "./App.css";
import WeatherSearch from "./WeatherSearch";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h1>Weather React App</h1>
            <WeatherSearch defaultCity="Sydney" />
          </div>{" "}
          <footer className="source">
            <a href="https://github.com/Snofall-Bird/weather-App-week6">
              Open source code
            </a>{" "}
            By Sno Wirth
          </footer>
        </div>
      </div>{" "}
    </div>
  );
}

export default App;
