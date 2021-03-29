import React from 'react';
import { FormControl, RadioGroup, FormLabel, FormControlLabel, Radio } from '@material-ui/core';
import Q3questions from '../Questions/Q3.json';

function Q3_1(props) {

    console.log(Q3questions[0].question)

    return(
        <>
            <div className='container'>
            <FormControl component="fieldset">
                <FormLabel component="legend">{Q3questions[0].question}
                </FormLabel>
                {Q3questions[0].answers.map(answer => {
                    return (
                        <RadioGroup 
                        key={answer.answerText}
                        defaultValue='false' 
                        aria-label="question3_1" name={answer.test} 
                        value='question3_1'
                        onChange={(e)=> props.handleSubmit(e, null, null, null, null, null, null, null, e.target.value)}> 
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
export default Q3_1;