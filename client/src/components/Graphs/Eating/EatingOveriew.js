import React from 'react';
import { GiPlantRoots, GiTreeBranch, GiPlantWatering, GiHotMeal, GiCook, GiWaterSplash, GiWaterFlask, GiWaterBottle, GiWaterGallon } from 'react-icons/gi';
import { BiFoodMenu } from 'react-icons/bi';
import { IoFastFood } from 'react-icons/io5';
import { Grid } from '@material-ui/core';

function eatingOverview({ entries, veg, meals, water }) {

    // Calculating how often a user eats veggies on average
    function veggiesServings() {
        for (var i = 0; i < entries.length; i++) {
            if (entries[i].q2_1 === 0) {
                veg.none += 1;
            } else if (entries[i].q2_1 === 2) {
                veg.two += 1;
            } else if (entries[i].q2_1 === 4) {
                veg.four += 1;
            }
        }
    };
    veggiesServings();

    let index, max = 0;
    for (const [key, value] of Object.entries(veg)) {
        if (value > max) {
            max = value;
            index = key
        }
    };

    // Calculating how often a user eats at home vs eats out
    function mealsFunc() {
        for (var i = 0; i < entries.length; i++) {
            if (entries[i].q2_2 === 0) {
                meals.never += 1;
            } else if (entries[i].q2_2 === 3) {
                meals.half += 1;
            } else if (entries[i].q2_2 === 7) {
                meals.night += 1;
            }
        }
    };
    mealsFunc();

    let activity, total = 0;
    for (const [key, value] of Object.entries(meals)) {
        if (value > total) {
            total = value;
            activity = key
        }
    };

    // Calculating how often a user drinks 8oz glasses of water on average
    function waterAnalysis(){
        for(var i = 0; i < entries.length; i++){
            if(entries[i].q3_2 === 0){
                water.none += 1
            } else if (entries[i].q2_3 === 4){
                water.min += 1
            } else if (entries[i].q2_3 === 8){
                water.mid += 1
            } else if (entries[i].q2_3 === 10){
                water.max += 1
            }
        }
    };
    waterAnalysis();

    let beat, equal = 0;
    for (const [key, value] of Object.entries(water)) {
        if (value > equal) {
            equal = value;
            beat = key
        }
    };


    return (
        <div className="VeggiesStats">
            <Grid container >
                {/* <Grid item xs={4} style={{ textAlign: "center" }}>
                    <GiPlantRoots style={{ height: "25px", width: "25px" }} />
                    {!AvgVeggies ? <p>Not enough data to determin average amount of veggies consumed</p> : <p>On average you eat  <strong>{AvgVeggies}</strong> Servings per night</p>}
                </Grid> */}

                <Grid item xs={4}  style={{textAlign: "center"}}>
                    {index === 'none' ? <div><GiTreeBranch style={{height:"25px", width:"25px"}}/><p>You don't eat your veggies!</p></div> : 
                    index === 'two' ? <div><GiPlantWatering style={{height:"25px", width:"25px"}}/><p>You have two servings of veggies a day</p></div> : 
                    index === 'four' ? <div><GiPlantRoots style={{height:"25px", width:"25px"}}/><p>You have four or more servings of veggies a day!</p></div> :
                    <div><GiTreeBranch style={{height:"25px", width:"25px"}}/><p>Not enough data obtained to calculate your veggie intake</p></div>}
                </Grid>

                <Grid item xs={4}  style={{textAlign: "center"}}>
                    {activity === 'never' ? <div><IoFastFood style={{height:"25px", width:"25px"}}/> <p>You eat out more on average</p></div> :
                    activity === 'half' ? <div><GiHotMeal style={{height:"25px", width:"25px"}}/><p>You have an even split between cooking at home and eating out</p></div> :
                    activity === 'night' ? <div><GiCook style={{height:"25px", width:"25px"}}/><p>You eat more home cooked meals on average</p></div> : 
                    <div><BiFoodMenu style={{height:"25px", width:"25px"}}/><p>Not enough data obtained to calculate your meal statistic</p></div>}
                </Grid>

                <Grid item xs={4}  style={{textAlign: "center"}}>
                    {beat === 'none' ? <div><GiWaterSplash style={{height:"25px", width:"25px"}}/><p>You don't drink enough water!</p></div> :
                    beat === 'min' ? <div><GiWaterFlask style={{height:"25px", width:"25px"}}/><p>You drink 3-5 ounces of water a day</p></div> :
                    beat === 'mid' ? <div><GiWaterBottle style={{height:"25px", width:"25px"}}/><p>You drink at least 8 ounces of water a day</p></div> :
                    beat === 'max' ? <div><GiWaterGallon style={{height:"25px", width:"25px"}}/><p>You drink over 10 ounces of water a day!</p></div> :
                    <div><GiWaterSplash style={{height:"25px", width:"25px"}}/><p>Not enough data to determin how much water you drink on average</p></div>}
                </Grid>

            </Grid>
        </div>
    )
}

export default eatingOverview;