import React, {Component} from 'react';
import Modal from '@material-ui/core/Modal';
import './UserAuth.css'
import { builtinModules } from 'module';

class UserAuth extends Component{
    state= {
        open:false
    }

    handleOpen = () => {
        this.setState ({
            open:true
        })
    }

    handleClose = () => {
        this.setState({
            open:false
        })
    }


    render(){
        return(
                <div>
                    <button
                    id="loginBtn"
                    onClick={this.handleOpen}
                    >
                        Login/Signup
                    </button>
                    <Modal
                    open={this.state.open}
                    onClose={this.handleClose}
                    >
                    <section id="userAuth">
                        <div className="login">
                            <h4>Login</h4>
                            <form className="login" >
                                <input
                                 type="text"
                                 placeholder="Username"
                                />
                                <input
                                type="text"
                                placeholder="Password"
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
                            <form className="signup" >
                                <input
                                type="text"
                                placeholder="UserName"
                                />
                                <input
                                type="text"
                                placeholder="Password" 
                                />
                                <input 
                                type="text"
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
                </Modal>
            </div>
            
        )
    }
}

export default UserAuth;