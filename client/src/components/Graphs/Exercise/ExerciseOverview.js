import React from 'react';


function exerciseOverview({ entries, active, exerciseTime, heartrate }) {

    let heart;

    // Calculating how long a user exercises for on average
    function exerciseTimeFunc() {
        for (var i = 0; i < entries.length; i++) {
            console.log(entries[i].q3_3)
            if (entries[i].q3_3 === 0) {
                exerciseTime.noExercise += 1;
            } else if (entries[i].q3_3 === 30) {
                exerciseTime.thirty += 1;
            } else if (entries[i].q3_3 === 60) {
                exerciseTime.hour += 1;
            } else if (entries[i].q3_3 === 100) {
                exerciseTime.more += 1;
            }
        }
        console.log(exerciseTime)
    }
    exerciseTimeFunc();
    
    // Calcualting how long on average a user exercises
    let index, max = 0;
    for (const [key, value] of Object.entries(exerciseTime)) {
        if (value > max) {
            max = value;
            index = key
        }
    }
    
    // Calculating what time of day the user consumes coffee
    function activeFunc() {
        for (var i = 0; i < entries.length; i++) {
            console.log(entries[i].q3_1)
            if (entries[i].q3_1 === 'Cardio') {
                active.cardio += 1;
            } else if (entries[i].q3_1 === 'Weights') {
                active.weights += 1;
            } else if (entries[i].q3_1 === 'Rest day') {
                active.rest += 1;
            } else if (entries[i].q3_1 === `I don't workout`) {
                active.zero += 1;
            }
        }
        console.log(active)
    }
    activeFunc();

    // Calcualting how what exercise a user performs on average
    let activity, total = 0;
    for (const [key, value] of Object.entries(active)) {
        if (value > total) {
            total = value;
            activity = key
        }
    }

    // Calculating how often a user raises their heartrate
    function heartrateAnalysis(){
        for(var i = 0; i < entries.length; i++){
            if(entries[i].q3_2 === true){
                heartrate.true += 1
            } else {
                heartrate.false += 1
            }
        }
    }
    heartrateAnalysis();

    // Calcualting on average how often a user raises their heartrate
    let beat, equal = 0;
    for (const [key, value] of Object.entries(heartrate)) {
        if (value > equal) {
            equal = value;
            beat = key
        }
    }


    return (
        <div>

            {activity === 'Cardio' ? <p>Our data shows that you enjoy cardio!</p> :
            activity === 'Weights' ? <p>Our data shows that you enjoy lifting weights!</p> :
            activity === 'Rest day' ? <p>Our data shows that you have more rest days than exercise days.</p> : 
            activity === `I don't workout` ? <p>Our data shows that you do not workout</p> :
            <p>Not enough data obtained to calculate your workout statistic</p>}

            {index === 'thirty' ? <p>You have recently been exercising for 30 minutes a day.</p> : 
            index === 'hour' ? <p>You have recently been exercising for an hour a day</p> : 
            index === 'more' ? <p>You have recently been exercising for more than an hour a day!</p> :
            index === 'noExercise' ? <p>You haven't been exercising often, if at all.</p> :
            <p>Not enough data obtained to calculate how long you workout for</p>}

            {beat === true ? <p>You often raise your heartrate</p> :
            beat === false ? <p>You do not raise your heartrate</p> :
            <p>Not enough data collected to determin the on average how often you raise your heartrate</p>}

        </div>
    )
}

export default exerciseOverview;