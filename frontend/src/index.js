import React, { useState } from "react";
import { render } from "react-dom";

import "./main.css";

const App = () => {
  const [result, setResult] = useState("Please enter your name below 👇");
  const [name, setName] = useState("");

  // Setup the greet function
  const greet = () => {
    // Check if the input is empty
    if (name === "") return;

    // Call App.Greet(name)
    try {
      window.go.main.App.Greet(name)
        .then((result) => {
          // Update result with data back from App.Greet()
          setResult(result);
        })
        .catch((err) => {
          console.error(err);
        });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => setName(event.target.value);

  return (
    <div id="app" class="app">
      <div className="logo" />
      <div className="result" id="result">
        {result}
      </div>
      <div className="input-box" id="input">
        <input
          className="input"
          id="name"
          type="text"
          autoComplete="off"
          autoFocus
          value={name}
          onChange={handleChange}
        />
        <button className="btn" onClick={greet}>
          Greet
        </button>
      </div>
    </div>
  );
};

render(<App />, document.querySelector("#root"));
