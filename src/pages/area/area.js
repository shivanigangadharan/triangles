import React, { useState } from 'react';
import Navbar from '../../components/navbar';
import './area.css';

function Area(e) {

    const [side1, setSide1] = useState();
    const [side2, setSide2] = useState();
    const [side3, setSide3] = useState();
    const [area, setArea] = useState();
    const [base, setBase] = useState();
    const [perpendicular, setPerpendicular] = useState();
    const [ar, setAr] = useState();

    function handleSubmit(e) {
        e.preventDefault();
        if (side1 <= 0 || side2 <= 0 || side3 <= 0 || side1 == undefined || side2 == undefined || side3 == undefined) {
            alert('Please enter valid input values.');
            return 0;
        }
        var s = (side1 + side2 + side3) / 2;
        console.log(side1 + side2 + side3);
        setArea(Math.sqrt(s * (s - side1) * (s - side2) * (s - side3)));
        console.log(area)
    }

    function findArea(e) {
        if (base <= 0 || perpendicular <= 0 || base == undefined || perpendicular == undefined) {
            alert('Please enter valid input values.');
            return 0;
        }
        e.preventDefault();
        setAr(0.5 * base * perpendicular);
    }

    return (
        <div>
            <Navbar />

            <h1 id="areaHeading"> Area </h1>
            <div style={{ 'display': 'flex' }}>
                <div className="areaBox">
                    <h2> Using Heron's formula </h2>
                    <form>
                        <label> Enter side 1 (cm)</label>
                        <input className="areaIP" required onChange={(e) => setSide1(parseInt(e.target.value))} type="number" /><br />
                        <label> Enter side 2 (cm)</label>
                        <input className="areaIP" required onChange={(e) => setSide2(parseInt(e.target.value))} type="number" /><br />
                        <label> Enter side 3 (cm)</label>
                        <input className="areaIP" required onChange={(e) => setSide3(parseInt(e.target.value))} type="number" /><br />
                        <center><button id="submit" onClick={handleSubmit}> Calculate Area </button></center>
                        <div hidden={area == undefined ? true : false}>
                            <p> Area of triangle using Heron's formula = {area} square centimeter</p>
                        </div>
                        {/* EDITS REQUIRED HERE --> when sides dont make a triangle or zero */}
                    </form>
                </div>
                <div className="areaBox">
                    <h2> Using base and perpendicular(for right triangles) </h2 >
                    <form>
                        <label> Enter length of base (cm) </label>
                        <input className="areaIP" required onChange={(e) => setBase(parseInt(e.target.value))} type="number" /><br />
                        <label> Enter length of perpendicular (cm)</label>
                        <input className="areaIP" required onChange={(e) => setPerpendicular(parseInt(e.target.value))} type="number" /><br />
                        <center><button id="submit" onClick={findArea}> Calculate area </button></center>
                        <div hidden={ar == undefined ? true : false}>
                            <p> Area of triangle = {ar} square centimeter </p>
                        </div>
                        {/* EDITS REQUIRED HERE --> check conditions for base and perpendicular */}
                    </form>
                </div>
            </div>
        </div >
    );
}

export default Area;
