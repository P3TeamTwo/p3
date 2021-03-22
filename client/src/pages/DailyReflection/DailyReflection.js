//  comment for deploying

import React, { useState, useEffect } from 'react';
import './DailyReflection.css';
// Material UI imports
import { Grid, Paper, makeStyles } from '@material-ui/core';

// Import question components
import MoodSlider from '../../components/QComponents/MoodSlider';
import Q1 from '../../components/QComponents/Q1';
import Q2 from '../../components/QComponents/Q2';
import Q3 from '../../components/QComponents/Q3';
import Q4 from '../../components/QComponents/Q4';

// Importing the api for db
// import API from '../../utils/API';

const DailyReflection = () => {

  // State that checks what component to render
  const [moodVisible, setMoodVisible] = useState(true)
  const [q1Visible, setQ1Visible] = useState(false)
  const [q2Visible, setQ2Visible] = useState(false)
  const [q3Visible, setQ3Visible] = useState(false)
  const [q4Visible, setQ4Visible] = useState(false)
  const [quizComplete, setQuizComplete] = useState(false)


  // State that stores value from answer
  const [emotion, setEmotion] = useState('2');
  const [q1, setQ1] = useState('')
  const [q2, setQ2] = useState('')
  const [q3, setQ3] = useState('')
  const [q4, setQ4] = useState('')
  // State that stores the points
  const [emotionPoints, setEmotionPoints] = useState(30)
  const [q1Points, setQ1Points] = useState(0)
  const [q2Points, setQ2Points] = useState(0)
  const [q3Points, setQ3Points] = useState(0)
  const [q4Points, setQ4Points] = useState(0)

  
  // calculateScore 
  const [finalScore, setFinalScore] = useState(0);

  // Set points for current mood
  function renderMoodPoints() {
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
        return setEmotion('2') + setEmotionPoints(30);
    }
};

// Set points for Q1
function renderQ1Points() {
  setQ1(q1)
  console.log('q1',q1)
  switch(q1) {
      case 'true':
      return setQ1Points(100);
      case 'false': 
      return setQ1Points(50);
      default:
      return setQ1Points(0);
  }
};

// Set points for Q2
function renderQ2Points() {
  setQ2(q2)
  console.log('q2',q2)
  switch(q2) {
      case 'true':
      return setQ2Points(100);
      case 'false': 
      return setQ2Points(50);
      default:
      return setQ2Points(0);
  }
};

// Set points for Q2
function renderQ3Points() {
  setQ3(q3)
  console.log('q3',q3)
  switch(q3) {
      case 'true':
      return setQ3Points(100);
      case 'false': 
      return setQ3Points(50);
      default:
      return setQ3Points(0);
  }
};

// Set points for Q2
function renderQ4Points() {
  setQ4(q4)
  console.log('q4',q4)
  switch(q4) {
      case 'true':
      return setQ4Points(100);
      case 'false': 
      return setQ4Points(50);
      default:
      return setQ4Points(0);
  }
};



// Run switch case once emotion has been set
useEffect(() => {
        
  renderMoodPoints()
}, [emotion]);

// Run the switch case once q1 has been set
useEffect(() => {
        
  renderQ1Points()
}, [q1]);

// Run the switch case once q2 has been set
useEffect(() => {
        
  renderQ2Points()
}, [q2]);

// Run the switch case once q3 has been set
useEffect(() => {
        
  renderQ3Points()
}, [q3]);

// Run the switch case once q3 has been set
useEffect(() => {
        
  renderQ4Points()
}, [q4]);

  // Function to handle what happens when the submit button is clicked
  function handleSubmit (e, getEmotion, getQ1, getQ2, getQ3, getQ4) {
  
    // Do not submit until checks have completed
    e.preventDefault()

    if (moodVisible === true) {
      
      setEmotion(getEmotion)
      // API.save(getEmotion) example of how to save into db potentially

      setMoodVisible(false);
      setQ1Visible(true)

    } else if (q1Visible === true) {
      
      setQ1(getQ1)

      setQ1Visible(false)
      setQ2Visible(true)

    } else if (q2Visible === true) {

      setQ2(getQ2)

      setQ2Visible(false)
      setQ3Visible(true)

    } else if (q3Visible === true) {

      setQ3(getQ3)

      setQ3Visible(false)
      setQ4Visible(true)

    } else if (q4Visible === true) {

      setQ4(getQ4)

      setQ4Visible(false)
      setQuizComplete(true)
        
    }
  };

  if (quizComplete) {
    tallyScore(emotionPoints, q1Points, q2Points, q3Points, q4Points)
  }

  function tallyScore(slider, q1p, q2p, q3p, q4p) {
    let totalPoints = slider + q1p + q2p + q3p + q4p 
    console.log('user total points is: ', totalPoints)
    // setFinalScore(slider + q1p + q2p + q3p + q4p)
  }
  
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

      <Grid className='containerPadding' container alignItems='center' justify='center' style={{ minHeight: "100vh" }}>
        <Grid container className='gridContainer' spacing={3}>
          <Grid className='gridPadding'  item xs={12} sm={6}>
            <Paper className={classes.paper}>

                {/* dynamically render components */}
                {moodVisible === true ? <MoodSlider handleSubmit={handleSubmit}/> :
                q1Visible === true ? <Q1 handleSubmit={handleSubmit}/> : 
                q2Visible === true ? <Q2 handleSubmit={handleSubmit}/> : 
                q3Visible === true ? <Q3 handleSubmit={handleSubmit}/> :
                q4Visible === true ? <Q4 handleSubmit={handleSubmit}/> : 
                quizComplete === true ? <p>completed quiz</p> : null}

              </Paper>
            </Grid>
        </Grid>
      </Grid>
    </div>
  )
};

export default DailyReflection;
