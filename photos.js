import React from 'react';
import ReactDOM from 'react-dom';




export default function Photo(){

    return(
        <div className="photo">
        <img src="men.jpg" className="menphoto"/>
        <img src="women.jpg" className="womenphoto" />
        <img src="apparel.jpg" className="apparelphoto"/>
        </div>
    )
}     