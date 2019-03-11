import React, { Component } from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import UpdatePostForm from './UpdatePostForm';

class PostDetail extends Component {
  handleOpen = () => {
    document.getElementById("userProfileModal").style.display = "block";
  };
  handleClose = () => {
    document.getElementById("lou").style.display = "none";
  };

  render() {
    return (
      <Modal trigger={<a>View</a>}>
        <Modal.Header>City Post</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <div>
<<<<<<< HEAD
              <Header >{this.props.post.postTitle}</Header>
              <p className='black'>{this.props.post.postContent}</p>
              {/* <span>{this.props.post.user.userEmail}</span> */}
=======
              <Header>{this.props.post.postTitle}</Header>
              <p>{this.props.post.postContent}</p>
>>>>>>> 9f457f247d567e46ac8b3707990d1af08dae3cb3
            </div>

            <div>
              <a className='black' href="#editPost">
                <UpdatePostForm
                  post={this.props.post}
                  updatePost={this.props.updatePost}
                  user={this.props.user}
                />
                Submit Changes to Your Post
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
