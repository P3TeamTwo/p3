import React from 'react';
import { FormControl, RadioGroup, FormLabel, FormControlLabel, Radio } from '@material-ui/core';
import Q2questions from '../Questions/Q2.json';

function Q2(props) {

    const randomQuestion = Q2questions[Math.floor(Q2questions.length * Math.random())];

    return(
        <>
        <b>Question 2</b>
            <div className='container'>
            <FormControl component="fieldset">
                <FormLabel component="legend">{randomQuestion.question}
                </FormLabel>
                {randomQuestion.answers.map(answer => {
                    return (
                        <RadioGroup 
                        key={answer.answerText}
                        defaultValue='false' 
                        aria-label="question2" name={answer.test} 
                        value='question2'
                        onChange={(e)=> props.handleSubmit(e, null, null, null, e.target.value, e.target.name)}> 
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
export default Q2;