import React, {Component} from 'react';
import UserAuth from './UserAuth/UserAuth';
import { Navbar, NavItem } from 'react-materialize'; 
// import {
//     Switch,
//     Route,
//     Link
// } from 'react-router-dom';

class Nav extends Component {
    render(){

        let navBarItems = [];
        if(this.props.isLoggedIn){
            navBarItems.push(<NavItem key={1} href="/logout"></NavItem>);
        } else{
            navBarItems.push(<UserAuth
                email={this.props.email}
                password={this.props.password}
                handleSignup={this.props.handleSignup}
                handleLogin={this.props.handleLogin}
                handleLogout={this.props.handleLogout}
                handleInput={this.props.handleInput}
                 key={2} />)
        }

        return(
            <Navbar id="navBarItems">
                {navBarItems}
            </Navbar>
            
        )
    }
}

export default Nav;