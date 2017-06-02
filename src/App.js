import React, { Component } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Shots from "./components/Shots";
import Coop from "./components/Coop";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <Shots />
        <Coop />
      </div>
    );
  }
}

export default App;
