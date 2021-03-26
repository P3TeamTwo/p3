import React from 'react'
// set up basic variables for app


const Voice = () => {



    return (
        <div >
            <div id="controls">
                <button id="recordButton">Record</button>
                <button id="pauseButton" disabled>Pause</button>
                <button id="stopButton" disabled>Stop</button>
            </div>
            <div id="formats"></div>
            <p><strong>Recordings:</strong></p>
            <ol id="recordingsList"></ol>
        </div>
    )
}

export default Voice
