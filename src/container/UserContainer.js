import React, {Component} from 'react';
import UserComponent from '../components/UserComponent';
import UserModel from '../models/UserModel';


class UserContainer extends Component {
    constructor(){
        super()
        this.state = {
            userComponent: []
        }
    }
    componentDidMount(){
        this.fetchData()
    }
    fetchData(){
        UserModel.allUsers().then( (res) => {
            this.setState ({
                userComponent: res.data.userComponent,
                user: ''

            })
        })
    }
    render(){
        return(
            <div className='userComponent'>
                <UserComponent
                UserComponent={this.state.userComponent} />
            </div>
        )
    }
}

export default UserContainer;