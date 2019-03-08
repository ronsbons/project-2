import React, {Component} from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import './UserAuth.css'


class UserAuth extends Component{

    render(){
        let handleInput = this.props.handleInput
        let handleSignup = this.props.handleSignup
        let handleLogin = this.props.handleLogin
        
        let signUpError = this.props.signupMessage
        let loginError = this.props.loginMessage

        return(
                <Modal 
                className="loginModal"
                trigger={<Button>Login/Signup</Button>}>
                  <Modal.Header>Please Signup/Login</Modal.Header>
                  <Modal.Content >
                    <h4>Login</h4>
                      <form
                      onSubmit={handleLogin}
                      >
                      <span
                       className="errorMessage"
                       >
                       {loginError}
                       </span>

                        <input 
                        type="text"
                        name="email"
                        placeholder="email"
                        onChange={handleInput}
                        />

                        <input
                         type="password"
                         placeholder="Password"
                         name="password"
                         onChange={handleInput}/>

                         <input
                         type="Submit"
                         value="Login"
                         className="loginBtn"
                         />

                      </form>

                  </Modal.Content>

                  <Modal.Header>Please Signup/Login</Modal.Header>
                  <Modal.Content >
                    <h4>Sign Up</h4>
                      <form
                      onSubmit={handleSignup}
                      >
                      <span
                       className="errorMessage"
                       >
                       {signUpError}
                       </span>

                        <input 
                        type="text"
                        name="email"
                        placeholder="email"
                        onChange={handleInput}
                        />

                        <input
                         type="password"
                         placeholder="Password"
                         name="password"
                         onChange={handleInput}/>

                         <input
                         type="Submit"
                         value="Sign Up"
                         className="loginBtn"
                         />

                      </form>

                  </Modal.Content>
                </Modal>

        )
    }
}


export default UserAuth;