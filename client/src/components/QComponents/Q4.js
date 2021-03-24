import React from 'react';
import { FormControl, RadioGroup, FormLabel, FormControlLabel, Radio } from '@material-ui/core';
import Q4questions from '../Questions/Q4.json';

function Q4(props) {

    const randomQuestion = Q4questions[Math.floor(Q4questions.length * Math.random())];

    return(
        <>
        <b>Question 4</b>
            <div className='container'>
            <FormControl component="fieldset">
                <FormLabel component="legend">{randomQuestion.question}
                </FormLabel>
                {randomQuestion.answers.map(answer => {
                    return (
                        <RadioGroup 
                        key={answer.answerText}
                        defaultValue='false' 
                        aria-label="question4" name={answer.test} 
                        value='question4'
                        onChange={(e)=> props.handleSubmit(e, null, null, null, null, null, null, null, e.target.value, e.target.name)}> 
                        <FormControlLabel
                         
                        value={answer.value} 
                        control={<Radio />}
                        label={answer.answerText}
                        data-tag={answer.test} />
                </RadioGroup>
                    )
                })}
            </FormControl>
        </div>
        </>  
    )
};
export default Q4;