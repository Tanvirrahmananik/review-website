import React from "react";
import '../Contact/Contact.css'

const Contact = () =>{
    return(
        <div className='d-flex'>
            <div className='contact'>
            <h1>Address</h1>
                <p>Muhammodpur kaja goli Dhaka</p>
            </div>
                <div className='contact'>
            <h1>Contact</h1>
                <p>+91998980809</p>
                <p>009787</p>
            </div> 
            <div className='contact'>
            <h1>Email</h1>
                <p>uwsshdhs@-gmail.com</p>
                <p>pjahah@n.com</p>
            </div>
            <div className='contact'>
                <h1>Have Any Questions?</h1>
                <p>If you have any query about our service please contact with us.</p>
            </div>
        </div>
    );
};

export default Contact;