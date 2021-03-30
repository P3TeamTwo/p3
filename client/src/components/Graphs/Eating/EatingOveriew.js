import React from 'react';
import { BiCookie } from 'react-icons/bi';
import { Grid } from '@material-ui/core';

function eatingOverview({ entries, sumOfVeggies, totalNights, totalVeg }) {

    const AvgVeggies = sumOfVeggies / totalNights;
    console.log(AvgVeggies)


    // Calculating how long a user exercises for on average
    function veggiesServings() {
        for (var i = 0; i < entries.length; i++) {
            console.log(entries[i].q2_1)
            if (entries[i].q2_1 === 0) {
                veggiesServings.noVeggies += 1;
            } else if (entries[i].q2_1 === 2) {
                veggiesServings.two += 1;
            } else if (entries[i].q2_1 === 4) {
                veggiesServings.four += 1;
            }
        }
        console.log(veggiesServings)
    }
    veggiesServings();

    // Calcualting how long on average a user exercises
    let index, max = 0;
    for (const [key, value] of Object.entries(veggiesServings)) {
        if (value > max) {
            max = value;
            index = key
        }
    }


    return (
        <div className="VeggiesStats">
            <Grid container >
                <Grid item xs={4} style={{ textAlign: "center" }}>
                    <BiCookie style={{ height: "25px", width: "25px" }} />
                    {!AvgVeggies ? <p>Not enough data to determin average amount of veggies consumed</p> : <p>On average you eat  <strong>{AvgVeggies}</strong> Servings per night</p>}
                </Grid>
            </Grid>
        </div>
    )
}

export default eatingOverview;