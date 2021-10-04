import React from 'react';
import './Cource.css'
const Cource = (props) => {
    // destructuring cource object
    const { name, img, duration, price } = props.cource;
    return (
        <div>

            <div className="card pb-3 w-75 " >
                <img src={img} className="card-img-top cource-img" alt="..." />
                <div className="Nameard-body">
                    <h5 className="card-title fw-bold pt-3">{name}</h5>
                    <p className="card-text fw-bold">Duration: {duration} hours</p>
                    <p className="card-text fw-bold">Fees: ${price}</p>
                    <button className='enroll-button'>Enroll Now</button>
                </div>

            </div>
        </div>
    );
};

export default Cource;