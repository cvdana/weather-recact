import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <footer>
      <a href="https://www.google.es/webhp?source=search_app&gfe_rd=cr&ei=2tfcVOu6IZKt8weG4oAY&gws_rd=ssl">
        Open-source
      </a>{" "}
      project coded by Dana Visnitchi
    </footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
