import React, {Component} from 'react';
import UserAuth from './UserAuth/UserAuth';
import {Link} from 'react-router-dom';

class NavBar extends Component {

    render(){
        let navBarItems = [];
        if(this.props.isLoggedIn){
            navBarItems.push(
            <div>
                <div>
                    <button onClick={this.props.handleLogout}>
                        Logout
                    </button>
                </div>

                <div>
                   <Link to="/cities"> Cities </Link>  
                </div>
                
                <div>
                    <Link to="/profile"> Profile </Link> 
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
                <div>
                    <div className="link dim black b f1 f-headline-ns tc db mb3 mb4-ns">
                    <h1 className="bg-gold fw6 sans-serif tracked-tight mt0 w-auto dib highlight-header">
                    Wa<span className='letterY fw6'>y</span>Farer
                    </h1>
                         
                    </div>
                    <div></div>
                    <div className="link dim gray f6 f5-ns dib mr3">
                        {navBarItems}
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar;
