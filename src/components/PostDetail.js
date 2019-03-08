import React, { Component } from "react";
import { Button, Header, Image, Modal } from 'semantic-ui-react';

 

class PostDetail extends Component {

  render() {
    return (
    <Modal trigger={<a>{this.props.post.postContent}</a>}>
    <Modal.Header>City Post</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='https://www.aaronstoychest.co.uk/wp-content/uploads/2017/09/59754444.jpg' />
      <Modal.Description>
        <Header>{this.props.post.postTitle}</Header>
        <h2>{this.props.posts.user}</h2>
        <p>{this.props.posts.postContent}</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
    );
  }
}

export default PostDetail;
