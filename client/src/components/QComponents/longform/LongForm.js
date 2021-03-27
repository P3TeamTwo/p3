import React, { useState, useRef, useEffect } from 'react';
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
    const [textField, setTextField] = useState()

    const handleChange = (e) => {
        setUserResponse(e.target.value);
    }

    const voiceToText = (text) => {
        console.log(typeof (text))
        setTextField(text)
        setUserResponse(text);
    }



    return (
        <div >
            <form>
                <h2 style={{ marginBottom: '5%' }}>{randomQuestion} </h2>
                <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    variant="outlined"
                    style={{ minWidth: "100%" }}
                    value={textField}
                    onChange={(e) => {
                        handleChange(e)
                    }}
                />
                    <Voice speechText={voiceToText} />
                <Button variant="contained"
                    style={{ marginTop: '5%' }}
                    onClick={(e) => {
                        props.handleSubmit(e, userResponse)
                    }
                    }>SUBMIT</Button>
            </form>
            
        </div>
    )
}

export default LongForm;

