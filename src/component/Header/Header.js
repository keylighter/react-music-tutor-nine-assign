import React from 'react';

import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <div >
            <div className='row   cover'>
                <Navbar></Navbar>
                <div className='col-md-6 ps-5'>
                    <h1 className='title '>Let's Learn Music!!!</h1>
                    <h5 className='intro-para'>Music is the way to het to the heart of many people . we help you to learn music and musical instruments of your choice with most talented coaches </h5>
                    <button className='contact-button'>Contact Us</button>
                </div>

            </div>
        </div>
    );
};

export default Header;