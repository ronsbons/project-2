import React, {Component} from 'react';
import UserAuth from './UserAuth/UserAuth';
import {Link} from 'react-router-dom';

class NavBar extends Component {

    render(){
        let navBarItems = [];
        if(this.props.isLoggedIn){
            navBarItems.push(
            <div>
                <div className='ui buttons'>
                    <button className='ui button orange' onClick={this.props.handleLogout}>
                        Logout
                    </button>
                </div>
                <div className="float-right">
                <div className='ui button orange' >
                   <Link className='right floated' to="/cities"> Cities </Link>  
                </div>
                
                <div className='ui button orange'>
                    <Link to="/profile"> Profile </Link> 
                </div>
            </div>
            </div>
            );
        } else {
            navBarItems.push(
                <div>
                    <UserAuth
                        email={this.props.email}
                        password={this.props.password}
                        signupMessage={this.props.signupMessage}
                        loginMessage={this.props.loginMessage}
                        handleSignup={this.props.handleSignup}
                        handleLogin={this.props.handleLogin}
                        handleLogout={this.props.handleLogout}
                        handleInput={this.props.handleInput}
                        fluid
                        key={1}
                    />
                </div>
            )
        }

        return(
            <div className="pa3 pa4-ns">
            
                <div className='right floated'>
                        {navBarItems}
                </div>
                <div className="black b f1 f-headline-ns tc db mb3 mb4-ns">
                    <h1 className="fw6 sans-serif tracked-tight mt0 w-auto dib highlight-header">
                        Wa<span className='letterY fw7'>y</span>ƒarer
                    </h1>
                         
                </div>
                    
            </div>
            
        )
    }
}

export default NavBar;
