import React from 'react'

import { Link } from 'react-router-dom';
import img1 from './img/img1.jpg';
import img2 from './img/img4.jpg';
import img3 from './img/img7.jpeg';
import img4 from './img/img6.jpg';
import img5 from './img/img8.1.jpg';
import img6 from './img/img9.jpg';
import img7 from './img/img12.jpg';
import img8 from './img/img11.jpg';

export default function HomePage() {
    return (
        <>
            {/* Master the interview & land a job worth loving. */}
            <div className="container mx-5 mt-2" >
                <h2 className="pb-2 border-bottom">Mock-It To Rock-It</h2>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div className="col d-flex justify-content-between w-100">
                        <div className='w-50'>
                            <h3 className="fs-2 text-body-emphasis my-5">Master the interview & land a job worth loving.</h3>
                            <p>Simulate realistic interviews for over 120 different job positions and level up your skills in no time. Learn More</p>
                            <Link to="#" className="btn btn-primary">
                                Learn More
                            </Link>
                        </div>
                        <div className="icon-square text-body-emphasis w-45">
                            <img className="img-fluid w-100 h-75 rounded-5" src={img1} alt="img" />
                            {/* <img className='rounded float-end' data-src="" alt src="" data-loaded="true" /> */}
                        </div>
                    </div>
                </div>
            </div >


            {/* Take Mock Interviews On Your Own */}

            <div className="container px-5">
                <div className="row g-4 row-cols-1 row-cols-lg-3">
                    <div className="col d-flex justify-content-between w-100">
                        <div className="icon-square text-body-emphasis w-45">
                            <img className="img-fluid w-100 h-75 rounded-5" src={img2} alt="img" />
                        </div>
                        <div className='w-50'>
                            <h3 className="fs-2 text-body-emphasis my-5">Take Mock Interviews On Your Own</h3>
                            <p>Take unlimited interviews and master your skills from anywhere. No awkward meetups required.</p>
                            <Link to="#" className="btn btn-primary">
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </div >


            {/* Practice for the Pressure */}

            <div className="container px-5" >
                <div className="row g-4 row-cols-1 row-cols-lg-3">
                    <div className="col d-flex justify-content-between w-100">
                        <div className='w-50'>
                            <h3 className="fs-2 text-body-emphasis my-5">Practice for the Pressure</h3>
                            <p>We use your built-in camera to recreate the pressure of actual interviews so you can gain realistic experience and feel prepared for anything.</p>

                        </div>
                        <div className="icon-square text-body-emphasis w-45">
                            <img className="img-fluid w-100 h-75 rounded-5" src={img3} alt="" />
                        </div>
                    </div>
                </div>
            </div >


            {/* Cards */}

            <div className='container px-5'>
                <div className='px-5 py-4 mx-5'>
                    <div class="row">
                        <div class="col-sm-6 ">
                            <div class="card" style={{ width: `25rem` }}>
                                <img className="card-img-top" src={img5} alt="" />
                                <div class="card-body">
                                    <h5 class="card-title">Build interview confidence.</h5>
                                    <p class="card-text">We give you everything you need to master your interview skills in less time than any other option, so you can walk into your interview with confidence and .</p>
                                    <Link to="#" class="btn btn-primary">Go somewhere</Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 ">
                            <div class="card" style={{ width: `25rem` }}>
                                <img className="card-img-top" src={img6} alt="" />
                                <div class="card-body">
                                    <h5 class="card-title">Get hired faster.</h5>
                                    <p class="card-text">Our simulator is optimized to help you master your interview skills in the most efficient way possible, so you can be prepared to ace the interview in no time.</p>
                                    <Link to="#" class="btn btn-primary">Go somewhere</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='px-5 py-4 mx-5'>
                    <div class="row">
                        <div class="col-sm-6 ">
                            <div class="card" style={{ width: `25rem` }}>
                                <img className="card-img-top" src={img7} alt="" />
                                <div class="card-body">
                                    <h5 class="card-title">Accelerate your career & earn more.</h5>
                                    <p class="card-text">Master the skill of interviewing by practicing it just like you practice your trade and give your career a boost.</p>
                                    <Link to="#" class="btn btn-primary">Go somewhere</Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 ">
                            <div class="card" style={{ width: `25rem` }}>
                                <img className="card-img-top" src={img8} alt="" />
                                <div class="card-body">
                                <h5 class="card-title">Land the job you've been dreaming of.</h5>
                                <p class="card-text">Gain realistic interview experience and master the skills you need to wow your employers and beat out the competition.</p>
                                <Link to="#" class="btn btn-primary">Go somewhere</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            {/* Mock Interviews They Can Take on Their Own */}

            <div className="container mx-5 mt-5">
                <div className="row g-4  row-cols-1 row-cols-lg-3">
                    <div className="col d-flex justify-content-between w-100">
                        <div className='w-50'>
                            <h3 className="fs-2 text-body-emphasis my-5">Mock Interviews They Can Take on Their Own</h3>
                            <p>Provide simulated interviews they can conduct on their own. No need to schedule, commute, or meet in person.</p>
                            <Link to="#" className="btn btn-primary">
                                Learn More
                            </Link>
                        </div>
                        <div className="icon-square text-body-emphasis w-45">
                            <img className="img-fluid w-100 h-75 rounded-5" src={img4} alt="" />
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}