import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faComment } from '@fortawesome/free-solid-svg-icons'

function Contact() {
    return (
        <div className='container my-3' style={{width: `50rem`}}>
            <h2>Contact Us</h2>
            <p>We’re more than happy to answer any questions that you may have. Please fill out the form below and we’ll get back to you as soon as we can.</p>
            <p>You can also email us directly at <Link>mohandwivedi1806@gmai.com</Link></p>
            <div className='container my-3 px-5 py-2' style={{border: `1px solid lightgray`, borderRadius: `10px`}}>
            <div className="form-outline flex-fill my-2">
            <FontAwesomeIcon className='me-2' icon={faUser} />
                <label for="exampleFormControlInput1" class="form-label">Your Name</label>
                <input type="text" id="form3Example1c" className="form-control" placeholder='Your Name'/>
            </div>
            <div class="mb-3">
            <FontAwesomeIcon className='me-2' icon={faEnvelope} />
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email"></input>
            </div>
            <div class="mb-3">
            <FontAwesomeIcon className='me-2' icon={faComment} />
                <label for="exampleFormControlTextarea1" class="form-label">How can we help?</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" placeholder="Enter your Massage..."></textarea>
            </div>
            <button type="button" className="btn btn-primary btn-lg">Send </button>
        </div>
        </div>
    )
}

export default Contact
