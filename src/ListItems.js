import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddAndRemoveItems from './AddAndRemoveItems.js';
import SubTotal from './SubTotal.js';
class ListItems extends Component {
    render(){
        return(<ol className="items-list">
        {this.props.items.map(item => {
           return(
               <li key={item.name}>
               <div>{item.name}</div>
               <div>{item.price}</div>
               <div>{item.description}</div>
               <div><img className="images" src={item.imageUrl}/></div>
               <Link
               to="/addItems"
               className="add-items">AddItems</Link>
               <AddAndRemoveItems />
               <SubTotal />
               </li>
           )
        })}
        </ol>


        )
    }
}




export default ListItems;