import React, { Component } from 'react';
import UserModel from '../models/UserModel.js';
import UserComponent from '../components/UserComponent';
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

  render() {

    return (
      <div className="userContainer">
       <UserComponent user={this.state.user} />
        <PostContainer />
      </div>
    );
  }
}

export default UserContainer;
