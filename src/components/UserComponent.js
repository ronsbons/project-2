import React, { Component } from 'react';

class UserComponent extends Component {
    render() {
        return (
            <div className="userComponent">
                <img id="userPhoto" src='http://static.nfl.com/static/content/public/static/img/fantasy/transparent/512x512/BRA371156.png'/>
                {/* <h3>{this.props.user._id}</h3> */}
                {/* <h3>{this.props.user.userPhoto}</h3> */}
                <h3>{this.props.user.userEmail}</h3>
                <h3>{this.props.user.userCity}</h3>
                <h3>{this.props.user.userJoinDate}</h3>
            </div>
        );
    }
}

export default UserComponent;
