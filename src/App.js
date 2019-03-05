import React, { Component } from 'react';
import Header from "./components/Header";
import HomeContainer from './container/HomeContainer';
import MainContainer from './container/MainContainer.js';
import {
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {
  state = {
    isLoggedIn: false,
  }

  componentDidMount() {
    if(localStorage.token){
      this.setState({
        isLoggedIn:true
      })
    }
  }



  
  render() {
    return (
      <div className="App">
      <div
      className="headerContents"
      >
      <Header 
      isLoggedIn={this.state.isLoggedIn}
      userInfo={this.state.data}
      />

      </div>

      <HomeContainer
      className="homePage"
       />

      <MainContainer 
      className="main"
      />




      </div>
    );
  }
}

export default App;
