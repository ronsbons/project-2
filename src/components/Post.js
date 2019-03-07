import React, { Component } from "react";
import PostDetail from './PostDetail';

class Post extends Component {
  showPost = (event) => {
    event.preventDefault();
  };
  
  render() {
    return (
      <li data-posts-index={this.props.post.id}>
        <a href="#">{this.props.post.postTitle}</a>
        <PostDetail />
      </li>
    );
  }
}

export default Post;
