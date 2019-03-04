import React, { Component } from 'react';
import Header from "./component/Header";
import NavBar from "./component/NavBar";
import About from "./component/About";

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
