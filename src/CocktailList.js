import React, { Component } from 'react';
import './App.css';

import { Button, PanelGroup, Panel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'

class CocktailList extends Component {
  render() {
    let cocktailList = this.props.lists.map((recipe, index) =>
      <Panel bsStyle="info" header={recipe.name} eventKey={String(index)} key={index}>
        <h4 className="text-center">Ingredients</h4>
        <hr/>
         <ul className="list-group">
          {recipe.ingredients.map((ingre, index) => 
            <li className="list-group-item" key={index}>{ingre}</li>
          )}
        </ul>
        <Button bsStyle="danger" value={index} onClick={this.props.confirmModal}>Danger</Button>
        <Button className="edit-btn" value={index} onClick={this.props.openModal}>Edit</Button> 
      </Panel>
    );

    return (
      <div>
        <PanelGroup defaultActiveKey='0' accordion>
          {cocktailList}
        </PanelGroup>
      </div>
    );
  }
}

export default CocktailList;