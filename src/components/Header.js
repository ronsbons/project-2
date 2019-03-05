import React, {Component} from 'react';
import NavBar from "./NavBar";

class Header extends Component {
    render(){
        return (
            <div>
                <NavBar isLoggedIn={this.props.isLoggedIn}/>
            </div>
        )
    }
};

export default Header;
