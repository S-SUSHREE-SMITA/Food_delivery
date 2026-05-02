import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.webp'
import facebook from '../../assets/facebook.jpg'
import instagram from '../../assets/instagram.jpg'
import twitter from '../../assets/twitter.jpg'

function Footer() {
    return (
        <div id='footer' className='footer'>
            <div className='footer-content'>
                <div className="footer-content-left">
                    <img src={logo} alt=''></img>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora totam quaerat optio? Asperiores magnam nesciunt vitae quo maxime quibusdam adipisci explicabo iste esse.</p>
                    <div className="footer-social-icon">
                        <img src={facebook} alt="" />
                        <img src={instagram} alt="" />
                        <img src={twitter} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH WITH US</h2>
                    <ul>
                        <li>+1-456-890-3452</li>
                        <li>foody@contact.com</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                © 2026 Foody. All Rights Reserved.
            </div>
        </div>
    )
}

export default Footer