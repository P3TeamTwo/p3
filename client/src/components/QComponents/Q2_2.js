import React from 'react';
import { FormControl, RadioGroup, FormLabel, FormControlLabel, Radio } from '@material-ui/core';
import Q2questions from '../Questions/Q2.json';

function Q2_2(props) {

    return(
        <>
            <div className='container'>
            <FormControl component="fieldset">
                <FormLabel component="legend"><b>{Q2questions[1].question}</b>
                </FormLabel>
                {Q2questions[1].answers.map(answer => {
                    return (
                        <RadioGroup 
                        key={answer.answerText}
                        defaultValue='false' 
                        aria-label="question2_2" name={answer.test} 
                        value='question2_2'
                        onChange={(e)=> props.handleSubmit(e, null, null, null, null, null, e.target.value)}> 
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
export default Q2_2;