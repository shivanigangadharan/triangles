import React, { useState } from 'react';
import Navbar from '../components/navbar';
import styled from 'styled-components';
import qna from '../data';

const Question = styled.div`
    border: 1px solid lightgrey;
    padding: 1.5%;
    width: 600px;
    margin: 3%;
`

function Quiz() {

    const [score, setScore] = useState(0);
    const [value, setValue] = useState();
    const [showScore, setShowScore] = useState(true);

    function handleClick(p, e) {

        if (p.target.value == e.a) {
            setScore(score + 1);
        }

        //e.name -> gives unique id
        //e.defaultValue -> gives selected option value eg: option3
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log('score ', score);
        setShowScore(false);
    }
    return (
        <div>
            <Navbar />
            <h1> Quiz on triangles</h1>
            <h3> For each correct answer, you get 1 point </h3>
            <form>

                {
                    qna.map((e) => {
                        return (
                            <Question key={e.id}>
                                {e.q} <br />
                                <input name={e.id} value={e.o1} onClick={(p) => handleClick(p, e)} type="radio" /> {e.o1}
                                <input name={e.id} value={e.o2} onClick={(p) => handleClick(p, e)} type="radio" /> {e.o2}
                                <input name={e.id} value={e.o3} onClick={(p) => handleClick(p, e)} type="radio" /> {e.o3}
                            </Question>
                        )
                    })
                }
                <button onClick={handleSubmit}> See answers </button>
                <div hidden={showScore}>
                    <h1> Score : {score} </h1>
                </div>
            </form>
        </div>
    );
}

export default Quiz;
