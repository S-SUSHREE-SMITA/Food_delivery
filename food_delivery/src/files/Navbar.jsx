import './Navbar.css';
import logo from '../assets/logo.webp'
import search from '../assets/search.jpg'
import basket from '../assets/basket.jpg'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ setShowLogin }) => {

    const [menu, setMenu] = useState("home");
    const navigate = useNavigate();

    return (
        <div className='navbar'>
            <img src={logo} className='logo' />

            <ul className="navbar_menu">
                <li
                    onClick={() => {
                        setMenu("home");
                        navigate('/');  
                    }}
                    className={menu === 'home' ? 'active' : ""}
                >
                    Home
                </li>
                <li onClick={() => {setMenu("explore-menu"); navigate('/menu');}} className={menu === 'explore-menu' ? 'active' : ""}>Menu</li>
                <li onClick={() => {setMenu("contact-us"); navigate('/contact') }} className={menu === 'contact-us' ? 'active' : ""}>Contact Us</li>
            </ul>

            <div className='navbar-right'>
                {/* <img src={search} className='search' /> */}
                <img
                    src={basket}
                    className='basket'
                    onClick={() => navigate('/cart')}
                    style={{ cursor: 'pointer' }}
                />

                <button className='login_btn' onClick={() => setShowLogin(true)}>Log In</button>
            </div>
        </div>
    )
}

export default Navbar;