import React, { Component } from 'react';
import User from './User';

class UserComponent extends Component {
    render(){
        let userComponent = this.props.userComponent.map( (user) => {
            return (
                <User
                key={user._id}
                user={user} />
            )
        })

        return(
            <ul>
                {userComponent}
            </ul>
            

        )
    }
}

export default UserComponent;