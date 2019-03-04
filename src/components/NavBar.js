import React,{Component} from 'react';
import {
    Switch,
    Route,
    Link
} from 'react-router-dom';

class NavBar extends Component {
    render(){
        return(
            <div>
                Login/Signup
                <section id="toggleThingy">
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
                             <button className="loginButton"
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
                                    <button className="signupButton"
                                        type="submit"
                                        >Sign up
                                        </button>
                             </form>
                            </div>

                    </section>
                
                Logout/ Regular NavBar
                </div>
            
        )
    }
}

export default NavBar;