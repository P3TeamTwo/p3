import React from 'react';
import questions from '../../Questions.json';
import { FormControl, RadioGroup, FormLabel, FormControlLabel, Radio } from '@material-ui/core';

function Q2(props) {
    
    const storeQuestions = questions[1].Q2

    const randomQuestion = storeQuestions[Math.floor(storeQuestions.length * Math.random())];

    return(
        <>
        <b>Question 2</b>
            <div className='container'>
            <FormControl component="fieldset">
                <FormLabel component="legend">{randomQuestion}
                </FormLabel>
                <RadioGroup 
                defaultValue='false' 
                aria-label="question2" name="question2" 
                value='question2'
                onChange={(e)=> props.handleSubmit(e, null, null, e.target.value)}> 
                
                <FormControlLabel value="true" control={<Radio />} label="true" />
                <FormControlLabel value="false" control={<Radio />} label="false" />
                    
                </RadioGroup>
            </FormControl>
        </div>
        </>  
    )
};

export default Q2;