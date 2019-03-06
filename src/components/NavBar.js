import React, {Component} from 'react';
import UserAuth from './UserAuth/UserAuth';
import { Navbar, NavItem } from 'react-materialize'; 
import "./NavBar.css"



class Nav extends Component {

    render(){

        let navBarItems = [];
        if(this.props.isLoggedIn){
            navBarItems.push(<NavItem key={1} href="/logout">
            <button
            className="logOutBtn"
            onClick={this.props.handleLogout}
            >
            Logout
            </button>
            </NavItem>);
        } else{
            navBarItems.push(<UserAuth
                email={this.props.email}
                password={this.props.password}
                message={this.props.message}
                handleSignup={this.props.handleSignup}
                handleLogin={this.props.handleLogin}
                handleLogout={this.props.handleLogout}
                handleInput={this.props.handleInput}
                 key={2} />)
        }

        return(
             <Navbar 
             brand='logo'
             right
             >
             
                {navBarItems}
            </Navbar>

            
        )
    }
}

export default Nav;