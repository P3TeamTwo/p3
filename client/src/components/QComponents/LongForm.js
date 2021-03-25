import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import questions from '../../Questions.json';



function LongForm(props) {

    const [userResponse, setUserResponse] = useState();

    const handleChange = (e) => {
        setUserResponse(e.target.value);

    }

    const storeQuestions = questions[4].LongForm
    const randomQuestion = storeQuestions[Math.floor(storeQuestions.length * Math.random())];

    return (
        <form>
            <TextField
                id="outlined-multiline-static"
                label={randomQuestion}
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
                    props.handleSubmit(e, userResponse)
                }
                }>SUBMIT</Button>

        </form>

    )
}

export default LongForm;
