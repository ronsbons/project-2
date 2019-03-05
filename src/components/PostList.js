import React, { Component } from "react";
import Post from "./Post";

class PostList extends Component {
  render() {
    let posts = this.props.posts.map(post => {
      return (
        <div>
          <Post 
          key={post._id} 
          post={post} />
        </div>
      );
    });
    return <ul>{posts}</ul>;
  }
}

export default PostList;
