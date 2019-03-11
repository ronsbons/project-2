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

                <div >
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
            <div className="tc pa3 pa4-ns">
            
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

{/* <nav class="pa3 pa4-ns">
<a class="link dim black b f1 f-headline-ns tc db mb3 mb4-ns" href="#" title="Home">Site Name</a>
<div class="tc pb3">
  <a class="link dim gray f6 f5-ns dib mr3" href="#" title="Home">Home</a>
  <a class="link dim gray f6 f5-ns dib mr3" href="#" title="About">About</a>
  <a class="link dim gray f6 f5-ns dib mr3" href="#" title="Store">Store</a>
  <a class="link dim gray f6 f5-ns dib" href="#" title="Contact">Contact</a>
</div>
</nav> */}