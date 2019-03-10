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
            id="loginModal"
            trigger={<button>Login/Signup</button>}>
              <Modal.Header>Please Signup/Login</Modal.Header>
              <Modal.Content >

                        <div className="bg-gold mw7 center pa4 br2-ns ba b--black-10">
                            <h4>Login</h4>
                            <span
                                className="errorMessage"
                                >{loginError}</span>
                            <form className="login"
                            onSubmit={handleLogin}
                             >
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
                                <button 
                                className="loginButton"
                                type="submit"
                                >Login
                                </button>
                            </form> 
                        </div>
                    </Modal.Content>
                    <Modal.Header>Please Signup/Login</Modal.Header>
                  <Modal.Content >
                <div className="bg-gold mw7 center pa4 br2-ns ba b--black-10">
                    <h4>Login</h4>
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
                </div>
            </Modal.Content>
        </Modal>
        )
    }
}

export default UserAuth;