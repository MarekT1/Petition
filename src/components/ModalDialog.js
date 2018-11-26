import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal'

ReactModal.defaultStyles.overlay.backgroundColor = 'blue';
ReactModal.defaultStyles.overlay.opacity = 0.95;

export default class ModalDialog extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  
  
  render () {
    return (
      <div>
        <a onClick={this.handleOpenModal} style={{cursor: 'pointer'}}>Trigger #1 Modal</a>
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="Modal #1 Global Style Override Example"
           onRequestClose={this.handleCloseModal}
        >
            <button onClick={this.handleCloseModal}>Close Modal</button>  
            <p>Modal text!</p>
            <p>Modal text!</p>
            <p>Modal text! Modal text! Modal text! Modal text! Modal text! Modal text! Modal text! 
               Modal text! Modal text! Modal text! Modal text! Modal text! Modal text! Modal text! Modal
               text! Modal text! Modal text! Modal text! Modal text! Modal text! Modal text! Modal
               text! Modal text! Modal text! Modal text! Modal text! Modal text! Modal text! Modal text
               ! Modal text! Modal text! Modal text! Modal text! Modal text! Modal text! Modal text! 
               Modal text! Modal text! </p>
            <p>Modal text! Modal text! Modal text! Modal text! Modal text! Modal text! Modal text! 
               Modal text! Modal text! Modal text! Modal text! Modal text! Modal text! Modal text! Modal
               text! Modal text! Modal text! Modal text! Modal text! Modal text! Modal text! Modal
               text! Modal text! Modal text! Modal text! Modal text! Modal text! Modal text! Modal text
               ! Modal text! Modal text! Modal text! Modal text! Modal text! Modal text! Modal text! 
               Modal text! Modal text! </p>
            <p>Modal text! Modal text! Modal text! Modal text! Modal text! Modal text! Modal text! 
               Modal text! Modal text! Modal text! Modal text! Modal text! Modal text! Modal text! Modal
               text! Modal text! Modal text! Modal text! Modal text! Modal text! Modal text! Modal
               text! Modal text! Modal text! Modal text! Modal text! Modal text! Modal text! Modal text
               ! Modal text! Modal text! Modal text! Modal text! Modal text! Modal text! Modal text! 
               Modal text! Modal text! </p>
            <p>Modal text! Modal text! Modal text! Modal text! Modal text! Modal text! Modal text! 
               Modal text! Modal text! Modal text! Modal text! Modal text! Modal text! Modal text! Modal
               text! Modal text! Modal text! Modal text! Modal text! Modal text! Modal text! Modal
               text! Modal text! Modal text! Modal text! Modal text! Modal text! Modal text! Modal text
               ! Modal text! Modal text! Modal text! Modal text! Modal text! Modal text! Modal text! 
               Modal text! Modal text! </p>

              <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
      </div>
    );
  }
}
