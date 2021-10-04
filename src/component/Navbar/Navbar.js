import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <div className='container'>
                <div className='row pt-5 align-items-center justify-content-center'>
                    <div className='col-md-2'>
                        <h2 className='text-danger bg-warning rounded'>Musical Tutor</h2>
                    </div>
                    <div className='col-md-8'>
                        <ul className='d-flex align-items-end justify-content-end'>
                            <Link to='/home' className="item">
                                <li >Home</li>
                            </Link>
                            <Link to='/about' className="item">
                                <li >About Us</li>
                            </Link>
                            <Link to='/cources' className="item">
                                <li >Cources</li>
                            </Link>
                            <Link to='/blog' className="item">
                                <li >Blog</li>
                            </Link>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;