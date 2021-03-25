import React from 'react';
import { FormControl, RadioGroup, FormLabel, FormControlLabel, Radio } from '@material-ui/core';
import Q1questions from '../Questions/Q1.json';

function Q1_1(props) {

    console.log(Q1questions[0].question)

    return(
        <>
        <b>Question 1_1</b>
            <div className='container'>
            <FormControl component="fieldset">
                <FormLabel component="legend">{Q1questions[0].question}
                </FormLabel>
                {Q1questions[0].answers.map(answer => {
                    return (
                        <RadioGroup 
                        key={answer.answerText}
                        defaultValue='false' 
                        aria-label="question1_1" name={answer.test} 
                        value='question1_1'
                        onChange={(e)=> props.handleSubmit(e, null, e.target.value)}> 
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
export default Q1_1;