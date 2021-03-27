import * as React from "react";
import { render } from "react-dom";
import Button from '@material-ui/core/Button';
import { FaMicrophoneAlt, FaMicrophoneAltSlash } from 'react-icons/fa';
import useRecorder from "./useRecorder";


import "./styles.css";

const Recorder = () => {
    let [audioURL, isRecording, startRecording, stopRecording] = useRecorder();
    return (
        <div>
            <div className="App">
                <audio src={audioURL} controls />

                    <Button
                        style={{paddingRight:'10px'}}
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
            </div>
        </div>
    )
}

export default Recorder
