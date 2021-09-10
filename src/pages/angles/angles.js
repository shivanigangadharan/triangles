import React, { useState } from 'react';
import Navbar from '../../components/navbar';

function Angles() {
    const [a1, setA1] = useState();
    const [a2, setA2] = useState();
    const [a3, setA3] = useState();
    const [isTriangle, setIsTriangle] = useState();

    function handleSubmit(e) {
        e.preventDefault();
        if (parseInt(a1) < 0 || parseInt(a2) < 0 || parseInt(a3) < 0) {
            setIsTriangle("Not a triangle");
        }
        else {
            if (parseInt(a1) + parseInt(a2) + parseInt(a3) == 180) {
                setIsTriangle("Triangle");
            }
            else {
                setIsTriangle("Not a triangle");
            }
        }
    }
    return (
        <div>
            <Navbar />
            <h1> Angles </h1>
            <form>
                <label> Angle 1 </label>
                <input required onChange={(e) => setA1(e.target.value)} type="number" /><br />
                <label> Angle 2 </label>
                <input required onChange={(e) => setA2(e.target.value)} type="number" /><br />
                <label> Angle 3 </label>
                <input required onChange={(e) => setA3(e.target.value)} type="number" /><br />
                <button onClick={handleSubmit}> Is triangle? </button>
                <div hidden={isTriangle == undefined ? true : false}>
                    {isTriangle}
                </div>
                {/* EDITS REQUIRED HERE --> FOR CORNER CASE WHEN ANGLE IS ZERO , SHOULD GIVE ERROR */}
            </form>
        </div>
    );
}

export default Angles;
