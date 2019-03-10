import React, {Component} from 'react';
import './UserAuth.css'

class UserAuth extends Component{
    render(){
        let handleInput = this.props.handleInput
        let handleSignup = this.props.handleSignup
        let handleLogin = this.props.handleLogin
        
        let signUpError = this.props.signupMessage
        let loginError = this.props.loginMessage

        return(
                <div>
                    <section id="userAuth">
                        <div className="login">
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
                        <div className="signup">
                            <h4>Signup</h4>
                            <span
                                className="errorMessage"
                                >{signUpError}</span>
                            <form className="signup" 
                            onSubmit={handleSignup}
                            >
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
                                <button
                                className="signupButton"
                                type="submit"
                                >Sign up
                                </button>
                             </form>
                            </div>
                    </section>
            </div>
            
        )
    }
}

export default UserAuth;