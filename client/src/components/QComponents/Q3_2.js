import React from 'react';
import { FormControl, RadioGroup, FormLabel, FormControlLabel, Radio } from '@material-ui/core';
import Q3questions from '../Questions/Q3.json';

function Q3_2(props) {

    return(
        <>
            <div className='container'>
            <FormControl component="fieldset">
                <FormLabel component="legend">{Q3questions[1].question}
                </FormLabel>
                {Q3questions[1].answers.map(answer => {
                    return (
                        <RadioGroup 
                        key={answer.answerText}
                        defaultValue='false' 
                        aria-label="question3_2" name={answer.test} 
                        value='question3_2'
                        onChange={(e)=> props.handleSubmit(e, null, null, null, null, null, null, null, null, e.target.value)}> 
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
export default Q3_2;