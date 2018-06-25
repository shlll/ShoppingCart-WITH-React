import React, { Component } from 'react';
class SubTotal extends Component {
    state = {
        price:0,
        quantity: 0,
        subtotal: 0,
    }//Given the itial state of subtotal.

    totalPrice = () => {
     this.setState((previousState) => {
         return {subtotal:previousState.quantity * previousState.price}
     })//return the formula of subtotal.
    }

    render(){
        return(
        <div className="items-subtotal">
        <button onClick={this.totalPrice}>TotalPrice</button>
        {this.state.subtotal}
        </div>//Create a button of totalprice.
          


        )
    }
}
export default SubTotal