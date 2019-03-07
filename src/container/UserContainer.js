import React, { Component } from "react";
import PostContainer from "./PostContainer";
class UserContainer extends Component {
  render() {

    return (
      <div className="userContainer">
        <h1>This is the user Container</h1>
        <PostContainer />
      </div>
    );
  }
}

export default UserContainer;
