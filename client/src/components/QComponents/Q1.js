import React from 'react';
// import { Button } from '@material-ui/core';
import questions from '../../Questions.json';
import { FormControl, RadioGroup, FormLabel, FormControlLabel, Radio, Button } from '@material-ui/core';

function Q1(props) {

    
    const test = questions[0].Q1
    console.log(test)

    const randomQuestion = test[Math.floor(test.length * Math.random())]

    console.log(randomQuestion)

    return(
        <>
        <p>question 1</p>

        {/* <p>{randomQuestion}</p> */}
        {/* <p>{Math.floor(Math.random(questions.Q1) * 5)}</p> */}




                <Button variant="outlined" onClick={props.handleSubmit}>SUBMIT</Button>
                 {/* <Button variant="outlined" onClick={(e) => {props.handleSubmit(e, null, getQ1)}}>SUBMIT</Button> */}

        </>  
    )
};

export default Q1;