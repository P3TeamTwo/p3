import React, { useState } from 'react';
import { FormControl, FormLabel, FormControlLabel, TextField, Button } from '@material-ui/core';
import Q4questions from '../Questions/Q4.json';

function Q4_2({ handleSubmit }) {

    console.log(Q4questions[1].question)
    

    const [userResponse, setUserResponse] = useState();

    const handleChange = (e) => {
        setUserResponse(e.target.value);
    }

    return(
        <>
        <b>Question 4_2</b>
            <div className='container'>
            <form>
            <TextField
                id="outlined-multiline-static"
                label={Q4questions[1].question}
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
                    if (!userResponse) {
                        return; 
                     } else {
                         handleSubmit(e, null, null, null, null, null, null, null, null, null, null, userResponse)
                     }
 
                }
                }>SUBMIT</Button>

        </form>
        </div>
        </>  
    )
};
export default Q4_2;