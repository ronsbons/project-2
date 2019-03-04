import React, { Component } from 'react';
import Header from "./components/Header";
import HomeContainer from "./container/HomeContainer"
// import { 
//   Switch,
//   Route
// } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />

      <HomeContainer />

      </div>
    );
  }
}

export default App;
