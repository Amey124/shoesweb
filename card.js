import React from 'react';

import ReactDOM from 'react-dom';
export default function Card(props){
function setId(props){
      const id = {props:id}
      console.log(id)
  }
    return(
        <div className="card">
        <a href="product.html"><img src={props.image} className="imagecard" onClick="setId()"/></a>
        <h3>{props.name}</h3>
        <h3>{props.des}</h3>
        <h3>{props.price}</h3>
        </div>
       



    )
}     