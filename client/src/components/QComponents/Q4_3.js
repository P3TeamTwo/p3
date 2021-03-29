import React, { useState } from 'react';
import { FormControl, RadioGroup, FormLabel, FormControlLabel, Radio, Button, TextField } from '@material-ui/core';
import Q4questions from '../Questions/Q4.json';

function Q4_3({ handleSubmit }) {

    console.log(Q4questions[2].question)

    const [Q4_2Response, setUserResponse] = useState();

    const handleChange = (e) => {
        setUserResponse(e.target.value);
    }

    return(
        <>
            <form>
            <TextField
                id="outlined-multiline-static"
                label={Q4questions[2].question}
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
                    handleSubmit(e, null, null, null, null, null, null, null, null, null, null, null, null, Q4_2Response)
                }
                }>SUBMIT</Button>

        </form>
        </>  
    )
};
export default Q4_3;