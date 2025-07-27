import React from 'react'
import "./header.css"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <div id='logo'>
        <span id='brand'>Zomato</span>
        <Link to="/" className='btn-btn-success'>Home</Link>
      </div>
      <div id='social'>
        {/* here link redirects to outer website i.e.it is not the part of app so prefer anchor tag not Link  */}
        <a href='www.facebook.com'><img src='https://i.ibb.co/TTp516h/facebook.png' alt='facebook.png'></img> </a>
        <a href='www.facebook.com'><img src='https://i.ibb.co/w0kZ5Hf/insta.png' alt='insta.png'></img> </a>
        <a href='www.facebook.com'><img src='https://i.ibb.co/4jxsYSP/yt3.png' alt='yt3.png'></img> </a>
      </div>

    </header >
  )
}

export default Header
