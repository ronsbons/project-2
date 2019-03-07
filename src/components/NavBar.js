import React, {Component} from 'react';
import UserAuth from './UserAuth/UserAuth';
import {Link} from 'react-router-dom';
import "./NavBar.css"



class NavBar extends Component {

    render(){
        let navBarItems = [];
        if(this.props.isLoggedIn){
            navBarItems.push(
                <div>
                <li>
                <button
                    className="logOutBtn"
                    onClick={this.props.handleLogout}>
                    Logout
                </button>
                </li>

                <li>
                   <Link to="/cities">
                    Cities
                    </Link>  
                </li>

                <li>
                <Link to="/profile">
                Profile</Link> 
                </li>
                </div>
            );
        } else{
            navBarItems.push(
                <li>
                <UserAuth
                email={this.props.email}
                password={this.props.password}
                signupMessage={this.props.signupMessage}
                loginMessage={this.props.loginMessage}
                handleSignup={this.props.handleSignup}
                handleLogin={this.props.handleLogin}
                handleLogout={this.props.handleLogout}
                handleInput={this.props.handleInput}
            
                 />
                </li>
                )
        }

        return(
             <nav>
                <ul>
                    {navBarItems}
                </ul>
             </nav>       
            
        )
    }
}

export default NavBar;