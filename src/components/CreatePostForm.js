import React, { Component } from "react";

class CreatePostForm extends Component {
  state = {
    // city: "",
    // user: "5c80599dd1a625547d631929" this.props.user._id,
    postTitle: "",
    postContent: ""
  };

  handleInput = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log("CreatePostForm State", this.state);
  };

  handleSubmit = event => {
    event.preventDefault();
    let post = {
      city: this.props.city._id,
      user: this.props.user._id,
      postTitle: this.state.postTitle,
      postContent: this.state.postContent
    };

    this.props.createPost(post);
    this.setState({
      // city: "",
      // user: this.props.user._id,
      postTitle: "",
      postContent: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>Create a New Post</h3>

          {/* <label htmlFor="city">City</label> */}
          {/* <select
            id="city"
            name="city"
            onChange={this.handleInput}
            style={{ display: "block" }}
          >
            <option value="">Choose City</option>
            <option value="5c80599dd1a625547d631927">Wisconsin</option>
            <option value="5c80599dd1a625547d631926">Colorado</option>
          </select> */}
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="postTitle"
            maxLength="200"
            placeholder="Title"
            onChange={this.handleInput}
          />
          <textarea
            name="postContent"
            required
            placeholder="Type your post here"
            onChange={this.handleInput}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default CreatePostForm;
