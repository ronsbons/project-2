import React, { Component } from "react";
import PostDetail from './PostDetail';

class Post extends Component {
  render() {
    return (
      <li key={this.props.post.id}>
        <PostDetail post={this.props.post}/>
      </li>
    );
  }
}

export default Post;
