import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        margin: "20px",

    }}>
    
     <Link to=""> Home</Link>
     <Link to="about">About</Link>
     <Link to="contact">Conact</Link>
     <Link to="services">Services</Link>
    
    </div>
    </>
  )
}

export default Navbar