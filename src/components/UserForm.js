import React, { Component } from 'react';

class UpdateUserForm extends Component {
  state={
    user: {
      userFullName: "",
      userCity: ""
    }
  }

  componentDidMount() {
    console.log('USER');
    console.log(this.props.user);
    this.setState({
        user: this.props.user
    });
  }

  onInputChange = (event) => {
    let user = this.state.user;
    user[event.target.name] = event.target.value;

    this.setState({
      user: user
    });

    console.log(this.state.user)
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    let user = this.state.user
    this.props.updateUser(user, '5c80599dd1a625547d631928')
    user = ""
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input 
          name="userFullName"
          onChange={this.onInputChange}
          type="text"
          placeholder="Name"
          value={(this.state.user.userFullName) || ""}
          />
          <input 
          name="userCity"
          onChange={this.onInputChange}
          type="text"
          placeholder="Current City"
          value={(this.state.user.userCity) || ""}
          />
          <button type="submit">Change</button>
        </form>
      </div>
    );
  }
}

export default UpdateUserForm;