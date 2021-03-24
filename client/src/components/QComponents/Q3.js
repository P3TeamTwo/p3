import React from 'react';
import { FormControl, RadioGroup, FormLabel, FormControlLabel, Radio } from '@material-ui/core';
import Q3questions from '../Questions/Q3.json';

function Q3(props) {

    const randomQuestion = Q3questions[Math.floor(Q3questions.length * Math.random())];

    return(
        <>
        <b>Question 3</b>
            <div className='container'>
            <FormControl component="fieldset">
                <FormLabel component="legend">{randomQuestion.question}
                </FormLabel>
                {randomQuestion.answers.map(answer => {
                    return (
                        <RadioGroup 
                        key={answer.answerText}
                        defaultValue='false' 
                        aria-label="question3" name={answer.test} 
                        value='question3'
                        onChange={(e)=> props.handleSubmit(e, null, null, null, null, null, e.target.value, e.target.name)}> 
                        <FormControlLabel
                         
                        value={answer.value} 
                        control={<Radio />}
                        label={answer.answerText}/>
                </RadioGroup>
                    )
                })}
            </FormControl>
        </div>
        </>  
    )
};
export default Q3;