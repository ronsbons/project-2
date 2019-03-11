import React, { Component } from "react";
import { Modal, Image, Header } from "semantic-ui-react";

class UserForm extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    console.log("USER");
    console.log(this.props.user);
    this.setState({
      user: this.props.user
    });
  };

  onInputChange = event => {
    let user = this.props.user;
    user[event.target.name] = event.target.value;
    this.setState({
      user: user
    });
    console.log(this.state.user);
  };

  onFormSubmit = event => {
    event.preventDefault();
    let user = this.state.user;
    this.props.updateUser(this.props.user._id, user);
    this.setState({
      user: {
        userCity: "",
        userFullName: ""
      }
    });
  };

  render() {
    return (
      <Modal trigger={<a href="#userForm">Edit Profile</a>}>
        <Modal.Header>Profile</Modal.Header>
        <Modal.Content image>
          <Image
            wrapped
            size="medium"
            src="http://static.nfl.com/static/content/public/static/img/fantasy/transparent/512x512/BRA371156.png"
          />
          <Modal.Description>
            <Header>Profile Details</Header>

            <form className='ui form' onSubmit={this.onFormSubmit}>
              <div className="flex flex-column">
                <h3 className='f3'>Name</h3>
                <input
                  name="userFullName"
                  onChange={this.onInputChange}
                  type="text"
                  placeholder="Name"
                  value={this.state.user.userFullName || ""}
                />
                <h3 className='f3'>Home City</h3>
                <input
                  name="userCity"
                  onChange={this.onInputChange}
                  type="text"
                  placeholder="Current City"
                  value={this.state.user.userCity || ""}
                />
                <br />
                <button className='ui button orange' type="submit">Save Changes</button>
              </div>
            </form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default UserForm;
