import React, { Component } from "react";
import Post from "./Post";

class PostList extends Component {
  render() {
    let posts = this.props.posts.map( (post) => {
      return (
          <Post 
          key={post._id} 
          post={post} />
      )
    });
    return (
    <ul>
    {posts}
    </ul> 
      );
  }
}

export default PostList;
