import React, { Component } from "react";
import Nav from "./components/NavBar";
import HomeContainer from "./container/HomeContainer";
import UserContainer from "./container/UserContainer.js";
import CityContainer from "./container/CityContainer.js";
import { Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    isLoggedIn: false,
    email: "",
    user: "",
    password: "",
    loginMessage: "",
    signupMessage: ""
  };

  componentDidMount() {
    this.verify();
  }

  verify = () => {
    console.log("verify");
    if (localStorage.token) {
      axios({
        method: "GET",
        // url: "https://stark-chamber-26373.herokuapp.com/user",
        url: 'http://localhost:3001/user',
        headers: { authorization: `Bearer ${localStorage.token}` }
      })
        .then(response => {
          console.log(response.data);
          this.setState({
            isLoggedIn: true,
            user: response.data
          });
        })
        .catch(error => {
          console.log("axios get header bearer: ", error);
        });
    } else {
      this.setState({
        isLoggedIn: false
      });
    }
  };

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  // Handle user signup/login input
  handleLogin = event => {
    event.preventDefault();
    axios
      // .post("https://stark-chamber-26373.herokuapp.com/user/login", {
      .post("http://localhost:3001/user/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        // debugger;
        localStorage.token = response.data.signedJwt;
        this.setState({
          isLoggedIn: true,
          user: response.data.user
        });
        this.verify();
      })
      .catch(error => {
        this.setState({
          loginMessage: "Email/Password incorrect"
        });
      });
  };

  // Handles user signup
  handleSignup = event => {
    event.preventDefault();
    axios
      // .post("https://stark-chamber-26373.herokuapp.com/user/signup", {
      .post("http://localhost:3001/user/signup", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        localStorage.token = response.data.signedJwt;
        this.setState({
          isLoggedIn: true,
          user: response.data.user
        });
        this.verify();
      })
      .catch(error => {
        this.setState({
          signupMessage: "Email address already exists"
        });
      });
  };

  // Handle user logout
  handleLogout = event => {
    this.setState({
      email: "",
      password: "",
      isLoggedIn: false
    });
    localStorage.clear();
  };

  render() {
    return (
      <div className="App container">
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
          <Route
            exact
            path="/"
            render={() => {
              if (this.state.isLoggedIn) {
                return <Redirect to="/profile" />;
              } else {
                return <HomeContainer />;
              }
            }}
          />
          <Route
            exact
            path="/profile"
            render={() => {
              if (this.state.isLoggedIn) {
                return <UserContainer user={this.state.user} />;
              } else {
                return <Redirect to="/" />;
              }
            }}
          />

          <Route
            exact
            path="/cities"
            render={() => {
              if (this.state.isLoggedIn) {
                return <CityContainer user={this.state.user} />;
              } else {
                return <Redirect to="/" />;
              }
            }}
          />

          {/* https://stackoverflow.com/questions/45898789/react-router-pass-param-to-component */}
        </Switch>
      </div>
    );
  }
}

export default App;
