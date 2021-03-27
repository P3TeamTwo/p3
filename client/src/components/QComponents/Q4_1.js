import React, { useState } from 'react';
import { FormControl,  FormLabel, FormControlLabel, Radio, TextField, Button } from '@material-ui/core';
import Q4questions from '../Questions/Q4.json';

function Q4_1({ handleSubmit }) {

    console.log(Q4questions[0].question)

    const [userResponse, setUserResponse] = useState();

    const handleChange = (e) => {
        setUserResponse(e.target.value);
    }


    return(
        <>
        <b>Question 4_1</b>
        <form>
            <TextField
                id="outlined-multiline-static"
                label={Q4questions[0].question}
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
                    handleSubmit(e, null, null, null, null, null, null, null, null, null, null, userResponse)
                }
                }>SUBMIT</Button>

        </form>
        
        </>  
    )
};
export default Q4_1;