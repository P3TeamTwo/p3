import React from 'react';
import { FormControl, RadioGroup, FormLabel, FormControlLabel, Radio } from '@material-ui/core';
import Q2questions from '../Questions/Q2.json';

function Q2_3(props) {

    console.log(Q2questions[2].question)

    return(
        <>
            <div className='container'>
            <FormControl component="fieldset">
                <FormLabel component="legend">{Q2questions[2].question}
                </FormLabel>
                {Q2questions[2].answers.map(answer => {
                    return (
                        <RadioGroup 
                        key={answer.answerText}
                        defaultValue='false' 
                        aria-label="question2_3" name={answer.test} 
                        value='question2_3'
                        onChange={(e)=> props.handleSubmit(e, null, null, null, null, null, null, e.target.value)}> 
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
export default Q2_3;