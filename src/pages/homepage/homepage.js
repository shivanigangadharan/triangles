import React from 'react';
import Navbar from '../../components/navbar';
import './homepage.css';
import { Link } from 'react-router-dom';

function Homepage() {
    return (
        <div className="main" >
            <div id="about">
                <h1> Mad angle Triangle </h1>
                <p>
                    Welcome to Mad angle triangles. Click on the different options on the right to learn
                     about triangles and its various properties in a fun way. Explore and share this with your friends if you found it helpful.
</p>
            </div>
            <div className="linkContainer">
                <Link to="/quiz" className="link">  Quiz </Link>
                <Link to="/area" className="link">  Area </Link>
                <Link to="/hypotenuse" className="link">  Hypotenuse </Link>
                <Link to="/angles" className="link">  Angles </Link>

            </div>
        </div >

    )
}

export default Homepage;