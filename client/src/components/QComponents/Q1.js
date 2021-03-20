import React, { useState } from 'react';
import questions from '../../Questions.json';
import { FormControl, RadioGroup, FormLabel, FormControlLabel, Radio } from '@material-ui/core';

function Q1(props) {

    const [question1, setQuestion1] = useState('');
    
    // NOT WORKING, NEED TO STORE THE RADIO BUTTON SELECTED IN question1 STATE
    function handleChange (e) {
        var questionValue = e.target.value;

        // NOT SETTING QUESTION1 STATE
        setQuestion1(questionValue)

        // CORRECT VALUE LOGGING
        console.log(typeof questionValue) // STRING
        console.log(questionValue) // VALUE CLICKED

        // SETQUESTION1 NOT WORKING
        console.log(question1)
    }
    
    const storeQuestions = questions[0].Q1
    // console.log(test)

    const randomQuestion = storeQuestions[Math.floor(storeQuestions.length * Math.random())]
    // console.log(randomQuestion)

    return(
        <>
        <b>Question 1</b>
            <div className='container'>
            <FormControl component="fieldset">
                <FormLabel component="legend">{randomQuestion}</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value='test' > {/* test needs to be changed */}

                    {questions[0].Q1Answers.map((answer) => {
                        return (

                            // NEED TO FIX SOMETHING HERE
                            <FormControlLabel onChange={handleChange} key={answer} value={answer} control={<Radio />} label={answer} 
                            onClick={(e) => {props.handleSubmit(e, null, question1)}} />
                        )
                    })}
                   
                </RadioGroup>
            </FormControl>
        </div>
        </>  
    )
};

export default Q1;