import React from "react";
import "./App.css";

function App() {
  const currentYear = new Date().getFullYear(); // Императивный стиль

  return React.createElement(
    "div",
    { className: "App" },
    React.createElement(
      "header",
      { className: "App-header" },
      React.createElement(
        "p",
        null,
        "Edit ",
        React.createElement("code", null, "src/App.jsx"),
        " and save to reload."
      ),
      React.createElement(
        "a",
        {
          className: "App-link",
          href: "https://reactjs.org",
          target: "_blank",
          rel: "noopener noreferrer",
        },
        "Learn React"
      ),
      // Декларативный стиль
      React.createElement("p", null, "Current Year: ", currentYear)
    )
  );
}

export default App;
