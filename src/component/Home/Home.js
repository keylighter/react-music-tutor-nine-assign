import React from 'react';
import Cources from '../Cources/Cources';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='row-container'>
                <div className='row justify-content-center align-items-center pt-5 pb-5 '>

                    <h3 className='pb-5 fw-bold'>We Offer</h3>

                    <div className='col-md-2'>
                        <div className="card " >
                            <div className="card-body">
                                <h5 className="card-title">Expert Teachers</h5>

                                <p className="card-text">We will teach you music with the help of best musical teacher in specific area.</p>

                            </div>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div className="card " >
                            <div className="card-body">
                                <h5 className="card-title">Technical Supports</h5>

                                <p className="card-text">Moreover we will also give some technical supoort and virtual classes too.</p>

                            </div>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div className="card " >
                            <div className="card-body">
                                <h5 className="card-title">Personalized Care</h5>

                                <p className="card-text">Every students have the unique ability to learn so we design learnig in a personalised way.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Cources></Cources>
        </div>
    );
};

export default Home;