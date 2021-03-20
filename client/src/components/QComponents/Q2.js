import React from 'react';
import { Button } from '@material-ui/core';


function Q2(props) {
    return(
        <>
        <p>question 2</p>
        <Button variant="outlined" onClick={props.handleSubmit}>SUBMIT</Button>

        </>
    )
};

export default Q2;