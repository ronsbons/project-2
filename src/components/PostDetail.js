import React, { Component } from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import UpdatePostForm from './UpdatePostForm';

class PostDetail extends Component {

  handleOpen = () => {
    document.getElementById("userProfileModal").style.display = "block";
  };



  render() {
    return (
      <Modal trigger={<a>View</a>}>
        <Modal.Header>City Post</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <div>
              <Header>{this.props.post.postTitle}</Header>
              <p className='black'>{this.props.post.postContent}</p>
              <span>by {this.props.user.userFullName}</span>
            </div>

            <div>
              <a className='black' href="#editPost"
              onClick={this.handleOpen}>
                <UpdatePostForm
                  post={this.props.post}
                  updatePost={this.props.updatePost}
                  user={this.props.user}
                />
               Edit
               </a>
              <div />
            </div>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default PostDetail;
