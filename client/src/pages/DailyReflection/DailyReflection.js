import React from 'react';
import './DailyReflection.css';
// Material UI imports
import { Grid, Paper, makeStyles, TextField } from '@material-ui/core';
// Import mood slider
import MoodSlider from '../../components/MoodSlider';
//Importing Radio button style quesetion format
import RadioBtnQFormat from '../../components/RadioBtnQFormat'
//importing long form style question format 
import LongForm from '../../components/LongFormQFormat'

const DailyReflection = () => {

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

  const classes = useStyles();

  return (

    <Grid container alignItems='center' justify='center' style={{ minHeight: "100vh", paddingLeft: "150px", paddingRight: "150px" }}>
      <Grid container spacing={3}>
        {/* COLUMN */}
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <b>Daily Reflection</b>
            <p>How are you feeling today?</p>
            {/* Importing the mood slider */}
            <MoodSlider />
          </Paper>
        </Grid>


        {/* COLUMN */}
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            {/* FORM */}
            <LongForm />
          </Paper>
        </Grid>


        {/* COLUMN */}
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <b>Radio buttons</b>
            {/* Importing the mood slider */}
            <RadioBtnQFormat />
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  )
}
// test

export default DailyReflection;
