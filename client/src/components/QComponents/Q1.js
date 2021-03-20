import React, { useState } from 'react';
import questions from '../../Questions.json';
import { FormControl, RadioGroup, FormLabel, FormControlLabel, Radio } from '@material-ui/core';

function Q1(props) {

    const [question1, setQuestion1] = useState('');
    
    // NOT WORKING, NEED TO STORE THE RADIO BUTTON SELECTED IN question1 STATE
    async function handleChange (e) {
        //e.preventDefault();
      //  var questionValue = e.target.value; // true / false
        //console.log(questionValue) // VALUE CLICKED

        // NOT SETTING QUESTION1 STATE
        //setQuestion1(questionValue) ;
        
        //if (question1.length > 1 ) {
         props.handleSubmit(e, null,  e.target.value)
      // }


    }
    
    const storeQuestions = questions[0].Q1
    // console.log(test)

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
                aria-label="gender" name="gender1" 
                value={question1} 
               // onChange={(e) => console.log(e.target.value)} /
               // onChange={handleChange}
                onChange={(e)=> props.handleSubmit(e, null,  e.target.value)}> 
                
                <FormControlLabel value="true" control={<Radio />} label="true" />
                <FormControlLabel value="false" control={<Radio />} label="false" />
                    
                </RadioGroup>
            </FormControl>
        </div>
        </>  
    )
};

export default Q1;