import React, {Component} from 'react';
import UserAuth from './UserAuth/UserAuth';
import {
    Container,
    Divider,
    Dropdown,
    Grid,
    Header,
    Image,
    List,
    Menu,
    Segment,
    MenuItem,
  } from 'semantic-ui-react';
import {Link} from 'react-router-dom';



class NavBar extends Component {

    render(){
        let navBarItems = [];
        if(this.props.isLoggedIn){
            navBarItems.push(
            <Menu.Menu position='right'>
            <MenuItem>
                    <button
                        className="logOutBtn"
                        onClick={this.props.handleLogout}>
                        Logout
                    </button>
                </MenuItem>

               <MenuItem>
                   <Link to="/cities">
                        Cities
                    </Link>  

                </MenuItem>
                
                <MenuItem>
                <Link to="/profile">
                Profile</Link> 
                </MenuItem>

            </Menu.Menu>
                
            );
        } else{
            navBarItems.push(
                <Menu.Menu position='right'>
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

                </Menu.Menu>

                )
        }

        return(
            <div>
                <Menu inverted>
            
                <Menu.Item as='a' header>
                <Image size='mini' 
                src='https://cdn.shopify.com/s/files/1/1321/6369/products/duck-react_d70b50e7-3ee8-4919-85f2-227f64c17b6e_1024x1024.png?v=1518578570' 
                style={{ marginRight: '1.5em' }} />
                WayFare
                 </Menu.Item>
                 <Container>
                     {navBarItems}
                 </Container>
                
                </Menu>
                
            </div>
               
        )
    }
}

export default NavBar;