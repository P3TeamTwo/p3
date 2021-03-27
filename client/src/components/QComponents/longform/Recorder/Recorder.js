import React, { useState,useRef } from "react";
import { render } from "react-dom";
import { Button, Box } from '@material-ui/core';
import { FaMicrophoneAlt, FaMicrophoneAltSlash, FaUnderline } from 'react-icons/fa';
import useRecorder from "./useRecorder";
import Player from "./Player";


import "./styles.css";

const Recorder = () => {
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
                button.current.innerHTML = "Stop listening";
                // main.current.classList.add("speaking");
            } else {
                setListen(!listening);
                recognition.stop();
                button.current.innerHTML = "Start listening";
                // main.classList.remove("speaking");
            }

            const onResult = event => {
                result.current.innerHTML = "";
                for (const res of event.results) {
                    const text = res[0].transcript;
                    const p = document.createElement("p");
                    if (res.isFinal) {
                        p.classList.add("final");
                    }
                    console.log(text)
                    if(text!=undefined){
                        console.log(typeof(text))
                        
                        result.current.innerHTML = text;
                    }
                }
            };

            recognition.continuous = true;
            recognition.interimResults = true;
            recognition.addEventListener("result", onResult);

            // button.addEventListener("click", () => {
            //     listening ? stop() : start();
            //     listening = !listening;
            // });
        }
    }





    return (
        <>
            <main>
                <button ref={button} onClick={Listen}>Start listening</button>
                <div ref={result}></div>
                <p ref={message} hidden aria-hidden="true">
                    Your browser doesn't support Speech Recognition. Sorry.
      </p>
            </main>

        </>
    )
}

export default Recorder
