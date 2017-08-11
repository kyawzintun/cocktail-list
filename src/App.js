import React, { Component } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css'

import RecipeModal from './RecipeModal';
import ConfirmModal from './ConfirmModal';
import CocktailList from './CocktailList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists : [
        {
          name: "Martini",
          ingredients: ["1/2 oz (1 part) Dry vermouth","3 oz (6 parts) Gin"]
        },
        {
          name: "Mojito",
          ingredients: ["1 1/2 oz White rum", "6 leaves of Mint", "Soda Water", "1 oz Fresh lime juice","2teaspoons Sugar"]
        },
        {
          name: "Margarita",
          ingredients: ["2 oz Tequila", "1 oz Lime juice", "1 oz Cointreau"]
        },
        {
          name: "AK 47",
          ingredients: ["Brandy"," Whiskey","Gin","Vodka","Bourbon Whiskey","Rum","Cointreau","Soda Water","Lime"]
        },
        {
          name: "Daiquiri",
          ingredients: ["1 1/2 oz White rum", "1/2 oz Simple syrup", "1 oz Lime juice"]
        },
        {
          name: "Old Fashioned",
          ingredients: ["1 1/2 oz Bourbon or Rye whiskey", "2 dashes Angostura bitters", "1 Sugar cube", "Few dashes plain water"]
        },
        {
          name: "Manhattan",
          ingredients: ["Maraschino cherry (Garnish)", "Dash Angostura bitters", "2 oz Rye or Canadian whisky", "3/4 oz Sweet red vermouth"]
        },
        {
          name: "Fizz",
          ingredients: ["4.5 cl Gin", "3 cl fresh lemon juice", "1 cl Gomme syrup", "8 cl soda water"]
        },
      ],
      recipeName: '',
      recipeIngredients: '', 
      showModal: false,
      showConfirmModal: false,
      nameErr: '',
      ingreErr: '',
      indx:null,
      delIndx: null
    }

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openConfirm = this.openConfirm.bind(this);
    this.closeConfirmModal = this.closeConfirmModal.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
  }

  open(e) {
    let index = e.target.value;
    let obj = {name:'', ingredients:'' };
    if(index !== '-1'){
      obj.name = this.state.lists[index].name;
      obj.ingredients = this.state.lists[index].ingredients.join(',');
    }
    this.setState({showModal: true, recipeName:obj.name, recipeIngredients:obj.ingredients, indx: index});
  }

  close() {
    this.setState({showModal: false, nameErr: null, ingreErr: null});
  }

  handleChange(e) {
    if(e.target.type === 'text') {
      this.setState({recipeName: e.target.value})
    } else {
      this.setState({recipeIngredients: e.target.value})
    }
  }

  handleSubmit(e) {
    if(this.state.recipeName && this.state.recipeIngredients.length > 0) {
      let index = this.state.indx;
      let name = this.state.recipeName;
      let ingre = this.state.recipeIngredients;
      if(this.state.indx === '-1') {
        let obj = {name: name, ingredients: ingre.split(',')}
        let joined = this.state.lists.concat(obj);
        this.setState({lists: joined})
      } else {
        console.log('edit ', this.state.indx, ingre)
        const lists = this.state.lists;
        lists[index] = { name: name, ingredients: ingre.split(',') }
        this.setState(lists);
      }
      this.close();
    }else {
      if(!this.state.recipeName) {
        this.setState({nameErr: 'Cocktail Name is required.'});
      }else {
        this.setState({nameErr: null });
      }
      if(this.state.recipeIngredients.length <= 0){
        this.setState({ingreErr: 'Ingredients is required.'});
      } else {
        this.setState({ingreErr: null });
      }
    }
    e.preventDefault();
  }

  openConfirm(e) {
    this.setState({ showConfirmModal: true, delIndx: e.target.value })
  }

  closeConfirmModal() {
    this.setState({ showConfirmModal: false });
  }

  deleteRecipe(e) {
    const rlists = this.state.lists;
    delete rlists[e.target.value];
    this.setState(rlists);
    this.closeConfirmModal();
  }
  
  render() {
    return (
      <div className="container">
        <div className="row">
          <h2>Cocktail Lists</h2>
        </div>
        <div className="row well">
          <CocktailList lists={this.state.lists} confirmModal={this.openConfirm} openModal={this.open}></CocktailList>
        </div>
        <button className="btn btn-primary btn-lg" value="-1" onClick={this.open}>Add Cocktail</button>
        <div className="row text-center">
          <nav className="navbar navbar-inverse navbar-fixed-bottom">
            <div className="container-fluid">
              <p className="coded-by">*** By <a href="https://www.linkedin.com/in/kyawzintun/" target="_blank">KZT</a> ***</p>
            </div>
          </nav>
        </div>
        <RecipeModal indx={this.state.indx} handleSubmit={this.handleSubmit} handleChange={this.handleChange} recipeName={this.state.recipeName} recipeIngre={this.state.recipeIngredients} showModal={this.state.showModal} closeModal={this.close} nameErr={this.state.nameErr} ingreErr={this.state.ingreErr}/>
        <ConfirmModal showModal={this.state.showConfirmModal} closeModal={this.closeConfirmModal} delOk={this.deleteRecipe}  indx={this.state.delIndx}></ConfirmModal> 
      </div>
    );
  }
}

export default App;
