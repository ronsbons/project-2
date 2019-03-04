import React, { Component } from 'react';
import Header from "./components/Header";
import HomeContainer from "./container/HomeContainer"
import UserContainer from './container/UserContainer';
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
      {/* Switch */}
      <UserContainer />

      </div>
    );
  }
}

export default App;
