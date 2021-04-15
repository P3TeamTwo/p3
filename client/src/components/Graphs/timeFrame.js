import React from 'react';
import Button from '@material-ui/core/Button'
import { Grid } from '@material-ui/core';

//import CSS file
import './timeFrame.css';


const TimeFrame = ({sevenDay, thirtyDay, allDays}) => {
    return (
        <div className="timeFrameContainer">
            <Grid container>
                <Grid item>
                    <h1>Select Timeframe:</h1>
                </Grid>
                <Grid item>
                    <Button className="sevenDayBtn" onClick={() => {sevenDay()}}>7 Days</Button>
                </Grid>
                <Grid item>
                    <Button className="thirtyDayBtn" onClick={() => {thirtyDay()}}>30 Days</Button>
                </Grid>
                <Grid item>
                    <Button className="allTimeBtn" onClick={() => {allDays()}}>All Time</Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default TimeFrame;