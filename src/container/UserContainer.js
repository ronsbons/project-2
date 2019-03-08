import React, { Component } from 'react';
import UserComponent from '../components/UserComponent';
import UserForm from '../components/UserForm';
import PostContainer from "./PostContainer";
import UserModel from '../models/UserModel';

class UserContainer extends Component {
  state = {
    user: this.props.user,
  };

  updateUser = (userId, userBody) => {
    UserModel.update(userId, userBody).then( (response) => {
      console.log(response.data);
      let user = response.data;
      this.setState({
        user: user,
      });
    });
  };

  render() {
    return (
      <div className="userContainer">
       <UserComponent 
       className="userComponent"
       user={this.state.user} 
       updateUser={this.updateUser}
       />
        <PostContainer 
        className="postContainer"
        user={this.props.user}
        />
      </div>
    );
  }
}

export default UserContainer;
