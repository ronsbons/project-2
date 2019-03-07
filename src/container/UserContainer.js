import React, { Component } from 'react';
import UserModel from '../models/UserModel.js';
import UserComponent from '../components/UserComponent';
import UserForm from '../components/UserForm';
import PostContainer from "./PostContainer";

class UserContainer extends Component {
    state = {
        user: {
            userPhoto: '',
            userFullName: '',
            userCity: '',
            userJoinDate: ''
        }

    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        console.log('triggered fetch')
        UserModel.allUsers().then((res) => {
            console.log(res)
            this.setState({user: res.data[0]});
        }).catch((err)=>{
            console.log(err)
        })
    }

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
