import React from 'react';
import questions from '../../Questions.json';
import { FormControl, RadioGroup, FormLabel, FormControlLabel, Radio } from '@material-ui/core';

function Q1(props) {
    
    const storeQuestions = questions[0].Q1

    const randomQuestion = storeQuestions[Math.floor(storeQuestions.length * Math.random())];

    return(
        <>
        <b>Question 1</b>
            <div className='container'>
            <FormControl component="fieldset">
                <FormLabel component="legend">{randomQuestion}
                </FormLabel>
                <RadioGroup 
                defaultValue='false' 
                aria-label="question1" name="question1" 
                value='question1'
                onChange={(e)=> props.handleSubmit(e, null, e.target.value)}> 
                
                <FormControlLabel value="true" control={<Radio />} label="true" />
                <FormControlLabel value="false" control={<Radio />} label="false" />
                    
                </RadioGroup>
            </FormControl>
        </div>
        </>  
    )
};

export default Q1;