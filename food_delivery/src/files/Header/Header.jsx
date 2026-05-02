import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'

function Header() {

  const navigate = useNavigate();

  return (
    <div className='header'>
        <div className='header-contents'>
            <h2>Order Your favourite food here</h2>

            <button 
              className="header-btn"
              onClick={() => {
  document.getElementById('explore-menu').scrollIntoView({ behavior: 'smooth' });
}}
            >
              View Menu
            </button>

        </div>
    </div>
  )
}

export default Header