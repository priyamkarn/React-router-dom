import React from 'react'
import { useLocation } from 'react-router-dom'
function About() {
    const location = useLocation();
    const { state } = location;
    const id = state?.id;
    const name = state?.name;
  return (
    <div>
    <h2>About Page</h2>
    <p>ID: {id}</p>
    <p>Name: {name}</p>
    </div>
  )
}

export default About