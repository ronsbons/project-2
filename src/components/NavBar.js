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
            <div className="pa3 pa4-ns">
                <div>
                    <div className="link dim black b f1 f-headline-ns tc db mb3 mb4-ns">
                         WayFarer
                    </div>
                    <div className="tc pb3">
                        <div className="link dim gray f6 f5-ns dib mr3">
                            {navBarItems}
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar;