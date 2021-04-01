import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import Q4questions from '../Questions/Q4.json';

function Q4_3({ handleSubmit }) {

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
            style={{ marginTop: '5%', boxShadow: "3px 3px 10px rgba(0,0,0,0.2)" }}
                onClick={(e) => {
                    if (!Q4_2Response) {
                        return; 
                     } else {
                         handleSubmit(e, null, null, null, null, null, null, null, null, null, null, null, null, Q4_2Response)
                     }
 
                }
                }>SUBMIT</Button>

        </form>
        </>  
    )
};
export default Q4_3;