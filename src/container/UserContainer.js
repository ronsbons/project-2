import React, { Component } from 'react';
import UserModel from '../models/UserModel.js';
import UserComponent from '../components/UserComponent';
import UserForm from '../components/UserForm';
import PostContainer from "./PostContainer";

class UserContainer extends Component {
    state = {
        user: this.props.user,
    };

    updateUser = (userBody, userId)  => {
      function isUpdated(user) {
        return user._id === userId;
      }
      UserModel.update(userId, userBody).then((res) => {
        let user = this.state.user
        //user.find(isUpdated).body = userBody.body
        this.setState({user:user})
      })
    }

  render() {

    return (
      <div className="userContainer">
       <UserComponent 
       className="userComponent"
       user={this.state.user} />
       {/* <UserForm user={this.state.user} updateUser={this.updateUser} /> */}
        <PostContainer 
        className="postContainer"
        user={this.props.user}
        />
      </div>
    );
  }
}

export default UserContainer;
