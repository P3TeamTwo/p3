import React from 'react';


function sleepOverview({ sumOfSleep, totalNights, entries, coffeeTimes, screenTime }) {

    const AvgHours = sumOfSleep / totalNights;
    let phoneTime;

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

    function screenTimeAnalysis(){
        for(var i = 0; i < entries.length; i++){
            if(entries[i].q1_2 === true){
                screenTime.true++
            } else if(entries[i].q1_2 === false){
                screenTime.false++
            }
        }
        if(true > false){
            phoneTime = "more"
        } else {
            phoneTime = "less"
                }
    }
    screenTimeAnalysis();


    return (
        <div>
            <p>On average you sleep <strong>{AvgHours}</strong> hours per night</p>
            {/* conditional for the users coffee consumption */}
            {index === 'noCoffee' ? <p>You haven't been drinking coffee often, if at all.</p> : <p>You've recently been drinking coffee mostly in the {index}</p>}
            <p>You spend {phoneTime} time on your phone each night than the opposite. </p>
        </div>
    )
}

export default sleepOverview;