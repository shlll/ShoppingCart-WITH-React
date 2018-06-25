import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ListItems from './ListItems.js';
import AddAndRemoveItems from './AddAndRemoveItems.js';
import SubTotal from './SubTotal.js';
import './App.css';
class App extends Component {
  state = {
    items:[{
      name: "AppleJuice",
      price: 5.00,
      quantity:0,
      description: "This is apple juice",
      imageUrl: "https://i5.walmartimages.com/asr/ef07cf19-9007-4447-a1ad-1a8d91c8a3ae_1.c43642c8f700c8be416a8f0ee1d33c30.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
    },{
      name: "Breads",
      price: 2.00,
      quantity:0,
      description: "This is bread",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Anadama_bread_%281%29.jpg/1200px-Anadama_bread_%281%29.jpg"
    },{
      name: "Pork",
      price: 15.00,
      quantity:0,
      description: "This is pork",
      imageUrl: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/03/roast-rack-of-pork-with-wild-garlic-stuffing.jpg?itok=v9RRUGZA"
    },{
      name: "Chicken",
      price: 15.00,
      quantity:0,
      description: "This is chicken",
      imageUrl: "http://img1.cookinglight.timeinc.net/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2017/05/main/tangy-beer-can-chicken-1707p104.jpg?itok=tFijy4X6"
    },{
      name: "Tea",
      price: 12.00,
      quantity:0,
      description: "This is tea",
      imageUrl: "https://cdn.shopify.com/s/files/1/1234/1342/products/MOOD-BrewedTeaWithSachets-_1_1024x1024.jpg?v=1512140558"
    }]
}
render() {
    return (
      <div className="App">
      <Route exact path="/" render={()=>(
        <ListItems items = {this.state.items}/>
      )}/>
      <Route path="/addItems" component={AddAndRemoveItems}/>
      </div> 
    )
  }
}
export default App;
