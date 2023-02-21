import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card'
import Slides from './data'



export default function Arrival(){
 function ncard(val){
     return(
         <Card id={val.id} image={val.image} name={val.name} price={val.price} des={val.des} / >
     )
 }
    return(
        <div className="arrival">
        <h1 className="arrivaltext">NEW ARRIVAL</h1>
        <div className="arrivalcard">
        
        
         {Slides.map(ncard)}
        
        </div>
        </div>
        
       



    )
}     