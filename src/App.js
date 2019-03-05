import React, { Component } from 'react';
import Header from "./components/Header";
import HomeContainer from './container/HomeContainer';
import MainContainer from './container/MainContainer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />

      <HomeContainer />

      <MainContainer />




      </div>
    );
  }
}

export default App;
