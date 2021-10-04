import React from 'react';
import './About.css'

const About = () => {
    return (
        <div>
            <div className='offer-container'>
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


            <div >
                <div>
                    <h1 className='pb-5 pt-5'>Our Instructors</h1>
                </div>
                <div className='row ps-5  gy-5 '>
                    <div className='col-md-4'>
                        <div className="card pb-3 w-75 " >
                            <img src="https://images.pexels.com/photos/2592179/pexels-photo-2592179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="card-img-top cource-img" alt="..." />
                            <div className="Nameard-body">
                                <h5 className="card-title fw-bold pt-3">Amy Lee</h5>
                                <p className="card-text fw-bold">Piano Instructor  </p>


                            </div>

                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="card pb-3 w-75 " >
                            <img src='https://images.pexels.com/photos/8043765/pexels-photo-8043765.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' className="card-img-top cource-img" alt="..." />
                            <div className="Nameard-body">
                                <h5 className="card-title fw-bold pt-3">Elton John</h5>
                                <p className="card-text fw-bold">Vocal Instructor  </p>
                            </div>

                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="card pb-3 w-75 " >
                            <img src='https://images.pexels.com/photos/8043723/pexels-photo-8043723.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' className="card-img-top cource-img" alt="..." />
                            <div className="Nameard-body">
                                <h5 className="card-title fw-bold pt-3">Enumale Krito</h5>
                                <p className="card-text fw-bold"> Ukulele Instructor </p>

                            </div>

                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="card pb-3 w-75 " >
                            <img src='https://images.pexels.com/photos/8044096/pexels-photo-8044096.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' className="card-img-top cource-img" alt="..." />
                            <div className="Nameard-body">
                                <h5 className="card-title fw-bold pt-3">Fredric Dee</h5>
                                <p className="card-text fw-bold"> Guitar Istructor </p>


                            </div>

                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="card pb-3 w-75 " >
                            <img src='https://images.pexels.com/photos/60875/pexels-photo-60875.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' className="card-img-top cource-img" alt="..." />
                            <div className="Nameard-body">
                                <h5 className="card-title fw-bold pt-3">Mark Xoshe</h5>
                                <p className="card-text fw-bold">Violin Instructor  </p>


                            </div>

                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="card pb-3 w-75 " >
                            <img src='https://images.pexels.com/photos/5967532/pexels-photo-5967532.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' className="card-img-top cource-img" alt="..." />
                            <div className="Nameard-body">
                                <h5 className="card-title fw-bold pt-3">Mia kostova</h5>
                                <p className="card-text fw-bold"> Harmonica Instructor </p>

                            </div>

                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="card pb-3 w-75 " >
                            <img src='https://images.pexels.com/photos/6270216/pexels-photo-6270216.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' className="card-img-top cource-img" alt="..." />
                            <div className="Nameard-body">
                                <h5 className="card-title fw-bold pt-3">Michele Douge</h5>
                                <p className="card-text fw-bold"> Drums Instructor </p>


                            </div>

                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="card pb-3 w-75 " >
                            <img src='https://images.pexels.com/photos/6647495/pexels-photo-6647495.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' className="card-img-top cource-img" alt="..." />
                            <div className="Nameard-body">
                                <h5 className="card-title fw-bold pt-3">Xiango freine</h5>
                                <p className="card-text fw-bold"> Flute Instructor </p>


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default About;