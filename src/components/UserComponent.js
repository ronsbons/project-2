import React, { Component } from 'react';
import UserForm from './UserForm';

class UserComponent extends Component {
    state = {
        open:false
    }

    handleClose= () => {
        document.getElementById('userProfileModal').style.display='none';
    }

    handleOpen= () => {
        document.getElementById('userProfileModal').style.display='block';
    }
    render() {
        return (
            <div>
                <h3>{this.props.user._id}</h3>
                <h3>{this.props.user.userPhoto}</h3>
                <h3>{this.props.user.userFullName}</h3>
                <h3>{this.props.user.userCity}</h3>
                <h3>{this.props.user.userJoinDate}</h3>

                <button
                onClick={this.handleOpen}
                >
                Modal
                </button>
                <div 
                id="userProfileModal">
                <h1
                onClick={this.handleClose}
                >X</h1>
                   <UserForm user={this.props.user} />

                </div>
            </div>
        );
    }
}

export default UserComponent;
