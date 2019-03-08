import React, { Component } from "react";
import PostsModel from "../models/PostsModel";
import PostList from "../components/PostList";

class PostContainer extends Component {
  state = {
    posts: [],
    post: null,
    userId: this.props.user._id
  };


  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    PostsModel.allUserPosts(this.state.userId).then(res => {
      console.log(res);
      this.setState({
        posts: res.data,
        post: res.data[0]
      });
      console.log(this.state.posts);
      console.log(this.state.post);
    }).catch( (error) => {
      console.log('retrieving user posts error: ', error);
    });
  };

  deletePost = (post) => {
    PostsModel.deleteUserPosts(post).then((res) => {
      let posts = this.state.posts.filter(function(post) {
        return post._id !== res.data._id
      });
      this.setState({ posts });
    })
  }

  render() {
    if (this.state.post === null) {
      return (
        <div className="postsConstainer" />
      )
    } else {
      return (
        <div className="postsConstainer">
          <h2>This is a post container</h2>
          <PostList 
          posts={this.state.posts} 
          deletePost={this.deletePost}
          />
        </div>
      );
    }
  }
}

export default PostContainer;
