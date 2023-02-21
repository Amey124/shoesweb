import React from 'react';
import ReactDOM from 'react-dom/client';

export default function Mis(){
    return(
        <div className="mis">
        <div className="message">
        <p><h3>India-wide Shipping<br/></h3><span>Average time: 4-6 days</span></p>
        <p><h3>100% Secure Checkout<br/></h3><span>UPI / Debit Card / Credit Card/ Net Banking</span></p>
        </div>
        <div className="link-box">
        <div className="firstlink">
        <h3>IMPORTANT LINKS</h3><br/>
        <span>Refunds/Cancellation</span>
        <span>Terms and Conditions</span>
        <span>FAQ</span>
        <span>Privacy Policy</span>
        <span>Shipping</span>
        </div>
        <div className="secondlink">
        <h3>NEED HELP?</h3><br/>
        <span>My Account</span>
        <span>Size Chart</span>
        <span>Contact Us</span>
        </div>
        <div className="thirdlink">
        <h3>FOLLOW</h3><br/>
        <span>Instagram</span>
        <span>Facebook</span>
        </div>
        <div className="fourthlink">
        <h3>SUBSCRIBE TO OUR NEWSLETTER</h3><br/>
        <span>Join our mailing list to receive the latest news.</span>
        <span>Please enter your mail </span>
        <input type="text" className="input"/>
        <button className="subscribe">SUBSCRIBE</button>
        </div>
        </div>
        </div>
       
       



    )
}