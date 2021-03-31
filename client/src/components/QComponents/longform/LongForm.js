import React, { useState, useRef, useEffect } from 'react';
import { Button, Box, TextField } from '@material-ui/core';
import questions from '../../Questions/LongForm.json';
import Voice from './Recorder/Recorder';


const storeQuestions = []
questions.map(question => {
    let q = question.question;
    storeQuestions.push(q);
});

const randomQuestion = storeQuestions[Math.floor(storeQuestions.length * Math.random())];
localStorage.setItem("longFormQuestion", randomQuestion)

function LongForm(props) {

    const [userResponse, setUserResponse] = useState();
    const [textField, setTextField] = useState()

    const handleChange = (e) => {
        setUserResponse(e.target.value);
    }

    const voiceToText = (text) => {
        setTextField(text)
        setUserResponse(text);
    }



    return (
        <div >
            <form>
                <b style={{ marginBottom: '5%' }}>{randomQuestion}</b> 
                <Box m={2}>
                <Voice speechText={voiceToText}  />
                </Box>
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
                <Button variant="container"
                    style={{ marginTop: '5%', boxShadow: "5px 5px 10px rgba(0,0,0,0.2)" }}
                    onClick={(e) => {
                        if (!userResponse) {
                            return;
                        } else {
                            props.handleSubmit(e, userResponse)
                        }
                        
                    }
                    }>SUBMIT</Button>
            </form>
            
            
        </div>
    )
}

export default LongForm;

