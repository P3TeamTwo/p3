import React from 'react';


function sleepOverview({ sumOfSleep, totalNights, coffeeTimes }) {

    const AvgHours = sumOfSleep / totalNights;
    console.log("coffeeTimes:", coffeeTimes)

    // console.log(entries)

    return (
        <p>On average you sleep <strong>{AvgHours}</strong> hours per night</p>

    )
}

export default sleepOverview;