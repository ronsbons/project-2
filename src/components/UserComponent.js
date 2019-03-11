import React, { Component } from 'react';
import UserForm from './UserForm';

class UserComponent extends Component {
    state = {
        open:false
    };

    handleClose = () => {
        document.getElementById('userProfileModal').style.display='none';
    };

    handleOpen = () => {
        document.getElementById('userProfileModal').style.display='block';
    };

    render() {
        return (
            <div className="mw6 center bg-white br3 pa3 pa3-ns mv6 ba b--black-10">
                <img className='pa1 ba b--black-10 h5 w5' id="userPhoto" src='http://static.nfl.com/static/content/public/static/img/fantasy/transparent/512x512/BRA371156.png'/>
                {/* <h3>{this.props.user._id}</h3> */}
                {/* <h3>{this.props.user.userPhoto}</h3> */}
                <h3 className="f2 mb2">{this.props.user.userFullName}</h3>
                <h3 className='f4 fw4 gray mt0'>Home City - {this.props.user.userCity}</h3>
                <h3> Join Date -{this.props.user.userJoinDate}</h3>
                <UserForm 
                  user={this.props.user}
                  updateUser={this.props.updateUser}
                />
            </div>
        );
    }
}

export default UserComponent;

