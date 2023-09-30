import React, { useState } from "react";
import "./EightBall.css";
import defaultAnswers from "./answers.json";
import randomx from "./random";


/** EightBall: shows random answer and, on click, changes answer,
 *
 * Props:
 * - answers: array of {msg, color} objects
 *
 * State:
 * - answer: {msg, color} of current answer
 */

const EightBall = ({ answers=defaultAnswers }) => {
    const [ answer, setAnswer ] = useState({ msg: 'Think of a Question', color: 'black' });

    const handleClick = (evt) => {
        setAnswer( randomx ( answers ));
    }

    return (
        <div className="EightBall ball1" onClick={ handleClick } style={{ backgroundColor: answer.color }}>
            <b>{ answer.msg }</b>
        </div>
    )
}


export default EightBall;


