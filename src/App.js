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

  // [] THIS ONLY RUNS WHEN THE PAGE RELOADS AND LOGS ME OUT, BUT I STILL HAVE A TOKEN IN LOCALSTORAGE
  componentDidMount() {
    if(localStorage.token) {
      // [] TEST THIS IN POSTMAN
      axios({
        method: 'GET',
        url: 'http://localhost:3001/user',
        headers: {authorization: `Bearer ${localStorage.token}`},
      }).then( (response) => {
        console.log(response.data);
        // [] WALK-IT-OUT SETS USER STATE, IS THIS NEEDED HERE?
        this.setState({
          isLoggedIn:true,
          user: response.data,
        });
      }).catch( (error) => {
        console.log('axios get header bearer: ', error);
      });
    } else {
      this.setState({
        isLoggedIn: false,
      });
    };
  };

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  // Handle user signup/login input
  handleLogin = (event) => {
      event.preventDefault();
      axios.post('http://localhost:3001/user/login',{
          email:this.state.email,
          password:this.state.password
      })
      .then( response => {
          localStorage.token=response.data.signedJwt
          this.setState({
              isLoggedIn:true,
              user: response.data
          })
      })
      .catch(err => console.log(err))
  }
 
  // Handles user signup 
  handleSignup = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/user/signup',{
        email:this.state.email,
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
        user={this.state.user}
      />

      </div>
    );
  }
}

export default App;
