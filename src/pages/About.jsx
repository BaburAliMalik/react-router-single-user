import React from 'react'
import { Link, Outlet } from 'react-router-dom'


function About() {
  return (
    <>
    <div>About</div>
    <button><Link to="">person1</Link></button>
    <button><Link to="person2">person2</Link></button>
    <button><Link to="person3">person3</Link></button>
    <Outlet/>
   
    </>
  )
}

export default About