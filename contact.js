import React from 'react';
import ReactDOM from 'react-dom';



export default function Contact(){
    return(
        <div className="contactlink">
        <div className="contactlist">
        <h1>We'd love to hear from you</h1>
        <ul>
        <li>+91 8545349828</li>
        <li>A/209 Sea view apartment Navi Mumbai 400807</li>
        <li>shoesfy@gmail.com</li>
        </ul>
        </div>
        </div>
    )
}

ReactDOM.render(<Contact />, document.getElementById('root'));