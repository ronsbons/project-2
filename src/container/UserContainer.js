import React, { Component } from 'react';
import UserModel from '../models/UserModel.js';
import UserComponent from '../components/UserComponent';
import UserForm from '../components/UserForm';
import PostContainer from "./PostContainer";

class UserContainer extends Component {
    state = {
        user: this.props.user,
    };

    updateUser = (userId, userBody)  => {
      UserModel.update(userId, userBody).then((res) => {
        let user = res.data
        this.setState({user:user})
      })
    }

  render() {

    return (
      <div className="userContainer userComp">
      <div className="fl w-50 tc">
        <UserComponent 
        className="userComponent"
        user={this.state.user} 
        updateUser={this.updateUser}
         />
      </div>
      <div className="fl w-50 tc" >
        <PostContainer 
        className="postContainer"
        user={this.props.user}
        />
      </div>

      </div>
    );
  }
}

export default UserContainer;