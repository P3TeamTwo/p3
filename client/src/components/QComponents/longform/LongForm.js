import React, { useState, useRef } from 'react';
import { Button, TextField } from '@material-ui/core';
import questions from '../../Questions/LongForm.json';
import Voice from './Recorder/Recorder';


const storeQuestions = []
questions.map(question => {
    let q = question.question;
    storeQuestions.push(q);
});

const randomQuestion = storeQuestions[Math.floor(storeQuestions.length * Math.random())];

function LongForm(props) {

    const [userResponse, setUserResponse] = useState();

    const handleChange = (e) => {
        setUserResponse(e.target.value);
    }

    return (
        <div >
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
                        props.handleSubmit(e, userResponse)
                    }
                    }>SUBMIT</Button>
            </form>
            <Voice />
        </div>
    )
}

export default LongForm;
