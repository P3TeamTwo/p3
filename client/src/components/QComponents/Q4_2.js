import React from 'react';
import { FormControl, RadioGroup, FormLabel, FormControlLabel, Radio } from '@material-ui/core';
import Q4questions from '../Questions/Q4.json';

function Q4_2(props) {

    console.log(Q4questions[1].question)

    return(
        <>
        <b>Question 4_2</b>
            <div className='container'>
            <FormControl component="fieldset">
                <FormLabel component="legend">{Q4questions[1].question}
                </FormLabel>
                {Q4questions[1].answers.map(answer => {
                    return (
                        <RadioGroup 
                        key={answer.answerText}
                        defaultValue='false' 
                        aria-label="question4_2" name={answer.test} 
                        value='question4_2'
                        onChange={(e)=> props.handleSubmit(e, null, null, null, null, null, null, null, null, null, null, null, e.target.value)}> 
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
export default Q4_2;