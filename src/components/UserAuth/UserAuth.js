import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import "./UserAuth.css";

const styles = theme => ({
  paper: {
    position: "absolute",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: "none"
  }
});
class Navmodal extends Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    const { classes } = this.props;
    let handleInput = this.props.handleInput;
    let handleSignup = this.props.handleSignup;
    let handleLogin = this.props.handleLogin;

    let signUpError = this.props.signupMessage;
    let loginError = this.props.loginMessage;

    return (
      <div>
        <button id="loginBtn" onClick={this.handleOpen}>
          Login/Signup
        </button>
        <Modal open={this.state.open} onClose={this.handleClose}>
          <section id="userAuth" className={classes.paper}>
            <div className="login">
              <h4>Login</h4>
              <span className="errorMessage">{loginError}</span>
              <form className="login" onSubmit={handleLogin}>
                <input
                  type="text"
                  name="email"
                  onChange={handleInput}
                  placeholder="Email"
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleInput}
                />
                <button className="loginButton" type="submit">
                  Login
                </button>
              </form>
            </div>
            <div className="signup">
              <h4>Signup</h4>
              <span className="errorMessage">{signUpError}</span>
              <form className="signup" onSubmit={handleSignup}>
                <input
                  type="text"
                  name="email"
                  // value={this.props.username}
                  onChange={handleInput}
                  placeholder="Email"
                />
                <input
                  type="text"
                  name="password"
                  onChange={handleInput}
                  placeholder="Password"
                />
                <input
                  type="text"
                  name="password"
                  onChange={handleInput}
                  placeholder="Confirm Password"
                />
                <button className="signupButton" type="submit">
                  Sign up
                </button>
              </form>
            </div>
          </section>
        </Modal>
      </div>
    );
  }
}

Navmodal.propTypes = {
  classes: PropTypes.object.isRequired
};

const UserAuth = withStyles(styles)(Navmodal);

export default UserAuth;

// import React, {Component} from 'react';
// import { Button, Header, Image, Modal } from 'semantic-ui-react'
// import './UserAuth.css'

// class UserAuth extends Component{

//     render(){
//         let handleInput = this.props.handleInput
//         let handleSignup = this.props.handleSignup
//         let handleLogin = this.props.handleLogin

//         let signUpError = this.props.signupMessage
//         let loginError = this.props.loginMessage

//         return(
//             <Modal
//             id="loginModal"
//             trigger={<Button floated='right'>Login/Signup</Button>}>
//               <Modal.Header>Please Signup/Login</Modal.Header>
//               <Modal.Content >
//                     {/* <section id="userAuth" className="bg-gold mw7 center pa4 br2-ns ba b--black-10"> */}

//                         <div className="bg-gold mw7 center pa4 br2-ns ba b--black-10">
//                             <h4>Login</h4>
//                             <span
//                                 className="errorMessage"
//                                 >{loginError}</span>
//                             <form className="login"
//                             onSubmit={handleLogin}
//                              >
//                                 <input
//                                  type="text"
//                                  name="email"
//                                  onChange={handleInput}
//                                  placeholder="Email"
//                                 />
//                                 <input
//                                 type="password"
//                                 placeholder="Password"
//                                 name="password"
//                                 onChange={handleInput}
//                                 />
//                                 <button
//                                 className="loginButton"
//                                 type="submit"
//                                 >Login
//                                 </button>
//                             </form>
//                         </div>

//                     </Modal.Content>
//                     <Modal.Header>Please Signup/Login</Modal.Header>
//                   <Modal.Content >
//                 <div className="bg-gold mw7 center pa4 br2-ns ba b--black-10">
//                     <h4>Login</h4>
//                       <form
//                       onSubmit={handleSignup}
//                       >
//                       <span
//                        className="errorMessage"
//                        >
//                        {signUpError}
//                        </span>

//                         <input
//                         type="text"
//                         name="email"
//                         placeholder="email"
//                         onChange={handleInput}
//                         />

//                         <input
//                          type="password"
//                          placeholder="Password"
//                          name="password"
//                          onChange={handleInput}/>

//                          <input
//                          type="Submit"
//                          value="Sign Up"
//                          className="loginBtn"
//                          />

//                       </form>
//                 </div>

//                   </Modal.Content>

//                    </Modal>

//                         // <div className="signup">
//                         //     <h4>Signup</h4>
//                         //     <span
//                         //         className="errorMessage"
//                         //         >{signUpError}</span>
//                         //     <form className="signup"
//                         //     onSubmit={handleSignup}
//                         //     >
//                         //         <input
//                         //         type="text"
//                         //         name="email"
//                         //         // value={this.props.username}
//                         //         onChange={handleInput}
//                         //         placeholder="Email"
//                         //         />
//                         //         <input
//                         //         type="text"
//                         //         name="password"
//                         //         onChange={handleInput}
//                         //         placeholder="Password"
//                         //         />
//                         //         <input
//                         //         type="text"
//                         //         name="password"
//                         //         onChange={handleInput}
//                         //         placeholder="Confirm Password"
//                         //         />
//                         //         <button
//                         //         className="signupButton"
//                         //         type="submit"
//                         //         >Sign up
//                         //         </button>
//                         //      </form>
//                         //      <div></div>

//         )
//     }
// }

// export default UserAuth;
