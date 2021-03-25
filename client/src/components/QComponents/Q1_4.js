import React from 'react';
import { FormControl, RadioGroup, FormLabel, FormControlLabel, Radio } from '@material-ui/core';
import Q1questions from '../Questions/Q1.json';

function Q1_4(props) {

    const questionSlice = Q1questions.slice(3)

    const randomQuestion = questionSlice[Math.floor(questionSlice.length * Math.random())];

    return(
        <>
        <b>Question1_4</b>
            <div className='container'>
            <FormControl component="fieldset">
                <FormLabel component="legend">{randomQuestion.questionRandom}
                </FormLabel>
                {randomQuestion.answersRandom.map(answer => {
                    console.log(answer)
                    return (
                        <RadioGroup 
                        key={answer.answerText}
                        defaultValue='false' 
                        aria-label="question1" name={answer.answerText} 
                        value='question1'
                        onChange={(e)=> props.handleSubmit(e, null, null, null, null, e.target.value)}> 
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
export default Q1_4;