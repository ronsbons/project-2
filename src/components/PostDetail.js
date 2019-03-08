import React, { Component } from "react";
import { Button, Header, Image, Modal } from 'semantic-ui-react';

 

class PostDetail extends Component {

  render() {
    return (
    <Modal trigger={<a>View</a>}>
    <Modal.Header>City Post</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='https://www.aaronstoychest.co.uk/wp-content/uploads/2017/09/59754444.jpg' />
      <Modal.Description>
        <Header>{this.props.post.postTitle}</Header>
        <p>{this.props.post.postContent}</p>
        <span>{this.props.post.user}</span>
        <div>
        <a
              href="#removePost"
              className="remove"
              onClick={this.deleteUserPost}
              >
              Remove
              </a>
              <a>
                Edit
              </a>
        </div>
      </Modal.Description>
    </Modal.Content>
  </Modal>
    );
  }
}

export default PostDetail;
