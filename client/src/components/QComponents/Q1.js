import React, { useState } from 'react';
import questions from '../../Questions.json';
import { FormControl, RadioGroup, FormLabel, FormControlLabel, Radio, Button } from '@material-ui/core';

function Q1(props) {

    const [question1, setQuestion1] = useState('');

    // NOT WORKING, NEED TO STORE THE RADIO BUTTON SELECTED IN question1 STATE
    function handleChange (e) {
        var questionValue = e.target.value;
        setQuestion1(questionValue)
        console.log(question1)
    }
    
    const test = questions[0].Q1
    // console.log(test)

    const randomQuestion = test[Math.floor(test.length * Math.random())]
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
                            <FormControlLabel onChange={handleChange.bind} key={answer} value={answer} control={<Radio />} label={answer} 
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