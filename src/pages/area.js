import React, { useState } from 'react';
import Navbar from '../components/navbar';

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
        var s = (side1 + side2 + side3) / 2;
        console.log(side1 + side2 + side3);
        setArea(Math.sqrt(s * (s - side1) * (s - side2) * (s - side3)));
        console.log(area)
    }

    function findArea(e) {
        e.preventDefault();
        setAr(0.5 * base * perpendicular);
    }

    return (
        <div>
            <Navbar />
            <h1> Area </h1>
            <h2> Using Heron's formula </h2>
            <form>
                <label> Enter side 1 (cm)</label>
                <input required onChange={(e) => setSide1(parseInt(e.target.value))} type="number" /><br />
                <label> Enter side 2 (cm)</label>
                <input required onChange={(e) => setSide2(parseInt(e.target.value))} type="number" /><br />
                <label> Enter side 3 (cm)</label>
                <input required onChange={(e) => setSide3(parseInt(e.target.value))} type="number" /><br />
                <button onClick={handleSubmit}> Calculate Area </button>
                <div hidden={area == undefined ? true : false}>
                    <h2> Area of triangle using Heron's formula = {area} square centimeter</h2>
                </div>
                {/* EDITS REQUIRED HERE --> when sides dont make a triangle or zero */}
            </form>
            <h2> Using base and perpendicular(for right triangles) </h2 >
            <form>
                <label> Enter length of base (cm) </label>
                <input required onChange={(e) => setBase(parseInt(e.target.value))} type="number" /><br />
                <label> Enter length of perpendicular (cm)</label>
                <input required onChange={(e) => setPerpendicular(parseInt(e.target.value))} type="number" /><br />
                <button onClick={findArea}> Calculate area </button>
                <div hidden={ar == undefined ? true : false}>
                    <h2> Area of triangle = {ar} square centimeter </h2>
                </div>
                {/* EDITS REQUIRED HERE --> check conditions for base and perpendicular */}
            </form>
        </div >
    );
}

export default Area;
