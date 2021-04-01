import React from 'react';
import { GiNightSleep, GiCoffeeBeans, GiCoffeePot, GiSmartphone } from 'react-icons/gi';
import { SiBuymeacoffee, SiCoffeescript } from 'react-icons/si';
import { FaBed } from 'react-icons/fa';
import { Grid } from '@material-ui/core';


function sleepOverview({ sumOfSleep, totalNights, entries, coffeeTimes, screenTime }) {

    const AvgHours = (sumOfSleep / totalNights).toFixed(2);

    //Calculating what time of day the user consumes coffee
    function coffeeConsumptionTime() {
        for (var i = 0; i < entries.length; i++) {
            if (entries[i].q1_3 === 0) {
                coffeeTimes.none += 1;
            } else if (entries[i].q1_3 === 1) {
                coffeeTimes.min += 1;
            } else if (entries[i].q1_3 === 2) {
                coffeeTimes.mid += 1;
            } else if (entries[i].q1_3 === 3) {
                coffeeTimes.max += 1;
            }
        }
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
            if (entries[i].q1_2 === 'yes') {
                screenTime.yes += 1;
            } else if (entries[i].q1_2 === 'no') {
                screenTime.no += 1;
            }
        }
    }
    screenTimeAnalysis();

    let beat, equal = 0;
    for (const [key, value] of Object.entries(screenTime)) {
        if (value > equal) {
            equal = value;
            beat = key
        }
    };


    return (
        <div className="sleepStats">
            <Grid container >

                <Grid item xs={4}  style={{textAlign: "center"}}>
                    <GiNightSleep style={{height:"25px", width:"25px"}}/> 
                    {!AvgHours ? <p style={{maxWidth: "30ch"}}>Not enough data to determine average hours of sleep</p> : <p>On average you sleep {AvgHours} hours per night</p>} 
                </Grid>

                <Grid item xs={4}  style={{textAlign: "center" }}>
                    {index === 'none' ? <div><GiCoffeeBeans style={{height:"25px", width:"25px"}}/> <p>You drink no coffee!</p></div> :
                    index === 'min' ? <div><SiBuymeacoffee style={{height:"25px", width:"25px"}}/><p>On average you drink 1 cup of coffee a day</p></div> :
                    index === 'mid' ? <div><SiCoffeescript style={{height:"25px", width:"25px"}}/><p>On average you drink 2 cups of coffee a day</p></div> : 
                    index === 'max' ?  <div><GiCoffeePot style={{height:"25px", width:"25px"}}/><p>On average you drink 3 or more cups of coffee a day</p></div> :
                    <div><GiCoffeeBeans style={{height:"25px", width:"25px"}}/><p>Not enough data obtained to calculate your coffee statistic</p></div>}
                </Grid>

                <Grid item xs={4}  style={{textAlign: "center"}}>
                    {beat === 'yes' ? <div><GiSmartphone style={{height:"25px", width:"25px"}}/> <p>You often use your phone before bed</p></div> :
                    beat === 'no' ? <div><FaBed style={{height:"25px", width:"25px"}}/><p>You rarely use your phone before bed</p></div> :
                    <div><GiCoffeeBeans style={{height:"25px", width:"25px"}}/><p>Not enough data obtained to calculate your screen time statistic</p></div>}
                </Grid>

            </ Grid>
        </div >
    )
}

export default sleepOverview;