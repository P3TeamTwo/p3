import React from 'react';
// import questions from '../../Questions.json';
import { FormControl, RadioGroup, FormLabel, FormControlLabel, Radio } from '@material-ui/core';
import Q1questions from '../../Q1.json'

function Q1(props) {
    
    // const storeQuestions = Q1questions[0]

    const randomQuestion = Q1questions[Math.floor(Q1questions.length * Math.random())];
    console.log(randomQuestion.question)
    return(
        <>
        <b>Question 1</b>
            <div className='container'>
            <FormControl component="fieldset">
                <FormLabel component="legend">{randomQuestion.question}
                </FormLabel>
                <RadioGroup 
                defaultValue='false' 
                aria-label="question1" name="question1" 
                value='question1'
                onChange={(e)=> props.handleSubmit(e, null, e.target.value)}> 
                
                {randomQuestion.answers.map(answer => {
                    return (
                        <FormControlLabel
                        key={answer.answerText} 
                        value={answer.value} 
                        control={<Radio />}
                        label={answer.answerText} />
                    )
                })}

                {/* <FormControlLabel value="true" control={<Radio />} label="true" />
                <FormControlLabel value="false" control={<Radio />} label="false" /> */}
                    
                </RadioGroup>
            </FormControl>
        </div>
        </>  
    )
};

export default Q1;