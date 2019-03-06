import React, { Component } from 'react';

// [] DO WE NEED A SEPARATE UPDATE FORM FOR EACH FIELD TO BE UPDATED? UPDATEFULLNAMEFORM, UPDATECITYFORM?
class UpdateUserForm extends Component {
  // this.props.user._id will come from this.props.user passed down through where axios call is made to get user back from database
  // [] SHOULD IT BE APP.JS OR MAINCONTAINER.JS?
  state = {
    user: {
      _id: this.props.user._id,
      userFullName: this.props.user.userFullName,
      userCity: this.props.user.userCity,
    },
  };

  onSubmit = (event) => {
    event.preventDefault();
    let user = this.state.user;
    this.props.udpateUserFullName(user._id, user);
    this.setState({
      // [] WHY DO WE SET USERFULLNAME AND USERCITY TO EMPTY STRINGS?
      user: {
        _id: this.props.user._id,
        userFullName: '',
        userCity: '',
      },
    });
  };

  onChange = (event) => {
    this.setState({
      user: {
        _id: this.props.user._id,
        [event.target.name]: [event.target.value],
      },
    });
  };

  render() {
    return (
      <div className="updateUserForm">
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="userFullName"
            placeholder="Update your name"
            value={(this.state && this.state.user.userFullName) || ''}
            onChange={this.onChange} />
          <input
            type="text"
            name="userCity"
            placeholder="Update your current city"
            value={(this.state && this.state.user.userCity) || ''}
            onChange={this.onChange} />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  };
};

export default UpdateUserForm;
