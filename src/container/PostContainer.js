import React, { Component } from "react";
import PostsModel from "../models/PostsModel";
import PostList from "../components/PostList";

class PostContainer extends Component {
  state = {
    userId: this.props.user._id,
    posts: [],
    post: null
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    PostsModel.getUserPosts(this.state.userId).then(res => {
      console.log(res);
      this.setState({
        posts: res.data,
        post: res.data[0]
      });
      console.log(this.state.posts);
      console.log(this.state.post);
    });
  }

  render() {
    if (this.state.post === null) {
      return <div className="postsContainer" />;
    } else {
      return (
        <div className="postsContainer">
          <h2>This is a post container</h2>
          <PostList posts={this.state.posts} />
        </div>
      );
    }
  }
}

export default PostContainer;
