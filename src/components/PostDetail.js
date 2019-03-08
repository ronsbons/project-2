import React, { Component } from "react";
import { Button, Header, Image, Modal } from 'semantic-ui-react';

 

class PostDetail extends Component {
  state = {

      formStyle : {display: 'none'},
      bodyStyle : {},
  
  }

  toggleBodyForm = () => {
    (this.state.formStyle.display === 'block')?
      this.setState({formStyle: {display: 'none'}, bodyStyle: {display:'block'} })
    :
      this.setState({formStyle: {display:'block'}, bodyStyle: {display: 'none'}})
    
  }

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
              href="#editPost"

              >
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
