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
  const [emotionPoints, setEmotionPoints] = useState(0)
  const [q1, setQ1] = useState('')
  const [q1Points, setQ1Points] = useState(0)
  const [q2, setQ2] = useState('')
  const [q2Points, setQ2Points] = useState(0)
  const [q3, setQ3] = useState('')
  const [q3Points, setQ3Points] = useState(0)
  const [q4, setQ4] = useState('')
  const [q4Points, setQ4Points] = useState(0)
  
  function renderMoodPoints() {
    // console.log(emotion)
    switch(emotion) {
        case '0':
        return setEmotionPoints(10);
        case '1': 
        return setEmotionPoints(20);
        case '2': 
        return setEmotionPoints(30);
        case '3':
        return setEmotionPoints(40);
        case '4':
        return setEmotionPoints(50);
        default:
        return setEmotionPoints(100);
    }
};


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

  // function handleSubmit (e, getEmotion, getQ1) {
    function handleSubmit (e, getEmotion) {

    e.preventDefault()

    if (moodVisible === true) {
     
      setEmotion(getEmotion)
      renderMoodPoints()
      console.log(emotionPoints)

      // API.save(getEmotion) example of how to save into db potentially

      setMoodVisible(false);
      setQ1Visible(true)
      // console.log(emotion)

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

                {moodVisible === true ? <MoodSlider handleSubmit={handleSubmit}/> :
                q1Visible === true ? <Q1 handleSubmit={handleSubmit}/> : 
                q2Visible === true ? <Q2 handleSubmit={handleSubmit}/> : 
                q3Visible === true ? <Q3 handleSubmit={handleSubmit}/> :
                q4Visible === true ? <Q4 handleSubmit={handleSubmit}/> : 
                <p>End of test</p>}

              </Paper>
            </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
export default DailyReflection;
