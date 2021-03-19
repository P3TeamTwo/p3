import React, { useState } from 'react';
import './MoodSlider.css';
import { MdSentimentVeryDissatisfied, MdSentimentDissatisfied, MdSentimentNeutral, MdSentimentSatisfied, MdSentimentVerySatisfied } from 'react-icons/md';
import { Button } from '@material-ui/core';

const MoodSlider = ({}) => {

const [emotion, setEmotion] = useState('');

function handleChange (e) {
    var emotionValue = e.target.value;
    setEmotion(emotionValue)
    // console.dir(e.target)
}

// 0 = MdSentimentVeryDissatisfied
// 1 = MdSentimentDissatisfied
// 2 = MdSentimentNeutral
// 3 = MdSentimentSatisfied
// 4 = MdSentimentVerySatisfied
    

    function renderSwitch() {
        console.log(typeof emotion)
        switch(emotion) {
            case '0':
            return <div><MdSentimentVeryDissatisfied className='material-icons'/> <p>Very Unhappy</p></div>;
            case '1': 
            return <div><MdSentimentDissatisfied className='material-icons'/> <p>Unhappy</p></div>;
            case '2': 
            return <div><MdSentimentNeutral className='material-icons'/> <p>Ok</p></div>;
            case '3':
            return <div><MdSentimentSatisfied className='material-icons'/> <p>Happy</p></div>;
            case '4':
            return <div><MdSentimentVerySatisfied className='material-icons'/><p>Very Happy</p></div>;
            default:
            return <div><MdSentimentNeutral className='material-icons'/> <p>Ok</p></div>;
        }
    };

    
    return (
        <div className='container'>
        <div>{renderSwitch()}</div>
        <input onChange={handleChange} type='range' min='0' max='4' defaultValue='2' id='slider'/>
        <Button variant="outlined">SUBMIT</Button>
        </div>

    );
};

export default MoodSlider;
