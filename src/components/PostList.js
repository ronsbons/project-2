import React, { Component } from "react";
import Post from "./Post";

class PostList extends Component {
  render() {
    let posts = this.props.posts.map( (post) => {
      return (
        <Post 
          key={post._id} 
          post={post}
          deletePost={this.props.deletePost}
          updatePost={this.props.updatePost}
          user={this.props.user}
        />
      )
    });
    return (
    <ul className='fw2 gray mt0'>
    {posts}
    </ul> 
      );
  }
}

export default PostList;
