import React from 'react';
import { Button } from '@material-ui/core';


function Q1(props) {
    return(
        <>
        <p>question 1</p>
        <Button variant="outlined" onClick={props.handleSubmit}>SUBMIT</Button>

        </>
        
    )
};

export default Q1;