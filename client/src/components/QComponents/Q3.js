import React from 'react';
import { Button } from '@material-ui/core';


function Q3(props) {
    return(
        <>
        <p>question 3</p>
        <Button variant="outlined" onClick={props.handleSubmit}>SUBMIT</Button>

        </>
    )
};

export default Q3;