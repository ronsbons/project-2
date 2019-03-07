import React, { Component } from "react";
import PostDetail from './PostDetail';

class Post extends Component {
  showPost = (event) => {
    event.preventDefault();
  };
  
  render() {
    return (
      <li data-posts-index={this.props.post.id}>
        <PostDetail />
      </li>
    );
  }
}

export default Post;
