import React from 'react';
import ReactDOM from 'react-dom';
import Slides from "./data"
export default function Product(props){
    
function buyFunction(){
    alert("Proceding to checkout");
}
function cartFunction(){
    alert("Added to cart");
}
    return(
        
        <div className="productdisplay">
        <a><img src={Slides[0].image} className="imagecardp"/></a>
        <div className="displaypagecontent">
        <h3>{Slides[0].name}</h3>
        <h3>{Slides[0].des}</h3>
        <h3>{Slides[0].price}</h3>
        <label name="size">Choose a Size</label>
        <select name="SIZE">
        <option value="7UK">7UK</option>
        <option value="8UK">8UK</option>
        <option value="9UK">9UK</option>
        <option value="10UK">10UK</option>
        </select>
        <div className="buttonpage">
        <a href="checkout.html" ><button className="buy" onClick={buyFunction}  >BUY</button></a>
        <button className="cart" onClick={cartFunction}>Add to Cart</button>
        </div>
        </div>
        </div>
    )
}     