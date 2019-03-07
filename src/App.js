import React, { Component } from 'react';
import Nav from "./components/NavBar";
import HomeContainer from './container/HomeContainer';
import MainContainer from './container/MainContainer.js';
import {
  Route,
  Switch,
  Redirect,
  withRouter
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
  // UPON LOGIN, HOMECONTAINER COMPONENT SHOULD RENDER IN LOCALHOST:3000, SO THEN THIS SHOULD RUN
  // [] BUT UPON LOGIN, HOMECONTAINER COMPONENT DOESN'T RENDER, I'M STILL ON LANDING PAGE
  componentDidMount() {
    this.verify()
  };


  verify = () => {
    console.log('verify')
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
  }

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
        // debugger;
        localStorage.token = response.data.signedJwt
        this.setState({
            isLoggedIn: true,
            user: response.data.user
        })
        this.verify()
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
    axios.post('http://localhost:3001/user/signup',{
        email:this.state.email,
        password:this.state.password
    })
    .then( response => {
        localStorage.token = response.data.signedJwt
        this.setState({
            isLoggedIn: true,
            user: response.data.user
        })
        this.verify()
    })
    .catch( error => {
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
              if(this.state.isLoggedIn){
                return(
                  <Redirect to="/profile" />
                )
              }else {
                return (
                  <HomeContainer isLoggedIn={this.state.isLoggedIn} />
                )
              }
            }}
          />

          <Route exact path="/profile"
            render={() => {
              if(this.state.isLoggedIn){
                return(
                  <h1>profile</h1>
                )
              } else {
                return(
                  <Redirect to="/" />
                )
                
              }
              
            }}
          />

          <Route path='/main'
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
