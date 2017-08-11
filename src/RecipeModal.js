import React, { Component } from 'react';
import './App.css';

import { Modal, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'

class RecipeModal extends Component {

  render() {
    return (
      <div className="static-modal">
        <Modal show={this.props.showModal} onHide={this.props.closeModal}>
          <form>
            <Modal.Header closeButton>
              <Modal.Title>Add a Cocktail</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormGroup controlId="recipeName">
                <ControlLabel>Cocktail Name</ControlLabel>
                <FormControl
                  type="text"
                  name="recipeName"
                  value={this.props.recipeName}
                  onChange={this.props.handleChange}
                  placeholder="Enter cocktail name"
                  required
                  className={(this.props.nameErr ? 'red-border': '')}
                />
                <ControlLabel className="text-danger small">{this.props.nameErr}</ControlLabel>
              </FormGroup>
              <FormGroup controlId="ingredients">
                <ControlLabel>Ingredients</ControlLabel>
                <FormControl
                  componentClass="textarea" 
                  name="ingredients"
                  value={this.props.recipeIngre}
                  onChange={this.props.handleChange}
                  placeholder="Enter Ingredients,Separated,By Commas"
                  required
                  className={(this.props.ingreErr ? 'red-border': '')}
                />
                <ControlLabel className="text-danger small">{this.props.ingreErr}</ControlLabel>
              </FormGroup>  
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.closeModal}>Close</Button>
              <Button onClick={this.props.handleSubmit} bsStyle="primary" >Add</Button>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    );
  }
}

export default RecipeModal;