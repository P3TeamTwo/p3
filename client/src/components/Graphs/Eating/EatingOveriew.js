import React from 'react';
import { GiPlantRoots, GiTreeBranch, GiPlantWatering, GiFruitTree, GiHotMeal, GiCook, GiWaterSplash, GiWaterFlask, GiWaterBottle, GiWaterGallon } from 'react-icons/gi';
import { BiFoodMenu } from 'react-icons/bi';
import { IoFastFood } from 'react-icons/io5';
import { Grid } from '@material-ui/core';

function eatingOverview({ entries, veg, meals, water }) {

    // Calculating how often a user eats veggies on average
    function veggiesServings() {
        for (var i = 0; i < entries.length; i++) {
            if (entries[i].q2_1 === 0) {
                veg.none += 1;
            } else if (entries[i].q2_1 === 1) {
                veg.one += 1;
            } else if (entries[i].q2_1 === 2) {
                veg.two += 1;
            } else if (entries[i].q2_1 === 3) {
                veg.three += 1;
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
            } else if (entries[i].q2_3 === 8){
                water.min += 1
            } else if (entries[i].q2_3 === 16){
                water.mid += 1
            } else if (entries[i].q2_3 === 24){
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

                <Grid item xs={4}  style={{textAlign: "center"}}>
                    {index === 'none' ? <div><GiTreeBranch style={{height:"25px", width:"25px"}}/><p>You don't eat your veggies!</p></div> : 
                    index === 'one' ? <div><GiPlantWatering style={{height:"25px", width:"25px"}}/><p>You eat 1 serving of veggies a day</p></div> : 
                    index === 'two' ? <div><GiPlantRoots style={{height:"25px", width:"25px"}}/><p>You eat 2 servings of veggies a day!</p></div> :
                    index === 'three' ? <div><GiFruitTree style={{height:"25px", width:"25px"}}/><p>You have 3 or more servings of veggies a day!</p></div> :
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
                    beat === 'min' ? <div><GiWaterFlask style={{height:"25px", width:"25px"}}/><p>You drink 8oz of water a day</p></div> :
                    beat === 'mid' ? <div><GiWaterBottle style={{height:"25px", width:"25px"}}/><p>You drink 16oz of water a day</p></div> :
                    beat === 'max' ? <div><GiWaterGallon style={{height:"25px", width:"25px"}}/><p>You drink over 24oz of water a day!</p></div> :
                    <div><GiWaterSplash style={{height:"25px", width:"25px"}}/><p>Not enough data to determin how much water you drink on average</p></div>}
                </Grid>

            </Grid>
        </div>
    )
}

export default eatingOverview;