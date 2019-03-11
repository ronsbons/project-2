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
            <Modal id="loginModal"
            trigger={
                <div className='ui large buttons right floated'>
                    <button className='ui button orange'>LogIn</button><div className='or'></div>
                    <button className='ui button black'>SignUp</button>
                </div>}>
                <Modal.Content className='tc' >
                    <h4 className='tc f2'>Login</h4>
                    <span className="errorMessage">{loginError}</span>
                    <form className="login ui form" onSubmit={handleLogin}>
                        <div className='field'>
                            <div className='ui left icon input'>
                                <i className='user icon'></i>
                                <input
                                 type="text"
                                 name="email"
                                 onChange={handleInput}
                                 placeholder="Email"
                                />
                            </div>
                        </div>
                        <div className='field'>
                            <div className='ui left icon input'>
                                <i className='lock icon'></i>
                                <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={handleInput}
                                />
                            </div>
                        </div>
                            <button 
                                className="loginButton f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib white bg-orange"
                                type="submit"
                                >Login
                            </button>
                    </form> 
                    <h4 className='tc f2'>Sign Up</h4>
                    <form className='login ui form' onSubmit={handleSignup}>
                        <span className="errorMessage">{signUpError}</span>
                        <div className='field'>
                            <div className='ui left icon input'>
                                <i className='user icon'></i>
                                <input className=''
                                type="text"
                                name="email"
                                placeholder="Email"
                                onChange={handleInput}
                                />
                            </div>
                        </div>
                        <div className='field'>
                            <div className='ui left icon input'>
                                <i className='lock icon'></i>
                                <input className=''
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={handleInput}/>
                            </div>
                        </div>
                        <button 
                                className="loginButton f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib white bg-orange"
                                type="submit"
                                >SignUp
                            </button>
                    </form>
                </Modal.Content>
            </Modal>           
        )
    }
}


export default UserAuth;
