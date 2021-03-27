import React, { useState, useRef } from "react";
import { render } from "react-dom";
import { Button, Box } from '@material-ui/core';
import { FaMicrophoneAlt, FaMicrophoneAltSlash, FaUnderline } from 'react-icons/fa';
import useRecorder from "./useRecorder";
import Player from "./Player";



import "./styles.css";

const Recorder = (props) => {
    let [audioURL, isRecording, startRecording, stopRecording] = useRecorder();
    // const yourAudio = document.getElementById('yourAudio');



    const [speech, setSpeech] = useState(false);

    const [listening, setListen] = useState(false);
    const Listen = () => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
        if (typeof SpeechRecognition === "undefined") {
            alert("Error Accessing Your Microphone")
        } else {
            const recognition = new SpeechRecognition();

            if (!listening) {
                setListen(!listening);
                startRecording()
                recognition.start();

            } else {
                stopRecording()
                setSpeech(true)
                setListen(!listening);
                recognition.stop();
            }

            const onResult = event => {
                console.log(event)
                for (const res of event.results) {
                    const text = res[0].transcript;
                    localStorage.setItem("memoText", text)
                    props.speechText(text)
                }
            };

            recognition.continuous = true;
            recognition.interimResults = true;
            recognition.addEventListener("result", onResult);
        }
    }





    return (

        <Box display="flex" justifyContent="center">

            <FaMicrophoneAlt onClick={Listen} size={30} color={listening ? 'red' : 'grey'} />

            {speech && <Player url={audioURL} />}

        </Box>

    )
}

export default Recorder
