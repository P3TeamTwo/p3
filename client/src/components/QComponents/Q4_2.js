import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import Q4questions from '../Questions/Q4.json';

function Q4_2({ handleSubmit }) {
 
    const [userResponse, setUserResponse] = useState();

    const handleChange = (e) => {
        setUserResponse(e.target.value);
    }

    return(
        <>
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
            <Button variant="container"
            style={{ marginTop: '5%', boxShadow: "3px 3px 10px rgba(0,0,0,0.2)" }}
                onClick={(e) => {
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