import React from 'react';
import { FormControl, RadioGroup, FormLabel, FormControlLabel, Radio } from '@material-ui/core';
import Q1questions from '../Questions/Q1.json';

function Q1_3(props) {

    console.log(Q1questions[2].question)

    return(
        <>
        <b>Question 1_3</b>
            <div className='container'>
            <FormControl component="fieldset">
                <FormLabel component="legend">{Q1questions[2].question}
                </FormLabel>
                {Q1questions[2].answers.map(answer => {
                    return (
                        <RadioGroup 
                        key={answer.answerText}
                        defaultValue='false' 
                        aria-label="question1_3" name={answer.test} 
                        value='question1_3'
                        onChange={(e)=> props.handleSubmit(e, null, null, null, e.target.value)}> 
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
export default Q1_3;