import React from 'react';
import { GiTimeTrap, GiSandsOfTime, GiEmptyHourglass, GiRun, GiWeightLiftingUp, GiSofa, GiGymBag, GiHeartBeats, GiHeartDrop, GiGlassHeart, GiBrokenHeart, GiCrownedHeart, GiPerson } from 'react-icons/gi';
import { Grid } from '@material-ui/core';

function exerciseOverview({ entries, active, exerciseTime, calories }) {

    // Calculating how long a user exercises for on average
    function exerciseTimeFunc() {
        for (var i = 0; i < entries.length; i++) {
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
    };
    exerciseTimeFunc();
    
    let index, max = 0;
    for (const [key, value] of Object.entries(exerciseTime)) {
        if (value > max) {
            max = value;
            index = key
        }
    };
    
    // Calculating what time of day the user consumes coffee
    function activeFunc() {
        for (var i = 0; i < entries.length; i++) {
            console.log(entries[i].q3_1)
            if (entries[i].q3_1 === 'cardio') {
                active.cardio += 1;
            } else if (entries[i].q3_1 === 'weights') {
                active.weights += 1;
            } else if (entries[i].q3_1 === 'rest') {
                active.rest += 1;
            } else if (entries[i].q3_1 === 'zero') {
                active.zero += 1;
            }
        }
        console.log(active)
    };
    activeFunc();

    let activity, total = 0;
    for (const [key, value] of Object.entries(active)) {
        if (value > total) {
            total = value;
            activity = key
        }
    };

    // Calculating how much calories a user burns on average
    function caloriesAnalysis(){
        for(var i = 0; i < entries.length; i++){
            console.log(entries[i].q3_2)
            if(entries[i].q3_2 === '0'){
                calories.none += 1
            } else if (entries[i].q3_2 === 100){
                calories.min += 1
            } else if (entries[i].q3_2 === 200){
                calories.midOne += 1
            } else if (entries[i].q3_2 === 300){
                calories.midTwo += 1
            } else if (entries[i].q3_2 === 400){
                calories.max += 1
            }
        }
    };
    caloriesAnalysis();

    let beat, equal = 0;
    for (const [key, value] of Object.entries(calories)) {
        if (value > equal) {
            equal = value;
            beat = key
        }
    };


    return (
        <div className="exerciseStats">
            <Grid container >
                <Grid item xs={4}  style={{textAlign: "center"}}>
                    {activity === 'cardio' ? <div><GiRun style={{height:"25px", width:"25px"}}/> <p>You enjoy cardio!</p></div> :
                    activity === 'weights' ? <div><GiWeightLiftingUp style={{height:"25px", width:"25px"}}/><p>You enjoy lifting weights!</p></div> :
                    activity === 'rest' ? <div><GiSofa style={{height:"25px", width:"25px"}}/><p>You have more rest days than exercise days</p></div> : 
                    activity === 'zero' ?  <div><GiPerson style={{height:"25px", width:"25px"}}/><p>Our data shows that you do not workout</p></div> :
                    <div><GiGymBag style={{height:"25px", width:"25px"}}/><p>Not enough data obtained to calculate your workout statistic</p></div>}
                </Grid>
                
                <Grid item xs={4}  style={{textAlign: "center"}}>
                    {index === 'thirty' ? <div><GiTimeTrap style={{height:"25px", width:"25px"}}/><p>On average you exercise for 30 minutes a day.</p></div> : 
                    index === 'hour' ? <div><GiTimeTrap style={{height:"25px", width:"25px"}}/><p>On average you exercise for an hour a day</p></div> : 
                    index === 'more' ? <div><GiTimeTrap style={{height:"25px", width:"25px"}}/><p>On average you exercise for more than an hour a day!</p></div> :
                    index === 'noExercise' ? <div><GiEmptyHourglass style={{height:"25px", width:"25px"}}/><p>You haven't been exercising often, if at all.</p></div> :
                    <div><GiSandsOfTime style={{height:"25px", width:"25px"}}/><p>Not enough data obtained to calculate how long you workout for</p></div>}
                </Grid>

                <Grid item xs={4}  style={{textAlign: "center"}}>
                    {beat === 'none' ? <div><GiBrokenHeart style={{height:"25px", width:"25px"}}/><p>You have burned no calories</p></div> :
                    beat === 'min' ? <div><GiHeartDrop style={{height:"25px", width:"25px"}}/><p>You burn an average of 100 calories a day</p></div> :
                    beat === 'midOne' ? <div><GiGlassHeart style={{height:"25px", width:"25px"}}/><p>You burn an average of 200 calories a day</p></div> :
                    beat === 'midTwo' ? <div><GiHeartBeats style={{height:"25px", width:"25px"}}/><p>You burn an average of 300 calories a day</p></div> :
                    beat === 'max' ? <div><GiCrownedHeart style={{height:"25px", width:"25px"}}/><p>You burn an average of 400 calories a day</p></div> :
                    <div><GiBrokenHeart style={{height:"25px", width:"25px"}}/><p>Not enough data to determin how much calories you burn on average</p></div>}
                </Grid>
            </Grid>
        </div>
    )
};

export default exerciseOverview;