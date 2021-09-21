import React, { useState } from 'react';
import Navbar from '../../components/navbar';

function Hypotenuse() {

    const [base, setBase] = useState();
    const [perpendicular, setPerpendicular] = useState();
    const [hypotenuse, setHypotenuse] = useState();

    function handleSubmit() {
        if (base <= 0 || perpendicular <= 0 || base == undefined || perpendicular == undefined) {
            alert('Please enter valid input values.');
            return 0;
        }
        setHypotenuse(Math.sqrt(base * base + perpendicular * perpendicular).toFixed(2));
    }

    return (
        <div>
            <Navbar />
            <center>
                <h1 className="heading"> Hypotenuse </h1>
                <input placeholder="Enter base length (cm)" className="angleInput" onChange={(e) => setBase(e.target.value)} type="number" /> <br />
                <input placeholder="Enter perpendicular length (cm)" className="angleInput" onChange={(e) => setPerpendicular(e.target.value)} type="number" /><br />
                <button id="submit" onClick={handleSubmit}> Find hypotenuse </button>
                <div hidden={hypotenuse == undefined ? true : false}>
                    <p id="result"> Hypotenuse = {hypotenuse} cm </p>
                </div>
            </center>
        </div >
    );
}

export default Hypotenuse;
