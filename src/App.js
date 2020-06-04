import React, { useState, Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BckChanger from "./components/BckChanger";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>Hello React by Shakeel ur Rehman!</p>
        <a href="https://www.shkeel.com/">Checkout my projects here...</a>
        <button>Click Me!</button> */}
        <BckChanger />
      </header>
    </div>
  );
}

export default App;
