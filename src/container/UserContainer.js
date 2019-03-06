import React, {Component} from 'react';
import UpdateUserForm from '../components/UpdateUserForm';


class UserContainer extends Component {
  state = {
    user: this.props.user,
  };

  render(){
    return(
      <div>
        <p>Working</p>
        <UpdateUserForm user={this.state.user} updateUserFullName={this.props.updateUserFullName} />
      </div>
    )
  }
}

export default UserContainer;