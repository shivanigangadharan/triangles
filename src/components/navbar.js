import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <Link className="brand" to="/" >Mad angle triangles</Link>
            <Link className="links" to="/hypotenuse" > Hypotenuse </Link>
            <Link className="links" to="/quiz"> Quiz </Link>
            <Link className="links" to="/area"> Area </Link>
            <Link className="links" to="/angles"> Angles </Link>
        </div >
    );
}

export default Navbar;
