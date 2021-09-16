import React, { useState } from 'react';
import Navbar from '../../components/navbar';
import './angles.css';

function Angles() {
    const [a1, setA1] = useState();
    const [a2, setA2] = useState();
    const [a3, setA3] = useState();
    const [isTriangle, setIsTriangle] = useState();

    function handleSubmit(e) {
        e.preventDefault();

        if (parseInt(a1) <= 0 || parseInt(a2) <= 0 || parseInt(a3) <= 0) {
            alert("Please enter valid inputs for the angles.");
            return 0;
        }
        else {
            if (parseInt(a1) + parseInt(a2) + parseInt(a3) == 180) {
                setIsTriangle("Yes, that's a triangle");
            }
            else {
                setIsTriangle("No, that's not a triangle.");
            }
        }
    }
    return (
        <div>
            <Navbar />
            <center>
                <h1 className="heading"> Angles </h1>
                <form>
                    <input placeholder="Enter angle 1" className="angleInput" required onChange={(e) => setA1(e.target.value)} type="number" /><br />
                    <input placeholder="Enter angle 2" className="angleInput" required onChange={(e) => setA2(e.target.value)} type="number" /><br />
                    <input placeholder="Enter angle 3" className="angleInput" required onChange={(e) => setA3(e.target.value)} type="number" /><br />
                    <button id="submit" onClick={handleSubmit}> Check triangle </button>
                    <p id="result" hidden={isTriangle == undefined ? true : false}>
                        {isTriangle}
                    </p>
                    {/* EDITS REQUIRED HERE --> FOR CORNER CASE WHEN ANGLE IS ZERO , SHOULD GIVE ERROR */}
                </form>
            </center>
        </div>
    );
}

export default Angles;
