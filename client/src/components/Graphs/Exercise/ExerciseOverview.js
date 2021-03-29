import React from 'react';


function exerciseOverview({ sumOfExercise, entries, exerciseTime, heartrate }) {

    // const AvgHours = sumOfExercise / totalNights;
    let heart;

    //Calculating what time of day the user consumes coffee
    function exerciseTime() {
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
    exerciseTime();

    //calcualting how long on average a user exercises
    let index, max = 0;
    for (const [key, value] of Object.entries(exerciseTime)) {
        if (value > max) {
            max = value;
            index = key
        }
    }

    function heartrateAnalysis(){
        for(var i = 0; i < entries.length; i++){
            if(entries[i].q3_2 === true){
                heartrate.true++
            } else if(entries[i].q3_2 === false){
                heartrate.false++
            }
        }
        if(true > false){
            heart = "raise"
        } else {
            heart = "dont raise"
                }
    }
    heartrateAnalysis();


    return (
        <div>
            {/* <p>On average you workout for <strong>{AvgHours}</strong> hours a day</p> */}

            {/* conditional for the users exercise */}
            {index === 'thirty' ? <p>You have recently been exercising for {index} minutes a day.</p> : 
            index === 'hour' ? <p>You have recently been exercising for an {index} a day</p> : 
            index === 'more' ? <p>You have recently been exercising for more than an hour a day!</p> : 
            index === 'noExercise' ? <p>You haven't been exercising often, if at all.</p> : null}

            <p>You often {heart} your heartrate. </p>
        </div>
    )
}

export default exerciseOverview;