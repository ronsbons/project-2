import React, {Component} from 'react';
import NavBar from "./NavBar";

class Header extends Component {

    handleInput (event) {
        this.setState({
          userName: event.target.value.Username,
          password:event.target.value.password,
          email:event.target.value.email
        })
      }
    
      // Handle user signup/login input
      handleLogin = (event) => {
      }
     
      // Handles user signup 
      handleSignup = (event) => {
      }
    
       // Handle user logout
       handleLogout = (event) => {
    
      }
    
    render(){
        return (
            <div>
                <NavBar isLoggedIn={this.props.isLoggedIn}/>
            </div>
        )
    }
};

export default Header;
