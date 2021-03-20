import React from 'react';
import questions from '../../Questions.json';
import { FormControl, RadioGroup, FormLabel, FormControlLabel, Radio } from '@material-ui/core';

function Q4(props) {
    
    const storeQuestions = questions[3].Q4

    const randomQuestion = storeQuestions[Math.floor(storeQuestions.length * Math.random())];

    return(
        <>
        <b>Question 4</b>
            <div className='container'>
            <FormControl component="fieldset">
                <FormLabel component="legend">{randomQuestion}
                </FormLabel>
                <RadioGroup 
                defaultValue='false' 
                aria-label="question4" name="question4" 
                value='question4'
                onChange={(e)=> props.handleSubmit(e, null, null, null, null, e.target.value)}> 
                
                <FormControlLabel value="true" control={<Radio />} label="true" />
                <FormControlLabel value="false" control={<Radio />} label="false" />
                    
                </RadioGroup>
            </FormControl>
        </div>
        </>  
    )
};

export default Q4;