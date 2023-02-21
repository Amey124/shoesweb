import React from 'react';
import ReactDOM from 'react-dom';
import Product from './productdisplay'


export default function Display(){
    return(
        <div>
        <Product image="shoes1.jpg" name="Nike" price="₹1129" des="NIKE FLEX" />
        </div>
    )
}