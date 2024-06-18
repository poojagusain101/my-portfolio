'use client'
import React,{useState} from 'react'


import "./navbar.css";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className='navbar'>
      <a className='title' href="/">
        Pooja Gusain
      </a>
      <div className='menu'>
        <img
          className='menuBtn'
          src={
            menuOpen
              ? "/closeIcon.png"
              : "/menuIcon.png"
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`menuItems ${menuOpen ? 'menuOpen' : ''}`}

          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
