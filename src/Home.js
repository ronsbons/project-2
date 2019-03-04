import React, { Component } from 'react';
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import About from "./components/About";

class Home extends Component {
  render() {
    return (
      <div className="Home">
      <NavBar/>
      <Header />
      <About />

      </div>
    );
  }
}

export default Home;
