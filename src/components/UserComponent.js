import React, { Component } from 'react';

class UserComponent extends Component {
    render() {
        return (
            <div>
                This is the UserComponent
{/* 
                <h3>{this.props.user.userPhoto}</h3> */}
                <h3>{this.props.user.userFullName}</h3>
                <h3>{this.props.user.userCity}</h3>
                <h3>{this.props.user.userJoinDate}</h3>


                {/* <li
                data-users-index={this.props.user.id}>
                    <span>{this.props.todo.body}</span>
                </li> */}
            </div>
        );
    }
}

export default UserComponent;
