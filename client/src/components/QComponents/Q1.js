import React from 'react';
import { Button } from '@material-ui/core';


function Q1(props) {
    return(
        <>
        <p>question 1</p>
        <Button variant="outlined" onClick={(e) => {props.handleSubmit(e, null, getQ1)}}>SUBMIT</Button>

        </>
        
    )
};

export default Q1;