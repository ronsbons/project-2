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
    user: '',
    password:'',
    loginMessage:'',
    signupMessage:''
  }

  // [] THIS DOESN'T RUN UNLESS I REFRESH THE PAGE
  componentDidMount() {
    if(localStorage.token) {
      axios({
        method: 'GET',
        url: 'http://localhost:3001/user',
        headers: {authorization: `Bearer ${localStorage.token}`},
      }).then( (response) => {
        console.log(response.data);
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
      axios.post('http://localhost:3002/user/login',{
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
      .catch(response => {
        this.setState({
          loginMessage:'Email/Password incorrect'
        })
      })
  }
 
  // Handles user signup 
  handleSignup = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3002/user/signup',{
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
    .catch(response =>{
      this.setState({
        signupMessage:'Email address already exists'
      })
    })
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
        signupMessage={this.state.signupMessage}
        loginMessage={this.state.loginMessage}
        handleSignup={this.handleSignup}
        handleLogin={this.handleLogin}
        handleLogout={this.handleLogout}
        handleInput={this.handleInput}
      />
      <Switch>

       <Route exact path="/"
       render={() => {
        return (
          <HomeContainer isLoggedIn={this.state.isLoggedIn} />
        )
      }}
      />

      <Route path='/Main'
      render={() => {
        return (
          <MainContainer isLoggedIn={this.state.isLoggedIn} />
        )
      }}
      />
      </Switch>


      </div>
    );
  }
}

export default App;
