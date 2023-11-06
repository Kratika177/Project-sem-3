
import React from 'react'
import img from './img/img2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faUnlockKeyhole} from '@fortawesome/free-solid-svg-icons'

function Login() {
    return (
        <section className="mx-5 my-5">
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-lg-12 col-xl-11">
                        <div className="card text-black">
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

                                        <form className="mx-1 mx-md-4">

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                {/* <i className="fas fa-envelope fa-lg me-3 fa-fw"></i> */}
                                                <FontAwesomeIcon className='me-2' icon={faEnvelope} />
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="email" id="form3Example3c" className="form-control" placeholder='Your Email' />
                                                    {/* <label className="form-label" for="form3Example3c">Your Email</label> */}
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                {/* <i className="fas fa-lock fa-lg me-3 fa-fw"></i> */}
                                                <FontAwesomeIcon className='me-2' icon={faUnlockKeyhole} />
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="password" id="form3Example4c" className="form-control" placeholder='Password' />
                                                    {/* <label className="form-label" for="form3Example4c">Password</label> */}
                                                </div>
                                            </div>

                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="button" className="btn btn-primary btn-lg">Login</button>
                                            </div>

                                        </form>

                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                        {/* <img src={img}     className="img-fluid" alt="Sample image"> */}
                                        <img className='img-fluid' src={img} alt="" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
