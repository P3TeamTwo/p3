import React from 'react';
import { FormControl, RadioGroup, FormLabel, FormControlLabel, Radio } from '@material-ui/core';
import Q2questions from '../Questions/Q2.json';

function Q2_4(props) {

    const questionSlice = Q2questions.slice(3)

    const randomQuestion = questionSlice[Math.floor(questionSlice.length * Math.random())];

    return(
        <>
        <b>Question2_4</b>
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
                        aria-label="question2_4" name={answer.answerText} 
                        value='question2_4'
                        onChange={(e)=> props.handleSubmit(e, null, null, null, null, null, null, null, null, e.target.value)}> 
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
export default Q2_4;