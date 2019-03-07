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
       <UserComponent user={this.state.user} />
       {/* <UserComponent user={this.state.user} {/*updateUser={this.updateUser}/> */}
       <UserForm user={this.state.user} updateUser={this.updateUser} />
        <PostContainer />
      </div>
    );
  }
}

export default UserContainer;
