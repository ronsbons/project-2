import React, { Component } from 'react';
import UserComponent from '../components/UserComponent';
import UserForm from '../components/UserForm';
import PostContainer from "./PostContainer";
import UserModel from '../models/UserModel';

class UserContainer extends Component {
<<<<<<< HEAD
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
=======
    state = {
        user: this.props.user,
    };

    updateUser = (userId, userBody)  => {
      UserModel.update(userId, userBody).then((res) => {
        let user = res.data
        this.setState({user:user})
      })
    }
>>>>>>> Jon

  render() {
    return (
      <div className="userContainer">
<<<<<<< HEAD
       <UserComponent user={this.state.user} />
       <UserForm user={this.state.user} updateUser={this.updateUser} />
        <PostContainer user={this.state.user} />
=======
       <UserComponent 
       className="userComponent"
       user={this.state.user} 
       updateUser={this.updateUser}
       />
        <PostContainer 
        className="postContainer"
        user={this.props.user}
        />
>>>>>>> Jon
      </div>
    );
  }
}

export default UserContainer;
