import React from 'react';
import ReactDOM from 'react-dom';



export default function Brand(){
    return(
        <div className="brand">
        <h1 className="brandtext">BRAND'S WE HAVE COLLABORATED WITH</h1>
        <div className="brandimages">
        <img className="dior" src="/diorlogo.png" />
        <img className="nike" src="nikelogo.jpg"/>
        <img className="puma"  src="/pumalogo.png"/>
        <img className="adidas" src="/Adidas-Logo-1991.jpg"/>
        
        </div>
        </div>
    )
}
ReactDOM.render(<Brand />, document.getElementById('root'));