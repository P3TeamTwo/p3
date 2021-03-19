import React, { useState } from 'react';
import './DailyReflection.css';
// Material UI imports
import { Grid, Paper, makeStyles } from '@material-ui/core';
// Import Navbar
// import Navbar from '../../components/Navbar';
// Import mood slider
import MoodSlider from '../../components/MoodSlider';
//Importing Radio button style quesetion format
import RadioBtnQFormat from '../../components/RadioBtnQFormat'
//importing long form style question format 
// import LongForm from '../../components/LongFormQFormat'

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

  const [radioValue, setRadioValue] = useState('');
  const [startQuiz, setStartQuiz] = useState(true);

  const handleChange = (event) => {
    setRadioValue(event.target.value);
  };

  // Function that will kick off the questions
  function startQuestions() {
    console.log("Mood slider submit has been clicked")
    setStartQuiz(false)
  }

  let view;
  if(startQuiz){
    view = <MoodSlider 
    handleClick={startQuestions}/>
  } else {
    view = <RadioBtnQFormat />
  }


  const classes = useStyles();
  return (
    <div>
      {/* <Navbar/> */}
      <Grid className='containerPadding' container alignItems='center' justify='center' style={{ minHeight: "100vh" }}>
        <Grid container className='gridContainer' spacing={3}>
          <Grid className='gridPadding' item xs={12} sm={6}>
            <Paper className={classes.paper}>
                {view}
              </Paper>
            </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
export default DailyReflection;
