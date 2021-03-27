import React, { useState, useRef } from "react";
import { render } from "react-dom";
import { Button, Box } from '@material-ui/core';
import { FaMicrophoneAlt, FaMicrophoneAltSlash, FaUnderline} from 'react-icons/fa';
import useRecorder from "./useRecorder";
import Player from "./Player";



import "./styles.css";

const Recorder = (props) => {
    // let [audioURL, isRecording, startRecording, stopRecording] = useRecorder();
    // const yourAudio = document.getElementById('yourAudio');

    const button = useRef(null);
    const result = useRef(null);
    const main = useRef(null);
    const message = useRef(null);

    const [listening, setListen] = useState(false);
    const Listen = () => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
        if (typeof SpeechRecognition === "undefined") {
            button.remove();
            message.removeAttribute("hidden");
            message.setAttribute("aria-hidden", "false");
        } else {
            console.log('hi')
            const recognition = new SpeechRecognition();

            if (!listening) {
                setListen(!listening);
                recognition.start();
            } else {
                setListen(!listening);
                recognition.stop();
            }

            const onResult = event => {
                result.current.innerHTML = "";
                console.log(event)
                for (const res of event.results) {
                    console.log(res)
                    const text = res[0].transcript;
                    console.log(text)
                    localStorage.setItem("memoText", text)
                    props.speechText(text)
                    if (text != undefined) {
                        result.current.innerHTML = text;
                    }
                }
            };

            recognition.continuous = true;
            recognition.interimResults = true;
            recognition.addEventListener("result", onResult);
        }
    }





    return (
        <>
            <main ref={main}>
                {/* <button ref={button} onClick={Listen}>Start listening</button> */}
                <FaMicrophoneAlt ref={button} onClick={Listen} size={30} color = {listening? 'red':'grey' }/>
                <div ref={result}></div>
                <p ref={message} hidden aria-hidden="true">
                    Your browser doesn't support Speech Recognition. Sorry.
      </p>
            </main>

        </>
    )
}

export default Recorder
