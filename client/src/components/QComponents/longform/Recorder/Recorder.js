import * as React from "react";
import { render } from "react-dom";
import { Button, Box } from '@material-ui/core';
import { FaMicrophoneAlt, FaMicrophoneAltSlash } from 'react-icons/fa';
import useRecorder from "./useRecorder";
import Player from "./Player";


import "./styles.css";

const Recorder = () => {
    let [audioURL, isRecording, startRecording, stopRecording] = useRecorder();
    const yourAudio = document.getElementById('yourAudio');



    return (
        <>
            <audio id="local" autoplay></audio>
            <Box display="flex" flexDirection="row-reversed">
                {audioURL ? <Player url={audioURL} /> : null}
                <Button
                    style={{ paddingRight: '10px' }}
                    variant="contained"
                    color={!isRecording ? "default" : 'secondary'}
                    onClick={startRecording}
                    startIcon={<FaMicrophoneAlt />}
                >
                    Voice Journal
      </Button>
                <Button
                    className="btn"
                    variant="contained"
                    // disabled={isRecording}
                    color={!isRecording ? "default" : 'secondary'}
                    onClick={stopRecording}
                    startIcon={<FaMicrophoneAltSlash />}
                >
                    Stop Recording
      </Button>
            </Box>
        </>
    )
}

export default Recorder
