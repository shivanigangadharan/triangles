import React, { useState } from 'react';
import Navbar from '../components/navbar';

function Hypotenuse() {

    const [base, setBase] = useState();
    const [perpendicular, setPerpendicular] = useState();
    const [hypotenuse, setHypotenuse] = useState();

    function handleSubmit() {
        setHypotenuse(Math.sqrt(base * base + perpendicular * perpendicular));
    }

    return (
        <div>
            <Navbar />
            <h1> Hypotenuse </h1>
            <label> Enter length of base (in cm) : </label>
            <input onChange={(e) => setBase(e.target.value)} type="number" /> <br />
            <label> Enter length of perpendicular (in cm) : </label>
            <input onChange={(e) => setPerpendicular(e.target.value)} type="number" /><br />
            <button onClick={handleSubmit}> Find hypotenuse </button>
            <div hidden={hypotenuse == undefined ? true : false}>
                <h2> Hypotenuse = {hypotenuse} cm </h2>
            </div>
        </div >
    );
}

export default Hypotenuse;
