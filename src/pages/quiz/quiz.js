import React, { useState } from 'react';
import Navbar from '../../components/navbar';
import styled from 'styled-components';
import qna from '../../data';
import './quiz.css';

function Quiz() {

    const [score, setScore] = useState([0, 0, 0]);
    const [value, setValue] = useState();
    const [showScore, setShowScore] = useState(true);
    const [final, setFinal] = useState();

    function handleClick(p, e) {
        var sel = p.target.value;
        var s = score;
        if (sel == e.a) {
            s[e.id] = 1;
        }
        else {
            s[e.id] = 0;
        }
        setScore(s);
    }

    function handleSubmit(e) {
        e.preventDefault();
        var sum = 0;
        for (var i = 0; i < score.length; i++) {
            sum += score[i];
        }
        setFinal(sum);
        console.log('score ', final);
        setShowScore(false);
    }
    return (
        <div className="mainQuiz">
            <Navbar />
            <div id="headings">
                <h1> Quiz on triangles</h1>
                <h3> For each correct answer, you get 1 point. </h3>
            </div>
            <center>
                <form onSubmit={handleSubmit}>

                    {
                        qna.map((e) => {
                            return (
                                <div className="question" key={e.id}>
                                    {e.q} <br />
                                    <input className="options" name={e.id} value={e.o1} onClick={(p) => handleClick(p, e)} type="radio" /> {e.o1}
                                    <input className="options" name={e.id} value={e.o2} onClick={(p) => handleClick(p, e)} type="radio" /> {e.o2}
                                    <input className="options" name={e.id} value={e.o3} onClick={(p) => handleClick(p, e)} type="radio" /> {e.o3}
                                </div>
                            )
                        })
                    }
                    <button id="submit" type="submit"> See score </button>
                    <div hidden={showScore}>
                        <p> Score : {final} </p>
                    </div>
                </form></center>
        </div>
    );
}

export default Quiz;
