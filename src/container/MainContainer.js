import React, {Component} from 'react';
import CityContainer from './CityContainer'
import UserContainer from './UserContainer';
import Axios from 'axios';

class MainContainer extends Component {
  // [] THE AXIOS GET CALL HERE WOULD BE DOING THE SAME THING AS IN APP.JS. DO WE NEED THIS HERE? OR COULD THE LOGGED IN USER SAVED TO STATE.USER BE PASSED DOWN AND ACCESSED AS A PROP, LIKE BELOW?
  state = {
      user: this.props.user,
  };

  // [] DO WE NEED TO DEFINE DIFFERENT FUNCTIONS FOR UPDATE FULLNAME, UPDATE CITY, AND UPDATE PHOTO?
  // values of userId and userBody will be passed in in UpdateUserForm.js <this.props.updateUser(user._id, user)
  updateUserFullName = (userId, userFullName) => {
    // return the user to be updated
    function isUpdatedUser(user) {
      return user._id === userId;
    };

    Axios.put(`http://localhost:3001/user/${userId}`, userFullName).then( (response) => {
      let user = this.state.user;
      // [] SINCE STATE SHOULD ONLY BE ONE USER THAT'S LOGGED IN AT ONE TIME, I TOOK OUT THE .FIND METHOD. WILL THIS WORK?
      isUpdatedUser(user).userFullName = response.data.userFullName;
      this.setState({
          user: user,
      });
    });
  };

  render(){
    return(
      <div>
        <CityContainer />
        <UserContainer user={this.state.user} updateUserFullName={this.updateUserFullName} />
      </div>
    );
  }
}

export default MainContainer;