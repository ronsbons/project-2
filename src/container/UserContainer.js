import React, { Component } from 'react';
import UserModel from '../models/UserModel.js';
import UserComponent from '../components/UserComponent';


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

    render(){
        return(
            <div>
                <h2>User Profile</h2>
                <UserComponent user={this.state.user} />
            </div>
        )
    }
}

export default UserContainer;