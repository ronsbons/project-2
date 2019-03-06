import React, { Component } from "react";

class PostDetail extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.post.postTitle}</h1>
        <h2>{this.props.post.user.userEmail}</h2>
        <p>{this.props.post.postContent}</p>
      </div>
    );
  }
}

export default PostDetail;
