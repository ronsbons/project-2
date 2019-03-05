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
    email:'',
    password:'',
    isLoggedIn: false,
    userName:''
  }

  componentDidMount() {
    if(localStorage.token){
      this.setState({
        isLoggedIn:true
      })
    }
  }

  handleInput (event) {
    this.setState({
      userName: event.target.value.Username,
      password:event.target.value.password,
      email:event.target.value.email
    })
  }

  // Handle user signup/login input
  handleLogin = (event) => {
  }
 
  // Handles user signup 
  handleSignup = (event) => {
  }

   // Handle user logout
   handleLogout = (event) => {

  }

  
  render() {
    return (
      <div className="App">
      <Header isLoggedIn={this.state.isLoggedIn}/>

      <HomeContainer />

      <MainContainer />




      </div>
    );
  }
}

export default App;
