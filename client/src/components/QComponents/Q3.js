import React from 'react';
import questions from '../../Questions.json';
import { FormControl, RadioGroup, FormLabel, FormControlLabel, Radio } from '@material-ui/core';

function Q3(props) {
    
    const storeQuestions = questions[2].Q3

    const randomQuestion = storeQuestions[Math.floor(storeQuestions.length * Math.random())];

    return(
        <>
        <b>Question 3</b>
            <div className='container'>
            <FormControl component="fieldset">
                <FormLabel component="legend">{randomQuestion}
                </FormLabel>
                <RadioGroup 
                defaultValue='false' 
                aria-label="question3" name="question3" 
                value='question3'
                onChange={(e)=> props.handleSubmit(e, null, null, null, e.target.value)}> 
                
                <FormControlLabel value="true" control={<Radio />} label="true" />
                <FormControlLabel value="false" control={<Radio />} label="false" />
                    
                </RadioGroup>
            </FormControl>
        </div>
        </>  
    )
};

export default Q3;