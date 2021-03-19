import React, { useState } from 'react';
import './DailyReflection.css';
// Material UI imports
import { Grid, Paper, makeStyles } from '@material-ui/core';
// Import Navbar
// import Navbar from '../../components/Navbar';
// Import mood slider
import MoodSlider from '../../components/QComponents/MoodSlider';
//Importing Radio button style quesetion format
// import RadioBtnQFormat from '../../components/DailyReflectionComponents/RadioBtnQFormat';
//importing long form style question format 
// import LongForm from '../../components/LongFormQFormat'

import Q1 from '../../components/QComponents/Q1';
import Q2 from '../../components/QComponents/Q2';
import Q3 from '../../components/QComponents/Q3';
import Q4 from '../../components/QComponents/Q4';
// import Welcome from '../../pages/Welcome/index';


import { Button } from '@material-ui/core';


// Importing the api for db
// import API from '../../utils/API';

const DailyReflection = () => {

  const [moodVisible, setMoodVisible] = useState(true)
  const [q1Visible, setQ1Visible] = useState(false)
  const [q2Visible, setQ2Visible] = useState(false)
  const [q3Visible, setQ3Visible] = useState(false)
  const [q4Visible, setQ4Visible] = useState(false)
  const [quizComplete, setQuizComplete] = useState(false)

  const [emotion, setEmotion] = useState('');




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

  function handleChange (e) {
    var emotionValue = e.target.value;
    setEmotion(emotionValue)
}

  function handleSubmit (e) {
    e.preventDefault()
    if (moodVisible === true) {

      handleChange()
      // setMoodVisible(false);
      // setQ1Visible(true)
      console.log(emotion)


    } else if (q1Visible === true) {
      setQ1Visible(false)
      setQ2Visible(true)
    } else if (q2Visible === true) {
      setQ2Visible(false)
      setQ3Visible(true)
    } else if (q3Visible === true) {
      setQ3Visible(false)
      setQ4Visible(true)
    } else if (q4Visible === true) {
      return <p>Test over</p>
    }
  };
  


  const classes = useStyles();
  return (
    <div>

      <Grid className='containerPadding' container alignItems='center' justify='center' style={{ minHeight: "100vh" }}>
        <Grid container className='gridContainer' spacing={3}>
          <Grid className='gridPadding'  item xs={12} sm={6}>
            <Paper className={classes.paper}>
                {/* {view} */}
                {/* <MoodSlider/> */}
                {moodVisible === true ? <MoodSlider/> :
                q1Visible === true ? <Q1/> : 
                q2Visible === true ? <Q2/> : 
                q3Visible === true ? <Q3/> :
                q4Visible === true ? <Q4/> : 
                <p>End of test</p>}
                <Button variant="outlined" onChange={handleChange} onClick={handleSubmit}>SUBMIT</Button>
              </Paper>
            </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
export default DailyReflection;
