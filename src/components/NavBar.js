import React, {Component} from 'react';
import UserAuth from './UserAuth/UserAuth';
import { Navbar, NavItem } from 'react-materialize'; 
// import {
//     Switch,
//     Route,
//     Link
// } from 'react-router-dom';

class NavBar extends Component {
    render(){

        let navBarItems = [];
        if(this.props.isLoggedIn){
            navBarItems.push(<NavItem key={1} href="/logout"></NavItem>);
        } else{
            navBarItems.push(<UserAuth key={2} />)
        }

        return(
            <div id="navBarItems">
                {navBarItems}
            </div>
            
        )
    }
}

export default NavBar;