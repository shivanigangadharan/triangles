import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
    return (
        <div className="navbar">

            <div>
                <Link to="/" style={{ 'textDecoration': 'none' }}>
                    <p className="brand"> Mad angle triangles </p>
                </Link>
            </div>
            <div>
                <Link to="/hypotenuse" className="links"> Hypotenuse </Link>
                <Link className="links" to="/quiz"> Quiz </Link>
                <Link className="links" to="/area"> Area </Link>
                <Link className="links" to="/angles"> Angles </Link>
            </div>


        </div>
    );
}

export default Navbar;
