import React, { Component } from 'react';
import './App.css';

import { Modal, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'

class ConfirmModal extends Component {
  render() {
    return (
      <div className="static-modal">
        <Modal show={this.props.showModal} onHide={this.props.closeModal}>
          <Modal.Header  closeButton>
            <Modal.Title><h2 className="text-center">Confirmation</h2></Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p className="text-center">Are you sure you want to delete ?</p>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.props.closeModal}>Close</Button>
            <Button bsStyle="danger" value={this.props.indx} onClick={this.props.delOk}>Delete</Button>
          </Modal.Footer>

        </Modal>
      </div>
    );
  }
}

export default ConfirmModal;