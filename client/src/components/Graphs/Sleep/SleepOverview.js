import React from 'react';
import { GiNightSleep, GiCoffeeCup, GiSmartphone } from 'react-icons/gi';
import { Grid } from '@material-ui/core';


function sleepOverview({ sumOfSleep, totalNights, entries, coffeeTimes, screenTime }) {

    const AvgHours = sumOfSleep / totalNights;
    console.log(AvgHours)
    let phoneTime;
    let otherTime;

    //Calculating what time of day the user consumes coffee
    function coffeeConsumptionTime() {
        for (var i = 0; i < entries.length; i++) {
            console.log(entries[i].q1_3)
            if (entries[i].q1_3 === 0) {
                coffeeTimes.noCoffee += 1;
            } else if (entries[i].q1_3 === 3) {
                coffeeTimes.morning += 1;
            } else if (entries[i].q1_3 === 6) {
                coffeeTimes.afternoon += 1;
            } else if (entries[i].q1_3 === 9) {
                coffeeTimes.evening += 1;
            }
        }
        console.log(coffeeTimes)
    }
    coffeeConsumptionTime();
    //calcualting which time of day is most common for the user to drink coffee
    let index, max = 0;
    for (const [key, value] of Object.entries(coffeeTimes)) {
        if (value > max) {
            max = value;
            index = key
        }
    }

    function screenTimeAnalysis() {
        for (var i = 0; i < entries.length; i++) {
            if (entries[i].q1_2 === true) {
                screenTime.true++
            } else if (entries[i].q1_2 === false) {
                screenTime.false++
            }
        }
        if (true > false) {
            phoneTime = "more"
            otherTime = "not on it."
        } else {
            phoneTime = "less"
            otherTime = "on it."
        }
    }
    screenTimeAnalysis();


    return (
        <div className="sleepStats">
            <Grid container >
                <Grid item xs={4}  style={{textAlign: "center"}}>
                    <GiNightSleep style={{height:"25px", width:"25px"}}/> 
                    {!AvgHours ? <p>Not enough data to determine average hours of sleep</p> : <p>On average you sleep <strong>{AvgHours}</strong> hours per night</p>} 
                </Grid>
                <Grid item xs={4} style={{textAlign: "center"}}>
                    <GiCoffeeCup style={{height:"25px", width:"25px"}} />
                    {/* conditional for the users coffee consumption */}
                    {index === 'noCoffee' ? <p>You haven't been drinking coffee often, if at all.</p> : <p>You've been drinking coffee mostly in the {index}</p>}
                </Grid>
                <Grid item xs={4}  style={{textAlign: "center"}}>
                    <GiSmartphone  style={{height:"25px", width:"25px"}}/>
                    <p>You spend {phoneTime} nights on your phone before bed than {otherTime} </p>
                </Grid>
            </ Grid>
        </div >
    )
}

export default sleepOverview;