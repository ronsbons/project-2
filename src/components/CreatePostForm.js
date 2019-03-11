import React, { Component } from "react";
import {Modal, ModalHeader, ModalContent, ModalDescription} from "semantic-ui-react";

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
      city: this.props.city,
      user: this.props.user,
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
      <Modal
      trigger={<button>+</button>}
      >
        <ModalHeader>Create A Post</ModalHeader>
        <ModalContent>
          <ModalDescription>
        <div>
        <form className='ui form' onSubmit={this.handleSubmit}>
          <h3>Create a New Post</h3>
          <label htmlFor="title"></label>
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
          <button className='ui button orange'>Submit</button>
        </form>
      </div>
          </ModalDescription>
        </ModalContent>
       
      </Modal>
    );
  }
}

export default CreatePostForm;
