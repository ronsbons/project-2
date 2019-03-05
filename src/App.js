import React, { Component } from 'react';
import Nav from "./components/NavBar";
import HomeContainer from './container/HomeContainer';
import MainContainer from './container/MainContainer.js';
import {
  Route,
  Switch
} from 'react-router-dom';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    isLoggedIn: false,
    email:'',
    user:'',
    password:'',
  }

  componentDidMount() {
    if(localStorage.token){
      this.setState({
        isLoggedIn:true
      })
    }
  }

  handleInput = (event) => {
    this.setState({
    [event.target.name]: event.target.value
    })
    console.log(event.target.value);
  }

  // Handle user signup/login input
  handleLogin = (event) => {
      event.preventDefault();
      axios.post('http://localhost:3001/user/login',{
          userEmail:this.state.email,
          userPassword:this.state.password
      })
      .then( response => {
          localStorage.token=response.data.signedJwt
          this.setState({
              isLoggedIn:true,
              user: response.data.user
          })
      })
      .catch(err => console.log(err))
  }
 
  // Handles user signup 
  handleSignup = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/user/signup',{
        userEmail:this.state.email,
        password:this.state.password
    })
    .then( response => {
        localStorage.token=response.data.signedJwt
        this.setState({
            isLoggedIn:true,
            user: response.data.user
        })
    })
    .catch(err => console.log(err))
   }

   // Handle user logout
   handleLogout = (event) => {
     this.setState({
       email:'',
       password:'',
       isLoggedIn:false

     })
     localStorage.clear();
  }



  
  render() {
    return (
      <div className="App">
      <Nav 
        className="headerContents"
        isLoggedIn={this.state.isLoggedIn}
        email={this.state.email}
        password={this.state.password}
        handleSignup={this.handleSignup}
        handleLogin={this.handleLogin}
        handleLogout={this.handleLogout}
        handleInput={this.handleInput}
      />

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
