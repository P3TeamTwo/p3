import React from 'react';
import './DailyReflection.css';
// Material UI imports
import { Grid, Paper, makeStyles, TextField } from '@material-ui/core';
// Import mood slider
import MoodSlider from '../../components/MoodSlider';

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
        
        <Grid container alignItems='center' justify='center' style={{ minHeight: "100vh", paddingLeft: "150px", paddingRight: "150px"}}>

        
        <Grid container spacing={3}>

          {/* COLUMN */}
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
                <b>Daily Reflection</b>
            
            <p>How are you feeling today?</p>

            {/* Importing the mood slider */}
            <MoodSlider/>

            </Paper>
          </Grid>

          {/* COLUMN */}
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
            
            {/* FORM */}
            <form className={classes.root} noValidate autoComplete="off">

            <TextField
                id="outlined-multiline-static"
                label="Empty those thoughts a little:"
                multiline
                rows={4}
                variant="outlined"
                style={{ minWidth: "100%" }}
            />

            </form>

            </Paper>
          </Grid>
        </Grid>

        </Grid>
    )
}


export default DailyReflection;
