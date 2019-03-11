import React, {Component} from 'react';
import {Modal, ModalContent} from 'semantic-ui-react'

 class DeletePostModal extends Component{
     state ={
         open: false
     };

    render(){
        return(
            <Modal trigger={<a>Remove</a>}>
                <Modal.Header>Are You Sure?</Modal.Header>
                <ModalContent>
                    <button onClick={this.props.deleteUserPost}>Remove Post</button>
                </ModalContent>
            </Modal>
        )
    };
};

 export default DeletePostModal; 
