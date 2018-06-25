import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class AddAndRemoveItems extends Component {
    state = {
        items:0,
    }//Given the inital state of items.
    addItems =(goods)=>{
         
       this.setState((previousState)=>{
           return {items:previousState.items + 1};
       })
    }//How to add the item.
    removeItems = () => {
        if(this.state.items > 0){
           this.setState((previousState)=>{
           return {items:previousState.items - 1};
       })//How to remove the item.
    }if(this.state.items <= 0){
        alert("The cart empty!");
    }
       
    }

render(){
    return(
        <div className="items">
        <button onClick={this.addItems}>Add To Cart!</button>
        {this.state.items}
        <button onClick={this.removeItems}>Remove!</button>
        <Link className="back-to-the-shopping-cart" to="/">Close!</Link>
        </div>
    )
}
}


export default AddAndRemoveItems