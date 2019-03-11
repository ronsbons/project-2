import React, { Component } from "react";
import PostList from "../components/PostList.js";

class CityPostContainer extends Component {
  render() {
    if (this.props.posts === null) {
      return <div className="city-post-container" />;
    } else {
      return (
        <div className="city-post-container">
<<<<<<< HEAD
=======
          <h5>Posts</h5>
>>>>>>> 9f457f247d567e46ac8b3707990d1af08dae3cb3
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
