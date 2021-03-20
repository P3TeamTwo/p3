import React from 'react';
import { Button } from '@material-ui/core';

function Q4(props) {
    return(
        <>
        <p>question 4</p>
        <Button variant="outlined" onClick={props.handleSubmit}>SUBMIT</Button>

        </>
    )
};

export default Q4;