import React from 'react';
import ReactDOM from 'react-dom/client';

export default function Navbar(){
    return(
        <div className="navbar">
        <a href="sale.html"><h3>Sale</h3></a>
        <a href="brand.html"><h3>Brands</h3></a>
        <a href="https://shoegazing.com/"><h3>Blog</h3></a>
        <a href="contact.html"><h3>Contact</h3></a>
        <div className="button">
        <a href="account.html"><button>Account</button></a>
        </div>
        </div>
       



    )
}