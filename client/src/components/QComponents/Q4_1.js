import React, { useState } from 'react';
import { FormControl, RadioGroup, FormLabel, FormControlLabel, Radio, TextField, Button } from '@material-ui/core';
import Q4questions from '../Questions/Q4.json';

function Q4_1(props) {

    console.log(Q4questions[0].question)

    const [userResponse, setUserResponse] = useState();

    const handleChange = (e) => {
        setUserResponse(e.target.value);
    }


    return(
        <>
        <b>Question 4_1</b>
            <div className='container'>
            <FormControl component="fieldset">
                <FormLabel component="legend">{Q4questions[0].question}
                
                <TextField
                id="outlined-multiline-static"
                label={Q4questions}
                multiline
                rows={4}
                variant="outlined"
                style={{ minWidth: "100%" }}
                onChange={(e) => {
                    handleChange(e)
                }}
            />
            <Button variant="contained"
                onClick={(e) => {
                    console.log(userResponse)
                    props.handleSubmit(e, userResponse)
                }
                }>SUBMIT</Button>
                
                
                </FormLabel>
                
            </FormControl>
        </div>
        </>  
    )
};
export default Q4_1;