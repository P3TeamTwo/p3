import React from 'react';
import { FormControl, RadioGroup, FormLabel, FormControlLabel, Radio } from '@material-ui/core';
import Q1questions from '../Questions/Q1.json';

function Q1_2(props) {

    console.log(Q1questions[1].question)

    return(
        <>
        <b>Question 1_2</b>
            <div className='container'>
            <FormControl component="fieldset">
                <FormLabel component="legend">{Q1questions[1].question}
                </FormLabel>
                {Q1questions[1].answers.map(answer => {
                    return (
                        <RadioGroup 
                        key={answer.answerText}
                        defaultValue='false' 
                        aria-label="question1_2" name={answer.test} 
                        value='question1_2'
                        onChange={(e)=> props.handleSubmit(e, null, null, e.target.value)}> 
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
export default Q1_2;