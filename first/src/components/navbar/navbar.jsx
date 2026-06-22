import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsymmetrik } from "@fortawesome/free-brands-svg-icons";
import "./navbar.css"
const navbar = () => {
  return (
    <>
      <div className="nav">
      <div className='nav-1'>
        <FontAwesomeIcon icon={faAsymmetrik} />
        <h3>NEXORA</h3>
      </div>

      <div className='nav-2'>
        <ul className="nav-links">
          <li>Home</li>
          <li>
            <a href="#about">About</a>
        </li>
          <li>
            <a href="#services">Services</a>
        </li>
          <li>
            <a href="#portofolio">PortFolio</a>
        </li>
          <li>
            <a href="#contact">Contact</a>
        </li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default navbar
