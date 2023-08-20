import React from 'react'
import '../CSS/Style.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-flex">
        <h2>WhatsApp - Marketplace Addon</h2>
        <ul>
          <li>
            <a href="https://linkedin.com/in/mohammed-puthawala" target="_blank" rel="noopener noreferrer">
              LinkedIN
            </a>
          </li>
          <li>
            <a href="https://github.com/Ntrv3390" target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </li>
          <li>
            <a href="https://github.com/Ntrv3390" target="_blank" rel="noopener noreferrer">
              View Source Code
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
