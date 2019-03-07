import React, { Component } from "react";
import PostDetail from './PostDetail';

class Post extends Component {
  render() {
    return (
      <li data-posts-index={this.props.post.id}>
        <PostDetail />
      </li>
    );
  }
}

export default Post;
