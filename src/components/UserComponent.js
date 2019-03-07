import React, { Component } from 'react';

class UserComponent extends Component {
  render() {
    return (
      <div className="user-info">
        <h3>{this.props.user.userPhoto}</h3>
        <h3>{this.props.user.userFullName}</h3>
        <h3>{this.props.user.userCity}</h3>
        <h3>{this.props.user.userJoinDate}</h3>
        {/* [] REMOVE EMAIL, JUST FOR TESTING */}
        <h3>{this.props.user.userEmail}</h3>
      </div>
    );
  }
}

export default UserComponent;
