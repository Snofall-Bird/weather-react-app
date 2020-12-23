import "./App.css";
import WeatherSearch from "./WeatherSearch";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h1>Weather React App</h1>
            <WeatherSearch defaultCity="Sydney" />
          </div>{" "}
          <footer className="source">
            Open{"  "}
            <a
              href="https://github.com/Snofall-Bird/weather-react-app"
              target="blank"
            >
              source code
            </a>{" "}
            By{"  "}
            <a href="https://www.linkedin.com/in/sno-wirth" target="blank">
              {" "}
              Sno Wirth{" "}
            </a>
          </footer>
        </div>
      </div>{" "}
    </div>
  );
}
