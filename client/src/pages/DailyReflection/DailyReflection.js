import React from 'react';
import './DailyReflection.css';
// Material UI imports
import { Grid, Paper, makeStyles, TextField } from '@material-ui/core';
// Import Navbar
import Navbar from '../../components/Navbar';
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
    <div>

      <Navbar/>

      <Grid className='containerPadding' container alignItems='center' justify='center' style={{ minHeight: "100vh" }}>
        <Grid container className='gridContainer' spacing={3}>
          {/* COLUMN */}
          <Grid className='gridPadding' item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <b>Daily Reflection</b>
              <p>How are you feeling today?</p>
              {/* Importing the mood slider */}
              <MoodSlider />
            </Paper>

            <Paper className={classes.paper}>
              <b>Radio buttons</b>
              {/* Importing the mood slider */}
              <RadioBtnQFormat />
            </Paper>

          </Grid>

          {/* COLUMN */}
          <Grid className='gridPadding' item xs={12} sm={6}>
            <Paper className={classes.paper}>
              {/* FORM */}
              <LongForm />
            </Paper>
          </Grid>

        </Grid>
      </Grid>

    </div>
  )
}


export default DailyReflection;
