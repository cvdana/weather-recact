import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <a
            href="https://github.com/cvdana/weather-recact"
            target="blank"
            rel="noreferrer"
          >
            Open-source
          </a>{" "}
          project coded by Dana Visnitchi
        </footer>
      </div>
    </div>
  );
}
