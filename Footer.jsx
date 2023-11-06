import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="bg-light text-center text-white">
            <div className="container p-4 pb-0">
                <section className="mb-4">
                    {/* <!-- Facebook --> */}
                    <Link className="btn text-white btn-floating m-1"
                        style={{ 'background-color': '#3b5998' }}
                        to="#!"
                        role="button">
                        <FontAwesomeIcon icon={faFacebook} />
                    </Link>
                    {/* <!-- Twitter --> */}
                    <Link className="btn text-white btn-floating m-1"
                        style={{ 'background-color': '#55acee' }}
                        to="#!"
                        role="button">
                        <FontAwesomeIcon icon={faTwitter} />
                    </Link>
                    {/* <!-- Instagram --> */}
                    <Link className="btn text-white btn-floating m-1"
                        style={{ 'background-color': '#ac2bac' }}
                        to="#!"
                        role="button">
                        <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                    {/* <!-- Linkedin --> */}
                    <Link className="btn text-white btn-floating m-1"
                        style={{ 'background-color': '#0082ca' }}
                        to="#!"
                        role="button">
                        <FontAwesomeIcon icon={faLinkedin} />

                    </Link>
                    {/* <!-- Github --> */}
                    <Link className="btn text-white btn-floating m-1"
                        style={{ 'background-color': '#333333' }}
                        to="#!"
                        role="button">
                        <FontAwesomeIcon icon={faGithub} />
                    </Link>
                </section>
            </div>
            <div className="text-center p-3" style={{ 'background-color': 'rgba(0, 0, 0, 0.5)' }}>
                © 2023 Copyright:
            </div>

        </footer>
    )
}

export default Footer



