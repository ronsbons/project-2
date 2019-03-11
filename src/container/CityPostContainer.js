import React, { Component } from "react";
import PostList from "../components/PostList.js";

class CityPostContainer extends Component {
  render() {
    if (this.props.posts === null) {
      return <div className="city-post-container" />;
    } else {
      return (
        <div className="city-post-container">
          <h6>CityPostContainer</h6>
          <PostList
            posts={this.props.posts}
            user={this.props.user}
          />
        </div>
      );
    }
  }
}

export default CityPostContainer;
