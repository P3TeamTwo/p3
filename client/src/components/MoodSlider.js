import React, { useState } from 'react';
import './MoodSlider.css';
import { MdSentimentVeryDissatisfied, MdSentimentDissatisfied, MdSentimentNeutral, MdSentimentSatisfied, MdSentimentVerySatisfied } from 'react-icons/md';

const MoodSlider = () => {

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
            return <MdSentimentVeryDissatisfied className='material-icons'/>;
            case '1': 
            return <MdSentimentDissatisfied className='material-icons'/>;
            case '2': 
            return <MdSentimentNeutral className='material-icons'/>;
            case '3':
            return <MdSentimentSatisfied className='material-icons'/>;
            case '4':
            return <MdSentimentVerySatisfied className='material-icons'/>;
            default:
            return <MdSentimentNeutral className='material-icons'/>;
        }
    };


    
    return (
        <div className='container'>
        <div>{renderSwitch()}</div>
        <input onChange={handleChange} type='range' min='0' max='4' defaultValue='2' id='slider'/>
        </div>
    );
};

export default MoodSlider;
