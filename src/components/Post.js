import React, { Component } from "react";

class Post extends Component {
  render() {
    return (
      <li data-posts-index={this.props.post.id}>
        <a href="#">{this.props.post.postTitle}</a>
      </li>
    );
  }
}

export default Post;
