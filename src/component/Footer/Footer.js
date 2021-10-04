import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className='footer-container'>
                <div className='row justify-content-around align-items-center pt-5'>

                    {/* company info */}
                    <div className="col-md-3">

                        <div className="left-container text-start">
                            <h1>Musical Turor</h1>

                            <p className="mt-4 ">
                                <small>
                                    Music is the way to het to the heart of many people . we help you to learn music and musical instruments of your choice with most talented coaches
                                </small>
                            </p>

                            <p className="mt-5">
                                <small>Musical Tutor © . All rights reserved.</small>
                            </p>
                        </div>
                    </div>

                    {/* Quick Link section */}

                    <div className="col-md-2">
                        <h4>Quick Links</h4>
                        <div className="foot-container">
                            <ul>
                                <Link to='/home' className="foot-nav" >
                                    <li className='pt-4'>Home</li>
                                </Link>
                                <Link to='/about' className="foot-nav">
                                    <li className='pt-4'> About us</li>
                                </Link>
                                <Link to='/cources' className="foot-nav">
                                    <li className='pt-4'>Cources</li>
                                </Link>
                                <Link to='/blog' className="foot-nav">
                                    <li className='pt-4'>Blog</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                    {/* Contact and newsletter section */}
                    <div className="col-md-5">
                        <div className="pb-4">
                            <h3>Sign up for getting newsletter!!</h3>
                            <input
                                className="rounded-3 mt-3 mb-4"
                                type="text"
                                placeholder="Enter Your Email"
                            />


                            <div>
                                <h5>Phone: +1 8 800 555 35 35</h5>
                            </div>
                        </div>


                        <div>
                            <p>
                                Address :  120, Park Avenue ,London.
                                <br />124, Port of Spain , Belgium.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Footer;